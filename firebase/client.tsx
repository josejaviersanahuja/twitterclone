import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAYbxDAxdQCdtP9OsH-jx2pKx7pTgCaj9U',
  authDomain: 'twitter-clone-d82aa.firebaseapp.com',
  projectId: 'twitter-clone-d82aa',
  storageBucket: 'twitter-clone-d82aa.appspot.com',
  messagingSenderId: '19699790325',
  appId: '1:19699790325:web:5389c2602ceedcb3e5b0bc',
  measurementId: 'G-2JXZ77TLVZ'
}

firebase.apps.length === 0 && firebase.initializeApp(firebaseConfig)

export interface User {
    avatar: string,
    username: string,
}

const getUser = (user: firebase.User) : User => {
  console.log(user)

  const username: string = user.displayName
  // eslint-disable-next-line camelcase
  const avatar_url : string = user.providerData[0].photoURL

  const result : User = { avatar: avatar_url, username: username }
  return result
}

export const onAuthStateChange = (onchange) => {
  return firebase.auth().onAuthStateChanged(user => {
    const updatedUserState = user ? getUser(user) : undefined
    onchange(updatedUserState)
  })
}

export const loginWithGitHub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider()
  return firebase.auth()
    .signInWithPopup(githubProvider)
}
