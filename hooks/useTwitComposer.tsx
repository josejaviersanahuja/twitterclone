import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { sendTwit, UserReducedInfo } from '../firebase/client'
import useUser from './useUser'
import useDragDropImg from './useDragDropImg'

const IDK = 'idk'
const SENDING = 'sending'
const SENT = 'sent'
const ERROR = 'error'
const MESSAGEStatus = {
  idk: 'no se sabe',
  sending: 'enviando',
  sent: 'Se envió sin problema',
  error: 'No se envió'
}

export default function useTwitComposer () {
  // imgDrop Hook
  const {
    imgURL,
    handleDragEnter,
    handleDragLeave,
    handleOnDrop,
    styleOnDrag,
    handleInputFileChange,
    handleResetImgUpload,
    handleInputClick
  } = useDragDropImg()
  // the rest of the Hook
  const [textAreaValue, setTextAreaValue] = useState('')
  const [messageStatus, setmessageStatus] = useState(MESSAGEStatus[IDK])
  const router = useRouter()
  const { user }: { user: UserReducedInfo } = useUser()
  const isBotonDisable: boolean =
    textAreaValue === '' || messageStatus === MESSAGEStatus[SENDING]

  const handleChange: React.ChangeEventHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    if (e.target.value.length <= 200) {
      setTextAreaValue(e.target.value)
    }
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLFormElement>
  ): void => {
    e.preventDefault()
    setmessageStatus(MESSAGEStatus[SENDING])
    // console.log(user.username, textAreaValue)
    sendTwit({ user, textAreaValue, imgURL })
      .then((algo) => {
        // algo es un objeto chungo de firebase
        // console.log(algo, 'en handleSubmit') // puedes estudiarlo aquí
        setmessageStatus(MESSAGEStatus[SENT])
        setTextAreaValue('')
        router.push('/home')
      })
      .catch((err) => {
        console.error(err)
        setmessageStatus(MESSAGEStatus[ERROR])
        alert('there was an error, try again')
      })
  }
  return {
    textAreaValue,
    handleChange,
    handleSubmit,
    isBotonDisable,
    user,
    router,
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
