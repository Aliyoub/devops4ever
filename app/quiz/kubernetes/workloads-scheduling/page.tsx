"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../../../store/store";
import QuizPage from "./quizPage";
import { questions } from "./questionsWorkloadsScheduling";

const Kubernetes_WorkloadsScheduling: React.FC = () => {
  const parent = useSelector((state: RootState) => state.parent.value);
  const child = useSelector((state: RootState) => state.child.value);
  const grandChild = useSelector((state: RootState) => state.grandChild.value);

  //   KUBERNETES Installation Configuration
  if (
    parent === "Kubernetes" &&
    child === "Workloads and Scheduling" &&
    grandChild === "Quiz"
  )
    return <QuizPage quizQuestions={questions} />;
  else if (
    parent === "Kubernetes" &&
    child === "Workloads and Scheduling" &&
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
            <h1>Kubernetes Workloads and Scheduling</h1>
            <section>
              <h2>1. Politique de redémarrage par défaut pour les pods</h2>
              <p>
                La politique de redémarrage par défaut pour les pods dans
                Kubernetes est <strong>"Always"</strong>. Cela signifie que le
                pod sera redémarré automatiquement s&apos;il échoue ou est
                supprimé.
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
      restartPolicy: Always`}
                </code>
              </pre>
            </section>

            <section>
              <h2>
                2. Contrôleur responsable de la gestion des réplicas d&apos;un
                déploiement
              </h2>
              <p>
                Le contrôleur <strong>ReplicaSet</strong> est chargé de garantir
                qu&apos;un nombre spécifié de réplicas de pods est en cours
                d&apos;exécution à tout moment. Les déploiements utilisent les
                ReplicaSets pour gérer les pods.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: apps/v1
kind: Deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
      - name: mycontainer
        image: myimage`}
                </code>
              </pre>
            </section>

            <section>
              <h2>3. Meilleur type de workload pour les tâches batch</h2>
              <p>
                Le type de workload le mieux adapté pour exécuter une tâche
                batch est un <strong>Job</strong>. Les Jobs sont conçus pour
                exécuter des tâches qui doivent se terminer après leur
                exécution.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: batch/v1
kind: Job
spec:
  template:
    spec:
      containers:
      - name: batch-task
        image: myimage
      restartPolicy: Never`}
                </code>
              </pre>
            </section>

            <section>
              <h2>4. Utilité de "nodeSelector" dans un spec de pod</h2>
              <p>
                Le champ <strong>nodeSelector</strong> est utilisé pour
                contraindre un pod à s&apos;exécuter uniquement sur les nœuds
                ayant des étiquettes spécifiques.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: v1
kind: Pod
spec:
  nodeSelector:
    disktype: ssd
  containers:
    - name: mycontainer
      image: myimage`}
                </code>
              </pre>
            </section>

            <section>
              <h2>5. Mise à jour d&apos;un déploiement sans interruption</h2>
              <p>
                Pour mettre à jour un déploiement en cours sans interruption,
                vous pouvez utiliser la commande <code>kubectl apply</code> pour
                appliquer le manifeste du déploiement. Kubernetes effectue une
                mise à jour continue (rolling update) pour appliquer les
                changements.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>{`kubectl apply -f deployment.yaml`}</code>
              </pre>
            </section>

            <section>
              <h2>6. Différence clé entre Deployment et StatefulSet</h2>
              <p>
                La principale différence est que les{" "}
                <strong>StatefulSets</strong> garantissent l&apos;ordre et la
                persistance des pods, tandis que les{" "}
                <strong>Deployments</strong> sont mieux adaptés aux workloads
                stateless.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: myapp
spec:
  serviceName: "my-service"
  replicas: 3
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
      - name: mycontainer
        image: myimage`}
                </code>
              </pre>
            </section>

            <section>
              <h2>7. Fonctionnement des DaemonSets</h2>
              <p>
                Un <strong>DaemonSet</strong> garantit qu&apos;une copie
                d&apos;un pod s&apos;exécute sur tous (ou certains) nœuds du
                cluster, souvent utilisé pour des tâches système comme la
                journalisation ou la surveillance.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: logging-agent
spec:
  selector:
    matchLabels:
      name: logging-agent
  template:
    metadata:
      labels:
        name: logging-agent
    spec:
      containers:
      - name: logging-agent
        image: logimage`}
                </code>
              </pre>
            </section>

            <section>
              <h2>8. Comportement des pods avec RestartPolicy "Never"</h2>
              <p>
                Si un pod avec une RestartPolicy définie à{" "}
                <strong>"Never"</strong> échoue, le pod restera dans l&apos;état
                "Failed" et ne sera pas redémarré automatiquement.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: v1
kind: Pod
spec:
  containers:
    - name: test-container
      image: testimage
      restartPolicy: Never`}
                </code>
              </pre>
            </section>

            <section>
              <h2>9. Ordre de création des pods dans un StatefulSet</h2>
              <p>
                L&apos;ordre de création et de suppression des pods dans un{" "}
                <strong>StatefulSet</strong> est contrôlé par la politique{" "}
                <code>podManagementPolicy</code>. Par défaut, il est réglé sur
                "OrderedReady".
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: apps/v1
kind: StatefulSet
spec:
  podManagementPolicy: OrderedReady`}
                </code>
              </pre>
            </section>

            <section>
              <h2>10. Rôle des "tolerations" dans la planification</h2>
              <p>
                Les <strong>tolerations</strong> permettent aux pods de tolérer
                des conditions spécifiques sur les nœuds (marqués avec des
                taints) pour contrôler leur placement.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: v1
