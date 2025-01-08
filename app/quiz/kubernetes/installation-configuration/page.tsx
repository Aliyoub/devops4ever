"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../../../store/store";
import QuizPage from "../../quizPage/QuizPage";

import { questions } from "./questionsInstallationConfiguration";

const Kubernetes_InstallationConfiguration: React.FC = () => {
  const parent = useSelector((state: RootState) => state.parent.value);
  const child = useSelector((state: RootState) => state.child.value);
  const grandChild = useSelector((state: RootState) => state.grandChild.value);

  //   KUBERNETES Installation Configuration
  if (
    parent === "Kubernetes" &&
    child === "Installation and Configuration" &&
    grandChild === "Quiz"
  )
    return <QuizPage quizQuestions={questions} />;
  else if (
    parent === "Kubernetes" &&
    child === "Installation and Configuration" &&
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
            <h1>Introduction à Kubernetes : Installation et Configuration</h1>

            <section>
              <h2>1. Vérification de la version de Kubernetes</h2>
              <p>
                Pour vérifier la version de votre cluster Kubernetes installé,
                utilisez la commande suivante :<code>kubectl version</code>.
                Cette commande affiche les versions du client et du serveur
                Kubernetes.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>{`kubectl version --short`}</code>
              </pre>
            </section>

            <section>
              <h2>2. Installation de kubeadm pour configurer un cluster</h2>
              <p>
                Le premier pas dans la configuration d&apos;un cluster avec
                kubeadm consiste à installer <code>kubeadm</code> sur le nœud
                maître. Cela prépare l&apos;environnement pour
                l&apos;initialisation du cluster.
              </p>
              <h3>Commandes :</h3>
              <ul>
                <li>
                  <code>
                    sudo apt-get update && sudo apt-get install -y kubeadm
                    kubelet kubectl
                  </code>
                </li>
              </ul>
            </section>

            <section>
              <h2>3. Initialisation du cluster avec kubeadm</h2>
              <p>
                La commande <code>kubeadm init</code> initialise le nœud maître
                et configure les composants principaux du plan de contrôle (API
                Server, Controller Manager, Scheduler). Elle génère également un
                fichier kubeconfig pour permettre l&apos;interaction avec le
                cluster.
              </p>
              <h3>Commandes :</h3>
              <pre>
                <code>
                  {`sudo kubeadm init --pod-network-cidr=10.244.0.0/16`}
                </code>
              </pre>
            </section>

            <section>
              <h2>4. Configuration de kubectl pour se connecter au cluster</h2>
              <p>
                Après l&apos;initialisation du cluster, copiez le fichier{" "}
                <code>admin.conf</code> pour configurer <code>kubectl</code> :
              </p>
              <pre>
                <code>
                  {`mkdir -p $HOME/.kube
sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config`}
                </code>
              </pre>
            </section>

            <section>
              <h2>5. Ajout d&apos;un nœud de travail au cluster</h2>
              <p>
                Utilisez la commande <code>kubeadm join</code> avec un jeton
                valide pour ajouter un nœud de travail au cluster.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`sudo kubeadm join <master-ip>:<port> --token <token> --discovery-token-ca-cert-hash sha256:<hash>`}
                </code>
              </pre>
            </section>

            <section>
              <h2>6. Installation du plugin réseau</h2>
              <p>
                Kubernetes n&apos;applique pas de configuration réseau par
                défaut. Vous devez installer un plugin réseau comme Flannel ou
                Calico pour permettre la communication entre les pods.
              </p>
              <h3>Exemple (Flannel) :</h3>
              <pre>
                <code>
                  {`kubectl apply -f https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml`}
                </code>
              </pre>
            </section>

            <section>
              <h2>7. Gestion des certificats Kubernetes</h2>
              <p>
                Les certificats pour les communications sécurisées sont générés
                automatiquement lors de l&apos;initialisation du cluster et
                stockés dans <code>/etc/kubernetes/pki</code>. Pour les
                environnements de production, il est recommandé d&apos;utiliser{" "}
                <code>cert-manager</code> pour la gestion des certificats.
              </p>
              <h3>Exemple d&apos;installation de cert-manager :</h3>
              <pre>
                <code>
                  {`kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.10.0/cert-manager.yaml`}
                </code>
              </pre>
            </section>

            <section>
              <h2>8. Mise à jour d&apos;un cluster Kubernetes</h2>
              <p>
                Utilisez la commande <code>kubeadm upgrade</code> pour mettre à
                jour les composants du plan de contrôle. Assurez-vous que tous
                les nœuds fonctionnent sur la même version pour éviter les
                incompatibilités.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>{`sudo kubeadm upgrade apply v1.25.0`}</code>
              </pre>
            </section>

            <section>
              <h2>9. Configuration du fichier kubeconfig</h2>
              <p>
                Le fichier kubeconfig, généralement situé à{" "}
                <code>~/.kube/config</code>, contient les détails nécessaires
                pour permettre à <code>kubectl</code> d&apos;authentifier et
                d&apos;interagir avec le cluster Kubernetes.
              </p>
              <h3>Exemple de configuration :</h3>
              <pre>
                <code>
                  {`apiVersion: v1
clusters:
  - cluster:
      certificate-authority: /path/to/ca.crt
      server: https://<master-ip>:6443
    name: my-cluster
contexts:
  - context:
      cluster: my-cluster
      user: admin
    name: my-cluster-context
current-context: my-cluster-context
kind: Config
preferences: {}
users:
  - name: admin
    user:
      client-certificate: /path/to/admin.crt
      client-key: /path/to/admin.key`}
                </code>
              </pre>
            </section>

            <section>
              <h2>10. Réinitialisation du cluster avec kubeadm</h2>
              <p>
                La commande <code>kubeadm reset</code> permet d&apos;annuler les
                modifications effectuées par <code>kubeadm init</code> ou{" "}
                <code>kubeadm join</code>. Cela supprime toutes les
                configurations et données sur le nœud maître, mais pas sur
                l&apos;ensemble du cluster.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>{`sudo kubeadm reset`}</code>
              </pre>
            </section>

            <section>
              <h2>11. Validation du statut des composants Kubernetes</h2>
              <p>
                Pour vérifier si les composants du plan de contrôle (API Server,
                Scheduler, Controller Manager) sont en cours d&apos;exécution
                après l&apos;initialisation, utilisez la commande :
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>{`kubectl get componentstatuses`}</code>
              </pre>
            </section>

            <section>
              <h2>12. Configuration du plugin réseau après kubeadm</h2>
              <p>
                Après avoir exécuté <code>kubeadm init</code>, appliquez la
                configuration du plugin réseau avec <code>kubectl apply</code>.
              </p>
              <h3>Exemple avec Calico :</h3>
              <pre>
                <code>
                  {`kubectl apply -f https://docs.projectcalico.org/manifests/calico.yaml`}
                </code>
              </pre>
            </section>

            <section>
              <h2>13. Gestion des certificats et sécurité du cluster</h2>
              <p>
                Les certificats utilisés par le cluster sont essentiels pour la
                sécurité. Ils sont stockés dans <code>/etc/kubernetes/pki</code>
                . En production, utilisez des outils comme{" "}
                <code>cert-manager</code> pour gérer les renouvellements.
              </p>
            </section>

            <section>
              <h2>14. Ajout d&apos;un nœud avec kubeadm join</h2>
              <p>
                Pour ajouter un nouveau nœud de travail, utilisez les
                informations fournies par <code>kubeadm init</code>, telles que
                le token et l&apos;adresse de découverte.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`kubeadm join <api-server>:<port> --token <token> --discovery-token-ca-cert-hash sha256:<hash>`}
                </code>
              </pre>
            </section>

            <section>
              <h2>15. Surveillance des nœuds</h2>
              <p>Après l&apos;ajout de nœuds, vérifiez leur statut avec :</p>
              <h3>Exemple :</h3>
              <pre>
                <code>{`kubectl get nodes`}</code>
              </pre>
            </section>
          </div>

          <section>
            <h2>16. Surveillance des Pods</h2>
            <p>
              Pour surveiller les Pods en cours d&apos;exécution dans le
              cluster, utilisez la commande <code>kubectl get pods</code>.
              Ajoutez l&apos;option <code>--all-namespaces</code> pour voir les
              Pods dans tous les espaces de noms.
            </p>
            <h3>Exemple :</h3>
            <pre>
              <code>{`kubectl get pods --all-namespaces`}</code>
            </pre>
          </section>

          <section>
            <h2>17. Configuration des politiques réseau</h2>
            <p>
              Les plugins réseau comme Calico permettent de définir des
              politiques réseau pour contrôler le trafic entre les Pods.
            </p>
            <h3>Exemple de politique :</h3>
            <pre>
              <code>
                {`apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-specific-traffic
  namespace: default
spec:
  podSelector:
    matchLabels:
      app: myapp
  policyTypes:
  - Ingress
  ingress:
  - from:
    - podSelector:
        matchLabels:
          role: frontend`}
              </code>
            </pre>
          </section>

          <section>
            <h2>18. Configuration de la haute disponibilité</h2>
            <p>
              Pour un cluster Kubernetes hautement disponible, configurez
              plusieurs nœuds maîtres et utilisez une adresse IP virtuelle avec
              une solution de load balancing comme HAProxy.
            </p>
            <h3>Exemple de configuration HAProxy :</h3>
            <pre>
              <code>
                {`frontend kubernetes
    bind *:6443
    default_backend kubernetes-masters
backend kubernetes-masters
    balance roundrobin
    server master1 192.168.0.1:6443 check
    server master2 192.168.0.2:6443 check
    server master3 192.168.0.3:6443 check`}
              </code>
            </pre>
          </section>

          <section>
            <h2>19. Gestion des volumes persistants</h2>
            <p>
              Kubernetes utilise des PersistentVolumes (PV) et
              PersistentVolumeClaims (PVC) pour gérer le stockage persistant.
            </p>
            <h3>Exemple :</h3>
            <pre>
              <code>
                {`apiVersion: v1
kind: PersistentVolume
metadata:
  name: my-pv
spec:
  capacity:
    storage: 10Gi
  accessModes:
    - ReadWriteOnce
  hostPath:
    path: "/mnt/data"`}
              </code>
            </pre>
          </section>

          <section>
            <h2>20. Planification des pods avec des contraintes</h2>
            <p>
              Vous pouvez utiliser des contraintes telles que les{" "}
              <code>nodeSelectors</code> ou les <code>taints</code> et{" "}
              <code>tolerations</code> pour contrôler où les Pods sont
              planifiés.
            </p>
            <h3>Exemple :</h3>
            <pre>
              <code>
                {`apiVersion: v1
kind: Pod
metadata:
  name: my-pod
spec:
  containers:
  - name: my-container
    image: nginx
  nodeSelector:
    disktype: ssd`}
              </code>
            </pre>
          </section>

          <section>
            <h2>21. Utilisation des ConfigMaps</h2>
            <p>
              Les ConfigMaps permettent de séparer la configuration des
              applications du code source.
            </p>
            <h3>Exemple :</h3>
            <pre>
              <code>
                {`apiVersion: v1
kind: ConfigMap
metadata:
  name: my-config
  namespace: default
data:
  key1: value1
  key2: value2`}
              </code>
            </pre>
          </section>

          <section>
            <h2>22. Gestion des Secrets</h2>
            <p>
              Les Secrets sont utilisés pour stocker des informations sensibles
              comme des mots de passe ou des clés d&apos;API.
            </p>
            <h3>Exemple :</h3>
            <pre>
              <code>
                {`apiVersion: v1
kind: Secret
metadata:
  name: my-secret
data:
  username: bXl1c2VybmFtZQ==
  password: bXlwYXNzd29yZA==`}
              </code>
            </pre>
          </section>

          <section>
            <h2>23. Mise à jour des applications</h2>
            <p>
              Kubernetes facilite les mises à jour des applications à
              l&apos;aide de <code>RollingUpdate</code> dans les Deployments.
            </p>
            <h3>Exemple :</h3>
            <pre>
              <code>
                {`apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-deployment
spec:
  replicas: 3
  strategy:
    type: RollingUpdate
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
      - name: my-container
        image: nginx:1.19`}
              </code>
            </pre>
          </section>

          <section>
            <h2>24. Configuration des probes de l&apos;état de santé</h2>
            <p>
              Utilisez les probes de <code>liveness</code> et{" "}
              <code>readiness</code> pour vérifier la santé des containers et
              les redémarrer si nécessaire.
            </p>
            <h3>Exemple :</h3>
            <pre>
              <code>
                {`apiVersion: v1
kind: Pod
metadata:
  name: my-pod
spec:
  containers:
  - name: my-container
    image: nginx
    livenessProbe:
      httpGet:
        path: /healthz
        port: 80
      initialDelaySeconds: 3
      periodSeconds: 3`}
              </code>
            </pre>
          </section>

          <section>
            <h2>25. Surveillance des logs des pods</h2>
            <p>
              Pour consulter les logs des pods en temps réel, utilisez la
              commande <code>kubectl logs</code>.
            </p>
            <h3>Exemple :</h3>
            <pre>
              <code>{`kubectl logs my-pod`}</code>
            </pre>
          </section>

          <section>
            <h2>26. Vérification de l&apos;état des nœuds</h2>
            <p>
              Pour vérifier l&apos;état des nœuds dans un cluster Kubernetes,
              utilisez la commande <code>kubectl get nodes</code>. Cela fournit
              des informations sur les rôles et le statut de chaque nœud.
            </p>
            <h3>Exemple :</h3>
            <pre>
              <code>{`kubectl get nodes`}</code>
            </pre>
          </section>

          <section>
            <h2>27. Utilisation des namespaces</h2>
            <p>
              Les namespaces sont utilisés pour isoler les ressources au sein
              d&apos;un cluster Kubernetes. Ils permettent de gérer les
              environnements comme développement, staging et production.
            </p>
            <h3>Exemple de création :</h3>
            <pre>
              <code>{`kubectl create namespace my-namespace`}</code>
            </pre>
          </section>

          <section>
            <h2>28. Définition des quotas de ressources</h2>
            <p>
              Kubernetes permet de définir des quotas de ressources dans un
              namespace pour limiter la consommation de CPU, mémoire et autres
              ressources.
            </p>
            <h3>Exemple :</h3>
            <pre>
              <code>
                {`apiVersion: v1
kind: ResourceQuota
metadata:
  name: resource-quota
  namespace: my-namespace
spec:
  hard:
    requests.cpu: "2"
    requests.memory: "1Gi"
    limits.cpu: "4"
    limits.memory: "2Gi"`}
              </code>
            </pre>
          </section>

          <section>
            <h2>29. Gestion des déploiements Stateful</h2>
            <p>
              Les StatefulSets sont utilisés pour déployer des applications
              nécessitant des identifiants stables ou un stockage persistant
              unique, comme des bases de données.
            </p>
            <h3>Exemple :</h3>
            <pre>
              <code>
                {`apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: my-statefulset
spec:
  serviceName: "my-service"
  replicas: 3
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
      - name: my-container
        image: my-image`}
              </code>
            </pre>
          </section>

          <section>
            <h2>30. Configuration des services</h2>
            <p>
              Les Services permettent d&apos;exposer les applications en
              définissant des règles de réseau entre les Pods et d&apos;autres
              entités, comme un LoadBalancer ou un ClusterIP.
            </p>
            <h3>Exemple :</h3>
            <pre>
              <code>
                {`apiVersion: v1
kind: Service
metadata:
  name: my-service
spec:
  selector:
    app: my-app
  ports:
    - protocol: TCP
      port: 80
      targetPort: 9376
  type: ClusterIP`}
              </code>
            </pre>
          </section>

          <section>
            <h2>31. Gestion des Jobs</h2>
            <p>
              Les Jobs sont utilisés pour exécuter des tâches uniques ou
              récurrentes. Ils assurent qu&apos;une tâche s&apos;exécute
              jusqu&apos;à son achèvement.
            </p>
            <h3>Exemple :</h3>
            <pre>
              <code>
                {`apiVersion: batch/v1
kind: Job
metadata:
  name: my-job
spec:
  template:
    spec:
      containers:
      - name: my-container
        image: my-image
        command: ["/bin/bash", "-c", "echo Hello Kubernetes"]
      restartPolicy: Never`}
              </code>
            </pre>
          </section>

          <section>
            <h2>32. Configuration des CronJobs</h2>
            <p>
              Les CronJobs planifient l&apos;exécution de tâches à intervalles
              réguliers en se basant sur la syntaxe Cron.
            </p>
            <h3>Exemple :</h3>
            <pre>
              <code>
                {`apiVersion: batch/v1
kind: CronJob
metadata:
  name: my-cronjob
spec:
  schedule: "*/5 * * * *"
  jobTemplate:
    spec:
      template:
        spec:
          containers:
          - name: my-container
            image: my-image
            command: ["/bin/bash", "-c", "echo Hello Kubernetes"]
          restartPolicy: Never`}
              </code>
            </pre>
          </section>

          <section>
            <h2>33. Configuration des politiques de sécurité des Pods</h2>
            <p>
              Kubernetes permet d&apos;utiliser des PodSecurityPolicies (PSP)
              pour définir des règles de sécurité.
            </p>
            <h3>Exemple :</h3>
            <pre>
              <code>
                {`apiVersion: policy/v1beta1
kind: PodSecurityPolicy
metadata:
  name: restricted
spec:
  privileged: false
  allowPrivilegeEscalation: false
  requiredDropCapabilities:
    - ALL
  runAsUser:
    rule: MustRunAsNonRoot`}
              </code>
            </pre>
          </section>

          <section>
            <h2>34. Configuration des tolerations</h2>
            <p>
              Les Tolerations permettent aux Pods d&apos;être planifiés sur des
              nœuds marqués par des taints spécifiques.
            </p>
            <h3>Exemple :</h3>
            <pre>
              <code>
                {`apiVersion: v1
kind: Pod
metadata:
  name: my-pod
spec:
  tolerations:
  - key: "key1"
    operator: "Equal"
    value: "value1"
    effect: "NoSchedule"`}
              </code>
            </pre>
          </section>

          <section>
            <h2>35. Gestion des ingress</h2>
            <p>
              Les objets Ingress permettent d&apos;exposer les services HTTP et
              HTTPS à l&apos;aide de règles de routage.
            </p>
            <h3>Exemple :</h3>
            <pre>
              <code>
                {`apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: my-ingress
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
          </section>

          <section>
            <h2>36. Surveillance des composants du cluster</h2>
            <p>
              Utilisez <code>kubectl get pods -n kube-system</code> pour
              vérifier les composants essentiels comme{" "}
              <code>kube-apiserver</code>, <code>kube-scheduler</code>, et{" "}
              <code>kube-controller-manager</code>.
            </p>
            <h3>Exemple :</h3>
            <pre>
              <code>{`kubectl get pods -n kube-system`}</code>
            </pre>
          </section>

          <section>
            <h2>37. Gestion des ConfigMaps avancés</h2>
            <p>
              Les ConfigMaps peuvent être montés comme fichiers dans des volumes
              pour une utilisation dynamique.
            </p>
            <h3>Exemple :</h3>
            <pre>
              <code>
                {`apiVersion: v1
kind: Pod
metadata:
  name: configmap-pod
spec:
  containers:
  - name: my-container
    image: nginx
    volumeMounts:
    - name: config-volume
      mountPath: /etc/config
  volumes:
  - name: config-volume
    configMap:
      name: my-config`}
              </code>
            </pre>
          </section>

          <section>
            <h2>38. Automatisation des tâches avec Kubernetes</h2>
            <p>
              Kubernetes supporte des solutions comme{" "}
              <code>Argo Workflows</code> pour orchestrer des tâches complexes
              et des workflows multi-étapes.
            </p>
            <h3>Installation d&apos;Argo Workflows :</h3>
            <pre>
              <code>
                {`kubectl apply -n argo -f https://raw.githubusercontent.com/argoproj/argo-workflows/stable/manifests/install.yaml`}
              </code>
            </pre>
          </section>

          <section>
            <h2>39. Gestion des secrets avancés</h2>
            <p>
              Les secrets peuvent être utilisés avec des outils comme{" "}
              <code>sealed-secrets</code> pour une gestion sécurisée des
              informations sensibles dans des environnements CI/CD.
            </p>
            <h3>Exemple de création de SealedSecret :</h3>
            <pre>
              <code>
                {`kubectl create secret generic my-secret --from-literal=key1=value1 --from-literal=key2=value2
kubeseal --cert my-cert.pem -o yaml < my-secret.yaml > my-sealedsecret.yaml`}
              </code>
            </pre>
          </section>

          <section>
            <h2>40. Gestion des noeuds drainés</h2>
            <p>
              Kubernetes permet de drainer un nœud avant sa maintenance pour
              éviter les interruptions.
            </p>
            <h3>Exemple :</h3>
            <pre>
              <code>{`kubectl drain <node-name> --ignore-daemonsets`}</code>
            </pre>
          </section>

          <section>
            <h2>41. Configuration des stratégies de mise à jour</h2>
            <p>
              Kubernetes permet de configurer des stratégies de mise à jour pour
              gérer le déploiement des nouvelles versions des applications.
              Utilisez <code>RollingUpdate</code> pour garantir une
              disponibilité continue.
            </p>
            <h3>Exemple :</h3>
            <pre>
              <code>
                {`apiVersion: apps/v1
kind: Deployment
metadata:
  name: rolling-update-example
spec:
  replicas: 3
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 1
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
      - name: my-container
        image: my-image:v2`}
              </code>
            </pre>
          </section>

          <section>
            <h2>42. Gestion des tolérances de ressources</h2>
            <p>
              Utilisez les tolérances de ressources pour optimiser la
              planification des pods sur les nœuds ayant des contraintes de
              ressources spécifiques.
            </p>
            <h3>Exemple :</h3>
            <pre>
              <code>
                {`apiVersion: v1
kind: Pod
metadata:
  name: resource-tolerant-pod
spec:
  containers:
  - name: my-container
    image: my-image
  tolerations:
  - key: "dedicated"
    operator: "Equal"
    value: "gpu"
    effect: "NoSchedule"`}
              </code>
            </pre>
          </section>

          <section>
            <h2>43. Surveillance des métriques</h2>
            <p>
              Kubernetes peut être configuré pour collecter des métriques des
              applications et des composants via Prometheus et exporter les
              données pour l&apos;analyse.
            </p>
            <h3>Installation de Prometheus :</h3>
            <pre>
              <code>
                {`kubectl apply -f https://raw.githubusercontent.com/prometheus-operator/prometheus-operator/main/bundle.yaml`}
              </code>
            </pre>
          </section>

          <section>
            <h2>44. Gestion des volumes dynamiques</h2>
            <p>
              Kubernetes prend en charge le provisionnement dynamique des
              volumes pour répondre aux besoins de stockage des pods.
            </p>
            <h3>Exemple :</h3>
            <pre>
              <code>
                {`apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: dynamic-storage
provisioner: kubernetes.io/aws-ebs
parameters:
  type: gp2`}
              </code>
            </pre>
          </section>

          <section>
            <h2>45. Configuration des quotas de ressources avancés</h2>
            <p>
              Les quotas avancés permettent de gérer les ressources partagées
              comme les CPU et la mémoire entre plusieurs namespaces.
            </p>
            <h3>Exemple :</h3>
            <pre>
              <code>
                {`apiVersion: v1
kind: ResourceQuota
metadata:
  name: advanced-quota
  namespace: my-namespace
spec:
  hard:
    requests.cpu: "4"
    requests.memory: "4Gi"
    limits.cpu: "8"
    limits.memory: "8Gi"`}
              </code>
            </pre>
          </section>

          <section>
            <h2>46. Gestion des pods perturbés</h2>
            <p>
              Utilisez des PodDisruptionBudgets (PDB) pour limiter les
              perturbations dans les applications critiques pendant les
              opérations de maintenance.
            </p>
            <h3>Exemple :</h3>
            <pre>
              <code>
                {`apiVersion: policy/v1
kind: PodDisruptionBudget
metadata:
  name: pdb-example
  namespace: default
spec:
  minAvailable: 2
  selector:
    matchLabels:
      app: my-app`}
              </code>
            </pre>
          </section>

          <section>
            <h2>47. Gestion des nœuds désactivés</h2>
            <p>
              Pour désactiver un nœud temporairement, utilisez la commande{" "}
              <code>kubectl cordon</code> pour empêcher la planification des
              nouveaux pods.
            </p>
            <h3>Exemple :</h3>
            <pre>
              <code>{`kubectl cordon <node-name>`}</code>
            </pre>
          </section>

          <section>
            <h2>48. Débogage des pods</h2>
            <p>
              Kubernetes propose des outils comme <code>kubectl exec</code> pour
              accéder à l&apos;intérieur d&apos;un conteneur pour le débogage.
            </p>
            <h3>Exemple :</h3>
            <pre>
              <code>{`kubectl exec -it <pod-name> -- /bin/bash`}</code>
            </pre>
          </section>

          <section>
            <h2>49. Monitoring avec Grafana</h2>
            <p>
              Intégrez Grafana avec Prometheus pour une visualisation avancée
              des métriques du cluster Kubernetes.
            </p>
            <h3>Exemple de déploiement :</h3>
            <pre>
              <code>
                {`kubectl apply -f https://raw.githubusercontent.com/grafana-operator/grafana-operator/main/deploy/grafana.yaml`}
              </code>
            </pre>
          </section>

          <section>
            <h2>50. Sauvegarde et restauration d&apos;etcd</h2>
            <p>
              Etcd stocke les données critiques du cluster. Sauvegardez et
              restaurez régulièrement pour prévenir les pertes de données.
            </p>
            <h3>Exemple de sauvegarde :</h3>
            <pre>
              <code>{`ETCDCTL_API=3 etcdctl snapshot save snapshot.db`}</code>
            </pre>
          </section>

          <section>
            <h2>51. Gestion des nœuds drainés</h2>
            <p>
              Drainer un nœud permet de déplacer les Pods vers d&apos;autres
              nœuds pour effectuer une maintenance en toute sécurité.
            </p>
            <h3>Exemple :</h3>
            <pre>
              <code>{`kubectl drain <node-name> --ignore-daemonsets`}</code>
            </pre>
          </section>

          <section>
            <h2>52. Installation de plugins CNI</h2>
            <p>
              Les plugins CNI (Container Network Interface) tels que Calico ou
              Flannel sont nécessaires pour la connectivité des Pods dans le
              cluster.
            </p>
            <h3>Exemple avec Calico :</h3>
            <pre>
              <code>
                {`kubectl apply -f https://docs.projectcalico.org/manifests/calico.yaml`}
              </code>
            </pre>
          </section>

          <section>
            <h2>53. Configuration des EndpointSlices</h2>
            <p>
              Les EndpointSlices améliorent l&apos;évolutivité des services en
              regroupant les points de terminaison par segments.
            </p>
            <h3>Exemple :</h3>
            <pre>
              <code>
                {`apiVersion: discovery.k8s.io/v1
kind: EndpointSlice
metadata:
  name: example-slice
subsets:
  - addresses:
      - ip: 10.0.0.1
    ports:
      - port: 80`}
              </code>
            </pre>
          </section>

          <section>
            <h2>54. Gestion des ClusterRoles</h2>
            <p>
              Les ClusterRoles définissent les permissions globales pour gérer
              les ressources Kubernetes.
            </p>
            <h3>Exemple :</h3>
            <pre>
              <code>
                {`apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: pod-reader
rules:
  - apiGroups: [""]
    resources: ["pods"]
    verbs: ["get", "list", "watch"]`}
              </code>
            </pre>
          </section>

          <section>
            <h2>55. Gestion des RBAC</h2>
            <p>
              Le contrôle d&apos;accès basé sur les rôles (RBAC) permet de gérer
              les autorisations des utilisateurs et des services dans
              Kubernetes.
            </p>
            <h3>Exemple de RoleBinding :</h3>
            <pre>
              <code>
                {`apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: read-pods
  namespace: default
subjects:
  - kind: User
    name: jane
    apiGroup: rbac.authorization.k8s.io
roleRef:
  kind: Role
  name: pod-reader
  apiGroup: rbac.authorization.k8s.io`}
              </code>
            </pre>
          </section>

          <section>
            <h2>56. Utilisation des labels et sélecteurs</h2>
            <p>
              Les labels permettent d&apos;organiser et de sélectionner des
              ressources Kubernetes pour des opérations spécifiques.
            </p>
            <h3>Exemple :</h3>
            <pre>
              <code>
                {`apiVersion: v1
kind: Pod
metadata:
  name: labeled-pod
  labels:
    app: my-app
    tier: backend`}
              </code>
            </pre>
          </section>

          <section>
            <h2>57. Déploiement des applications helm</h2>
            <p>
              Helm est un gestionnaire de paquets pour Kubernetes qui simplifie
              le déploiement et la gestion des applications.
            </p>
            <h3>Exemple :</h3>
            <pre>
              <code>
                {`helm repo add stable https://charts.helm.sh/stable
helm install my-release stable/mysql`}
              </code>
            </pre>
          </section>

          <section>
            <h2>58. Gestion des jobs parallèles</h2>
            <p>
              Kubernetes supporte l&apos;exécution de jobs parallèles pour
              traiter des charges de travail importantes.
            </p>
            <h3>Exemple :</h3>
            <pre>
              <code>
                {`apiVersion: batch/v1
kind: Job
metadata:
  name: parallel-job
spec:
  completions: 5
  parallelism: 2
  template:
    spec:
      containers:
      - name: worker
        image: busybox
        command: ["/bin/sh", "-c", "echo Hello Kubernetes"]
      restartPolicy: Never`}
              </code>
            </pre>
          </section>

          <section>
            <h2>59. Planification affinée avec les préférences</h2>
            <p>
              Utilisez <code>nodeAffinity</code> pour guider la planification
              des pods selon des préférences spécifiques.
            </p>
            <h3>Exemple :</h3>
            <pre>
              <code>
                {`apiVersion: v1
kind: Pod
metadata:
  name: affinity-pod
spec:
  affinity:
    nodeAffinity:
      requiredDuringSchedulingIgnoredDuringExecution:
        nodeSelectorTerms:
        - matchExpressions:
          - key: disktype
            operator: In
            values:
            - ssd`}
              </code>
            </pre>
          </section>

          <section>
            <h2>60. Gestion avancée des secrets</h2>
            <p>
              Intégrez des outils comme HashiCorp Vault pour gérer des secrets à
              grande échelle dans Kubernetes.
            </p>
            <h3>Exemple d&apos;intégration :</h3>
            <pre>
              <code>
                {`kubectl apply -f https://raw.githubusercontent.com/hashicorp/vault-helm/master/examples/vault-agent-injector/vault-agent-injector-example.yaml`}
              </code>
            </pre>
          </section>

          <section>
            <h2>61. Mise à jour des composants Kubernetes</h2>
            <p>
              Kubernetes permet la mise à jour des composants grâce à la
              commande <code>kubeadm upgrade</code>. Cela inclut les mises à
              jour des nœuds maîtres et des nœuds de travail.
            </p>
            <h3>Exemple :</h3>
            <pre>
              <code>{`kubeadm upgrade apply v1.26.0`}</code>
            </pre>
          </section>

          <section>
            <h2>62. Surveillance des logs système</h2>
            <p>
              Utilisez <code>journalctl</code> pour consulter les journaux des
              composants système tels que <code>kubelet</code> pour identifier
              les problèmes.
            </p>
            <h3>Exemple :</h3>
            <pre>
              <code>{`journalctl -u kubelet`}</code>
            </pre>
          </section>

          <section>
            <h2>63. Gestion des contrôleurs personnalisés</h2>
            <p>
              Les contrôleurs personnalisés permettent d&apos;étendre les
              fonctionnalités de Kubernetes en ajoutant des API spécifiques aux
              besoins de l&apos;application.
            </p>
            <h3>Exemple :</h3>
            <pre>
              <code>
                {`apiVersion: apiextensions.k8s.io/v1
kind: CustomResourceDefinition
metadata:
  name: myresources.mydomain.com
spec:
  group: mydomain.com
  names:
    kind: MyResource
    listKind: MyResourceList
    plural: myresources
    singular: myresource
  scope: Namespaced
  versions:
  - name: v1
    served: true
    storage: true`}
              </code>
            </pre>
          </section>

          <section>
            <h2>64. Utilisation des DaemonSets</h2>
            <p>
              Les DaemonSets permettent de déployer des pods sur chaque nœud du
              cluster. Cela est utile pour les services comme les collecteurs de
              logs ou les agents de monitoring.
            </p>
            <h3>Exemple :</h3>
            <pre>
              <code>
                {`apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: monitoring-agent
spec:
  selector:
    matchLabels:
      app: monitoring
  template:
    metadata:
      labels:
        app: monitoring
    spec:
      containers:
      - name: monitoring-agent
        image: monitoring-agent:latest`}
              </code>
            </pre>
          </section>

          <section>
            <h2>65. Configuration des LoadBalancers</h2>
            <p>
              Les Services de type LoadBalancer exposent des applications aux
              adresses IP externes en utilisant un équilibre de charge.
            </p>
            <h3>Exemple :</h3>
            <pre>
              <code>
                {`apiVersion: v1
kind: Service
metadata:
  name: my-loadbalancer
spec:
  type: LoadBalancer
  selector:
    app: my-app
  ports:
    - protocol: TCP
      port: 80
      targetPort: 9376`}
              </code>
            </pre>
          </section>

          <section>
            <h2>66. Configuration des PersistentVolumeClaims dynamiques</h2>
            <p>
              Kubernetes peut créer des volumes dynamiques en réponse à des
              demandes via des PersistentVolumeClaims (PVC).
            </p>
            <h3>Exemple :</h3>
            <pre>
              <code>
                {`apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: my-dynamic-pvc
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 5Gi
  storageClassName: standard`}
              </code>
            </pre>
          </section>

          <section>
            <h2>67. Débogage des conteneurs</h2>
            <p>
              Utilisez la commande <code>kubectl exec</code> pour exécuter des
              commandes à l&apos;intérieur d&apos;un conteneur en cours
              d&apos;exécution.
            </p>
            <h3>Exemple :</h3>
            <pre>
              <code>{`kubectl exec -it my-pod -- /bin/bash`}</code>
            </pre>
          </section>

          <section>
            <h2>68. Gestion des nœuds non prêts</h2>
            <p>
              Kubernetes marque les nœuds comme &quot;NotReady&quot;
              lorsqu&apos;ils ne répondent pas ou ont des problèmes. Utilisez{" "}
              <code>kubectl describe node</code> pour diagnostiquer le problème.
            </p>
            <h3>Exemple :</h3>
            <pre>
              <code>{`kubectl describe node <node-name>`}</code>
            </pre>
          </section>

          <section>
            <h2>69. Gestion des NetworkPolicies</h2>
            <p>
              Les NetworkPolicies contrôlent la connectivité réseau entre les
              Pods et les Services dans un cluster.
            </p>
            <h3>Exemple :</h3>
            <pre>
              <code>
                {`apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-specific-traffic
spec:
  podSelector:
    matchLabels:
      role: frontend
  policyTypes:
  - Ingress
  ingress:
  - from:
    - podSelector:
        matchLabels:
          role: backend`}
              </code>
            </pre>
          </section>

          <section>
            <h2>70. Configuration des liveness et readiness probes</h2>
            <p>
              Les probes permettent de surveiller la santé des conteneurs et de
              redémarrer automatiquement les instances défaillantes.
            </p>
            <h3>Exemple :</h3>
            <pre>
              <code>
                {`apiVersion: v1
kind: Pod
metadata:
  name: health-check-pod
spec:
  containers:
  - name: my-container
    image: my-image
    livenessProbe:
      httpGet:
        path: /healthz
        port: 8080
      initialDelaySeconds: 3
      periodSeconds: 3`}
              </code>
            </pre>
          </section>

          <section>
            <h2>71. Utilisation des StatefulSets</h2>
            <p>
              Les StatefulSets permettent de gérer des applications nécessitant
              des identifiants stables ou un stockage persistant unique. Ils
              sont adaptés pour des bases de données et d&apos;autres systèmes
              nécessitant des ordres spécifiques de démarrage et d&apos;arrêt.
            </p>
            <h3>Exemple :</h3>
            <pre>
              <code>
                {`apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: my-stateful-app
spec:
  serviceName: "my-service"
  replicas: 3
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
      - name: my-container
        image: my-image
        volumeMounts:
        - name: my-volume
          mountPath: /data
  volumeClaimTemplates:
  - metadata:
      name: my-volume
    spec:
      accessModes: ["ReadWriteOnce"]
      resources:
        requests:
          storage: 1Gi`}
              </code>
            </pre>
          </section>

          <section>
            <h2>72. Surveillance des métriques avec Metrics Server</h2>
            <p>
              Le Metrics Server collecte des métriques d&apos;utilisation des
              ressources (CPU, mémoire) pour les pods et les nœuds, ce qui est
              utile pour l&apos;autoscaling et le monitoring.
            </p>
            <h3>Installation :</h3>
            <pre>
              <code>
                {`kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml`}
              </code>
            </pre>
          </section>

          <section>
            <h2>73. Autoscaling des déploiements</h2>
            <p>
              Kubernetes permet d&apos;ajuster automatiquement le nombre de
              réplicas en fonction de l&apos;utilisation des ressources avec le
              Horizontal Pod Autoscaler (HPA).
            </p>
            <h3>Exemple :</h3>
            <pre>
              <code>
                {`kubectl autoscale deployment my-deployment --cpu-percent=50 --min=1 --max=10`}
              </code>
            </pre>
          </section>

          <section>
            <h2>74. Configuration de l&apos;autoscaling vertical</h2>
            <p>
              L&apos;autoscaling vertical ajuste automatiquement les ressources
              des pods (CPU, mémoire) selon leur consommation.
            </p>
            <h3>Installation de l&apos;autoscaler :</h3>
            <pre>
              <code>
                {`kubectl apply -f https://github.com/kubernetes/autoscaler/releases/latest/download/vertical-pod-autoscaler.yaml`}
              </code>
            </pre>
          </section>

          <section>
            <h2>75. Gestion des quotas de ressources par namespace</h2>
            <p>
              Les quotas de ressources permettent de limiter l&apos;utilisation
              des ressources dans un namespace, évitant qu&apos;un seul
              utilisateur consomme toutes les ressources.
            </p>
            <h3>Exemple :</h3>
            <pre>
              <code>
                {`apiVersion: v1
kind: ResourceQuota
metadata:
  name: namespace-quota
  namespace: dev
spec:
  hard:
    pods: "10"
    requests.cpu: "2"
    requests.memory: "4Gi"
    limits.cpu: "4"
    limits.memory: "8Gi"`}
              </code>
            </pre>
          </section>

          <section>
            <h2>76. Gestion des secrets pour les applications</h2>
            <p>
              Les Secrets permettent de stocker des informations sensibles,
              telles que des mots de passe ou des clés d&apos;API, en toute
              sécurité.
            </p>
            <h3>Exemple :</h3>
            <pre>
              <code>
                {`apiVersion: v1
kind: Secret
metadata:
  name: app-secret
data:
  username: dXNlcm5hbWU=
  password: cGFzc3dvcmQ=`}
              </code>
            </pre>
          </section>

          <section>
            <h2>
              77. Utilisation des ConfigMaps pour les configurations dynamiques
            </h2>
            <p>
              Les ConfigMaps permettent de séparer la configuration de
              l&apos;application du code. Ils peuvent être montés comme des
              fichiers ou injectés comme des variables d&apos;environnement.
            </p>
            <h3>Exemple :</h3>
            <pre>
              <code>
                {`apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
data:
  LOG_LEVEL: "debug"
  MAX_RETRIES: "5"`}
              </code>
            </pre>
          </section>

          <section>
            <h2>78. Intégration des solutions CI/CD</h2>
            <p>
              Intégrez Kubernetes avec des pipelines CI/CD comme Jenkins ou
              GitLab pour automatiser le déploiement des applications.
            </p>
            <h3>Exemple d&apos;intégration Jenkins :</h3>
            <pre>
              <code>
                {`kubectl apply -f https://raw.githubusercontent.com/jenkinsci/helm-charts/main/charts/jenkins/templates/jenkins-master-deployment.yaml`}
              </code>
            </pre>
          </section>

          <section>
            <h2>79. Configuration avancée des Ingress</h2>
            <p>
              Les Ingress contrôlent l&apos;accès HTTP et HTTPS aux services
              Kubernetes et permettent d&apos;implémenter des règles complexes
              de routage.
            </p>
            <h3>Exemple :</h3>
            <pre>
              <code>
                {`apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: advanced-ingress
spec:
  rules:
  - host: example.com
    http:
      paths:
      - path: /app
        pathType: Prefix
        backend:
          service:
            name: app-service
            port:
              number: 80`}
              </code>
            </pre>
          </section>

          <section>
            <h2>80. Surveillance des performances avec Grafana</h2>
            <p>
              Grafana offre une visualisation puissante pour surveiller les
              performances du cluster Kubernetes, lorsqu&apos;il est intégré
              avec Prometheus.
            </p>
            <h3>Exemple de tableau de bord :</h3>
            <pre>
              <code>
                {`kubectl apply -f https://raw.githubusercontent.com/grafana/helm-charts/main/charts/grafana/dashboards.yaml`}
              </code>
            </pre>
          </section>

          <section>
            <h2>81. Gestion des snapshots de volumes</h2>
            <p>
              Les snapshots permettent de capturer l&apos;état d&apos;un volume
              à un instant donné pour la sauvegarde ou la restauration.
            </p>
            <h3>Exemple :</h3>
            <pre>
              <code>
                {`apiVersion: snapshot.storage.k8s.io/v1
kind: VolumeSnapshot
metadata:
  name: my-volume-snapshot
spec:
  volumeSnapshotClassName: csi-hostpath-snapclass
  source:
    persistentVolumeClaimName: my-pvc`}
              </code>
            </pre>
          </section>

          <section>
            <h2>82. Configuration des pods multi-conteneurs</h2>
            <p>
              Kubernetes permet de configurer des pods contenant plusieurs
              conteneurs qui partagent les ressources comme le réseau et les
              volumes.
            </p>
            <h3>Exemple :</h3>
            <pre>
              <code>
                {`apiVersion: v1
kind: Pod
metadata:
  name: multi-container-pod
spec:
  containers:
  - name: app-container
    image: my-app-image
  - name: sidecar-container
    image: my-sidecar-image`}
              </code>
            </pre>
          </section>

          <section>
            <h2>83. Utilisation des Pod Affinity et Anti-Affinity</h2>
            <p>
              Les règles d&apos;affinité et d&apos;anti-affinité permettent de
              contrôler la planification des pods en fonction de leur proximité
              avec d&apos;autres pods.
            </p>
            <h3>Exemple :</h3>
            <pre>
              <code>
                {`apiVersion: v1
kind: Pod
metadata:
  name: affinity-pod
spec:
  affinity:
    podAffinity:
      requiredDuringSchedulingIgnoredDuringExecution:
        - labelSelector:
            matchLabels:
              app: frontend
          topologyKey: "kubernetes.io/hostname"`}
              </code>
            </pre>
          </section>

          <section>
            <h2>84. Configuration des politiques de ressources</h2>
            <p>
              Définissez des limites et des demandes de ressources pour les pods
              afin de garantir des performances prévisibles.
            </p>
            <h3>Exemple :</h3>
            <pre>
              <code>
                {`apiVersion: v1
kind: Pod
metadata:
  name: resource-pod
spec:
  containers:
  - name: my-container
    image: my-image
    resources:
      requests:
        memory: "64Mi"
        cpu: "250m"
      limits:
        memory: "128Mi"
        cpu: "500m"`}
              </code>
            </pre>
          </section>

          <section>
            <h2>85. Déploiement des applications via Helm Charts</h2>
            <p>
              Les Helm Charts facilitent le déploiement d&apos;applications
              complexes grâce à des templates configurables.
            </p>
            <h3>Exemple :</h3>
            <pre>
              <code>
                {`helm repo add bitnami https://charts.bitnami.com/bitnami
helm install my-release bitnami/nginx`}
              </code>
            </pre>
          </section>

          <section>
            <h2>86. Monitoring avancé avec Prometheus</h2>
            <p>
              Intégrez Prometheus pour surveiller en détail les métriques du
              cluster Kubernetes.
            </p>
            <h3>Exemple :</h3>
            <pre>
              <code>
                {`kubectl apply -f https://prometheus.io/prometheus-operator.yaml`}
              </code>
            </pre>
          </section>

          <section>
            <h2>87. Configuration des StatefulSets avec services</h2>
            <p>
              Associez des StatefulSets à des Services Headless pour fournir un
              DNS stable aux pods.
            </p>
            <h3>Exemple :</h3>
            <pre>
              <code>
                {`apiVersion: v1
kind: Service
metadata:
  name: headless-service
spec:
  clusterIP: None
  selector:
    app: my-app`}
              </code>
            </pre>
          </section>

          <section>
            <h2>88. Mise en place des Custom Resource Definitions (CRD)</h2>
            <p>
              Les CRD permettent d&apos;étendre les API Kubernetes pour inclure
              des types de ressources personnalisées.
            </p>
            <h3>Exemple :</h3>
            <pre>
              <code>
                {`apiVersion: apiextensions.k8s.io/v1
kind: CustomResourceDefinition
metadata:
  name: myresources.mydomain.com
spec:
  group: mydomain.com
  names:
    kind: MyResource
    listKind: MyResourceList
    plural: myresources
    singular: myresource
  scope: Namespaced
  versions:
  - name: v1
    served: true
    storage: true`}
              </code>
            </pre>
          </section>

          <section>
            <h2>89. Déploiement de workloads Serverless</h2>
            <p>
              Kubernetes peut intégrer des solutions serverless comme Knative
              pour exécuter des fonctions à la demande.
            </p>
            <h3>Exemple d&apos;installation :</h3>
            <pre>
              <code>
                {`kubectl apply -f https://github.com/knative/serving/releases/download/v0.25.0/serving-crds.yaml`}
              </code>
            </pre>
          </section>

          <section>
            <h2>90. Gestion des Backup et Restore avec Velero</h2>
            <p>
              Velero est un outil de sauvegarde et de restauration des clusters
              Kubernetes, idéal pour les migrations et la reprise après
              sinistre.
            </p>
            <h3>Exemple d&apos;installation :</h3>
            <pre>
              <code>
                {`kubectl apply -f https://github.com/vmware-tanzu/velero/releases/latest/download/velero.yaml`}
              </code>
            </pre>
          </section>

          <section>
            <h2>91. Utilisation des tolerations et taints</h2>
            <p>
              Les tolerations permettent de configurer quels pods peuvent être
              planifiés sur des nœuds marqués par des taints. Cela est utile
              pour isoler certaines charges de travail.
            </p>
            <h3>Exemple :</h3>
            <pre>
              <code>
                {`apiVersion: v1
kind: Pod
metadata:
  name: tolerant-pod
spec:
  tolerations:
  - key: "key1"
    operator: "Equal"
    value: "value1"
    effect: "NoSchedule"`}
              </code>
            </pre>
          </section>

          <section>
            <h2>92. Gestion des ConfigMaps comme fichiers de configuration</h2>
            <p>
              Les ConfigMaps peuvent être montés en tant que fichiers pour une
              configuration dynamique des applications.
            </p>
            <h3>Exemple :</h3>
            <pre>
              <code>
                {`apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
  namespace: default
data:
  config.json: |
    {
      "logLevel": "debug",
      "maxRetries": 5
    }`}
              </code>
            </pre>
          </section>

          <section>
            <h2>93. Utilisation de Kubernetes Dashboard</h2>
            <p>
              Kubernetes Dashboard est une interface utilisateur graphique qui
              permet de surveiller et gérer un cluster.
            </p>
            <h3>Exemple d&apos;installation :</h3>
            <pre>
              <code>
                {`kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.6.0/aio/deploy/recommended.yaml`}
              </code>
            </pre>
          </section>

          <section>
            <h2>94. Configuration des certificats TLS</h2>
            <p>
              Kubernetes utilise des certificats TLS pour sécuriser les
              communications entre les composants du cluster.
            </p>
            <h3>Exemple :</h3>
            <pre>
              <code>
                {`openssl genrsa -out ca.key 2048
openssl req -x509 -new -nodes -key ca.key -subj "/CN=kubernetes" -days 10000 -out ca.crt`}
              </code>
            </pre>
          </section>

          <section>
            <h2>95. Utilisation de kube-bench pour l&apos;audit de sécurité</h2>
            <p>
              Kube-bench est un outil open-source qui vérifie si le cluster
              Kubernetes est conforme aux recommandations CIS.
            </p>
            <h3>Exemple d&apos;exécution :</h3>
            <pre>
              <code>
                {`kube-bench --config-dir /path/to/config --config /path/to/config.yaml`}
              </code>
            </pre>
          </section>

          <section>
            <h2>96. Gestion des logs avec Fluentd</h2>
            <p>
              Fluentd est un outil populaire pour collecter, agréger et exporter
              des logs dans Kubernetes.
            </p>
            <h3>Exemple de déploiement :</h3>
            <pre>
              <code>
                {`kubectl apply -f https://raw.githubusercontent.com/fluent/fluentd-kubernetes-daemonset/master/fluentd-daemonset-elasticsearch-rbac.yaml`}
              </code>
            </pre>
          </section>

          <section>
            <h2>97. Gestion des secrets avec SealedSecrets</h2>
            <p>
              SealedSecrets permet de chiffrer les secrets Kubernetes pour les
              stocker en toute sécurité dans des dépôts git.
            </p>
            <h3>Exemple de création :</h3>
            <pre>
              <code>
                {`kubectl create secret generic my-secret --from-literal=password=my-password
kubeseal --format=yaml < my-secret.yaml > my-sealedsecret.yaml`}
              </code>
            </pre>
          </section>

          <section>
            <h2>98. Planification des pods sur des nœuds spécifiques</h2>
            <p>
              Utilisez les <code>nodeSelector</code> ou{" "}
              <code>nodeAffinity</code> pour contraindre la planification des
              pods sur des nœuds spécifiques.
            </p>
            <h3>Exemple :</h3>
            <pre>
              <code>
                {`apiVersion: v1
kind: Pod
metadata:
  name: node-specific-pod
spec:
  nodeSelector:
    disktype: ssd`}
              </code>
            </pre>
          </section>

          <section>
            <h2>99. Gestion des quotas de charge de travail</h2>
            <p>
              Configurez des quotas pour limiter le nombre maximum de ressources
              utilisées dans un namespace.
            </p>
            <h3>Exemple :</h3>
            <pre>
              <code>
                {`apiVersion: v1
kind: ResourceQuota
metadata:
  name: workload-quota
  namespace: production
spec:
  hard:
    pods: "50"
    services: "10"`}
              </code>
            </pre>
          </section>

          <section>
            <h2>100. Gestion avancée des déploiements canary</h2>
            <p>
              Les déploiements canary permettent de tester une nouvelle version
              d&apos;une application avec un petit sous-ensemble
              d&apos;utilisateurs avant de l&apos;étendre.
            </p>
            <h3>Exemple avec Istio :</h3>
            <pre>
              <code>
                {`apiVersion: networking.istio.io/v1beta1
kind: VirtualService
metadata:
  name: canary-deployment
spec:
  hosts:
  - my-app.example.com
  http:
  - route:
    - destination:
        host: my-app
        subset: v2
      weight: 10
    - destination:
        host: my-app
        subset: v1
      weight: 90`}
              </code>
            </pre>
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

export default Kubernetes_InstallationConfiguration;
