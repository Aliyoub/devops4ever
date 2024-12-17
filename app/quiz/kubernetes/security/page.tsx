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
                Par défaut, si aucun <strong>Security Context</strong>{" "}
                n&apos;est spécifié pour un pod, Kubernetes exécute les pods en
                tant que <strong>root user</strong>. C&apos;est un risque majeur
                de sécurité, car un conteneur exécuté avec des privilèges root
                peut compromettre l&apos;hôte ou d&apos;autres ressources.
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
                Kubernetes permet de restreindre les registries d&apos;images
                via l&apos;utilisation de <strong>ImagePolicyWebhook</strong>.
                Cette ressource applique des politiques pour autoriser
                uniquement des images provenant de registries approuvées.
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
                permissions d&apos;accès aux ressources. Les principaux
                composants sont :
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
                <strong>Note :</strong> &quot;RolePolicy&quot; n&apos;est pas
                une ressource valide.
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
              <h2>
                6. Empêcher un conteneur de s&apos;exécuter en tant que root
              </h2>
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
                pour configurer des permissions granulaires pour accéder à
                l&apos;API Kubernetes.
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
            <section>
              <h2>
                11. Ressource limitant les opérations privilégiées d&apos;un pod
              </h2>
              <p>
                Le champ <code>PodSecurityPolicy</code> permet de limiter les
                opérations privilégiées qu&apos;un pod peut effectuer. Cela comprend
                des restrictions comme l&apos;interdiction d&apos;exécuter des conteneurs
                privilégiés ou d&apos;imposer l&apos;utilisation d&apos;utilisateurs non-root.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  apiVersion: extensions/v1beta1 kind: PodSecurityPolicy
                  metadata: name: example-psp spec: privileged: false runAsUser:
                  rule: MustRunAsNonRoot
                </code>
              </pre>
            </section>

            <section>
              <h2>12. ServiceAccount dans Kubernetes</h2>
              <p>
                Un <code>ServiceAccount</code> dans Kubernetes permet
                d&apos;attribuer une identité aux pods pour les authentifier auprès
                de l&apos;API Kubernetes et d&apos;autres services au sein du cluster.
                Cela facilite l&apos;authentification des pods et leur interaction
                avec d&apos;autres ressources Kubernetes.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  apiVersion: v1 kind: ServiceAccount metadata: name:
                  example-serviceaccount
                </code>
              </pre>
            </section>

            <section>
              <h2>13. Validation des politiques RBAC</h2>
              <p>
                Le <code>kube-apiserver</code> est le composant responsable de
                la validation et de l&apos;application des politiques{" "}
                <code>RBAC</code> dans Kubernetes. Il s&apos;assure que les
                utilisateurs et les comptes de service ne peuvent effectuer que
                les actions qui leur sont permises.
              </p>
            </section>

            <section>
              <h2>14. Empêcher un pod de monter le système de fichiers hôte</h2>
              <p>
                Le paramètre <code>privileged: false</code> dans le contexte de
                sécurité d&apos;un pod empêche celui-ci d&apos;effectuer des opérations
                privilégiées, telles que le montage du système de fichiers hôte.
                Cela renforce la sécurité en limitant les interactions avec
                l&apos;hôte.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  apiVersion: v1 kind: Pod spec: securityContext: privileged:
                  false
                </code>
              </pre>
            </section>

            <section>
              <h2>
                15. Vérification des permissions d&apos;un utilisateur Kubernetes
              </h2>
              <p>
                La commande <code>kubectl auth can-i</code> permet de vérifier
                les actions qu&apos;un utilisateur ou un compte de service est
                autorisé à effectuer en fonction des politiques{" "}
                <code>RBAC</code>.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>kubectl auth can-i get pods --as=example-user</code>
              </pre>
            </section>

            <section>
              <h2>
                16. Avantage de l&apos;option <code>anonymous-auth=false</code> sur
                le kube-apiserver
              </h2>
              <p>
                En activant <code>anonymous-auth=false</code> sur le{" "}
                <code>kube-apiserver</code>, on garantit que toutes les requêtes
                à l&apos;API Kubernetes doivent être authentifiées. Cela améliore la
                sécurité en interdisant les accès non authentifiés.
              </p>
            </section>

            <section>
              <h2>17. Cryptage des Secrets Kubernetes au repos</h2>
              <p>
                Kubernetes permet de crypter les <code>Secrets</code> au repos
                en activant le chiffrement <code>etcd</code> avec une
                configuration de fournisseur spécifiée. Cela protège les données
                sensibles en les chiffrant dans la base de données{" "}
                <code>etcd</code>.
              </p>
              <h3>Exemple de configuration :</h3>
              <pre>
                <code>
                  apiVersion: v1 kind: Secret metadata: name: example-secret
                  data: username: dXNlcm5hbWU=
                </code>
              </pre>
            </section>

            <section>
              <h2>
                18. Méthode recommandée pour fournir des identifiants à un pod
              </h2>
              <p>
                La méthode recommandée pour fournir des identifiants à un pod
                est d&apos;utiliser une ressource <code>Kubernetes Secret</code>. Les{" "}
                <code>Secrets</code> sont chiffrés au repos et permettent de
                stocker des informations sensibles comme des identifiants de
                manière sécurisée.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  apiVersion: v1 kind: Secret metadata: name: mysecret data:
                  password: cGFzc3dvcmQ=
                </code>
              </pre>
            </section>

            <section>
              <h2>
                19. Admission Controller pour valider et appliquer des
                politiques de sécurité personnalisées
              </h2>
              <p>
                Le contrôleur d&apos;admission <code>ValidatingWebhook</code> permet
                d&apos;appliquer des politiques de validation personnalisées pour les
                ressources Kubernetes. Cela permet aux administrateurs d&apos;ajouter
                des règles de sécurité spécifiques aux objets créés dans le
                cluster.
              </p>
            </section>

            <section>
              <h2>
                20. Objectif principal de <code>allowPrivilegeEscalation</code>
              </h2>
              <p>
                Le paramètre <code>allowPrivilegeEscalation</code> dans le
                contexte de sécurité d&apos;un pod empêche un conteneur d&apos;acquérir
                plus de privilèges que son processus parent, ce qui bloque les
                escalades de privilèges et renforce la sécurité des conteneurs.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  apiVersion: v1 kind: Pod spec: containers: - name: mycontainer
                  securityContext: allowPrivilegeEscalation: false
                </code>
              </pre>
            </section>

            <section>
              <h2>21. Fonction de NetworkPolicy dans Kubernetes</h2>
              <p>
                Le <strong>NetworkPolicy</strong> est une fonctionnalité de
                Kubernetes permettant de sécuriser la communication entre les
                pods. Il définit des règles concernant le trafic réseau entrant
                et sortant d&apos;un pod, ce qui permet de restreindre la
                communication entre les différents pods du cluster.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-ingress
