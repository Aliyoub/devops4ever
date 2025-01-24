**Résumé du contenu (en français) :**

Le document **&laquo; Controllers &raquo;** situé à l’adresse <https://kubernetes.io/docs/concepts/architecture/controller/> explique le rôle et la logique de **contrôle** (control loop) au sein de Kubernetes. Il met en avant la façon dont divers **contrôleurs** (controllers) maintiennent l’état souhaité du cluster, notamment pour les objets tels que **ReplicationController**, **ReplicaSet**, **Deployment**, etc.

---

## 1. Principe d’un &laquo; control loop &raquo;

- Un contrôleur (*controller*) se base sur un **boucle de régulation** (*control loop*) :  
  1. **Observe** l’état actuel du cluster (via l’API server)  
  2. **Compare** cet état à l’état souhaité (défini dans les objets de configuration)  
  3. **Agit** si nécessaire pour corriger la divergence (en créant ou en supprimant des Pods, par exemple).

- Cette logique est la clé de l’architecture Kubernetes : les contrôleurs assurent la **conformité** entre ce qui est déclaré (manifests YAML, etc.) et la réalité du cluster (Pods réellement en cours d’exécution).

---

## 2. Exemples de contrôleurs

1. **ReplicaSet (anciennement ReplicationController)**  
   - Maintient un nombre fixe de **Pods** identiques à tout moment.  
   - Si un Pod meurt ou est supprimé, le ReplicaSet en crée un nouveau pour préserver la spécification.

2. **Deployment**  
   - S’appuie sur un ReplicaSet pour gérer le **cycle de vie** des Pods, y compris les mises à jour progressives (rolling update) et les retours arrière (rollback).  
   - Garantit la version et le nombre désiré de Pods déployés.

3. **StatefulSet**  
   - Gère les applications **stateful** (avec état) où chaque Pod a une identité stable (nom de réseau fixe, volume persistant dédié, etc.).  
   - Le contrôleur assure la création et la suppression ordonnées de Pods.

4. **DaemonSet**  
   - Garantit qu’un **Pod spécifique** tourne sur chaque nœud (ou un sous-ensemble de nœuds) du cluster.  
   - Utile pour les tâches d’infrastructure (journalisation, monitoring, etc.).

5. **Job et CronJob**  
   - *Job* : exécute une charge de travail (Pod) jusqu’à completion (une ou plusieurs fois).  
   - *CronJob* : planifie des *Jobs* de manière périodique (similaire à cron).

6. **Garbage Collector**  
   - Supprime les objets devenus orphelins (ex. un Pod qui n’est plus référencé par un ReplicaSet).

---

## 3. Contrôleurs intégrés et contrôleurs personnalisés

- **Contrôleurs intégrés** : fournis en standard (ReplicaSet, Deployment, etc.) et gérés par le **kube-controller-manager**.  
- **Contrôleurs personnalisés** : vous pouvez créer vos propres logiques de contrôle via des **Custom Resource Definitions (CRD)** pour répondre à des besoins spécifiques.  

---

## 4. Mécanisme de fonctionnement

1. **Informer / Watch** : Le contrôleur récupère les événements du cluster (nouveaux objets, mises à jour, suppressions).  
2. **Comparer** : Le contrôleur vérifie si les conditions d’un objet (ex.: un Deployment) sont respectées.  
3. **Reconciliation** : S’il y a un écart, le contrôleur agit (ex. créer plus de Pods, supprimer un Pod en excès).  
4. **Répétition** : Ce cycle se répète constamment de manière **asynchrone** et **concurrente**.

---

## 5. Aspects clés

- **Boucle de réconciliation** : Au cœur de Kubernetes, elle rend le cluster &laquo; auto-réparable &raquo; et **déclaratif**.  
- **Niveaux d’abstraction** : Les utilisateurs interagissent via des objets de haut niveau (Deployment, StatefulSet...) qui déclenchent des actions concrètes (création de Pods, etc.).  
- **Haute disponibilité** : Plusieurs contrôleurs peuvent s’exécuter pour tolérer les pannes, et le plus souvent, c’est le **kube-controller-manager** qui agrège de nombreux contrôleurs.  

---

**En résumé**, la page **&laquo; Controllers &raquo;** décrit comment Kubernetes maintient l’état souhaité du cluster grâce à divers **contrôleurs**, chacun se concentrant sur un objet ou une ressource spécifique (ReplicaSet, Deployment, etc.). Les contrôleurs suivent un **modèle déclaratif** : l’utilisateur définit l’état voulu, et Kubernetes exécute une boucle de régulation pour y parvenir ou conserver cet état, assurant cohérence et robustesse dans la gestion des services conteneurisés.