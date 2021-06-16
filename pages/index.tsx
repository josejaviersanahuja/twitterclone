import { colors } from '../styles/StyleGlobal'
import Boton from '../components/Boton'
import { MouseEventHandler } from 'react'

//import styles from '../styles/Home.module.css'

export default function Home() {
  
  const handleClick : MouseEventHandler = () :void => {
    console.log('se hizo click');
  }

  return (
  <>
      <main >
        <section>
        <img src="" alt="logo" />
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
  main {
    display: flex;
    flex-direction:column;
    width:100%;
    height:100vh;
    margin-top: -10vh;
    padding: 10vh 0;
    justify-content:center;
    align-items:center; 
  }
  button {
    margin-top:1rem;
  }
  i {
    margin:.35rem;
  }
  section{
    text-align:center;
    padding:1rem;
    background: ${colors.primary};
    box-shadow: 0 6px 2px -4px rgba(0, 0, 0, 0.2),
    0 4px 4px 0 rgba(0, 0, 0, 0.14),
    0 2px 10px 0 rgba(0, 0, 0, 0.12);
  }
  `}
  </style>
  )
}
