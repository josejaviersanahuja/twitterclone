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
const db = firebase.firestore()
export interface User {
  avatar: string;
  username: string;
  email: string;
  id: string;
}

const getUser = (user: firebase.User): User => {
  // console.log(user) // sirve para estudiar el objeto que devuelve firebase

  const username: string = user.displayName
  // eslint-disable-next-line camelcase
  const avatar: string = user.providerData[0].photoURL
  const email: string = user.email
  const id: string = user.uid
  const result: User = { avatar, username, email, id }
  return result
}

export const onAuthStateChange = (onchange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const updatedUserState = user ? getUser(user) : undefined
    onchange(updatedUserState)
  })
}

export const loginWithGitHub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider()
  return firebase.auth().signInWithPopup(githubProvider)
}

interface sendTwitProps {
  user: User;
  textAreaValue: string;
}

export const sendTwit = ({
  user,
  textAreaValue
}: sendTwitProps): Promise<
  firebase.firestore.DocumentReference<firebase.firestore.DocumentData>
> => {
  const twitToStore = {
    user: user,
    content: textAreaValue,
    createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
    likes: 0,
    shared: 0
  }
  // console.log(twitToStore, 'en funcion en firebase client')
  return db.collection('twits').add(twitToStore)
}

export interface TwitInfo {
  twitID: string,
  content: string,
  user: User,
  createdAt: number, // in miliseconds?
  likes: number,
  shared: number,
}

export const getLatestTwits = () => {
  return db
    .collection('twits')
    .orderBy('createdAt', 'desc')
    .limit(20)
    .get()
    .then((snapshot) => {
      const latestTwits : TwitInfo[] | void = snapshot.docs.map(e => {
        const twitID : string = e.id
        const content : string = e.data().content
        const user: User = e.data().user
        const createdAt: number = +e.data().createdAt.toDate()
        const likes: number = e.data().likes
        const shared : number = e.data().shared
        const twit : TwitInfo = { twitID, content, user, createdAt, likes, shared }
        return twit
      })
      return latestTwits
    }).catch((err) => console.error(err))
}
