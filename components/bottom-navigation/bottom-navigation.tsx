"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";

import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoIcon from "@mui/icons-material/Info";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";

import QuizIcon from "@mui/icons-material/Quiz";
import HeadsetIcon from "@mui/icons-material/Headset";
import HomeIcon from "@mui/icons-material/Home";

import "./BottomNavigation.css";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { controlState } from "@/store/slices/controlState/controlStateSlice";

const BottomNavigation = () => {
  const dispatch = useDispatch<AppDispatch>();

  const pathname: any = usePathname();
  const router: any = useRouter();

  // Pour une ouverture en plein écran de l'application
  const enterFullscreen = () => {
    // const element = document.documentElement; // Ou un autre élément spécifique
    // if (element.requestFullscreen) {
    //   element.requestFullscreen();
    // } else if (element.mozRequestFullScreen) { // Firefox
    //   element.mozRequestFullScreen();
    // } else if (element.webkitRequestFullscreen) { // Chrome, Safari, etc.
    //   element.webkitRequestFullscreen();
    // } else if (element.msRequestFullscreen) { // IE/Edge
    //   element.msRequestFullscreen();
    // }

    const element = document.documentElement; // Ou un autre élément spécifique
    if (element.requestFullscreen) {
      element.requestFullscreen(); // Navigateur moderne
    } else if ((element as any).webkitRequestFullscreen) {
      // Safari ou anciens navigateurs basés sur WebKit
      (element as any).webkitRequestFullscreen();
    } else if ((element as any).msRequestFullscreen) {
      // Anciennes versions d'Internet Explorer/Edge
      (element as any).msRequestFullscreen();
    } else if ((element as any).mozRequestFullScreen) {
      // Ancienne implémentation de Firefox
      (element as any).mozRequestFullScreen();
    } else {
      console.warn(
        "Le mode plein écran n'est pas pris en charge par ce navigateur."
      );
    }
  };

  const exitFullscreen = () => {
    // if (document.exitFullscreen) {
    //   document.exitFullscreen();
    // } else if (document.mozCancelFullScreen) { // Firefox
    //   document.mozCancelFullScreen();
    // } else if (document.webkitExitFullscreen) { // Chrome, Safari
    //   document.webkitExitFullscreen();
    // } else if (document.msExitFullscreen) { // IE/Edge
    //   document.msExitFullscreen();
    // }

    if (document.exitFullscreen) {
      document.exitFullscreen().catch((error) => {
        console.error("Erreur lors de la sortie du mode plein écran :", error);
      });
    } else if ((document as any).webkitExitFullscreen) {
      // Safari ou anciens navigateurs basés sur WebKit
      (document as any).webkitExitFullscreen();
    } else if ((document as any).msExitFullscreen) {
      // Anciennes versions d'Internet Explorer/Edge
      (document as any).msExitFullscreen();
    } else if ((document as any).mozCancelFullScreen) {
      // Ancienne implémentation de Firefox
      (document as any).mozCancelFullScreen();
    } else {
      console.warn(
        "Le mode plein écran n'est pas pris en charge par ce navigateur."
      );
    }
  };

  return (
    <div className="bottom-navigation">
      <div
        style={{
          color: `${pathname === "/home" ? "#8B01F6" : "#fff"}`,
          fontSize: 11,
        }}
        className="nav-item"
      >
        <HomeIcon style={{ width: 15 }} />
        <span
          style={{
            color: `${pathname === "/home" ? "#8B01F6" : "#fff"}`,
            fontSize: 11,
          }}
          onClick={() => {
            router.push("/home");
          }}
        >
          Accueil
        </span>
      </div>

      <div
        style={{
          color: `${pathname === "/quiz" ? "#8B01F6" : "#fff"}`,
          fontSize: 11,
        }}
        className="nav-item"
      >
        <QuizIcon style={{ fontSize: 15 }} />
        {/* <SupervisorAccountIcon style={{ fontSize: 15 }} /> */}

        <span
          style={{
            color: `${pathname === "/quiz" ? "#8B01F6" : "#fff"}`,
            fontSize: 11,
          }}
          onClick={() => {
            router.push("/quiz");
            // enterFullscreen();
          }}
        >
          Quiz
        </span>
      </div>

      <div
        style={{
          color: `${pathname === "/contenus" ? "#8B01F6" : "#fff"}`,
          fontSize: 11,
        }}
        className="nav-item"
      >
        <SearchIcon style={{ width: 17 }} />
        <span
          style={{
            color: `${pathname === "/badges" ? "#8B01F6" : "#fff"}`,
            fontSize: 11,
          }}
          onClick={() => {
            router.push("/badges");
            // router.push("/search");
            // exitFullscreen();
          }}
        >
          recherche
        </span>
      </div>

      <div
        style={{
          color: `${pathname === "/settings" ? "#8B01F6" : "#fff"}`,
          fontSize: 11,
        }}
        className="nav-item"
      >
        <SettingsIcon style={{ fontSize: 15 }} />
        <span
          style={{
            color: `${pathname === "/settings" ? "#8B01F6" : "#fff"}`,
            fontSize: 11,
          }}
          onClick={() => {
            router.push("/settings");
            exitFullscreen();
          }}
        >
          Paramètres
        </span>
      </div>
    </div>
  );
};

export default BottomNavigation;
