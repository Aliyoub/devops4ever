import { myColors } from "@/myConstants/colors/page";
import React from "react";

const TextCurve = () => {
  return (
    <>
      <div style={{ position: "absolute", top: 350, left: 700, zIndex: 1 }}>
        <style jsx>
          {`
        svg {
            width: 300px;
            height: 150px;
            display: block;
            margin: 0 auto;
        }
        text {
            font-family: Arial, sans-serif;
            font-size: 18px;
            font-weight: bolder;
            fill: ${myColors.lightPink};
        `}
        </style>
        <svg viewBox="0 0 300 150">
          <path
            id="curve"
            d="M10,80 Q220,10 290,80"
            fill="transparent"
            stroke="none"
          />
          <text>
            <textPath href="#curve" startOffset="0%">
              DOCKER
            </textPath>
          </text>
        </svg>
      </div>
      {/* ============================================================================ */}

      <div style={{ position: "absolute", top: 400, left: 750, transform: "rotate(80deg)", zIndex: 1 }}>
        <style jsx>
          {`
        svg {
            // width: 300px;
            // height: 150px;
            width: 350px;
            height: 200px;
            display: block;
            margin: 0 auto;
        }
        text {
            font-family: Arial, sans-serif;
            font-size: 18px;
            font-weight: bolder;
            fill: ${myColors.lightPink};
        `}
        </style>
        <svg viewBox="0 0 350 200">
          <path
            id="curve2"
            d="M10,80 Q220,-50 290,80"
            fill="transparent"
            stroke="none"
          />

          <text>
            <textPath href="#curve2" startOffset="50%">
              KUBERNETES
            </textPath>
          </text>
        </svg>
      </div>
    </>
  );
};

export default TextCurve;
