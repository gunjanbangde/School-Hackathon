import React from "react";
import Head from "next/head";

const Layout = ({ title, children }) => {
  return (
    <React.Fragment>
      <Head>
        <title>{title ? `${title} | Firecompass` : "Firecompass"}</title>
      </Head>
      {children}
    </React.Fragment>
  );
};

export default Layout;
