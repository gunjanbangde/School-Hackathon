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
      <title>{title ? `${title} | TIF` : "Hackathon"}</title>
    </Head>
    <Navbar />
    {children}
  </>
);
export default Layout;
