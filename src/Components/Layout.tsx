import React from "react";
import Head from "./Metadata/Head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LayoutAnimation from "./LayoutAnimation";

interface Props {
  children: React.ReactNode;
  title: string;
}

function Layout({ title, children }: Props) {
  return (
    <main className="fixFooter">
      <Head title={title} />

      <Navbar />
      <LayoutAnimation>
        <main className="max-w-screen-lg w-full mx-auto">{children}</main>
        <Footer />
      </LayoutAnimation>
    </main>
  );
}

export default Layout;
