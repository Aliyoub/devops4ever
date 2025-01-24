"use client";

import React from "react";
import Mybadge from "../../public/animations/badge3.json";
import Lottie from "lottie-react";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
const Badge = () => {
  return (
    <div>
      <h1>Félicitations ! Vous avez débloqué un nouveau badge :</h1>
      <div
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          // border: "1px  #FED344  solid",
          backgroundColor: "#FED344",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Lottie animationData={Mybadge} />
        {/* <WorkspacePremiumIcon
          style={{
            fontSize: "1rem",
            color: "pink",
          }}
        /> */}
      </div>
    </div>
  );
};

export default Badge;
