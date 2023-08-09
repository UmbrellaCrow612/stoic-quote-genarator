import GlobalLayout from "@/layout/GlobalLayout";
import "@/styles/global.css";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SWRConfig
        value={{
          refreshInterval: 3000,
          fetcher: (resource, init) =>
            fetch(resource, init).then((res) => res.json()),
        }}
      >
        <GlobalLayout>
          <Component {...pageProps} />
        </GlobalLayout>
      </SWRConfig>
    </>
  );
}
