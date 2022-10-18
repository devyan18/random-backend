import { Router } from 'express'
import { readdirSync } from 'fs'
import path from 'path'

const PATH_ROUTER = path.join(__dirname, '../routes')

const router = Router()

const truncFileName = (fileName: string) => {
  const file = fileName.split('.').shift()
  return file
}

console.log('Loading modules...')

readdirSync(PATH_ROUTER).filter((fileName) => {
  const nameTruncked = truncFileName(fileName)

  if (nameTruncked) {
    const filePath = path.join(PATH_ROUTER, nameTruncked)

    import(filePath).then((response) => {
      router.use(`/${nameTruncked}`, response.router)
      console.log(`:: module --> [${nameTruncked}] loaded! ✅`)
    })
  }
})

export default router
