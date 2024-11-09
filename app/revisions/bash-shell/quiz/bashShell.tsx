export const questions = [
  {
    question:
      "Quelle commande permet de lister tous les fichiers, y compris les fichiers cachés, dans un répertoire ?" ,
      options:["a) ls -a" ,
      "b) ls -l" ,
      "c) ls -h"],
    answer: "a) ls -a",
  },
  {
    question:
      "Quelle est la commande pour afficher les 10 premières lignes d'un fichier nommé 'log.txt' ?" ,
      options:["a) head -n 10 log.txt" ,
      "b) tail -n 10 log.txt" ,
      "c) cat log.txt | head -10"],
    answer: "a) head -n 10 log.txt",
  },
  {
    question:
      "Comment afficher la liste des processus en cours d'exécution avec leur utilisation de mémoire et de CPU ?" ,
      options:["a) ps -aux" ,
      "b) top" ,
      "c) htop"],
    answer: "b) top",
  },
  {
    question:
      "Quelle commande permet de rechercher récursivement un fichier nommé 'config.yaml' dans tous les sous-répertoires du répertoire actuel ?" ,
      options:["a) find . -name config.yaml" ,
      "b) locate config.yaml" ,
      "c) grep config.yaml"],
    answer: "a) find . -name config.yaml",
  },
  {
    question:
      "Quelle commande est utilisée pour rediriger la sortie d'une commande vers un autre fichier en ajoutant la sortie à la fin du fichier ?" ,
      options:["a) >" ,
      "b) >>" ,
      "c) <<<"],
    answer: "b) >>",
  },
  {
    question:
      "Dans un script bash, quelle syntaxe est correcte pour vérifier si une variable 'file' est égale à 'data.txt' ?" ,
      options:["a) if [ $file = 'data.txt' ]; then" ,
      "b) if ( $file == 'data.txt' )" ,
      "c) if [ $file == data.txt ]"],
    answer: "a) if [ $file = 'data.txt' ]; then",
  },
  {
    question:
      "Quelle commande crée un alias nommé 'll' pour 'ls -l' ?" ,
      options:["a) alias ll='ls -l'" ,
      "b) alias 'll' ls -l" ,
      "c) alias ls -l='ll'"],
    answer: "a) alias ll='ls -l'",
  },
  {
    question:
      "Quelle commande permet d'ajouter un texte au début de chaque ligne d'un fichier nommé 'file.txt' ?" ,
      options:["a) sed 's/^/texte/' file.txt" ,
      "b) awk '{print \"texte\" $0}' file.txt",+
      "c) grep -r '^texte' file.txt"],
    answer: "a) sed 's/^/texte/' file.txt",
  },
  {
    question:
      "Quelle commande permet de compter le nombre total de lignes d'un fichier nommé 'sample.txt' ?" ,
      options:["a) count sample.txt" ,
      "b) wc -l sample.txt" ,
      "c) lines sample.txt"],
    answer: "b) wc -l sample.txt",
  },
  {
    question:
      "Comment créer une variable en bash et lui attribuer une valeur ?" ,
      options:["a) let var=10" ,
      "b) var=10" ,
      "c) var: 10"],
    answer: "b) var=10",
  },
  {
    question:
      "Comment exécuter un script bash nommé 'install.sh' qui est dans le répertoire actuel ?" ,
      options:["a) bash install.sh" ,
      "b) ./install.sh" ,
      "c) exec install.sh"],
    answer: "b) ./install.sh",
  },
  {
    question:
      "Comment supprimer un alias créé dans une session Bash ?" ,
      options:["a) remove-alias alias_name" ,
      "b) unalias alias_name" ,
      "c) delete alias_name"],
    answer: "b) unalias alias_name",
  },
  {
    question:
      "Quelle commande permet de rechercher toutes les occurrences de 'error' dans tous les fichiers du répertoire actuel ?" ,
      options:["a) grep -r 'error' ." ,
      "b) find . -name 'error'" ,
      "c) locate 'error'"],
    answer: "a) grep -r 'error' .",
  },
  {
    question:
      "Comment utiliser la commande 'awk' pour afficher la deuxième colonne de chaque ligne dans un fichier 'data.txt' ?" ,
      options:["a) awk '{print $1}' data.txt" ,
      "b) awk '{print $2}' data.txt" ,
      "c) awk '{print $3}' data.txt"],
    answer: "b) awk '{print $2}' data.txt",
  },
  {
    question:
      "Quelle commande permet de remplacer toutes les occurrences de 'foo' par 'bar' dans un fichier 'sample.txt' ?" ,
      options:["a) sed 's/foo/bar/g' sample.txt" ,
      "b) sed 'replace foo with bar' sample.txt" ,
      "c) awk 's/foo/bar/g' sample.txt"],
    answer: "a) sed 's/foo/bar/g' sample.txt",
  },
  {
    question:
      "Quelle est la syntaxe correcte pour une boucle 'for' en Bash ?" ,
      options:["a) for i in {1..5}; do echo $i; done" ,
      "b) for i = 1 to 5; echo $i" ,
      "c) for (i=1; i<=5; i++); echo $i;"],
    answer: "a) for i in {1..5}; do echo $i; done",
  },
  {
    question:
      "Quelle commande permet de supprimer les lignes en double dans un fichier, en ne gardant qu'une seule occurrence de chaque ligne ?" ,
      options:["a) uniq -u file.txt" ,
      "b) sort file.txt | uniq" ,
      "c) grep -u file.txt"],
    answer: "b) sort file.txt | uniq",
  },
  {
    question:
      "Quelle commande est utilisée pour assigner une valeur à une variable d'environnement de manière temporaire dans une seule ligne ?" ,
      options:["a) export VAR=value" ,
      "b) VAR=value commande" ,
      "c) set VAR=value"],
    answer: "b) VAR=value commande",
  },
  {
    question:
      "Quelle commande envoie la sortie standard d'une commande dans un fichier et la sortie d'erreur dans un autre fichier ?" ,
      options:["a) commande > out.txt 2> err.txt" ,
      "b) commande > out.txt | err.txt" ,
      "c) commande 2> out.txt > err.txt"],
    answer: "a) commande > out.txt 2> err.txt",
  },
  {
    question:
      "Quelle commande permet de remplacer les espaces par des tirets dans un fichier 'text.txt' en utilisant 'sed' ?" ,
      options:["a) sed 's/ /-/g' text.txt" ,
      "b) sed 'replace spaces with dashes' te,t.txt" +
      "c) sed 's/-/ /g' text.txt"],
    answer: "a) sed 's/ /-/g' text.txt",
  },
  {
    question:
      "Quelle commande affiche les lignes contenant le mot 'bash' dans un fichier nommé 'notes.txt' ?" ,
      options:["a) grep 'bash' notes.txt" ,
      "b) find 'bash' notes.txt" ,
      "c) locate 'bash' notes.txt"],
    answer: "a) grep 'bash' notes.txt",
  },
  {
    question:
      "Comment afficher uniquement les lignes contenant exactement 5 caractères dans un fichier 'data.txt' ?" ,
      options:["a) grep '^.....$' data.txt" ,
      "b) grep '^.{5}$' data.txt" ,
      "c) grep '^.....' data.txt"],
    answer: "a) grep '^.....$' data.txt",
  },
  {
    question:
      "Comment vérifier si un fichier nommé 'config.yaml' existe dans un script Bash ?" ,
      options:["a) if [ -e config.yaml ]; then" ,
      "b) if test config.yaml" ,
      "c) if exists config.yaml"],
    answer: "a) if [ -e config.yaml ]; then",
  },
  {
    question:
      "Comment ajouter 'log.txt' à un fichier compressé 'archive.tar.gz' existant ?" ,
      options:["a) tar -rvf archive.tar.gz log.txt" ,
      "b) tar -av archive.tar.gz log.txt" ,
      "c) gzip archive.tar.gz log.txt"],
    answer: "a) tar -rvf archive.tar.gz log.txt",
  },
  {
    question:
      "Quelle commande permet de remplacer les espaces multiples par un seul espace dans chaque ligne d'un fichier 'text.txt' ?" ,
      options:["a) sed 's/  */ /g' text.txt" ,
      "b) sed 's/ / /g' text.txt" ,
      "c) sed 's/ */ /' text.txt"],
    answer: "a) sed 's/  */ /g' text.txt",
  },
];
