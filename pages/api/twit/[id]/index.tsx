import { firesAdmin } from '../../../../firebase/admin'

export default (req, res) => {
  const { query } = req
  const { id } = query
  firesAdmin.collection('twits')
    .doc(id)
    .get()
    .then(doc => {
      const data = doc.data()
      res.json(data)
    }).catch(() => {
      res.status(404).end()
    })
}
