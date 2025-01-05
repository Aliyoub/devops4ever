"use client";

import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionActions from "@mui/material/AccordionActions";
import Button from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import { setQuizSize } from "../../store/slices/quizSize/quizSizeSlice";
import { setQuizStartIndex } from "../../store/slices/quizStartIndex/quizStartIndexSlice";

function ControlledAccordion() {
  const [expanded, setExpanded] = useState(null); // Parent accordéon ouvert
  const [childExpanded, setChildExpanded] = useState(null); // Enfant accordéon ouvert

  // Gestion du changement d'état pour les parents
  const handleParentChange = (panel: any) => (event: any, isExpanded: any) => {
    const isChildOpen = childExpanded !== null; // Vérifie si un enfant est ouvert
    if (expanded === panel && isExpanded && isChildOpen) {
      // Si parent + enfant ouverts => tout plier
      setExpanded(null);
      setChildExpanded(null);
    } else {
      // Sinon, bascule le parent
      setExpanded(isExpanded ? panel : null);
    }
  };

  // Gestion du changement d'état pour les enfants
  const handleChildChange = (panel: any) => (event: any, isExpanded: any) => {
    if (expanded && isExpanded) {
      // Si le parent est déjà ouvert, ouvre l'enfant et ferme les autres
      setExpanded(expanded);
      setChildExpanded(panel);
    } else {
      // Sinon, bascule l'enfant
      setChildExpanded(isExpanded ? panel : null);
    }
  };

  // Vérification pour rendre les autres accordéons invisibles
  const isOtherAccordionVisible = !(
    expanded !== null && childExpanded !== null
  );

  // ================================================================================

  const quizStartIndex = useSelector(
    (state: RootState) => state.quizStartIndex.value
  );

  const quizStartIndexInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const numericValue: number = Number(event.target.value);

    dispatch(setQuizStartIndex(numericValue));
  };
  // ================================================================================

  const dispatch = useDispatch();

  const quizSize = useSelector((state: RootState) => state.quizSize.value);

  const quizSizeInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const numericValue: number = Number(event.target.value);

    dispatch(setQuizSize(numericValue));
  };

  return (
    <div style={{ marginTop: 20, marginBottom: 0.5 }}>
      {/* Parent Accordion 1 */}
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleParentChange("panel1")}
        sx={{
          display:
            isOtherAccordionVisible || expanded === "panel1" ? "block" : "none",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
        >
          QUIZ
        </AccordionSummary>
        <AccordionDetails>
          <div style={{ marginTop: 30 }}>
            {/* <input
              type="range"
              // value={quizStartIndex}
              // onChange={quizStartIndexInputChange}
              placeholder="ex: 5, pour commencer à la question 5..."
            /> */}
            <TextField
              type="number"
              label="Entrez l'index du début des questions"
              variant="outlined"
              placeholder="ex: 5, pour commencer à la question 5..."
              inputProps={{ min: 0, max: 100 }} // Ajout de contraintes
              fullWidth // S'adapte à la largeur du conteneur
              value={quizStartIndex || ""}
              onChange={quizStartIndexInputChange}
              sx={{
                marginTop: 1,
                "& .MuiOutlinedInput-root": {
                  borderRadius: 4,
                  "&.Mui-focused fieldset": {
                    borderColor: "blue", // Couleur de la bordure en focus
                  },
                },
              }} // Customisation via sx
            />
            <TextField
              type="number"
              label="Entrez le nombre de questions à traiter"
              variant="outlined"
              placeholder="ex: 20, pour traiter 20 questions ..."
              inputProps={{ min: 0, max: 100 }} // Ajout de contraintes
              fullWidth // S'adapte à la largeur du conteneur
              value={quizSize || ""}
              onChange={quizSizeInputChange}
              sx={{
                marginTop: 2,
                "& .MuiOutlinedInput-root": {
                  borderRadius: 4,
                  "&.Mui-focused fieldset": {
                    borderColor: "blue", // Couleur de la bordure en focus
                  },
                },
              }} // Customisation via sx
            />
          </div>
        </AccordionDetails>
      </Accordion>

      {/* Parent Accordion 2 */}
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleParentChange("panel2")}
        sx={{
          display:
            isOtherAccordionVisible || expanded === "panel2" ? "block" : "none",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
        >
          THEME
        </AccordionSummary>
        <AccordionDetails>
          {/* Enfant 1 */}
          <Accordion
            expanded={childExpanded === "child1"}
            onChange={handleChildChange("child1")}
            sx={{
              width: "100%",
              display:
                isOtherAccordionVisible || childExpanded === "child1"
                  ? "block"
                  : "none",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="child1-content"
            >
              Child Accordion 1
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </AccordionDetails>
          </Accordion>
          {/* Enfant 2 */}
          <Accordion
            expanded={childExpanded === "child2"}
            onChange={handleChildChange("child2")}
            sx={{
              width: "100%",
              display:
                isOtherAccordionVisible || childExpanded === "child2"
                  ? "block"
                  : "none",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="child2-content"
            >
              Child Accordion 2
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </AccordionDetails>
          </Accordion>
        </AccordionDetails>
      </Accordion>

      {/* Parent Accordion 3 */}
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleParentChange("panel3")}
        sx={{
          display:
            isOtherAccordionVisible || expanded === "panel3" ? "block" : "none",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
        >
          Accordion Actions
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </AccordionDetails>
        <AccordionActions>
          <Button>Cancel</Button>
          <Button>Agree</Button>
        </AccordionActions>
      </Accordion>
    </div>
  );
}

export default ControlledAccordion;
