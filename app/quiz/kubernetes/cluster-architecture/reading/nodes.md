**Résumé du contenu (en français) :**

Le document officiel **&laquo; Nodes &raquo;** de la documentation Kubernetes (situé à l&apos;adresse <https://kubernetes.io/docs/concepts/architecture/nodes/>) explique le rôle et la configuration des **nœuds** (*nodes*) dans un cluster Kubernetes. Voici les points essentiels :

---

## 1. Définition générale d’un nœud

- Un **nœud** est une machine (virtuelle ou physique) qui exécute des **Pods** dans Kubernetes.
- Chaque nœud fait tourner des **composants** clés :
  - **kubelet** : Principal agent qui gère le cycle de vie des Pods sur le nœud.
  - **kube-proxy** : Maintient les règles réseau et gère le routage du trafic vers les Pods.
  - **Container Runtime** (ex. Docker, containerd) : Permet l&apos;exécution des conteneurs.

---

## 2. Communication entre nœuds et cluster

- Le **Control Plane** (plan de contrôle, incluant l’API server) communique avec les nœuds pour attribuer des tâches (lancement de Pods) et vérifier l&apos;état du cluster.
- Le **kubelet** envoie régulièrement des informations sur la santé et la capacité du nœud (CPU, mémoire, etc.).

---

## 3. Enregistrement et cycles de vie des nœuds

- Lorsqu’un nœud rejoint le cluster, il s’enregistre auprès de l’**API server** (notamment via `kubeadm join` ou mécaniquement via la configuration).
- Un **Node Object** est alors créé dans l’API de Kubernetes, représentant ce nœud.
- Kubernetes vérifie que le nœud est &laquo; &nbsp;Ready&nbsp;&raquo; en se basant sur les rapports de santé envoyés par le kubelet (sinon l’état est &laquo; &nbsp;NotReady&nbsp;&raquo; ou &laquo; &nbsp;Unknown&nbsp;&raquo;).

---

## 4. Gestion des ressources et labels

- Kubernetes associe **des labels** aux nœuds (ex.: `kubernetes.io/hostname`) pour indiquer leur nom et d&apos;autres caractéristiques.
- Les **taints** et **tolerations** peuvent être utilisés pour restreindre la planification des Pods sur des nœuds particuliers.
- Les **Node Affinity** et **Node Selectors** permettent de spécifier sur quels nœuds un Pod doit (ou ne doit pas) s’exécuter.

---

## 5. Maintenance et retrait d’un nœud

- Il est possible de mettre un nœud en &laquo; &nbsp;drain&nbsp;&raquo; ou &laquo; &nbsp;cordon&nbsp;&raquo; pour éviter que de nouveaux Pods y soient planifiés et pour évacuer les Pods existants (ex. pour maintenance).
  - **Cordon** : Marque le nœud comme non-schedulable (on n’y planifie plus de nouveaux Pods).
  - **Drain** : Évacue les Pods en cours vers d’autres nœuds pour que le nœud puisse être éteint ou mis en maintenance.

---

## 6. Composants internes du nœud

### kubelet
- Surveille en permanence les Pods qui doivent tourner sur ce nœud.
- Télécharge (pull) les images de conteneurs, crée et gère les conteneurs via le Container Runtime.

### kube-proxy
- Gère la couche réseau, mettant en place les règles **iptables** ou **IPVS** afin de router le trafic vers les Pods &laquo; &nbsp;endpoints&nbsp;&raquo; corrects.

### Container Runtime
- Interface logicielle (Docker, containerd, CRI-O, etc.) permettant la création, l’exécution et la gestion des conteneurs.

---

## 7. Approche &laquo; &nbsp;Scale-out&nbsp;&raquo;

- On peut ajouter (ou retirer) des nœuds à la volée pour adapter la capacité du cluster.
- Les nœuds peuvent être administrés directement ou via un service de cloud (ex.: GKE, EKS, AKS) qui gère l’ajout automatique de nœuds.

---

**En résumé**, la page **&laquo;Nodes&raquo;** couvre la notion de nœud en tant qu’élément fondamental d’un cluster Kubernetes, explique comment il communique avec le plan de contrôle, décrit la configuration logicielle côté nœud (kubelet, kube-proxy, runtime), et présente les mécanismes de planification, de maintenance et de gestion (labels, taints, déploiement, retrait). C’est l’endroit-clé pour comprendre comment Kubernetes associe la charge de travail (les Pods) aux ressources physiques ou virtuelles du cluster.