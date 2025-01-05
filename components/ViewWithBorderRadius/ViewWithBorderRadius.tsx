import React, { useEffect, useState } from "react";
import type { PropsWithChildren, ComponentType } from "react";
import "./ViewWithBorderRadius.css";
import { Roboto } from "next/font/google";

type Props = PropsWithChildren<{
  title?: any;
  // topComponent?: ComponentType<{
  //   className?: string;
  // }>;
  topComponent?: any;
}>;
const roboto = Roboto({
  subsets: ["latin"], // Charge le sous-ensemble latin uniquement
  weight: ["400", "700"], // Charge les poids 400 et 700
  style: ["normal", "italic"], // Charge les styles normal et italique
  display: "swap", // Paramètre pour l'optimisation du chargement
});

const ViewWithBorderRadius = ({ title, children, topComponent }: Props) => {
  // const myTopComponent = <div></div>

  return (
    <div>
      <div className="topView">
        <div
          //   style={{ fontSize: 16, fontWeight: "bold", color: "#FCA4F0" }}
          className={(roboto.className, "topChildView")}
        >
          {/* <div style={{ fontSize: 16, fontWeight: "bold", color: "#FCA4F0" }}>
          </div> */}
          <div>DEVOPS4EVER</div>
          <div>WELCOME</div>
        </div>
      </div>
      <div className="bottomView">
        <div className="bottomChildView">{children} </div>
      </div>
    </div>
  );
};

export default ViewWithBorderRadius;
