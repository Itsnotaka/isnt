// This file is a wrapper with defaults to be used in both API routes and `getServerSideProps` functions
import type { IronSessionOptions } from 'iron-session';
import type { User } from '../pages/api/user';

export const sessionOptions: IronSessionOptions = {
	password: process.env.SECRET_COOKIE_PASSWORD as string,
	cookieName: 'iron-session/examples/next.js',
	// Secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
	cookieOptions: {
		secure: process.env.NODE_ENV === 'production',
	},
};

// This is where we specify the typings of req.session.*
declare module 'iron-session' {
  // eslint-disable-next-line no-unused-vars
  interface IronSessionData {
    user?: User
	// ...
  }
}
