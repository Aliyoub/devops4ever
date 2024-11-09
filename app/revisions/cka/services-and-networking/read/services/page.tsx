import React from 'react';
import  '../../../style.css'

interface Service {
  title: string;
  utility: string;
  functionality: string;
}

const services: Service[] = [
  {
    title: 'ClusterIP',
    utility: "Fournit un accès interne dans le cluster pour permettre aux applications de communiquer entre elles sans exposition externe.",
    functionality:
      "Ce Service assigne une adresse IP unique, accessible uniquement depuis le cluster, pour regrouper les Pods ciblés. Idéal pour les communications internes, le type ClusterIP est la configuration par défaut.",
  },
  {
    title: 'NodePort',
    utility: "Permet d'exposer un Service au monde extérieur via un port statique sur chaque nœud du cluster.",
    functionality:
      "En attribuant un port spécifique sur chaque nœud, le type NodePort permet l'accès depuis l'extérieur en utilisant l'IP du nœud et le port assigné.",
  },
  {
    title: 'LoadBalancer',
    utility: "Fournit une solution d'accès externe avec équilibrage de charge, adaptée pour une haute disponibilité.",
    functionality:
      "Le type LoadBalancer crée un équilibre de charge externe pour distribuer le trafic entrant entre les Pods d'un Service. Sur des plateformes cloud, Kubernetes utilise les solutions d'équilibrage de charge natives du fournisseur.",
  },
  {
    title: 'ExternalName',
    utility: "Utilisé pour mapper un Service Kubernetes à un domaine externe.",
    functionality:
      "En configurant le type ExternalName, un Service redirige les requêtes DNS vers un nom d'hôte externe, au lieu de pointer vers des Pods internes. Cela permet d'intégrer des services externes dans un cluster Kubernetes.",
  },
  {
    title: 'Headless Service',
    utility: "Fournit une liste des adresses IP des Pods associés sans attribuer d'IP ClusterIP, pour faciliter la découverte de services.",
    functionality:
      "Lorsqu'aucune adresse IP n'est allouée (ClusterIP défini à None), Kubernetes gère les DNS pour renvoyer une liste des adresses IP de tous les Pods correspondants.",
  },
  {
    title: 'Service Selector',
    utility: "Sélectionne dynamiquement les Pods cibles pour le Service à l'aide de labels.",
    functionality:
      "Un Service utilise des sélecteurs pour identifier les Pods correspondant à certains labels. Cela permet aux applications de cibler des groupes de Pods spécifiques.",
  },
  {
    title: 'Service Without Selector',
    utility: "Permet de configurer manuellement les adresses IP et les points de terminaison d'un Service, sans utiliser de sélecteurs.",
    functionality:
      "En omettant les sélecteurs, on peut associer un Service à des adresses IP spécifiques ou des services externes en configurant directement les points de terminaison.",
  },
];

const Page: React.FC = () => (
  <div className='container'>
    <h1>Points Essentiels des Services Kubernetes</h1>
    <p>
      Les Services Kubernetes offrent des moyens de communication et de mise en réseau entre les Pods et d’autres ressources internes et externes.
      Voici un tour d&apos;horizon des différents types de Services et leurs fonctionnalités.
    </p>

    {services.map((service, index) => (
      <div key={index}>
        <h2>{service.title}</h2>
        <p>
          <strong>Utilité :</strong> {service.utility}
        </p>
        <p>
          <strong>Fonctionnement :</strong> {service.functionality}
        </p>
      </div>
    ))}

    <p>
      Ces différents types de Services permettent à Kubernetes d&apos;offrir des solutions réseau variées pour répondre aux besoins internes et externes du cluster, garantissant une communication fluide et flexible entre les Pods et d&apos;autres ressources.
    </p>
  </div>
);

export default Page;
