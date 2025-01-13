// }

import dynamic from "next/dynamic";
// const Layout = dynamic(() => import("@/components/themes"));
import "@/styles/index.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { RecoilRoot } from "recoil";
import { Suspense } from "react";
import { LoadingApp } from "@/components";
import { UserProvider } from "@/components/context/UserContext";

const Layout = dynamic(() => import("@/components/themes"), {
  suspense: true
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <UserProvider>
      <Layout>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <title>Admin Template</title>
        </Head>

        <Suspense fallback={<LoadingApp />}>
          <Component {...pageProps} />
        </Suspense>
      </Layout>
      </UserProvider>
    </RecoilRoot>
  );
}
