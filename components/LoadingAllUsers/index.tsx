/* eslint-disable no-use-before-define */
import React, { ReactElement } from 'react'
import LoadingAvatar from '../../components/LoadingAvatar'
import css from 'styled-jsx/css'

export default function index (): ReactElement {
  return (
    <>
      <article>
        <LoadingAvatar />
        <div>
          <p>Username and Surname</p>
          <p>zitrojj@gmail.com</p>
        </div>
      </article>
      <article>
        <LoadingAvatar />
        <div>
          <p>Username and Surname</p>
          <p>zitrojj@gmail.com</p>
        </div>
      </article>
      <article>
        <LoadingAvatar />
        <div>
          <p>Username and Surname</p>
          <p>zitrojj@gmail.com</p>
        </div>
      </article>
      <article>
        <LoadingAvatar />
        <div>
          <p>Username and Surname</p>
          <p>zitrojj@gmail.com</p>
        </div>
      </article>
      <article>
        <LoadingAvatar />
        <div>
          <p>Username and Surname</p>
          <p>zitrojj@gmail.com</p>
        </div>
      </article>
      <article>
        <LoadingAvatar />
        <div>
          <p>Username and Surname</p>
          <p>zitrojj@gmail.com</p>
        </div>
      </article>
      <article>
        <LoadingAvatar />
        <div>
          <p>Username and Surname</p>
          <p>zitrojj@gmail.com</p>
        </div>
      </article>
      <article>
        <LoadingAvatar />
        <div>
          <p>Username and Surname</p>
          <p>zitrojj@gmail.com</p>
        </div>
      </article>
      <style jsx>{allusersStyle}</style>
    </>
  )
}

const allusersStyle = css`
  article {
    display: grid;
    width: 100%;
    grid-template-columns: 18% 82%;
    border-top: 1px solid lightblue;
    border-bottom: 1px solid lightblue;
    
  }
  div {
    display: flex;
    flex-direction: column;
  }
  p {
    margin: auto;
    background:linear-gradient(to right, white, lightgray, white);
              background-size:300%;
              color:transparent;
              background-position:left;
              animation: loadingEffect 1s infinite ease;
  }
  @keyframes loadingEffect {
                0% {background-position:left;}
                100% {background-position:right}
            }
`
