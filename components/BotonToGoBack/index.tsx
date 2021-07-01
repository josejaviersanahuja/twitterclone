/* eslint-disable no-use-before-define */
import React, { MouseEventHandler, ReactElement } from 'react'
import router from 'next/router'
import css from 'styled-jsx/css'
import { colors } from '../../styles/StyleGlobal'

export default function index (): ReactElement {
  const handleClick : MouseEventHandler = () => {
    router.back()
  }

  return (<>
        <button onClick={handleClick}>
            <span>←</span>
        </button>
        <style jsx>{botonToGoBackStyle}</style>
        <style jsx>{`
            button:hover, button:focus {
                background: ${colors.primary};
            }
            `}</style>
    </>)
}

const botonToGoBackStyle = css`
span {
    font-size:2rem;
    position: absolute;
    top:0;
    left:1.5rem;
}

button {
    isolation: isolate;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    -webkit-appearance: none;
    -moz-appearance: none;
    border: none;
    border-radius:50%;
    background: none;
    cursor: pointer;
    width:40px;
    height:40px;
}
`
