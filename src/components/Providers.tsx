import React from 'react';
import { ThemeProvider } from 'next-themes';
import fetchJson from '../libs/fetchJson';
import { SWRConfig } from 'swr';

const WithProviders: React.FC = ({ children }) => (
	<ThemeProvider attribute="class">
		<SWRConfig
			value={{
				fetcher: fetchJson,
				onError: (err: any) => {
					console.error(err);
				},
			}}
		>
			{children}
		</SWRConfig>
	</ThemeProvider>
);

export default WithProviders;
