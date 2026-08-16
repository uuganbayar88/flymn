import Script from "next/script";
import { demoMarkup } from "../lib/markup";

export default function Home() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: demoMarkup }} />
      <Script src="/demo.js" strategy="afterInteractive" />
    </>
  );
}
