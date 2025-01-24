import { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";
import "../public/styles.css";
import LayoutClientComponent from "./layoutClientComponent";
import Head from "next/head";
import ViewWithBorderRadius from "@/components/ViewWithBorderRadius/ViewWithBorderRadius";

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
