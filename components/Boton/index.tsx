/* eslint-disable no-use-before-define */
import React, { MouseEventHandler, ReactElement } from 'react'
import css from 'styled-jsx/css'
import { colors } from '../../styles/StyleGlobal'
import { lighten } from '../../styles/styleUtils'

interface BotonProps {
  children: ReactElement;
  onClick: MouseEventHandler;
  botonBackGroundColor: string;
  botonColor?: string;
  className?: string;
  disabled?: boolean;
  style?: React.CSSProperties
}

export default function Boton ({ children, onClick, botonBackGroundColor, botonColor, className = '', disabled = false, style }: BotonProps): ReactElement {
  return (
    <>
      <button
        onClick={onClick}
        style={{ ...style, backgroundColor: botonBackGroundColor, color: botonColor }}
        className={className}
        disabled={disabled}
      >{children}</button>
      <style jsx>{botonStyle}</style>
      <style jsx>{`
          button::after {
              background: ${lighten({ color: colors.third, porcentaje: 0.02 })};
          }
        `}</style>
    </>
  )
}

const botonStyle = css`
    
    button {
        isolation: isolate;
        position:relative;
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
        -webkit-appearance: none;
        -moz-appearance: none;
        border: none;
        background: none;
        cursor: pointer;
        padding: .375rem .75rem;
        border-radius: .25rem;
        font-weight: 700;
        transition: all .15s ease-in-out;
        box-shadow: 0 6px 2px -4px rgba(0, 0, 0, 0.3),
            0 4px 4px 0 rgba(0, 0, 0, 0.19),
            0 2px 10px 0 rgba(0, 0, 0, 0.15);
      }
      button::after {
              position: absolute;
              inset:  0;
              transform-origin: 0 100%;
              transform: scaley(.05);
              border-radius: .25rem;
              mix-blend-mode: difference;
              transition: transform .25s;
              content: ''
          }
      button[disabled] {
        opacity:0.4;
      }
      button:hover {
          cursor:pointer;
      }
      button:focus { outline: none }
      button:focus::after, button:hover::after { transform: none ; }
      }
      
  `
