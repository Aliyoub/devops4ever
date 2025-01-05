import React from "react";
import Circles_20 from "./Circles_20";
import Circles_40 from "./Circles_40";

const Circles = () => {
  return (
    <div
      style={{
        marginTop: 37,
        marginLeft: "15%",
        marginRight: "15%",
        width: "70%",
        height: "70px",
        // color: "red",
        // backgroundColor: "#3B8FEF",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        // paddingLeft: "10%",
        // paddingRight: "10%",
        // flexDirection: "column",
        opacity: 0.1,
      }}
    >
      <Circles_20 />
      <Circles_40 />
      <Circles_20 />
    </div>
  );
};

export default Circles;
