
export default function Twits() {
  
    return (<>
        <main >
          <h1 >
            Esta es la página de twits
          </h1>
        </main>
      <TwitStyle />
    </>)
  }
  
  function TwitStyle(){
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
  