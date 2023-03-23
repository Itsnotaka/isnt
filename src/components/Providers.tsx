import { ThemeProvider } from 'next-themes';
import fetchJson from '../libs/fetchJson';
import { SWRConfig } from 'swr';

const WithProviders = ({ children }: { children: React.ReactNode }) => (
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
