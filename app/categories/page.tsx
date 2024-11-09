import React from "react";
import Kubernetes from "./kubernetes";
import AWS from "./AWS";
import Azerty from "./azerty";

const Page = () => {
  return (
    <>
      <Kubernetes />
      <AWS />
      {/* <Azerty /> */}
    </>
  );
};

export default Page;
