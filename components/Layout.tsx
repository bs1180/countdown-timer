import * as React from "react";
import { Global } from "@emotion/core";
import Head from "next/head";

type Props = {
  title?: string;
};

const Layout: React.SFC<Props> = ({ children, title = "This is the default title" }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Global
      styles={{
        body: {
          background: "papayawhip",
          margin: 0,
          padding: 0,
          minHeight: "100%",
          fontFamily: "Helvetica, Arial, sans-serif",
          fontSize: "24px"
        }
      }}
    />
    {children}
  </>
);

export default Layout;
