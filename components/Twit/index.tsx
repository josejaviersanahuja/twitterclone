/* eslint-disable no-use-before-define */
import React, { ReactElement } from 'react'
import css from 'styled-jsx/css'
import { TwitInfo } from '../../firebase/client'
import useTimeAgo from '../../hooks/useTimeAgo'
import LikeIcon from '../../icons/LikeIcon'
import SharedIcon from '../../icons/SharedIcon'
import Avatar from '../Avatar'

interface TwitProps {
  twit: TwitInfo;
}

export default function Twit ({ twit }: TwitProps): ReactElement {
  const timeAgo = useTimeAgo({ twit })

  return (
    <>
      <article>
        <Avatar user={twit.user}/>
        <pre>
          <h5>{twit.user.username}. <time>{timeAgo}</time></h5>
          <p>{twit.content}</p>
          <div className="likesANDshares"><small><LikeIcon/>: {twit.likes} <SharedIcon/>: {twit.shared}</small></div>{}
        </pre>
      </article>
      <style jsx>{twitStyle}</style>
    </>
  )
}

const twitStyle = css`
      article {
        padding: 10px 15px;
        border-top: 1px solid lightblue;
        border-bottom: 1px solid lightblue;
        display: grid;
        grid-template-columns: 14% 86%;
        align-items:flex-start;
        height: auto;
      }
      pre {
          width:100%;
          font-family: inherit;
          white-space: pre-wrap;
          padding-left:1rem;
      }
      img {
          border-radius:50%;
      }
      h5 {
        margin-bottom: .5rem;
        font-size:1rem;
      }
      time {
        opacity:0.5;
        margin-left:1rem;
        font-size: 0.75rem;
      }
      small {
        opacity:.5;
      }
      p {
        word-wrap:break-word;
      }
    `