kind: Pod
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
              <h2>
                11. Objet Kubernetes garantissant une identité réseau unique
              </h2>
              <p>
                Les <strong>StatefulSets</strong> sont utilisés pour des
                applications nécessitant une identité réseau unique pour chaque
                pod, un stockage persistant et un déploiement ordonné.
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
  template:
    spec:
      containers:
      - name: app-container
        image: appimage`}
                </code>
              </pre>
            </section>

            <section>
              <h2>
                12. Rôle des conteneurs d&apos;initialisation (initContainers)
              </h2>
              <p>
                Les <strong>initContainers</strong> exécutent des tâches de
                pré-démarrage avant que les conteneurs principaux du pod ne
                commencent. Ils sont utiles pour initialiser des données ou
                configurer l&apos;environnement.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: v1
kind: Pod
spec:
  initContainers:
    - name: init-myservice
      image: busybox
      command: ["sh", "-c", "echo Initializing..."]
  containers:
    - name: myservice
      image: myimage`}
                </code>
              </pre>
            </section>

            <section>
              <h2>13. Placement spécifique avec NodeAffinity</h2>
              <p>
                Les règles <strong>NodeAffinity</strong> permettent de spécifier
                des préférences avancées sur le placement des pods basées sur
                des étiquettes des nœuds.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: v1
kind: Pod
spec:
  affinity:
    nodeAffinity:
      requiredDuringSchedulingIgnoredDuringExecution:
        nodeSelectorTerms:
        - matchExpressions:
          - key: "disktype"
            operator: "In"
            values:
            - "ssd"`}
                </code>
              </pre>
            </section>

            <section>
              <h2>
                14. Échelle de déploiement par défaut avec
                HorizontalPodAutoscaler
              </h2>
              <p>
                Par défaut, Kubernetes prend en charge l&apos;échelle
                horizontale (scaling) basée sur l&apos;utilisation des
                ressources, comme le CPU ou la mémoire, via l&apos;
                <strong>Horizontal Pod Autoscaler</strong>.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: autoscaling/v1
kind: HorizontalPodAutoscaler
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: my-deployment
  minReplicas: 1
  maxReplicas: 10
  targetCPUUtilizationPercentage: 50`}
                </code>
              </pre>
            </section>

            <section>
              <h2>
                15. Gestion automatique des pods supprimés dans un DaemonSet
              </h2>
              <p>
                Si un pod dans un <strong>DaemonSet</strong> est supprimé
                manuellement, le contrôleur DaemonSet recrée automatiquement le
                pod sur le même nœud.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>{`kubectl delete pod <pod-name>`}</code>
              </pre>
            </section>

            <section>
              <h2>16. Workload adapté aux tâches périodiques</h2>
              <p>
                Le workload <strong>CronJob</strong> est utilisé pour exécuter
                des tâches périodiques à des intervalles de temps spécifiques,
                similaire à une tâche cron dans Linux.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: batch/v1
kind: CronJob
metadata:
  name: daily-job
spec:
  schedule: "0 0 * * *"
  jobTemplate:
    spec:
      template:
        spec:
          containers:
          - name: daily-task
            image: taskimage
          restartPolicy: OnFailure`}
                </code>
              </pre>
            </section>

            <section>
              <h2>17. Gestion des pods échoués avec ReadinessProbe</h2>
              <p>
                Si une <strong>ReadinessProbe</strong> échoue, le pod est marqué
                comme "NotReady" et retiré des points de terminaison du service,
                empêchant le trafic de lui être envoyé.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: v1
kind: Pod
metadata:
  name: pod-with-readiness-probe
spec:
  containers:
  - name: main-container
    image: mainimage
    readinessProbe:
      httpGet:
        path: /health
        port: 8080`}
                </code>
              </pre>
            </section>

            <section>
              <h2>
                18. Contrôle des interruptions avec Pod Disruption Budget (PDB)
              </h2>
              <p>
                Un <strong>Pod Disruption Budget</strong> (PDB) limite le nombre
                maximum de pods pouvant être interrompus simultanément lors
                d&apos;opérations de maintenance ou de défaillances volontaires.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: policy/v1
kind: PodDisruptionBudget
metadata:
  name: pdb-example
spec:
  maxUnavailable: 1
  selector:
    matchLabels:
      app: myapp`}
                </code>
              </pre>
            </section>

            <section>
              <h2>19. Placement des pods avec TopologySpreadConstraints</h2>
              <p>
                Les <strong>TopologySpreadConstraints</strong> garantissent que
                les pods sont répartis uniformément sur les domaines de
                défaillance comme les zones ou les régions, améliorant ainsi la
                tolérance aux pannes.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: v1
kind: Pod
spec:
  topologySpreadConstraints:
  - maxSkew: 1
    topologyKey: "zone"
    whenUnsatisfiable: DoNotSchedule
    labelSelector:
      matchLabels:
        app: myapp`}
                </code>
              </pre>
            </section>

            <section>
              <h2>20. Fonction des PreemptionPolicy</h2>
              <p>
                Les <strong>PreemptionPolicy</strong> permettent à des pods
                prioritaires de préempter ou d&apos;évincer des pods à priorité
                inférieure pour libérer des ressources dans le cluster.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: scheduling.k8s.io/v1
kind: PriorityClass
metadata:
  name: high-priority
