/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import { TwitInfo } from '../firebase/client'

function formatingDate ({ twitDate, settimeAgoSSR }) {
  const inSeconds = diffDate(twitDate) // in seconds
  /* const timeAgoFormatter = navigator
    ? new Intl.RelativeTimeFormat(navigator.language, {
      style: 'short'
    })
    : new Intl.RelativeTimeFormat('es-ES', {
      style: 'short'
    }) */
  const timeAgoFormatter = new Intl.RelativeTimeFormat('es-ES', {
    style: 'short'
  })
  const inMinutes = inSeconds / 60
  const inHours = inMinutes / 60
  const inDays = inHours / 24
  if (inSeconds < 60) {
    const conditionalResult = timeAgoFormatter.format(
      -Math.floor(inSeconds),
      'seconds'
    )
    settimeAgoSSR(conditionalResult)
  }
  if (inMinutes >= 1 && inMinutes < 60) {
    const conditionalResult = timeAgoFormatter.format(
      -Math.floor(inMinutes),
      'minutes'
    )
    settimeAgoSSR(conditionalResult)
  }
  if (inHours >= 1 && inHours < 24) {
    const conditionalResult = timeAgoFormatter.format(
      -Math.floor(inHours),
      'hours'
    )
    settimeAgoSSR(conditionalResult)
  }
  if (inDays >= 1 && inDays < 31) {
    const conditionalResult = timeAgoFormatter.format(
      -Math.floor(inDays),
      'days'
    )
    settimeAgoSSR(conditionalResult)
  }
}

interface useTimeAgoProps {
  twit: TwitInfo;
}

export default function useTimeAgoSSR ({ twit }: useTimeAgoProps) {
  const [timeAgoSSR, settimeAgoSSR] = useState(twit.createdAt.toString())
  /* const norMalTimeSSR = navigator
    ? new Date(twit.createdAt).toLocaleDateString(navigator.language, {
      dateStyle: 'full'
    })
    : new Date(twit.createdAt).toLocaleDateString('es-ES', {
      dateStyle: 'full'
    }) */
  const norMalTimeSSR = new Date(twit.createdAt).toLocaleDateString('es-ES', {
    dateStyle: 'full'
  })
  const twitDate = twit.createdAt

  useEffect(() => {
    formatingDate({ twitDate, settimeAgoSSR })
  }, [])

  useEffect(() => {
    const cada10seg = setInterval(() => {
      if (diffDate(twitDate) < 90) {
        formatingDate({ twitDate, settimeAgoSSR })
      }
    }, 1000)
    return () => {
      clearInterval(cada10seg)
    }
  }, [timeAgoSSR])

  return { timeAgoSSR, norMalTimeSSR }
}

function diffDate (twitDate) {
  const nowDate = Date.now()
  const diffDate = (nowDate - twitDate) / 1000
  return diffDate
}
