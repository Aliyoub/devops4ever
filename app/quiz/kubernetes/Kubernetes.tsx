"use client";

import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../../store/store";
import { setQuizSubjectName } from "../../../store/slices/quizSubjectName/quizSubjectNameSlice";
import { setQuizSubSubjectName } from "../../../store/slices/quizSubSubjectName/quizSubSubjectNameSlice";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Accordion from "@mui/material/Accordion";
import Typography from "@mui/material/Typography";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionTemplate from "./AccordionTemplate";
import Services_quizPage from "./services_quizPage";
import "../style.css";

const Kubernetes = () => {
  const dispatch = useDispatch();

  const quizSubSubjectName = useSelector(
    (state: RootState) => state.quizSubSubjectName.value
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

    const theme = createTheme({
      components: {
        MuiAccordion: {
          styleOverrides: {
            root: {
              minHeight: '40px', // Default height for the Accordion
              '&:before': {
                display: 'none', // Optionally remove the default divider line
              },
            },
          },
        },
        MuiAccordionSummary: {
          styleOverrides: {
            root: {
              minHeight: '40px', // Adjust the height of the summary
              '&.Mui-expanded': {
                minHeight: '40px', // Ensure expanded height is consistent
              },
            },
            content: {
              margin: '8px 0', // Adjust the content margin
            },
          },
        },
      },
    });

  return (
    <ThemeProvider sx={{overflowY: "auto", }} theme={theme}>
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
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Typography>{_quizSubjectName}</Typography>
          <Typography
            style={{ fontSize: 10, fontWeight: "bold", color: "#FCA4F0" }}
          >
            {quizSubSubjectName}
          </Typography>
        </div>
      </AccordionSummary>

      <AccordionTemplate
        accordionSummary="SERVICES"
        quiz={<Services_quizPage />}
        onChangeQuizPanelHeader={()=>onChangeQuizPanelHeader(quizSubSubjectName)}
      />
      <AccordionTemplate
        accordionSummary="DEPANNAGE"
        quiz={<Services_quizPage />}
        onChangeQuizPanelHeader={()=>onChangeQuizPanelHeader(quizSubSubjectName)}
      />
    </Accordion>
    </ThemeProvider>
  );
};

export default Kubernetes;
