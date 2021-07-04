/* eslint-disable no-use-before-define */
import React, { ReactElement } from 'react'
import LoadingAvatar from '../../components/LoadingAvatar'
import LoadingTwits from '../../components/LoadingTwits'
import Footer from '../../components/Footer'
import css from 'styled-jsx/css'

export default function index (): ReactElement {
  return (<>
        <main>
          <header>
            <LoadingAvatar small/>
            <strong>test</strong>
          </header>
          <LoadingTwits/>
          <Footer/>
        </main>
        <style jsx>{homeStyle}</style>
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
    
      div {
        margin-top:3rem;
      }
    `
