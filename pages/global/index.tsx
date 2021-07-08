/* eslint-disable react/react-in-jsx-scope */
import { ReactElement, useState, useEffect } from 'react'
import Twit from '../../components/Twit'
import Avatar from '../../components/Avatar'
import { getGlobalLatestTwits, TwitInfo } from '../../firebase/client'
import BotonCompose from '../../components/BotonCompose'
import LoadingAvatar from '../../components/LoadingAvatar'
import LoadingTwits from '../../components/LoadingTwits'
import css from 'styled-jsx/css'
import useUser, { ValidUser } from '../../hooks/useUser'
import Footer from '../../components/Footer'
import { colors } from '../../styles/StyleGlobal'

export default function Home (): ReactElement {
  const [timeline, setTimeline] = useState<TwitInfo[] | void>([])
  const { user }: ValidUser | undefined | null = useUser()
  /* const router = useRouter()
 */
  useEffect(() => {
    getGlobalLatestTwits(setTimeline)
  }, [])

  return (
    <>
      <main>
        <header>
          {user === undefined && <p>Invitado detectado</p>}
          {user === null && <LoadingAvatar small/>}
          {user && <Avatar userA={user} small={true} />}
          <strong>Twits Globales</strong>

        </header>
        {Array.isArray(timeline)
          ? <section>
            { timeline.length > 0
              ? timeline.map((twit) => (
              <Twit key={twit.twitID} twit={twit} />
              ))
              : <LoadingTwits/>}
              {/* REVISAR SI ALGUNA VEZ EL TIMELINE ES VOID A VER QUE HACER */}
          </section>
          : <section><p>timeline es void</p></section>}

        {user && <BotonCompose />}
        <Footer/>
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
  header {
    display: flex;
    align-items: center;
    position: fixed;
    height: 3rem;
    width: 100vw;
    max-width: 500px;
    background-color: white;
    z-index: 1;
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
