import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { poppins, sourceSans } from "@/fonts";
import Layout from "./layout";
import classNames from "classnames";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={classNames(poppins.variable, sourceSans.variable)}>
      <Layout>
        <Analytics/>
        <SpeedInsights/>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
