import React, { MouseEventHandler, ReactElement } from "react";
import {lighten} from '../../styles/styleUtils'

interface BotonProps {
  children: ReactElement;
  onClick: MouseEventHandler;
  botonBackGroundColor: string;
  botonColor?: string;
}

export default function Boton({ children, onClick, botonBackGroundColor, botonColor }: BotonProps): ReactElement {
  return (
    <>
      <button onClick={onClick}>{children}</button>
      <Style
        botonBackGroundColor={botonBackGroundColor}
        botonColor={botonColor}
      />
    </>
  );
}

interface BotonStyle {
    botonBackGroundColor:string;
    botonColor:string;
}

function Style({botonBackGroundColor, botonColor}:BotonStyle){
    return (
    <style jsx>{`
    
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
        background-color: ${botonBackGroundColor};
        color: ${botonColor};
        font-weight: 700;
        transition: background-color .15s ease-in-out;
      }
    
      button::after {
              position: absolute;
              inset:  0;
              transform-origin: 100% 0;
              transform: scaley(.05);
              border-radius: .25rem;
              background: ${lighten({color:botonBackGroundColor, porcentaje:0.02})};
              mix-blend-mode: difference;
              transition: transform .25s;
              content: ''
          }
      button:hover {
          cursor:pointer;
      }
      button:focus { outline: none }
      button:focus::after, button:hover::after { transform: none ; }
      }
      
  `}
    </style>
    )
  }
  