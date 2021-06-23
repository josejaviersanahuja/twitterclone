/* eslint-disable no-use-before-define */
import React, { ReactElement } from 'react'
import css from 'styled-jsx/css'
import { colors } from '../styles/StyleGlobal'

export default function Spinner (): ReactElement {
  return <>
  <div>

  </div>
  <style jsx>{spinnerStyle}</style>
  <style jsx>{`
      div {
          border-top: 2px solid ${colors.third};
          border-radius: 50%;
      }
      `}</style>
</>
}

const spinnerStyle = css`
    div {
        width:24px;
        height:24px;
        border: 2px solid transparent;
        animation: spin 1s ease;
        animation-iteration-count: infinite;
    }
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform:rotate(360deg);
        }
    }
`
