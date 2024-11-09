export const clusterManagementCards = [
    {
id: 1,
front: "Question 1 : Quelle commande permet d\'afficher les informations générales sur le cluster Kubernetes ?,\
a) kubectl describe cluster \
b) kubectl get cluster-info\
c) kubectl cluster-info",
back: "Réponse : c) kubectl cluster-info",
isFlippedCard: false
},

{
id: 2,
front: "Question 2 : Quel composant est responsable de la gestion des Pods et des conteneurs sur chaque nœud ?,\
a) kube-proxy\
b) kubelet\
c) etcd",
back: "Réponse : b) kubelet",
isFlippedCard: false
},

{
id: 3,
front: "Question 3 : Quel service Kubernetes distribue le trafic réseau entre les Pods ?,\
a) kubelet\
b) kube-proxy\
c) etcd",
back: "Réponse : b) kube-proxy",
isFlippedCard: false
},

{
id: 4,
front: "Question 4 : Quelle est la commande pour obtenir l\'état de tous les nœuds d\'un cluster ?,\
a) kubectl get nodes\
b) kubectl cluster-status\
c) kubectl describe nodes",
back: "Réponse : a) kubectl get nodes",
isFlippedCard: false
},

{
id: 5,
front: "Question 5 : Où sont stockées toutes les données d’état et de configuration du cluster Kubernetes ?,\
a) dans le maître (master)\
b) dans kube-apiserver\
c) dans etcd",
back: "Réponse : c) dans etcd",
isFlippedCard: false
},

{
id: 6,
front: "Question 6 : Quel composant du maître gère l’allocation des Pods aux nœuds disponibles ?,\
a) kube-apiserver\
b) kube-scheduler\
c) kube-controller-manager",
back: "Réponse : b) kube-scheduler",
isFlippedCard: false
},

{
id: 7,
front: "Question 7 : Quelle commande permet d’ajouter un nœud à un cluster Kubernetes ?,\
a) kubeadm add node\
b) kubectl join\
c) kubeadm join",
back: "Réponse : c) kubeadm join",
isFlippedCard: false
},

{
id: 8,
front: "Question 8 : Quel fichier de configuration contient les informations de connexion du client kubectl au cluster ?,\
a) /etc/kubernetes/admin.conf\
b) ~/.kube/config\
c) /etc/kubernetes/kubelet.conf",
back: "Réponse : b) ~/.kube/config",
isFlippedCard: false
},

{
id: 9,
front: "Question 9 : Quelle commande permet d’afficher les ressources d’un cluster avec tous leurs détails ?,\
a) kubectl describe all\
b) kubectl get all --all-namespaces\
c) kubectl inspect all",
back: "Réponse : b) kubectl get all --all-namespaces",
isFlippedCard: false
},

{
id: 10,
front: "Question 10 : Quelle commande affiche l’utilisation des ressources, comme le CPU et la mémoire, par chaque nœud ?,\
a) kubectl top nodes\
b) kubectl get resources\
c) kubectl describe nodes",
back: "Réponse : a) kubectl top nodes",
isFlippedCard: false
},

{
id: 11,
front: "Question 11 : Qu\'est-ce que kube-apiserver dans Kubernetes ?,\
a) Le composant qui gère le réseau du cluster\
b) L\'interface REST entre les composants du cluster et les clients\
c) L’outil de gestion des conteneurs",
back: "Réponse : b) L\'interface REST entre les composants du cluster et les clients",
isFlippedCard: false
},

{
id: 12,
front: "Question 12 : Que signifie <<cluster>> dans Kubernetes ?,\
a) Un conteneur d\'application unique\
b) Un ensemble de nœuds fonctionnant ensemble\
c) Une seule machine pour l’administration Kubernetes",
back: "Réponse : b) Un ensemble de nœuds fonctionnant ensemble",
isFlippedCard: false
},

{
id: 13,
front: "Question 13 : Quelle commande affiche les versions de Kubernetes sur tous les nœuds ?,\
a) kubectl describe nodes --version\
b) kubectl get nodes -o wide\
c) kubectl top nodes",
back: "Réponse : b) kubectl get nodes -o wide",
isFlippedCard: false
},

{
id: 14,
front: "Question 14 : Quelle commande permet de voir les composants de contrôle Kubernetes ?,\
a) kubectl control list\
b) kubectl describe control-plane\
c) kubectl get componentstatuses",
back: "Réponse : c) kubectl get componentstatuses",
isFlippedCard: false
},

{
id: 15,
front: "Question 15 : Dans quel fichier de configuration du cluster retrouve-t-on les paramètres de kube-apiserver ?,\
a) /etc/kubernetes/apiserver.yaml\
b) /etc/kubernetes/kube-apiserver.yaml\
c) /etc/kubernetes/manifests/kube-apiserver.yaml",
back: "Réponse : c) /etc/kubernetes/manifests/kube-apiserver.yaml",
isFlippedCard: false
},

{
id: 16,
front: "Question 16 : Quel outil est utilisé pour initier un nouveau cluster Kubernetes ?,\
a) kubectl init\
b) kubeadm init\
c) kubeinit",
back: "Réponse : b) kubeadm init",
isFlippedCard: false
},

{
id: 17,
front: "Question 17 : Où se situe le serveur DNS utilisé par Kubernetes pour les noms de service dans le cluster ?,\
a) dans le conteneur kubelet\
b) dans kube-dns ou CoreDNS\
c) dans etcd",
back: "Réponse : b) dans kube-dns ou CoreDNS",
isFlippedCard: false
},

{
id: 18,
front: "Question 18 : Quelle commande vérifie le statut des composants principaux du cluster ?,\
a) kubectl get componentstatus\
b) kubectl describe components\
c) kubectl check components",
back: "Réponse : a) kubectl get componentstatus",
isFlippedCard: false
},

{
id: 19,
front: "Question 19 : Quelle ressource Kubernetes permet de garantir que certains Pods restent toujours disponibles ?,\
a) ConfigMap\
b) Deployment\
c) PersistentVolume",
back: "Réponse : b) Deployment",
isFlippedCard: false
},

{
id: 20,
front: "Question 20 : Comment sécuriser la communication entre les nœuds Kubernetes ?,\
a) en utilisant des règles de sécurité IAM\
b) en activant le chiffrement TLS\
c) en installant kube-dns",
back: "Réponse : b) en activant le chiffrement TLS",
isFlippedCard: false
},

{
id: 21,
front: "Question 21 : Quel composant effectue des copies de sauvegarde des configurations Kubernetes ?,\
a) kubelet\
b) kube-proxy\
c) etcd",
back: "Réponse : c) etcd",
isFlippedCard: false
},

{
id: 22,
front: "Question 22 : Quelle commande permet d’observer la consommation en temps réel des ressources du cluster ?,\
a) kubectl status\
b) kubectl describe nodes\
c) kubectl top nodes",
back: "Réponse : c) kubectl top nodes",
isFlippedCard: false
},

{
id: 23,
front: "Question 23 : Dans quel fichier est stocké le certificat de kube-apiserver ?,\
a) /etc/kubernetes/pki/apiserver.crt\
b) /etc/kubernetes/apiserver/kube.crt\
c) /var/lib/kubernetes/cert/apiserver.crt",
back: "Réponse : a) /etc/kubernetes/pki/apiserver.crt",
isFlippedCard: false
},

{
id: 24,
front: "Question 24 : À quoi sert kube-controller-manager dans un cluster Kubernetes ?,\
a) À surveiller l\'état des Pods\
b) À exécuter des contrôleurs pour gérer l\'état du cluster\
c) À fournir des services DNS aux Pods",
back: "Réponse : b) À exécuter des contrôleurs pour gérer l\'état du cluster",
isFlippedCard: false
},

{
id: 25,
front: "Question 25 : Que représente l\'instruction kubectl cordon <node-name> ?,\
a) Ajouter un nœud au cluster\
b) Empêcher les Pods de s\'exécuter sur le nœud\
c) Redémarrer un nœud",
back: "Réponse : b) Empêcher les Pods de s\'exécuter sur le nœud",
isFlippedCard: false
},

{
id: 26,
front: "Question 26 : Quelle commande permet de libérer des ressources sur un nœud avant de le retirer du cluster ?,\
a) kubectl drain <node-name>\
b) kubectl evict <node-name>\
c) kubectl uncordon <node-name>",
back: "Réponse : a) kubectl drain <node-name>",
isFlippedCard: false
},

{
id: 27,
front: "Question 27 : Que signifie le statut <<NotReady>> pour un nœud ?,\
a) Le nœud ne répond plus aux requêtes\
b) Le nœud est en cours de mise à jour\
c) Le nœud fonctionne correctement",
back: "Réponse : a) Le nœud ne répond plus aux requêtes",
isFlippedCard: false
},

{
id: 28,
front: "Question 28 : Comment un nœud peut-il être restauré en état de planification ?,\
a) kubectl replan <node-name>\
b) kubectl uncordon <node-name>\
c) kubectl redeploy <node-name>",
back: "Réponse : b) kubectl uncordon <node-name>",
isFlippedCard: false
},

{
id: 29,
front: "Question 29 : Quel composant Kubernetes gère les règles d’équilibrage de charge ?,\
a) kube-scheduler\
b) kube-proxy\
c) kubelet",
back: "Réponse : b) kube-proxy",
isFlippedCard: false
},

{
id: 30,
front: "Question 30 : En quoi consiste un cluster role dans Kubernetes ?,\
a) Une configuration de DNS\
b) Une restriction d’accès\
c) Une règle d\'autorisation pour plusieurs espaces de noms",
back: "Réponse : c) Une règle d\'autorisation pour plusieurs espaces de noms",
isFlippedCard: false
},

{
id: 31,
front: "Question 31 : Où sont stockées les données des applications de votre cluster ?,\
a) Dans kubelet\
b) Dans kube-apiserver\
c) Dans etcd",
back: "Réponse : c) Dans etcd",
isFlippedCard: false
},

{
id: 32,
front: "Question 32 : Comment afficher l\'historique de déploiement pour vérifier les modifications d\'un cluster ?,\
a) kubectl deployment history\
b) kubectl rollout history\
c) kubectl cluster-history",
back: "Réponse : b) kubectl rollout history",
isFlippedCard: false
},

{
id: 33,
front: "Question 33 : Quelle commande restaure un cluster après un incident ?,\
a) kubectl restore cluster\
b) etcdctl snapshot restore\
c) kubectl backup cluster",
back: "Réponse : b) etcdctl snapshot restore",
isFlippedCard: false
},
]

export const flippedCards:any =[]
clusterManagementCards.map((clusterManagementCard, index) => (
  flippedCards.push(clusterManagementCard.isFlippedCard),
  flippedCards.push(false)) // pour prendre en compte le dernier élément de la liste
)