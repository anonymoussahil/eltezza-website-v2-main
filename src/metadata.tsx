import React, { useEffect } from "react";
import { BtsData, CarouselData, MetaDataType } from "./types";
import Head from "next/head";
import useWindowSize from "./hooks/useWindowSize";
import { useRouter } from "next/router";

declare global {
  interface Window {
    dataLayer: any[];
  }
}

interface MetaDataProps {
  data: MetaDataType;
  favIconColor?: "purple" | "orange";
  imageData?: Array<BtsData | CarouselData>;
  scroll?: boolean;
  googleAnalyticsId?: "G-6N8ZGJT2LM"; // Add your Google Analytics ID here
}

export default function MetaData({
  data,
  favIconColor = "orange",
  imageData,
  scroll = true,
  googleAnalyticsId,
}: MetaDataProps) {
  const [windowWidth] = useWindowSize();
  const router = useRouter();

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(p0: string, p1: string | Date | undefined, p2: object ) {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date(),{});
    gtag("config", googleAnalyticsId, {
      page_path: router.pathname,
    });

    const handleRouteChange = (url: URL) => {
      gtag("config", googleAnalyticsId, {
        page_path: url,
      });
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [googleAnalyticsId, router.events, router.pathname]);

  return (
    <Head>
      <title>{data.title}</title>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`favicon-${favIconColor}/apple-touch-icon.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`favicon-${favIconColor}/favicon-32x32.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`favicon-${favIconColor}/favicon-16x16.png`}
      />
      <link rel="manifest" href={`favicon-${favIconColor}/site.webmanifest`} />
      {!scroll && (
        <style>{`body { overflow-y: ${
          windowWidth <= 1200 ? "scroll" : "hidden"
        }; }`}</style>
      )}
      {imageData &&
        imageData.map((item) =>
          !item.isVideo ? (
            <link key={item.id} rel="preload" as="image" href={item.src} />
          ) : (
            <link key={item.id} rel="preload" as="video" href={item.src} />
          ),
        )}
      <meta property="og:title" content={data.title} key="title" />
      <meta name="description" content={data.description} key="description" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={data.link} />
      <meta property="og:title" content={data.title} />
      <meta property="og:description" content={data.description} />
      <meta property="og:image" content={data.image} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={data.link} />
      <meta property="twitter:title" content={data.title} />
      <meta property="twitter:description" content={data.description} />
      <meta property="twitter:image" content={data.image} />
    </Head>
  );
}
