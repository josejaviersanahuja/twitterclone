import { colors } from '../styles/StyleGlobal'
import Avatar from '../components/Avatar'
import { MouseEventHandler, useState, useEffect } from 'react'
import Image from 'next/image'
import { loginWithGitHub, User, onAuthStateChange } from '../firebase/client'
import LoginBotons from '../components/LoginBotons/LoginBotons'

export default function Home() {
  const [user, setuser] = useState<User | null | undefined>(null)

  useEffect(() => {
    onAuthStateChange(setuser)
    return () => {
      
    }
  }, [])

  const handleClick : MouseEventHandler = () :void => {
    
    loginWithGitHub().then(user => {
      const {avatar, username} = user
      console.log(user);
      setuser(user)
    })
  }
  
  return (
  <>
      <main >
        <section>
        <Image src='/static/logoFinal.png' alt="logo" width="350px" height="150px" />
        <h1>Twitter <span>Clone</span></h1>
        <h2>Talk to everybody about</h2>
        <h2><span>Religion and politics</span></h2>
        <LoginBotons handleClick={handleClick} />
        {user === undefined && <p>es undefined</p>}
         {user === null && <p>es null</p>}
         { user? <Avatar  user={user}/>
          : null}
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
  img {
    border-radius:50%;
  }
  `}
  </style>
  )
}

/* 
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.6.7/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/8.6.7/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAYbxDAxdQCdtP9OsH-jx2pKx7pTgCaj9U",
    authDomain: "twitter-clone-d82aa.firebaseapp.com",
    projectId: "twitter-clone-d82aa",
    storageBucket: "twitter-clone-d82aa.appspot.com",
    messagingSenderId: "19699790325",
    appId: "1:19699790325:web:5389c2602ceedcb3e5b0bc",
    measurementId: "G-2JXZ77TLVZ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>
*/