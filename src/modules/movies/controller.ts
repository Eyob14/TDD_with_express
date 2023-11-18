import { Router, Request } from 'express'
import type { Database } from '@/database'
import { jsonRoute } from '@/utils/middleware'
import buildRepository from './repository'

export default (db: Database) => {
  const messages = buildRepository(db)
  const router = Router()

  router.get(
    '/',
    jsonRoute(async (req: Request) => {
      const movieIdStrings: string[] = req.query.id?.toString().split(',') || []
      const movieIds = movieIdStrings.map((value) => parseInt(value, 10))
      
      const movies = await messages.findByIds(movieIds)

      return movies
    })
  )

  return router
}
