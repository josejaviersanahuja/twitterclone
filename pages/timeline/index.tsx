import { ReactElement } from 'react'
import { GetStaticProps } from 'next'

interface Props {
    usuario: string
}

export default function TimeLine({usuario}: Props): ReactElement {

    return (<>
        <main >
          <h1 >
            Esta es la página de Timeline {usuario}
          </h1>
        </main>
      <Style />
    </>)
}

function Style(){
    return (
    <style jsx={true}>{`
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
  
  
