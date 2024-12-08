'use client'
import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Type pour l'état actif
type ActiveState = {
  parent: string | null;      // Nom du Parent actif
  child: string | null;       // Nom de l'Enfant actif
  grandChild: string | null;  // Nom du Petit-Enfant actif (Quiz ou Lecture)
};

const NestedAccordions: React.FC = () => {
  const [activeState, setActiveState] = useState<ActiveState>({
    parent: null,
    child: null,
    grandChild: null,
  });

  // Données hiérarchiques pour les accordéons
  const data = [
    {
      parent: "Kubernetes",
      children: [
        {
          child: "Troubleshooting",
          grandChildren: ["Quiz", "Lecture"],
        },
        {
          child: "Services",
          grandChildren: ["Quiz", "Lecture"],
        },
      ],
    },
    {
      parent: "Docker",
      children: [
        {
          child: "Gestion et orchestration des conteneurs",
          grandChildren: ["Quiz", "Lecture"],
        },
        {
          child: "Sécurité dans les environnements Docker",
          grandChildren: ["Quiz", "Lecture"],
        },
      ],
    },
    {
      parent: "Terraform",
      children: [
        {
          child: "Concepts fondamentaux de Terraform",
          grandChildren: ["Quiz", "Lecture"],
        },
        {
          child: "Gestion des états et collaboration",
          grandChildren: ["Quiz", "Lecture"],
        },
      ],
    },
  ];

  // Gestion de l'ouverture d'un Petit-Enfant
  const handleGrandChildToggle = (
    parentId: string,
    childId: string,
    grandChildId: string
  ) => {
    setActiveState({
      parent: parentId,
      child: childId,
      grandChild: grandChildId,
    });
  };

  // Gestion de l'ouverture/fermeture d'un Parent
  const handleParentToggle = (parentId: string) => {
    if (activeState.parent === parentId) {
      // Si le même Parent est fermé, réinitialiser tout
      setActiveState({ parent: null, child: null, grandChild: null });
    } else {
      // Sinon, ouvrir uniquement ce Parent
      setActiveState({ parent: parentId, child: null, grandChild: null });
    }
  };

  // Gestion de la visibilité
  const isParentVisible = (parentId: string): boolean =>
    !activeState.grandChild || activeState.parent === parentId;

  const isChildVisible = (childId: string): boolean =>
    !activeState.grandChild || activeState.child === childId;

  const isGrandChildExpanded = (grandChildId: string): boolean =>
    activeState.grandChild === grandChildId;

  return (
    <Box>
      {data.map((parent) => (
        <Accordion
          key={parent.parent}
          expanded={activeState.parent === parent.parent}
          disabled={!isParentVisible(parent.parent)}
          onChange={() => handleParentToggle(parent.parent)}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{parent.parent}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {parent.children.map((child) => (
              <Accordion
                key={child.child}
                expanded={isChildVisible(child.child)}
                disabled={!isChildVisible(child.child)}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>{child.child}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {child.grandChildren.map((grandChild) => (
                    <Accordion
                      key={grandChild}
                      expanded={isGrandChildExpanded(grandChild)}
                      onChange={() =>
                        handleGrandChildToggle(
                          parent.parent,
                          child.child,
                          grandChild
                        )
                      }
                    >
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>{grandChild}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Contenu de {grandChild} pour {child.child} dans{" "}
                          {parent.parent}.
                        </Typography>
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

export default NestedAccordions;
