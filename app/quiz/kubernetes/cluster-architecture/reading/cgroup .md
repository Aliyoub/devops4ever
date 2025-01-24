**Résumé du contenu (en français) :**

La page **« cgroups »** située à l’adresse <https://kubernetes.io/docs/concepts/architecture/cgroups/> explique comment Kubernetes utilise les **control groups** (*cgroups*) du noyau Linux pour **gérer et isoler** l’utilisation des ressources (CPU, mémoire, etc.) par les conteneurs. Les points principaux abordés sont :

---

## 1. Qu’est-ce qu’un cgroup ?

- **cgroup** (control group) est une fonctionnalité du noyau Linux permettant de **regrouper des processus** et de **limiter, mesurer, isoler** leur consommation de ressources (CPU, mémoire, etc.).
- Les cgroups offrent un moyen de garantir qu’aucun processus ou ensemble de processus n’excède les ressources allouées.

---

## 2. Rôle des cgroups dans Kubernetes

1. **Isolation et limitation** :  
   - Kubernetes, via le container runtime (Docker, containerd, etc.), crée des cgroups pour les conteneurs afin d’appliquer les **Resource Requests/ Limits** (CPU, RAM).
   - Cela assure qu’un **Pod** n’excède pas la limite de ressources fixée dans la **spec** (ex. `resources.limits.cpu`).

2. **Gestion hiérarchique** :  
   - Les cgroups sont structurés en **hiérarchies**. Chaque conteneur est placé dans un **sous-groupe** dédié, héritant ou non des paramètres du groupe parent.
   - Cela permet à Kubernetes de gérer de multiples Pods et conteneurs sans qu’ils n’entrent en conflit pour l’accès aux ressources.

3. **Monitoring des ressources** :  
   - Les cgroups fournissent des statistiques d’utilisation qui peuvent être lues par le kubelet ou le runtime, permettant d’**observer** la consommation réelle de CPU, mémoire, etc.
   - Kubernetes peut ajuster ou réagir (ex. éviction de Pods) si la mémoire est saturée.

---

## 3. Paramètres et contrôleurs de cgroups

- **Contrôleurs** : il existe plusieurs contrôleurs (CPU, memory, blkio, devices...) qui restreignent ou surveillent un type précis de ressource.
- **Configuration** : Kubernetes, via le runtime, crée ou configure ces contrôleurs au niveau d’un Pod/ conteneur.  
- Par exemple, pour un **limit.cpu** de 1 vCPU, le conteneur aura un groupe cgroup CPU spécifique qui limite ses cycles CPU disponibles.

---

## 4. Implications pour la QoS et la fiabilité

1. **Qualité de service (QoS)** :  
   - Kubernetes classe les Pods en QoS Guaranteed, Burstable ou BestEffort selon leurs Resource Requests/ Limits. Les cgroups sous-jacents reflètent ce choix et appliquent les limites correspondantes.
2. **Stabilité du nœud** :  
   - En isolant la mémoire, on évite qu’un conteneur ne consomme toute la RAM du nœud et provoque un plantage global.
3. **Éviction** :  
   - Si un conteneur dépasse ses limites de mémoire, le kernel (via cgroups) peut émettre un signal OOM (Out Of Memory) et forcer l’arrêt du conteneur pour libérer les ressources.

---

## 5. Recommandations et bonnes pratiques

- **Définir des requests/limits** appropriées : pour que le scheduler et les cgroups allouent correctement les ressources.
- **Surveiller les metrics cgroups** : permettre de détecter tout dépassement (ex. Pod en CrashLoopBackOff si la mémoire est trop basse).
- **Compatibilité** : s’assurer que le runtime container est configuré pour tirer parti des cgroups. Vérifier également l’activation de cgroups au niveau du noyau (ex. cgroups v1 vs cgroups v2).

---

**En résumé**, la page **« cgroups »** souligne que Kubernetes s’appuie sur la fonctionnalité **control groups** de Linux pour **allouer, limiter et surveiller** les ressources des Pods et conteneurs, assurant ainsi une isolation fiable et une meilleure stabilité du cluster. Les cgroups permettent de mettre en œuvre concrètement les **Resource Requests & Limits** définis dans les manifestes Kubernetes, garantissant qu’aucun conteneur ne dépasse les ressources allouées et que l’isolation entre Pods est maintenue.