spec:
  podSelector: {}
  ingress:
    - from:
        - podSelector:
            matchLabels:
              role: frontend`}
                </code>
              </pre>
            </section>

            <section>
              <h2>
                22. Empêcher un conteneur d&apos;utiliser le namespace réseau de
                l&apos;hôte
              </h2>
              <p>
                Pour garantir qu&apos;un conteneur n&apos;utilise pas le{" "}
                <strong>namespace réseau</strong> de l&apos;hôte, il est possible de
                définir l&apos;option <code>hostNetwork: false</code> dans la
                spécification du pod. Cela évite que le conteneur partage les
                mêmes interfaces réseau que l&apos;hôte, réduisant ainsi l&apos;exposition
                à d&apos;éventuelles failles de sécurité.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: v1
kind: Pod
spec:
  hostNetwork: false
  containers:
    - name: mycontainer
      image: myimage`}
                </code>
              </pre>
            </section>

            <section>
              <h2>
                23. Activer le chiffrement pour la communication entre
                kube-apiserver et etcd
              </h2>
              <p>
                Le flag <code>--etcd-cert-file</code> permet d&apos;activer le
                chiffrement TLS pour sécuriser la communication entre le{" "}
                <strong>kube-apiserver</strong> et <strong>etcd</strong>, la
                base de données clé-valeur utilisée par Kubernetes pour stocker
                la configuration et l&apos;état du cluster.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`kube-apiserver --etcd-cert-file=/etc/kubernetes/pki/etcd/etcd-server.crt`}
                </code>
              </pre>
            </section>

            <section>
              <h2>
                24. Budget de Disruption des Pods (PDB) pour les applications
                sensibles à la sécurité
              </h2>
              <p>
                Un <strong>Pod Disruption Budget</strong> (PDB) est utilisé pour
                garantir qu&apos;un nombre minimum de pods reste disponible lors des
                disruptions volontaires, comme lors des mises à jour ou des
                redémarrages. Cela est particulièrement utile pour les
                applications sensibles à la sécurité qui nécessitent une haute
                disponibilité.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: policy/v1
