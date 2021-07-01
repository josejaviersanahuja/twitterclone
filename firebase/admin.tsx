const admin = require('firebase-admin')

const serviceAccount = {
  type: 'service_account',
  project_id: 'twitter-clone-d82aa',
  private_key_id: process.env.NEXT_PUBLIC_private_key_id,
  private_key: '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDpmTLDumpruAYf\n3ERw8ldOg/r3OfatWV9HzkSYD6dnNfjpW2e0lWUTiT1tSTIeVuh1azFUWnVVP4ou\naA0MZSU6GGOwAOd133b4+tAnQtVf42Eh0MX8ZBfbpqHY+pb1ItppXM+IKMBnguai\nxGZW6EwjwsxZWbfzQOXGvGqoGmHF8uk+I/gfYoFhuGdwEMnU22D7I+79Vg9Rznfw\nyYgobjDhXQnAbkz5Dnuzsje6EWu3uwa4MRxbgEI4pp/vwJGLF24Na+XMCDemXUZi\nb+Ls11DvdwaFQgYJ3AZkQxr/kNAlrQn1Sh0T+Swjll+v7xBfCS9PaOMSRzWgUZSn\nricPic/hAgMBAAECggEAANbQH/QIY/+AJXb8V56F50OMmtI+ZgQt64YHaOIXgxn7\nx/96zs3W6YbNmG9R9YTGPCkTfzQoUJMpmyiRsW4fP9yXZmoJFXs6bsMHN+ONfNUb\ng8xU8GbopLKYyWd/CX2OT3YUoxkoYHF6hBz/VB0XVu02dYoKYd6QD2fHsfe5oFp7\nr4ze+r6Qfon7VyWVKjH5RhSbyvl+vBv/4lFxK7gnPBh/v8vvUj9zxniMMaVbvUvo\nCOrHdQwnpci/4WskBXRNAqRcfUqxe9rqwJJY4qaVe7hZe3c3Sz4oAmP1QGRc2hJy\nqL8Q6GpufO8bAxDYYdIQuN55nNAXFhtA7OonuYiGZQKBgQD71pcUY+JyQSKLNh7P\nbtjTWMhHX7ogv6WhTNeIrgOWconuntr5z3upNygsFi/Nq1j9R0fXQrCWucGnG5vB\nGcBQDF4m3qLMgmjIigtRQpeinjTFfIIK/MVhCNII7eN/HCWDOd+ruhfzoTFUGYWt\nJD2tnmQvEUf5cu9hyEiIkeCxPQKBgQDtdXGr4D52gJPRB+qSJ+Am0BFNoXbpp5AP\nqDZWTB62zEVdUwjpTSlQ5MNRqOYusJusS4GltF+iIzVxtqtb5LYIxUs5XnjIhDXN\nVLSKx7vGRddf9IHlWOaGUIMhdMf3H37wF7GAgRx/+RhZbLNjxjmQFKqlvESrJ04L\n544/C3r7dQKBgCOlD+U27go15enGUz4Q9meTnWVcyz9vYMYf1jHmT2Ov+o3nth69\nm0csI2d6DHIT2pieyjBRpCTxTdOVOMpwFqQ92+WshWZk3ufjgg6SWlwOAHIjWVSs\nylMdqHzTDuwi07xrKJlp0ZIOMqkwo5cKFiDI1m1DCOjpt7AjZQDPhPoRAoGACfxa\nX2P6vHkDvlKa5rKOlpNBZwZXPdQyFrZ4MoDY+c71S8tmIImCJ0i3fgOgSm5a3Y//\nT7yaGPNqF/Iamq6viQbi9vKmGaiVqqDZRszHdLsTJ5HctIxchWF1Yj7K+fV1HRuh\n90l2rVsITxpnINcBLLHxyy5zpM7uVUnTjYsqDNECgYEAuRZeFFecVlSFj/mIUXg3\njAwJiT/QFWCJCnDoY2818iOvJOk7zz6bHImxGNnqIi7bvp29NaGQiZDq/WxA1Qpp\nVWeoWSl5SQ/AXRRnL/IqtDStqocP1+gvX0gLLvJ9S23IFRB23RtS/7aLV/dCd5LB\n9oRuoXNJzepQHSI4e/yyNyo=\n-----END PRIVATE KEY-----\n',
  client_email: 'firebase-adminsdk-ep4ws@twitter-clone-d82aa.iam.gserviceaccount.com',
  client_id: '101295758633687716567',
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://oauth2.googleapis.com/token',
  auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  client_x509_cert_url: 'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-ep4ws%40twitter-clone-d82aa.iam.gserviceaccount.com'
} // require('./serviceAccountKey.json')

try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  })
  console.log('hemos inicializado el servicio admin')
} catch {}

export const firesAdmin = admin.firestore()
