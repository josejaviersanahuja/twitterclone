/* eslint-disable no-use-before-define */
import React, { ReactElement } from 'react'
import LoadingAvatar from '../LoadingAvatar'
import css from 'styled-jsx/css'

export default function index (): ReactElement {
  return (
        <>
          <article>
        <LoadingAvatar />
        <pre >
          <h5>
            username.
            <time >time</time>
          </h5>
          <p>Consequat non Lorem duis proident duis sit. Excepteur sunt sunt in consectetur ut adipisicing consequat incididunt enim est cupidatat. Elit incididunt enim occaecat enim veniam magna laborum. Nulla minim velit non consectetur exercitation ex. Ullamco nulla enim ut ea minim officia et veniam occaecat Lorem cillum elit cillum.</p>
        </pre>
        <div className="likesANDshares"><small>x: 0 x: 0</small></div>{}
      </article>
      <article>
        <LoadingAvatar />
        <pre >
          <h5>
            username.
            <time >time</time>
          </h5>
          <p>Consequat non Lorem duis proident duis sit. Excepteur sunt sunt in consectetur ut adipisicing consequat incididunt enim est cupidatat. Elit incididunt enim occaecat enim veniam magna laborum. Nulla minim velit non consectetur exercitation ex. Ullamco nulla enim ut ea minim officia et veniam occaecat Lorem cillum elit cillum.</p>
        </pre>
        <div className="likesANDshares"><small>x: 0 x: 0</small></div>{}
      </article>
      <article>
        <LoadingAvatar />
        <pre >
          <h5>
            username.
            <time >time</time>
          </h5>
          <p>Consequat non Lorem duis proident duis sit. Excepteur sunt sunt in consectetur ut adipisicing consequat incididunt enim est cupidatat. Elit incididunt enim occaecat enim veniam magna laborum. Nulla minim velit non consectetur exercitation ex. Ullamco nulla enim ut ea minim officia et veniam occaecat Lorem cillum elit cillum.</p>
        </pre>
        <div className="likesANDshares"><small>x: 0 x: 0</small></div>{}
      </article>
      <article>
        <LoadingAvatar />
        <pre >
          <h5>
            username.
            <time >time</time>
          </h5>
          <p>Consequat non Lorem duis proident duis sit. Excepteur sunt sunt in consectetur ut adipisicing consequat incididunt enim est cupidatat. Elit incididunt enim occaecat enim veniam magna laborum. Nulla minim velit non consectetur exercitation ex. Ullamco nulla enim ut ea minim officia et veniam occaecat Lorem cillum elit cillum.</p>
        </pre>
        <div className="likesANDshares"><small>x: 0 x: 0</small></div>{}
      </article>
            <style jsx>{avatarStyle}</style>
        </>
  )
}

const avatarStyle = css`
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
      pre:hover {
        cursor:pointer;
        background:white;
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
        background:linear-gradient(to right, white, lightgray, white);
              background-size:300%;
              color:transparent;
              background-position:left;
              animation: loadingEffect 1s infinite ease;
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
        background:linear-gradient(to right, white, lightgray, white);
              background-size:300%;
              color:transparent;
              background-position:left;
              animation: loadingEffect 1s infinite ease;
      }
      a:hover {
        text-decoration:underline;
      }
      .likesANDshares {
        grid-column:2/3;
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
