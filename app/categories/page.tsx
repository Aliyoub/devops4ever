import React from "react";
import AWS from "./AWS";
import Azerty from "./azerty";
import Kubernetes from "./Kubernetes";

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
