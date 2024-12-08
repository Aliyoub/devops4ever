#!/bin/bash

path="./app/quiz/Accordions.tsx"

if [ -f $path ]; then
    echo $path
    sed -i -e \
    's#{\/\* \/\/ DO NOT DELETE !!! \*\/}#<'$subject' />\n\t\t\t\t\t\t\t\t\t\t\t\t{/* // DO NOT DELETE !!! */}#g' $path
else
     echo $path not found
fi