kind: PodDisruptionBudget
metadata:
  name: my-pdb
spec:
  minAvailable: 1
  selector:
    matchLabels:
      app: myapp`}
                </code>
              </pre>
            </section>

            <section>
              <h2>25. Rôle de kube-proxy dans le réseau Kubernetes</h2>
              <p>
                Le <strong>kube-proxy</strong> est responsable du routage du
                trafic vers les pods appropriés en fonction des{" "}
                <strong>Services</strong> définis dans Kubernetes. Il applique
                les règles de routage et gère la communication réseau entre les
                différents composants du cluster.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: v1
kind: Service
metadata:
  name: myservice
spec:
  selector:
    app: myapp
  ports:
    - protocol: TCP
      port: 80
      targetPort: 8080`}
                </code>
              </pre>
            </section>

            <section>
              <h2>
                26. Contrôle d&apos;admission PodSecurityPolicy pour empêcher
                l&apos;exécution en tant qu&apos;utilisateur root
              </h2>
              <p>
                Le <strong>PodSecurityPolicy</strong> permet de définir des
                restrictions de sécurité pour les pods. Par exemple, il peut
                être configuré pour empêcher l&apos;exécution de conteneurs en tant
                qu&apos;utilisateur root, ce qui limite les risques de sécurité liés
                à des privilèges excessifs.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: policy/v1beta1
kind: PodSecurityPolicy
metadata:
  name: restrict-root
spec:
  runAsUser:
    rule: 'MustRunAsNonRoot'`}
                </code>
              </pre>
            </section>

            <section>
              <h2>27. Impact du flag --anonymous-auth=false pour le kubelet</h2>
              <p>
                Le flag <code>--anonymous-auth=false</code> désactive l&apos;accès
                anonyme à l&apos;API du <strong>kubelet</strong>, forçant ainsi une
                authentification pour toutes les requêtes. Cela améliore la
                sécurité en empêchant l&apos;accès non autorisé aux ressources du
                kubelet.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>{`kubelet --anonymous-auth=false`}</code>
              </pre>
            </section>

            <section>
              <h2>
                28. Restreindre l&apos;accès aux données sensibles dans les
                ConfigMaps
              </h2>
              <p>
                Pour protéger les données sensibles stockées dans les{" "}
                <strong>ConfigMaps</strong>, il est recommandé d&apos;utiliser{" "}
                <strong>RBAC</strong> pour restreindre l&apos;accès en fonction des
                rôles et des comptes de service. Cela empêche les utilisateurs
                non autorisés d&apos;accéder ou de modifier ces données.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  namespace: default
  name: configmap-reader
rules:
- apiGroups: [""]
  resources: ["configmaps"]
  verbs: ["get", "list"]`}
                </code>
              </pre>
            </section>

            <section>
              <h2>
                29. ImagePolicyWebhook pour garantir l&apos;utilisation d&apos;images
                signées
              </h2>
              <p>
                Le <strong>ImagePolicyWebhook</strong> permet d&apos;appliquer des
                politiques qui exigent que les images des conteneurs soient
                signées et proviennent de registres de confiance. Cela ajoute
                une couche de sécurité en garantissant l&apos;intégrité et l&apos;origine
                des images utilisées dans le cluster.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: admission.k8s.io/v1
kind: AdmissionReview
metadata:
  name: image-policy