value: 1000000
preemptionPolicy: PreemptLowerPriority`}
                </code>
              </pre>
            </section>
            <section>
              <h2>
                21. Objectif des "taints" dans la planification Kubernetes
              </h2>
              <p>
                Les <strong>taints</strong> empêchent les pods d&apos;être
                programmés sur des nœuds spécifiques sauf si ces pods ont une
                tolérance correspondante. Cela permet de contrôler plus
                précisément où les workloads sont exécutés.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`kubectl taint nodes nodename key=value:NoSchedule`}
                </code>
              </pre>
            </section>

            <section>
              <h2>
                22. Utilisation des DaemonSets pour les workloads spécifiques
              </h2>
              <p>
                Un <strong>DaemonSet</strong> est idéal pour exécuter un pod sur
                tous les nœuds du cluster, souvent pour des tâches comme la
                collecte de journaux ou la surveillance.
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
        image: monitoring-image`}
                </code>
              </pre>
            </section>

            <section>
              <h2>23. Influence de "priorityClassName" sur la planification</h2>
              <p>
                Le champ <strong>priorityClassName</strong> attribue une
                priorité au pod, influençant son ordre de planification lorsque
                les ressources sont limitées. Les pods à haute priorité sont
                planifiés en premier.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: v1
kind: Pod
spec:
  priorityClassName: high-priority
  containers:
    - name: critical-task
      image: critical-image`}
                </code>
              </pre>
            </section>

            <section>
              <h2>24. Rôle des Pod Disruption Budgets (PDBs)</h2>
              <p>
                Les <strong>PDBs</strong> (Pod Disruption Budgets) définissent
                le nombre minimal de pods qui doivent rester disponibles lors de
                perturbations volontaires, comme des mises à jour ou des
                maintenances.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: policy/v1
kind: PodDisruptionBudget
metadata:
  name: myapp-pdb
spec:
  minAvailable: 2
  selector:
    matchLabels:
      app: myapp`}
                </code>
              </pre>
            </section>

            <section>
              <h2>25. Utilité des "topologySpreadConstraints"</h2>
              <p>
                Les <strong>topologySpreadConstraints</strong> permettent de
                répartir les pods uniformément à travers des domaines de
                défaillance (zones, régions, etc.) pour améliorer la tolérance
                aux pannes.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: v1
kind: Pod
spec:
  topologySpreadConstraints:
    - maxSkew: 1
      topologyKey: "topology.kubernetes.io/zone"
      whenUnsatisfiable: DoNotSchedule
      labelSelector:
        matchLabels:
          app: myapp`}
                </code>
              </pre>
            </section>

            <section>
              <h2>26. Fonction des ReadinessGates</h2>
              <p>
                Les <strong>ReadinessGates</strong> ajoutent des conditions
                supplémentaires pour déterminer si un pod est prêt à recevoir du
                trafic, en complément des ReadinessProbes.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: v1
kind: Pod
spec:
  readinessGates:
    - conditionType: "my-custom-condition"
  containers:
    - name: app-container
      image: app-image`}
                </code>
              </pre>
            </section>

            <section>
              <h2>27. Différence entre Job et CronJob</h2>
              <p>
                Un <strong>Job</strong> exécute une tâche unique, tandis
                qu&apos;un <strong>CronJob</strong> programme des Jobs à des
                intervalles spécifiques, comme un cron sous Linux.
              </p>
              <h3>Exemple de CronJob :</h3>
              <pre>
                <code>
                  {`apiVersion: batch/v1
kind: CronJob
metadata:
  name: my-cronjob
spec:
  schedule: "0 * * * *"
  jobTemplate:
    spec:
      template:
        spec:
          containers:
          - name: cron-task
            image: cron-image
          restartPolicy: OnFailure`}
                </code>
              </pre>
            </section>

            <section>
              <h2>
                28. Comportement par défaut d&apos;un StatefulSet lors de
                l&apos;échec d&apos;un pod
              </h2>
              <p>
                Lorsqu&apos;un pod d&apos;un <strong>StatefulSet</strong>{" "}
                échoue, le contrôleur redémarre ce pod tout en conservant son
                identité et son ordre dans le StatefulSet.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: my-statefulset
spec:
  replicas: 3
  selector:
    matchLabels:
      app: stateful-app
  template:
    metadata:
      labels:
        app: stateful-app
    spec:
      containers:
      - name: stateful-container
        image: stateful-image`}
                </code>
              </pre>
            </section>

            <section>
              <h2>29. Utilité du "serviceAccountName"</h2>
              <p>
                Le champ <strong>serviceAccountName</strong> associe un pod à un
                compte de service, déterminant les autorisations du pod pour
                accéder aux ressources Kubernetes.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: v1
kind: Pod
spec:
  serviceAccountName: my-service-account
  containers:
    - name: app-container
      image: app-image`}
                </code>
              </pre>
            </section>

            <section>
              <h2>
                30. Effet de la mise à l&apos;échelle d&apos;un Deployment à 0
                répliques
              </h2>
              <p>
                Lorsqu&apos;un Deployment est mis à l&apos;échelle à 0
                répliques, tous les pods qu&apos;il gère sont terminés, mais le
                Deployment lui-même reste intact pour un redéploiement futur.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`kubectl scale deployment my-deployment --replicas=0`}
                </code>
              </pre>
            </section>

            <section>
              <h2>31. Fonctionnalité de révision des déploiements</h2>
              <p>
                La <strong>revision history</strong> dans un Deployment permet
                de conserver un historique des révisions, facilitant ainsi un
                rollback à une version précédente en cas de problème.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>{`kubectl rollout undo deployment/my-deployment`}</code>
              </pre>
            </section>

            <section>
              <h2>
                32. Stratégie par défaut pour les mises à jour des StatefulSets
              </h2>
              <p>
                Par défaut, les <strong>StatefulSets</strong> utilisent la
                stratégie "<code>OnDelete</code>", ce qui signifie que les pods
                ne seront mis à jour que s&apos;ils sont manuellement supprimés.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: apps/v1
