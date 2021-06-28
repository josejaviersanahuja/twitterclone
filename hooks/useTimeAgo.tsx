/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import { TwitInfo } from '../firebase/client'

function formatingDate ({ twitDate, settimeAgo }) {
  const inSeconds = diffDate(twitDate) // in seconds
  const timeAgoFormatter = new Intl.RelativeTimeFormat(navigator.language, { style: 'short' })
  const inMinutes = inSeconds / 60
  const inHours = inMinutes / 60
  const inDays = inHours / 24
  if (inSeconds < 60) {
    const conditionalResult = timeAgoFormatter.format(-Math.floor(inSeconds), 'seconds')
    settimeAgo(conditionalResult)
  }
  if (inMinutes >= 1 && inMinutes < 60) {
    const conditionalResult = timeAgoFormatter.format(-Math.floor(inMinutes), 'minutes')
    settimeAgo(conditionalResult)
  }
  if (inHours >= 1 && inHours < 24) {
    const conditionalResult = timeAgoFormatter.format(-Math.floor(inHours), 'hours')
    settimeAgo(conditionalResult)
  }
  if (inDays >= 1 && inDays < 31) {
    const conditionalResult = timeAgoFormatter.format(-Math.floor(inDays), 'days')
    settimeAgo(conditionalResult)
  }
}

interface useTimeAgoProps {
    twit : TwitInfo
}

export default function useTimeAgo ({ twit }: useTimeAgoProps) {
  const [timeAgo, settimeAgo] = useState(twit.createdAt.toString())
  const twitDate = twit.createdAt

  useEffect(() => {
    formatingDate({ twitDate, settimeAgo })
  }, [])

  useEffect(() => {
    const cada10seg = setInterval(() => {
      if (diffDate(twitDate) < 90) {
        formatingDate({ twitDate, settimeAgo })
      }
    }, 1000)
    return () => {
      clearInterval(cada10seg)
    }
  }, [timeAgo])

  return timeAgo
}

function diffDate (twitDate) {
  const nowDate = Date.now()
  const diffDate = (nowDate - twitDate) / 1000
  return diffDate
}
