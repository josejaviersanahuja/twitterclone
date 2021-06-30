/* eslint-disable react/react-in-jsx-scope */
import { ReactElement, useState, useEffect } from 'react'
import Twit from '../../components/Twit'
import Avatar from '../../components/Avatar'
import { getLatestTwits, TwitInfo, User } from '../../firebase/client'
import HomeIcon from '../../icons/HomeIcon'
import LupaIcon from '../../icons/LupaIcon'
import LetterIcon from '../../icons/LetterIcon'
import BellIcon from '../../icons/BellIcon'
import Spinner from '../../components/Spinner'
import BotonCompose from '../../components/BotonCompose'
import css from 'styled-jsx/css'
import useUser from '../../hooks/useUser'
import { useRouter } from 'next/router'

export default function Home (): ReactElement {
  const [timeline, setTimeline] = useState<TwitInfo[] | void>([])
  const user: User | undefined | null = useUser()
  const router = useRouter()

  useEffect(() => {
    user && getLatestTwits().then(setTimeline)
      .catch(err => console.error(err))
    return () => {}
  }, [user])

  useEffect(() => {
    user === undefined && router.replace('/')
  }, [user])

  return (
    <>
      <main>
        <header>
          {user === undefined && <Spinner />}
          {user === null && <p>intento cargar</p>}
          {user && <Avatar user={user} small={true} />}
          <strong>Inicio</strong>
        </header>
        {user === undefined && (
          <section>
            <Spinner />
          </section>
        )}
        {user === null && (
          <section>
            <p>intento cargar</p>
          </section>
        )}
        {user && (
          <section>
            {Array.isArray(timeline)
              ? timeline.map((twit) => (
              <Twit key={twit.twitID} twit={twit} />
              ))
              : <p>timeline es void</p>}
              {/* REVISAR SI ALGUNA VEZ EL TIMELINE ES VOID A VER QUE HACER */}
          </section>
        )}

        <BotonCompose />
        <footer>
          <HomeIcon />
          <LupaIcon />
          <BellIcon />
          <LetterIcon />
        </footer>
      </main>
      <style jsx>{homeStyle}</style>
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
`
