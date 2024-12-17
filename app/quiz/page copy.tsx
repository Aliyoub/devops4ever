"use client";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";

import Kubernetes from "./kubernetes/services/page";
// DON'T DELETE ME !!!

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import { display, styled } from "@mui/system";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Services_quizPage from "./kubernetes/services/services_quizPage";
import { setGrandChild } from "@/store/slices/grandChild/grandChildSlice";
import { setChild } from "@/store/slices/child/childSlice";
import { setParent } from "@/store/slices/parent/parentSlice";
import Ansible from "./Ansible/Playbook/page";
// Données hiérarchiques pour les accordéons
import { dataForAccordionsStructure } from "./accordionsStructure";

// Type pour l'état actif
type ActiveState = {
  parent: string | null; // Nom du Parent actif (Kunerntes ou Docker ou Terraform...)
  child: string | null; // Nom de l'Enfant actif (Services ou Troubleshooting ou ...)
  grandChild: string | null; // Nom du Petit-Enfant actif (Quiz ou Lecture)
};

const NestedAccordions: React.FC = () => {
  const dispatch = useDispatch();

  const [activeState, setActiveState] = useState<ActiveState>({
    parent: null,
    child: null,
    grandChild: null,
  });

  const [toggleParent, setToggleParent] = useState<boolean>(false);
  const [toggleChild, setToggleChild] = useState<boolean>(false);
  const [toggleGrandChild, setToggleGrandChild] = useState<boolean>(false);

  // Gestion de l'ouverture d'un Petit-Enfant
  const handleGrandChildToggle = (
    parentId: string,
    childId: string,
    grandChildId: string
  ) => {
    setToggleGrandChild(!toggleGrandChild);
    setActiveState({
      parent: parentId,
      child: childId,
      grandChild: grandChildId,
    });
    // dispatch(setParent("Kubernetes"));
    // dispatch(setChild("Services"));
    // dispatch(setGrandChild("Quiz"));
    dispatch(setParent(parentId));
    dispatch(setChild(childId));
    dispatch(setGrandChild(grandChildId));

    console.log(
      "parentId, childId, grandChildId :::",
      parentId,
      childId,
      grandChildId
    );
  };

  // Gestion de l'ouverture/fermeture d'un Parent
  const handleParentToggle = (parentId: string) => {
    setToggleParent(!toggleParent);
    if (activeState.parent === parentId) {
      // Si le même Parent est fermé, réinitialiser tout
      setActiveState({ parent: null, child: null, grandChild: null });
    } else {
      // Sinon, ouvrir uniquement ce Parent
      setActiveState({ parent: parentId, child: null, grandChild: null });
      dispatch(setParent(parentId));
    }
  };

  // Gestion de l'ouverture/fermeture d'un enfant
  const handleChildToggle = (parentId: string, childId: string) => {
    setToggleChild(!toggleChild);
    // const handleChildToggle = (parentId: string, childId: string, grandChildId: string) => {
    if (activeState.child === childId) {
      setActiveState({
        parent: parentId,
        child: childId,
        grandChild: null,
      });
    } else {
      // Sinon, ouvrir uniquement ce Parent
      setActiveState({ parent: parentId, child: childId, grandChild: null });
      dispatch(setParent(parentId));
      dispatch(setChild(childId));
    }
    // setActiveState({
    //   parent: parentId,
    //   child: childId,
    //   grandChild: grandChildId,
    // });
    // dispatch(setChild(childId));
  };

  // Gestion de la visibilité
  const isParentVisible = (parentId: string): boolean =>
    !activeState.grandChild || activeState.parent === parentId;

  const isChildVisible = (childId: string): boolean =>
    !activeState.grandChild || activeState.child === childId;

  const isGrandChildExpanded = (grandChildId: string): boolean => {
    if (toggleGrandChild === true && activeState.grandChild === grandChildId)
      return true;
    else return false;
  };

  const accordionStyles = { p: 0, m: 0, width: "100%" };

  return (
    <Box>
      {dataForAccordionsStructure.map((parent) => (
        <Accordion
          key={parent.parent}
          expanded={activeState.parent === parent.parent}
          disabled={!isParentVisible(parent.parent)}
          onChange={() => handleParentToggle(parent.parent)}
          sx={[
            accordionStyles,
            {display: (theme) => (!isParentVisible(parent.parent) ? "none" : "block")}
          ]}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography component="div">{parent.parent}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={accordionStyles}>
            {parent.children.map((child) => (
              <Accordion
                key={child.child}
                // expanded={isChildVisible(child.child)}
                disabled={!isChildVisible(child.child)}
                onChange={() => handleChildToggle(parent.parent, child.child)}
                // onChange={() => handleChildToggle(parent.parent, child.child, grandChild.grandChild)}
                sx={[
                  accordionStyles,
                  {display: (theme) => (!isChildVisible(child.child) ? "none" : "block")}
                ]}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography component="div">{child.child}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={accordionStyles}>
                  {child.grandChildren.map((grandChild) => (
                    <Accordion
                      key={grandChild}
                      expanded={isGrandChildExpanded(grandChild)}
                      // expanded={isGrandChildExpanded(grandChild)}
                      onChange={() =>
                        handleGrandChildToggle(
                          parent.parent,
                          child.child,
                          grandChild
                        )
                      }
                      sx={[accordionStyles]}
                    >
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography component="div">{grandChild}</Typography>
                      </AccordionSummary>
                      <AccordionDetails sx={accordionStyles}>
                        {/* component="div" => pour empêcher le message d'erreur: <div> cannot be a descendant of <p>  */}
                        <Typography component="div">
                          <Kubernetes />
                          <Ansible />
                          {/* // DO NOT DELETE !!! */}
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
