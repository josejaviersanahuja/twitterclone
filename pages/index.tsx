/* eslint-disable react/react-in-jsx-scope */
import { colors } from '../styles/StyleGlobal'
import Avatar from '../components/Avatar'
import { MouseEventHandler, useEffect } from 'react'
import Image from 'next/image'
import { loginWithGitHub } from '../firebase/client'
import LoginBotons from '../components/LoginBotons/LoginBotons'
import css from 'styled-jsx/css'
import { useRouter } from 'next/router'
import useUser from '../hooks/useUser'

export default function SignIn () {
  const router = useRouter()
  const { user } = useUser()
  useEffect(() => {
    if (user) {
      router.replace('/home')
    }
  }, [user])

  const handleClick : MouseEventHandler = () :void => {
    loginWithGitHub().catch(err => console.error(err))
  }

  return (
  <>
      <main >
        <section>
        <Image src='/static/logoFinal.png' alt="logo" width="350px" height="150px" />
        <h1>Twitter <span>Clone</span></h1>
        <h2>Talk to everybody about</h2>
        <h2><span>Religion and politics</span></h2>
        {user === undefined && <LoginBotons handleClick={handleClick} />}
        { user
          ? <Avatar user={user} displayName/>
          : null}
        </section>
      </main>
      <style jsx>{signInStyle}</style>
  </>)
}

const signInStyle = css`
  button {
    margin-top:1rem;
    font-size:1.2em;
  }
  i {
    margin:.35rem;
  }
  section{
    text-align:center;
    width:100%;
    border-top: 1px solid ${colors.third};
    border-bottom: 1px solid ${colors.third};
    padding:1rem;
    background: ${colors.primary};
    margin: auto;
  }
  
  `
