/* eslint-disable no-use-before-define */
// import { useRouter } from 'next/router'
import React, { ReactElement, useState, useEffect } from 'react'
// import useUser, { ValidUser } from '../../../hooks/useUser'
import Spinner from '../../../components/Spinner'
import Avatar from '../../../components/Avatar'
import Twit from '../../../components/Twit'
import BellIcon from '../../../icons/BellIcon'
import LupaIcon from '../../../icons/LupaIcon'
import HomeIcon from '../../../icons/HomeIcon'
import BotonCompose from '../../../components/BotonCompose'
import LetterIcon from '../../../icons/LetterIcon'
import Link from 'next/link'
import { colors } from '../../../styles/StyleGlobal'
import css from 'styled-jsx/css'
import { getUserLatestTwits, reduceUserInformation, TwitInfo, User } from '../../../firebase/client'
import { firesAdmin } from '../../../firebase/admin'
import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from 'next'

export default function index ({ user } : {user: User}): ReactElement {
  const [timeline, setTimeline] = useState<TwitInfo[] | void>([])
  const userReducedInfo = reduceUserInformation(user)

  useEffect(() => {
    user && getUserLatestTwits(userReducedInfo, setTimeline)
  }, [])

  return (
    <>
      <main>
        <header>
          {user === undefined && <Spinner />}
          {user === null && <p>intento cargar</p>}
          {user && <Avatar user={userReducedInfo} small={true} />}
          <strong>Perfil de {user.username}</strong>
        </header>
        {user && (<div>
          <Avatar
            user={userReducedInfo}
            userPage
            displayName
            userFullData={user}
          />
        </div>)}
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
              : <Spinner/>}

          </section>
        )}
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

export const getServerSideProps: GetServerSideProps<{ [key: string]: any }> = async (context: GetServerSidePropsContext): Promise<GetServerSidePropsResult<{ [key: string]: any }>> => {
  let user: User = {
    avatar: '',
    username: '',
    email: '',
    id: '',
    followers: [],
    following: []
  }
  const { params, res } = context
  const { id } = params

  const apiUserResponse: void | User = await firesAdmin
    .collection(process.env.NEXT_PUBLIC_users_collection)
    .doc(id)
    .get()
    .then(doc => {
      const data = doc.data()
      return data
    })
  /* const apiTimelineResponse: void | TwitInfo[] = await firesAdmin
    .collection(process.env.NEXT_PUBLIC_twits_collection)
    .get()
    .then(snapshot => {
      const timeline = extractTwitsFromFirebase(snapshot)
      return timeline
    }) */

  if (apiUserResponse) { // && apiTimelineResponse) {
    user = apiUserResponse
    // console.log('getServersideProps ok user = ', user)
    return { props: { user } }
  }
  if (res) {
    res.writeHead(301, { Location: '/home' }).end()
  }
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
    div {
      margin-top:3rem;
    }
  `