spec:
  kind: Webhook
  admissionReview:
    name: validate-image`}
                </code>
              </pre>
            </section>

            <section>
              <h2>
                30. PodSecurityPolicy pour restreindre les capacités des
                conteneurs
              </h2>
              <p>
                Le <strong>PodSecurityPolicy</strong> permet d&apos;imposer des
                contraintes sur les capacités des conteneurs, telles que
                l&apos;interdiction de l&apos;accès au mode privilégié ou à l&apos;espace de
                noms de l&apos;hôte. Cela permet de renforcer la sécurité des pods en
                limitant leurs privilèges et leurs interactions avec
                l&apos;infrastructure sous-jacente.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: policy/v1beta1
kind: PodSecurityPolicy
metadata:
  name: restrict-capabilities
spec:
  allowedCapabilities: ["NET_BIND_SERVICE", "IPC_LOCK"]`}
                </code>
              </pre>
            </section>

            <section>
  <h2>31. Quel est l&apos;avantage principal d&apos;activer les journaux d&apos;audit dans Kubernetes ?</h2>
  <p>
    L&apos;activation des <strong>journaux d&apos;audit</strong> permet de suivre les requêtes effectuées par le serveur API de Kubernetes. Ces journaux sont essentiels pour détecter des anomalies de sécurité et garantir la conformité aux règles de sécurité.
  </p>
  <h3>Bonne pratique :</h3>
  <ul>
    <li>Activer les journaux d&apos;audit pour suivre les interactions avec l&apos;API et détecter des comportements suspects.</li>
    <li>Configurer une politique de rétention pour conserver les journaux pendant une période appropriée.</li>
  </ul>
  <h3>Exemple :</h3>
  <pre>
    <code>
      apiVersion: audit.k8s.io/v1
      kind: Policy
      metadata:
        name: audit-policy
      spec:
        rules:
          - level: Metadata
            resources:
              - group: ""
                resources: ["pods"]
    </code>
  </pre>
</section>

<section>
  <h2>32. Comment s&apos;assurer qu&apos;un pod fonctionne uniquement avec un identifiant utilisateur spécifique ?</h2>
  <p>
    Pour s&apos;assurer qu&apos;un pod s&apos;exécute sous un identifiant utilisateur particulier, vous pouvez configurer le champ <strong>runAsUser</strong> dans le <strong>Security Context</strong> du pod. Cela empêche l&apos;exécution du pod avec des privilèges <strong>root</strong>.
  </p>
  <h3>Bonne pratique :</h3>
  <ul>
    <li>Utiliser <code>runAsUser</code> pour spécifier l&apos;ID utilisateur souhaité dans le contexte de sécurité du pod.</li>
    <li>Éviter de laisser des pods s&apos;exécuter avec des privilèges élevés pour renforcer la sécurité.</li>
  </ul>
  <h3>Exemple :</h3>
  <pre>
    <code>
      apiVersion: v1
      kind: Pod
      spec:
        containers:
          - name: mycontainer
            image: myimage
            securityContext:
              runAsUser: 1001
    </code>
  </pre>
</section>

<section>
  <h2>33. Quel est le but du profil <strong>seccomp</strong> dans Kubernetes ?</h2>
  <p>
    Le profil <strong>seccomp</strong> permet de restreindre les appels système accessibles par un conteneur. Cela réduit la surface d&apos;attaque du conteneur en limitant les opérations risquées qui pourraient compromettre l&apos;hôte.
  </p>
  <h3>Bonne pratique :</h3>
  <ul>
    <li>Utiliser un profil <code>seccomp</code> strict pour limiter les appels système autorisés dans les conteneurs.</li>
    <li>Configurer des profils <code>seccomp</code> pour différentes applications afin de mieux contrôler les permissions.</li>
  </ul>
  <h3>Exemple :</h3>
  <pre>
    <code>
      apiVersion: v1
      kind: Pod
      spec:
        containers:
          - name: mycontainer
            image: myimage
            securityContext:
              seccompProfile:
                type: RuntimeDefault
    </code>
  </pre>
</section>