kind: StatefulSet
spec:
  updateStrategy:
    type: OnDelete`}
                </code>
              </pre>
            </section>

            <section>
              <h2>33. Limitation des ressources par namespace</h2>
              <p>
                Les <strong>Resource Quotas</strong> peuvent être utilisées pour
                limiter le nombre de ressources, comme les pods, au sein
                d&apos;un namespace, garantissant une répartition équitable.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: v1
kind: ResourceQuota
metadata:
  name: pod-quota
  namespace: mynamespace
spec:
  hard:
    pods: "10"`}
                </code>
              </pre>
            </section>

            <section>
              <h2>34. Probes et redémarrage des conteneurs</h2>
              <p>
                Les <strong>Liveness Probes</strong> permettent de vérifier si
                un conteneur est toujours en vie. En cas d&apos;échec, le
                conteneur est redémarré par le kubelet.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: v1
kind: Pod
spec:
  containers:
    - name: app-container
      image: app-image
      livenessProbe:
        httpGet:
          path: /healthz
          port: 8080`}
                </code>
              </pre>
            </section>

            <section>
              <h2>35. Comportement des pods dépassant leur limite mémoire</h2>
              <p>
                Si un pod dépasse sa limite de mémoire définie, le conteneur est
                terminé par Kubernetes pour éviter des conflits de ressources.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: v1
kind: Pod
spec:
  containers:
    - name: app-container
      image: app-image
      resources:
        limits:
          memory: "128Mi"`}
                </code>
              </pre>
            </section>

            <section>
              <h2>36. Fonctionnement du Horizontal Pod Autoscaler</h2>
              <p>
                L&apos;<strong>Horizontal Pod Autoscaler</strong> ajuste
                dynamiquement le nombre de réplicas d&apos;un Deployment en
                fonction des métriques telles que l&apos;utilisation CPU ou
                mémoire.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: autoscaling/v1
kind: HorizontalPodAutoscaler
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: my-deployment
  minReplicas: 2
  maxReplicas: 10
  targetCPUUtilizationPercentage: 80`}
                </code>
              </pre>
            </section>

            <section>
              <h2>37. Utilité des règles AntiAffinity</h2>
              <p>
                Les règles <strong>AntiAffinity</strong> garantissent que les
                pods sont déployés sur des nœuds différents, améliorant la
                tolérance aux pannes et la répartition de la charge.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: v1
kind: Pod
spec:
  affinity:
    podAntiAffinity:
      requiredDuringSchedulingIgnoredDuringExecution:
        - labelSelector:
            matchExpressions:
              - key: app
                operator: In
                values:
                  - myapp
          topologyKey: "kubernetes.io/hostname"`}
                </code>
              </pre>
            </section>

            <section>
              <h2>38. Utilisation des Jobs pour des tâches uniques</h2>
              <p>
                Un <strong>Job</strong> est utilisé pour exécuter des tâches
                uniques et garantit leur exécution complète, même en cas de
                panne de nœud.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: batch/v1
kind: Job
metadata:
  name: data-processing-job
spec:
  template:
    spec:
      containers:
      - name: processor
        image: processor-image
      restartPolicy: OnFailure`}
                </code>
              </pre>
            </section>

            <section>
              <h2>39. Rôle des taints et tolerations</h2>
              <p>
                Les <strong>taints</strong> repoussent les pods des nœuds sauf
                si ces derniers ont des <strong>tolerations</strong>{" "}
                correspondantes, permettant une planification contrôlée.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: v1
kind: Pod
spec:
  tolerations:
    - key: "dedicated"
      operator: "Equal"
      value: "batch"
      effect: "NoSchedule"`}
                </code>
              </pre>
            </section>

            <section>
              <h2>40. Effet d&apos;une Readiness Probe échouée</h2>
              <p>
                Si une <strong>Readiness Probe</strong> échoue, le pod est
                marqué comme "NotReady" et retiré des endpoints des services,
                garantissant qu&apos;il ne reçoit pas de trafic jusqu&apos;à ce
                qu&apos;il soit prêt.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: v1
kind: Pod
spec:
  containers:
    - name: app-container
      image: app-image
      readinessProbe:
        httpGet:
          path: /readyz
          port: 8080`}
                </code>
              </pre>
            </section>
            <section>
              <h2>41. Contrôleur pour les applications persistantes</h2>
              <p>
                Les <strong>StatefulSets</strong> sont conçus pour gérer les
                applications nécessitant une identité réseau unique pour chaque
                pod et un stockage persistant.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: persistent-app
spec:
  serviceName: "persistent-service"
  replicas: 3
  selector:
    matchLabels:
      app: persistent
  template:
    metadata:
      labels:
        app: persistent
    spec:
      containers:
      - name: persistent-container
        image: persistent-image`}
                </code>
              </pre>
            </section>

            <section>
              <h2>42. Rôle de "nodeSelector" dans un pod spec</h2>
              <p>
                Le <strong>nodeSelector</strong> permet de spécifier que le pod
                doit être exécuté uniquement sur des nœuds ayant certaines
                étiquettes, limitant ainsi le placement.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: v1
