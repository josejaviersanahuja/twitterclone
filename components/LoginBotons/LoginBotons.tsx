/* eslint-disable no-use-before-define */
import React, { MouseEventHandler, ReactElement } from 'react'
import Boton from '../Boton'
import GithubIcon from '../../icons/GithubIcon'
// import FacebookIcon from '../../icons/FacebookIcon'
import GoogleIcon from '../../icons/GoogleIcon'

interface Props {
    handleClickGithub: MouseEventHandler
    handleClickGoogle: MouseEventHandler
    handleClickFacebook: MouseEventHandler
}

export default function LoginBotons ({ handleClickGithub, handleClickGoogle, handleClickFacebook }: Props): ReactElement {
  return (
        <>
            <Boton
          botonBackGroundColor="#000000"
          botonColor="#ffffff"
          onClick={handleClickGithub}
        >
          <>
          <GithubIcon/>
          Login with Github
          </>
        </Boton>
        <br/><br/>
        {/* <Boton
          botonBackGroundColor="#0000FF"
          botonColor="#FFFFFF"
          onClick={handleClickFacebook}
        >
          <>
          <FacebookIcon/>
          Login with Facebook
          </>
        </Boton><br/><br/> */}
        <Boton
          botonBackGroundColor="#4285F4"
          botonColor="#FFFFFF"
          onClick={handleClickGoogle}
        >
          <>
          <GoogleIcon/>
          Login with Google
          </>
        </Boton>
        </>
  )
}
