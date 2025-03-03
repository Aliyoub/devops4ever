"use client";

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";

import Kubernetes_ClusterArchitecture from "./kubernetes/cluster-architecture/page";
// import Kubernetes_Services from "./kubernetes/Services/page";
// DON'T DELETE ME !!!

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { display, margin, padding, styled } from "@mui/system";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import Services_quizPage from "./kubernetes/Services/services_quizPage";
import { setGrandChild } from "@/store/slices/grandChild/grandChildSlice";
import { setChild } from "@/store/slices/child/childSlice";
import { setParent } from "@/store/slices/parent/parentSlice";

// import Ansible from "./Ansible/Playbook/page";
// Données hiérarchiques pour les accordéons
import { dataForAccordionsStructure } from "./accordionsStructure";
import ListOfKubernetesThemes from "./kubernetes/listOfKubernetesThemes";
import { setQuizOrReadingExpanded } from "@/store/slices/quizOrReadingExpanded/quizOrReadingExpandedSlice";
import SlideUpList from "./SlideUpList";

// Type pour l'état actif
type ActiveState = {
  parent: string | null; // Nom du Parent actif (Kunerntes ou Docker ou Terraform...)
  child: string | null; // Nom de l'Enfant actif (Services ou Troubleshooting ou ...)
  grandChild: string | null; // Nom du Petit-Enfant actif (Quiz ou Lecture)
};

const Accordions: React.FC = () => {
  const dispatch = useDispatch();

  const child = useSelector((state: RootState) => state.child.value);
  const grandChild = useSelector((state: RootState) => state.grandChild.value);

  const quizOrReadingExpanded = useSelector(
    (state: RootState) => state.quizOrReadingExpanded.value
  );

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
    dispatch(setParent(parentId));
    dispatch(setChild(childId));
    dispatch(setGrandChild(grandChildId));

    // console.log(
    //   "parentId, childId, grandChildId :::",
    //   parentId,
    //   childId,
    //   grandChildId
    // );
  };
  // const handleGrandChildAccordionSummaryToggle = (
  //   parentId: string,
  //   childId: string,
  //   grandChildId: string
  // ) => {
  //   if (activeState.grandChild === grandChildId) return "none";
  //   else return "block";
  // };

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
  };

  // Gestion de la visibilité
  const isParentVisible = (parentId: string): boolean =>
    !activeState.grandChild || activeState.parent === parentId;

  const isChildVisible = (childId: string): boolean =>
    !activeState.grandChild || activeState.child === childId;

  const isGrandChildExpanded = (grandChildId: string): boolean => {
    // console.log("expanded", "expanded");
    if (toggleGrandChild === true && activeState.grandChild === grandChildId) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    isGrandChildExpanded(grandChild)
      ? dispatch(setQuizOrReadingExpanded(true))
      : dispatch(setQuizOrReadingExpanded(false));
  }, []);

  const accordionStyles = { p: 0, m: 0, width: "100%" };

  const theme = createTheme({
    components: {
      MuiAccordion: {
        styleOverrides: {
          root: {
            minHeight: "32px", // Default height for the Accordion
            "&:before": {
              display: "none", // Optionally remove the default divider line
            },
            // "&:not(.Mui-expanded)": {
            //   display: "none", // Hide collapsed accordions
            // },
            "&.Mui-expanded": {
              minHeight: "32px",
              margin: "0",
              // padding: "0 7px"
            },
          },
        },
      },
      MuiAccordionSummary: {
        styleOverrides: {
          root: {
            minHeight: "32px",
            "&.Mui-expanded": {
              minHeight: "32px",
              margin: "0",
              // padding: "0 7px"
            },
          },
          // content: {
          //   margin: "8px 0", // Adjust the content margin
          // },
        },
      },
      // MuiAccordionDetails: {
      //   styleOverrides: {
      //     root: {
      //       // minHeight: "32px",
      //       "&.Mui-expanded": {
      //         // minHeight: "32px",
      //         margin: "0",
      //         padding: "0 7px"
      //       },
      //     },
      //     // content: {
      //     //   margin: "8px 0", // Adjust the content margin
      //     // },
      //   },
      // },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: "100%",
          padding: "0",
          backgroundColor: "#3b8fef",
        }}
      >
        {dataForAccordionsStructure.map((parent) => (
          <Accordion
            key={parent.parent}
            expanded={activeState.parent === parent.parent}
            disabled={!isParentVisible(parent.parent)}
            onChange={() => handleParentToggle(parent.parent)}
            sx={[
              {
                display: !isParentVisible(parent.parent) ? "none" : "block",
              },
            ]}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="expandIconStyle" />}
              sx={{
                backgroundColor: "#264BC0",
                color: "#FCA4F0",
                fontSize: "12px",
                fontWeight: "bolder",
                width: "100%",
                margin: "0",
                borderBottom: "0.7px solid #FCA4F0",
              }}
            >
              <div style={{ lineHeight: 1 }}>
                {parent.parent.toLocaleUpperCase()}
                <br />

                {isGrandChildExpanded(grandChild) === true ? (
                  <SlideUpList items={[child]} />
                ) : (
                  ""
                )}
              </div>
            </AccordionSummary>
            <AccordionDetails sx={accordionStyles}>
              {parent.children.map((child) => (
                <Accordion
                  key={child.child}
                  disabled={!isChildVisible(child.child)}
                  onChange={() => handleChildToggle(parent.parent, child.child)}
                  sx={[
                    {
                      display: !isChildVisible(child.child) ? "none" : "block",
                    },
                  ]}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon className="expandIconStyle" />}
                    sx={{
                      backgroundColor: "#3B8FEF",
                      color: "#E0F7FA",
                      fontSize: "12px",
                      fontWeight: "bolder",
                      width: "100%",
                      margin: "0",
                      borderBottom: "0.7px solid #FCA4F0",
                      display: isGrandChildExpanded(grandChild) ? "none" : null,
                    }}
                  >
                    <div>{child.child.toLocaleUpperCase()}</div>
                  </AccordionSummary>
                  <AccordionDetails sx={accordionStyles}>
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
                        <AccordionSummary
                          expandIcon={
                            <ExpandMoreIcon className="expandIconStyle" />
                          }
                          className="accordionGrandChildrenStyle"
                        >
                          <div>{grandChild}</div>
                        </AccordionSummary>
                        <AccordionDetails sx={accordionStyles}>
                          <div>
                            <ListOfKubernetesThemes />
                            {/* // DO NOT DELETE !!! */}
                          </div>
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
    </ThemeProvider>
  );
};

export default Accordions;