kind: Pod
spec:
  nodeSelector:
    disktype: ssd
  containers:
    - name: selective-container
      image: selective-image`}
                </code>
              </pre>
            </section>

            <section>
              <h2>43. Effet d&apos;un scale-up sur un Deployment</h2>
              <p>
                Lorsqu&apos;un Deployment est augmenté, de nouveaux pods sont
                créés et programmés sur des nœuds ayant les ressources
                nécessaires pour répondre aux nouvelles demandes.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`kubectl scale deployment my-deployment --replicas=5`}
                </code>
              </pre>
            </section>

            <section>
              <h2>44. Rôle des règles d&apos;affinité</h2>
              <p>
                Les règles d&apos;<strong>affinité</strong> permettent de
                contrôler où les pods doivent être programmés ou non en fonction
                des labels des nœuds.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: v1
kind: Pod
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
              <h2>45. Avantages du Horizontal Pod Autoscaler</h2>
              <p>
                L&apos;<strong>Horizontal Pod Autoscaler</strong> ajuste
                dynamiquement le nombre de pods en fonction des besoins en
                ressources, assurant une meilleure gestion des charges de
                travail.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: autoscaling/v1
kind: HorizontalPodAutoscaler
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: scalable-app
  minReplicas: 3
  maxReplicas: 15
  targetCPUUtilizationPercentage: 70`}
                </code>
              </pre>
            </section>

            <section>
              <h2>46. Utilisation des CronJobs pour les tâches périodiques</h2>
              <p>
                Les <strong>CronJobs</strong> permettent de programmer et
                exécuter des tâches périodiques à des intervalles définis,
                similaires aux tâches cron sous Linux.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: batch/v1
kind: CronJob
metadata:
  name: periodic-task
spec:
  schedule: "0 * * * *"
  jobTemplate:
    spec:
      template:
        spec:
          containers:
          - name: cron-container
            image: cron-image
          restartPolicy: OnFailure`}
                </code>
              </pre>
            </section>

            <section>
              <h2>47. Utilité du RestartPolicy</h2>
              <p>
                Le champ <strong>RestartPolicy</strong> définit les conditions
                dans lesquelles les conteneurs dans un pod sont redémarrés,
                comme <code>Always</code>, <code>OnFailure</code>, ou{" "}
                <code>Never</code>.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: v1
kind: Pod
spec:
  containers:
    - name: controlled-container
      image: controlled-image
  restartPolicy: OnFailure`}
                </code>
              </pre>
            </section>

            <section>
              <h2>48. Composant responsable de la planification des pods</h2>
              <p>
                Le <strong>kube-scheduler</strong> est le composant de
                Kubernetes chargé d&apos;assigner les pods aux nœuds en fonction
                de la disponibilité des ressources et des contraintes de
                planification.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`kubectl get events --namespace kube-system | grep scheduler`}
                </code>
              </pre>
            </section>

            <section>
              <h2>
                49. Stratégie par défaut lors d&apos;une mise à jour continue
              </h2>
              <p>
                La stratégie de mise à jour continue (rolling update) garantit
                que de nouveaux pods sont créés avant la suppression des
                anciens, minimisant ainsi les interruptions.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: apps/v1
kind: Deployment
spec:
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 1`}
                </code>
              </pre>
            </section>

            <section>
              <h2>50. Rôle des Pod Disruption Budgets</h2>
              <p>
                Les <strong>Pod Disruption Budgets (PDB)</strong> définissent le
                nombre maximal de pods qui peuvent être perturbés lors
                d&apos;interventions planifiées, garantissant une disponibilité
                minimale.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: policy/v1
kind: PodDisruptionBudget
metadata:
  name: pdb-example
spec:
  maxUnavailable: 1
  selector:
    matchLabels:
      app: myapp`}
                </code>
              </pre>
            </section>
            <section>
              <h2>
                51. Politique par défaut pour la suppression des pods lors
                d&apos;un scale-down
              </h2>
              <p>
                Par défaut, Kubernetes termine les pods les plus récents
                ("Newest") en premier lors d&apos;un événement de scale-down.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`kubectl scale deployment my-deployment --replicas=3`}
                </code>
              </pre>
            </section>

            <section>
              <h2>
                52. Meilleur contrôleur pour exécuter un pod sur chaque nœud
              </h2>
              <p>
                Le <strong>DaemonSet</strong> est le contrôleur idéal pour
                garantir qu&apos;un pod s&apos;exécute sur chaque nœud du
                cluster.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: daemonset-example
spec:
  selector:
    matchLabels:
      app: daemon-app
  template:
    metadata:
      labels:
        app: daemon-app
    spec:
      containers:
      - name: daemon-container
        image: daemon-image`}
                </code>
              </pre>
            </section>

            <section>
              <h2>53. Objectif des PriorityClasses</h2>
              <p>
                Les <strong>PriorityClasses</strong> définissent la priorité
                relative des pods, influençant leur planification et leur
                éviction lors de la contention des ressources.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: scheduling.k8s.io/v1
kind: PriorityClass
metadata:
  name: high-priority
value: 1000
globalDefault: false
description: "Priority for critical workloads"`}
                </code>
              </pre>
            </section>

            <section>
              <h2>54. Prévention de la surcharge des nœuds</h2>
              <p>
                Kubernetes utilise les{" "}
                <strong>Resource Requests et Limits</strong> pour s&apos;assurer
                que les pods sont programmés uniquement sur des nœuds ayant
                suffisamment de ressources disponibles.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: v1
kind: Pod
spec:
  containers:
    - name: resource-controlled-container
      image: resource-image
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
              <h2>55. Configuration DNS personnalisée pour les pods</h2>
              <p>
                Le champ <strong>dnsPolicy</strong> dans la spécification
                d&apos;un pod permet de configurer des politiques DNS
                personnalisées pour le pod.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: v1
kind: Pod
spec:
  dnsPolicy: ClusterFirst
  containers:
    - name: dns-container
      image: dns-image`}
                </code>
              </pre>
            </section>

            <section>
              <h2>56. Champ TerminationGracePeriodSeconds</h2>
              <p>
                Le champ <strong>TerminationGracePeriodSeconds</strong> contrôle
                le temps d&apos;attente de Kubernetes avant de forcer
                l&apos;arrêt d&apos;un pod lors de sa suppression.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: v1
kind: Pod
spec:
  terminationGracePeriodSeconds: 30
  containers:
    - name: graceful-container
      image: graceful-image`}
                </code>
              </pre>
            </section>

            <section>
              <h2>
                57. Planification des pods selon des critères personnalisés
              </h2>
              <p>
                La <strong>Node Affinity</strong> permet de planifier les pods
                sur des nœuds spécifiques en fonction de labels définis.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: v1
