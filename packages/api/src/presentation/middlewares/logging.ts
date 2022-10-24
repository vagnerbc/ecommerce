/* eslint-disable no-console */
import { NextFunction, Request, Response } from 'express'

const logging = (req: Request, res: Response, next: NextFunction) => {
  console.debug('Request received', req.method, req.url)

  next()
}

export default logging
