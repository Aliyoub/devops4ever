import React from "react";
import Accordions from "./Accordions";
import Search from "./search";

const Page = () => {
  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "90%",
          // flexDirection: "column",
        }}
      >
        {/* <Search /> */}
      </div>
      <Accordions />
    </div>
  );
};

export default Page;
