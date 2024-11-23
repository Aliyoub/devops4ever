"use client";

import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import { setQuizSubjectName } from "../../store/slices/quizSubjectName/quizSubjectNameSlice";
import { setQuizSubSubjectName } from "../../store/slices/quizSubSubjectName/quizSubSubjectNameSlice";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionTemplate from "./kubernetes/AccordionTemplate";
import Services_quizPage from "./kubernetes/services_quizPage";
import "./style.css";

const Kubernetes = () => {
  const dispatch = useDispatch();

  const quizSubSubjectName = useSelector(
    (state: RootState) => state.quizSubSubjectName
  );
  const quizSubSubjectNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(setQuizSubSubjectName(event.target.value));
  };

  const [expanded, setExpanded] = React.useState<string | false>(false);

  const onChangeQuizPanelHeader = () => {
    console.log("first", "quiz clicked");
  };
  // Cette définition de variable se fait manuellement. Ce sera de même pour :
  // DOCKER, TERRAFORM, ...
  // C'est la valeur de cette variable qui sera prise en compte dans le state global, et qui sera récupérée
  // dans kubernete/AccordionTemplate.tsx
  // C'est l'expression dispatch(setQuizSubjectName... qui l'injectera dans le state global (voir plus bas)
  const _quizSubjectName = "KUBERNETES";

  const handleChange =
  (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
    // console.log(`first", ${panel} cliqué`);
    dispatch(setQuizSubjectName(_quizSubjectName));
  };

  return (
    <Accordion
      sx={{ width: "100%" }}
      expanded={expanded === _quizSubjectName}
      onChange={handleChange(_quizSubjectName)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon style={{ color: "#FCA4F0" }} />}
        aria-controls="panel1-content"
        id="panel1-header"
        style={{
          backgroundColor: "#264BC0",
          borderBottom: "0.7px solid #FCA4F0",
          color: "#FCA4F0",
          // display: "none"
        }}
      >
        <h2>{_quizSubjectName}</h2>
      </AccordionSummary>

      <AccordionTemplate
        accordionSummary="DEPANNAGE"
        quiz={<Services_quizPage />}
        // onChangeQuizPanelHeader={()=>onChangeQuizPanelHeader("DEPANNAGE")}
      />
    </Accordion>
  );
};

export default Kubernetes;
