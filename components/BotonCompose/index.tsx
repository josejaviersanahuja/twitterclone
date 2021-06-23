/* eslint-disable no-use-before-define */
import React, { ReactElement } from 'react'
import css from 'styled-jsx/css'
import FeatherIcon from '../../icons/FeatherIcon'
import { colors } from '../../styles/StyleGlobal'

export default function index (): ReactElement {
  return <>
  <div>
      <FeatherIcon/>
  </div>
  <style jsx>{botonCompose}</style>
  <style jsx>{`
      div {
        background: ${colors.third};
        }
      `}</style>
</>
}

const botonCompose = css`
    div {
        position: fixed;
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        bottom:4rem;
        right:15px;
        display: flex;
    }
`
