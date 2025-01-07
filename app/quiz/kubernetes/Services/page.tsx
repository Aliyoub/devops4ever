"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../../../store/store";
import QuizPage from "../../quizPage/page";
import { questions } from "./questionsServices";

const Kubernetes_Services: React.FC = () => {
  const parent = useSelector((state: RootState) => state.parent.value);
  const child = useSelector((state: RootState) => state.child.value);
  const grandChild = useSelector((state: RootState) => state.grandChild.value);

  //   KUBERNETES SERVICES
  if (parent === "Kubernetes" && child === "Services" && grandChild === "Quiz")
    return <QuizPage quizQuestions={questions} />;
  else if (
    parent === "Kubernetes" &&
    child === "Services" &&
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
            <h2>Introduction à Kubernetes</h2>
            <p>
              Kubernetes est une plateforme d&apos;orchestration de conteneurs
              conçue pour automatiser le déploiement, la mise à l&apos;échelle
              et la gestion des applications conteneurisées. L&apos;un des
              composants essentiels de Kubernetes est le{" "}
              <strong>Service</strong>, une abstraction réseau permettant de
              connecter des pods entre eux ou avec des applications externes.
            </p>
            <p>Les services Kubernetes répondent à plusieurs besoins :</p>
            <ul>
              <li>
                Offrir une adresse réseau stable et permanente, même lorsque les
                pods changent ou redémarrent.
              </li>
              <li>
                Distribuer le trafic entre plusieurs pods (équilibrage de
                charge).
              </li>
              <li>Permettre la découverte automatique de services.</li>
            </ul>
          </section>

          <section>
            <h2>Les types de services Kubernetes</h2>
            <p>
              Kubernetes propose quatre types principaux de services pour
              répondre à différents cas d&apos;utilisation :
            </p>

            <table>
              <thead>
                <tr>
                  <th>Type de Service</th>
                  <th>Description</th>
                  <th>Portée</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>ClusterIP</strong>
                  </td>
                  <td>
                    Expose le service uniquement à l&apos;intérieur du cluster
                    Kubernetes. Par défaut.
                  </td>
                  <td>Interne au cluster</td>
                </tr>
                <tr>
                  <td>
                    <strong>NodePort</strong>
                  </td>
                  <td>
                    Expose le service sur un port spécifique de chaque nœud du
                    cluster.
                  </td>
                  <td>Accès externe limité</td>
                </tr>
                <tr>
                  <td>
                    <strong>LoadBalancer</strong>
                  </td>
                  <td>
                    Permet d&apos;exposer un service via un équilibre de charge
                    externe fourni par le cloud (AWS, GCP, Azure).
                  </td>
                  <td>Public</td>
                </tr>
                <tr>
                  <td>
                    <strong>ExternalName</strong>
                  </td>
                  <td>
                    Mappe un nom DNS interne Kubernetes vers un nom DNS externe.
                  </td>
                  <td>DNS uniquement</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section>
            <h2>Structure d’un Service</h2>
            <p>
              Un service est défini à l&apos;aide d&apos;un manifeste YAML.
              Voici un exemple de base :
            </p>
            <pre>
              <code>
                apiVersion: v1 kind: Service metadata: name: mon-service spec:
                selector: app: mon-application ports: - protocol: TCP port: 80
                targetPort: 8080 type: ClusterIP
              </code>
            </pre>
            <p>Explication des champs :</p>
            <ul>
              <li>
                <strong>selector</strong> : Permet de cibler les pods ayant des
                labels spécifiques (ici, <code>app: mon-application</code>).
              </li>
              <li>
                <strong>ports</strong> : Décrit les ports exposés par le service
                :
                <ul>
                  <li>
                    <code>port</code> : Port utilisé par les clients.
                  </li>
                  <li>
                    <code>targetPort</code> : Port interne du pod.
                  </li>
                </ul>
              </li>
              <li>
                <strong>type</strong> : Définit le mode d&apos;exposition du
                service (ClusterIP, NodePort, etc.).
              </li>
            </ul>
          </section>

          <section>
            <h2>Notions avancées</h2>
            <h3>1. `targetPort`</h3>
            <p>
              Le champ <code>targetPort</code> permet de rediriger le trafic
              reçu par le service vers un port interne au conteneur d&apos;un
              pod. Ce port est indépendant du port externe (champ{" "}
              <code>port</code>) utilisé par les clients.
            </p>
            <pre>
              <code>
                apiVersion: v1 kind: Service metadata: name: service-targetport
                spec: selector: app: my-app ports: - port: 80 targetPort: 8080
                type: ClusterIP
              </code>
            </pre>

            <h3>2. `sessionAffinity`</h3>
            <p>
              Par défaut, Kubernetes distribue les requêtes de manière
              équilibrée (round-robin) entre les pods. Si une application
              nécessite de maintenir une session utilisateur constante vers le
              même pod, vous pouvez utiliser le champ{" "}
              <code>sessionAffinity</code>.
            </p>
            <p>Valeurs possibles :</p>
            <ul>
              <li>
                <strong>None</strong> (par défaut) : Pas d’affinité de session.
              </li>
              <li>
                <strong>ClientIP</strong> : Redirige toujours les requêtes
                d&apos;un même client (basé sur son IP) vers le même pod.
              </li>
            </ul>
            <pre>
              <code>
                apiVersion: v1 kind: Service metadata: name:
                service-sessionaffinity spec: selector: app: web ports: -
                protocol: TCP port: 80 targetPort: 8080 sessionAffinity:
                ClientIP
              </code>
            </pre>
          </section>

          <section>
            <h2>Vérification et débogage des services</h2>
            <ul>
              <li>
                <strong>Lister tous les services :</strong>{" "}
                <code>kubectl get services</code>
              </li>
              <li>
                <strong>Inspecter un service :</strong>{" "}
                <code>kubectl describe service &lt;nom-du-service&gt;</code>
              </li>
              <li>
                <strong>Tester un service interne :</strong>
                <code>
                  curl
                  http://&lt;nom-service&gt;.&lt;namespace&gt;.svc.cluster.local
                </code>
              </li>
            </ul>
          </section>

          <section>
            <h2>Résumé des notions essentielles</h2>
            <table>
              <thead>
                <tr>
                  <th>Concept</th>
                  <th>Description</th>
                  <th>Usage</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>targetPort</strong>
                  </td>
                  <td>Port interne au pod pour recevoir le trafic.</td>
                  <td>Mapper les ports externes et internes.</td>
                </tr>
                <tr>
                  <td>
                    <strong>sessionAffinity</strong>
                  </td>
                  <td>
                    Maintenir une session utilisateur constante vers un pod.
                  </td>
                  <td>Applications nécessitant une session persistante.</td>
                </tr>
                <tr>
                  <td>
                    <strong>ClusterIP</strong>
                  </td>
                  <td>Service accessible uniquement dans le cluster.</td>
                  <td>Communication interne.</td>
                </tr>
                <tr>
                  <td>
                    <strong>NodePort</strong>
                  </td>
                  <td>Exposition externe via les nœuds Kubernetes.</td>
                  <td>Débogage et tests rapides.</td>
                </tr>
                <tr>
                  <td>
                    <strong>LoadBalancer</strong>
                  </td>
                  <td>Exposition publique via un équilibreur de charge.</td>
                  <td>Services externes dans un cloud public.</td>
                </tr>
              </tbody>
            </table>
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

export default Kubernetes_Services;
