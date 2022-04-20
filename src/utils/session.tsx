import { NextApiHandler } from 'next'
import { withIronSession } from 'next-iron-session'

export const withSession = (handler: NextApiHandler) => {
  return withIronSession(handler, {
    password: process.env.SECRET_COOKIE_PASSWORD,
    cookieName: 'beta.kolek.io',
    cookieOptions: {
      // the next line allows to use the session in non-https environments like
      // Next.js dev mode (http://localhost:3000)
      secure:
        process.env.NODE_ENV === 'production'
          ? true
          : false,
    },
  })
}
