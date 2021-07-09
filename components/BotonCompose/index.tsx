/* eslint-disable no-use-before-define */
import React, { ReactElement } from 'react'
import css from 'styled-jsx/css'
import Link from 'next/link'
import FeatherIcon from '../../icons/FeatherIcon'
import { colors } from '../../styles/StyleGlobal'
import { lighten } from '../../styles/styleUtils'

export default function index (): ReactElement {
  return (
    <>
      <aside>
        <Link href="/compose/twit">
          <a>
            <div>
              <FeatherIcon />
            </div>
          </a>
        </Link>
      </aside>
      <style jsx>{botonCompose}</style>
      <style jsx>{`
        div {
          background: ${colors.third};
        }
        div:hover {
          background: ${lighten({ color: colors.third, porcentaje: 0.1 })};
        }
      `}</style>
    </>
  )
}

const botonCompose = css`
  aside {
    position: fixed;
    bottom: 0;
    width: 100%;
    max-width:500px;
    height: 3rem;
    display:flex;
    justify-content: flex-end;
  }
  div {
    border-radius: 50%;
    width: 4rem;
    height: 4rem;
    display:flex;
    position:relative;
    top: -5rem;
    right: 15px;
  }
`
