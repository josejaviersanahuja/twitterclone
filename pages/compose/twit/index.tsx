/* eslint-disable no-use-before-define */
import React, { ReactElement, useEffect } from 'react'
import css from 'styled-jsx/css'
import Boton from '../../../components/Boton'
import Avatar from '../../../components/Avatar'
import { colors } from '../../../styles/StyleGlobal'
import Spinner from '../../../components/Spinner'
import useTwitComposer from '../../../hooks/useTwitComposer'

// eslint-disable-next-line no-empty-pattern
export default function index (): ReactElement {
  const { textAreaValue, handleChange, handleSubmit, isBotonDisable, user, router } = useTwitComposer()

  useEffect(() => {
    user === undefined && router.replace('/')
  }, [user])

  return (
    <>
      <main>
        <header>
          <span>←</span>
          <div className="botonTwittear">
{/* aqui iba el boton */}
          </div>
        </header>
        <section>
          {user === undefined && <Spinner/> }
          {user === null && <p>intento cargar</p>}
          {user && <Avatar user={user}/>}

          <form onSubmit={handleSubmit}>
          <textarea
            cols={36}
            rows={7}
            placeholder="¿Qué está pasando?"
            value={textAreaValue}
            onChange={handleChange}
          >
          </textarea>
            <Boton
              onClick={() => {}}
              botonBackGroundColor={colors.third}
              botonColor="#ffffff"
              disabled={isBotonDisable}
            >
              <>Twittear</>
            </Boton>
            <small>{200 - textAreaValue.length}</small>
          </form>
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
  textarea:hover, textarea:focus {
    outline:0;
  }
  
`
