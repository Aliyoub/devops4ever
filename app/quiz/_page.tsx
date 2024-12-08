"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";

import Kubernetes from "./kubernetes/Services/page";
import Ansible from "./Ansible/Playbook/page";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import { styled } from "@mui/system";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { setGrandChild } from "@/store/slices/grandChild/grandChildSlice";
import { setChild } from "@/store/slices/child/childSlice";
import { setParent } from "@/store/slices/parent/parentSlice";
import { dataForAccordionsStructure } from "./accordionsStructure";

// Composant stylisé pour l'Accordion
const StyledAccordion = styled(Accordion)(({ theme, disabled }: any) => ({
  display: disabled ? "none" : "block",
}));

// Type pour l'état actif
type ActiveState = {
  parent: string | null;
  child: string | null;
  grandChild: string | null;
};

const NestedAccordions: React.FC = () => {
  const dispatch = useDispatch();

  const [activeState, setActiveState] = useState<ActiveState>({
    parent: null,
    child: null,
    grandChild: null,
  });

  // Gestion de l'ouverture/fermeture d'un Parent
  const handleParentToggle = (parentId: string) => {
    setActiveState((prevState) => ({
      parent: prevState.parent === parentId ? null : parentId,
      child: null,
      grandChild: null,
    }));
    dispatch(setParent(parentId));
  };

  // Gestion de l'ouverture/fermeture d'un Enfant
  const handleChildToggle = (parentId: string, childId: string) => {
    setActiveState((prevState) => ({
      parent: parentId,
      child: prevState.child === childId ? null : childId,
      grandChild: null,
    }));
    dispatch(setParent(parentId));
    dispatch(setChild(childId));
  };

  // Gestion de l'ouverture/fermeture d'un Petit-Enfant
  const handleGrandChildToggle = (
    parentId: string,
    childId: string,
    grandChildId: string
  ) => {
    setActiveState((prevState) => ({
      parent: parentId,
      child: childId,
      grandChild: prevState.grandChild === grandChildId ? null : grandChildId,
    }));
    dispatch(setParent(parentId));
    dispatch(setChild(childId));
    dispatch(setGrandChild(grandChildId));
  };

  // Styles partagés pour les accordéons
  const accordionStyles = { p: 0, m: 0, width: "100%" };

  return (
    <Box>
      {dataForAccordionsStructure.map((parent) => (
        <Accordion
          key={parent.parent}
          expanded={activeState.parent === parent.parent}
          onChange={() => handleParentToggle(parent.parent)}
          sx={accordionStyles}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{parent.parent}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={accordionStyles}>
            {parent.children.map((child) => (
              <Accordion
                key={child.child}
                expanded={
                  activeState.parent === parent.parent &&
                  activeState.child === child.child
                }
                onChange={() => handleChildToggle(parent.parent, child.child)}
                sx={accordionStyles}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>{child.child}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={accordionStyles}>
                  {child.grandChildren.map((grandChild) => (
                    <Accordion
                      key={grandChild}
                      expanded={
                        activeState.parent === parent.parent &&
                        activeState.child === child.child &&
                        activeState.grandChild === grandChild
                      }
                      onChange={() =>
                        handleGrandChildToggle(
                          parent.parent,
                          child.child,
                          grandChild
                        )
                      }
                      sx={accordionStyles}
                    >
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>{grandChild}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        {activeState.grandChild === "Quiz" && (
                          <Kubernetes />
                        )}
                        {activeState.grandChild === "Playbook" && (
                          <Ansible />
                        )}
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
