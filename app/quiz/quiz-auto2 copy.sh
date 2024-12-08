#!/bin/bash

# sed -i -e \
# 's#// DO NOT DELETE !!!#// DO NOT DELETE !!! \n\teeeeeeee#g' ./app/quiz/accordionsStructure.tsx

# On vérifie si parent: $subject existe déjà dans le fichier accordionsStructure.tsx
# si ce n'est pas le cas, on ajoute tout le bloc comme par exemple :
# ====
# {
#   parent: "Terraform",
#   children: [
#     {
#       child: "Concepts fondamentaux de Terraform",
#       grandChildren: ["Quiz", "Lecture"],
#     },
#   ],
# },
# ====

# s'il existe déjà, on lui ajoute le $subSubject (le child) comme par exemple : 
# ===
# {
#   child: "Gestion des états et collaboration",
#   grandChildren: ["Quiz", "Lecture"],
# },
# ===


# for i in {1..10}; do echo $i; done

# 1 - Kubernetes
# 2 - Docker
# 3 - Ansible
# 4 - Terraform
# 5 - Gitlab-ci-cd
# 6 - Jenkins
# 7 - AWS
# 8 - SYS-ADMIN
# 9 - Git


# grep -q 'parent: "Terraform",' ./app/quiz/accordionsStructure.tsx && \
# echo "Contenu trouvé" || echo "Contenu non trouvé"

# if [ ! -d "./app/quiz/$subject" ]; then
#     mkdir -p "./app/quiz/$subject"
# else
#     echo "Le répertoire '$subject' existe déjà."
# fi
path="./app/quiz/$COMMON_subject/${COMMON_subject}_dataForAccordionsStructure.tsx"

if [ -f $path ]; then
  sed -i -e \
  's#// DO NOT DELETE !!!#// DO NOT DELETE !!!\n\t\t\tbravo#g' $path
  echo ${subSubject}
  echo ${path} encore
else
  echo sorry!!!
  echo ${COMMON_subSubject}
fi
