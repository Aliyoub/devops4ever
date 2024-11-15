"use client";

import { ReactNode } from "react";
import type { Metadata } from "next";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { Inter, Roboto, Montserrat } from "next/font/google";
import "./globals.css";
import "./styles.css";
import Header from "../components/header";
import ViewWithBorderRadius from "../components//ViewWithBorderRadius/ViewWithBorderRadius";
import BottomNavigation from "../components/bottom-navigation/bottom-control";
import BottomControl from "../components/bottom-navigation/bottom-control";
// import BottomNavigation from "../components/bottom-navigation/bottom-navigation2";
// import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Bottom from "@/components/bottom-navigation/bottom";

const roboto = Roboto({
  subsets: ['latin'], // Charge le sous-ensemble latin uniquement
  weight: ['400', '700'], // Charge les poids 400 et 700
  style: ['normal', 'italic'], // Charge les styles normal et italique
  display: 'swap', // Paramètre pour l'optimisation du chargement
});

interface LayoutProps {
  children: ReactNode;
}

const LayoutClientComponent = ({ children }: LayoutProps) => {
  return (
    <html lang="fr">
      <body className={roboto.className}>
        {/* <Header /> */}
        <main>
          <Provider store={store}>
            {children}
            <Bottom />
          </Provider>
        </main>
        {/* <BottomNavigation /> */}
        {/* <BottomNavigation
          showLabels
          value={"value"}
          onChange={(event, newValue) => {
            // setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Recents" icon={<AcUnit />} />
          <BottomNavigationAction label="Favorites" icon={<AcUnit />} />
          <BottomNavigationAction label="Nearby" icon={<AcUnit />} />
        </BottomNavigation> */}
      </body>
    </html>
  );
};

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <Provider store={store}>
//     <html lang="fr">
//       <body className={montserrat.className}>
//         {/* <body className={inter.className}> */}
//         <Header />
//           <main>{children}</main>
//         <BottomNavigation />
//       </body>
//     </html>
//     </Provider>
//   );

// }

export default LayoutClientComponent;
