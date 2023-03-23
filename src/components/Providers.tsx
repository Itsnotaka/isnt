import { ThemeProvider } from "next-themes";
import { SWRConfig } from "swr";

import fetchJson from "../libs/fetchJson";

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
