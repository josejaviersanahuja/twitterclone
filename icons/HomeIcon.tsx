/* eslint-disable no-use-before-define */
import React, { ReactElement } from 'react'

export default function HomeIcon (props: React.SVGProps<SVGSVGElement>): ReactElement {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={24}
      height={24}
      {...props}
    >
      <path d="M12 3.906l-.25.156-11.5 7 .5.876L12 5.093l11.25 6.843.5-.874L20 8.78V4h-2v3.563l-5.75-3.5zM12 6.5l-10 6V24h20V12.5zM9 13h6v9H9z" />
    </svg>
  )
}
