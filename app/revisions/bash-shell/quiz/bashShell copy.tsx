export const questions = [
  {
    question:
      "Quelle commande permet de lister tous les fichiers, y compris les fichiers cachés, dans un répertoire ?\n" ,
      options:["a) ls -a\n" ,
      "b) ls -l\n" ,
      "c) ls -h"],
    answer: "Réponse : a) ls -a. La commande `ls -a` affiche tous les fichiers dans le répertoire actuel, y compris les fichiers cachés qui commencent par un point (.). La commande `ls -l` affiche les fichiers avec des informations détaillées sans afficher les fichiers cachés, tandis que `ls -h` affiche les tailles des fichiers de manière lisible par l’humain (en kilo, méga, ou gigaoctets).",
  },
  {
    question:
      "Quelle est la commande pour afficher les 10 premières lignes d'un fichier nommé 'log.txt' ?\n" ,
      options:["a) head -n 10 log.txt\n" ,
      "b) tail -n 10 log.txt\n" ,
      "c) cat log.txt | head -10"],
    answer: "Réponse : a) head -n 10 log.txt. La commande `head -n 10 log.txt` affiche les 10 premières lignes du fichier `log.txt`. La commande `tail -n 10 log.txt` affiche les 10 dernières lignes, et `cat log.txt | head -10` fonctionne également mais est moins efficace car elle utilise une redirection inutile.",
  },
  {
    question:
      "Comment afficher la liste des processus en cours d'exécution avec leur utilisation de mémoire et de CPU ?\n" ,
      options:["a) ps -aux\n" ,
      "b) top\n" ,
      "c) htop"],
    answer: "Réponse : b) top. La commande `top` affiche une liste des processus en cours, triée par défaut par utilisation de CPU. La commande `ps -aux` affiche une liste statique des processus, sans utilisation dynamique. `htop` est similaire à `top` mais n'est pas installé par défaut.",
  },
  {
    question:
      "Quelle commande permet de rechercher récursivement un fichier nommé 'config.yaml' dans tous les sous-répertoires du répertoire actuel ?\n" ,
      options:["a) find . -name config.yaml\n" ,
      "b) locate config.yaml\n" ,
      "c) grep config.yaml"],
    answer: "Réponse : a) find . -name config.yaml. La commande `find` recherche dans un chemin spécifié tous les fichiers correspondant à un nom. La commande `locate` recherche dans une base de données mise à jour régulièrement et ne couvre pas les fichiers récemment créés.",
  },
  {
    question:
      "Quelle commande est utilisée pour rediriger la sortie d'une commande vers un autre fichier en ajoutant la sortie à la fin du fichier ?\n" ,
      options:["a) >\n" ,
      "b) >>\n" ,
      "c) <<<"],
    answer: "Réponse : b) >>. L'opérateur `>>` redirige la sortie d'une commande en ajoutant au fichier existant sans le remplacer. L'opérateur `>` écrase le fichier existant, tandis que `<<<` est utilisé pour des chaînes de texte dans les commandes.",
  },
  {
    question:
      "Dans un script bash, quelle syntaxe est correcte pour vérifier si une variable 'file' est égale à 'data.txt' ?\n" ,
      options:["a) if [ $file = 'data.txt' ]; then\n" ,
      "b) if ( $file == 'data.txt' )\n" ,
      "c) if [ $file == data.txt ]"],
    answer: "Réponse : a) if [ $file = 'data.txt' ]; then. En bash, la syntaxe `[ $variable = valeur ]` est correcte. La double égalité (`==`) fonctionne aussi, mais les guillemets simples autour de la valeur sont nécessaires pour éviter des erreurs.",
  },
  {
    question:
      "Quelle commande crée un alias nommé 'll' pour 'ls -l' ?\n" ,
      options:["a) alias ll='ls -l'\n" ,
      "b) alias 'll' ls -l\n" ,
      "c) alias ls -l='ll'"],
    answer: "Réponse : a) alias ll='ls -l'. La syntaxe `alias nom=commande` est correcte pour créer un alias. `alias 'll' ls -l` et `alias ls -l='ll'` sont incorrects et ne fonctionnent pas.",
  },
  {
    question:
      "Quelle commande permet d'ajouter un texte au début de chaque ligne d'un fichier nommé 'file.txt' ?\n" ,
      options:["a) sed 's/^/texte/' file.txt\n" ,
      "b) awk '{print \"texte\" $0}' file.txt\n",+
      "c) grep -r '^texte' file.txt"],
    answer: "Réponse : a) sed 's/^/texte/' file.txt. En utilisant `sed`, on peut ajouter un texte au début de chaque ligne avec le motif `s/^/texte/`. `awk` peut aussi faire cela, mais la commande `grep` ne modifie pas le contenu.",
  },
  {
    question:
      "Quelle commande permet de compter le nombre total de lignes d'un fichier nommé 'sample.txt' ?\n" ,
      options:["a) count sample.txt\n" ,
      "b) wc -l sample.txt\n" ,
      "c) lines sample.txt"],
    answer: "Réponse : b) wc -l sample.txt. La commande `wc -l` est utilisée pour compter le nombre de lignes dans un fichier donné. `count` et `lines` ne sont pas des commandes Bash.",
  },
  {
    question:
      "Comment créer une variable en bash et lui attribuer une valeur ?\n" ,
      options:["a) let var=10\n" ,
      "b) var=10\n" ,
      "c) var: 10"],
    answer: "Réponse : b) var=10. En Bash, une variable est assignée sans espace autour du signe `=`. `let` est utilisé pour évaluer des expressions arithmétiques.",
  },
  {
    question:
      "Comment exécuter un script bash nommé 'install.sh' qui est dans le répertoire actuel ?\n" ,
      options:["a) bash install.sh\n" ,
      "b) ./install.sh\n" ,
      "c) exec install.sh"],
    answer: "Réponse : b) ./install.sh. Pour exécuter un script dans le répertoire actuel, on utilise `./` suivi du nom du fichier, à condition qu'il ait les droits d'exécution.",
  },
  {
    question:
      "Comment supprimer un alias créé dans une session Bash ?\n" ,
      options:["a) remove-alias alias_name\n" ,
      "b) unalias alias_name\n" ,
      "c) delete alias_name"],
    answer: "Réponse : b) unalias alias_name. La commande `unalias` est utilisée pour supprimer un alias temporairement.",
  },
  {
    question:
      "Quelle commande permet de rechercher toutes les occurrences de 'error' dans tous les fichiers du répertoire actuel ?\n" ,
      options:["a) grep -r 'error' .\n" ,
      "b) find . -name 'error'\n" ,
      "c) locate 'error'"],
    answer: "Réponse : a) grep -r 'error' .. La commande `grep -r 'error' .` permet de rechercher récursivement le mot 'error' dans tous les fichiers du répertoire actuel. La commande `find` cherche des fichiers spécifiques par nom, tandis que `locate` recherche dans une base de données de fichiers mise à jour régulièrement.",
  },
  {
    question:
      "Comment utiliser la commande 'awk' pour afficher la deuxième colonne de chaque ligne dans un fichier 'data.txt' ?\n" ,
      options:["a) awk '{print $1}' data.txt\n" ,
      "b) awk '{print $2}' data.txt\n" ,
      "c) awk '{print $3}' data.txt"],
    answer: "Réponse : b) awk '{print $2}' data.txt. En utilisant `awk`, `$2` fait référence à la deuxième colonne de chaque ligne dans le fichier. `$1` correspond à la première colonne et `$3` à la troisième.",
  },
  {
    question:
      "Quelle commande permet de remplacer toutes les occurrences de 'foo' par 'bar' dans un fichier 'sample.txt' ?\n" ,
      options:["a) sed 's/foo/bar/g' sample.txt\n" ,
      "b) sed 'replace foo with bar' sample.txt\n" ,
      "c) awk 's/foo/bar/g' sample.txt"],
    answer: "Réponse : a) sed 's/foo/bar/g' sample.txt. La commande `sed` avec l'option `s/foo/bar/g` remplace chaque occurrence de 'foo' par 'bar' dans le fichier `sample.txt`. `awk` n'utilise pas cette syntaxe pour la substitution.",
  },
  {
    question:
      "Quelle est la syntaxe correcte pour une boucle 'for' en Bash ?\n" ,
      options:["a) for i in {1..5}; do echo $i; done\n" ,
      "b) for i = 1 to 5; echo $i\n" ,
      "c) for (i=1; i<=5; i++); echo $i;"],
    answer: "Réponse : a) for i in {1..5}; do echo $i; done. La syntaxe correcte pour une boucle `for` en Bash est `for variable in range; do ... done`. Les syntaxes `(i=1; i<=5; i++)` sont propres à d'autres langages comme C ou JavaScript.",
  },
  {
    question:
      "Quelle commande permet de supprimer les lignes en double dans un fichier, en ne gardant qu'une seule occurrence de chaque ligne ?\n" ,
      options:["a) uniq -u file.txt\n" ,
      "b) sort file.txt | uniq\n" ,
      "c) grep -u file.txt"],
    answer: "Réponse : b) sort file.txt | uniq. `sort` permet d'ordonner les lignes avant de les envoyer à `uniq`, qui ne garde qu'une occurrence de chaque ligne consécutive. `uniq -u` affiche uniquement les lignes uniques, sans les répétitions.",
  },
  {
    question:
      "Quelle commande est utilisée pour assigner une valeur à une variable d'environnement de manière temporaire dans une seule ligne ?\n" ,
      options:["a) export VAR=value\n" ,
      "b) VAR=value commande\n" ,
      "c) set VAR=value"],
    answer: "Réponse : b) VAR=value commande. En utilisant cette syntaxe, la variable d'environnement est assignée uniquement pour l'exécution de la commande. `export VAR=value` rend la variable persistante pour la session, tandis que `set` n'est pas utilisé pour définir des variables d'environnement en Bash.",
  },
  {
    question:
      "Quelle commande envoie la sortie standard d'une commande dans un fichier et la sortie d'erreur dans un autre fichier ?\n" ,
      options:["a) commande > out.txt 2> err.txt\n" ,
      "b) commande > out.txt | err.txt\n" ,
      "c) commande 2> out.txt > err.txt"],
    answer: "Réponse : a) commande > out.txt 2> err.txt. En Bash, `>` redirige la sortie standard et `2>` redirige les erreurs. `|` est utilisé pour les tubes de commandes.",
  },
  {
    question:
      "Quelle commande permet de remplacer les espaces par des tirets dans un fichier 'text.txt' en utilisant 'sed' ?\n" ,
      options:["a) sed 's/ /-/g' text.txt\n" ,
      "b) sed 'replace spaces with dashes' te,t.txt\n" +
      "c) sed 's/-/ /g' text.txt"],
    answer: "Réponse : a) sed 's/ /-/g' text.txt. La commande `sed 's/ /-/g'` remplace les espaces par des tirets dans tout le fichier. L'option `g` applique la substitution à toutes les occurrences dans chaque ligne.",
  },
  {
    question:
      "Quelle commande affiche les lignes contenant le mot 'bash' dans un fichier nommé 'notes.txt' ?\n" ,
      options:["a) grep 'bash' notes.txt\n" ,
      "b) find 'bash' notes.txt\n" ,
      "c) locate 'bash' notes.txt"],
    answer: "Réponse : a) grep 'bash' notes.txt. La commande `grep` recherche des motifs dans les fichiers et affiche les lignes correspondantes. `find` est utilisé pour rechercher des fichiers, et `locate` recherche dans une base de données.",
  },
  {
    question:
      "Comment afficher uniquement les lignes contenant exactement 5 caractères dans un fichier 'data.txt' ?\n" ,
      options:["a) grep '^.....$' data.txt\n" ,
      "b) grep '^.{5}$' data.txt\n" ,
      "c) grep '^.....' data.txt"],
    answer: "Réponse : a) grep '^.....$' data.txt. L'expression régulière `^.....$` correspond exactement à 5 caractères sur chaque ligne. `^.{5}$` fonctionnerait aussi si `grep` prend en charge le caractère générique `{}`.",
  },
  {
    question:
      "Comment vérifier si un fichier nommé 'config.yaml' existe dans un script Bash ?\n" ,
      options:["a) if [ -e config.yaml ]; then\n" ,
      "b) if test config.yaml\n" ,
      "c) if exists config.yaml"],
    answer: "Réponse : a) if [ -e config.yaml ]; then. L'option `-e` vérifie si un fichier existe. `test` peut également être utilisé avec `-e`, mais `exists` n'est pas une syntaxe valide.",
  },
  {
    question:
      "Comment ajouter 'log.txt' à un fichier compressé 'archive.tar.gz' existant ?\n" ,
      options:["a) tar -rvf archive.tar.gz log.txt\n" ,
      "b) tar -av archive.tar.gz log.txt\n" ,
      "c) gzip archive.tar.gz log.txt"],
    answer: "Réponse : a) tar -rvf archive.tar.gz log.txt. L'option `-r` permet d'ajouter des fichiers à une archive existante. `gzip` ne prend pas en charge l'ajout de fichiers à un fichier compressé existant.",
  },
  {
    question:
      "Quelle commande permet de remplacer les espaces multiples par un seul espace dans chaque ligne d'un fichier 'text.txt' ?\n" ,
      options:["a) sed 's/  */ /g' text.txt\n" ,
      "b) sed 's/ / /g' text.txt\n" ,
      "c) sed 's/ */ /' text.txt"],
    answer: "Réponse : a) sed 's/  */ /g' text.txt. Cette expression régulière `s/  */ /g` remplace toutes les occurrences de plusieurs espaces par un seul espace.",
  },
];
