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
          background: ${lighten({ color: colors.third, porcentaje: 0.05 })};
        }
      `}</style>
    </>
  )
}

const botonCompose = css`
  aside {
    position: fixed;
    bottom: 4rem;
    right: 15px;
    width: 100%;
    width: 4rem;
    height: 4rem;
    display: flex;
  }
  div {
    border-radius: 50%;
    width: 4rem;
    height: 4rem;
    margin: auto;
    display: flex;
  }
`
