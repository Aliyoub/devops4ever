import React from 'react';
import  '../../../style.css'

interface NetworkConcept {
  title: string;
  utility: string;
  functionality: string;
}

const networkConcepts: NetworkConcept[] = [
  {
    title: 'Cluster Networking',
    utility: "Permet aux Pods de communiquer entre eux au sein du cluster sans restriction ni NAT.",
    functionality:
      "Kubernetes assigne une IP unique à chaque Pod. Le cluster doit garantir que chaque Pod peut atteindre tous les autres Pods via cette IP, sans NAT. Les solutions de réseau telles que Calico, Flannel, et Weave Net assurent cette connectivité entre les Pods à travers des sous-réseaux virtuels.",
  },
  {
    title: 'Pod Networking',
    utility: "Facilite la communication entre les conteneurs d'un même Pod et entre différents Pods.",
    functionality:
      "Dans un Pod, les conteneurs partagent l'adresse IP du Pod et utilisent des ports distincts. Cela simplifie l'accès réseau entre les conteneurs d'un Pod et assure que chaque Pod est accessible individuellement à partir d'autres Pods ou services.",
  },
  {
    title: 'Service Networking',
    utility: "Offre une IP stable pour accéder aux Pods, même si ces derniers changent d'adresse IP.",
    functionality:
      "Un Service expose une IP stable au sein du cluster, nommée ClusterIP. En utilisant un Service, les Pods n'ont pas besoin de connaître les IP spécifiques d'autres Pods, mais peuvent les atteindre via l'IP du Service. Kubernetes gère les connexions grâce au load balancing interne pour rediriger le trafic vers les Pods actifs.",
  },
  {
    title: 'DNS dans Kubernetes',
    utility: "Automatise la résolution des noms dans le cluster pour faciliter les communications internes.",
    functionality:
      "Kubernetes configure un serveur DNS pour le cluster, ce qui permet aux applications de se connecter aux services par leur nom. Par exemple, un Service nommé 'database' dans un namespace 'production' est accessible sous le nom 'database.production.svc.cluster.local'.",
  },
  {
    title: 'Ingress',
    utility: "Contrôle l'accès HTTP/HTTPS externe aux services Kubernetes, permettant de définir des règles de routage pour les requêtes entrantes.",
    functionality:
      "Les Ingress sont des règles qui définissent comment le trafic externe doit être dirigé vers les services internes. Elles incluent des hôtes, des chemins et des règles HTTPS, permettant de gérer le routage, le load balancing et la terminaison SSL en un point unique.",
  },
  {
    title: 'Egress',
    utility: "Contrôle le trafic sortant vers l'extérieur du cluster, permettant d'appliquer des politiques de sécurité.",
    functionality:
      "Les règles Egress spécifient les connexions externes autorisées depuis les Pods. En limitant les adresses IP ou les ports accessibles, Kubernetes peut mieux contrôler et sécuriser le trafic sortant, souvent dans le cadre de la conformité des politiques de sécurité.",
  },
  {
    title: 'Network Policies',
    utility: "Implémente des règles de sécurité réseau pour restreindre la connectivité entre Pods.",
    functionality:
      "Les Network Policies permettent de définir quelles connexions sont autorisées entre Pods en fonction de labels et de ports. Par exemple, elles peuvent restreindre l'accès à certains Pods sensibles, assurant qu’ils ne reçoivent du trafic que de Pods autorisés.",
  },
  {
    title: 'Load Balancing (Service Load Balancer)',
    utility: "Équilibre le trafic pour garantir une disponibilité élevée et une meilleure répartition de la charge sur les Pods.",
    functionality:
      "Kubernetes gère automatiquement l'équilibrage de charge pour les services de type ClusterIP et NodePort. En environnement cloud, le Service LoadBalancer crée un point d'entrée externe qui répartit le trafic sur les Pods du service, optimisant la disponibilité.",
  },
  {
    title: 'EndpointSlices',
    utility: "Améliore la scalabilité des Services en gérant efficacement les endpoints des Pods.",
    functionality:
      "EndpointSlices subdivisent les endpoints des services en petites portions gérables, permettant un équilibrage de charge et une découverte de service plus rapide pour les clusters contenant un grand nombre de Pods.",
  },
  {
    title: 'IPAM (IP Address Management)',
    utility: "Assure l'allocation et la gestion efficaces des adresses IP dans le cluster.",
    functionality:
      "Kubernetes alloue des plages IP aux Pods via une solution IPAM pour éviter les conflits. Les plugins CNI gèrent cette allocation, en fonction des stratégies de réseau configurées (Calico, Flannel, etc.).",
  },
  {
    title: 'CNI (Container Network Interface)',
    utility: "Fournit une interface standardisée pour la mise en réseau des conteneurs dans Kubernetes.",
    functionality:
      "Les plugins CNI comme Calico, Weave et Flannel configurent le réseau des Pods, définissent leur adressage IP et facilitent leur connectivité. Kubernetes s'appuie sur ces plugins pour une gestion standardisée du réseau dans le cluster.",
  },
];

const Page: React.FC = () => (
  <div className='container'>
    <h1>Essentiels du Networking dans Kubernetes</h1>
    <p>
      Kubernetes utilise un ensemble de concepts et de composants pour fournir un réseau stable, flexible et sécurisé au sein des clusters. Voici les points essentiels pour une compréhension approfondie.
    </p>

    {networkConcepts.map((concept, index) => (
      <div key={index}>
        <h2>{concept.title}</h2>
        <p>
          <strong>Utilité :</strong> {concept.utility}
        </p>
        <p>
          <strong>Fonctionnement :</strong> {concept.functionality}
        </p>
      </div>
    ))}

    <p>
      Ces points essentiels permettent à Kubernetes de fournir un réseau complet qui facilite les communications internes et externes, garantit une sécurité optimale et offre une haute disponibilité pour les applications déployées.
    </p>
  </div>
);

export default Page;
