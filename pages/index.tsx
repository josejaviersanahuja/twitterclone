import Link from 'next/link'

//import styles from '../styles/Home.module.css'

export default function Home() {
  
  
  return (
  <>
      <main >
        <h1 >
          Welcome to <Link href="https://nextjs.org">Next.js!</Link>
        </h1>
      </main>
    <HomeStyle />
  </>)
}

function HomeStyle(){
  return (
  <style jsx>{`
  main {
    width:100%;
    height:100vh;
    text-align:center;
    margin-top: -10vh;
    padding: 10vh 0;
  }
  `}
  </style>
  )
}
