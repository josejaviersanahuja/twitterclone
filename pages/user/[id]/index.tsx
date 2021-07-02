/* eslint-disable no-use-before-define */
// import { useRouter } from 'next/router'
import React, { ReactElement } from 'react'
// import { TwitInfo } from '../../../firebase/client'
/* import useUser, { ValidUser } from '../../../hooks/useUser'
import Spinner from '../../../components/Spinner'
import Avatar from '../../../components/Avatar'
import Twit from '../../../components/Twit'
 */import BellIcon from '../../../icons/BellIcon'
import LupaIcon from '../../../icons/LupaIcon'
import HomeIcon from '../../../icons/HomeIcon'
import BotonCompose from '../../../components/BotonCompose'
import LetterIcon from '../../../icons/LetterIcon'
import Link from 'next/link'
import { colors } from '../../../styles/StyleGlobal'
import css from 'styled-jsx/css'

export default function index (): ReactElement {
  // const [timeline, setTimeline] = useState<TwitInfo[] | void>([])

  return (
      <>
        <main>
          <header>
            {/* {user === undefined && <Spinner />}
            {user === null && <p>intento cargar</p>}
            {user && <Avatar user={user} small={true} userPage/>} */}
            <strong>Profile de...</strong>
          </header>
         {/* { user === undefined && (
            <section>
              <Spinner />
            </section>
         )} */}
          {/* {user === null && (
            <section>
              <p>intento cargar</p>
            </section>
          )} */}
          {/* {user && (
            <section>
              {Array.isArray(timeline)
                ? timeline.map((twit) => (
                <Twit key={twit.twitID} twit={twit} />
                ))
                : <p>timeline es void</p>}

            </section>
          )} */}
          <BotonCompose />
          <footer>
            <Link href="/"><a><HomeIcon /></a></Link>
            <Link href="/"><a><LupaIcon /></a></Link>
            <Link href="/"><a><BellIcon /></a></Link>
            <Link href="/"><a><LetterIcon /></a></Link>
          </footer>
        </main>
        <style jsx>{homeStyle}</style>
        <style jsx>{`
          a:hover {
            background: ${colors.primary};
          }
          `}</style>
      </>
  )
}

const homeStyle = css`
    header,
    footer {
      display: flex;
      align-items: center;
      position: fixed;
      height: 3rem;
      width: 100vw;
      max-width: 500px;
      background-color: white;
      z-index: 1;
    }
  
    footer {
      bottom: 0;
      border-top: 1px solid lightblue;
      display: flex;
    }
  
    header {
      top: 0;
      border-bottom: 1px solid lightblue;
      padding: 1rem;
    }
  
    section {
      padding-top: 1rem;
    }
  
    strong {
      margin-left: 1.5rem;
      font-size: 1.3rem;
    }
  
    .avatar {
      width: 55px;
    }
    a {
      margin:auto;
      border-radius: 50%;
      width:40px;
      height:40px;
      display:flex;
    }
  `
