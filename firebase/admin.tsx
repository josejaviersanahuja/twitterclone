import privateKey from './privateKey'
const admin = require('firebase-admin')

const serviceAccount = {
  type: 'service_account',
  project_id: 'twitter-clone-d82aa',
  private_key_id: process.env.NEXT_PUBLIC_private_key_id,
  private_key: privateKey,
  client_email: 'firebase-adminsdk-ep4ws@twitter-clone-d82aa.iam.gserviceaccount.com',
  client_id: process.env.NEXT_PUBLIC_client_id,
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://oauth2.googleapis.com/token',
  auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  client_x509_cert_url: 'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-ep4ws%40twitter-clone-d82aa.iam.gserviceaccount.com'
}

try {
  admin.apps.length === 0 && admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  }) && console.log('hemos inicializado el servicio admin', serviceAccount.private_key === privateKey)
} catch (e) { console.error(e, 'hay un problema con el certificado de service ACCOUNT? ', serviceAccount.private_key !== privateKey) }

export const firesAdmin = admin.firestore()
