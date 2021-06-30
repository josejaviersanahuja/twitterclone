import { firesAdmin } from '../../../firebase/admin'

export default (req, res) => {
  firesAdmin.collection('twits')
    .get()
    .then((snapshot) => {
      const latestTwitsID: string[] = snapshot.docs.map(e => {
        const twitID : string = e.id
        return twitID
      })
      res.json(latestTwitsID)
    }).catch((err) => console.error(err, 'error en peticion de get Paths'))
}
