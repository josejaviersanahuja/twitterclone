/* eslint-disable no-use-before-define */
import React, { ReactElement } from 'react'
import css from 'styled-jsx/css'
import { TwitInfo } from '../../firebase/client'
import Avatar from '../Avatar'

interface TwitProps {
  twit: TwitInfo;
}

export default function Twit ({ twit }: TwitProps): ReactElement {
  return (
    <>
      <article>
        <Avatar user={twit.user}/>
        <pre>
          <h5>{twit.user.username}. <time>{twit.createdAt.toString()}</time></h5>
          <p>{twit.content}</p>
          <div className="likesANDshares"><small>Likes: {twit.likes} Shares: {twit.shared}</small></div>{}
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
        display: flex;
        align-items:flex-start;
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
      }
      small {
        opacity:.5;
      }
    `
