const admin = require('firebase-admin')

const serviceAccount = require('./serviceAccountKey.json')

try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  })
} catch {}

console.log(admin.apps.length, 'inicio de admin')

export const firesAdmin = admin.firestore()
