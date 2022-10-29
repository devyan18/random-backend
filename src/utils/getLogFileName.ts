import fs from 'fs'
import path from 'path'

const getLogFileName = () => {
  const logsDirectory = path.join(__dirname, '..', 'logs')
  const logFileDirectory = path.join(logsDirectory, `${new Date().toISOString().slice(0, 10)}.log`)
  if (!fs.existsSync(logsDirectory)) {
    fs.mkdirSync(logsDirectory, { recursive: true })
  }

  console.log(logFileDirectory)
  return logFileDirectory
}

export default getLogFileName
