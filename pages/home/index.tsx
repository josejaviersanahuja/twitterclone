/* eslint-disable react/react-in-jsx-scope */
import { ReactElement, useState, useEffect } from 'react'
import Twit from '../../components/Twit'
import Avatar from '../../components/Avatar'
import { User } from '../../firebase/client'
import HomeIcon from '../../icons/HomeIcon'
import LupaIcon from '../../icons/LupaIcon'
import LetterIcon from '../../icons/LetterIcon'
import BellIcon from '../../icons/BellIcon'
import Spinner from '../../components/Spinner'
import BotonCompose from '../../components/BotonCompose'
import css from 'styled-jsx/css'
interface HomeProps {
    user: User
}
const usuarioFicticio : User = {
  username: 'JA',
  avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPDjAldNLWRyOILLFa77g0XfaJO2Tu4mRia42KChSMWK8MZ6MRkIN7R5pQcvYkF1SY9Lw&usqp=CAU'
}
export default function Home ({ user = usuarioFicticio }: HomeProps): ReactElement {
  const [timeline, setTimeline] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/api/timeline')
      .then(res => res.json())
      .then(twits => setTimeline(twits))
      .catch(err => console.error(err))

    return () => {

    }
  }, [])

  return (
    <>
        <main>
          <header>
            {user === undefined ? <Spinner/> : <Avatar user={user} small={true}/>}
            <strong>Inicio</strong>
          </header>
          <section>
            {timeline.map(twit => <Twit key={twit.id} twit={twit}/>)}
          </section>
          <BotonCompose/>
          <footer>
            <HomeIcon/>
            <LupaIcon/>
            <BellIcon/>
            <LetterIcon/>
          </footer>
        </main>
        <style jsx>{homeStyle}</style>
        </>
  )
}

const homeStyle = css`
    header, footer {
      display:flex;
      align-items:center;
      position: fixed;
      height: 3rem;
      width: 100vw;
      max-width: 500px;
      background-color: white;
      z-index:1;
    }
    
    footer {
      bottom:0;
      border-top: 1px solid lightblue;
      display:flex;
    }
    
    header {
      top:0;
      border-bottom: 1px solid lightblue;
      padding:1rem;
    }
    
    section{
      
      }
    
    strong {
      margin-left: 1.5rem;
      font-size:1.3rem;
    }
    
    .avatar {
      width: 55px;
    }
  `
