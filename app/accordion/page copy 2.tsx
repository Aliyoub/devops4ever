"use client"

import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Définir les types pour les ID actifs
type ActiveState = string | null;

const CustomAccordions: React.FC = () => {
  const [activeChild, setActiveChild] = useState<ActiveState>(null); // État pour l'enfant actif
  const [activeGrandChild, setActiveGrandChild] = useState<ActiveState>(null); // État pour le petit-enfant actif

  // Fonction pour gérer l'ouverture d'un petit-enfant
  const handleGrandChildToggle = (
    parentId: string,
    childId: string,
    grandChildId: string
  ) => {
    setActiveChild(childId); // Enregistre l'enfant actif
    setActiveGrandChild(grandChildId); // Enregistre le petit-enfant actif
  };

  // Vérifie si un parent est visible
  const isParentVisible = (parentId: string): boolean =>
    !activeGrandChild || activeChild?.startsWith(parentId);

  // Vérifie si un enfant est visible
  const isChildVisible = (childId: string): boolean =>
    !activeGrandChild || activeChild === childId;

  return (
    <Box>
      {["Parent1", "Parent2", "Parent3"].map((parentId) => (
        <Accordion
          key={parentId}
          // expanded={isParentVisible(parentId)}
          disabled={!isParentVisible(parentId)}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{parentId}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {["Child1", "Child2"].map((childId) => (
              <Accordion
                key={`${parentId}-${childId}`}
                // expanded={isChildVisible(`${parentId}-${childId}`)}
                disabled={!isChildVisible(`${parentId}-${childId}`)}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>{`${childId}`}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {["GrandChild1", "GrandChild2"].map((grandChildId) => (
                    <Accordion
                      key={`${parentId}-${childId}-${grandChildId}`}
                      // expanded={
                      //   activeGrandChild ===
                      //   `${parentId}-${childId}-${grandChildId}`
                      // }
                      onChange={() =>
                        handleGrandChildToggle(
                          parentId,
                          `${parentId}-${childId}`,
                          `${parentId}-${childId}-${grandChildId}`
                        )
                      }
                    >
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>{`${grandChildId}`}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>{`Content of ${grandChildId}`}</Typography>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </AccordionDetails>
              </Accordion>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default CustomAccordions;
