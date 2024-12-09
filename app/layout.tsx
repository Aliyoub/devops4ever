import { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";
import "./styles.css";
import LayoutClientComponent from "./layoutClientComponent";
import ViewWithBorderRadius from "@/components/ViewWithBorderRadius/ViewWithBorderRadius";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Devops for ever",
  description: "Devops for ever",
  manifest: "/manifest.json",
};

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/styles.css" />
      </Head>
      <LayoutClientComponent>
        <ViewWithBorderRadius>{children}</ViewWithBorderRadius>
      </LayoutClientComponent>
    </>
  );
};

export default Layout;
