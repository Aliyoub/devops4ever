import { kubernetes_dataForAccordionsStructure } from "./kubernetes/kubernetes_dataForAccordionsStructure";

export const dataForAccordionsStructure = [
  kubernetes_dataForAccordionsStructure,
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
      // ADD A CHILD DO NOT DELETE !!!
    ],
  },
  {
    parent: "Ansible",
    children: [
      {
        child: "Playbook",
        grandChildren: ["Quiz", "Lecture"],
      },
      // ADD A CHILD DO NOT DELETE !!!
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
      // ADD A CHILD DO NOT DELETE !!!
    ],
  },
  // ADD A PARENT DO NOT DELETE !!!
];