<section>
  <h2>34. Que se passe-t-il lorsque <code>allowPrivilegeEscalation</code> est défini sur <code>false</code> ?</h2>
  <p>
    Lorsque <code>allowPrivilegeEscalation: false</code> est configuré, un conteneur ne peut pas obtenir plus de privilèges que ceux de son processus parent. Cela empêche les escalades de privilèges et améliore la sécurité en isolant mieux les conteneurs.
  </p>
  <h3>Bonne pratique :</h3>
  <ul>
    <li>Définir <code>allowPrivilegeEscalation: false</code> pour prévenir les escalades de privilèges involontaires dans vos conteneurs.</li>
  </ul>
  <h3>Exemple :</h3>
  <pre>
    <code>
      apiVersion: v1
      kind: Pod
      spec:
        containers:
          - name: mycontainer
            image: myimage
            securityContext:
              allowPrivilegeEscalation: false
    </code>
  </pre>
</section>

<section>
  <h2>35. Quel est le rôle du contrôleur d&apos;admission <strong>NodeRestriction</strong> ?</h2>
  <p>
    Le contrôleur d&apos;admission <strong>NodeRestriction</strong> empêche les nœuds de modifier les ressources du serveur API en dehors de leurs propres objets Node et Pod. Cela limite les actions qu&apos;un nœud peut entreprendre, réduisant ainsi les risques d&apos;accès non autorisé.
  </p>
  <h3>Bonne pratique :</h3>
  <ul>
    <li>Activer <code>NodeRestriction</code> pour limiter les actions des nœuds sur les objets Kubernetes sensibles.</li>
  </ul>
  <h3>Exemple :</h3>
  <pre>
    <code>
      apiVersion: admission.k8s.io/v1
      kind: AdmissionControl
      spec:
        plugins:
          - name: NodeRestriction
    </code>
  </pre>
</section>

<section>
  <h2>36. Comment forcer l&apos;encryption des données dans <strong>etcd</strong> pour Kubernetes ?</h2>
  <p>
    L&apos;encryption des données dans <strong>etcd</strong> peut être activée à l&apos;aide d&apos;une configuration de fournisseur d&apos;encryption. Cela permet de sécuriser les données sensibles telles que les Secrets, en les cryptant au repos.
  </p>
  <h3>Bonne pratique :</h3>
  <ul>
    <li>Configurer l&apos;encryption avec un fichier de configuration de fournisseur d&apos;encryption pour protéger les données sensibles.</li>
  </ul>
  <h3>Exemple :</h3>
  <pre>
    <code>
      apiVersion: kubeadm.k8s.io/v1
      kind: KubeadmConfig
      spec:
        etcd:
          encryption:
            enabled: true
            provider: "aes256-gcm"
    </code>
  </pre>
</section>

<section>
  <h2>37. Quelle commande liste les contrôleurs d&apos;admission actifs dans un cluster Kubernetes ?</h2>
  <p>
    Pour lister les contrôleurs d&apos;admission actifs, vous devez consulter la configuration du <strong>kube-apiserver</strong> via la commande qui affiche les plugins d&apos;admission activés. Ces contrôleurs sont spécifiés dans le flag <code>--enable-admission-plugins</code>.
  </p>
  <h3>Bonne pratique :</h3>
  <ul>
    <li>Vérifier la configuration de <code>kube-apiserver</code> pour assurer que les contrôleurs d&apos;admission nécessaires sont activés.</li>
  </ul>
  <h3>Exemple :</h3>
  <pre>
    <code>
      kubectl describe pod kube-apiserver | grep --enable-admission-plugins
    </code>
  </pre>
</section>

<section>
  <h2>38. Que permet de réaliser <code>hostPID: false</code> dans la spécification d&apos;un pod ?</h2>
  <p>
    En définissant <code>hostPID: false</code>, on empêche le conteneur de partager l&apos;espace de processus de l&apos;hôte. Cela permet une meilleure isolation des processus et évite que les conteneurs accèdent aux processus de l&apos;hôte.
  </p>
  <h3>Bonne pratique :</h3>
  <ul>
    <li>Utiliser <code>hostPID: false</code> pour renforcer l&apos;isolement des processus dans un environnement Kubernetes.</li>
  </ul>
  <h3>Exemple :</h3>
  <pre>
    <code>
      apiVersion: v1
      kind: Pod
      spec:
        containers:
          - name: mycontainer
            image: myimage
            securityContext:
              hostPID: false
    </code>
  </pre>
</section>

