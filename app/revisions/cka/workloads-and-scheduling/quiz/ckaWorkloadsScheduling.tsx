export const questions = [
  {
      question: "Which resource defines the number of pod replicas in Kubernetes?",
      options: [
          "a) StatefulSet",
          "b) ReplicaSet",
          "c) Job",
          "d) Pod"
      ],
      answer: "b) ReplicaSet"
  },
  {
      question: "What is the main purpose of a Deployment in Kubernetes?",
      options: [
          "a) To manage a single pod lifecycle",
          "b) To control resource limits of a node",
          "c) To declare a pod template for scalable applications",
          "d) To create jobs that run only once"
      ],
      answer: "c) To declare a pod template for scalable applications"
  },
  {
      question: "Which field in a Deployment configuration file sets the number of replicas?",
      options: [
          "a) spec.template.count",
          "b) spec.scale.replicas",
          "c) spec.replicas",
          "d) spec.size"
      ],
      answer: "c) spec.replicas"
  },
  {
      question: "In a StatefulSet, what unique feature is guaranteed for each pod?",
      options: [
          "a) Unique volume mounts",
          "b) Unique network identity",
          "c) Multiple replicas",
          "d) Service discovery across namespaces"
      ],
      answer: "b) Unique network identity"
  },
  {
      question: "What happens when a pod in a ReplicaSet is deleted?",
      options: [
          "a) The pod is permanently removed",
          "b) A new pod is created to maintain the replica count",
          "c) The remaining pods are restarted",
          "d) The ReplicaSet itself is deleted"
      ],
      answer: "b) A new pod is created to maintain the replica count"
  },
  {
      question: "Which object should you use for batch processing tasks in Kubernetes?",
      options: [
          "a) DaemonSet",
          "b) Job",
          "c) ReplicaSet",
          "d) Deployment"
      ],
      answer: "b) Job"
  },
  {
      question: "What is a primary difference between a StatefulSet and a Deployment?",
      options: [
          "a) StatefulSets support persistent storage, Deployments do not",
          "b) Deployments guarantee unique identities for pods",
          "c) Deployments allow scaling, StatefulSets do not",
          "d) StatefulSets ensure ordered, predictable pod management"
      ],
      answer: "d) StatefulSets ensure ordered, predictable pod management"
  },
  {
      question: "Which workload resource is typically used to deploy a long-running background process on every node?",
      options: [
          "a) Job",
          "b) Deployment",
          "c) DaemonSet",
          "d) StatefulSet"
      ],
      answer: "c) DaemonSet"
  },
  {
      question: "What command is used to scale a Deployment in Kubernetes?",
      options: [
          "a) kubectl scale deployment <deployment-name>",
          "b) kubectl set replicas <deployment-name>",
          "c) kubectl increase deployment <deployment-name>",
          "d) kubectl update replicas <deployment-name>"
      ],
      answer: "a) kubectl scale deployment <deployment-name>"
  },
  {
      question: "Which Kubernetes controller is responsible for creating pods to reach the desired number of replicas?",
      options: [
          "a) StatefulSet Controller",
          "b) Deployment Controller",
          "c) ReplicaSet Controller",
          "d) Node Controller"
      ],
      answer: "c) ReplicaSet Controller"
  },
  {
      question: "How does a Job in Kubernetes differ from a Deployment?",
      options: [
          "a) A Job runs a task to completion, while a Deployment manages continuous applications",
          "b) A Deployment can only create a single pod",
          "c) Jobs support persistent storage",
          "d) Deployments are for batch processing tasks"
      ],
      answer: "a) A Job runs a task to completion, while a Deployment manages continuous applications"
  },
  {
      question: "Which Kubernetes workload is best suited for running system monitoring tasks across all nodes?",
      options: [
          "a) ReplicaSet",
          "b) Deployment",
          "c) Job",
          "d) DaemonSet"
      ],
      answer: "d) DaemonSet"
  },
  {
      question: "What is the default behavior of a Deployment if a container image is updated?",
      options: [
          "a) It triggers a rolling update",
          "b) It deletes the old pods",
          "c) It restarts the entire cluster",
          "d) It increases the replica count temporarily"
      ],
      answer: "a) It triggers a rolling update"
  },
  {
      question: "Which parameter specifies the duration to wait for pods to terminate during a rolling update?",
      options: [
          "a) maxUnavailability",
          "b) gracePeriod",
          "c) terminationGracePeriodSeconds",
          "d) updateDelay"
      ],
      answer: "c) terminationGracePeriodSeconds"
  },
  {
      question: "Which property in a Deployment allows you to define the maximum number of unavailable pods during an update?",
      options: [
          "a) minAvailable",
          "b) maxSurge",
          "c) maxUnavailable",
          "d) unavailableReplicas"
      ],
      answer: "c) maxUnavailable"
  },
  {
      question: "Which Kubernetes object would you use for a task that needs to run to completion a specific number of times?",
      options: [
          "a) Job",
          "b) CronJob",
          "c) DaemonSet",
          "d) StatefulSet"
      ],
      answer: "a) Job"
  },
  {
      question: "What is the primary use case for a CronJob in Kubernetes?",
      options: [
          "a) To create a deployment at scheduled times",
          "b) To schedule recurring tasks at specific times",
          "c) To handle one-off background tasks",
          "d) To manage the lifecycle of a stateful service"
      ],
      answer: "b) To schedule recurring tasks at specific times"
  },
  {
      question: "What parameter controls the frequency of a CronJob in Kubernetes?",
      options: [
          "a) schedule",
          "b) frequency",
          "c) cronFrequency",
          "d) executionTime"
      ],
      answer: "a) schedule"
  },
  {
      question: "In a DaemonSet, when a new node is added to the cluster, what happens?",
      options: [
          "a) The DaemonSet does nothing",
          "b) The DaemonSet deploys a pod to the new node",
          "c) The DaemonSet scales down existing pods",
          "d) The node replaces an existing pod"
      ],
      answer: "b) The DaemonSet deploys a pod to the new node"
  },
  {
      question: "If you want to create a set of pods with unique persistent storage, which workload resource is best?",
      options: [
          "a) Deployment",
          "b) DaemonSet",
          "c) StatefulSet",
          "d) ReplicaSet"
      ],
      answer: "c) StatefulSet"
  },
  {
      question: "How do you specify a minimum number of ready pods during a rolling update?",
      options: [
          "a) minSurge",
          "b) minReadySeconds",
          "c) maxUnavailable",
          "d) updateDelay"
      ],
      answer: "b) minReadySeconds"
  },
  {
      question: "Which Kubernetes workload type is ideal for a web application that needs load balancing?",
      options: [
          "a) StatefulSet",
          "b) Deployment",
          "c) CronJob",
          "d) Job"
      ],
      answer: "b) Deployment"
  },
  {
      question: "What is a key characteristic of a StatefulSet compared to a ReplicaSet?",
      options: [
          "a) Pods in a StatefulSet can have stable storage and network IDs",
          "b) ReplicaSets handle only stateless applications",
          "c) StatefulSets do not allow scaling",
          "d) StatefulSets are used only for batch processing"
      ],
      answer: "a) Pods in a StatefulSet can have stable storage and network IDs"
  },
  {
      question: "Which field in a Job spec defines how many times the job should run?",
      options: [
          "a) restartPolicy",
          "b) activeDeadlineSeconds",
          "c) completions",
          "d) replicas"
      ],
      answer: "c) completions"
  },
  {
      question: "In a Deployment, what is the 'maxSurge' parameter used for?",
      options: [
          "a) To specify maximum downtime",
          "b) To define how many extra pods can be scheduled above the desired count during updates",
          "c) To set a delay between pod updates",
          "d) To control pod termination"
      ],
      answer: "b) To define how many extra pods can be scheduled above the desired count during updates"
  },
  {
      question: "Which resource defines the number of pod replicas in Kubernetes?",
      options: [
          "a) StatefulSet",
          "b) ReplicaSet",
          "c) Job",
          "d) Pod"
      ],
      answer: "b) ReplicaSet"
  },
  {
      question: "What is the main purpose of a Deployment in Kubernetes?",
      options: [
          "a) To manage a single pod lifecycle",
          "b) To control resource limits of a node",
          "c) To declare a pod template for scalable applications",
          "d) To create jobs that run only once"
      ],
      answer: "c) To declare a pod template for scalable applications"
  },
  {
      question: "Which field in a Deployment configuration file sets the number of replicas?",
      options: [
          "a) spec.template.count",
          "b) spec.scale.replicas",
          "c) spec.replicas",
          "d) spec.size"
      ],
      answer: "c) spec.replicas"
  },
  {
      question: "In a StatefulSet, what unique feature is guaranteed for each pod?",
      options: [
          "a) Unique volume mounts",
          "b) Unique network identity",
          "c) Multiple replicas",
          "d) Service discovery across namespaces"
      ],
      answer: "b) Unique network identity"
  },
  {
      question: "What happens when a pod in a ReplicaSet is deleted?",
      options: [
          "a) The pod is permanently removed",
          "b) A new pod is created to maintain the replica count",
          "c) The remaining pods are restarted",
          "d) The ReplicaSet itself is deleted"
      ],
      answer: "b) A new pod is created to maintain the replica count"
  },
  {
      question: "Which object should you use for batch processing tasks in Kubernetes?",
      options: [
          "a) DaemonSet",
          "b) Job",
          "c) ReplicaSet",
          "d) Deployment"
      ],
      answer: "b) Job"
  },
  {
      question: "What is a primary difference between a StatefulSet and a Deployment?",
      options: [
          "a) StatefulSets support persistent storage, Deployments do not",
          "b) Deployments guarantee unique identities for pods",
          "c) Deployments allow scaling, StatefulSets do not",
          "d) StatefulSets ensure ordered, predictable pod management"
      ],
      answer: "d) StatefulSets ensure ordered, predictable pod management"
  },
  {
      question: "Which workload resource is typically used to deploy a long-running background process on every node?",
      options: [
          "a) Job",
          "b) Deployment",
          "c) DaemonSet",
          "d) StatefulSet"
      ],
      answer: "c) DaemonSet"
  },
  {
      question: "What command is used to scale a Deployment in Kubernetes?",
      options: [
          "a) kubectl scale deployment <deployment-name>",
          "b) kubectl set replicas <deployment-name>",
          "c) kubectl increase deployment <deployment-name>",
          "d) kubectl update replicas <deployment-name>"
      ],
      answer: "a) kubectl scale deployment <deployment-name>"
  },
  {
      question: "Which Kubernetes controller is responsible for creating pods to reach the desired number of replicas?",
      options: [
          "a) StatefulSet Controller",
          "b) Deployment Controller",
          "c) ReplicaSet Controller",
          "d) Node Controller"
      ],
      answer: "c) ReplicaSet Controller"
  },
  {
      question: "How does a Job in Kubernetes differ from a Deployment?",
      options: [
          "a) A Job runs a task to completion, while a Deployment manages continuous applications",
          "b) A Deployment can only create a single pod",
          "c) Jobs support persistent storage",
          "d) Deployments are for batch processing tasks"
      ],
      answer: "a) A Job runs a task to completion, while a Deployment manages continuous applications"
  },
  {
      question: "Which Kubernetes workload is best suited for running system monitoring tasks across all nodes?",
      options: [
          "a) ReplicaSet",
          "b) Deployment",
          "c) Job",
          "d) DaemonSet"
      ],
      answer: "d) DaemonSet"
  },
  {
      question: "What is the default behavior of a Deployment if a container image is updated?",
      options: [
          "a) It triggers a rolling update",
          "b) It deletes the old pods",
          "c) It restarts the entire cluster",
          "d) It increases the replica count temporarily"
      ],
      answer: "a) It triggers a rolling update"
  },
  {
      question: "Which parameter specifies the duration to wait for pods to terminate during a rolling update?",
      options: [
          "a) maxUnavailability",
          "b) gracePeriod",
          "c) terminationGracePeriodSeconds",
          "d) updateDelay"
      ],
      answer: "c) terminationGracePeriodSeconds"
  },
  {
      question: "Which property in a Deployment allows you to define the maximum number of unavailable pods during an update?",
      options: [
          "a) minAvailable",
          "b) maxSurge",
          "c) maxUnavailable",
          "d) unavailableReplicas"
      ],
      answer: "c) maxUnavailable"
  },
  {
      question: "Which Kubernetes object would you use for a task that needs to run to completion a specific number of times?",
      options: [
          "a) Job",
          "b) CronJob",
          "c) DaemonSet",
          "d) StatefulSet"
      ],
      answer: "a) Job"
  },
  {
      question: "What is the primary use case for a CronJob in Kubernetes?",
      options: [
          "a) To create a deployment at scheduled times",
          "b) To schedule recurring tasks at specific times",
          "c) To handle one-off background tasks",
          "d) To manage the lifecycle of a stateful service"
      ],
      answer: "b) To schedule recurring tasks at specific times"
  },
  {
      question: "What parameter controls the frequency of a CronJob in Kubernetes?",
      options: [
          "a) schedule",
          "b) frequency",
          "c) cronFrequency",
          "d) executionTime"
      ],
      answer: "a) schedule"
  },
  {
      question: "In a DaemonSet, when a new node is added to the cluster, what happens?",
      options: [
          "a) The DaemonSet does nothing",
          "b) The DaemonSet deploys a pod to the new node",
          "c) The DaemonSet scales down existing pods",
          "d) The node replaces an existing pod"
      ],
      answer: "b) The DaemonSet deploys a pod to the new node"
  },
  {
      question: "If you want to create a set of pods with unique persistent storage, which workload resource is best?",
      options: [
          "a) Deployment",
          "b) DaemonSet",
          "c) StatefulSet",
          "d) ReplicaSet"
      ],
      answer: "c) StatefulSet"
  },
  {
      question: "How do you specify a minimum number of ready pods during a rolling update?",
      options: [
          "a) minSurge",
          "b) minReadySeconds",
          "c) maxUnavailable",
          "d) updateDelay"
      ],
      answer: "b) minReadySeconds"
  },
  {
      question: "Which Kubernetes workload type is ideal for a web application that needs load balancing?",
      options: [
          "a) StatefulSet",
          "b) Deployment",
          "c) CronJob",
          "d) Job"
      ],
      answer: "b) Deployment"
  },
  {
      question: "What is a key characteristic of a StatefulSet compared to a ReplicaSet?",
      options: [
          "a) Pods in a StatefulSet can have stable storage and network IDs",
          "b) ReplicaSets handle only stateless applications",
          "c) StatefulSets do not allow scaling",
          "d) StatefulSets are used only for batch processing"
      ],
      answer: "a) Pods in a StatefulSet can have stable storage and network IDs"
  },
  {
      question: "Which field in a Job spec defines how many times the job should run?",
      options: [
          "a) restartPolicy",
          "b) activeDeadlineSeconds",
          "c) completions",
          "d) replicas"
      ],
      answer: "c) completions"
  },
  {
      question: "In a Deployment, what is the 'maxSurge' parameter used for?",
      options: [
          "a) To specify maximum downtime",
          "b) To define how many extra pods can be scheduled above the desired count during updates",
          "c) To set a delay between pod updates",
          "d) To control pod termination"
      ],
      answer: "b) To define how many extra pods can be scheduled above the desired count during updates"
  },
  {
      question: "When a Job is terminated early, what field prevents it from being recreated?",
      options: [
          "a) completionPolicy",
          "b) activeDeadlineSeconds",
          "c) restartPolicy",
          "d) backoffLimit"
      ],
      answer: "d) backoffLimit"
  }
];
