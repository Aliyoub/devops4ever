import React from 'react';
import  '../../style.css'

interface VolumeType {
  title: string;
  utility: string;
  functionality: string;
}

const volumeTypes: VolumeType[] = [
  {
    title: 'emptyDir',
    utility: "Permet de stocker des données temporaires pour un Pod, jusqu'à sa suppression ou son redémarrage.",
    functionality:
      "Un volume `emptyDir` est créé lorsqu'un Pod démarre et est supprimé lorsque le Pod est supprimé. Ce type de volume est utile pour des données temporaires partagées entre conteneurs d'un même Pod. Il est stocké sur le nœud de travail et non persistant en cas de redémarrage du Pod sur un autre nœud.",
  },
  {
    title: 'hostPath',
    utility: "Permet d'accéder à un répertoire du système de fichiers de l'hôte depuis un Pod.",
    functionality:
      "Le volume `hostPath` donne au Pod accès à une partie du système de fichiers de l'hôte. Ce type est utilisé pour des cas spécifiques, comme les journaux du système ou les fichiers de configuration locaux, mais peut présenter des risques de sécurité en exposant le système de fichiers de l'hôte.",
  },
  {
    title: 'gcePersistentDisk',
    utility: "Offre un stockage persistant en utilisant les disques persistants de Google Cloud.",
    functionality:
      "Le volume `gcePersistentDisk` permet de monter des disques persistants Google Compute Engine dans des Pods Kubernetes. Les données sont conservées même si le Pod ou le nœud est supprimé. Utilisé pour les clusters hébergés sur Google Cloud pour un stockage fiable et persistant.",
  },
  {
    title: 'awsElasticBlockStore',
    utility: "Stockage persistant avec Amazon Elastic Block Store (EBS), utilisé dans les clusters AWS.",
    functionality:
      "Le volume `awsElasticBlockStore` permet de monter des volumes EBS dans un Pod. Ces volumes sont persistants et réutilisables entre les Pods sur différents nœuds. Ils sont idéaux pour des applications nécessitant un stockage persistant et fiable dans les environnements AWS.",
  },
  {
    title: 'nfs',
    utility: "Partage de stockage entre plusieurs Pods via un serveur NFS externe.",
    functionality:
      "Le volume `nfs` permet de monter un système de fichiers NFS externe dans un Pod, permettant à plusieurs Pods d'accéder au même espace de stockage. Utilisé pour des applications ayant besoin d'un stockage partagé, accessible à partir de différents Pods.",
  },
  {
    title: 'iscsi',
    utility: "Permet l'accès à des volumes iSCSI pour des besoins de stockage réseau à faible latence.",
    functionality:
      "Le volume `iscsi` connecte les Pods à un système de stockage iSCSI. Il est souvent utilisé dans les environnements qui nécessitent un accès à des volumes de stockage à haute performance et faible latence.",
  },
  {
    title: 'glusterfs',
    utility: "Utilisé pour un stockage distribué et évolutif avec le système de fichiers GlusterFS.",
    functionality:
      "Le volume `glusterfs` permet aux Pods d'accéder au stockage distribué de GlusterFS. C'est idéal pour les applications nécessitant un système de fichiers extensible et hautement disponible.",
  },
  {
    title: 'cephfs',
    utility: "Stockage distribué persistant avec CephFS, utile pour les grandes applications.",
    functionality:
      "Le volume `cephfs` offre un accès réseau à un système de fichiers Ceph. Ce type de volume est persistant, distribué, et peut être monté par plusieurs Pods simultanément, idéal pour les applications à grande échelle nécessitant une grande fiabilité de stockage.",
  },
  {
    title: 'persistentVolumeClaim (PVC)',
    utility: "Facilite l'abstraction du stockage persistant et sa demande dynamique.",
    functionality:
      "Un `persistentVolumeClaim` permet aux utilisateurs de Kubernetes de demander un volume persistant sans spécifier les détails du stockage. Kubernetes associe le PVC à un PersistentVolume (PV) disponible, abstrait la gestion du stockage et permet une portabilité accrue.",
  },
  {
    title: 'configMap',
    utility: "Stocke des configurations externes à l'application pour les injecter dans des conteneurs.",
    functionality:
      "Un volume `configMap` permet de monter des fichiers de configuration ou variables d'environnement dans les conteneurs sans les intégrer directement au code de l'application. Cela permet de séparer la configuration du code et facilite la gestion des configurations par environnement.",
  },
  {
    title: 'secret',
    utility: "Stocke et monte des données sensibles, comme les mots de passe ou les clés API, dans des conteneurs.",
    functionality:
      "Un volume `secret` est utilisé pour stocker des informations sensibles de manière sécurisée. Les secrets sont encodés en Base64 et peuvent être montés dans les conteneurs pour les applications nécessitant des informations sensibles comme les certificats et les mots de passe.",
  },
  {
    title: 'csi (Container Storage Interface)',
    utility: "Facilite l'extension et l'intégration de nouveaux systèmes de stockage via une interface standardisée.",
    functionality:
      "Les volumes `csi` permettent à Kubernetes de s'intégrer avec des fournisseurs de stockage externes grâce au standard CSI. Cette interface permet de gérer le provisioning dynamique de volumes pour de multiples types de stockage, offrant une flexibilité accrue pour ajouter de nouveaux fournisseurs de stockage.",
  },
  {
    title: 'projected',
    utility: "Combine plusieurs sources de données en un seul volume.",
    functionality:
      "Un volume `projected` permet de combiner `configMaps`, `secrets`, et d'autres informations en un seul volume. Cela est utile pour centraliser les sources de données et simplifier la gestion des configurations complexes pour une application.",
  },
  {
    title: 'downwardAPI',
    utility: "Expose les métadonnées du Pod aux conteneurs via un volume ou des variables d'environnement.",
    functionality:
      "Le volume `downwardAPI` permet d'accéder aux informations système comme les labels et les annotations du Pod. C'est utile pour que les conteneurs récupèrent des informations dynamiques sans les hardcoder.",
  },
  {
    title: 'azureDisk',
    utility: "Utilisé pour attacher des disques Azure aux Pods dans un environnement Azure.",
    functionality:
      "Le volume `azureDisk` monte un disque persistant Azure dans un Pod, offrant un stockage persistant pour les clusters Kubernetes sur Azure. Cela permet de stocker les données des applications de manière persistante, même si les Pods redémarrent.",
  },
  {
    title: 'azureFile',
    utility: "Permet le partage de fichiers entre les Pods en utilisant un fichier partagé SMB sur Azure.",
    functionality:
      "Le volume `azureFile` permet de monter un partage de fichiers Azure dans un Pod, donnant un accès partagé à plusieurs Pods. Utilisé dans les clusters Azure, il est idéal pour les applications nécessitant un partage de fichiers stable entre Pods.",
  },
];

const Page: React.FC = () => (
  <div className='container'>
    <h1>Types de Volumes dans Kubernetes</h1>
    <p>
      Kubernetes propose différents types de volumes pour répondre aux besoins de stockage des applications. Voici les volumes essentiels avec leur utilité et leur fonctionnement.
    </p>

    {volumeTypes.map((volume, index) => (
      <div key={index}>
        <h2>{volume.title}</h2>
        <p>
          <strong>Utilité :</strong> {volume.utility}
        </p>
        <p>
          <strong>Fonctionnement :</strong> {volume.functionality}
        </p>
      </div>
    ))}

    <p>
      Ces types de volumes permettent aux applications Kubernetes de gérer leurs données de manière flexible, persister les informations entre redémarrages, et faciliter la configuration dynamique et la sécurité des applications.
    </p>
  </div>
);

export default Page;
