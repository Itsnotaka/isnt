import * as React from 'react';
import useUser from '../libs/useUser';
import Layout from '../components/Layout';
import Form from '../components/Form';
import fetchJson, { FetchError } from '../libs/fetchJson';

export default function Login() {
	// Here we just check if user is already logged in and redirect to profile
	const { mutateUser } = useUser({
		redirectTo: '/',
		redirectIfFound: true,
	});

	const [errorMsg, setErrorMsg] = React.useState('');

	return (
		<Layout>
			<div className="login">
				<Form
					errorMessage={errorMsg}
					// eslint-disable-next-line func-names
					onSubmit={async function handleSubmit(event) {
						event.preventDefault();

						const body = {
							password: event.currentTarget.password.value,
						};

						try {
							mutateUser(
								await fetchJson('/api/login', {
									method: 'POST',
									headers: { 'Content-Type': 'application/json' },
									body: JSON.stringify(body),
								}),
							);
						} catch (error) {
							if (error instanceof FetchError) {
								setErrorMsg(error.data.message);
							} else {
								console.error('An unexpected error happened:', error);
							}
						}
					}}
				/>
			</div>
		</Layout>
	);
}
