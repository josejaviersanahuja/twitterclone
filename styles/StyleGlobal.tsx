interface GlobalStyle {
    fondoColor:string, // de cualquier color #FFF || #FFFFFF || rgb(0,0,0) || rgba(0,0,0,0)
    letraColor:string, 
    anchorColor:string
}

export default function StyleGlobal ({fondoColor, letraColor,  anchorColor}:GlobalStyle) {
    
    return  <style jsx global>
    {`html,  body {
              background: ${fondoColor};
              color: ${letraColor};
              padding: 0;
              margin: 0;
              font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
          }
    
          a {
              color: ${anchorColor};
              text-decoration: none;
          }
    
          * {
              box-sizing: border-box;
          }
      `}
    </style>
    }
    