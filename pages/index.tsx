import { colors } from '../styles/StyleGlobal'
import Avatar from '../components/Avatar'
import { MouseEventHandler, useState, useEffect } from 'react'
import Image from 'next/image'
import { loginWithGitHub, User, onAuthStateChange } from '../firebase/client'
import LoginBotons from '../components/LoginBotons/LoginBotons'

export default function Home() {
  const [user, setuser] = useState<User | null | undefined>(null)

  useEffect(() => {
    onAuthStateChange(setuser)
    return () => {
      
    }
  }, [])

  const handleClick : MouseEventHandler = () :void => {
    
    loginWithGitHub().then(user => {
      console.log(user);
      setuser(user)
    })
  }
  
  return (
  <>
      <main >
        <section>
        <Image src='/static/logoFinal.png' alt="logo" width="350px" height="150px" />
        <h1>Twitter <span>Clone</span></h1>
        <h2>Talk to everybody about</h2>
        <h2><span>Religion and politics</span></h2>
        <LoginBotons handleClick={handleClick} />
        {user === undefined && <p>es undefined</p>}
         {user === null && <p>es null</p>}
         { user? <Avatar  user={user}/>
          : null}
        </section>
      </main>
    <HomeStyle />
  </>)
}

function HomeStyle(){
  return (
  <style jsx>{`
 
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
   
  }
  `}
  </style>
  )
}

