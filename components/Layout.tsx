import React, { ReactNode } from "react";
import Head from "next/head";
import Navbar from "components/Navbar/Navbar";
import Footer from "./Footer/Footer";

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
    <Footer />
  </>
);
export default Layout;
