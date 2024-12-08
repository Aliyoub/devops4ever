#!/bin/bash

path="./app/quiz/$COMMON_subject/${COMMON_subject}_dataForAccordionsStructure.tsx"

if [ -f $path ]; then
  sed -i -e \
  's#// DO NOT DELETE !!!#\
  \t\t{\n\t\t\t\tchild: '$subSubject',\n\t\t\t\tgrandChildren: ["Quiz", "Lecture"],\n\t\t\t},\n\t\t\t// DO NOT DELETE !!!#g' $path 
  
  # Suppression du fichier indésirable
else
  echo sorry!!!
  echo ${COMMON_subSubject}

cat <<EOF > $path
export const ${subject}_dataForAccordionsStructure = 
  {
    parent: "$subject",
    children: [
      {
        child: "$subSubject",
        grandChildren: ["Quiz", "Lecture"],
      },
			// DO NOT DELETE !!!
    ],
  }

EOF
# rm $path'-e'

fi
