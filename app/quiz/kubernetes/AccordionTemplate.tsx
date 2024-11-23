"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../../store/store";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// import { setQuizSubjectName } from "../../store/slices/quizSubjectName/quizSubjectNameSlice";
// import { setQuizSubSubjectName } from "../../store/slices/quizSubSubjectName/quizSubSubjectNameSlice";
import { Component, ComponentProps, ReactNode, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../style.css";

type Props = {
  accordionSummary: string;
  quiz: any;
};

const AccordionTemplate = ({ accordionSummary, quiz }: Props) => {
  const quizSubjectName = useSelector(
    (state: RootState) => state.quizSubjectName.value
  );
  // console.log('quizSubjectName', quizSubjectName)

  const quizSubSubjectName = useSelector(
    (state: RootState) => state.quizSubSubjectName.value
  );

  const [expanded, setExpanded] = useState(null);
  const [quizExpanded, setQuizExpanded] = useState(false);

  // Fonction de gestion du clic
  const handleChange = (panel: any) => (event: any, isExpanded: any) => {
    // Si le panneau est déjà ouvert, on le ferme, sinon on l'ouvre
    setExpanded(isExpanded ? panel : null);

    if (isExpanded) {
      // Perform your custom action when expanded
      if (panel === "quizPanel") {
        console.log(`quizPanel Header! ${panel} expanded`);
        setQuizExpanded(true);
      }
    }
    if (!isExpanded) {
      if (panel === "quizPanel") {
        console.log(`Accordion ${panel} is not expanded`);
        setQuizExpanded(false);
      }
    }
  };

  const customAction = (panel: string) => {
    // Define the action to perform when an AccordionSummary is expanded
    console.log(`Custom action for ${panel} triggered`);
  };

  const subSubjectHandleChange =
    (parentName: string) =>
    (event: React.SyntheticEvent, isExpanded: boolean) => {
      console.log(
        `Accordion with parent name "${parentName}" is ${isExpanded ? "expanded" : "collapsed"}`
      );
      setExpanded(isExpanded ? parentName : false);
    };

  const theme = createTheme({
    components: {
      MuiAccordion: {
        styleOverrides: {
          root: {
            minHeight: "40px", // Default height for the Accordion
            "&:before": {
              display: "none", // Optionally remove the default divider line
            },
          },
        },
      },
      MuiAccordionSummary: {
        styleOverrides: {
          root: {
            minHeight: "40px", // Adjust the height of the summary
            "&.Mui-expanded": {
              minHeight: "40px", // Ensure expanded height is consistent
            },
          },
          content: {
            margin: "8px 0", // Adjust the content margin
          },
        },
      },
    },
  });

  return (
    <ThemeProvider sx={{ overflowY: "auto" }} theme={theme}>
      <Accordion
        sx={{ width: "100%", overflowY: "auto" }}
        onChange={subSubjectHandleChange(accordionSummary)}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#FCA4F0" }} />}
          aria-controls="panel2-content"
          id="panel2-header"
          style={{
            backgroundColor: "#3b8fef",
            color: "#FCA4F0",
            fontSize: 12,
            fontWeight: "bolder",
            width: "100%",
            borderBottom: "0.7px solid #FCA4F0",
          }}
        >
          {accordionSummary}
        </AccordionSummary>

        <AccordionDetails sx={{ width: "100%", padding: 0 }}>
          {/* ========================================================================================= */}
          <Accordion
            expanded={expanded === "quizPanel"}
            onChange={handleChange("quizPanel")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "#FCA4F0" }} />}
              aria-controls="quizPanel-content"
              id="quizPanel-header"
            >
              Quiz
            </AccordionSummary>
            <AccordionDetails sx={{ width: "100%", padding: 0 }}>
              {quiz}
            </AccordionDetails>
          </Accordion>

          {/* ========================================================================================= */}
          <Accordion
            expanded={expanded === "readingPanel"}
            onChange={handleChange("readingPanel")}
            style={{ display: quizExpanded ? "none" : "block" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "#FCA4F0" }} />}
              aria-controls="readingPanel-content"
              id="readingPanel-header"
            >
              Lecture
            </AccordionSummary>
            <AccordionDetails>Lecture Détails</AccordionDetails>
          </Accordion>
          {/* ========================================================================================= */}
        </AccordionDetails>
      </Accordion>
    </ThemeProvider>
  );
};

export default AccordionTemplate;