kind: Pod
spec:
  affinity:
    nodeAffinity:
      requiredDuringSchedulingIgnoredDuringExecution:
        nodeSelectorTerms:
        - matchExpressions:
          - key: high-memory
            operator: In
            values:
            - true`}
                </code>
              </pre>
            </section>

            <section>
              <h2>58. Comportement d&apos;un Job si le nœud échoue</h2>
              <p>
                Si un nœud hébergeant un pod d&apos;un <strong>Job</strong>{" "}
                échoue, le contrôleur du Job reprogramme le pod sur un autre
                nœud pour assurer l&apos;exécution complète.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: batch/v1
kind: Job
metadata:
  name: resilient-job
spec:
  template:
    spec:
      containers:
      - name: task-container
        image: task-image
      restartPolicy: OnFailure`}
                </code>
              </pre>
            </section>

            <section>
              <h2>59. Processus de préemption dans Kubernetes</h2>
              <p>
                La <strong>préemption</strong> permet aux pods à haute priorité
                d&apos;évincer des pods à faible priorité pour libérer des
                ressources lors de la contention.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: scheduling.k8s.io/v1
kind: PriorityClass
metadata:
  name: preemptive-priority
value: 100000
preemptionPolicy: PreemptLowerPriority`}
                </code>
              </pre>
            </section>

            <section>
              <h2>60. Fonction des taints et tolerations</h2>
              <p>
                Les <strong>taints</strong> appliquées aux nœuds repoussent les
                pods, sauf si ces derniers ont des <strong>tolerations</strong>{" "}
                correspondantes, permettant un contrôle précis de la
                planification.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: v1
kind: Pod
spec:
  tolerations:
    - key: "dedicated"
      operator: "Equal"
      value: "batch"
      effect: "NoSchedule"`}
                </code>
              </pre>
            </section>
            <section>
              <h2>
                61. Commande pour afficher les détails de planification
                d&apos;un pod
              </h2>
              <p>
                La commande <code>kubectl describe pod</code> permet
                d&apos;afficher des informations détaillées sur un pod, y
                compris ses événements de planification.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>{`kubectl describe pod my-pod`}</code>
              </pre>
            </section>

            <section>
              <h2>
                62. Comportement par défaut des StatefulSets en cas d&apos;échec
                d&apos;un pod
              </h2>
              <p>
                Si un pod géré par un <strong>StatefulSet</strong> échoue, il
                est automatiquement recréé tout en conservant son identité
                unique.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: stateful-app
spec:
  replicas: 3
  serviceName: "stateful-service"
  template:
    metadata:
      labels:
        app: stateful-app
    spec:
      containers:
      - name: app-container
        image: stateful-image`}
                </code>
              </pre>
            </section>

            <section>
              <h2>63. Ordre de création des pods dans un StatefulSet</h2>
              <p>
                Les <strong>ordinal indexes</strong> dans un{" "}
                <strong>StatefulSet</strong> déterminent l&apos;ordre de
                création et de suppression des pods, garantissant une séquence
                précise.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: ordered-stateful
spec:
  serviceName: "stateful-service"
  replicas: 3
  template:
    metadata:
      labels:
        app: ordered-app
    spec:
      containers:
      - name: ordered-container
        image: ordered-image`}
                </code>
              </pre>
            </section>

            <section>
              <h2>64. Processus d&apos;éviction dans Kubernetes</h2>
              <p>
                L&apos;<strong>éviction</strong> se produit lorsque Kubernetes
                supprime des pods d&apos;un nœud pour libérer des ressources,
                souvent lors de la maintenance ou de la contention.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>{`kubectl drain node-name --ignore-daemonsets`}</code>
              </pre>
            </section>

            <section>
              <h2>65. Mise à jour d&apos;un DaemonSet</h2>
              <p>
                Lorsqu&apos;un <strong>DaemonSet</strong> est mis à jour, ses
                pods sont recréés un par un sur chaque nœud, garantissant la
                continuité du service.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>{`kubectl rollout restart daemonset/my-daemonset`}</code>
              </pre>
            </section>

            <section>
              <h2>66. Champ BackoffLimit dans un Job</h2>
              <p>
                Le champ <strong>BackoffLimit</strong> contrôle le nombre
                maximal de tentatives avant qu&apos;un Job ne soit considéré
                comme échoué.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: batch/v1
kind: Job
metadata:
  name: job-with-backoff
spec:
  backoffLimit: 4
  template:
    spec:
      containers:
      - name: job-container
        image: job-image
      restartPolicy: OnFailure`}
                </code>
              </pre>
            </section>

            <section>
              <h2>67. Objet pour exposer un pod au trafic externe</h2>
              <p>
                Un <strong>Service</strong> est utilisé pour exposer un pod ou
                un ensemble de pods au trafic externe, en créant un point
                d&apos;accès réseau stable.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: v1
kind: Service
metadata:
  name: external-service
spec:
  type: LoadBalancer
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
                68. Stratégie pour planifier un pod sur un nœud spécifique
              </h2>
              <p>
                La <strong>Node Affinity</strong> permet de spécifier qu&apos;un
                pod doit être planifié sur un nœud avec des étiquettes
                spécifiques.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: v1
kind: Pod
spec:
  affinity:
    nodeAffinity:
      requiredDuringSchedulingIgnoredDuringExecution:
        nodeSelectorTerms:
        - matchExpressions:
          - key: "dedicated"
            operator: "In"
            values:
            - "high-cpu"`}
                </code>
              </pre>
            </section>

            <section>
              <h2>69. Effet d&apos;un échec de la Liveness Probe</h2>
              <p>
                Si une <strong>Liveness Probe</strong> échoue, le kubelet
                redémarre automatiquement le conteneur, garantissant sa
                disponibilité continue.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: v1
