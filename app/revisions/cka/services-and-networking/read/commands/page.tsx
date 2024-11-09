import React from 'react';
import  '../../../style.css'

// Interface pour définir la structure de chaque commande Kubernetes
interface CommandeKubernetes {
  nom: string;
  utilisation: string;
  description: string;
  details: string;
}

// Liste des commandes Kubernetes concernant les Services et Networking
const commandesServiceEtNetworking: CommandeKubernetes[] = [
  {
    nom: "kubectl expose",
    utilisation: "kubectl expose deployment <nom-du-déploiement> --type=<type> --port=<port>",
    description: "Expose un déploiement ou un pod en tant que service.",
    details: "Crée un objet Service pour un déploiement ou un pod spécifique, permettant l'accès au sein ou à l'extérieur du cluster. Le type du service peut être `ClusterIP`, `NodePort` ou `LoadBalancer`."
  },
  {
    nom: "kubectl get svc",
    utilisation: "kubectl get svc [nom-du-service]",
    description: "Liste les services dans l'espace de noms actuel ou un service spécifique.",
    details: "Affiche des informations sur chaque Service, comme le type, l'IP de cluster, l'IP externe, les ports et les cibles. Utile pour vérifier la configuration des Services dans le cluster."
  },
  {
    nom: "kubectl describe svc",
    utilisation: "kubectl describe svc <nom-du-service>",
    description: "Affiche des informations détaillées sur un service spécifique.",
    details: "Donne les sélecteurs, les points de terminaison et d'autres paramètres du Service. Utile pour le dépannage et la vérification de la configuration du routage réseau d'un Service."
  },
  {
    nom: "kubectl port-forward",
    utilisation: "kubectl port-forward pod/<nom-du-pod> <port-local>:<port-distant>",
    description: "Redirige un port local vers un port d'un pod.",
    details: "Permet le test et le débogage local en accédant à un service dans un pod sans le rendre accessible de l'extérieur. Pratique pour un accès sécurisé aux applications dans le cluster depuis une machine locale."
  },
  {
    nom: "kubectl exec",
    utilisation: "kubectl exec -it <nom-du-pod> -- <commande>",
    description: "Exécute des commandes dans un conteneur d'un pod (par ex. `ping`, `curl`).",
    details: "Permet de vérifier la connectivité et de diagnostiquer des problèmes de réseau depuis l'intérieur du pod, comme la possibilité d'atteindre d'autres services ou vérifier la résolution DNS."
  },
  {
    nom: "kubectl logs",
    utilisation: "kubectl logs <nom-du-pod>",
    description: "Affiche les logs d'un pod spécifique.",
    details: "Les logs contiennent des informations sur la santé du service et les erreurs réseau, utiles pour diagnostiquer les problèmes de connectivité ou de configuration liés aux Services."
  },
  {
    nom: "kubectl apply -f",
    utilisation: "kubectl apply -f <configuration.yaml>",
    description: "Applique une configuration à partir d'un fichier pour des ressources réseau.",
    details: "Utilisé pour créer ou mettre à jour des ressources comme les Services, Ingress ou les Politiques Réseau, permettant le déploiement et la modification des configurations de réseau dans le cluster."
  },
  {
    nom: "kubectl get endpoints",
    utilisation: "kubectl get endpoints <nom-du-service>",
    description: "Liste les adresses IP des points de terminaison associés à un service.",
    details: "Montre les pods réels derrière un Service, aidant à vérifier que le routage du trafic vers le Service atteindra les pods corrects."
  },
  {
    nom: "kubectl create service clusterip",
    utilisation: "kubectl create service clusterip <nom-du-service> --tcp=<port>:<port-cible>",
    description: "Crée un service ClusterIP pour exposer une application au sein du cluster.",
    details: "ClusterIP est le type de Service par défaut, accessible uniquement depuis le cluster, couramment utilisé pour la communication entre microservices."
  },
  {
    nom: "kubectl create service nodeport",
    utilisation: "kubectl create service nodeport <nom-du-service> --tcp=<port>:<port-cible>",
    description: "Crée un service NodePort pour exposer un service sur l'IP de chaque nœud.",
    details: "Permet un accès externe à l'application sur un port spécifique à travers tous les nœuds du cluster. Souvent utilisé pour des configurations de développement et de test."
  },
  {
    nom: "kubectl create service loadbalancer",
    utilisation: "kubectl create service loadbalancer <nom-du-service> --tcp=<port>:<port-cible>",
    description: "Crée un service LoadBalancer pour exposer une application vers l'extérieur.",
    details: "Utilisé dans des environnements cloud où un équilibreur de charge est provisionné par le fournisseur, adapté aux environnements de production nécessitant un accès externe évolutif."
  },
  {
    nom: "kubectl get networkpolicy",
    utilisation: "kubectl get networkpolicy",
    description: "Liste les Politiques Réseau dans l'espace de noms actuel.",
    details: "Affiche les Politiques Réseau configurées, qui contrôlent le trafic autorisé entre les pods. Utile pour vérifier les règles d'isolation dans l'espace de noms."
  },
  {
    nom: "kubectl describe networkpolicy",
    utilisation: "kubectl describe networkpolicy <nom-de-la-politique>",
    description: "Affiche des informations détaillées sur une Politique Réseau spécifique.",
    details: "Indique les règles d'entrée et de sortie appliquées par la politique, utiles pour comprendre les restrictions de trafic entre les pods pour des raisons de sécurité."
  },
  {
    nom: "kubectl get ingress",
    utilisation: "kubectl get ingress",
    description: "Liste les ressources Ingress dans l'espace de noms actuel.",
    details: "Affiche les règles de routage configurées pour exposer des routes HTTP et HTTPS vers des services, en montrant les noms d'hôtes et les services backend associés."
  },
  {
    nom: "kubectl describe ingress",
    utilisation: "kubectl describe ingress <nom-ingress>",
    description: "Fournit des informations détaillées sur un Ingress spécifique.",
    details: "Montre les règles de routage, y compris les chemins, les configurations d'hôtes, et les services backend, permettant de vérifier le routage du trafic externe pour des applications web."
  },
];

// Composant React pour afficher la liste des commandes Kubernetes
const Page: React.FC = () => {
  return (
    <div className='container' style={{ fontFamily: 'Arial, sans-serif', margin: '0 auto', maxWidth: '800px', padding: '20px' }}>
      <h1>Commandes Kubernetes : Services et Networking</h1>
      <p>Les commandes suivantes permettent de gérer les services réseau et la configuration de connectivité dans Kubernetes.</p>

      {commandesServiceEtNetworking.map((commande, index) => (
        <div key={index} style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}>
          <h2>{commande.nom}</h2>
          <p><strong>Utilisation :</strong> <code>{commande.utilisation}</code></p>
          <p><strong>Description :</strong> {commande.description}</p>
          <p><strong>Détails :</strong> {commande.details}</p>
        </div>
      ))}
    </div>
  );
};

export default Page;
