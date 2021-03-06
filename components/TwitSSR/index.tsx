/* eslint-disable no-use-before-define */
import React, { ReactElement } from 'react'
import css from 'styled-jsx/css'
import Link from 'next/link'
import { TwitInfo } from '../../firebase/client'
import LikeIcon from '../../icons/LikeIcon'
import SharedIcon from '../../icons/SharedIcon'
import { colors } from '../../styles/StyleGlobal'
import Avatar from '../Avatar'
import useTimeAgoSSR from '../../hooks/useTimeAgoSSR'
interface TwitProps {
  twit: TwitInfo;
}

export default function Twit ({ twit }: TwitProps): ReactElement {
  const { timeAgoSSR, norMalTimeSSR } = useTimeAgoSSR({ twit })

  return (
    <>
      <article>
        <Avatar userA={twit.user}/>
        <pre>
          <h5>
            {twit.user.username}.
            <Link href="/status/[id]" as={`/status/${twit.twitID}`}><a>
              <time title={norMalTimeSSR}>{timeAgoSSR}</time>
            </a></Link>
          </h5>
          <p>{twit.content}</p>
          {twit.imgURL && <img src={twit.imgURL} alt="img"></img>}
        </pre>
        <div className="likesANDshares"><small><LikeIcon/>: {twit.likes} <SharedIcon/>: {twit.shared}</small></div>{}
      </article>
      <style jsx>{twitStyle}</style>
      <style jsx>{`
        img {
          border: 1px solid ${colors.third};
        }
        `}</style>
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
          border-radius:10px;
      }
      
      img {
          max-width:100%;
          padding:0.5rem;
          margin-top:0.5rem;
          border-radius:10px;
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
      a:hover {
        text-decoration:underline;
      }
      .likesANDshares {
        grid-column:2/3;
      }
    `
