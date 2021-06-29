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
  const styleOnDrag = drag === DRAG_IMG_STATES.DRAG_OVER ? `2px dashed ${colors.third}` : '1px solid transparent'

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
    const file :File = e.dataTransfer.files[0]
    const task = uploadImage(file)
    settask(task)
    setdrag(DRAG_IMG_STATES.NONE)
  }

  useEffect(() => {
    if (task) {
      const onProgress = () => {}
      const onError = (e) => { console.log(e) }
      const onComplete = () => {
        console.log('transferencia completada')
        task.snapshot.ref.getDownloadURL()
          .then(setimgURL)
          .catch(err => console.error(err))
      }
      task.on('state_changed', onProgress, onError, onComplete)
    }
  }, [task])
  return { task, drag, imgURL, handleDragEnter, handleDragLeave, handleOnDrop, styleOnDrag, setimgURL }
}
