import { MouseEventHandler, ReactElement } from 'react'
import Link from 'next/link'
interface Props {
    handleClick: MouseEventHandler,
    isDark: boolean
}

export default function Menu({handleClick, isDark}: Props): ReactElement {

    const botonBackGroundColor: string = isDark? "#dddddd" : "#007bff"
    const botonColor: string = isDark? "#007bff" : "#eeeeee"
    const botonBackGroundColorHover: string = isDark? "#cccccc": "#0065d9"

    return (<>
    <header>
        <button onClick={handleClick}>cambiar tema</button>
        <Link href="/"><a>Home</a></Link>
        <Link href="/twits"><a>Twits</a></Link>
        <Link href="/timeline"><a>Timeline</a></Link>
    </header>
    <Style 
        botonBackGroundColor={botonBackGroundColor} 
        botonColor={botonColor} 
        botonBackGroundColorHover={botonBackGroundColorHover}
    />
    </>)
}

interface Style {
    botonBackGroundColor:string;
    botonColor:string;
    botonBackGroundColorHover:string
}

function Style({botonBackGroundColor, botonColor, botonBackGroundColorHover}:Style){
    return (
    <style jsx>{`
    
    button {
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
      
    button:hover {
        background-color: ${botonBackGroundColorHover};
      }
      
  `}
    </style>
    )
  }
  