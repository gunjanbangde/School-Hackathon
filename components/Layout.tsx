import React, { ReactNode } from "react";
import Head from "next/head";
import Navbar from "components/Navbar/Navbar";

interface Props {
  title?: string;
  children?: ReactNode;
}

const Layout: React.FC = ({ title, children }: Props) => (
  <>
    <Head>
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
      <title>{title ? `${title} | TIF` : "The Internet Folks"}</title>
    </Head>
    <Navbar />
    {children}
  </>
);
export default Layout;
