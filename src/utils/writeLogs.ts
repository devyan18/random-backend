import path from 'path'
import fs from 'fs'

const writeLogs = (logs: string) => {
  const logsDirectory = path.join(__dirname, '..', 'logs')
  const logFileDirectory = path.join(logsDirectory, `${new Date().toISOString().slice(0, 10)}.log`)

  fs.createWriteStream(logFileDirectory, `${logs}\n`)
}

export default writeLogs
