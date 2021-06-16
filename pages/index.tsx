import { colors } from '../styles/StyleGlobal'
import Boton from '../components/Boton'
import { MouseEventHandler } from 'react'
import Image from 'next/image'

export default function Home() {
  
  const handleClick : MouseEventHandler = () :void => {
    console.log('se hizo click');
  }

  return (
  <>
      <main >
        <section>
        <Image src='/static/logoFinal.png' alt="logo" width="350px" height="150px" />
        <h1>Twitter <span>Clone</span></h1>
        <h2>Talk to everybody about</h2>
        <h2><span>Religion and politics</span></h2>
        <Boton
          botonBackGroundColor="#000000"
          botonColor="#ffffff"
          onClick={handleClick}
        >
          <>
          <i className="fab fa-github fa-x"></i>
          Login with Github
          </>
        </Boton>
        <Boton
          botonBackGroundColor="#0000FF"
          botonColor="#FFFFFF"
          onClick={handleClick}
        >
          <>
          <i className="fab fa-facebook fa-x"></i>
          Login with Facebook
          </>
        </Boton>  
        </section>
      </main>
    <HomeStyle />
  </>)
}

function HomeStyle(){
  return (
  <style jsx>{`
 
  button {
    margin-top:1rem;
    font-size:1.2em;
  }
  i {
    margin:.35rem;
  }
  section{
    text-align:center;
    width:100%;
    border-top: 1px solid ${colors.third};
    border-bottom: 1px solid ${colors.third};
    padding:1rem;
    background: ${colors.primary};
   
  }
  `}
  </style>
  )
}
