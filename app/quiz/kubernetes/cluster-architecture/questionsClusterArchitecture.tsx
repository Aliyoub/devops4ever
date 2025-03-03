export const questions = [
  {
    question:
      "Which component in the Kubernetes control plane is responsible for maintaining the desired state of the cluster?",
    question_id: 1,
    options: [
      "a) kube-apiserver",
      "b) kube-scheduler",
      "c) kube-controller-manager",
      "d) etcd",
    ],
    answer: "c) kube-controller-manager",
  },
  {
    question: "What is the primary role of etcd in Kubernetes architecture?",
    question_id: 2,
    options: [
      "a) Scheduling workloads",
      "b) Storing cluster configuration and state",
      "c) Exposing APIs for kubectl commands",
      "d) Managing network policies",
    ],
    answer: "b) Storing cluster configuration and state",
  },
  {
    question:
      "Which component of Kubernetes schedules pods to nodes based on resource availability and requirements?",
    question_id: 3,
    options: [
      "a) kube-controller-manager",
      "b) kube-scheduler",
      "c) kubelet",
      "d) kube-proxy",
    ],
    answer: "b) kube-scheduler",
  },
  {
    question: "What is the role of the kubelet in a Kubernetes cluster?",
    question_id: 4,
    options: [
      "a) Running container workloads",
      "b) Managing network traffic",
      "c) Storing configuration data",
      "d) Exposing API server",
    ],
    answer: "a) Running container workloads",
  },
  {
    question:
      "Which component of the Kubernetes control plane is the entry point for all kubectl commands?",
    question_id: 5,
    options: [
      "a) kube-scheduler",
      "b) etcd",
      "c) kube-apiserver",
      "d) kubelet",
    ],
    answer: "c) kube-apiserver",
  },
  {
    question:
      "In a Kubernetes cluster, what is the purpose of the kube-proxy component?",
    question_id: 6,
    options: [
      "a) Managing container runtime",
      "b) Implementing network rules to route traffic",
      "c) Scheduling workloads to nodes",
      "d) Running control plane processes",
    ],
    answer: "b) Implementing network rules to route traffic",
  },
  {
    question:
      "What is the role of the kube-controller-manager in a Kubernetes cluster?",
    question_id: 7,
    options: [
      "a) To manage service networking",
      "b) To maintain the cluster's desired state",
      "c) To handle node resource allocation",
      "d) To manage persistent storage",
    ],
    answer: "b) To maintain the cluster's desired state",
  },
  {
    question:
      "Which component is used for cluster data storage and is often configured as a highly available key-value store in Kubernetes?",
    question_id: 8,
    options: ["a) kube-proxy", "b) kube-scheduler", "c) etcd", "d) kubelet"],
    answer: "c) etcd",
  },
  {
    question:
      "In Kubernetes, which of the following components monitors node health and enforces eviction policies?",
    question_id: 9,
    options: [
      "a) kube-scheduler",
      "b) kubelet",
      "c) kube-controller-manager",
      "d) kube-proxy",
    ],
    answer: "b) kubelet",
  },
  {
    question:
      "Which Kubernetes component is essential for communication within the control plane and with worker nodes?",
    question_id: 10,
    options: [
      "a) kube-scheduler",
      "b) kube-apiserver",
      "c) kubelet",
      "d) etcd",
    ],
    answer: "b) kube-apiserver",
  },
  {
    question:
      "In Kubernetes architecture, what is the primary responsibility of the kube-scheduler?",
    question_id: 11,
    options: [
      "a) Scheduling pods to nodes",
      "b) Managing storage volumes",
      "c) Managing DNS within the cluster",
      "d) Routing traffic between services",
    ],
    answer: "a) Scheduling pods to nodes",
  },
  {
    question:
      "Which component in Kubernetes applies IP tables rules for managing service traffic?",
    question_id: 12,
    options: [
      "a) kube-scheduler",
      "b) kubelet",
      "c) kube-proxy",
      "d) kube-controller-manager",
    ],
    answer: "c) kube-proxy",
  },
  {
    question:
      "The kube-apiserver uses which protocol by default for secure communication?",
    question_id: 13,
    options: ["a) HTTP", "b) SSH", "c) HTTPS", "d) FTP"],
    answer: "c) HTTPS",
  },
  {
    question:
      "Which component ensures that the containers in a pod are running and restarts them if they fail?",
    question_id: 14,
    options: [
      "a) kubelet",
      "b) kube-apiserver",
      "c) kube-scheduler",
      "d) etcd",
    ],
    answer: "a) kubelet",
  },
  {
    question:
      "In Kubernetes, what is the role of the cloud-controller-manager?",
    question_id: 15,
    options: [
      "a) To schedule pods based on node availability",
      "b) To manage interactions with cloud providers",
      "c) To control pod restarts",
      "d) To manage network policies",
    ],
    answer: "b) To manage interactions with cloud providers",
  },
  {
    question:
      "Which process in the Kubernetes control plane is responsible for detecting and responding to node failures?",
    question_id: 16,
    options: [
      "a) kube-scheduler",
      "b) kube-proxy",
      "c) kube-controller-manager",
      "d) kubelet",
    ],
    answer: "c) kube-controller-manager",
  },
  {
    question:
      "What is the purpose of the --secure-port flag in the kube-apiserver configuration?",
    question_id: 17,
    options: [
      "a) Specifies the secure port for kubelet",
      "b) Specifies the port to listen on for secure requests",
      "c) Defines an internal cluster port",
      "d) Enables node-to-node communication",
    ],
    answer: "b) Specifies the port to listen on for secure requests",
  },
  {
    question:
      "In Kubernetes, which component is in charge of assigning a unique IP address to each pod?",
    question_id: 18,
    options: [
      "a) kube-proxy",
      "b) kube-controller-manager",
      "c) network plugin",
      "d) kubelet",
    ],
    answer: "c) network plugin",
  },
  {
    question:
      "Which flag in kubelet ensures that only signed and trusted images are pulled from the registry?",
    question_id: 19,
    options: [
      "a) --allow-privileged",
      "b) --pod-manifest-path",
      "c) --authentication-token-webhook",
      "d) --image-policy",
    ],
    answer: "d) --image-policy",
  },
  {
    question:
      "Which Kubernetes component uses a 'leader election' mechanism to manage control plane tasks?",
    question_id: 20,
    options: [
      "a) kube-scheduler",
      "b) kube-controller-manager",
      "c) etcd",
      "d) kube-apiserver",
    ],
    answer: "b) kube-controller-manager",
  },
  {
    question:
      "In a highly available Kubernetes control plane setup, how is data consistency across etcd nodes ensured?",
    question_id: 21,
    options: [
      "a) By using synchronous replication",
      "b) By configuring the kubelet",
      "c) Through the kube-scheduler",
      "d) Using pod replicas",
    ],
    answer: "a) By using synchronous replication",
  },
  {
    question:
      "What does the kube-apiserver use for authentication when accessing etcd?",
    question_id: 22,
    options: [
      "a) JSON web tokens (JWT)",
      "b) TLS certificates",
      "c) Secure Shell (SSH)",
      "d) Role-based access control (RBAC)",
    ],
    answer: "b) TLS certificates",
  },
  {
    question: "How does the kube-scheduler decide where to place a pod?",
    question_id: 23,
    options: [
      "a) Based on labels",
      "b) Using annotations",
      "c) According to available resources and policies",
      "d) Through node health checks",
    ],
    answer: "c) According to available resources and policies",
  },
  {
    question:
      "In Kubernetes, which component aggregates and forwards metrics to the API server for monitoring?",
    question_id: 24,
    options: [
      "a) kubelet",
      "b) kube-scheduler",
      "c) kube-apiserver",
      "d) metrics-server",
    ],
    answer: "d) metrics-server",
  },
  {
    question:
      "Which command is used to run the kube-scheduler with a custom configuration file?",
    question_id: 25,
    options: [
      "a) kubelet --config <file>",
      "b) kube-apiserver --config <file>",
      "c) kube-scheduler --config <file>",
      "d) kubectl scheduler",
    ],
    answer: "c) kube-scheduler --config <file>",
  },
  {
    question:
      "What is a primary function of the 'leader election' feature in Kubernetes?",
    question_id: 26,
    options: [
      "a) To assign a node leader for network traffic",
      "b) To designate a master node",
      "c) To ensure control plane redundancy",
      "d) To monitor pod resource usage",
    ],
    answer: "c) To ensure control plane redundancy",
  },
];
