#!/bin/bash

# Convertir les caractères accentués en leur version non accentuée avec iconv
# //TRANSLIT: Remplace les caractères non ASCII par leurs alternatives les plus proches.

# kubernetesQuizQuestion=

chaine_sans_accents=$(echo "$chaine" | iconv -f UTF-8 -t ASCII//TRANSLIT)

# Remplacer les espaces par des underscores

chaine="Bonjour à tous, comment ça va ?"
chaine=${chaine// /_}
