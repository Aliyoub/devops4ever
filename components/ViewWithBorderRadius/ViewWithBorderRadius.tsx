import React, { useEffect, useState } from "react";
import type { PropsWithChildren, ComponentType } from "react";
import "./ViewWithBorderRadius.css"

type Props = PropsWithChildren<{
  title?: any;
  // topComponent?: ComponentType<{
  //   className?: string;
  // }>;
  topComponent?: any;
}>;



const ViewWithBorderRadius = ({ title, children, topComponent }: Props) => {
  // const myTopComponent = <div></div>

  return (
    <div>
      <div className="topView">
        <div style= {{fontSize: 16, fontWeight: "bold", color: "#FCA4F0"}} className="topChildView">
          <div style= {{fontSize: 16, fontWeight: "bold", color: "#FCA4F0"}} >
            DEVOPS4EVER
          </div>
          WELCOME
        </div>
      </div>
      <div className="bottomView">
        <div className="bottomChildView">{children} </div>
      </div>
    </div>
  );
};

export default ViewWithBorderRadius;