<section>
  <h2>39. Quel est le rôle des <strong>Service Accounts</strong> dans Kubernetes ?</h2>
  <p>
    Les <strong>Service Accounts</strong> fournissent une identité aux pods, leur permettant de s&apos;authentifier et d&apos;interagir de manière sécurisée avec le serveur API de Kubernetes. Cela est essentiel pour la gestion des autorisations dans le cluster.
  </p>
  <h3>Bonne pratique :</h3>
  <ul>
    <li>Utiliser des <code>Service Accounts</code> pour définir des permissions spécifiques pour les pods dans le cluster.</li>
  </ul>
  <h3>Exemple :</h3>
  <pre>
    <code>
      apiVersion: v1
      kind: ServiceAccount
      metadata:
        name: myserviceaccount
    </code>
  </pre>
</section>

<section>
  <h2>40. Quelle configuration permet de garantir qu&apos;un conteneur fonctionne avec un système de fichiers en lecture seule ?</h2>
  <p>
    En définissant <code>readOnlyRootFilesystem: true</code> dans le contexte de sécurité d&apos;un pod, vous garantissez que le système de fichiers du conteneur est monté en mode lecture seule, empêchant toute modification des données sensibles ou critiques.
  </p>
  <h3>Bonne pratique :</h3>
  <ul>
    <li>Configurer <code>readOnlyRootFilesystem: true</code> pour renforcer la sécurité des conteneurs en empêchant toute altération des fichiers système.</li>
  </ul>
  <h3>Exemple :</h3>
  <pre>
    <code>
      apiVersion: v1
      kind: Pod
      spec:
        containers:
          - name: mycontainer
            image: myimage
            securityContext:
              readOnlyRootFilesystem: true
    </code>
  </pre>
</section>

<section>
  <h2>41. Le rôle du contrôleur d&apos;admission <strong>NodeRestriction</strong></h2>
  <p>
    Le contrôleur d&apos;admission <strong>NodeRestriction</strong> empêche les nœuds (via le kubelet) de modifier les objets API qui ne leur appartiennent pas. Cela renforce la sécurité en limitant la capacité des nœuds à interférer avec d&apos;autres objets dans le cluster.
  </p>
  <h3>Explication :</h3>
  <p>
    Par défaut, un nœud peut uniquement modifier ses propres objets (Node, Pod) et ne peut pas interférer avec ceux d&apos;autres nœuds, réduisant ainsi les risques d&apos;accès non autorisé.
  </p>
</section>

<section>
  <h2>42. Empêcher l&apos;exécution d&apos;un pod en tant qu&apos;utilisateur root</h2>
  <p>
    Pour empêcher un pod de s&apos;exécuter en tant qu&apos;utilisateur root, il est possible de définir <strong>runAsNonRoot: true</strong> dans le <strong>Security Context</strong> du pod. Cela garantit que le conteneur ne pourra pas s&apos;exécuter avec des privilèges élevés.
  </p>
  <h3>Explication :</h3>
  <p>
    La directive <code>runAsNonRoot: true</code> dans le <strong>Security Context</strong> permet d&apos;exécuter le conteneur avec un utilisateur non-root, évitant ainsi les risques liés à l&apos;exécution de processus avec des privilèges élevés.
  </p>
</section>

<section>
  <h2>43. Le rôle du contrôleur d&apos;admission <strong>ValidatingWebhook</strong></h2>
  <p>
    Le contrôleur d&apos;admission <strong>ValidatingWebhook</strong> permet de valider les demandes d&apos;API Kubernetes en fonction de règles personnalisées avant que les modifications ne soient appliquées. Il est utilisé pour renforcer la sécurité en s&apos;assurant que seules les modifications conformes aux politiques définies sont acceptées.
  </p>
  <h3>Explication :</h3>
  <p>
    Ce contrôleur d&apos;admission intercepte les demandes d&apos;API et les valide selon des règles spécifiques avant de les appliquer, permettant une gestion fine de la sécurité dans le cluster Kubernetes.
  </p>
</section>

<section>
  <h2>44. Activation de l&apos;authentification TLS mutuelle pour la communication kubelet</h2>
  <p>
    Pour activer l&apos;authentification TLS mutuelle pour la communication avec le kubelet, il faut utiliser l&apos;option <code>--client-ca-file</code>. Cela permet de vérifier les certificats clients présentés lors de la communication avec le kubelet.
  </p>
  <h3>Explication :</h3>
  <p>
    Le paramètre <code>--client-ca-file</code> garantit que seul un client disposant d&apos;un certificat valide pourra se connecter au kubelet, renforçant ainsi la sécurité des échanges.
  </p>
