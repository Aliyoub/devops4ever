'use client'

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../../../store/store";
import Services_quizPage from "./services_quizPage";


const Kubernetes: React.FC = () => {
  const parent = useSelector((state: RootState) => state.parent.value);
  const child = useSelector((state: RootState) => state.child.value);
  const grandChild = useSelector((state: RootState) => state.grandChild.value);

//   KUBERNETES SERVICES
  if (parent === "Kubernetes" && child === "Services" && grandChild === "Quiz")
    return <Services_quizPage />;
  else if (
    parent === "Kubernetes" &&
    child === "Services" &&
    grandChild === "Lecture"
  )
    return <div>Ma Lecture </div>;
    // parent
};

export default Kubernetes;
