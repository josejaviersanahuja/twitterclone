/* eslint-disable no-use-before-define */
import React from 'react'
import css from 'styled-jsx/css'
import { colors } from '../styles/StyleGlobal'

export default function BellIcon (props: React.SVGProps<SVGSVGElement>) {
  return (<>
      <svg
      height={21}
      viewBox="0 0 21 21"
      width={21}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.585 15.5H5.415A1.65 1.65 0 014 13a10.526 10.526 0 001.5-5.415V6.5a4 4 0 014-4h2a4 4 0 014 4v1.085c0 1.907.518 3.78 1.5 5.415a1.65 1.65 0 01-1.415 2.5zM13 17c-.667 1-1.5 1.5-2.5 1.5S8.667 18 8 17"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
      <style jsx>{bellStyle}</style>
  </>)
}

const bellStyle = css`
  svg {
    margin:auto;
    color: ${colors.third}
  }
`
