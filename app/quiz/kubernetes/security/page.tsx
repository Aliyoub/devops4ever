"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../../../store/store";
import QuizPage from "./quizPage";
import { questions } from "./questionsSecurity";

const Kubernetes_Security: React.FC = () => {
  const parent = useSelector((state: RootState) => state.parent.value);
  const child = useSelector((state: RootState) => state.child.value);
  const grandChild = useSelector((state: RootState) => state.grandChild.value);

  //   KUBERNETES Security
  if (parent === "Kubernetes" && child === "Security" && grandChild === "Quiz")
    return <QuizPage quizQuestions={questions} />;
  else if (
    parent === "Kubernetes" &&
    child === "Security" &&
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
          <div>
            <h1>Sécurité Kubernetes : Concepts essentiels</h1>

            {/* 1. Comportement par défaut des pods sans Security Context */}
            <section>
              <h2>1. Comportement par défaut des pods sans Security Context</h2>
              <p>
                Par défaut, si aucun <strong>Security Context</strong> n&apos;est
                spécifié pour un pod, Kubernetes exécute les pods en tant que{" "}
                <strong>root user</strong>. C&apos;est un risque majeur de sécurité,
                car un conteneur exécuté avec des privilèges root peut
                compromettre l&apos;hôte ou d&apos;autres ressources.
              </p>
              <h3>Bonne pratique :</h3>
              <ul>
                <li>
                  Configurer le <code>runAsNonRoot: true</code> dans le Security
                  Context.
                </li>
                <li>
                  Utiliser un utilisateur spécifique non-root pour le conteneur.
                </li>
              </ul>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: v1
kind: Pod
spec:
  containers:
    - name: mycontainer
      image: myimage
      securityContext:
        runAsNonRoot: true`}
                </code>
              </pre>
            </section>

            {/* 2. Restriction des registries d&apos;images */}
            <section>
              <h2>2. Restriction des registries d&apos;images</h2>
              <p>
                Kubernetes permet de restreindre les registries d&apos;images via
                l&apos;utilisation de <strong>ImagePolicyWebhook</strong>. Cette
                ressource applique des politiques pour autoriser uniquement des
                images provenant de registries approuvées.
              </p>
              <h3>Utilisation :</h3>
              <ul>
                <li>
                  Configurer un admission controller utilisant
                  ImagePolicyWebhook.
                </li>
                <li>Implémenter une politique de signature pour les images.</li>
              </ul>
            </section>

            {/* 3. Network Policies */}
            <section>
              <h2>3. Enforcement des Network Policies</h2>
              <p>
                Les <strong>Network Policies</strong> dans Kubernetes sont
                appliquées par le <strong>CNI plugin</strong> (Container Network
                Interface). Elles permettent de contrôler le flux de trafic
                réseau entre pods.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: deny-all
spec:
  podSelector: {}
  policyTypes:
    - Ingress
    - Egress`}
                </code>
              </pre>
            </section>

            {/* 4. Kubernetes RBAC */}
            <section>
              <h2>4. RBAC dans Kubernetes</h2>
              <p>
                Kubernetes utilise le modèle{" "}
                <strong>RBAC (Role-Based Access Control)</strong> pour gérer les
                permissions d&apos;accès aux ressources. Les principaux composants
                sont :
              </p>
              <ul>
                <li>
                  <strong>Role</strong> : définit les permissions dans un
                  namespace spécifique.
                </li>
                <li>
                  <strong>ClusterRole</strong> : définit les permissions
                  globales au cluster.
                </li>
                <li>
                  <strong>RoleBinding</strong> et{" "}
                  <strong>ClusterRoleBinding</strong> : lient les rôles aux
                  utilisateurs.
                </li>
              </ul>
              <p>
                <strong>Note :</strong> &quot;RolePolicy&quot; n&apos;est pas une ressource
                valide.
              </p>
            </section>

            {/* 5. readOnlyRootFilesystem */}
            <section>
              <h2>5. Paramètre readOnlyRootFilesystem</h2>
              <p>
                Le paramètre <code>readOnlyRootFilesystem</code> dans le
                Security Context rend le système de fichiers du conteneur{" "}
                <strong>immuable</strong>. Cela empêche toute modification
                malveillante du conteneur.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: v1
kind: Pod
spec:
  containers:
    - name: mycontainer
      image: myimage
      securityContext:
        readOnlyRootFilesystem: true`}
                </code>
              </pre>
            </section>

            {/* 6. Empêcher l&apos;exécution root */}
            <section>
              <h2>6. Empêcher un conteneur de s&apos;exécuter en tant que root</h2>
              <p>
                Pour éviter que des conteneurs ne s&apos;exécutent avec des
                privilèges root, définissez <code>runAsNonRoot: true</code> dans
                le Security Context.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: v1
kind: Pod
spec:
  containers:
    - name: secure-container
      image: secure-image
      securityContext:
        runAsNonRoot: true`}
                </code>
              </pre>
            </section>

            {/* 7. Permissions API : Roles et RoleBindings */}
            <section>
              <h2>7. Permissions API via Roles et RoleBindings</h2>
              <p>
                Utilisez <strong>Roles</strong> et <strong>RoleBindings</strong>{" "}
                pour configurer des permissions granulaires pour accéder à l&apos;API
                Kubernetes.
              </p>
            </section>

            {/* 8. Isolation réseau via NetworkPolicy */}
            <section>
              <h2>8. Isolation réseau avec NetworkPolicy</h2>
              <p>
                Les <strong>Network Policies</strong> isolent les pods en
                définissant des règles de trafic réseau (Ingress/Egress).
              </p>
            </section>

            {/* 9. Kubernetes Audit Logs */}
            <section>
              <h2>9. Kubernetes Audit Logs</h2>
              <p>
                Les <strong>Audit Logs</strong> de Kubernetes enregistrent les
                requêtes faites à l&apos;API server, ce qui est essentiel pour :
              </p>
              <ul>
                <li>Surveiller l&apos;activité des utilisateurs.</li>
                <li>Détecter les comportements anormaux.</li>
                <li>Garantir la conformité.</li>
              </ul>
            </section>

            {/* 10. Sécuriser les connexions kubelet */}
            <section>
              <h2>10. Sécurisation des connexions kubelet</h2>
              <p>
                Pour sécuriser les connexions entre kubelet et d&apos;autres
                composants, activez TLS avec l&apos;option{" "}
                <code>--tls-cert-file</code>.
              </p>
            </section>
          </div>
        </div>
        <style jsx>{`
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

export default Kubernetes_Security;
