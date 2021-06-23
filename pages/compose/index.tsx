/* eslint-disable no-use-before-define */
import React, { ReactElement } from 'react'
import css from 'styled-jsx/css'
import Boton from '../../components/Boton'
import Avatar from '../../components/Avatar'
import { User } from '../../firebase/client'
import { colors } from '../../styles/StyleGlobal'

interface Props {}
const usuarioFicticio: User = {
  username: 'JA',
  avatar:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPDjAldNLWRyOILLFa77g0XfaJO2Tu4mRia42KChSMWK8MZ6MRkIN7R5pQcvYkF1SY9Lw&usqp=CAU'
}
// eslint-disable-next-line no-empty-pattern
export default function index ({}: Props): ReactElement {
  return (
    <>
      <main>
        <header>
          <span>←</span>
          <div className="botonTwittear">
            <Boton
              onClick={() => {}}
              botonBackGroundColor={colors.third}
              botonColor="#ffffff"
            >
              <>Twittear</>
            </Boton>
          </div>
        </header>
        <section>
          <Avatar user={usuarioFicticio} />
          <textarea name="" id="" cols={36} rows={7} placeholder="¿Qué está pasando?">

          </textarea>
        </section>
      </main>
      <style jsx>{composeStyle}</style>
      <style jsx>{`
          textarea {
              background: ${colors.primary}
          }
          `}</style>
    </>
  )
}

const composeStyle = css`
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
  .botonTwittear {
    margin-left: auto;
  }
  span {
    font-size: 2rem;
  }

  section {
    padding: 10px 15px;
    border-top: 1px solid lightblue;
    display: flex;
    align-items: flex-start;
    padding-top: 3rem;
  }
  textarea {
          width:100%;
          font-family: inherit;
          white-space: pre-wrap;
          margin-left:1rem;
          border: 1px solid transparent;
          font-size:1.25rem;
          border-bottom:1px solid lightblue;
      }
  
`
