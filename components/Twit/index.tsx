/* eslint-disable no-use-before-define */
import React, { ReactElement } from 'react'
import { TwitInfo } from '../../pages/api/timeline'
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
          <h5>{twit.user.username}</h5>
          <p>{twit.message}</p>
        </pre>
      </article>
      <TwitStyle />
    </>
  )
}

function TwitStyle () {
  return (
    <style jsx>{`
      article {
        padding: 10px 15px;
        border: 1px solid lightblue;
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
      }
    `}</style>
  )
}
