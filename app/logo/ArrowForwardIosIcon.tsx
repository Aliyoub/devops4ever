import { myColors } from "@/myConstants/colors/page";
import ArrowForwardIosOutlined from "@mui/icons-material/ArrowForwardIosOutlined";

import React from "react";

const ArrowForwardIosIcon = () => {
  return (
    <>
    <ArrowForwardIosOutlined
      style={{
        position: "absolute",
        top: 490,
        transform: "rotate(45deg)",
        color: myColors.lightPink,
        fontSize: 50,
      }}
    />
    <ArrowForwardIosOutlined
      style={{
        position: "absolute",
        left: 650,
        top: 525,
        transform: "rotate(-45deg)",
        color: myColors.blue1,
        fontSize: 50,
        fontWeight:"bolder"
      }}
    />
    </>
  );
};

export default ArrowForwardIosIcon;
