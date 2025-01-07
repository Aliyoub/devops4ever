"use client";

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../../../store/store";
// import QuizPage from "../../quizPage/_quizPage";
import QuizPage from "../../quizPage/quizPage";

import { questions } from "./questionsNetworking";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { myColors } from "@/myConstants/colors/page";
const Kubernetes_Networking: React.FC = () => {
  const parent = useSelector((state: RootState) => state.parent.value);
  const child = useSelector((state: RootState) => state.child.value);
  const grandChild = useSelector((state: RootState) => state.grandChild.value);

  //   KUBERNETES Networking
  if (
    parent === "Kubernetes" &&
    child === "Networking" &&
    grandChild === "Quiz"
  )
    return <QuizPage quizQuestions={questions} />;
  else if (
    parent === "Kubernetes" &&
    child === "Networking" &&
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
          <header>
            <h1>Kubernetes Networking</h1>
          </header>

          <section>
            <h2>Introduction</h2>
            <p>
              Le networking est une des pierres angulaires de Kubernetes. Il
              permet aux conteneurs, Pods, Services et autres composants de
              communiquer entre eux et avec le monde extérieur. Ce module
              couvrira toutes les notions relatives au networking en Kubernetes,
              en respectant les contraintes du modèle de certification CKA et
              CKAD.
            </p>
          </section>

          <section>
            <h2>Principes de base du networking en Kubernetes</h2>
            <article>
              <h3>Modèle de réseau de Kubernetes</h3>
              <p>
                Le modèle de réseau de Kubernetes repose sur les principes
                suivants :
              </p>
              <ul>
                <li>
                  Chaque Pod dispose d&apos;une adresse IP unique dans le
                  cluster.
                </li>
                <li>
                  Les Pods peuvent communiquer directement entre eux sans
                  translation d&apos;adresse réseau (NAT).
                </li>
                <li>
                  Les applications n&apos;ont pas besoin de savoir si elles sont
                  déployées sur différents nœuds.
                </li>
              </ul>
            </article>

            <article>
              <h3>Network Namespaces</h3>
              <p>
                Chaque Pod est exécuté dans son propre{" "}
                <strong>network namespace</strong>. Cela signifie qu&apos;il a
                sa propre pile réseau, y compris les interfaces réseau, les
                tables de routage et les règles iptables. Kubernetes utilise un
                plugin réseau (CNI) pour gérer les interfaces réseau des Pods.
              </p>
            </article>
          </section>

          <section>
            <h2>Concepts clés</h2>
            <article>
              <h3>Services</h3>
              <p>
                Les <strong>Services</strong> en Kubernetes permettent
                d&apos;exposer un ensemble de Pods en tant que service réseau
                stable. Voici les types de Services :
              </p>
              <ul>
                <li>
                  <strong>ClusterIP:</strong> Accessible uniquement à
                  l&apos;intérieur du cluster.
                </li>
                <li>
                  <strong>NodePort:</strong> Expose le Service à
                  l&apos;extérieur en ouvrant un port sur chaque nœud du
                  cluster.
                </li>
                <li>
                  <strong>LoadBalancer:</strong> Intègre un équilibreur de
                  charge externe (souvent utilisé sur les cloud providers).
                </li>
                <li>
                  <strong>ExternalName:</strong> Mappe un nom DNS à un Service.
                </li>
              </ul>
              <p>Exemple de création d&apos;un Service :</p>
              <pre>
                <code>
                  {`apiVersion: v1
kind: Service
metadata:
  name: my-service
spec:
  selector:
    app: MyApp
  ports:
    - protocol: TCP
      port: 80
      targetPort: 9376
  type: ClusterIP`}
                </code>
              </pre>
            </article>

            <article>
              <h3>Ingress</h3>
              <p>
                Un <strong>Ingress</strong> permet d&apos;exposer des
                applications HTTP et HTTPS. Il fournit un contrôle basé sur des
                règles comme le routage par chemin ou par hôte.
              </p>
              <p>Exemple d&apos;Ingress :</p>
              <pre>
                <code>
                  {`apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: example-ingress
spec:
  rules:
    - host: example.com
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: my-service
                port:
                  number: 80`}
                </code>
              </pre>
            </article>
          </section>

          <section>
            <h2>Plugins réseau (CNI)</h2>
            <article>
              <h3>Introduction aux plugins CNI</h3>
              <p>
                Les plugins <strong>Container Network Interface (CNI)</strong>{" "}
                sont utilisés par Kubernetes pour fournir des fonctionnalités
                réseau aux Pods. Parmi les CNI populaires :
              </p>
              <ul>
                <li>
                  <strong>Calico:</strong> Sécurisé et performant, supporte le
                  réseau et les politiques de sécurité.
                </li>
                <li>
                  <strong>Flannel:</strong> Simple et léger, idéal pour des cas
                  d&apos;utilisation de base.
                </li>
                <li>
                  <strong>Weave Net:</strong> Fournit un réseau de maillage
                  facile à configurer.
                </li>
                <li>
                  <strong>Cilium:</strong> Axé sur la sécurité et
                  l&apos;intégration avec eBPF.
                </li>
              </ul>
            </article>

            <article>
              <h3>Installation de Calico</h3>
              <p>Exemple d&apos;installation de Calico :</p>
              <pre>
                <code>
                  kubectl apply -f
                  https://docs.projectcalico.org/manifests/calico.yaml
                </code>
              </pre>
            </article>
          </section>

          <section>
            <h2>Réseau des Pods</h2>
            <article>
              <h3>Communication entre Pods</h3>
              <p>
                Les Pods communiquent entre eux via leur adresse IP unique dans
                le cluster. Kubernetes garantit que ces adresses sont routables
                à l&apos;intérieur du cluster. Cela est géré par le CNI.
              </p>
            </article>

            <article>
              <h3>Network Policies</h3>
              <p>
                Les <strong>Network Policies</strong> permettent de contrôler le
                trafic réseau entrant et sortant des Pods. Voici un exemple :
              </p>
              <pre>
                <code>
                  {`apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-http
spec:
  podSelector:
    matchLabels:
      role: frontend
  ingress:
    - from:
        - ipBlock:
            cidr: 192.168.1.0/24
      ports:
        - protocol: TCP
          port: 80`}
                </code>
              </pre>
            </article>
          </section>
          <section>
            {questions.map((question) => (
              <article style={{ marginTop: 15 }} key={question.question_id}>
                <ArrowRightIcon
                  style={{ color: myColors.lightPink, fontSize: 25 }}
                />
                {question.explanation}
              </article>
            ))}
          </section>
        </div>
        <style jsx>{`
          pre {
            width: 100%;
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

export default Kubernetes_Networking;
