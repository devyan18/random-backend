const { JWT_SECRET, MONGODB_URI, NODE_ENV, PORT } = process.env

const LOCAL_PORT = 4000
const LOCAL_JWT_SECRET = 'secret'
const LOCAL_MONGO_URI = 'mongodb://localhost:27017/random'
const MONGO_URI_TEST = 'mongodb://localhost:27017/random-test'

export default {
  PORT: PORT || LOCAL_PORT,
  MONGO_URI: (
    NODE_ENV === 'test'
      ? MONGO_URI_TEST || ''
      : NODE_ENV === 'production'
        ? MONGODB_URI || ''
        : LOCAL_MONGO_URI || ''
  ),
  JWT_SECRET: JWT_SECRET || LOCAL_JWT_SECRET
}
