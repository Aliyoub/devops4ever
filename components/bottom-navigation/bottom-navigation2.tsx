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
          onClick={() => router.push("/quiz")}
        >
          Quiz
        </span>
      </div>
      <div
        style={{
          color: `${pathname === "/categories" ? "#8B01F6" : "#fff"}`,
          fontSize: 11,
        }}
        className="nav-item"
      >
        <SettingsIcon style={{ fontSize: 15 }} />
        <span
          style={{
            color: `${pathname === "/categories" ? "#8B01F6" : "#fff"}`,
            fontSize: 11,
          }}
          onClick={() => router.push("/categories")}
        >
          Paramètres
        </span>
      </div>
    </div>
  );
};

export default BottomNavigation;
