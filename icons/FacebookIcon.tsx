/* eslint-disable no-use-before-define */
import React, { ReactElement } from 'react'
import css from 'styled-jsx/css'

export default function FacebookIcon (props: React.SVGProps<SVGSVGElement>) : ReactElement {
  return (<>
      <svg
        aria-hidden="true"
        data-prefix="fab"
        data-icon="facebook-square"
        width={21}
        height= {21}
        className="prefix__svg-inline--fa prefix__fa-facebook-square prefix__fa-w-14"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M400 32H48A48 48 0 000 80v352a48 48 0 0048 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0048-48V80a48 48 0 00-48-48z"
      />
    </svg>
      <style jsx>{homeIconStyle}</style>
      </>
  )
}

const homeIconStyle = css`
    svg {
      margin: 0rem 0.5rem;
      color: 'white';
      transform: translateY(3px);
    }
  `
