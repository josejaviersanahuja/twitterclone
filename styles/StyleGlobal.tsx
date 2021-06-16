import { addOpacity, lighten } from "./styleUtils"
interface GlobalStyle {
    fondoColor:string, // de cualquier color #FFF || #FFFFFF || rgb(0,0,0) || rgba(0,0,0,0)
    letraColor:string, 
    anchorColor:string
}

export const colors = {
    primary: "#efefef",
    secondary: "#000020",
    third: '#1c54cc',
}

export default function StyleGlobal ({fondoColor, letraColor,  anchorColor}:GlobalStyle) {
    
    return  <style jsx global>
    {`html,  body {
              background-color: ${fondoColor};
              background-image: 
                radial-gradient(${addOpacity({color:letraColor, porcentaje:0.3})} 1px, transparent 1px),
                radial-gradient(${addOpacity({color:letraColor, porcentaje:0.3})} 1px, transparent 1px);
              background-position: 0 0, 25px 25px;
              background-size: 50px 50px;
              color: ${letraColor};
              padding: 0;
              margin: 0;
              font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
          }
          span {
              color:${colors.third}
          }
    
          a {
              color: ${anchorColor};
              text-decoration: none;
          }
    
          *, *::before, *::after {
              box-sizing: border-box;
              padding: 0;
              margin: 0;
          }
      `}
    </style>
    }
    