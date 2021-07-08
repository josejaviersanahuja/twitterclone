/* eslint-disable no-use-before-define */
import React, { ReactElement, useEffect } from 'react'
import css from 'styled-jsx/css'
import Boton from '../../../components/Boton'
import Avatar from '../../../components/Avatar'
import { colors } from '../../../styles/StyleGlobal'
import Spinner from '../../../components/Spinner'
import LoadingAvatar from '../../../components/LoadingAvatar'
import useTwitComposer from '../../../hooks/useTwitComposer'
import PictureIcon from '../../../icons/PictureIcon'
import BotonToGoBack from '../../../components/BotonToGoBack'
import Footer from '../../../components/Footer'

// eslint-disable-next-line no-empty-pattern
export default function index (): ReactElement {
  const {
    textAreaValue,
    handleChange,
    handleSubmit,
    isBotonDisable,
    user,
    router,
    imgURL,
    handleDragEnter,
    handleDragLeave,
    handleOnDrop,
    styleOnDrag,
    handleInputFileChange,
    handleResetImgUpload,
    handleInputClick
  } = useTwitComposer()

  useEffect(() => {
    user === undefined && router.replace('/')
  }, [user])

  return (
    <>
      <main>
        <header>
          <BotonToGoBack/>
          <div className="botonTwittear">{/* aqui iba el boton */}</div>
        </header>
        <section>
          {user === undefined && <Spinner />}
          {user === null && <LoadingAvatar small/>}
          {user && <Avatar userA={user} />}

          <form onSubmit={handleSubmit}>
            <textarea
              cols={30}
              rows={7}
              placeholder="¿Qué está pasando?"
              value={textAreaValue}
              onChange={handleChange}
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDrop={handleOnDrop}
            ></textarea>
            {imgURL && (
              <div className="imgUpload__wrapper">
                <img src={imgURL} alt={imgURL} />
                <button onClick={handleResetImgUpload}>X</button>
              </div>
            )}
            <input
              type="file"
              id="imgTwit"
              name="imgTwit"
              accept="image/png, image/jpeg"
              multiple={false}
              onChange={handleInputFileChange}
              style={{ display: 'none' }}
              onClick={handleInputClick}
            />
            <label htmlFor="imgTwit"><PictureIcon/></label>
            <Boton
              onClick={() => {}}
              botonBackGroundColor={colors.third}
              botonColor="#ffffff"
              disabled={isBotonDisable}
              style={{ position: 'absolute', top: '7px', right: '16px', zIndex: 1 }}
            >
              <>Twittear</>
            </Boton>

            <small>{200 - textAreaValue.length}</small>
          </form>
        </section>
        <Footer/>
      </main>
      <style jsx>{composeStyle}</style>
      <style jsx>{`
        textarea {
          background: ${colors.primary};
          border: ${styleOnDrag};
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
  
  form {
    width: 90%;
  }

  section {
    padding: 10px 15px;
    border-top: 1px solid lightblue;
    display: flex;
    align-items: flex-start;
    padding-top: 3rem;
  }
  textarea {
    width: 100%;
    font-family: inherit;
    white-space: pre-wrap;
    margin: 0 10px;
    border-radius: 8px;
    font-size: 1.25rem;
    border-bottom: 1px solid lightblue;
    padding: 5px;
  }
  textarea:hover,
  textarea:focus {
    outline: 0;
  }
  .imgUpload__wrapper {
    position:relative;
    width:90%;
  }
  .imgUpload__wrapper img{
    max-width:100%;
  }
  
  .imgUpload__wrapper button{
    isolation: isolate;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    -webkit-appearance: none;
    -moz-appearance: none;
    border: none;
    background: none;
    cursor: pointer;
    position: absolute;
    height: 30px;
    width: 30px;
    top:5px;
    right:5px;
    background:rgba(0,0,0,.5);
    color: white;
    border-radius: 50%;
    padding:3px;
  }
  .imgUpload__wrapper button:hover{
    background:black;
    }
 main {
   position:relative;
 }
 small {
   float:right;
 }
`
