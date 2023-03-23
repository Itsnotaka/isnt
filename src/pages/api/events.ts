import { NextApiRequest, NextApiResponse } from "next";
import { withIronSessionApiRoute } from "iron-session/next";

import { sessionOptions } from "../../libs/session";

export default withIronSessionApiRoute(eventsRoute, sessionOptions);

async function eventsRoute(req: NextApiRequest, res: NextApiResponse) {
  const { user } = req.session;

  if (!user || user.isLoggedIn === false) {
    res.status(401).end();
    return;
  }

  res.status(200).json([]);
}
