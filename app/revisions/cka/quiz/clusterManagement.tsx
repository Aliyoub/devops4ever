export const questions = [
{
question: " Quelle commande permet d'afficher les informations générales sur le cluster Kubernetes ?",
options: [
"a) kubectl describe cluster",
"b) kubectl get cluster-info",
"c) kubectl cluster-info"],
answer: "c) kubectl cluster-info"
},

{
question: " Quel composant est responsable de la gestion des Pods et des conteneurs sur chaque nœud ?",
options: [
"a) kube-proxy",
"b) kubelet",
"c) etcd"],
answer: "b) kubelet"
},

{
question: " Quel service Kubernetes distribue le trafic réseau entre les Pods ?",
options: [
"a) kubelet",
"b) kube-proxy",
"c) etcd"],
answer: "b) kube-proxy"
},

{
question: " Quelle est la commande pour obtenir l'état de tous les nœuds d'un cluster ?",
options: [
"a) kubectl get nodes",
"b) kubectl cluster-status",
"c) kubectl describe nodes"],
answer: "a) kubectl get nodes"
},

{
question: " Où sont stockées toutes les données d’état et de configuration du cluster Kubernetes ?",
options: [
"a) dans le maître (master)",
"b) dans kube-apiserver",
"c) dans etcd"],
answer: "c) dans etcd"
},

{
question: " Quel composant du maître gère l’allocation des Pods aux nœuds disponibles ?",
options: [
"a) kube-apiserver",
"b) kube-scheduler",
"c) kube-controller-manager"],
answer: "b) kube-scheduler"
},

{
question: " Quelle commande permet d’ajouter un nœud à un cluster Kubernetes ?",
options: [
"a) kubeadm add node",
"b) kubectl join",
"c) kubeadm join"],
answer: "c) kubeadm join"
},

{
question: " Quel fichier de configuration contient les informations de connexion du client kubectl au cluster ?",
options: [
"a) /etc/kubernetes/admin.conf",
"b) ~/.kube/config",
"c) /etc/kubernetes/kubelet.conf"],
answer: "b) ~/.kube/config"
},

{
question: " Quelle commande permet d’afficher les ressources d’un cluster avec tous leurs détails ?",
options: [
"a) kubectl describe all",
"b) kubectl get all --all-namespaces",
"c) kubectl inspect all"],
answer: "b) kubectl get all --all-namespaces"
},

{
question: " Quelle commande affiche l’utilisation des ressources, comme le CPU et la mémoire, par chaque nœud ?",
options: [
"a) kubectl top nodes",
"b) kubectl get resources",
"c) kubectl describe nodes"],
answer: "a) kubectl top nodes"
},

{
question: " Qu'est-ce que kube-apiserver dans Kubernetes ?",
options: [
"a) Le composant qui gère le réseau du cluster",
"b) L'interface REST entre les composants du cluster et les clients",
"c) L’outil de gestion des conteneurs"],
answer: "b) L'interface REST entre les composants du cluster et les clients"
},

{
question: " Que signifie <<cluster>> dans Kubernetes ?",
options: [
"a) Un conteneur d'application unique",
"b) Un ensemble de nœuds fonctionnant ensemble",
"c) Une seule machine pour l’administration Kubernetes"],
answer: "b) Un ensemble de nœuds fonctionnant ensemble"
},

{
question: " Quelle commande affiche les versions de Kubernetes sur tous les nœuds ?",
options: [
"a) kubectl describe nodes --version",
"b) kubectl get nodes -o wide",
"c) kubectl top nodes"],
answer: "b) kubectl get nodes -o wide"
},

{
question: " Quelle commande permet de voir les composants de contrôle Kubernetes ?",
options: [
"a) kubectl control list",
"b) kubectl describe control-plane",
"c) kubectl get componentstatuses"],
answer: "c) kubectl get componentstatuses"
},

{
question: " Dans quel fichier de configuration du cluster retrouve-t-on les paramètres de kube-apiserver ?",
options: [
"a) /etc/kubernetes/apiserver.yaml",
"b) /etc/kubernetes/kube-apiserver.yaml",
"c) /etc/kubernetes/manifests/kube-apiserver.yaml"],
answer: "c) /etc/kubernetes/manifests/kube-apiserver.yaml"
},

{
question: " Quel outil est utilisé pour initier un nouveau cluster Kubernetes ?",
options: [
"a) kubectl init",
"b) kubeadm init",
"c) kubeinit"],
answer: "b) kubeadm init"
},

{
question: " Où se situe le serveur DNS utilisé par Kubernetes pour les noms de service dans le cluster ?",
options: [
"a) dans le conteneur kubelet",
"b) dans kube-dns ou CoreDNS",
"c) dans etcd"],
answer: "b) dans kube-dns ou CoreDNS"
},

{
question: " Quelle commande vérifie le statut des composants principaux du cluster ?",
options: [
"a) kubectl get componentstatus",
"b) kubectl describe components",
"c) kubectl check components"],
answer: "a) kubectl get componentstatus"
},

{
question: " Quelle ressource Kubernetes permet de garantir que certains Pods restent toujours disponibles ?",
options: [
"a) ConfigMap",
"b) Deployment",
"c) PersistentVolume"],
answer: "b) Deployment"
},

{
question: " Comment sécuriser la communication entre les nœuds Kubernetes ?",
options: [
"a) en utilisant des règles de sécurité IAM",
"b) en activant le chiffrement TLS",
"c) en installant kube-dns"],
answer: "b) en activant le chiffrement TLS"
},

{
question: " Quel composant effectue des copies de sauvegarde des configurations Kubernetes ?",
options: [
"a) kubelet",
"b) kube-proxy",
"c) etcd"],
answer: "c) etcd"
},

{
question: " Quelle commande permet d’observer la consommation en temps réel des ressources du cluster ?",
options: [
"a) kubectl status",
"b) kubectl describe nodes",
"c) kubectl top nodes"],
answer: "c) kubectl top nodes"
},

{
question: " Dans quel fichier est stocké le certificat de kube-apiserver ?",
options: [
"a) /etc/kubernetes/pki/apiserver.crt",
"b) /etc/kubernetes/apiserver/kube.crt",
"c) /var/lib/kubernetes/cert/apiserver.crt"],
answer: "a) /etc/kubernetes/pki/apiserver.crt"
},

{
question: " À quoi sert kube-controller-manager dans un cluster Kubernetes ?",
options: [
"a) À surveiller l'état des Pods",
"b) À exécuter des contrôleurs pour gérer l'état du cluster",
"c) À fournir des services DNS aux Pods"],
answer: "b) À exécuter des contrôleurs pour gérer l'état du cluster"
},

{
question: " Que représente l'instruction kubectl cordon <node-name> ?",
options: [
"a) Ajouter un nœud au cluster",
"b) Empêcher les Pods de s'exécuter sur le nœud",
"c) Redémarrer un nœud"],
answer: "b) Empêcher les Pods de s'exécuter sur le nœud"
},

{
question: " Quelle commande permet de libérer des ressources sur un nœud avant de le retirer du cluster ?",
options: [
"a) kubectl drain <node-name>",
"b) kubectl evict <node-name>",
"c) kubectl uncordon <node-name>"],
answer: "a) kubectl drain <node-name>"
},

{
question: " Que signifie le statut <<NotReady>> pour un nœud ?",
options: [
"a) Le nœud ne répond plus aux requêtes",
"b) Le nœud est en cours de mise à jour",
"c) Le nœud fonctionne correctement"],
answer: "a) Le nœud ne répond plus aux requêtes"
},

{
question: " Comment un nœud peut-il être restauré en état de planification ?",
options: [
"a) kubectl replan <node-name>",
"b) kubectl uncordon <node-name>",
"c) kubectl redeploy <node-name>"],
answer: "b) kubectl uncordon <node-name>"
},

{
question: " Quel composant Kubernetes gère les règles d’équilibrage de charge ?",
options: [
"a) kube-scheduler",
"b) kube-proxy",
"c) kubelet"],
answer: "b) kube-proxy"
},

{
question: " En quoi consiste un cluster role dans Kubernetes ?",
options: [
"a) Une configuration de DNS",
"b) Une restriction d’accès",
"c) Une règle d'autorisation pour plusieurs espaces de noms"],
answer: "c) Une règle d'autorisation pour plusieurs espaces de noms"
},

{
question: " Où sont stockées les données des applications de votre cluster ?",
options: [
"a) Dans kubelet",
"b) Dans kube-apiserver",
"c) Dans etcd"],
answer: "c) Dans etcd"
},

{
question: " Comment afficher l'historique de déploiement pour vérifier les modifications d'un cluster ?",
options: [
"a) kubectl deployment history",
"b) kubectl rollout history",
"c) kubectl cluster-history"],
answer: "b) kubectl rollout history"
},

{
question: " Quelle commande restaure un cluster après un incident ?",
options: [
"a) kubectl restore cluster",
"b) etcdctl snapshot restore",
"c) kubectl backup cluster"],
answer: "b) etcdctl snapshot restore"
},
]
