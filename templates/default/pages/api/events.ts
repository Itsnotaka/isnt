import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from '../../lib/session'

import { NextApiRequest, NextApiResponse } from 'next'

export default withIronSessionApiRoute(eventsRoute, sessionOptions)

async function eventsRoute(req: NextApiRequest, res: NextApiResponse) {
  const user = req.session.user

  if (!user || user.isLoggedIn === false) {
    res.status(401).end()
    return
  }
  res.status(200).json([])
}
