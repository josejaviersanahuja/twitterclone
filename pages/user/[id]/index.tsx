/* eslint-disable no-use-before-define */
// import { useRouter } from 'next/router'
import React, { ReactElement, useState, useEffect } from 'react'
// import useUser, { ValidUser } from '../../../hooks/useUser'
import Spinner from '../../../components/Spinner'
import Avatar from '../../../components/Avatar'
import Twit from '../../../components/Twit'
import BotonCompose from '../../../components/BotonCompose'
import css from 'styled-jsx/css'
import { getUserLatestTwits, reduceUserInformation, TwitInfo, User } from '../../../firebase/client'
import { firesAdmin } from '../../../firebase/admin'
import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import Footer from '../../../components/Footer'
import useUser from '../../../hooks/useUser'
import LoadingAvatar from '../../../components/LoadingAvatar'

export default function index ({ userSSR } : {userSSR: User}): ReactElement {
  const [timeline, setTimeline] = useState<TwitInfo[] | void>([])
  const userReducedInfo = reduceUserInformation(userSSR)
  const { user } = useUser()
  useEffect(() => {
    userSSR && getUserLatestTwits(userReducedInfo, setTimeline)
  }, [])

  return (
    <>
      <main>
        <header>
          {user === undefined && <Spinner />}
          {user === null && <LoadingAvatar small/>}
          {user && <Avatar user={user} small={true} />}
          <strong>Perfil de {userSSR.username}</strong>
        </header>
        {userSSR && (<div>
          <Avatar
            user={userReducedInfo}
            userPage
            displayName
            userFullData={userSSR}
          />
        </div>)}
        {userSSR === undefined && (
          <section>
            <Spinner />
          </section>
        )}
        {userSSR === null && (
          <section>
            <LoadingAvatar userPage displayName/>
          </section>
        )}
        {userSSR && (
          <section>
            {Array.isArray(timeline)
              ? timeline.map((twit) => (
                <Twit key={twit.twitID} twit={twit} />
              ))
              : <Spinner/>}

          </section>
        )}
        {user && <BotonCompose />}
        <Footer/>
      </main>
      <style jsx>{homeStyle}</style>

    </>
  )
}

export const getServerSideProps: GetServerSideProps<{ [key: string]: any }> = async (context: GetServerSidePropsContext): Promise<GetServerSidePropsResult<{ [key: string]: any }>> => {
  let userSSR: User = {
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
    userSSR = apiUserResponse
    // console.log('getServersideProps ok user = ', user)
    return { props: { userSSR } }
  }
  if (res) {
    res.writeHead(301, { Location: '/home' }).end()
  }
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
  
    div {
      margin-top:3rem;
    }
  `
