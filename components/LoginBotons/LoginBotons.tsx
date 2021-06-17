import React, { MouseEventHandler, ReactElement } from 'react'
import Boton from '../Boton'

interface Props {
    handleClick: MouseEventHandler
}

export default function LoginBotons({handleClick}: Props): ReactElement {
    return (
        <>
            <Boton
          botonBackGroundColor="#000000"
          botonColor="#ffffff"
          onClick={handleClick}
        >
          <>
          <i className="fab fa-github fa-x"></i>
          Login with Github
          </>
        </Boton>
        <br/>
        <Boton
          botonBackGroundColor="#0000FF"
          botonColor="#FFFFFF"
          onClick={handleClick}
        >
          <>
          <i className="fab fa-facebook fa-x"></i>
          Login with Facebook
          </>
        </Boton>  
        </>
    )
}
