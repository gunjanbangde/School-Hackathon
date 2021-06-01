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
      <title>LNCT Hackathon</title>
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
