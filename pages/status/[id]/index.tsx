/* eslint-disable no-use-before-define */
import React, { ReactElement, useEffect } from 'react'
import css from 'styled-jsx/css'
import TwitSSR from '../../../components/TwitSSR'
import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import { TwitInfo, UserReducedInfo } from '../../../firebase/client'
import BotonToGoBack from '../../../components/BotonToGoBack'
import { firesAdmin } from '../../../firebase/admin'
import useUser from '../../../hooks/useUser'
import { useRouter } from 'next/router'
import { colors } from '../../../styles/StyleGlobal'
import Footer from '../../../components/Footer'

interface StatusTwitProps {
    twit : TwitInfo
}

export default function StatusTwit ({ twit } : StatusTwitProps): ReactElement {
  const user = useUser()
  const router = useRouter()
  useEffect(() => {
    user === undefined && router.replace('/')
  }, [user])

  return (
    <>
      <main>
        <header>
          <BotonToGoBack/>
          <strong>Twit</strong>
        </header>

        <section>
            { twit
              ? <TwitSSR twit={twit}/>
              : <p>esperando a que cargue el Twit</p>}

        </section>

        <Footer/>
      </main>
      <style jsx>{statusTwitStyle}</style>
      <style jsx>{`
        a:hover {
          background: ${colors.primary};
        }
        `}</style>
    </>
  )
}

export const getServerSideProps : GetServerSideProps<{[key: string]: any}> = async (context : GetServerSidePropsContext) : Promise<GetServerSidePropsResult<{[key: string]: any}>> => {
  const { params, res } = context
  const { id } = params

  const apiResponse = await firesAdmin
    .collection(process.env.NEXT_PUBLIC_twits_collection)
    .doc(id)
    .get()
    .then(doc => {
      const data = doc.data()
      return data
    })

  // await fetch(`http://localhost:3000/api/twit/${id}`)
  if (apiResponse) {
    const storedData = apiResponse// await JSON.parse(apiResponse)
    const twitID : string = Array.isArray(id) ? id[0] : id
    const content : string = storedData.content
    const user: UserReducedInfo = storedData.user
    const userRef: string = user.email
    const createdAt: number = storedData.createdAt._seconds * 1000
    const likes: number = storedData.likes
    const shared : number = storedData.shared
    const imgURL : string | null = storedData.imgURL
    const twit : TwitInfo = { twitID, content, user, userRef, createdAt, likes, shared, imgURL }

    return { props: { twit } }
  }
  if (res) {
    res.writeHead(301, { Location: '/home' }).end()
  }
}

const statusTwitStyle = css`
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

`

/* ----------------------------------
Pasa que getStaticProps es solo para
Contenido finito y limitado y 100% estatico
Porque solo se crea en la build.
Servir??a para los 890 pokemons de
SMARTPOKEMONGO
-----------------------------------
PERO NO PARA LOS TWITS QUE
SE GENERAN CONSTANTEMENTE
--------------------------------- */
/* export const getStaticProps : GetStaticProps = async ({ params }: GetStaticPropsContext<any>): Promise<GetStaticPropsResult<any>> => {
  let storedData : TwitInfo = {
    twitID: '',
    content: '',
    createdAt: 0,
    imgURL: null,
    likes: 0,
    shared: 0,
    user: {
      avatar: '',
      username: '',
      email: '',
      id: ''
    }
  }
  try {
    const res = await fetch(`http://localhost:3000/api/twit/${params.id}`)
    storedData = await res.json()
    // Pass post data to the page via props
    const twitID : string = params.id
    const content : string = storedData.content
    const user: User = storedData.user
    const createdAt: number = storedData.createdAt._seconds * 1000
    const likes: number = storedData.likes
    const shared : number = storedData.shared
    const imgURL : string | null = storedData.imgURL
    const twit : TwitInfo = { twitID, content, user, createdAt, likes, shared, imgURL }
    return { props: { twit } }
  } catch (e) {
    console.error(e)
    const emptyProp = { content: 'no content' }
    return { props: { emptyProp } }
  }
}

export const getStaticPaths : GetStaticPaths = async (): Promise<GetStaticPathsResult> => {
  let paths = []
  let res : any = {}
  try {
    res = await fetch('http://localhost:3000/api/allid')
    const ids = await res.json()
    paths = await ids.map(e => {
      const id = e
      const params = { id }
      return { params }
    })
  } catch (e) {
    console.error(e)
    paths = ['hubo un error']
  } finally {
    // console.log(paths, 'en getStaticPaths')
  }
  return {
    paths: paths,
    fallback: false
  }
}
 */
