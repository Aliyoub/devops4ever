import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import Playbook_quizPage from "./Playbook_quizPage"

const Ansible: React.FC = () => {
  const parent = useSelector((state: RootState) => state.parent.value);
  const child = useSelector((state: RootState) => state.child.value);
  const grandChild = useSelector((state: RootState) => state.grandChild.value);

  if (parent === "Ansible" && child === "Playbook" && grandChild === "Quiz")
    return <Playbook_quizPage />;
  else if (
    parent === "Ansible" &&
    child === "Playbook" &&
    grandChild === "Lecture"
  )
    return <div>Ma Lecture </div>;
    // parent
};

export default Ansible;