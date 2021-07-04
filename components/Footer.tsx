/* eslint-disable no-use-before-define */
import React, { ReactElement } from 'react'
import Link from 'next/link'
import HomeIcon from '../icons/HomeIcon'
import GlobeIcon from '../icons/GlobeIcon'
import UsersIcon from '../icons/UsersIcon'
import css from 'styled-jsx/css'
import { colors } from '../styles/StyleGlobal'

export default function Footer (): ReactElement {
  return (<>
        <footer>
          <Link href="/"><a><HomeIcon /></a></Link>
          <Link href="/global"><a><GlobeIcon /></a></Link>
          <Link href="/allusers"><a><UsersIcon /></a></Link>
        </footer>
        <style jsx>{footerStyle}</style>
        <style jsx>{`
        a:hover {
          background: ${colors.primary};
        }
        `}</style>
  </>)
}

const footerStyle = css`
footer {
    display: flex;
    align-items: center;
    position: fixed;
    height: 3rem;
    width: 100vw;
    max-width: 500px;
    background-color: white;
    z-index: 1;
    bottom: 0;
    border-top: 1px solid lightblue;
    display: flex;
  }
  a {
    margin:auto;
    border-radius: 50%;
    width:40px;
    height:40px;
    display:flex;
  }
`
