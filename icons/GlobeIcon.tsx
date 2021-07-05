/* eslint-disable no-use-before-define */
import React, { ReactElement } from 'react'
import css from 'styled-jsx/css'
import { colors } from '../styles/StyleGlobal'

export default function GlobeIcon (props: React.SVGProps<SVGSVGElement>) : ReactElement {
  return (<>
      <svg
        height={21}
        viewBox="0 0 21 21"
        width={21}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g
          fill="none"
          fillRule="evenodd"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M10 19c4.438 0 8-3.526 8-7.964C18 6.598 14.438 3 10 3c-4.438 0-8 3.598-8 8.036S5.562 19 10 19zM3 8h14M3 14h14" />
          <path d="M10 19c2.219 0 4-3.526 4-7.964C14 6.598 12.219 3 10 3c-2.219 0-4 3.598-4 8.036S7.781 19 10 19z" />
        </g>
      </svg>
      <style jsx>{homeIconStyle}</style>
      </>
  )
}

const homeIconStyle = css`
    svg {
      margin: auto;
      color: ${colors.third}
    }
  `