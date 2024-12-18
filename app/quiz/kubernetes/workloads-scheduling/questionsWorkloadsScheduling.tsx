export const questions = [
  {
    question: "What is the default restart policy for pods in Kubernetes?",
    question_id: 0,
    options: [
      "a) Always",
      "b) OnFailure",
      "c) Never",
      "d) Manual",
    ],
    answer: "a) Always",
    explanation: "The default restart policy for pods in Kubernetes is 'Always', which means the pod will be restarted automatically if it fails or is deleted."
  },
  {
    question: "Which controller is responsible for maintaining the desired number of replicas for a deployment?",
    question_id: 1,
    options: [
      "a) StatefulSet",
      "b) ReplicaSet",
      "c) DaemonSet",
      "d) Job",
    ],
    answer: "b) ReplicaSet",
    explanation: "The ReplicaSet controller ensures that the specified number of pod replicas are running at any time. Deployments use ReplicaSets to manage the pods."
  },
  {
    question: "Which workload type is best suited for running a batch job that processes data and then exits?",
    question_id: 2,
    options: [
      "a) Deployment",
      "b) DaemonSet",
      "c) Job",
      "d) StatefulSet",
    ],
    answer: "c) Job",
    explanation: "A 'Job' in Kubernetes is designed for batch workloads that are meant to run to completion, such as data processing tasks."
  },
  {
    question: "What is the purpose of a 'nodeSelector' in a pod specification?",
    question_id: 3,
    options: [
      "a) To specify the priority of the pod.",
      "b) To control which nodes the pod can be scheduled on.",
      "c) To define the storage volume for the pod.",
      "d) To set resource limits for the pod.",
    ],
    answer: "b) To control which nodes the pod can be scheduled on.",
    explanation: "The 'nodeSelector' field in a pod specification is used to constrain a pod to run only on nodes with specific labels."
  },
  {
    question: "How can you update a running deployment without downtime?",
    question_id: 4,
    options: [
      "a) Delete the old deployment and apply the new configuration.",
      "b) Scale the deployment to zero replicas and redeploy.",
      "c) Use 'kubectl apply' to update the deployment manifest.",
      "d) Edit the ReplicaSet directly to apply changes.",
    ],
    answer: "c) Use 'kubectl apply' to update the deployment manifest.",
    explanation: "'kubectl apply' allows you to update a running deployment. Kubernetes performs a rolling update to apply changes without downtime."
  },
  {
    question: "What is the key difference between a Deployment and a StatefulSet?",
    question_id: 5,
    options: [
      "a) Deployments manage unique, stateful workloads.",
      "b) StatefulSets guarantee ordering and persistence for pods.",
      "c) Deployments cannot scale pods automatically.",
      "d) StatefulSets do not support scaling.",
    ],
    answer: "b) StatefulSets guarantee ordering and persistence for pods.",
    explanation: "StatefulSets are used for stateful applications where pod identity, ordering, and persistence are crucial, whereas Deployments are better for stateless workloads."
  },
  {
    question: "Which of the following is true about Kubernetes DaemonSets?",
    question_id: 6,
    options: [
      "a) DaemonSets are used to schedule pods on specific nodes only.",
      "b) A DaemonSet ensures that a copy of a pod runs on all (or specific) nodes in the cluster.",
      "c) DaemonSets are limited to a single replica per cluster.",
      "d) DaemonSets are used only for batch jobs.",
    ],
    answer: "b) A DaemonSet ensures that a copy of a pod runs on all (or specific) nodes in the cluster.",
    explanation: "DaemonSets are used to deploy pods on all or specific nodes in a cluster, typically for tasks like logging, monitoring, or system-level workloads."
  },
  {
    question: "What happens if a pod with a RestartPolicy of 'Never' fails?",
    question_id: 7,
    options: [
      "a) Kubernetes will restart the pod automatically.",
      "b) The pod will remain in a 'Failed' state.",
      "c) The ReplicaSet will create a new pod to replace it.",
      "d) The pod will be rescheduled on a different node.",
    ],
    answer: "b) The pod will remain in a 'Failed' state.",
    explanation: "With a RestartPolicy of 'Never', the pod will not be restarted automatically and will remain in a 'Failed' state upon failure."
  },
  {
    question: "Which Kubernetes object can you use to control the order of pod creation in a StatefulSet?",
    question_id: 8,
    options: [
      "a) initContainers",
      "b) podManagementPolicy",
      "c) startupProbe",
      "d) readinessProbe",
    ],
    answer: "b) podManagementPolicy",
    explanation: "The 'podManagementPolicy' in a StatefulSet allows you to control the order of pod creation and deletion. For example, the 'OrderedReady' policy ensures pods are created or deleted sequentially."
  },
  {
    question: "What is the purpose of a 'toleration' in Kubernetes scheduling?",
    question_id: 9,
    options: [
      "a) To allow pods to tolerate specific conditions on nodes.",
      "b) To define the priority of a pod.",
      "c) To prevent a pod from being scheduled on a specific node.",
      "d) To configure network policies for the pod.",
    ],
    answer: "a) To allow pods to tolerate specific conditions on nodes.",
    explanation: "Tolerations are used in Kubernetes to allow pods to be scheduled on nodes with specific taints. This is useful for controlling workload placement."
  },
  {
    question: "Which Kubernetes object is used to manage applications that require unique network identities for each pod?",
    question_id: 10,
    options: [
      "a) Deployment",
      "b) StatefulSet",
      "c) ReplicaSet",
      "d) DaemonSet",
    ],
    answer: "b) StatefulSet",
    explanation: "StatefulSets are used for stateful applications where each pod requires a unique network identity, persistent storage, and ordered deployment."
  },
  {
    question: "What is the role of an init container in a pod?",
    question_id: 11,
    options: [
      "a) To handle pre-start tasks before the main containers start.",
      "b) To monitor the health of the pod.",
      "c) To act as a backup container in case the main container fails.",
      "d) To manage persistent storage for the pod.",
    ],
    answer: "a) To handle pre-start tasks before the main containers start.",
    explanation: "Init containers run before the main containers in a pod and are typically used for initialization tasks, such as setting up the environment or loading required data."
  },
  {
    question: "Which Kubernetes object can be used to ensure a specific pod always runs on a particular node?",
    question_id: 12,
    options: [
      "a) NodeSelector",
      "b) NodeAffinity",
      "c) PodAffinity",
      "d) Taint and Toleration",
    ],
    answer: "b) NodeAffinity",
    explanation: "NodeAffinity is used to specify rules about which nodes a pod can be scheduled on, allowing more flexible placement than NodeSelector."
  },
  {
    question: "What is the default policy for pod scaling in a Deployment?",
    question_id: 13,
    options: [
      "a) Manual",
      "b) HorizontalPodAutoscaler",
      "c) VerticalPodAutoscaler",
      "d) Static scaling",
    ],
    answer: "b) HorizontalPodAutoscaler",
    explanation: "Kubernetes supports horizontal scaling by default, allowing a Deployment to scale pods based on CPU or memory utilization using the Horizontal Pod Autoscaler."
  },
  {
    question: "What happens if a DaemonSet pod is manually deleted?",
    question_id: 14,
    options: [
      "a) It will be recreated automatically by the DaemonSet controller.",
      "b) It will not be recreated unless the node restarts.",
      "c) The entire DaemonSet will fail.",
      "d) The pod will be permanently deleted.",
    ],
    answer: "a) It will be recreated automatically by the DaemonSet controller.",
    explanation: "The DaemonSet controller ensures that the desired state is maintained. If a pod is deleted, it is automatically recreated on the same node."
  },
  {
    question: "Which Kubernetes object is designed to handle long-running workloads?",
    question_id: 15,
    options: [
      "a) Job",
      "b) Deployment",
      "c) StatefulSet",
      "d) CronJob",
    ],
    answer: "b) Deployment",
    explanation: "Deployments are designed to manage long-running, stateless workloads by ensuring the desired number of replicas is always running."
  },
  {
    question: "How does Kubernetes determine the best node for a pod?",
    question_id: 16,
    options: [
      "a) Random selection of a node.",
      "b) By matching pod resource requests and node capacity.",
      "c) By selecting the node with the most available memory.",
      "d) By selecting the least utilized node in the cluster.",
    ],
    answer: "b) By matching pod resource requests and node capacity.",
    explanation: "The Kubernetes scheduler uses resource requests (CPU, memory, etc.) and other constraints (like NodeAffinity) to determine the best node for a pod."
  },
  {
    question: "What happens if a pod with a 'ReadinessProbe' fails?",
    question_id: 17,
    options: [
      "a) The pod is terminated and restarted.",
      "b) The pod is marked as 'NotReady' and removed from service endpoints.",
      "c) The pod remains in the 'Running' state but stops accepting traffic.",
      "d) The pod's container is stopped and a new container is started.",
    ],
    answer: "b) The pod is marked as 'NotReady' and removed from service endpoints.",
    explanation: "When a 'ReadinessProbe' fails, the pod is marked as 'NotReady' and removed from endpoints, ensuring it does not receive traffic until it is ready again."
  },
  {
    question: "Which feature allows Kubernetes to run a workload at a specific time interval?",
    question_id: 18,
    options: [
      "a) Job",
      "b) CronJob",
      "c) StatefulSet",
      "d) DaemonSet",
    ],
    answer: "b) CronJob",
    explanation: "A 'CronJob' schedules and runs workloads at specific time intervals, similar to a cron job in Linux."
  },
  {
    question: "What is the primary purpose of a 'PreemptionPolicy' in Kubernetes scheduling?",
    question_id: 19,
    options: [
      "a) To prevent a pod from being evicted.",
      "b) To allow high-priority pods to displace lower-priority pods.",
      "c) To define the maximum resource usage for a pod.",
      "d) To determine the order in which pods are created.",
    ],
    answer: "b) To allow high-priority pods to displace lower-priority pods.",
    explanation: "'PreemptionPolicy' allows high-priority pods to preempt or evict lower-priority pods to make room for critical workloads in the cluster."
  },
  {
    question: "Which Kubernetes object is responsible for ensuring a pod is recreated if it fails?",
    question_id: 20,
    options: [
      "a) ReplicaSet",
      "b) Deployment",
      "c) StatefulSet",
      "d) DaemonSet",
    ],
    answer: "a) ReplicaSet",
    explanation: "ReplicaSets ensure that the specified number of replicas of a pod are running at all times, recreating pods if they fail."
  },
  {
    question: "What is the purpose of 'taints' in Kubernetes scheduling?",
    question_id: 21,
    options: [
      "a) To prioritize nodes for scheduling.",
      "b) To prevent pods from being scheduled on specific nodes unless they tolerate the taints.",
      "c) To allocate extra resources to specific nodes.",
      "d) To mark nodes as unavailable for maintenance.",
    ],
    answer: "b) To prevent pods from being scheduled on specific nodes unless they tolerate the taints.",
    explanation: "Taints are applied to nodes to repel pods that do not have matching tolerations, helping to control where workloads run."
  },
  {
    question: "Which workload controller is best for running a pod on every node in the cluster?",
    question_id: 22,
    options: [
      "a) Deployment",
      "b) ReplicaSet",
      "c) DaemonSet",
      "d) Job",
    ],
    answer: "c) DaemonSet",
    explanation: "A DaemonSet ensures that a pod runs on every node in the cluster, often used for system-level workloads like logging or monitoring."
  },
  {
    question: "How does a pod's 'priorityClassName' affect scheduling in Kubernetes?",
    question_id: 23,
    options: [
      "a) It determines the pod's QoS class.",
      "b) It influences the order in which pods are scheduled.",
      "c) It limits the pod's resource usage.",
      "d) It specifies the pod's node affinity.",
    ],
    answer: "b) It influences the order in which pods are scheduled.",
    explanation: "The 'priorityClassName' assigns a priority level to the pod, influencing scheduling decisions when resources are limited."
  },
  {
    question: "Which of the following statements is true about pod disruption budgets (PDBs)?",
    question_id: 24,
    options: [
      "a) PDBs ensure a specific pod always runs on a particular node.",
      "b) PDBs prevent voluntary disruptions beyond a specified threshold.",
      "c) PDBs automatically reschedule pods after a node failure.",
      "d) PDBs limit the number of pods that can run on a node.",
    ],
    answer: "b) PDBs prevent voluntary disruptions beyond a specified threshold.",
    explanation: "Pod Disruption Budgets (PDBs) ensure that a certain number of pods remain available during voluntary disruptions, such as node maintenance."
  },
  {
    question: "What is the purpose of a 'topologySpreadConstraint' in a pod spec?",
    question_id: 25,
    options: [
      "a) To ensure pods are evenly spread across failure domains.",
      "b) To control pod placement based on node labels.",
      "c) To allocate additional CPU resources to critical pods.",
      "d) To configure pod scheduling priority.",
    ],
    answer: "a) To ensure pods are evenly spread across failure domains.",
    explanation: "'TopologySpreadConstraints' are used to distribute pods evenly across zones, regions, or other failure domains to improve reliability."
  },
  {
    question: "What is the primary function of a ReadinessGate in a pod?",
    question_id: 26,
    options: [
      "a) To define additional conditions for pod readiness.",
      "b) To ensure the pod is deleted when it becomes unready.",
      "c) To restart the pod if a container fails.",
      "d) To schedule the pod on specific nodes.",
    ],
    answer: "a) To define additional conditions for pod readiness.",
    explanation: "ReadinessGates allow custom conditions to determine whether a pod is ready to receive traffic, extending the functionality of ReadinessProbes."
  },
  {
    question: "Which of the following is a key difference between a Job and a CronJob?",
    question_id: 27,
    options: [
      "a) A Job is for long-running workloads, while a CronJob is for one-time tasks.",
      "b) A CronJob schedules Jobs to run at specific intervals.",
      "c) Jobs can scale automatically, while CronJobs cannot.",
      "d) CronJobs do not support resource limits.",
    ],
    answer: "b) A CronJob schedules Jobs to run at specific intervals.",
    explanation: "A CronJob in Kubernetes is used to schedule Jobs to run at specified times, similar to a cron job in Linux."
  },
  {
    question: "What is the default behavior if a StatefulSet pod fails?",
    question_id: 28,
    options: [
      "a) The StatefulSet will recreate the pod immediately.",
      "b) The pod will remain in a 'Failed' state until manually deleted.",
      "c) The StatefulSet controller will restart the pod in the same order.",
      "d) The pod will be rescheduled on a different node automatically.",
    ],
    answer: "c) The StatefulSet controller will restart the pod in the same order.",
    explanation: "StatefulSet ensures ordered deployment and termination. If a pod fails, it is restarted by the controller while maintaining its identity and sequence."
  },
  {
    question: "What is the primary purpose of a 'serviceAccountName' in a pod spec?",
    question_id: 29,
    options: [
      "a) To specify the pod's identity for accessing Kubernetes APIs.",
      "b) To define the pod's resource limits and requests.",
      "c) To configure the pod's node affinity.",
      "d) To set the pod's QoS class.",
    ],
    answer: "a) To specify the pod's identity for accessing Kubernetes APIs.",
    explanation: "The 'serviceAccountName' in a pod spec is used to associate the pod with a service account, determining its access to Kubernetes resources."
  },
  {
    question: "What happens if you scale a Deployment to 0 replicas?",
    question_id: 30,
    options: [
      "a) The Deployment is deleted.",
      "b) All pods managed by the Deployment are terminated.",
      "c) The Deployment automatically scales back to 1 replica.",
      "d) The Deployment remains active but in a 'Paused' state.",
    ],
    answer: "b) All pods managed by the Deployment are terminated.",
    explanation: "Scaling a Deployment to 0 replicas causes all pods managed by it to be terminated, but the Deployment itself remains intact."
  },
  {
    question: "Which feature in Kubernetes ensures a Deployment can roll back to a previous version?",
    question_id: 31,
    options: [
      "a) Revision History",
      "b) StatefulSet Rollback",
      "c) ReplicaSet",
      "d) Rollout History",
    ],
    answer: "a) Revision History",
    explanation: "Kubernetes keeps a revision history of Deployments, allowing you to roll back to previous versions if needed."
  },
  {
    question: "What is the default update strategy for a StatefulSet?",
    question_id: 32,
    options: [
      "a) RollingUpdate",
      "b) Recreate",
      "c) OnDelete",
      "d) Immediate",
    ],
    answer: "c) OnDelete",
    explanation: "By default, StatefulSets use the 'OnDelete' update strategy, requiring manual intervention to update pods."
  },
  {
    question: "How can you enforce a specific number of pods to run in a namespace using Kubernetes?",
    question_id: 33,
    options: [
      "a) Resource Quotas",
      "b) Pod Disruption Budgets",
      "c) Horizontal Pod Autoscaler",
      "d) Namespace Limits",
    ],
    answer: "a) Resource Quotas",
    explanation: "Resource Quotas can limit the total number of pods or other resources within a namespace to ensure fair resource usage."
  },
  {
    question: "Which type of probe can determine if a container should be restarted?",
    question_id: 34,
    options: [
      "a) Readiness Probe",
      "b) Liveness Probe",
      "c) Startup Probe",
      "d) Health Check Probe",
    ],
    answer: "b) Liveness Probe",
    explanation: "A Liveness Probe determines if a container is healthy and should continue running. If it fails, the container is restarted."
  },
  {
    question: "What is the default behavior when a pod exceeds its memory limit?",
    question_id: 35,
    options: [
      "a) The pod is throttled.",
      "b) The pod is evicted.",
      "c) The container is terminated.",
      "d) The pod continues to run without restrictions.",
    ],
    answer: "c) The container is terminated.",
    explanation: "If a container exceeds its memory limit, it is terminated by Kubernetes to prevent resource contention in the cluster."
  },
  {
    question: "How does a Horizontal Pod Autoscaler determine when to scale a Deployment?",
    question_id: 36,
    options: [
      "a) Based on the number of replicas specified in the Deployment spec.",
      "b) Based on resource usage metrics like CPU or memory.",
      "c) Based on manual triggers.",
      "d) Based on the node utilization in the cluster.",
    ],
    answer: "b) Based on resource usage metrics like CPU or memory.",
    explanation: "The Horizontal Pod Autoscaler adjusts the number of pod replicas based on specified resource usage metrics, such as CPU or memory."
  },
  {
    question: "What is the primary purpose of an AntiAffinity rule in Kubernetes?",
    question_id: 37,
    options: [
      "a) To ensure pods are scheduled together on the same node.",
      "b) To distribute pods across different nodes.",
      "c) To prevent a node from being overloaded.",
      "d) To prioritize nodes with fewer pods.",
    ],
    answer: "b) To distribute pods across different nodes.",
    explanation: "AntiAffinity rules ensure that pods are scheduled on separate nodes or failure domains to improve fault tolerance and reliability."
  },
  {
    question: "Which Kubernetes object allows for batch processing of one-time tasks?",
    question_id: 38,
    options: [
      "a) CronJob",
      "b) StatefulSet",
      "c) Job",
      "d) ReplicaSet",
    ],
    answer: "c) Job",
    explanation: "A Job in Kubernetes is used to manage the execution of one-time tasks, ensuring they run to completion."
  },
  {
    question: "What is the primary use of taints and tolerations in pod scheduling?",
    question_id: 39,
    options: [
      "a) To assign pods to specific nodes.",
      "b) To repel or attract pods to specific nodes.",
      "c) To set resource limits on nodes.",
      "d) To balance workloads across the cluster.",
    ],
    answer: "b) To repel or attract pods to specific nodes.",
    explanation: "Taints are applied to nodes to repel certain pods, and tolerations are added to pods to allow them to schedule on those nodes if needed."
  },
  {
    question: "What happens if a pod's Readiness Probe fails?",
    question_id: 40,
    options: [
      "a) The pod is deleted and recreated.",
      "b) The pod is marked as 'Not Ready' and removed from the service endpoints.",
      "c) The container is restarted.",
      "d) The pod is evicted from the node.",
    ],
    answer: "b) The pod is marked as 'Not Ready' and removed from the service endpoints.",
    explanation: "If a pod's Readiness Probe fails, it is marked as 'Not Ready,' and it stops receiving traffic from services until it becomes ready again."
  },
  {
    question: "Which Kubernetes controller is suitable for managing persistent stateful applications?",
    question_id: 41,
    options: [
      "a) Deployment",
      "b) ReplicaSet",
      "c) StatefulSet",
      "d) DaemonSet",
    ],
    answer: "c) StatefulSet",
    explanation: "StatefulSets are designed for managing stateful applications, ensuring pods are created and terminated in a specific order while maintaining stable network identities."
  },
  {
    question: "What is the purpose of a 'NodeSelector' in a pod spec?",
    question_id: 42,
    options: [
      "a) To ensure pods are scheduled on nodes with specific labels.",
      "b) To define the priority of a pod during scheduling.",
      "c) To allocate extra resources to a pod.",
      "d) To limit the pod's resource usage.",
    ],
    answer: "a) To ensure pods are scheduled on nodes with specific labels.",
    explanation: "NodeSelector is a simple mechanism for pod placement, allowing you to specify that a pod should only run on nodes with particular labels."
  },
  {
    question: "What happens when a Deployment is scaled up?",
    question_id: 43,
    options: [
      "a) New pods are created and scheduled based on available resources.",
      "b) Existing pods are duplicated.",
      "c) A new ReplicaSet is created.",
      "d) The existing pods are restarted.",
    ],
    answer: "a) New pods are created and scheduled based on available resources.",
    explanation: "Scaling up a Deployment increases the number of pod replicas, which results in the creation of additional pods."
  },
  {
    question: "What does a Kubernetes 'Affinity' rule specify?",
    question_id: 44,
    options: [
      "a) Where pods should or should not be scheduled based on node labels.",
      "b) How much CPU a pod can use.",
      "c) The maximum memory a pod can consume.",
      "d) The order in which pods are terminated.",
    ],
    answer: "a) Where pods should or should not be scheduled based on node labels.",
    explanation: "Affinity rules define constraints that affect the scheduling of pods, allowing for placement preferences or strict requirements."
  },
  {
    question: "What is the primary benefit of using a Horizontal Pod Autoscaler?",
    question_id: 45,
    options: [
      "a) It adjusts node resources dynamically.",
      "b) It scales the number of pods based on workload demands.",
      "c) It migrates pods to less-utilized nodes.",
      "d) It updates pods with new configurations.",
    ],
    answer: "b) It scales the number of pods based on workload demands.",
    explanation: "Horizontal Pod Autoscalers monitor resource usage and dynamically adjust the number of pods to meet current demands."
  },
  {
    question: "Which workload type is ideal for periodic tasks in Kubernetes?",
    question_id: 46,
    options: [
      "a) Job",
      "b) StatefulSet",
      "c) CronJob",
      "d) Deployment",
    ],
    answer: "c) CronJob",
    explanation: "CronJobs are used to schedule and run periodic tasks at specified intervals in Kubernetes."
  },
  {
    question: "What is the primary purpose of the 'RestartPolicy' field in a pod spec?",
    question_id: 47,
    options: [
      "a) To control whether a pod is recreated if it is deleted.",
      "b) To define how containers within the pod are restarted after failure.",
      "c) To allocate additional resources to a pod during restart.",
      "d) To define the pod's readiness state.",
    ],
    answer: "b) To define how containers within the pod are restarted after failure.",
    explanation: "The 'RestartPolicy' field specifies conditions under which containers in the pod are restarted (e.g., Always, OnFailure, Never)."
  },
  {
    question: "Which component is responsible for scheduling pods in a Kubernetes cluster?",
    question_id: 48,
    options: [
      "a) kube-apiserver",
      "b) kube-scheduler",
      "c) kube-controller-manager",
      "d) kubelet",
    ],
    answer: "b) kube-scheduler",
    explanation: "The kube-scheduler is the Kubernetes component responsible for assigning pods to nodes based on resource availability and constraints."
  },
  {
    question: "What is the default behavior of a Deployment during a rolling update?",
    question_id: 49,
    options: [
      "a) All pods are updated simultaneously.",
      "b) New pods are created before terminating old ones.",
      "c) Old pods are terminated before new ones are created.",
      "d) Pods are updated in a random order.",
    ],
    answer: "b) New pods are created before terminating old ones.",
    explanation: "During a rolling update, new pods are created and become ready before old pods are terminated, ensuring minimal downtime."
  },
  {
    question: "What does a Pod Disruption Budget (PDB) define?",
    question_id: 50,
    options: [
      "a) The maximum number of pods that can be disrupted during maintenance.",
      "b) The minimum number of nodes that must remain available.",
      "c) The maximum resource limits for a pod.",
      "d) The maximum number of replicas for a Deployment.",
    ],
    answer: "a) The maximum number of pods that can be disrupted during maintenance.",
    explanation: "A Pod Disruption Budget specifies the maximum number of pods that can be unavailable during voluntary disruptions to ensure service availability."
  },
  {
    question: "What is the default policy for terminating pods during a scale-down event?",
    question_id: 51,
    options: [
      "a) Random selection",
      "b) Oldest pods are terminated first",
      "c) Newest pods are terminated first",
      "d) Pods on the least-utilized node are terminated first",
    ],
    answer: "c) Newest pods are terminated first",
    explanation: "Kubernetes uses a default policy where the newest pods are terminated first during a scale-down event."
  },
  {
    question: "Which controller is best suited for ensuring one pod runs on every node?",
    question_id: 52,
    options: [
      "a) Deployment",
      "b) DaemonSet",
      "c) ReplicaSet",
      "d) StatefulSet",
    ],
    answer: "b) DaemonSet",
    explanation: "DaemonSets ensure that a copy of a pod runs on every node in the cluster, typically for tasks like monitoring or logging."
  },
  {
    question: "What is the main purpose of 'PriorityClasses' in Kubernetes?",
    question_id: 53,
    options: [
      "a) To assign resource quotas to namespaces.",
      "b) To prioritize pods for eviction during resource contention.",
      "c) To specify the order of pod startup.",
      "d) To define node scheduling preferences.",
    ],
    answer: "b) To prioritize pods for eviction during resource contention.",
    explanation: "PriorityClasses assign priority levels to pods, influencing their scheduling and eviction during resource shortages."
  },
  {
    question: "How does Kubernetes prevent scheduling multiple pods on nodes with insufficient resources?",
    question_id: 54,
    options: [
      "a) Taints and tolerations",
      "b) Resource requests and limits",
      "c) Node Affinity rules",
      "d) Pod Disruption Budgets",
    ],
    answer: "b) Resource requests and limits",
    explanation: "Resource requests and limits ensure that pods are only scheduled on nodes with sufficient CPU and memory to meet their needs."
  },
  {
    question: "Which of the following is required to create a Pod with a specific DNS configuration?",
    question_id: 55,
    options: [
      "a) Use a custom ConfigMap",
      "b) Define a dnsPolicy in the pod spec",
      "c) Add a NodeSelector",
      "d) Use an InitContainer",
    ],
    answer: "b) Define a dnsPolicy in the pod spec",
    explanation: "The 'dnsPolicy' field in the pod spec allows you to specify custom DNS configurations for the pod."
  },
  {
    question: "What does the 'TerminationGracePeriodSeconds' field control in a pod spec?",
    question_id: 56,
    options: [
      "a) How long a pod waits before restarting after failure.",
      "b) The maximum duration allowed for a pod to start.",
      "c) The time Kubernetes waits before forcefully killing a pod during termination.",
      "d) The time allowed for a pod to scale up.",
    ],
    answer: "c) The time Kubernetes waits before forcefully killing a pod during termination.",
    explanation: "The 'TerminationGracePeriodSeconds' field specifies the time Kubernetes allows for a pod to gracefully terminate before forcefully killing it."
  },
  {
    question: "Which of the following can be used to schedule pods on specific nodes based on custom criteria?",
    question_id: 57,
    options: [
      "a) Node Affinity",
      "b) Resource Quotas",
      "c) Pod Priority",
      "d) Taints and Tolerations",
    ],
    answer: "a) Node Affinity",
    explanation: "Node Affinity allows pods to be scheduled on nodes based on label criteria, providing flexibility for custom scheduling."
  },
  {
    question: "What happens to a Job if the node running its pod goes down?",
    question_id: 58,
    options: [
      "a) The Job fails permanently.",
      "b) The Job is rescheduled on another node.",
      "c) The Job enters a pending state until the node recovers.",
      "d) The Job creates a new ReplicaSet.",
    ],
    answer: "b) The Job is rescheduled on another node.",
    explanation: "If a node running a Job pod goes down, the Job controller reschedules the pod on another available node to ensure task completion."
  },
  {
    question: "Which of the following is true about the 'Preemption' process in Kubernetes?",
    question_id: 59,
    options: [
      "a) It terminates low-priority pods to schedule high-priority pods.",
      "b) It prevents pods from being evicted.",
      "c) It allocates additional resources to a pod.",
      "d) It delays pod scheduling until resources become available.",
    ],
    answer: "a) It terminates low-priority pods to schedule high-priority pods.",
    explanation: "Preemption is used to terminate lower-priority pods when needed to schedule high-priority pods during resource contention."
  },
  {
    question: "What is the main purpose of using Taints and Tolerations in Kubernetes?",
    question_id: 60,
    options: [
      "a) To prevent specific pods from being scheduled on certain nodes.",
      "b) To ensure a pod always runs on a specific node.",
      "c) To prioritize pods during scheduling.",
      "d) To define custom DNS policies for pods.",
    ],
    answer: "a) To prevent specific pods from being scheduled on certain nodes.",
    explanation: "Taints and Tolerations work together to prevent pods from being scheduled on nodes unless the pod explicitly tolerates the node's taint."
  },
  {
    question: "Which command can be used to display the scheduling details of a pod?",
    question_id: 61,
    options: [
      "a) kubectl describe pod <pod-name>",
      "b) kubectl get pod <pod-name>",
      "c) kubectl logs pod <pod-name>",
      "d) kubectl top pod <pod-name>",
    ],
    answer: "a) kubectl describe pod <pod-name>",
    explanation: "The 'kubectl describe pod' command provides detailed information about a pod, including its scheduling details and events."
  },
  {
    question: "What is the default behavior of a StatefulSet when one of its pods fails?",
    question_id: 62,
    options: [
      "a) The failed pod is automatically replaced.",
      "b) The entire StatefulSet is restarted.",
      "c) The pod's replacement is delayed until manual intervention.",
      "d) The StatefulSet scales down automatically.",
    ],
    answer: "a) The failed pod is automatically replaced.",
    explanation: "StatefulSets ensure that any failed pod is automatically replaced while preserving its unique identity."
  },
  {
    question: "How does Kubernetes ensure the order of pod creation and termination in a StatefulSet?",
    question_id: 63,
    options: [
      "a) By using Ordinal Indexes",
      "b) By defining a Pod Disruption Budget",
      "c) Through Preemption Policies",
      "d) By using Horizontal Pod Autoscaling",
    ],
    answer: "a) By using Ordinal Indexes",
    explanation: "StatefulSets use ordinal indexes to control the order in which pods are created, updated, and deleted."
  },
  {
    question: "What does the 'Eviction' process in Kubernetes refer to?",
    question_id: 64,
    options: [
      "a) Removing pods from a node to free resources.",
      "b) Stopping pods during a rolling update.",
      "c) Scaling down a Deployment.",
      "d) Terminating pods with failed probes.",
    ],
    answer: "a) Removing pods from a node to free resources.",
    explanation: "Eviction occurs when Kubernetes removes pods from a node to free up resources, often during resource contention or node maintenance."
  },
  {
    question: "What happens when a DaemonSet is updated with a new version of its pod template?",
    question_id: 65,
    options: [
      "a) All pods managed by the DaemonSet are updated immediately.",
      "b) Pods are updated one by one on each node.",
      "c) A new DaemonSet is created with the updated pods.",
      "d) Existing pods are terminated, and new pods are created.",
    ],
    answer: "b) Pods are updated one by one on each node.",
    explanation: "DaemonSets update pods one at a time to ensure continuity of the workload, especially for critical tasks like logging or monitoring."
  },
  {
    question: "What is the purpose of a Job's 'BackoffLimit' field?",
    question_id: 66,
    options: [
      "a) To limit the number of retries before a Job is considered failed.",
      "b) To define the maximum duration for a Job.",
      "c) To control resource usage for Job pods.",
      "d) To specify dependencies between Jobs.",
    ],
    answer: "a) To limit the number of retries before a Job is considered failed.",
    explanation: "The 'BackoffLimit' field in a Job spec controls the maximum number of retries allowed for a Job before it is marked as failed."
  },
  {
    question: "What Kubernetes object is used to expose a pod to external traffic?",
    question_id: 67,
    options: [
      "a) Service",
      "b) Ingress",
      "c) Endpoint",
      "d) ConfigMap",
    ],
    answer: "a) Service",
    explanation: "A Service is used to expose a pod or a set of pods to external traffic by creating a stable network endpoint."
  },
  {
    question: "Which scheduling strategy ensures a pod is always scheduled on a specific node?",
    question_id: 68,
    options: [
      "a) Node Affinity",
      "b) Pod Anti-Affinity",
      "c) Taints and Tolerations",
      "d) Resource Quotas",
    ],
    answer: "a) Node Affinity",
    explanation: "Node Affinity rules can be used to enforce pod placement on a specific node based on labels and scheduling preferences."
  },
  {
    question: "What happens when a pod's liveness probe fails?",
    question_id: 69,
    options: [
      "a) The pod is marked as 'Not Ready.'",
      "b) The container is restarted by the kubelet.",
      "c) The pod is evicted from the node.",
      "d) The pod is scheduled on another node.",
    ],
    answer: "b) The container is restarted by the kubelet.",
    explanation: "When a pod's liveness probe fails, Kubernetes restarts the container to recover from potential application crashes or deadlocks."
  },
  {
    question: "What is the main function of a Horizontal Pod Autoscaler (HPA) in Kubernetes?",
    question_id: 70,
    options: [
      "a) To scale pods horizontally based on CPU or memory usage.",
      "b) To scale pods vertically by adding more resources.",
      "c) To automatically schedule pods on available nodes.",
      "d) To create multiple replicas of a StatefulSet.",
    ],
    answer: "a) To scale pods horizontally based on CPU or memory usage.",
    explanation: "The Horizontal Pod Autoscaler adjusts the number of pod replicas in a deployment based on observed CPU or memory usage metrics."
  },
  {
    question: "What is a Deployment's 'rolling update' strategy used for?",
    question_id: 71,
    options: [
      "a) To replace old pods with new pods incrementally.",
      "b) To restart all pods simultaneously.",
      "c) To schedule pods across specific nodes.",
      "d) To increase the replica count to handle high traffic.",
    ],
    answer: "a) To replace old pods with new pods incrementally.",
    explanation: "A rolling update strategy ensures zero downtime by gradually replacing old pods with new pods during a Deployment update."
  },
  {
    question: "How does Kubernetes determine where to schedule a pod by default?",
    question_id: 72,
    options: [
      "a) Based on Node Affinity rules.",
      "b) Based on available resources on each node.",
      "c) Based on the pod's priority class.",
      "d) Based on user-defined scheduling rules.",
    ],
    answer: "b) Based on available resources on each node.",
    explanation: "By default, Kubernetes schedules pods based on available resources such as CPU and memory on each node."
  },
  {
    question: "What is the key benefit of using ReplicaSets in Kubernetes?",
    question_id: 73,
    options: [
      "a) To ensure a specified number of pod replicas are running.",
      "b) To manage stateful applications.",
      "c) To control node-specific workloads.",
      "d) To handle rolling updates.",
    ],
    answer: "a) To ensure a specified number of pod replicas are running.",
    explanation: "ReplicaSets ensure that the desired number of pod replicas are running at all times, even during failures."
  },
  {
    question: "Which resource is responsible for scheduling pods across nodes in Kubernetes?",
    question_id: 74,
    options: [
      "a) Kubelet",
      "b) Kube-scheduler",
      "c) Controller Manager",
      "d) API Server",
    ],
    answer: "b) Kube-scheduler",
    explanation: "The kube-scheduler is responsible for assigning pods to nodes based on resource availability, constraints, and policies."
  },
  {
    question: "Which feature of Kubernetes ensures a specific pod is not scheduled on a node with a certain label?",
    question_id: 75,
    options: [
      "a) Node Affinity",
      "b) Pod Anti-Affinity",
      "c) Taints and Tolerations",
      "d) Resource Quotas",
    ],
    answer: "a) Node Affinity",
    explanation: "Node Affinity allows users to specify rules that prevent pods from being scheduled on nodes with certain labels."
  },
  {
    question: "What is the primary use of a CronJob in Kubernetes?",
    question_id: 76,
    options: [
      "a) To schedule one-time tasks.",
      "b) To run Jobs on a periodic schedule.",
      "c) To scale a Deployment dynamically.",
      "d) To manage stateful workloads.",
    ],
    answer: "b) To run Jobs on a periodic schedule.",
    explanation: "A CronJob schedules Jobs to run periodically at specified times, similar to a traditional cron system."
  },
  {
    question: "What is the difference between a Job and a Deployment in Kubernetes?",
    question_id: 77,
    options: [
      "a) A Job runs a finite task, while a Deployment ensures continuous pod replicas.",
      "b) A Job scales pods dynamically, while a Deployment does not.",
      "c) A Job handles rolling updates, while a Deployment does not.",
      "d) A Job manages stateful workloads, while a Deployment does not.",
    ],
    answer: "a) A Job runs a finite task, while a Deployment ensures continuous pod replicas.",
    explanation: "A Job is designed for tasks that complete and exit, whereas a Deployment is used to manage continuously running applications."
  },
  {
    question: "What happens if a node hosting a StatefulSet pod crashes?",
    question_id: 78,
    options: [
      "a) Kubernetes reschedules the pod on another node while preserving its identity.",
      "b) The StatefulSet scales down automatically.",
      "c) The StatefulSet creates a new pod without preserving the identity.",
      "d) Kubernetes permanently deletes the pod.",
    ],
    answer: "a) Kubernetes reschedules the pod on another node while preserving its identity.",
    explanation: "StatefulSets ensure that pods maintain their unique identity and are rescheduled with the same identity on a different node if a failure occurs."
  },
  {
    question: "Which Kubernetes controller is responsible for handling Jobs?",
    question_id: 79,
    options: [
      "a) Job Controller",
      "b) Deployment Controller",
      "c) ReplicaSet Controller",
      "d) StatefulSet Controller",
    ],
    answer: "a) Job Controller",
    explanation: "The Job Controller is responsible for creating and managing Jobs in Kubernetes, ensuring their successful execution."
  },
  {
    question: "What is the default restart policy for pods managed by a Deployment in Kubernetes?",
    question_id: 80,
    options: [
      "a) Always",
      "b) OnFailure",
      "c) Never",
      "d) Manual",
    ],
    answer: "a) Always",
    explanation: "Deployments use ReplicaSets to manage pods, and the default restart policy for these pods is 'Always,' ensuring they restart automatically upon failure."
  },
  {
    question: "What happens when you delete a pod managed by a ReplicaSet?",
    question_id: 81,
    options: [
      "a) The ReplicaSet creates a new pod to maintain the desired replica count.",
      "b) The ReplicaSet scales down automatically.",
      "c) Kubernetes does nothing, as the pod is deleted permanently.",
      "d) The associated ReplicaSet is deleted.",
    ],
    answer: "a) The ReplicaSet creates a new pod to maintain the desired replica count.",
    explanation: "ReplicaSets ensure that the desired number of pods are always running. If a pod is deleted, the ReplicaSet will create a replacement."
  },
  {
    question: "What Kubernetes feature ensures that a pod is never scheduled on the same node as another specific pod?",
    question_id: 82,
    options: [
      "a) Pod Anti-Affinity",
      "b) Node Affinity",
      "c) Taints and Tolerations",
      "d) Resource Requests",
    ],
    answer: "a) Pod Anti-Affinity",
    explanation: "Pod Anti-Affinity rules prevent pods from being scheduled on the same node as another specific pod or group of pods."
  },
  {
    question: "How can you manually evict a pod from a node?",
    question_id: 83,
    options: [
      "a) Use the kubectl drain command.",
      "b) Use the kubectl delete pod command.",
      "c) Use the kubectl evict command.",
      "d) Use the kubectl cordon command.",
    ],
    answer: "a) Use the kubectl drain command.",
    explanation: "The 'kubectl drain' command is used to evict all pods from a node, preparing it for maintenance or decommissioning."
  },
  {
    question: "Which field in a pod spec is used to define the amount of CPU and memory required?",
    question_id: 84,
    options: [
      "a) resources.requests",
      "b) nodeSelector",
      "c) priorityClassName",
      "d) tolerations",
    ],
    answer: "a) resources.requests",
    explanation: "The 'resources.requests' field in the pod specification defines the minimum CPU and memory required for the pod to run."
  },
  {
    question: "What is the key difference between a StatefulSet and a Deployment?",
    question_id: 85,
    options: [
      "a) StatefulSets maintain pod identity, while Deployments do not.",
      "b) StatefulSets scale pods automatically, while Deployments do not.",
      "c) StatefulSets are used for stateless applications, while Deployments are for stateful ones.",
      "d) StatefulSets manage cron tasks, while Deployments do not.",
    ],
    answer: "a) StatefulSets maintain pod identity, while Deployments do not.",
    explanation: "StatefulSets ensure that pods have stable network identities and persistent storage, unlike Deployments, which manage stateless workloads."
  },
  {
    question: "Which annotation is required to schedule pods on a node marked with a taint?",
    question_id: 86,
    options: [
      "a) tolerations",
      "b) affinity",
      "c) nodeSelector",
      "d) resourceLimits",
    ],
    answer: "a) tolerations",
    explanation: "Pods require a 'tolerations' annotation to be scheduled on nodes marked with a specific taint, indicating they can tolerate the node's conditions."
  },
  {
    question: "What happens when a pod's readiness probe fails?",
    question_id: 87,
    options: [
      "a) The pod is removed from the Service endpoints.",
      "b) The pod is restarted immediately.",
      "c) The pod is evicted from the node.",
      "d) The pod is terminated.",
    ],
    answer: "a) The pod is removed from the Service endpoints.",
    explanation: "When a pod's readiness probe fails, Kubernetes removes the pod from the list of endpoints served by the associated Service."
  },
  {
    question: "What is the purpose of a PriorityClass in Kubernetes?",
    question_id: 88,
    options: [
      "a) To influence the scheduling order of pods.",
      "b) To define resource limits for a pod.",
      "c) To manage node-specific configurations.",
      "d) To set toleration rules for pods.",
    ],
    answer: "a) To influence the scheduling order of pods.",
    explanation: "PriorityClasses are used to assign priority levels to pods, influencing the order in which they are scheduled and their behavior during resource contention."
  },
  {
    question: "How does Kubernetes determine if a pod is healthy?",
    question_id: 89,
    options: [
      "a) By using liveness and readiness probes.",
      "b) By monitoring resource usage of the pod.",
      "c) By checking the pod's logs.",
      "d) By analyzing node conditions.",
    ],
    answer: "a) By using liveness and readiness probes.",
    explanation: "Kubernetes uses liveness probes to determine if a pod is alive and readiness probes to check if it is ready to serve traffic."
  },
  {
    question: "Which of the following best describes a DaemonSet in Kubernetes?",
    question_id: 90,
    options: [
      "a) Ensures that all nodes run a copy of a specific pod.",
      "b) Ensures that a single pod runs on a single node.",
      "c) Manages batch jobs and scheduled tasks.",
      "d) Scales pods horizontally across nodes.",
    ],
    answer: "a) Ensures that all nodes run a copy of a specific pod.",
    explanation: "A DaemonSet ensures that a copy of a pod is running on all (or specified) nodes in a cluster."
  },
  {
    question: "What happens when you scale a Deployment to zero replicas?",
    question_id: 91,
    options: [
      "a) All running pods of the Deployment are terminated.",
      "b) The Deployment is deleted from the cluster.",
      "c) The pods enter a 'Paused' state.",
      "d) The ReplicaSet remains active but the pods stop serving traffic.",
    ],
    answer: "a) All running pods of the Deployment are terminated.",
    explanation: "Scaling a Deployment to zero replicas terminates all its running pods, effectively stopping the application."
  },
  {
    question: "What is the purpose of a nodeSelector in a pod spec?",
    question_id: 92,
    options: [
      "a) To schedule pods on specific nodes based on labels.",
      "b) To define tolerations for pods.",
      "c) To assign resource limits to pods.",
      "d) To define anti-affinity rules for pods.",
    ],
    answer: "a) To schedule pods on specific nodes based on labels.",
    explanation: "The nodeSelector field in a pod spec allows scheduling pods onto nodes with matching labels."
  },
  {
    question: "How does Kubernetes prioritize pods during resource contention?",
    question_id: 93,
    options: [
      "a) Using PriorityClasses.",
      "b) Based on the age of the pod.",
      "c) Based on the node's taints.",
      "d) By the pod's resource requests.",
    ],
    answer: "a) Using PriorityClasses.",
    explanation: "PriorityClasses define the relative importance of pods, helping Kubernetes decide which pods to evict or schedule first during resource contention."
  },
  {
    question: "What type of workloads are best suited for StatefulSets?",
    question_id: 94,
    options: [
      "a) Applications requiring persistent storage and stable network identities.",
      "b) Stateless web servers.",
      "c) Batch processing jobs.",
      "d) Highly dynamic autoscaling applications.",
    ],
    answer: "a) Applications requiring persistent storage and stable network identities.",
    explanation: "StatefulSets are designed for workloads requiring persistent data and consistent identity, such as databases or distributed systems."
  },
  {
    question: "What happens if a pod managed by a Deployment fails its liveness probe?",
    question_id: 95,
    options: [
      "a) The pod is restarted by the kubelet.",
      "b) The pod is removed from the Service endpoints.",
      "c) The Deployment creates a new pod.",
      "d) The node is marked as 'NotReady.'",
    ],
    answer: "a) The pod is restarted by the kubelet.",
    explanation: "If a pod fails its liveness probe, the kubelet restarts the container to recover it."
  },
  {
    question: "What is the purpose of the terminationGracePeriodSeconds field in a pod spec?",
    question_id: 96,
    options: [
      "a) To define the time Kubernetes waits before forcefully terminating a pod.",
      "b) To set the time before scaling down a Deployment.",
      "c) To configure how long a liveness probe waits.",
      "d) To specify the time interval for readiness probes.",
    ],
    answer: "a) To define the time Kubernetes waits before forcefully terminating a pod.",
    explanation: "The terminationGracePeriodSeconds field allows applications to clean up resources before being forcefully terminated."
  },
  {
    question: "Which Kubernetes feature helps avoid scheduling pods on overloaded nodes?",
    question_id: 97,
    options: [
      "a) Resource Requests and Limits",
      "b) PriorityClasses",
      "c) Affinity Rules",
      "d) Taints and Tolerations",
    ],
    answer: "a) Resource Requests and Limits",
    explanation: "Resource Requests and Limits ensure that pods are scheduled only on nodes that can provide sufficient resources, avoiding overloads."
  },
  {
    question: "How can you run a pod on a node with a specific taint?",
    question_id: 98,
    options: [
      "a) By adding a toleration in the pod spec.",
      "b) By adding a taint in the pod spec.",
      "c) By adding a nodeSelector to the pod spec.",
      "d) By adding an affinity rule to the pod spec.",
    ],
    answer: "a) By adding a toleration in the pod spec.",
    explanation: "Tolerations in the pod spec allow pods to be scheduled on nodes with matching taints."
  },
  {
    question: "Which Kubernetes resource is used to ensure a pod runs to completion?",
    question_id: 99,
    options: [
      "a) Job",
      "b) Deployment",
      "c) ReplicaSet",
      "d) StatefulSet",
    ],
    answer: "a) Job",
    explanation: "Jobs are designed to manage pods that run tasks to completion, ensuring they execute successfully."
  }
];
