#!/bin/bash

# Demander à l'utilisateur le nom du thème
echo "Entrez le nom du thème, par exemple : Kubernetes"
read subject

# Pour rendre la variable commune aux autres modules (les fichiers .sh dans modules-auto)
COMMON_subject=$subject

# Vérifier si le répertoire pour le thème existe, sinon le créer
if [ ! -d "./app/quiz/$subject" ]; then
    mkdir -p "./app/quiz/$subject"
else
    echo "Le répertoire '$subject' existe déjà."
fi

# Demander à l'utilisateur le nom du sous-sujet
echo "Entrez le nom du sujet, par exemple : Services"
read subSubject

# Pour rendre la variable commune aux autres modules (les fichiers .sh dans modules-auto)
COMMON_subSubject=$subSubject

# Créer le sous-répertoire s'il n'existe pas
mkdir -p "./app/quiz/$subject/$subSubject" && \

cp "./app/quiz/modele_QuizPage/modele_quizPage.tsx" \
"./app/quiz/$subject/$subSubject/${subSubject}_quizPage.tsx" && \
# Pour avoir la première lettre en majuscule
subSubjectQuestions=$(echo "$subSubject" | awk '{print toupper(substr($0,1,1)) tolower(substr($0,2))}') && \
sed -i -e \
's#//import { questions } from "subSubjectQuestions"; DO NOT DELETE !!!#import { questions } from "../question'${subSubjectQuestions}'";#g' ./app/quiz/$subject/$subSubject/${subSubject}_quizPage.tsx && \

sed -i -e \
's#// DO NOT DELETE !!!#// DO NOT DELETE !!! '\\n${subject}'_dataForAccordionsStructure,#g' ./app/quiz/accordionsStructure.tsx && \




# Vérifier si le fichier page.tsx n'existe pas, et si nécessaire, le créer avec le contenu ...
if [ ! -f "./app/quiz/$subject/$subSubject/page.tsx" ]; then
    cat <<EOF > "./app/quiz/$subject/$subSubject/page.tsx"
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import ${subSubject}_quizPage from "../${subSubject}_quizPage";

const ${subject}: React.FC = () => {
  const parent = useSelector((state: RootState) => state.parent.value);
  const child = useSelector((state: RootState) => state.child.value);
  const grandChild = useSelector((state: RootState) => state.grandChild.value);

  if (parent === "${subject}" && child === "${subSubject}" && grandChild === "Quiz") {
    return <${subSubject}_quizPage />;
  } else if (parent === "${subject}" && child === "${subSubject}" && grandChild === "Lecture") {
    return <div>Ma Lecture</div>;
  }
  return null; // Gestion des autres cas si nécessaire
};

export default ${subject};
EOF
fi

if [ -f "./app/quiz/auto-modules/dataForAccordionsStructure.sh" ]; then
  echo ""./app/quiz/auto-modules/dataForAccordionsStructure.sh" trouvé"
  source "./app/quiz/auto-modules/dataForAccordionsStructure.sh"
else
  echo ""./app/quiz/auto-modules/dataForAccordionsStructure.sh" non trouvé."
  exit 1
fi


if [ -f "./app/quiz/auto-modules/Accordions.sh" ]; then
  echo ""./app/quiz/auto-modules/Accordions.sh" trouvé"
  source "./app/quiz/auto-modules/Accordions.sh"
else
  echo ""./app/quiz/auto-modules/Accordions.sh" non trouvé."
  exit 1
fi

# ./app/quiz/trigger est le repertoire dans lequel seront déposés les fichiers des questions relatives aux quiz
#...

if [ "$(find ./app/quiz/trigger -type f | wc -l)" -gt 0 ]; then
    echo "The directory is not empty."
else
    echo "The directory is empty."
fi
