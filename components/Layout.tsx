import React, { ReactNode } from "react";
import Head from "next/head";
import Navbar from "components/Navbar/Navbar";
import Footer from "./Footer/Footer";

interface Props {
  title?: string;
  children?: ReactNode;
}

const Layout: React.FC = ({ children }: Props) => (
  <>
    <Head>
      <title>STEM Model Competition</title>
      <meta
        name="description"
        content="STEM Model Competition organized by LNCT Group of Colleges"
      />
      <meta property="og:title" content="LNCT Hackathon" />
      <meta
        property="og:description"
        content="STEM Model Competition organized by LNCT Group of Colleges"
      />
      <meta
        property="og:image"
        content="https://lnct-hackathon.vercel.app/assets/Hackathon%20Club%20Logo.png"
      />
      <meta property="og:url" content="https://lnct-hackathon.vercel.app/" />
      <meta property="og:site_name" content="LNCT Hackathon" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
    <Navbar />
    {children}
    <Footer />
  </>
);
export default Layout;
