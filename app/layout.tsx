import { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";
import "./styles.css";
import LayoutClientComponent from "./layoutClientComponent";
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
    <LayoutClientComponent>
      <ViewWithBorderRadius>
      {children}
    </ViewWithBorderRadius>
    </LayoutClientComponent>
  );
}

export default Layout;
