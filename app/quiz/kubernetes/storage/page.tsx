"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../../../store/store";
import Quizpage from "../../quiz-page/Quizpage";

import { questions } from "./questionsStorage";

const Kubernetes_Storage: React.FC = () => {
  const parent = useSelector((state: RootState) => state.parent.value);
  const child = useSelector((state: RootState) => state.child.value);
  const grandChild = useSelector((state: RootState) => state.grandChild.value);

  //   KUBERNETES Storage
  if (parent === "Kubernetes" && child === "Storage" && grandChild === "Quiz")
    return <Quizpage quizQuestions={questions} />;
  else if (
    parent === "Kubernetes" &&
    child === "Storage" &&
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
          <h1>Kubernetes Storage</h1>

          <p>
            Kubernetes offre un système de gestion du stockage dynamique et
            statique pour les applications en conteneurs. Ce module couvre les
            concepts clés, les composants et les configurations liés au stockage
            dans Kubernetes.
          </p>

          <h2>1. Persistent Volumes (PV) et Persistent Volume Claims (PVC)</h2>
          <p>
            Les Persistent Volumes (PV) et Persistent Volume Claims (PVC)
            permettent de gérer les ressources de stockage de manière abstraite
            et indépendante du fournisseur de stockage.
          </p>

          <h3>1.1. Persistent Volume (PV)</h3>
          <p>
            Un <strong>Persistent Volume</strong> est une ressource de stockage
            dans le cluster Kubernetes. Il est provisionné statiquement ou
            dynamiquement par des administrateurs ou des StorageClasses.
          </p>

          <pre>
            <code>
              apiVersion: v1 kind: PersistentVolume metadata: name: pv-example
              spec: capacity: storage: 10Gi accessModes: - ReadWriteOnce
              persistentVolumeReclaimPolicy: Retain hostPath: path: /mnt/data
            </code>
          </pre>

          <h3>1.2. Persistent Volume Claim (PVC)</h3>
          <p>
            Un <strong>Persistent Volume Claim</strong> est une demande de
            stockage faite par une application. Kubernetes lie automatiquement
            le PVC à un PV approprié.
          </p>

          <pre>
            <code>
              apiVersion: v1 kind: PersistentVolumeClaim metadata: name:
              pvc-example spec: accessModes: - ReadWriteOnce resources:
              requests: storage: 5Gi
            </code>
          </pre>

          <h2>2. Storage Classes</h2>
          <p>
            Les <strong>StorageClasses</strong> permettent la provision
            dynamique des volumes. Elles définissent les paramètres utilisés par
            le provisioner de stockage.
          </p>

          <pre>
            <code>
              apiVersion: storage.k8s.io/v1 kind: StorageClass metadata: name:
              standard provisioner: kubernetes.io/aws-ebs parameters: type: gp2
            </code>
          </pre>

          <h3>Exemple d&apos;utilisation avec un PVC :</h3>

          <pre>
            <code>
              apiVersion: v1 kind: PersistentVolumeClaim metadata: name:
              pvc-with-sc spec: accessModes: - ReadWriteOnce resources:
              requests: storage: 10Gi storageClassName: standard
            </code>
          </pre>

          <h2>3. Types de Volumes</h2>
          <p>
            Kubernetes supporte différents types de volumes pour répondre à
            divers besoins.
          </p>

          <h3>3.1. EmptyDir</h3>
          <p>
            <strong>EmptyDir</strong> est créé lorsque le pod démarre et
            supprimé lorsqu&apos;il est détruit.
          </p>

          <pre>
            <code>
              apiVersion: v1 kind: Pod metadata: name: pod-with-emptydir spec:
              containers: - name: nginx image: nginx volumeMounts: - mountPath:
              /cache name: cache-volume volumes: - name: cache-volume emptyDir:{" "}
              {}
            </code>
          </pre>

          <h3>3.2. HostPath</h3>
          <p>
            <strong>HostPath</strong> monte un répertoire ou un fichier du nœud
            hôte dans un pod.
          </p>

          <pre>
            <code>
              apiVersion: v1 kind: Pod metadata: name: pod-with-hostpath spec:
              containers: - name: busybox image: busybox volumeMounts: -
              mountPath: /data name: host-volume volumes: - name: host-volume
              hostPath: path: /var/log
            </code>
          </pre>

          <h2>4. Configuration avancée</h2>

          <h3>4.1. Volume Mounts et SubPath</h3>
          <p>
            Utilisez <strong>subPath</strong> pour monter un sous-répertoire
            spécifique d&apos;un volume dans un conteneur.
          </p>

          <pre>
            <code>
              apiVersion: v1 kind: Pod metadata: name: pod-with-subpath spec:
              containers: - name: busybox image: busybox volumeMounts: -
              mountPath: /data name: config-volume subPath: config-file volumes:
              - name: config-volume configMap: name: app-config
            </code>
          </pre>

          <h3>4.2. PersistentVolume Reclaim Policy</h3>
          <p>
            La propriété <strong>persistentVolumeReclaimPolicy</strong> contrôle
            ce qu&apos;il advient d&apos;un PV après la suppression d&apos;un
            PVC. Les valeurs possibles sont <code>Retain</code>,{" "}
            <code>Recycle</code>, et <code>Delete</code>.
          </p>

          <h2>5. CSI (Container Storage Interface)</h2>
          <p>
            Le <strong>CSI</strong> est une interface standardisée pour
            l&apos;intégration de systèmes de stockage tiers dans Kubernetes.
          </p>

          <pre>
            <code>
              apiVersion: storage.k8s.io/v1 kind: StorageClass metadata: name:
              csi-storage-class provisioner: csi.example.com
            </code>
          </pre>

          <h2>6. Évaluation et Résolution de Problèmes</h2>
          <p>Quelques commandes utiles :</p>
          <ul>
            <li>
              <code>kubectl get pv</code>: Liste des Persistent Volumes
            </li>
            <li>
              <code>kubectl get pvc</code>: Liste des Persistent Volume Claims
            </li>
            <li>
              <code>kubectl describe pv &lt;pv-name&gt;</code>: Détails
              d&apos;un PV
            </li>
            <li>
              <code>kubectl describe pvc &lt;pvc-name&gt;</code>: Détails
              d&apos;un PVC
            </li>
          </ul>
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

export default Kubernetes_Storage;
