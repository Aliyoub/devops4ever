"use client";

import { ReactNode, useEffect } from "react";
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
  subsets: ["latin"], // Charge le sous-ensemble latin uniquement
  weight: ["400", "700"], // Charge les poids 400 et 700
  style: ["normal", "italic"], // Charge les styles normal et italique
  display: "swap", // Paramètre pour l'optimisation du chargement
});

interface LayoutProps {
  children: ReactNode;
}

const LayoutClientComponent = ({ children }: LayoutProps) => {
  // Next.js ne charge pas automatiquement le fichier /public/sw.js.
  //  Pour cela, il doit être enregistré dans l'>application, et cela se fait ainsi:
  useEffect(() => {
    if ('serviceWorker' in navigator) {
        // window.addEventListener('load', () => {
            navigator.serviceWorker.register("/sw.js").then(
                (registration) => {
                    console.log('Service Worker enregistré avec succès:', registration);
                },
                (error) => {
                    console.error('L\'enregistrement du Service Worker a échoué:!!', error);
                }
            );
        // });
    }
}, []);


  // Pour empêcher le clic droit sur mon appli
  // useEffect(() => {
  //   const disableRightClick = (event: MouseEvent) => {
  //     event.preventDefault();
  //   };

  //   // Ajouter un écouteur global
  //   document.addEventListener("contextmenu", disableRightClick);

  //   // Nettoyage à la suppression du composant
  //   return () => {
  //     document.removeEventListener("contextmenu", disableRightClick);
  //   };
  // }, []);

  // Désactiver le clic droit
  // useEffect(() => {
  //   const disableContextMenu = (e: MouseEvent) => {
  //     e.preventDefault();
  //   };

  //   document.addEventListener("contextmenu", disableContextMenu);

  //   return () => {
  //     document.removeEventListener("contextmenu", disableContextMenu);
  //   };
  // }, []);

  // Masquer ou désactiver les DevTools
  useEffect(() => {
    const disableKeyShortcuts = (e: KeyboardEvent) => {
      if (
        e.key === "F12" || // DevTools
        (e.ctrlKey && e.shiftKey && e.key === "I") || // Inspecter
        (e.ctrlKey && e.key === "U") // Voir le code source
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("keydown", disableKeyShortcuts);

    return () => {
      document.removeEventListener("keydown", disableKeyShortcuts);
    };
  }, []);

  return (
    <html lang="fr">
      <head>
        {/* Balises spécifiques pour la PWA */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
        {/* Cela indique au navigateur que votre PWA doit se comporter comme une application native. */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta
          name="viewport"
          // Évite que le zoom ou d'autres comportements interfèrent avec l'application.
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
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
