import React, { useState, useEffect } from 'react'
import { uploadImage } from '../firebase/client'
import { colors } from '../styles/StyleGlobal'
import firebase from 'firebase'

const DRAG_IMG_STATES = {
  ERROR: -1,
  NONE: 0,
  DRAG_OVER: 1,
  UPLOADING: 2,
  COMPLETE: 3
}

export default function useDragDropImg () {
  const [task, settask] = useState<firebase.storage.UploadTask | null>(null)
  const [drag, setdrag] = useState(DRAG_IMG_STATES.NONE)
  const [imgURL, setimgURL] = useState(null)
  const styleOnDrag =
    drag === DRAG_IMG_STATES.DRAG_OVER
      ? `2px dashed ${colors.third}`
      : '1px solid transparent'

  /* ---------------
Handle Drag and Drop
---------------- */

  const handleDragEnter: React.DragEventHandler<HTMLTextAreaElement> = (
    e: React.DragEvent<HTMLTextAreaElement>
  ): void => {
    console.log(e, 'dragenter')
    e.preventDefault()
    setdrag(DRAG_IMG_STATES.DRAG_OVER)
  }

  const handleDragLeave: React.DragEventHandler<HTMLTextAreaElement> = (
    e: React.DragEvent<HTMLTextAreaElement>
  ): void => {
    console.log(e, 'drag leave')
    e.preventDefault()
    setdrag(DRAG_IMG_STATES.NONE)
  }

  const handleOnDrop: React.DragEventHandler<HTMLTextAreaElement> = (
    e: React.DragEvent<HTMLTextAreaElement>
  ): void => {
    console.log('ondrop', e.dataTransfer.files[0])
    e.preventDefault()
    const file: File = e.dataTransfer.files[0]
    const task = uploadImage(file)
    settask(task)
    setdrag(DRAG_IMG_STATES.NONE)
  }
  /* --------------------
    Handle Input File
----------------------- */
  const handleInputFileChange: React.ChangeEventHandler<HTMLInputElement> = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    console.log('onInputFile', e.target.files[0])
    const file: File = e.target.files[0]
    const task = uploadImage(file)
    settask(task)
    setdrag(DRAG_IMG_STATES.NONE)
  }

  const handleInputClick : React.MouseEventHandler = (
    e : React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    const element = e.target as HTMLInputElement
    element.value = ''
  }

  /* -----------------------
  Reset states cuando nos
  arrepentimos de subir
  una imagen
  ------------------------ */

  const handleResetImgUpload: React.MouseEventHandler = (): void => {
    setdrag(DRAG_IMG_STATES.NONE)
    settask(null)
    setimgURL(null)
  }

  /* -------------------------
        UseEffect
-------------------------- */
  useEffect(() => {
    if (task) {
      const onProgress = () => {}
      const onError = (e) => {
        console.log(e)
      }
      const onComplete = () => {
        console.log('transferencia completada')
        task.snapshot.ref
          .getDownloadURL()
          .then(setimgURL)
          .catch((err) => console.error(err))
      }
      task.on('state_changed', onProgress, onError, onComplete)
    }
  }, [task])
  return {
    task,
    drag,
    imgURL,
    handleDragEnter,
    handleDragLeave,
    handleOnDrop,
    styleOnDrag,
    handleInputFileChange,
    handleResetImgUpload,
    handleInputClick
  }
}
