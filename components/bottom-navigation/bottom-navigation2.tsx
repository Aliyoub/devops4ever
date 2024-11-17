"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";

import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';


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
    const enterFullscreen = () =>{
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
        console.warn("Le mode plein écran n'est pas pris en charge par ce navigateur.");
    }
    }

    const exitFullscreen = () => {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) { // Chrome, Safari
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { // IE/Edge
        document.msExitFullscreen();
      }
    }  

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
          color: `${pathname === "/contenus" ? "#8B01F6" : "#fff"}`,
          fontSize: 11,
        }}
        className="nav-item"
      >
        <InfoIcon style={{ width: 15 }} />
        <span
          style={{
            color: `${pathname === "/contenus" ? "#8B01F6" : "#fff"}`,
            fontSize: 11,
          }}
          onClick={() => {
            // dispatch(controlState("contenus"));
          }}
        >
          Infos
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
          onClick={() => {router.push("/quiz"); enterFullscreen()}}
        >
          Quiz
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
          onClick={() => {router.push("/settings"); exitFullscreen()}}
        >
          Paramètres
        </span>
      </div>
    </div>
  );
};

export default BottomNavigation;