</section>

<section>
  <h2>45. Objectif principal du <strong>NetworkPolicy</strong> dans Kubernetes</h2>
  <p>
    <strong>NetworkPolicy</strong> est utilisé pour limiter le trafic réseau entre les pods en fonction de règles définies. Cela permet de contrôler l&apos;accès aux services et d&apos;améliorer la sécurité en limitant la communication entre les différentes ressources du cluster.
  </p>
  <h3>Explication :</h3>
  <p>
    Les <strong>NetworkPolicies</strong> permettent de définir des règles sur le trafic entrant et sortant des pods, de manière à interdire certaines connexions non sécurisées ou non autorisées.
  </p>
</section>

<section>
  <h2>46. Composant Kubernetes responsable de la création des journaux d&apos;audit</h2>
  <p>
    Le composant Kubernetes <strong>kube-apiserver</strong> est responsable de la génération des journaux d&apos;audit. Ces journaux enregistrent toutes les demandes d&apos;API pour des fins de surveillance et d&apos;analyse de sécurité.
  </p>
  <h3>Explication :</h3>
  <p>
    Les journaux d&apos;audit générés par le <strong>kube-apiserver</strong> sont essentiels pour analyser et détecter les anomalies de sécurité dans le cluster Kubernetes.
  </p>
</section>

<section>
  <h2>47. Limiter l&apos;utilisation du CPU et de la mémoire d&apos;un conteneur</h2>
  <p>
    Pour limiter l&apos;utilisation du CPU et de la mémoire d&apos;un conteneur, il est possible de définir des demandes (<code>requests</code>) et des limites (<code>limits</code>) dans la spécification du pod. Cela garantit que les ressources allouées sont respectées et évite une surcharge de l&apos;infrastructure.
  </p>
  <h3>Explication :</h3>
  <p>
    Les <code>requests</code> définissent la quantité minimale de ressources nécessaires pour que le conteneur fonctionne correctement, tandis que les <code>limits</code> imposent une limite supérieure pour éviter une consommation excessive des ressources.
  </p>
</section>

<section>
  <h2>48. Comportement de l&apos;option <code>hostIPC: true</code></h2>
  <p>
    Lorsque <code>hostIPC: true</code> est défini dans un pod, ce dernier partage l&apos;espace de noms IPC du nœud hôte. Cela permet au conteneur d&apos;accéder à des informations sensibles au niveau des processus du nœud, ce qui peut représenter un risque de sécurité.
  </p>
  <h3>Explication :</h3>
  <p>
    Partager l&apos;espace de noms IPC avec le nœud hôte peut exposer le conteneur à des processus non sécurisés ou sensibles, augmentant ainsi la surface d&apos;attaque.
  </p>
</section>

<section>
  <h2>49. Commande pour vérifier les permissions RBAC pour une action spécifique</h2>
  <p>
    La commande <code>kubectl auth can-i</code> permet de vérifier si un utilisateur ou un compte de service a la permission d&apos;effectuer une action spécifique selon les politiques RBAC définies.
  </p>
  <h3>Explication :</h3>
  <p>
    Cette commande est utile pour valider les permissions d&apos;accès à certaines ressources ou actions dans Kubernetes, facilitant ainsi la gestion de la sécurité et de l&apos;accès.
  </p>
</section>

<section>
  <h2>50. Ressource Kubernetes pour gérer les informations sensibles</h2>
  <p>
    <strong>Secret</strong> est la ressource Kubernetes utilisée pour stocker et gérer de manière sécurisée des informations sensibles comme des mots de passe, des jetons ou des clés. Elle évite de coder en dur ces informations dans les spécifications de pods.
  </p>
  <h3>Explication :</h3>
  <p>
    Les <strong>Secrets</strong> permettent de protéger les informations sensibles en limitant leur exposition dans les configurations Kubernetes. Ils sont chiffrés au repos, garantissant leur confidentialité.
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
