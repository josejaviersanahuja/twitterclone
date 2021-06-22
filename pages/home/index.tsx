/* eslint-disable react/react-in-jsx-scope */
import { ReactElement, useState, useEffect } from 'react'
import Twit from '../../components/Twit'
import Avatar from '../../components/Avatar'
import { User } from '../../firebase/client'
import HomeIcon from '../../icons/HomeIcon'
import LupaIcon from '../../icons/LupaIcon'
import LetterIcon from '../../icons/LetterIcon'
import BellIcon from '../../icons/BellIcon'
interface HomeProps {
    user: User
}

export default function Home ({ user }: HomeProps): ReactElement {
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
            {user === undefined ? <span>loading...</span> : <Avatar user={user}/>}
            <strong>Inicio</strong>
          </header>
          <nav>
          aqui va una seccion donde pones en que piensas
          </nav>
          <section>
            {timeline.map(twit => <Twit key={twit.id} twit={twit}/>)}
          </section>
          <footer>
            <HomeIcon/>
            <LupaIcon/>
            <BellIcon/>
            <LetterIcon/>
          </footer>
        </main>
        <HomeStyle/>
        </>
  )
}

function HomeStyle () {
  return <style jsx>{`
    header, footer {
      position: fixed;
      height: 2rem;
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
    footer svg {
      margin: auto;
    }
    header {
      top:0;
      border-bottom: 1px solid lightblue;
    }
    nav {
      height:3rem;
      width: 100vw;
      max-width:500px;
      border-bottom: 1px solid lightblue;
    }
    section{
      }
    strong {
      margin-left: 1rem;
    }
    .avatar {
      width: 55px;
    }
  `}</style>
}
