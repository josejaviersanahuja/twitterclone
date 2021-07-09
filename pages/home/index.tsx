/* eslint-disable react/react-in-jsx-scope */
import { ReactElement, useState, useEffect } from 'react'
import Twit from '../../components/Twit'
import Avatar from '../../components/Avatar'
import { listenLatestTwits, TwitInfo } from '../../firebase/client'
import BotonCompose from '../../components/BotonCompose'
import Spinner from '../../components/Spinner'
import LoadingAvatar from '../../components/LoadingAvatar'
import LoadingTwits from '../../components/LoadingTwits'
import css from 'styled-jsx/css'
import useUser, { ValidUser } from '../../hooks/useUser'
import { useRouter } from 'next/router'
import Footer from '../../components/Footer'

export default function Home (): ReactElement {
  const [timeline, setTimeline] = useState<TwitInfo[] | void>([])
  const { user, userFullData }: ValidUser | undefined | null = useUser()
  const router = useRouter()

  useEffect(() => {
    let unsuscribe
    console.log(userFullData)

    if (user && userFullData) {
      unsuscribe = listenLatestTwits(setTimeline, userFullData)
      console.log('escuchamos firestore')
    }
    return () => {
      if (unsuscribe) {
        unsuscribe()
        console.log('dejamos de escuchar firestore')
      }
    }
  }, [user, userFullData])

  useEffect(() => {
    user === undefined && router.replace('/')
  }, [user])

  return (
    <>
      <main>
        <header>
          {user === undefined && <Spinner />}
          {user === null && <LoadingAvatar small />}
          {user && <Avatar userA={user} small={true} />}
          <strong>Inicio</strong>

        </header>
        {user === undefined && (
          <section>
            <Spinner />
          </section>
        )}
        {user === null && (
          <section>
            <LoadingTwits/>
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
        <Footer/>
      </main>
      <style jsx>{homeStyle}</style>
    </>
  )
}

const homeStyle = css`
  header
  {
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
