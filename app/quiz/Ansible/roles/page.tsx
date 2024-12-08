import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import roles_quizPage from "../roles_quizPage";

const Ansible: React.FC = () => {
  const parent = useSelector((state: RootState) => state.parent.value);
  const child = useSelector((state: RootState) => state.child.value);
  const grandChild = useSelector((state: RootState) => state.grandChild.value);

  if (parent === "Ansible" && child === "roles" && grandChild === "Quiz") {
    return <roles_quizPage />;
  } else if (parent === "Ansible" && child === "roles" && grandChild === "Lecture") {
    return <div>Ma Lecture</div>;
  }
  return null; // Gestion des autres cas si nécessaire
};

export default Ansible;
