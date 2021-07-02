import firebase from 'firebase'

/* -----------------------------------
Inicializamos firebase
----------------------------------------- */
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

/* -----------------------------------
Empezamos a trabajar con usuarios
--------------------------------- */
export interface User {
  avatar: string;
  username: string;
  email: string;
  id: string;
  following: [];
  followers: [];
}

export interface UserReducedInfo {
  avatar: string;
  username: string;
  email: string;
  id: string;
}

export const reduceUserInformation = (user: User): UserReducedInfo => {
  const userToReturn: UserReducedInfo = {
    avatar: user.avatar,
    email: user.email,
    id: user.id,
    username: user.username
  }

  return userToReturn
}

/* id debe ser de la forma user.id Además,
esta función solo debe ejecutarse si user no existe en firestore */

const sendUserToDataBase = (user: UserReducedInfo): Promise<void> => {
  const userToStore = {
    ...user,
    following: [],
    followers: []
  }
  // console.log(userToStore, 'en funcion en firebase client')
  return db
    .collection(process.env.NEXT_PUBLIC_users_collection)
    .doc(user.id)
    .set(userToStore)
    .then(() => {
      console.log('Document successfully written!')
    })
    .catch((error) => {
      console.error('Error writing document: ', error)
    })
}
// aquí podría ejecutarse el sendUserToDataBase
export const amplifyUserInformation = (user: UserReducedInfo | undefined, callback : any) => {
  if (user) {
    return db
      .collection(process.env.NEXT_PUBLIC_users_collection)
      .doc(user.id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          const finalUser = {
            ...user,
            following: doc.data().following,
            followers: doc.data().followers
          }
          callback(finalUser)
          console.log('Document data:', finalUser)
        } else {
          // replace de log for the setter with empty fllow(ers|ing)[] []
          console.log('No such document!')
          sendUserToDataBase(user)
          const userToReturn : User = { ...user, following: [], followers: [] }
          callback(userToReturn)
        }
      }).catch((error) => {
        console.log('Error getting document:', error)
      })
  } else {
    callback(undefined)
  }
}

const getUser = (user: firebase.User): UserReducedInfo => {
  // console.log(user) // sirve para estudiar el objeto que devuelve firebase

  const username: string = user.displayName
  // eslint-disable-next-line camelcase
  const avatar: string = user.providerData[0].photoURL
  const email: string = user.email
  const id: string = user.uid
  const result: UserReducedInfo = { avatar, username, email, id }
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

/* ---------------------------------------
Ahora trabajamos con los twits
------------------------------------ */

interface sendTwitProps {
  user: UserReducedInfo;
  textAreaValue: string;
  imgURL?: string | null;
}
// sendTwitProps son los datos para crear un twit en base de datos en sendTwit
export const sendTwit = ({
  user,
  textAreaValue,
  imgURL
}: sendTwitProps): Promise<
  firebase.firestore.DocumentReference<firebase.firestore.DocumentData>
> => {
  const twitToStore = {
    user: user,
    content: textAreaValue,
    createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
    likes: 0,
    shared: 0,
    imgURL: imgURL
  }
  // console.log(twitToStore, 'en funcion en firebase client')
  return db
    .collection(process.env.NEXT_PUBLIC_twits_collection)
    .add(twitToStore)
}

// TwitInfo son los datos que recibimos de la base de datos
export interface TwitInfo {
  twitID: string;
  content: string;
  user: User;
  createdAt: number; // in miliseconds?
  likes: number;
  shared: number;
  imgURL: string | null;
}

const extractTwitsFromFirebase = (
  snapshot: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>
): TwitInfo[] | void => {
  const latestTwits: TwitInfo[] | void = snapshot.docs.map((e) => {
    const twitID: string = e.id
    const content: string = e.data().content
    const user: User = e.data().user
    const createdAt: number = +e.data().createdAt.toDate()
    const likes: number = e.data().likes
    const shared: number = e.data().shared
    const imgURL: string | null = e.data().imgURL
    const twit: TwitInfo = {
      twitID,
      content,
      user,
      createdAt,
      likes,
      shared,
      imgURL
    }
    return twit
  })
  return latestTwits
}

export const listenLatestTwits = (callback) => {
  return db
    .collection(process.env.NEXT_PUBLIC_twits_collection)
    .orderBy('createdAt', 'desc')
    .limit(20)
    .onSnapshot((snapshot) => {
      const latestTwits: TwitInfo[] | void = extractTwitsFromFirebase(snapshot)
      callback(latestTwits)
    })
}

export const uploadImage = (file: File) => {
  const ref = file ? firebase.storage().ref(`images/${file.name}`) : null
  const task: firebase.storage.UploadTask = ref.put(file)
  return task
}
