/* eslint-disable no-use-before-define */
import React, { ReactElement, useState, useEffect } from 'react'
import BotonToGoBack from '../../components/BotonToGoBack'
import LoadingAllUsers from '../../components/LoadingAllUsers'
import Avatar from '../../components/Avatar'
import LoadingAvatar from '../../components/LoadingAvatar'
import Footer from '../../components/Footer'
import useUser from '../../hooks/useUser'
import css from 'styled-jsx/css'
import { getAllUsers, reduceUserInformation } from '../../firebase/client'

export default function index (): ReactElement {
  const { user } = useUser()
  const [allUsers, setallUsers] = useState([])

  useEffect(() => {
    getAllUsers(setallUsers)
  }, [])

  return (<>
    <main>
      <header>
        <BotonToGoBack/>
        {user === undefined && <p>Invitado Detectado</p>}
        {user === null && <LoadingAvatar small/>}
        {user && <Avatar user={user} small/>}
        <strong>All Users</strong>
      </header>

      {Array.isArray(allUsers)
        ? <section>
            { allUsers.length > 0
              ? allUsers.map(user => (
              <article key={user.id} >
                  <Avatar user={reduceUserInformation(user)} />
                  <div><p>{user.username}</p>
                  <p>{user.email}</p></div>
              </article>
              ))
              : <LoadingAllUsers/>}
              {/* REVISAR SI ALGUNA VEZ EL allUsers ES VOID A VER QUE HACER */}
          </section>
        : <section><p>allUsers es void</p></section>}

      <Footer/>
    </main>
    <style jsx>{allusersStyle}</style>
  </>
  )
}

const allusersStyle = css`
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
  article {
      display: grid;
      width:100%;
      grid-template-columns: 18% 82%;
      border-top:1px solid lightblue;
      border-bottom: 1px solid lightblue;
  }
  div {
      display: flex;
      flex-direction: column;
  }
  p {
      margin: auto;
  }
`
