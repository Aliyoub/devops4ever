"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";

import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
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
        <HeadsetIcon style={{ width: 15 }} />
        <span
          style={{
            color: `${pathname === "/contenus" ? "#8B01F6" : "#fff"}`,
            fontSize: 11,
          }}
          onClick={() => {
            dispatch(controlState("contenus"));
          }}
        >
          Ecouter
        </span>
      </div>

      <div
        style={{
          color: `${pathname === "/categories" ? "#8B01F6" : "#fff"}`,
          fontSize: 11,
        }}
        className="nav-item"
      >
        <SupervisorAccountIcon style={{ fontSize: 15 }} />

        <span
          style={{
            color: `${pathname === "/categories" ? "#8B01F6" : "#fff"}`,
            fontSize: 11,
          }}
          onClick={() => router.push("/categories")}
        >
          Matières
        </span>
      </div>
    </div>
  );
};

export default BottomNavigation;
