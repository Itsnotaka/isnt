import type { User } from './user';
import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from '../../libs/session';
import { NextApiRequest, NextApiResponse } from 'next';

export default withIronSessionApiRoute(loginRoute, sessionOptions);

async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
	const { password }: { password: string } = await req.body;

	const errorMessageList = [
		'Oops! Password Incorrect!',
		'Do better la!',
		'You are a FAILURE!',
		'You\'re not a real user!!!',
		'WHO ARE YOU??!?!?!',
		'EMOTIONAL DAMAGE!!!',
		'I don\'t know you!',
		'HOW DID YOU GET HERE?!?!?!',
		'I will send u to jesus',
	];

	if (password.toLowerCase() !== process.env.KEYWORD) {
		res.status(500).json({
			message:
				errorMessageList[Math.floor(Math.random() * errorMessageList.length)],
		});
		return;
	}

	const user = { isLoggedIn: true } as User;
	req.session.user = user;
	await req.session.save();
	res.json(user);
}
