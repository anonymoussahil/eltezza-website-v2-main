import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { poppins, sourceSans } from "@/fonts";
import Layout from "./layout";
import classNames from "classnames";
import { Analytics } from "@vercel/analytics/react";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={classNames(poppins.variable, sourceSans.variable)}>
      <Layout>
        <Analytics/>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