kind: Pod
spec:
  containers:
    - name: app-container
      image: app-image
      livenessProbe:
        httpGet:
          path: /healthz
          port: 8080
        initialDelaySeconds: 3
        periodSeconds: 10`}
                </code>
              </pre>
            </section>

            <section>
              <h2>70. Fonction du Horizontal Pod Autoscaler (HPA)</h2>
              <p>
                Le <strong>Horizontal Pod Autoscaler</strong> ajuste
                dynamiquement le nombre de pods d&apos;un Deployment en fonction
                des métriques de ressources comme l&apos;utilisation CPU.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: autoscaling/v1
kind: HorizontalPodAutoscaler
metadata:
  name: hpa-example
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: scalable-app
  minReplicas: 2
  maxReplicas: 10
  targetCPUUtilizationPercentage: 75`}
                </code>
              </pre>
            </section>
            <section>
              <h2>71. Stratégie de mise à jour continue dans un Deployment</h2>
              <p>
                La stratégie de mise à jour continue (rolling update) permet de
                remplacer progressivement les anciens pods par de nouveaux pods,
                garantissant ainsi zéro temps d&apos;arrêt.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: apps/v1
kind: Deployment
metadata:
  name: rolling-update-example
spec:
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 1`}
                </code>
              </pre>
            </section>

            <section>
              <h2>72. Planification des pods par défaut dans Kubernetes</h2>
              <p>
                Par défaut, Kubernetes planifie les pods sur les nœuds en
                fonction des ressources disponibles (CPU, mémoire) et des
                contraintes définies.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>{`kubectl describe node node-name`}</code>
              </pre>
            </section>

            <section>
              <h2>73. Bénéfice principal des ReplicaSets</h2>
              <p>
                Les <strong>ReplicaSets</strong> assurent qu&apos;un nombre
                spécifié de réplicas d&apos;un pod est toujours en cours
                d&apos;exécution, même en cas de défaillance.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: apps/v1
kind: ReplicaSet
metadata:
  name: my-replicaset
spec:
  replicas: 3
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
      - name: app-container
        image: app-image`}
                </code>
              </pre>
            </section>

            <section>
              <h2>74. Composant responsable de la planification des pods</h2>
              <p>
                Le <strong>kube-scheduler</strong> est responsable de
                l&apos;assignation des pods aux nœuds en fonction de contraintes
                de ressources et de politiques définies.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`kubectl get events --namespace kube-system | grep scheduler`}
                </code>
              </pre>
            </section>

            <section>
              <h2>
                75. Règles pour empêcher la planification sur des nœuds
                spécifiques
              </h2>
              <p>
                Les règles d&apos;<strong>affinité</strong> ou d&apos;
                <strong>anti-affinité</strong> permettent de limiter la
                planification des pods sur des nœuds spécifiques en fonction de
                leurs étiquettes.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: v1
kind: Pod
spec:
  affinity:
    nodeAffinity:
      requiredDuringSchedulingIgnoredDuringExecution:
        nodeSelectorTerms:
        - matchExpressions:
          - key: "key1"
            operator: "NotIn"
            values:
            - "value1"`}
                </code>
              </pre>
            </section>

            <section>
              <h2>76. Utilisation des CronJobs pour les tâches planifiées</h2>
              <p>
                Les <strong>CronJobs</strong> permettent de planifier
                l&apos;exécution de tâches à intervalles réguliers, similaires
                aux jobs cron sous Linux.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: batch/v1
kind: CronJob
metadata:
  name: periodic-task
spec:
  schedule: "*/5 * * * *"
  jobTemplate:
    spec:
      template:
        spec:
          containers:
          - name: cron-container
            image: cron-image
          restartPolicy: OnFailure`}
                </code>
              </pre>
            </section>

            <section>
              <h2>77. Différence entre Job et Deployment</h2>
              <p>
                Un <strong>Job</strong> exécute une tâche unique et finit après
                son exécution, tandis qu&apos;un <strong>Deployment</strong>{" "}
                garantit que des pods sont toujours actifs pour des workloads
                continus.
              </p>
              <h3>Exemple de Job :</h3>
              <pre>
                <code>
                  {`apiVersion: batch/v1
kind: Job
metadata:
  name: one-time-task
spec:
  template:
    spec:
      containers:
      - name: job-container
        image: job-image
      restartPolicy: OnFailure`}
                </code>
              </pre>
            </section>

            <section>
              <h2>
                78. Comportement d&apos;un StatefulSet en cas de panne de nœud
              </h2>
              <p>
                Si un nœud hébergeant un pod d&apos;un{" "}
                <strong>StatefulSet</strong> échoue, le pod est recréé sur un
                autre nœud tout en conservant son identité et ses propriétés
                uniques.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>{`kubectl describe statefulset my-statefulset`}</code>
              </pre>
            </section>

            <section>
              <h2>79. Contrôleur des Jobs</h2>
              <p>
                Le <strong>Job Controller</strong> gère les Jobs en Kubernetes,
                s&apos;assurant que les tâches configurées s&apos;exécutent
                jusqu&apos;à leur complétion.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>{`kubectl get jobs`}</code>
              </pre>
            </section>

            <section>
              <h2>80. Politique de redémarrage par défaut des Deployments</h2>
              <p>
                Les pods gérés par des <strong>Deployments</strong> utilisent la
                politique de redémarrage <code>Always</code> par défaut,
                garantissant leur disponibilité continue en cas de panne.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: apps/v1
