**Résumé du contenu (en français) :**

La page **« Garbage Collection »** située à l’adresse <https://kubernetes.io/docs/concepts/architecture/garbage-collection/> décrit le mécanisme de **nettoyage automatique** dans Kubernetes, qui supprime les objets devenus orphelins ou inutiles lorsque certaines conditions sont remplies. Voici les éléments clés :

---

## 1. Principe général du Garbage Collection

- **But** : Éviter d’accumuler des objets (Pods, ReplicaSets, etc.) qui ne sont plus référencés et donc plus utiles.
- **Owner References** : Chaque objet Kubernetes peut avoir un ou plusieurs « propriétaires ». Lorsque le propriétaire est supprimé, les objets qui en dépendent (enfants) peuvent être à leur tour supprimés.

---

## 2. Owner References et Orphaning

1. **OwnerReference** :  
   - Dans le champ `metadata.ownerReferences`, un objet liste les références de son (ou ses) propriétaire(s).  
   - Ex. Un ReplicaSet possède les Pods qu’il crée ; chaque Pod a un champ `ownerReferences` pointant vers le ReplicaSet.

2. **Stratégie d’orphelin** :  
   - On peut configurer Kubernetes pour « orpheline » un objet (conserver les enfants) même si le propriétaire est supprimé.  
   - Dans ce cas, l’objet enfant perd simplement sa référence au parent (donc, plus tard, Kubernetes ne le supprime pas automatiquement).

---

## 3. Les stratégies de suppression (Foreground / Background)

Lorsque vous supprimez un objet parent, vous pouvez définir la manière dont les enfants sont gérés :

1. **Foreground** :  
   - Kubernetes supprime d’abord tous les enfants (les Pods, etc.).  
   - Ce n’est qu’une fois tous les enfants supprimés que l’objet parent est supprimé à son tour.  
   - Permet de s’assurer qu’aucun orphelin ne reste.

2. **Background** :  
   - Kubernetes supprime l’objet parent immédiatement, puis le Garbage Collector supprime les enfants en tâche de fond.  
   - Les Pods et autres ressources dépendantes disparaissent après coup, sans bloquer la suppression du parent.

3. **Orphan** :  
   - Les enfants ne sont pas supprimés. On retire la référence au parent, et ils continuent d’exister de manière autonome.

---

## 4. Finalizers

- **Finalizer** : Champ spécial qui empêche la suppression finale d’un objet tant que certaines opérations n’ont pas été accomplies.
- Utilisé par des opérateurs ou des contrôleurs personnalisés pour exécuter une logique avant que l’objet ne disparaisse (libération de ressources externes, etc.).

---

## 5. Bonnes pratiques

- **Choisir la stratégie adaptée** (Foreground, Background, Orphan) lors de la suppression d’un objet, selon l’effet recherché.
- **Vérifier les OwnerReferences** dans `metadata` pour s’assurer que la hiérarchie parent/enfant est correctement établie.
- **Utiliser des Finalizers** pour garantir une exécution d’opérations critiques avant la disparition d’un objet.

---

**En résumé**, la page **« Garbage Collection »** montre comment Kubernetes supprime automatiquement les objets enfants lorsqu’un objet parent est supprimé, grâce aux **Owner References** et aux **stratégies** (Foreground, Background, Orphan). Ce mécanisme évite l’encombrement du cluster par des ressources orphelines et permet de s’assurer que toutes les dépendances sont correctement gérées lors de la suppression d’objets. Des **Finalizers** peuvent également être utilisés pour intercepter la suppression et effectuer des opérations préalables.