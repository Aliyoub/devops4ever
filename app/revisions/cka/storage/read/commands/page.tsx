import React from 'react';
import  '../../../style.css'

// Interface pour structurer chaque commande Kubernetes de stockage
interface CommandeKubernetes {
  nom: string;
  utilisation: string;
  description: string;
  details: string;
}

// Liste des commandes Kubernetes concernant le stockage
const commandesKubernetesStorage: CommandeKubernetes[] = [
  {
    nom: "kubectl get pv",
    utilisation: "kubectl get pv",
    description: "Liste les PersistentVolumes (PV) dans le cluster.",
    details: "Affiche des informations sur chaque volume persistant (PV), telles que sa capacité, son statut, son mode d'accès, son type et ses informations de stockage. Utile pour vérifier l'espace de stockage disponible."
  },
  {
    nom: "kubectl describe pv",
    utilisation: "kubectl describe pv <nom-du-pv>",
    description: "Affiche des informations détaillées sur un volume persistant spécifique.",
    details: "Donne une vue approfondie du PV, incluant sa source de stockage, sa capacité et les paramètres de réclamation. Utilisé pour diagnostiquer des problèmes de stockage ou vérifier la configuration d'un volume persistant."
  },
  {
    nom: "kubectl get pvc",
    utilisation: "kubectl get pvc",
    description: "Liste les PersistentVolumeClaims (PVC) dans l'espace de noms actuel.",
    details: "Affiche les réclamations de volumes persistants, qui sont des demandes de stockage pour les pods. Indique les informations de capacité demandée et de volume associé, et permet de vérifier si les PVC ont bien lié un PV."
  },
  {
    nom: "kubectl describe pvc",
    utilisation: "kubectl describe pvc <nom-du-pvc>",
    description: "Affiche des informations détaillées sur une réclamation de volume persistant spécifique.",
    details: "Fournit des détails sur l'état de la demande, y compris le volume lié et les conditions actuelles de la réclamation, telles que sa capacité, le mode d'accès et les événements associés."
  },
  {
    nom: "kubectl apply -f",
    utilisation: "kubectl apply -f <fichier-pv.yaml>",
    description: "Crée ou met à jour un PersistentVolume ou PersistentVolumeClaim via un fichier de configuration.",
    details: "Utilisé pour définir ou modifier des ressources de stockage de manière déclarative. Les fichiers YAML peuvent contenir des spécifications pour différents types de stockage, permettant de gérer les besoins de stockage des applications."
  },
  {
    nom: "kubectl delete pv",
    utilisation: "kubectl delete pv <nom-du-pv>",
    description: "Supprime un PersistentVolume du cluster.",
    details: "Libère un volume persistant, permettant de récupérer la capacité de stockage. Avant de supprimer, il est important de s'assurer que le volume n'est plus requis par aucune application."
  },
  {
    nom: "kubectl delete pvc",
    utilisation: "kubectl delete pvc <nom-du-pvc>",
    description: "Supprime une réclamation de volume persistant.",
    details: "Une fois supprimée, la liaison avec le volume persistant est libérée, permettant potentiellement à d'autres PVC de le réclamer. Attention à bien sauvegarder les données, si nécessaire, avant de supprimer un PVC."
  },
  {
    nom: "kubectl edit pvc",
    utilisation: "kubectl edit pvc <nom-du-pvc>",
    description: "Modifie la configuration d'un PVC existant.",
    details: "Permet d'ajuster les paramètres d'une demande de stockage existante. Certains paramètres, tels que le mode d'accès ou la taille, peuvent ne pas être modifiables selon les règles du cluster."
  },
  {
    nom: "kubectl patch pvc",
    utilisation: "kubectl patch pvc <nom-du-pvc> -p '{\"spec\": { ... }}'",
    description: "Applique une mise à jour partielle à un PVC.",
    details: "Utile pour apporter des modifications ciblées aux spécifications d'un PVC, comme l'ajustement des annotations ou la mise à jour d'autres métadonnées sans avoir à éditer l'intégralité du PVC."
  },
  {
    nom: "kubectl get sc",
    utilisation: "kubectl get sc",
    description: "Liste les StorageClasses dans le cluster.",
    details: "Les StorageClasses définissent les types de stockage disponibles pour les PersistentVolumes. Elles indiquent les paramètres de provisionnement et les types de stockage, facilitant la gestion dynamique des PV."
  },
  {
    nom: "kubectl describe sc",
    utilisation: "kubectl describe sc <nom-du-sc>",
    description: "Affiche des informations détaillées sur une StorageClass spécifique.",
    details: "Donne des détails sur les paramètres de provisionnement, les politiques de rétention et le type de stockage. Utile pour comprendre comment les volumes sont créés et gérés automatiquement dans le cluster."
  },
  {
    nom: "kubectl delete sc",
    utilisation: "kubectl delete sc <nom-du-sc>",
    description: "Supprime une StorageClass du cluster.",
    details: "Une fois supprimée, les nouvelles réclamations de stockage ne peuvent plus utiliser cette classe. À noter que cela n'affecte pas les volumes ou réclamations déjà provisionnés."
  }
];

// Composant React pour afficher la liste des commandes Kubernetes de stockage
const CommandesKubernetesStorage: React.FC = () => {
  return (
    <div className='container' style={{ fontFamily: 'Arial, sans-serif', margin: '0 auto', maxWidth: '800px', padding: '20px' }}>
      <h1>Commandes Kubernetes : Stockage</h1>
      <p>Les commandes suivantes permettent de gérer les options de stockage persistant dans Kubernetes.</p>

      {commandesKubernetesStorage.map((commande, index) => (
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

export default CommandesKubernetesStorage;
