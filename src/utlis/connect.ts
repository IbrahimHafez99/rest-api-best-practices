import mongoose from 'mongoose'
import config from 'config'

async function connect() {
  const dbUri = config.get<string>('dbUri')
  return mongoose.connect(dbUri).then(() => {
    console.log("Connected to DB")
  }).catch(() => {
    console.error("Couldn't connect to db")
  })
}

export default connect