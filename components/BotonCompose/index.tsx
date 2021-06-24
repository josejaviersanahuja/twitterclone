/* eslint-disable no-use-before-define */
import React, { ReactElement } from 'react'
import css from 'styled-jsx/css'
import FeatherIcon from '../../icons/FeatherIcon'
import { colors } from '../../styles/StyleGlobal'

export default function index (): ReactElement {
  return <>
  <aside>
  <div>
      <FeatherIcon/>
  </div>
  </aside>
  <style jsx>{botonCompose}</style>
  <style jsx>{`
      div {
        background: ${colors.third};
        }
      `}</style>
</>
}

const botonCompose = css`
    aside {
        position: fixed;
        bottom: 3rem;
        width: 100%;
        max-width:500px;
        display: flex;
        height: 5rem;
    }
    div {
        border-radius: 50%;
        width: 4rem;
        height: 4rem;
        margin-left:auto;
        margin-right:15px;
        display:flex;
    }
`
