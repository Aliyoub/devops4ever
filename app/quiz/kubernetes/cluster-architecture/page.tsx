"use client";

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../../../store/store";
import Quizpage from "../../quizpage/quizpage";
// import { questions } from "./questionsClusterArchitecture";

const Kubernetes_ClusterArchitecture: React.FC = () => {
  const [quizQuestions, setQuizQuestions] = useState<[]>([]);

  useEffect(() => {
    fetch("/api/quiz/cluster-architecture")
      .then((response) => response.json())
      .then((data) => {
        setQuizQuestions(data);
      });
  }, []);

  // useEffect(() => {
  //   fetch("/api/quiz/cluster-architecture", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       question_id: 1,
  //       userAnswer: "c) kube-controller-manager",
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log("apidata!!!", data));
  // }, []);

  const parent = useSelector((state: RootState) => state.parent.value);
  const child = useSelector((state: RootState) => state.child.value);
  const grandChild = useSelector((state: RootState) => state.grandChild.value);

  //   KUBERNETES Cluster Architecture
  if (
    parent === "Kubernetes" &&
    child === "Cluster Architecture" &&
    grandChild === "Quiz"
  )
    return <Quizpage quizQuestions={quizQuestions} />;
  else if (
    parent === "Kubernetes" &&
    child === "Cluster Architecture" &&
    grandChild === "Lecture"
  )
    return (
      <div
        style={{
          width: "100%", // Occupe toute la largeur disponible
          height: "500px", // Définit une hauteur fixe pour activer le scroll
          overflowY: "auto", // Active le défilement vertical
          overflowX: "auto", // Active le défilement horizontal
          border: "1px solid #ddd", // Ajoute une bordure pour mieux visualiser
          padding: "20px", // Ajoute un espacement interne
          borderRadius: "5px", // Coins arrondis pour un effet moderne
          backgroundColor: "#f9f9f9", // Couleur de fond claire pour plus de lisibilité
          paddingBottom: "250px",
        }}
      >
        <div>
          <section>
            <h1>Architecture du cluster Kubernetes : Concepts clés</h1>

            <article id="kube-controller-manager">
              <h2>
                1. kube-controller-manager : Maintenir l&apos;état désiré du
                cluster
              </h2>
              <p>
                Le <strong>kube-controller-manager</strong> est un composant clé
                du plan de contrôle (control plane) de Kubernetes. Il exécute
                des boucles de contrôle pour surveiller l&apos;état des objets
                dans le cluster et agir pour aligner cet état sur celui désiré,
                défini dans les fichiers de configuration.
              </p>
              <p>Principales fonctions :</p>
              <ul>
                <li>
                  Gestion des <strong>replicas</strong> pour s&apos;assurer que
                  le bon nombre de pods sont en cours d&apos;exécution.
                </li>
                <li>
                  Supervision des nœuds avec le <em>Node Controller</em>{" "}
                  (détection de pannes).
                </li>
                <li>Administration des volumes et des tokens de service.</li>
              </ul>
            </article>

            <article id="etcd">
              <h2>2. etcd : Stockage de l&apos;état du cluster</h2>
              <p>
                <strong>etcd</strong> est un magasin clé-valeur distribué
                utilisé par Kubernetes pour stocker l&apos;état de configuration
                et les données critiques du cluster. Il garantit la cohérence et
                la disponibilité des données grâce à un mécanisme de consensus.
              </p>
              <p>Principales caractéristiques :</p>
              <ul>
                <li>
                  Stockage des informations sur les pods, services et nœuds.
                </li>
                <li>
                  Support de la haute disponibilité grâce à la réplication
                  synchrone.
                </li>
                <li>
                  Sécurisé avec des certificats TLS pour les communications.
                </li>
              </ul>
            </article>

            <article id="kube-scheduler">
              <h2>3. kube-scheduler : Planification des pods sur les nœuds</h2>
              <p>
                Le <strong>kube-scheduler</strong> est chargé d&apos;attribuer
                des pods à des nœuds en fonction de critères tels que la
                disponibilité des ressources, les contraintes d&apos;affinité et
                les politiques de tolérance.
              </p>
              <p>Fonctionnement :</p>
              <ul>
                <li>Identifie les nœuds disponibles.</li>
                <li>Évalue les contraintes et sélectionne le nœud optimal.</li>
                <li>Attribue le pod pour exécution.</li>
              </ul>
            </article>

            <article id="kubelet">
              <h2>4. kubelet : Gestion des workloads sur les nœuds</h2>
              <p>
                Le <strong>kubelet</strong> est un agent qui fonctionne sur
                chaque nœud de Kubernetes. Il veille à ce que les conteneurs
                soient opérationnels selon les spécifications des pods.
              </p>
              <p>Responsabilités :</p>
              <ul>
                <li>Surveille l&apos;état des pods et des conteneurs.</li>
                <li>
                  Gère les redémarrages des conteneurs en cas de défaillance.
                </li>
                <li>Fournit des métriques pour le monitoring.</li>
              </ul>
            </article>

            <article id="kube-apiserver">
              <h2>
                5. kube-apiserver : Point d&apos;entrée pour les commandes et
                l&apos;accès API
              </h2>
              <p>
                Le <strong>kube-apiserver</strong> est l&apos;interface
                principale entre les utilisateurs (via <code>kubectl</code>),
                les autres composants du plan de contrôle et les nœuds. Il
                valide et traite toutes les requêtes API.
              </p>
              <p>Fonctions clés :</p>
              <ul>
                <li>Vérification et gestion des demandes d&apos;API.</li>
                <li>
                  Communication sécurisée avec <strong>etcd</strong> via TLS.
                </li>
                <li>
                  Coordination avec les autres composants pour maintenir
                  l&apos;état désiré du cluster.
                </li>
              </ul>
            </article>

            <article id="kube-proxy">
              <h2>6. kube-proxy : Gestion du routage réseau</h2>
              <p>
                <strong>kube-proxy</strong> est un composant de niveau nœud qui
                applique des règles réseau pour permettre la communication entre
                services Kubernetes et pods. Il configure les tables IP pour
                gérer le routage et le load balancing.
              </p>
              <p>Rôles principaux :</p>
              <ul>
                <li>Implémentation des règles de routage réseau.</li>
                <li>
                  Assure la communication entre les services exposés et leurs
                  pods.
                </li>
              </ul>
            </article>

            <article id="health-monitoring">
              <h2>7. Monitoring des nœuds et pods</h2>
              <p>
                Kubernetes s&apos;appuie sur des agents comme le{" "}
                <strong>kubelet</strong> pour surveiller la santé des nœuds et
                des pods. Les politiques d&apos;éviction peuvent être appliquées
                si un nœud devient défaillant.
              </p>
              <p>Exemples :</p>
              <ul>
                <li>
                  Détection de pannes via des probes (<em>liveness</em>,{" "}
                  <em>readiness</em>).
                </li>
                <li>
                  Gestion des pods sur un nœud alternatif en cas de problème.
                </li>
              </ul>
            </article>

            <article id="network-plugin">
              <h2>8. Plugins réseau : Allocation des adresses IP</h2>
              <p>
                Les plugins réseau comme <strong>Calico</strong> ou{" "}
                <strong>Flannel</strong> gèrent la connectivité réseau entre les
                pods et les services. Ils attribuent des adresses IP uniques à
                chaque pod et appliquent des politiques réseau.
              </p>
              <p>Fonctionnalités :</p>
              <ul>
                <li>Isolation des réseaux.</li>
                <li>Attribution dynamique des adresses IP.</li>
              </ul>
            </article>

            <article id="security">
              <h2>9. Sécurisation de l&apos;API et des communications</h2>
              <p>
                La communication entre les composants du cluster est sécurisée à
                l&apos;aide de certificats TLS. Le{" "}
                <strong>kube-apiserver</strong> gère les autorisations et
                l&apos;authentification via des jetons JWT ou des politiques
                RBAC.
              </p>
            </article>

            <article id="ha-etcd">
              <h2>10. Haute disponibilité avec etcd</h2>
              <p>
                Pour garantir la résilience, <strong>etcd</strong> utilise une
                réplication synchrone entre plusieurs nœuds. Cela permet de
                maintenir la cohérence des données même en cas de panne
                d&apos;un nœud.
              </p>
            </article>
          </section>
          <section>
            <article id="iptables-kube-proxy">
              <h2>11. kube-proxy : Application des règles IPtables</h2>
              <p>
                Le <strong>kube-proxy</strong> configure dynamiquement des
                règles IPtables ou IPVS sur chaque nœud pour gérer le routage
                réseau. Cela permet le redirection du trafic entre les services
                Kubernetes et leurs pods associés.
              </p>
              <p>Principaux objectifs :</p>
              <ul>
                <li>Créer des règles de routage pour les services.</li>
                <li>Équilibrage de charge entre les pods d&apos;un service.</li>
              </ul>
            </article>

            <article id="https-kube-apiserver">
              <h2>12. kube-apiserver : Communication sécurisée avec HTTPS</h2>
              <p>
                Par défaut, le <strong>kube-apiserver</strong> utilise le
                protocole <strong>HTTPS</strong> pour toutes les communications,
                assurant ainsi un chiffrement bout en bout et une protection
                contre les attaques en transit.
              </p>
              <p>Points importants :</p>
              <ul>
                <li>
                  Certificats TLS pour l&apos;authentification et le
                  chiffrement.
                </li>
                <li>
                  Protocole obligatoire pour sécuriser les interactions avec{" "}
                  <code>kubectl</code> et les composants du cluster.
                </li>
              </ul>
            </article>

            <article id="kubelet-restart">
              <h2>13. kubelet : Supervision et redémarrage des conteneurs</h2>
              <p>
                Le <strong>kubelet</strong> garantit que les conteneurs définis
                dans les pods fonctionnent comme prévu. Si un conteneur échoue,
                il le redémarre automatiquement pour maintenir la disponibilité
                des applications.
              </p>
              <p>Rôles supplémentaires :</p>
              <ul>
                <li>
                  Gestion des probes (<em>liveness</em> et <em>readiness</em>).
                </li>
                <li>
                  Rapport de l&apos;état des pods et des nœuds au{" "}
                  <strong>kube-apiserver</strong>.
                </li>
              </ul>
            </article>

            <article id="cloud-controller-manager">
              <h2>
                14. cloud-controller-manager : Intégration avec les fournisseurs
                cloud
              </h2>
              <p>
                Le <strong>cloud-controller-manager</strong> permet à Kubernetes
                de gérer les ressources spécifiques au cloud, comme les
                équilibreurs de charge, les adresses IP externes ou les volumes
                de stockage.
              </p>
              <p>Caractéristiques principales :</p>
              <ul>
                <li>Création et gestion des ressources cloud.</li>
                <li>
                  Déplacement des tâches cloud hors du noyau Kubernetes pour une
                  modularité accrue.
                </li>
              </ul>
            </article>

            <article id="node-failure-detection">
              <h2>
                15. Détection des pannes de nœuds par le kube-controller-manager
              </h2>
              <p>
                Le <strong>kube-controller-manager</strong> inclut un{" "}
                <em>Node Controller</em> qui surveille la disponibilité des
                nœuds. En cas de panne, il agit pour rééquilibrer les workloads.
              </p>
              <p>Actions effectuées :</p>
              <ul>
                <li>
                  Marquer le nœud comme <code>NotReady</code>.
                </li>
                <li>Réassigner les pods à d&apos;autres nœuds sains.</li>
              </ul>
            </article>

            <article id="secure-port-kube-apiserver">
              <h2>16. --secure-port dans le kube-apiserver</h2>
              <p>
                Le drapeau <code>--secure-port</code> spécifie le port sécurisé
                sur lequel le <strong>kube-apiserver</strong> écoute pour les
                requêtes HTTPS. Par défaut, ce port est généralement{" "}
                <code>6443</code>.
              </p>
              <p>Raisons de son importance :</p>
              <ul>
                <li>Sécurisation des communications API.</li>
                <li>Authentification des requêtes avec TLS.</li>
              </ul>
            </article>

            <article id="network-ip-allocation">
              <h2>17. Plugins réseau : Attribution des adresses IP aux pods</h2>
              <p>
                Dans Kubernetes, un plugin réseau (par exemple,{" "}
                <strong>Calico</strong> ou <strong>Weave</strong>) est
                responsable de l&apos;attribution d&apos;adresses IP uniques à
                chaque pod, garantissant ainsi une connectivité réseau au sein
                du cluster.
              </p>
              <p>Caractéristiques supplémentaires :</p>
              <ul>
                <li>
                  Implémentation du modèle <em>flat network</em>.
                </li>
                <li>Application des politiques réseau.</li>
              </ul>
            </article>

            <article id="kubelet-image-policy">
              <h2>
                18. --image-policy : Sécurisation des images dans le kubelet
              </h2>
              <p>
                Le drapeau <code>--image-policy</code> impose que seules les
                images signées et vérifiées soient tirées du registre. Cela
                renforce la sécurité des workloads Kubernetes en évitant les
                images non approuvées.
              </p>
              <p>Avantages :</p>
              <ul>
                <li>Prévention des vulnérabilités logicielles.</li>
                <li>Conformité avec les politiques de sécurité.</li>
              </ul>
            </article>

            <article id="leader-election">
              <h2>
                19. Mécanisme de &quot;leader election&quot; dans Kubernetes
              </h2>
              <p>
                La <strong>leader election</strong> est utilisée par certains
                composants du plan de contrôle (comme le{" "}
                <strong>kube-controller-manager</strong>) pour assurer la
                redondance et éviter les conflits dans la gestion des tâches.
              </p>
              <p>Processus :</p>
              <ul>
                <li>Un composant actif est désigné comme leader.</li>
                <li>En cas de défaillance, un nouveau leader est élu.</li>
              </ul>
            </article>

            <article id="etcd-data-consistency">
              <h2>20. Cohérence des données dans etcd</h2>
              <p>
                Dans une configuration haute disponibilité,{" "}
                <strong>etcd</strong> utilise la réplication synchrone pour
                garantir la cohérence des données entre les nœuds. Cela repose
                sur l&apos;algorithme de consensus Raft.
              </p>
              <p>Avantages :</p>
              <ul>
                <li>Aucune perte de données en cas de panne d&apos;un nœud.</li>
                <li>
                  Récupération rapide grâce à des sauvegardes et des répliques.
                </li>
              </ul>
            </article>
          </section>
          <section>
            <article id="etcd-authentication">
              <h2>21. Authentification de etcd par le kube-apiserver</h2>
              <p>
                Pour accéder à <strong>etcd</strong>, le{" "}
                <strong>kube-apiserver</strong> utilise des certificats TLS. Ce
                mécanisme garantit que seules les communications authentifiées
                et sécurisées sont permises entre les composants Kubernetes et
                etcd.
              </p>
              <p>Caractéristiques :</p>
              <ul>
                <li>Protection des données sensibles stockées dans etcd.</li>
                <li>Prévention des accès non autorisés.</li>
              </ul>
            </article>

            <article id="pod-scheduling-policies">
              <h2>22. Décision du placement des pods par le kube-scheduler</h2>
              <p>
                Le <strong>kube-scheduler</strong> choisit un nœud pour exécuter
                chaque pod en tenant compte des{" "}
                <strong>ressources disponibles</strong> et des{" "}
                <strong>politiques définies</strong>, telles que les taints, les
                tolerations et les affinities.
              </p>
              <p>Facteurs pris en compte :</p>
              <ul>
                <li>
                  Disponibilité de la mémoire, du CPU et des autres ressources.
                </li>
                <li>
                  Contraintes spécifiques définies dans le fichier de
                  spécifications du pod.
                </li>
              </ul>
            </article>

            <article id="metrics-server">
              <h2>
                23. metrics-server : Agrégation des métriques pour la
                surveillance
              </h2>
              <p>
                Le <strong>metrics-server</strong> est un composant clé pour la
                surveillance des performances dans Kubernetes. Il collecte et
                agrège les métriques des <strong>kubelets</strong>, telles que
                l&apos;utilisation du CPU et de la mémoire des pods, et les
                expose via l&apos;API.
              </p>
              <p>Utilisations courantes :</p>
              <ul>
                <li>Équilibrage de charge et autoscaling horizontal (HPA).</li>
                <li>Diagnostic des performances des workloads.</li>
              </ul>
            </article>

            <article id="custom-config-kube-scheduler">
              <h2>
                24. Utilisation d&apos;un fichier de configuration personnalisé
                pour le kube-scheduler
              </h2>
              <p>
                Le <strong>kube-scheduler</strong> peut être configuré à
                l&apos;aide d&apos;un fichier de configuration spécifique, passé
                en paramètre avec <code>--config</code>. Cela permet une
                personnalisation avancée de ses comportements.
              </p>
              <p>Exemple de commande :</p>
              <code>kube-scheduler --config=scheduler-config.yaml</code>
              <p>Paramètres couramment personnalisés :</p>
              <ul>
                <li>Stratégies de priorité pour les pods.</li>
                <li>Gestion des ressources et des contraintes.</li>
              </ul>
            </article>

            <article id="leader-election-control-plane">
              <h2>
                25. Redondance du plan de contrôle grâce à la leader election
              </h2>
              <p>
                La <strong>leader election</strong> assure la redondance et la
                haute disponibilité des composants critiques du plan de
                contrôle, comme le <strong>kube-controller-manager</strong>.
                Elle garantit qu&apos;un seul composant est actif à la fois pour
                éviter les conflits.
              </p>
              <p>Fonctionnement :</p>
              <ul>
                <li>
                  Un mécanisme basé sur <strong>etcd</strong> pour désigner un
                  leader.
                </li>
                <li>
                  Surveillance continue de l&apos;état du leader et réélection
                  automatique en cas de défaillance.
                </li>
              </ul>
            </article>
          </section>
        </div>
        <style jsx>{`
          pre {
            background-color: #f4f4f4;
            padding: 10px;
            border-radius: 5px;
            overflow-x: auto;
            white-space: pre-wrap; /* Assures the YAML indentation is respected */
          }
          h1 {
            color: #fca4f0; /* Bleu pour les sous-titres */
            margin-top: 20px;
            font-size: 1.2rem;
            font-weight: bolder;
          }
          h2 {
            color: #0073e6; /* Bleu pour les sous-titres */
            margin-top: 20px;
          }
          h3 {
            color: #005bb5; /* Bleu légèrement plus sombre pour les sous-sections */
            margin-top: 15px;
          }
          p,
          ul {
            margin-bottom: 15px; /* Espacement entre les paragraphes et listes */
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
          }
          table th,
          table td {
            border: 1px solid #ddd;
            padding: 10px;
            text-align: left;
          }
          table th {
            background-color: #f2f2f2;
          }
        `}</style>
      </div>
    );
  // parent
};

export default Kubernetes_ClusterArchitecture;
