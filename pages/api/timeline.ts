import { User } from '../../firebase/client'
export interface TwitInfo {
    id: number,
    name: string,
    message: string,
    user: User,
}

const timeline : TwitInfo[] = [
  {
    id: 1,
    user: {
      username: 'la nanyta',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXNXaEValC0cIbMC6HK_Gu9F-vVusyW1l0Cg&usqp=CAU'
    },
    name: 'ariannys arrieche',
    message: 'Amet laboris fugiat magna sunt duis voluptate quis incididunt amet. Nulla sunt anim deserunt veniam commodo consectetur dolor nostrud. Labore laboris aliqua consectetur dolore veniam esse sunt consectetur ut laborum laboris est. Laborum ipsum labore magna velit duis duis commodo.'
  },
  {
    id: 2,
    user: {
      username: 'JM',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMENX5WmuGGmbhiolEfHVfOLqz2Tc9b7b-vaOK6fD4lK3Yk1yBGGbfhE8iegXv6RUiEHI&usqp=CAU'

    },
    name: 'Jose Manuel',
    message: 'Amet laboris fugiat magna sunt duis voluptate quis incididunt amet. Nulla sunt anim deserunt veniam commodo consectetur dolor nostrud. Labore laboris aliqua consectetur dolore veniam esse sunt consectetur ut laborum laboris est. Laborum ipsum labore magna velit duis duis commodo.'
  },
  {
    id: 3,
    user: {
      username: 'JA',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPDjAldNLWRyOILLFa77g0XfaJO2Tu4mRia42KChSMWK8MZ6MRkIN7R5pQcvYkF1SY9Lw&usqp=CAU'
    },
    name: 'Javier Angel',
    message: 'Amet laboris fugiat magna sunt duis voluptate quis incididunt amet. Nulla sunt anim deserunt veniam commodo consectetur dolor nostrud. Labore laboris aliqua consectetur dolore veniam esse sunt consectetur ut laborum laboris est. Laborum ipsum labore magna velit duis duis commodo.'
  }
]

export default (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(timeline))
}