kind: Deployment
metadata:
  name: deployment-example
spec:
  replicas: 3
  template:
    spec:
      containers:
      - name: app-container
        image: app-image
      restartPolicy: Always`}
                </code>
              </pre>
            </section>
            <section>
              <h2>
                81. Comportement des ReplicaSets lorsque des pods sont supprimés
              </h2>
              <p>
                Si un pod géré par un <strong>ReplicaSet</strong> est supprimé,
                le ReplicaSet crée un nouveau pod pour maintenir le nombre
                spécifié de réplicas.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>{`kubectl delete pod my-pod`}</code>
              </pre>
            </section>

            <section>
              <h2>82. Fonctionnalité Anti-Affinity pour les pods</h2>
              <p>
                La règle <strong>Pod Anti-Affinity</strong> garantit qu&apos;un
                pod ne sera pas programmé sur le même nœud qu&apos;un autre pod
                spécifique, améliorant la répartition.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: v1
kind: Pod
spec:
  affinity:
    podAntiAffinity:
      requiredDuringSchedulingIgnoredDuringExecution:
        - labelSelector:
            matchLabels:
              app: myapp
          topologyKey: "kubernetes.io/hostname"`}
                </code>
              </pre>
            </section>

            <section>
              <h2>83. Commande pour évincer manuellement un pod</h2>
              <p>
                La commande <strong>kubectl drain</strong> permet d&apos;évincer
                tous les pods d&apos;un nœud, préparant ce dernier à une
                maintenance.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>{`kubectl drain node-name --ignore-daemonsets`}</code>
              </pre>
            </section>

            <section>
              <h2>84. Définition des ressources requises par un pod</h2>
              <p>
                Le champ <strong>resources.requests</strong> dans le spec
                d&apos;un pod spécifie la quantité minimale de CPU et de mémoire
                requise pour le pod.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: v1
kind: Pod
spec:
  containers:
    - name: resource-container
      image: resource-image
      resources:
        requests:
          memory: "64Mi"
          cpu: "250m"`}
                </code>
              </pre>
            </section>

            <section>
              <h2>85. Différence entre StatefulSet et Deployment</h2>
              <p>
                Les <strong>StatefulSets</strong> conservent l&apos;identité des
                pods (nom, IP, etc.) tandis que les <strong>Deployments</strong>{" "}
                gèrent des workloads stateless sans contrainte d&apos;identité.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: stateful-app
spec:
  serviceName: "stateful-service"
  replicas: 3
  template:
    metadata:
      labels:
        app: stateful-app
    spec:
      containers:
      - name: stateful-container
        image: stateful-image`}
                </code>
              </pre>
            </section>

            <section>
              <h2>86. Annotation nécessaire pour tolérer un taint</h2>
              <p>
                Les pods doivent inclure une annotation{" "}
                <strong>tolerations</strong> pour être planifiés sur des nœuds
                ayant des taints spécifiques.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: v1
kind: Pod
spec:
  tolerations:
    - key: "dedicated"
      operator: "Equal"
      value: "batch"
      effect: "NoSchedule"`}
                </code>
              </pre>
            </section>

            <section>
              <h2>87. Effet d&apos;une Readiness Probe échouée</h2>
              <p>
                Si une <strong>Readiness Probe</strong> échoue, le pod est
                retiré des endpoints de service et cesse de recevoir du trafic
                jusqu&apos;à ce qu&apos;il devienne prêt.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: v1
kind: Pod
spec:
  containers:
    - name: app-container
      image: app-image
      readinessProbe:
        httpGet:
          path: /readyz
          port: 8080`}
                </code>
              </pre>
            </section>

            <section>
              <h2>88. Objectif des PriorityClasses</h2>
              <p>
                Les <strong>PriorityClasses</strong> influencent l&apos;ordre de
                planification des pods, particulièrement lors de la contention
                des ressources.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: scheduling.k8s.io/v1
kind: PriorityClass
metadata:
  name: high-priority
value: 1000
globalDefault: false
description: "Priority for critical workloads"`}
                </code>
              </pre>
            </section>

            <section>
              <h2>89. Méthode de vérification de la santé des pods</h2>
              <p>
                Kubernetes utilise des <strong>Liveness</strong> et{" "}
                <strong>Readiness Probes</strong> pour vérifier si un pod est
                vivant et prêt à recevoir du trafic.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: v1
kind: Pod
spec:
  containers:
    - name: app-container
      image: app-image
      livenessProbe:
        httpGet:
          path: /healthz
          port: 8080
      readinessProbe:
        httpGet:
          path: /readyz
          port: 8080`}
                </code>
              </pre>
            </section>

            <section>
              <h2>90. Description des DaemonSets</h2>
              <p>
                Les <strong>DaemonSets</strong> garantissent qu&apos;un pod est
                exécuté sur tous les nœuds (ou certains) d&apos;un cluster,
                souvent pour des tâches comme la collecte de journaux ou la
                surveillance.
              </p>
              <h3>Exemple :</h3>
              <pre>
                <code>
                  {`apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: daemonset-example
spec:
  selector:
    matchLabels:
      app: daemon-app
  template:
    metadata:
      labels:
        app: daemon-app
    spec:
      containers:
      - name: daemon-container
        image: daemon-image`}
                </code>
              </pre>
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

export default Kubernetes_WorkloadsScheduling;
