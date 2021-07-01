/* eslint-disable react/react-in-jsx-scope */
import { addOpacity } from './styleUtils'
interface GlobalStyle {
    fondoColor:string, // de cualquier color #FFF || #FFFFFF || rgb(0,0,0) || rgba(0,0,0,0)
    letraColor:string,
    anchorColor:string
}

export const colors = {
  primary: '#efefef',
  secondary: '#000020',
  third: '#00a2f5',
  fourth: '#604af9'
}

export default function StyleGlobal ({ fondoColor, letraColor, anchorColor }:GlobalStyle) {
  return <style jsx global>
    {`
    *, *::before, *::after {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
  }
    html,  body {
              background-color: ${fondoColor};
              display:grid;
              place-content:center;
              background-image: 
                radial-gradient(${addOpacity({ color: letraColor, porcentaje: 0.3 })} 1px, transparent 1px),
                radial-gradient(${addOpacity({ color: letraColor, porcentaje: 0.3 })} 1px, transparent 1px);
              background-position: 0 0, 25px 25px;
              background-size: 50px 50px;
              color: ${letraColor};
              padding: 0;
              margin: 0;
              font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
          }
          span {
              color:${colors.third};
          }
          
          main {
            display: flex;
            flex-direction:column;
            background:${colors.primary};
            width:100vw;
            max-width: 500px;
            height:100vh;
            padding: 2rem 0;
            overflow-Y: scroll;
            box-shadow: 0 6px 2px -4px rgba(0, 0, 0, 0.2),
            0 4px 4px 0 rgba(0, 0, 0, 0.14),
            0 2px 10px 0 rgba(0, 0, 0, 0.12);
          }
    
          a {
              color: ${anchorColor};
              text-decoration: none;
          }
    
          .fotoAvatar {
            border-radius: 50% !important;
            margin-left: auto;
          }
          
      `}
    </style>
}
