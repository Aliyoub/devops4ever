export const questions = [
  {
    question: "What is the most likely reason for a pod to remain in 'Pending' state in Kubernetes?",
    question_id: 0,
    options: [
      "a) The node does not have enough resources (CPU/Memory) to schedule the pod",
      "b) The pod is stuck in a deployment loop",
      "c) The container image is missing",
      "d) The pod configuration file is malformed",
    ],
    answer: "a) The node does not have enough resources (CPU/Memory) to schedule the pod",
    explanation: "A pod in the 'Pending' state typically indicates that Kubernetes cannot find a suitable node for the pod due to resource constraints, such as insufficient CPU or memory."
  },
  {
    question: "Which Kubernetes command is used to view logs for a specific pod?",
    question_id: 1,
    options: [
      "a) kubectl logs pod_name",
      "b) kubectl view pod pod_name",
      "c) kubectl get logs pod_name",
      "d) kubectl describe logs pod_name",
    ],
    answer: "a) kubectl logs pod_name",
    explanation: "The correct command to view logs for a specific pod is 'kubectl logs pod_name'. It fetches the logs for the containers in the specified pod."
  },
  {
    question: "You are unable to reach a service deployed in your Kubernetes cluster. What is the first command to check the service's status?",
    question_id: 2,
    options: [
      "a) kubectl get services",
      "b) kubectl describe service service_name",
      "c) kubectl get pods",
      "d) kubectl logs service_name",
    ],
    answer: "b) kubectl describe service service_name",
    explanation: "The 'kubectl describe service' command gives detailed information about the service, including the endpoints and potential issues."
  },
  {
    question: "Which of the following Kubernetes components is responsible for maintaining the desired state of a cluster?",
    question_id: 3,
    options: [
      "a) kube-proxy",
      "b) kube-scheduler",
      "c) kube-controller-manager",
      "d) kubelet",
    ],
    answer: "c) kube-controller-manager",
    explanation: "The kube-controller-manager is responsible for maintaining the desired state of the cluster by managing controllers that handle tasks like pod replication, deployment, etc."
  },
  {
    question: "What is the Kubernetes command to check if a node is ready or not?",
    question_id: 4,
    options: [
      "a) kubectl describe node node_name",
      "b) kubectl get nodes",
      "c) kubectl check node node_name",
      "d) kubectl node status",
    ],
    answer: "b) kubectl get nodes",
    explanation: "The 'kubectl get nodes' command shows the status of nodes in the cluster, including whether they are ready."
  },
  {
    question: "Which of the following is the best way to debug a pod that fails to start due to a missing environment variable?",
    question_id: 5,
    options: [
      "a) Check the pod logs with 'kubectl logs'",
      "b) Describe the pod with 'kubectl describe pod'",
      "c) Inspect the deployment configuration for environment variables",
      "d) Run the pod manually using 'kubectl run'",
    ],
    answer: "c) Inspect the deployment configuration for environment variables",
    explanation: "The best approach to debug an issue with missing environment variables is to inspect the deployment configuration (or pod specification) to verify the variables are defined correctly."
  },
  {
    question: "A pod's status is 'CrashLoopBackOff'. What does this indicate?",
    question_id: 6,
    options: [
      "a) The pod is running successfully but restarting periodically",
      "b) The pod is stuck in an infinite loop during initialization",
      "c) The pod has failed to start multiple times and Kubernetes is trying to restart it",
      "d) The pod is not yet scheduled to any node",
    ],
    answer: "c) The pod has failed to start multiple times and Kubernetes is trying to restart it",
    explanation: "'CrashLoopBackOff' indicates that the pod has failed to start or crashed several times, and Kubernetes is attempting to restart it, but the pod is repeatedly failing."
  },
  {
    question: "Which command would you use to troubleshoot a pod's network issue by checking if it can resolve DNS?",
    question_id: 7,
    options: [
      "a) kubectl exec pod_name -- nslookup kubernetes.default",
      "b) kubectl describe pod pod_name",
      "c) kubectl logs pod_name",
      "d) kubectl get network pod_name",
    ],
    answer: "a) kubectl exec pod_name -- nslookup kubernetes.default",
    explanation: "Using 'kubectl exec' with a DNS resolution command like 'nslookup' helps you verify if the pod can resolve the DNS of the Kubernetes service."
  },
  {
    question: "If a pod is unable to communicate with the Kubernetes API server, what would be the first troubleshooting step?",
    question_id: 8,
    options: [
      "a) Verify the pod's image is correct",
      "b) Check the network connectivity between the pod and the API server",
      "c) Check if the pod has a correct label",
      "d) Check the container logs for errors",
    ],
    answer: "b) Check the network connectivity between the pod and the API server",
    explanation: "Network issues are the most common cause of communication failures between a pod and the Kubernetes API server. Checking connectivity is the first step."
  },
  {
    question: "What Kubernetes object would you use to ensure that a pod runs on a specific node?",
    question_id: 9,
    options: [
      "a) PodAffinity",
      "b) NodeSelector",
      "c) Deployment",
      "d) ReplicaSet",
    ],
    answer: "b) NodeSelector",
    explanation: "NodeSelector is used to control where a pod is scheduled by specifying node labels. This is the most direct way to ensure a pod runs on a specific node."
  },
  {
    question: "What is the primary reason for a 'PodScheduled' event with no other events in a pod's description?",
    question_id: 10,
    options: [
      "a) The pod is awaiting resources from the scheduler",
      "b) The pod is in the 'CrashLoopBackOff' state",
      "c) The pod is running successfully",
      "d) The pod has no assigned node",
    ],
    answer: "a) The pod is awaiting resources from the scheduler",
    explanation: "A 'PodScheduled' event with no further events indicates that the pod is scheduled, but it is waiting for the appropriate resources (CPU, memory) to be available on the node."
  },
  {
    question: "You see that a Kubernetes pod is stuck in the 'Terminating' state. Which command would you use to forcefully delete it?",
    question_id: 11,
    options: [
      "a) kubectl delete pod pod_name --force",
      "b) kubectl terminate pod pod_name",
      "c) kubectl delete pod pod_name --grace-period=0 --force",
      "d) kubectl delete pod pod_name --skip-wait",
    ],
    answer: "c) kubectl delete pod pod_name --grace-period=0 --force",
    explanation: "Using 'kubectl delete pod pod_name --grace-period=0 --force' will force the pod to be deleted immediately, without waiting for graceful termination."
  },
  {
    question: "What is the most likely cause of a '503 Service Unavailable' error in a Kubernetes service?",
    question_id: 12,
    options: [
      "a) The service is not exposing the correct port",
      "b) The pod is running but is unresponsive",
      "c) The pod is not scheduled to a node",
      "d) The service is misconfigured with incorrect endpoints",
    ],
    answer: "d) The service is misconfigured with incorrect endpoints",
    explanation: "A '503 Service Unavailable' error usually indicates that the service is not able to find available endpoints, often due to incorrect or missing pod endpoints in the service definition."
  },
  {
    question: "Which Kubernetes tool allows you to view detailed information about the state of the cluster?",
    question_id: 13,
    options: [
      "a) kubectl describe",
      "b) kubectl state",
      "c) kubectl logs",
      "d) kubectl get",
    ],
    answer: "a) kubectl describe",
    explanation: "'kubectl describe' provides detailed information about various resources, including pods, nodes, services, etc., which can help in troubleshooting."
  },
  {
    question: "What should you check first if a Kubernetes pod has a 'NetworkPolicy' applied and cannot communicate with other pods?",
    question_id: 14,
    options: [
      "a) Check the pod’s security context",
      "b) Check the network policy rules for ingress and egress",
      "c) Check the pod’s resource limits",
      "d) Check the service configuration",
    ],
    answer: "b) Check the network policy rules for ingress and egress",
    explanation: "If a pod is unable to communicate, the first thing to check is the network policy, as it may be restricting ingress or egress traffic between the pod and other resources."
  },
  {
    question: "Which command would you use to see if the Kubernetes scheduler is properly assigning pods to nodes?",
    question_id: 15,
    options: [
      "a) kubectl get nodes",
      "b) kubectl describe pod pod_name",
      "c) kubectl get events",
      "d) kubectl describe scheduler",
    ],
    answer: "c) kubectl get events",
    explanation: "'kubectl get events' shows the scheduling events and will provide insight into whether there are issues with pod scheduling."
  },
  {
    question: "A deployment is stuck in the 'RollingUpdate' state. Which of the following could be a reason?",
    question_id: 16,
    options: [
      "a) The pod’s image is corrupted",
      "b) The Deployment has no replicas set",
      "c) There is insufficient CPU or memory on the node",
      "d) The pod is using a NodeSelector",
    ],
    answer: "c) There is insufficient CPU or memory on the node",
    explanation: "If the node does not have sufficient resources (CPU or memory), the rolling update cannot proceed, and the deployment will remain in the 'RollingUpdate' state."
  },
  {
    question: "What should you do first if you notice that a pod is running but is unable to connect to the Kubernetes API server?",
    question_id: 17,
    options: [
      "a) Restart the pod",
      "b) Verify network policies",
      "c) Inspect the pod's resource limits",
      "d) Check the pod's container logs",
    ],
    answer: "b) Verify network policies",
    explanation: "Network policies could be restricting the pod’s access to the Kubernetes API server. Verifying and troubleshooting network policies should be the first step."
  },
  {
    question: "You are debugging a Kubernetes pod, and the pod fails with a 'Readiness Probe Failed' error. What could be the cause?",
    question_id: 18,
    options: [
      "a) The pod is running but not yet initialized",
      "b) The pod is not listening on the correct port",
      "c) The pod is exceeding its resource limits",
      "d) The pod’s DNS resolution is misconfigured",
    ],
    answer: "b) The pod is not listening on the correct port",
    explanation: "A 'Readiness Probe Failed' error often occurs when the pod’s container is not responding on the correct port or is not ready to serve traffic."
  },
  {
    question: "Which Kubernetes object is used to ensure that multiple pods run across different nodes in the cluster?",
    question_id: 19,
    options: [
      "a) PodAffinity",
      "b) PodAntiAffinity",
      "c) NodeSelector",
      "d) ReplicaSet",
    ],
    answer: "b) PodAntiAffinity",
    explanation: "PodAntiAffinity allows you to specify that certain pods should not run on the same node, ensuring better distribution of pods across different nodes in the cluster."
  },
  {
    question: "You have a pod in Kubernetes, and its logs indicate 'ImagePullBackOff'. What does this mean?",
    question_id: 20,
    options: [
      "a) The pod is unable to pull the container image from the registry",
      "b) The pod is in a crash loop and Kubernetes is retrying",
      "c) The image is not compatible with the node's architecture",
      "d) The container's resource limits are too low",
    ],
    answer: "a) The pod is unable to pull the container image from the registry",
    explanation: "The 'ImagePullBackOff' error occurs when Kubernetes cannot pull the required container image from the container registry, often due to authentication issues or the image not being found."
  },
  {
    question: "Which Kubernetes component is responsible for keeping track of node health and scheduling pods?",
    question_id: 21,
    options: [
      "a) kubelet",
      "b) kube-scheduler",
      "c) kube-controller-manager",
      "d) kube-proxy",
    ],
    answer: "b) kube-scheduler",
    explanation: "The kube-scheduler is responsible for selecting which node a pod should run on based on available resources, affinity rules, and other constraints."
  },
  {
    question: "What command would you use to check if a pod is being correctly scheduled to a node?",
    question_id: 22,
    options: [
      "a) kubectl get pods",
      "b) kubectl describe pod pod_name",
      "c) kubectl get events",
      "d) kubectl describe node node_name",
    ],
    answer: "b) kubectl describe pod pod_name",
    explanation: "Using 'kubectl describe pod' provides detailed information about the pod’s scheduling status and why it may not have been scheduled to a node."
  },
  {
    question: "What is the primary function of the kube-proxy in Kubernetes?",
    question_id: 23,
    options: [
      "a) Handling container logs",
      "b) Load balancing traffic to services",
      "c) Ensuring that pods stay in sync with the desired state",
      "d) Enforcing security policies",
    ],
    answer: "b) Load balancing traffic to services",
    explanation: "The kube-proxy is responsible for managing network traffic to services, including load balancing traffic to the appropriate pods."
  },
  {
    question: "If a pod's container is consistently failing to start, what is the best first step in troubleshooting?",
    question_id: 24,
    options: [
      "a) Check the container's resource limits",
      "b) Check the pod's logs using 'kubectl logs'",
      "c) Inspect the service configuration",
      "d) Recreate the pod",
    ],
    answer: "b) Check the pod's logs using 'kubectl logs'",
    explanation: "Checking the pod's logs is the best first step in identifying why a container is failing to start. It will often provide error messages or other clues."
  },
  {
    question: "What is the most common reason for a pod to fail during the 'PreStop' hook execution?",
    question_id: 25,
    options: [
      "a) The hook takes too long to complete",
      "b) The pod is using an incorrect image",
      "c) The pod's resource limits are exceeded",
      "d) The node becomes unavailable",
    ],
    answer: "a) The hook takes too long to complete",
    explanation: "The 'PreStop' hook is used to perform cleanup tasks before a pod is terminated. If the hook takes too long to execute, it can cause the pod to fail during termination."
  },
  {
    question: "If a pod is unable to pull an image due to authentication issues, which of the following can resolve the issue?",
    question_id: 26,
    options: [
      "a) Updating the Kubernetes version",
      "b) Configuring a Docker registry secret",
      "c) Changing the pod's resource requests",
      "d) Rebuilding the image",
    ],
    answer: "b) Configuring a Docker registry secret",
    explanation: "Authentication issues when pulling images from a private registry can be resolved by creating and configuring a Docker registry secret in Kubernetes, which allows the pod to authenticate properly."
  },
  {
    question: "Which Kubernetes object defines the deployment and scaling properties of a pod in a cluster?",
    question_id: 27,
    options: [
      "a) ReplicaSet",
      "b) Deployment",
      "c) Pod",
      "d) StatefulSet",
    ],
    answer: "b) Deployment",
    explanation: "A Deployment defines how many replicas of a pod should run, manages the scaling of pods, and ensures that the specified number of pods is maintained in the cluster."
  },
  {
    question: "If you want to ensure a pod only runs on a node with a specific label, which Kubernetes feature should you use?",
    question_id: 28,
    options: [
      "a) PodAffinity",
      "b) NodeSelector",
      "c) Taints and Tolerations",
      "d) Resource Requests",
    ],
    answer: "b) NodeSelector",
    explanation: "NodeSelector is used to constrain the scheduling of pods to nodes that have specific labels, ensuring that the pod runs only on nodes with those labels."
  },
  {
    question: "What is the most likely cause of a pod being stuck in the 'Pending' state for a long period of time?",
    question_id: 29,
    options: [
      "a) The node has insufficient resources to run the pod",
      "b) The pod's container image is invalid",
      "c) The pod is misconfigured with incorrect environment variables",
      "d) The service is not properly configured",
    ],
    answer: "a) The node has insufficient resources to run the pod",
    explanation: "When a pod is stuck in the 'Pending' state, it's often because there are insufficient resources (CPU, memory, etc.) available on any node to schedule the pod."
  },
  {
    question: "Which of the following is the most appropriate action to take if a pod is not being scheduled due to resource constraints?",
    question_id: 30,
    options: [
      "a) Increase the pod's resource requests",
      "b) Decrease the pod's resource limits",
      "c) Check if the node has a taint preventing the pod's scheduling",
      "d) Check if the pod's image is available",
    ],
    answer: "a) Increase the pod's resource requests",
    explanation: "If a pod is not being scheduled due to resource constraints, increasing the pod's resource requests could help by ensuring the pod has enough resources to be scheduled on an appropriate node."
  },
  {
    question: "When a pod's container image is invalid, which of the following errors will appear?",
    question_id: 31,
    options: [
      "a) ImagePullBackOff",
      "b) CrashLoopBackOff",
      "c) ErrImagePull",
      "d) PodEvicted",
    ],
    answer: "c) ErrImagePull",
    explanation: "The 'ErrImagePull' error occurs when Kubernetes cannot pull the image from the container registry, often due to an invalid or nonexistent image."
  },
  {
    question: "What does a 'PodEvicted' status indicate in Kubernetes?",
    question_id: 32,
    options: [
      "a) The pod is unable to start due to missing dependencies",
      "b) The pod was forcibly removed due to resource constraints",
      "c) The pod has crashed due to a container failure",
      "d) The pod is waiting to be rescheduled on a different node",
    ],
    answer: "b) The pod was forcibly removed due to resource constraints",
    explanation: "A 'PodEvicted' status typically occurs when the node on which the pod was running is under resource pressure (e.g., low memory), and the pod is evicted to free resources."
  },
  {
    question: "Which of the following Kubernetes components ensures that pods run according to the desired state, even when node failures occur?",
    question_id: 33,
    options: [
      "a) kubelet",
      "b) kube-scheduler",
      "c) kube-controller-manager",
      "d) etcd",
    ],
    answer: "c) kube-controller-manager",
    explanation: "The kube-controller-manager ensures that the desired state of the cluster is maintained by managing controllers such as ReplicaSets, which ensure that the correct number of pods are running."
  },
  {
    question: "What should you do if a pod's readiness probe fails repeatedly?",
    question_id: 34,
    options: [
      "a) Check the resource limits of the pod",
      "b) Restart the pod to force a fresh probe",
      "c) Review the application inside the pod to ensure it's responding correctly",
      "d) Delete the pod to allow Kubernetes to recreate it",
    ],
    answer: "c) Review the application inside the pod to ensure it's responding correctly",
    explanation: "A failing readiness probe generally indicates that the application inside the pod is not responding correctly or not ready to accept traffic. Inspecting the application and its configuration is the best next step."
  },
  {
    question: "Which of the following Kubernetes objects can be used to automatically restart a pod if it crashes or fails?",
    question_id: 35,
    options: [
      "a) Deployment",
      "b) StatefulSet",
      "c) ReplicaSet",
      "d) Pod",
    ],
    answer: "a) Deployment",
    explanation: "A Deployment ensures that the desired number of pods are running at any given time, and if a pod crashes, the Deployment will automatically create new replicas to replace it."
  },
  {
    question: "What Kubernetes command can you use to check if a node is under resource pressure?",
    question_id: 36,
    options: [
      "a) kubectl describe node node_name",
      "b) kubectl top node node_name",
      "c) kubectl get nodes",
      "d) kubectl get pods --all-namespaces",
    ],
    answer: "b) kubectl top node node_name",
    explanation: "The 'kubectl top' command shows resource usage metrics, including CPU and memory usage, which helps in determining if a node is under resource pressure."
  },
  {
    question: "If a Kubernetes pod is failing due to insufficient memory, which command can you use to identify the cause?",
    question_id: 37,
    options: [
      "a) kubectl logs pod_name",
      "b) kubectl describe pod pod_name",
      "c) kubectl get events",
      "d) kubectl top pod pod_name",
    ],
    answer: "d) kubectl top pod pod_name",
    explanation: "'kubectl top pod' provides resource usage metrics for pods, including memory and CPU usage, helping to identify if a pod is exceeding its memory limits."
  },
  {
    question: "When troubleshooting a Kubernetes service that is not routing traffic correctly, which of the following is a good first step?",
    question_id: 38,
    options: [
      "a) Check if the pod labels match the service selector",
      "b) Check the service’s resource limits",
      "c) Recreate the service",
      "d) Check the pod’s logs",
    ],
    answer: "a) Check if the pod labels match the service selector",
    explanation: "Kubernetes services route traffic to pods based on labels. If the service is not routing traffic correctly, it's important to verify that the pod labels match the service selector."
  },
  {
    question: "What does the 'kubectl describe pod' command provide that 'kubectl get pod' does not?",
    question_id: 39,
    options: [
      "a) Detailed status of the pod’s containers, events, and resource usage",
      "b) The pod's IP address",
      "c) The pod’s owner reference",
      "d) The pod’s logs",
    ],
    answer: "a) Detailed status of the pod’s containers, events, and resource usage",
    explanation: "'kubectl describe pod' provides much more detailed information about a pod than 'kubectl get pod', including events, container status, resource usage, and more."
  },
  {
    question: "Which Kubernetes feature allows you to automatically restart failed containers in a pod?",
    question_id: 40,
    options: [
      "a) Pod RestartPolicy",
      "b) Deployment",
      "c) StatefulSet",
      "d) ReplicaSet",
    ],
    answer: "a) Pod RestartPolicy",
    explanation: "The 'RestartPolicy' in the pod spec controls the behavior of pod container restarts. By default, it is set to 'Always', which ensures that containers are restarted if they fail."
  },
  {
    question: "What would you expect to see in the logs if a pod’s container is unable to find a required environment variable?",
    question_id: 41,
    options: [
      "a) 'Error: Missing environment variable'",
      "b) 'CrashLoopBackOff' error",
      "c) 'EnvVarNotFound' error",
      "d) 'Pod initialization failed'",
    ],
    answer: "a) 'Error: Missing environment variable'",
    explanation: "If a required environment variable is missing, the application inside the container might log an error indicating that a specific environment variable was not found or is missing."
  },
  {
    question: "Which of the following events indicates that a pod was successfully rescheduled after a node failure?",
    question_id: 42,
    options: [
      "a) 'PodScheduled' event",
      "b) 'NodeNotReady' event",
      "c) 'PodEvicted' event",
      "d) 'NodeLost' event",
    ],
    answer: "a) 'PodScheduled' event",
    explanation: "When a pod is successfully rescheduled after a node failure, you will see a 'PodScheduled' event indicating that the pod has been assigned to a new node."
  },
  {
    question: "What could cause a Kubernetes pod to be stuck in 'ContainerCreating' state for a prolonged period?",
    question_id: 43,
    options: [
      "a) The pod is awaiting resources",
      "b) The container image cannot be pulled",
      "c) The node is out of disk space",
      "d) All of the above",
    ],
    answer: "d) All of the above",
    explanation: "The 'ContainerCreating' state can indicate several issues, such as resource constraints (e.g., CPU or memory), issues with pulling the container image, or lack of disk space on the node."
  },
  {
    question: "How can you identify if a Kubernetes pod is being terminated due to a resource constraint?",
    question_id: 44,
    options: [
      "a) Check the pod’s logs for 'OOMKilled' messages",
      "b) Inspect the pod’s resource limits and requests",
      "c) Use 'kubectl describe pod' to see events",
      "d) All of the above",
    ],
    answer: "d) All of the above",
    explanation: "By checking the pod's logs for 'OOMKilled' messages, inspecting the pod's resource limits, and reviewing the events using 'kubectl describe pod', you can determine if the pod was terminated due to a resource constraint like memory."
  },
  {
    question: "Which of the following commands provides real-time metrics about pod CPU and memory usage?",
    question_id: 45,
    options: [
      "a) kubectl describe pod pod_name",
      "b) kubectl top pod pod_name",
      "c) kubectl logs pod_name",
      "d) kubectl get pods --all-namespaces",
    ],
    answer: "b) kubectl top pod pod_name",
    explanation: "The 'kubectl top pod' command provides real-time CPU and memory usage metrics for the pod, which can be useful for troubleshooting resource-related issues."
  },
  {
    question: "What does the 'CrashLoopBackOff' error typically indicate?",
    question_id: 46,
    options: [
      "a) The pod is trying to restart, but the container keeps crashing",
      "b) The pod is stuck in a pending state",
      "c) The container image is not found",
      "d) The pod is unable to reach the Kubernetes API server",
    ],
    answer: "a) The pod is trying to restart, but the container keeps crashing",
    explanation: "'CrashLoopBackOff' occurs when the pod is repeatedly trying to start, but the container inside the pod crashes. Kubernetes will back off and attempt to restart the pod after a delay."
  },
  {
    question: "Which Kubernetes feature should you use to ensure that a pod only runs on a node with a specific amount of available memory?",
    question_id: 47,
    options: [
      "a) Resource Requests and Limits",
      "b) Taints and Tolerations",
      "c) Node Affinity",
      "d) PodAffinity",
    ],
    answer: "a) Resource Requests and Limits",
    explanation: "Resource requests and limits are used to ensure that a pod is scheduled on a node with sufficient CPU and memory resources to meet the pod's requirements."
  },
  {
    question: "What could cause a Kubernetes service to fail to route traffic to a pod?",
    question_id: 48,
    options: [
      "a) The pod is not exposing the correct port",
      "b) The service’s selector does not match the pod's labels",
      "c) The pod is not running on a node with sufficient resources",
      "d) The service is misconfigured with the wrong clusterIP",
    ],
    answer: "b) The service’s selector does not match the pod's labels",
    explanation: "If the service’s selector does not match the labels of the pods it should route traffic to, the service will fail to route traffic to the pods."
  },
  {
    question: "Which Kubernetes object allows you to run pods with a persistent identity across pod restarts?",
    question_id: 49,
    options: [
      "a) StatefulSet",
      "b) ReplicaSet",
      "c) Deployment",
      "d) DaemonSet",
    ],
    answer: "a) StatefulSet",
    explanation: "A StatefulSet ensures that each pod has a persistent identity (with stable network names and storage volumes) that remains even after pod restarts or rescheduling."
  },
  {
    question: "What is the first step you should take when a pod cannot reach an external service on the internet?",
    question_id: 50,
    options: [
      "a) Verify the pod's DNS configuration",
      "b) Check if the pod is using the correct image",
      "c) Ensure the pod has the correct resource limits",
      "d) Inspect the pod's application logs",
    ],
    answer: "a) Verify the pod's DNS configuration",
    explanation: "When a pod cannot reach an external service, the issue may be related to DNS resolution. Verifying the pod’s DNS configuration should be the first step."
  },
  {
    question: "What is the purpose of a readiness probe in Kubernetes?",
    question_id: 51,
    options: [
      "a) To check if the pod is running correctly and ready to serve traffic",
      "b) To ensure that a pod is healthy and can be terminated safely",
      "c) To check if the pod's container has finished downloading its image",
      "d) To automatically scale the pod based on its resource usage",
    ],
    answer: "a) To check if the pod is running correctly and ready to serve traffic",
    explanation: "A readiness probe is used to determine if a pod is ready to accept traffic. If the readiness probe fails, Kubernetes will not send traffic to the pod."
  },
  {
    question: "What would cause a Kubernetes pod to enter the 'CrashLoopBackOff' state?",
    question_id: 52,
    options: [
      "a) The pod was evicted due to resource pressure",
      "b) The container inside the pod failed to start or crashed repeatedly",
      "c) The pod cannot pull its container image",
      "d) The pod is stuck in a 'ContainerCreating' state",
    ],
    answer: "b) The container inside the pod failed to start or crashed repeatedly",
    explanation: "A 'CrashLoopBackOff' occurs when a pod is repeatedly trying to start but its container crashes each time. Kubernetes will back off and attempt to restart the pod after a delay."
  },
  {
    question: "If a pod cannot pull an image due to an authentication error, which Kubernetes feature can help resolve this issue?",
    question_id: 53,
    options: [
      "a) NodeSelector",
      "b) PodAffinity",
      "c) Docker registry secret",
      "d) ReplicaSet",
    ],
    answer: "c) Docker registry secret",
    explanation: "To resolve image pull authentication errors, you can create a Docker registry secret and link it to the pod so it can authenticate with the registry."
  },
  {
    question: "Which of the following would you check first if a Kubernetes pod is not scheduling on a node?",
    question_id: 54,
    options: [
      "a) Verify if the node has sufficient resources to run the pod",
      "b) Ensure the pod's image is available",
      "c) Confirm that the pod’s environment variables are correctly set",
      "d) Check the network policies",
    ],
    answer: "a) Verify if the node has sufficient resources to run the pod",
    explanation: "If a pod is not scheduling, the first thing to check is whether the node has enough resources (CPU, memory, etc.) to accommodate the pod."
  },
  {
    question: "What could cause a pod's container to be stuck in the 'Terminating' state?",
    question_id: 55,
    options: [
      "a) The pod has a failing preStop hook",
      "b) The pod is stuck in a 'CrashLoopBackOff' state",
      "c) The pod is waiting for resources to become available",
      "d) The pod is in the process of scaling down",
    ],
    answer: "a) The pod has a failing preStop hook",
    explanation: "If a pod's preStop hook fails or takes too long, the pod can be stuck in the 'Terminating' state. The preStop hook must complete successfully for the pod to be terminated."
  },
  {
    question: "Which Kubernetes command can you use to view the detailed status of an individual pod, including events and conditions?",
    question_id: 56,
    options: [
      "a) kubectl describe pod pod_name",
      "b) kubectl get pod pod_name -o wide",
      "c) kubectl logs pod_name",
      "d) kubectl top pod pod_name",
    ],
    answer: "a) kubectl describe pod pod_name",
    explanation: "'kubectl describe pod' provides a detailed status of the pod, including its events, resource usage, and conditions."
  },
  {
    question: "What is a likely cause if Kubernetes nodes are showing as 'NotReady'?",
    question_id: 57,
    options: [
      "a) The kubelet on the node is not running or reporting correctly",
      "b) The node is under resource pressure",
      "c) Network connectivity issues prevent communication with the master node",
      "d) All of the above",
    ],
    answer: "d) All of the above",
    explanation: "If a node is showing as 'NotReady', it could be due to several factors, such as the kubelet not running correctly, resource pressure, or network connectivity issues preventing the node from communicating with the master."
  },
  {
    question: "Which Kubernetes feature can help prevent a pod from being scheduled on a node that doesn't meet its resource requirements?",
    question_id: 58,
    options: [
      "a) Resource limits",
      "b) Taints and Tolerations",
      "c) Affinity rules",
      "d) NodeSelector",
    ],
    answer: "b) Taints and Tolerations",
    explanation: "Taints and Tolerations allow you to mark nodes with taints that prevent pods from being scheduled on them unless the pod explicitly tolerates the taint."
  },
  {
    question: "When a pod is stuck in 'Pending' state, which of the following is the best way to diagnose the issue?",
    question_id: 59,
    options: [
      "a) Use 'kubectl describe pod pod_name' to check for event logs and scheduling issues",
      "b) Restart the pod",
      "c) Check the status of the kube-scheduler",
      "d) Check the status of the pod’s containers using 'kubectl logs'",
    ],
    answer: "a) Use 'kubectl describe pod pod_name' to check for event logs and scheduling issues",
    explanation: "'kubectl describe pod' will show detailed event logs, including information about why a pod is stuck in the 'Pending' state, such as insufficient resources or scheduling conflicts."
  },
  {
    question: "What is the typical cause of a 'FailedScheduling' event in Kubernetes?",
    question_id: 60,
    options: [
      "a) The pod's resource requests are higher than what is available on the nodes",
      "b) The node is under resource pressure and cannot accommodate the pod",
      "c) The pod's image is not available",
      "d) Both a and b",
    ],
    answer: "d) Both a and b",
    explanation: "A 'FailedScheduling' event usually indicates that there are insufficient resources (CPU, memory, etc.) on the node to meet the pod’s resource requests, or that the pod is unable to be scheduled due to other constraints."
  },
  {
    question: "What is a likely cause if a pod’s containers are not logging anything after starting?",
    question_id: 61,
    options: [
      "a) The pod is using an incorrect logging configuration",
      "b) The pod is waiting for a readiness probe to pass",
      "c) The pod’s containers have no logging driver configured",
      "d) The pod’s logging volume is full",
    ],
    answer: "a) The pod is using an incorrect logging configuration",
    explanation: "If containers are not logging anything, it’s likely due to an issue with the logging configuration. For example, the application inside the container might not be writing logs to the expected location."
  },
  {
    question: "What can you use to monitor a Kubernetes cluster’s control plane for possible issues?",
    question_id: 62,
    options: [
      "a) kube-apiserver logs",
      "b) kubectl top nodes",
      "c) Prometheus metrics",
      "d) kubectl logs -n kube-system",
    ],
    answer: "a) kube-apiserver logs",
    explanation: "The 'kube-apiserver' logs provide important insights into the status of the control plane. They can help diagnose issues related to the API server, such as authentication failures or resource constraints."
  },
  {
    question: "Which command can be used to identify a pod that is causing network connectivity issues in a Kubernetes cluster?",
    question_id: 63,
    options: [
      "a) kubectl logs pod_name",
      "b) kubectl describe pod pod_name",
      "c) kubectl get events --all-namespaces",
      "d) kubectl exec pod_name -- ping <target_ip>",
    ],
    answer: "d) kubectl exec pod_name -- ping <target_ip>",
    explanation: "Using 'kubectl exec' allows you to run commands inside a pod. By using 'ping' to test connectivity to a target IP, you can identify network issues that might be affecting the pod."
  },
  {
    question: "What is the effect of a pod’s resource limits being set too low?",
    question_id: 64,
    options: [
      "a) The pod will not be scheduled on any nodes",
      "b) The pod might be killed and restarted due to resource exhaustion",
      "c) The pod will consume all available resources of the node",
      "d) The pod will be stuck in a pending state",
    ],
    answer: "b) The pod might be killed and restarted due to resource exhaustion",
    explanation: "If a pod's resource limits are set too low, Kubernetes may kill the pod when it exceeds these limits, leading to it being restarted and potentially entering a 'CrashLoopBackOff' state."
  },
  {
    question: "Which of the following could prevent a Kubernetes pod from communicating with other pods on the same network?",
    question_id: 65,
    options: [
      "a) Network policies",
      "b) Resource constraints",
      "c) Incorrect pod affinity settings",
      "d) Incorrect replica count",
    ],
    answer: "a) Network policies",
    explanation: "Network policies can restrict pod-to-pod communication within the cluster. Misconfigured or overly restrictive network policies might prevent a pod from communicating with others."
  },
  {
    question: "How can you check if a pod is being terminated due to a failed liveness probe?",
    question_id: 66,
    options: [
      "a) Check the pod’s logs for liveness probe failure messages",
      "b) Inspect the pod's events using 'kubectl describe pod'",
      "c) Use 'kubectl get pods' to check the pod’s current status",
      "d) All of the above",
    ],
    answer: "d) All of the above",
    explanation: "You can check the pod's logs, inspect its events with 'kubectl describe pod', or check its status with 'kubectl get pods' to diagnose issues with liveness probes."
  },
  {
    question: "What does the 'kubectl get events' command show in a Kubernetes cluster?",
    question_id: 67,
    options: [
      "a) The detailed logs of a pod’s containers",
      "b) A history of events related to cluster resources, such as pods and nodes",
      "c) The status of all running services",
      "d) A list of active network connections between pods",
    ],
    answer: "b) A history of events related to cluster resources, such as pods and nodes",
    explanation: "'kubectl get events' shows a log of recent events in the cluster, including resource creation, deletion, failures, and status changes, which can be useful for troubleshooting."
  },
  {
    question: "What could be a cause of a 'Pod Evicted' event in Kubernetes?",
    question_id: 68,
    options: [
      "a) Resource constraints like CPU or memory pressure on the node",
      "b) The pod exceeded its resource limits",
      "c) The pod was rescheduled to another node",
      "d) Both a and b",
    ],
    answer: "d) Both a and b",
    explanation: "Pods can be evicted due to resource pressure (e.g., CPU or memory exhaustion) on the node or because they exceeded their resource limits."
  },
  {
    question: "Which command can help you diagnose if a pod is consuming too much CPU or memory?",
    question_id: 69,
    options: [
      "a) kubectl logs pod_name",
      "b) kubectl describe pod pod_name",
      "c) kubectl top pod pod_name",
      "d) kubectl get pods --all-namespaces",
    ],
    answer: "c) kubectl top pod pod_name",
    explanation: "The 'kubectl top' command provides real-time metrics for a pod, including CPU and memory usage, which can help identify if a pod is consuming too many resources."
  },
  {
    question: "What could cause the 'kube-apiserver' to be unresponsive in a Kubernetes cluster?",
    question_id: 70,
    options: [
      "a) Insufficient CPU or memory resources for the API server",
      "b) Network partition preventing communication with etcd",
      "c) Issues with the API server configuration",
      "d) All of the above",
    ],
    answer: "d) All of the above",
    explanation: "The 'kube-apiserver' might become unresponsive due to insufficient resources, network issues with etcd, or misconfigurations. Each of these factors can affect the availability of the API server."
  },
  {
    question: "What could be the reason a Kubernetes pod is not getting scheduled despite available resources?",
    question_id: 71,
    options: [
      "a) The pod's resource requests exceed the node’s available resources",
      "b) There is a taint on the node that the pod does not tolerate",
      "c) The pod is using an invalid image",
      "d) Both a and b",
    ],
    answer: "d) Both a and b",
    explanation: "A pod may not get scheduled if its resource requests exceed the node’s available resources, or if the node has a taint that the pod does not tolerate."
  },
  {
    question: "If a Kubernetes pod is stuck in the 'ContainerCreating' state, what could be the likely cause?",
    question_id: 72,
    options: [
      "a) The container image is being pulled from a private registry and there is an authentication issue",
      "b) The pod is waiting for resources to be allocated on the node",
      "c) The pod is stuck waiting for a persistent volume to be attached",
      "d) All of the above",
    ],
    answer: "d) All of the above",
    explanation: "A pod can remain in the 'ContainerCreating' state due to various reasons such as image pull issues, resource allocation problems, or persistent volume attachment delays."
  },
  {
    question: "What is a likely cause of the 'No resources found' error when running 'kubectl describe pod'?",
    question_id: 73,
    options: [
      "a) The pod is not running or is pending",
      "b) The pod has been evicted from the node",
      "c) The pod’s logs have not been created yet",
      "d) The pod is not scheduled yet",
    ],
    answer: "a) The pod is not running or is pending",
    explanation: "If 'No resources found' is returned when running 'kubectl describe pod', it typically means the pod is not in a running or pending state, and thus no resources are associated with it."
  },
  {
    question: "What Kubernetes resource can be used to ensure a pod is rescheduled on a different node after failure?",
    question_id: 74,
    options: [
      "a) Deployment",
      "b) ReplicaSet",
      "c) StatefulSet",
      "d) DaemonSet",
    ],
    answer: "a) Deployment",
    explanation: "A Deployment ensures that a pod is rescheduled onto a different node if it fails. It manages replicas of the pod and ensures the desired number of pods are always running."
  },
  {
    question: "Which Kubernetes component should be checked if a pod is not being scheduled due to a 'resource quota' issue?",
    question_id: 75,
    options: [
      "a) kubelet",
      "b) kube-scheduler",
      "c) ResourceQuota",
      "d) kube-apiserver",
    ],
    answer: "c) ResourceQuota",
    explanation: "If a pod is not scheduled due to a 'resource quota' issue, you should check the ResourceQuota object in the namespace. It defines the resource limits for the namespace."
  },
  {
    question: "What Kubernetes command allows you to view the detailed logs of a pod’s containers?",
    question_id: 76,
    options: [
      "a) kubectl describe pod pod_name",
      "b) kubectl logs pod_name",
      "c) kubectl get pod pod_name -o yaml",
      "d) kubectl logs -f pod_name",
    ],
    answer: "b) kubectl logs pod_name",
    explanation: "'kubectl logs' is used to retrieve logs from the containers in a pod. It shows the output of the container’s standard output and standard error streams."
  },
  {
    question: "Which Kubernetes event would indicate that a pod is unable to access a required persistent volume?",
    question_id: 77,
    options: [
      "a) FailedMount",
      "b) FailedScheduling",
      "c) CrashLoopBackOff",
      "d) ResourceExhaustion",
    ],
    answer: "a) FailedMount",
    explanation: "The 'FailedMount' event occurs when Kubernetes is unable to mount a persistent volume into a pod. This can happen if the volume is not available or there are access issues."
  },
  {
    question: "How would you diagnose if a pod is experiencing CPU throttling?",
    question_id: 78,
    options: [
      "a) By checking the pod’s logs for errors related to CPU usage",
      "b) By using the 'kubectl top pod' command to check the pod’s CPU usage",
      "c) By inspecting the pod’s configuration for CPU limits",
      "d) All of the above",
    ],
    answer: "d) All of the above",
    explanation: "To diagnose CPU throttling, you can check the pod’s logs for related errors, use 'kubectl top pod' to inspect resource usage, and review the pod’s resource limits in its configuration."
  },
  {
    question: "What does a 'PodHasNoMemory' error indicate in Kubernetes?",
    question_id: 79,
    options: [
      "a) The pod has exceeded its memory limit and is being killed",
      "b) The pod is unable to allocate memory due to a resource constraint on the node",
      "c) The pod is stuck in the 'Pending' state due to insufficient memory",
      "d) The pod does not have memory resources defined in its configuration",
    ],
    answer: "a) The pod has exceeded its memory limit and is being killed",
    explanation: "A 'PodHasNoMemory' error occurs when a pod exceeds its memory limit, causing Kubernetes to kill the pod to prevent the node from running out of memory."
  },
  {
    question: "Which of the following Kubernetes resources is used to manage the deployment of stateless applications?",
    question_id: 80,
    options: [
      "a) StatefulSet",
      "b) Deployment",
      "c) ReplicaSet",
      "d) DaemonSet",
    ],
    answer: "b) Deployment",
    explanation: "A Deployment is used to manage stateless applications. It ensures that the desired number of pod replicas are running at all times and handles the deployment and scaling of applications."
  },
  {
    question: "What could be the reason if a Kubernetes pod is constantly crashing and going into 'CrashLoopBackOff' state?",
    question_id: 81,
    options: [
      "a) The pod's application is crashing due to a misconfiguration",
      "b) The pod is being evicted due to resource constraints",
      "c) The container image is not available",
      "d) Both a and b",
    ],
    answer: "d) Both a and b",
    explanation: "A pod in 'CrashLoopBackOff' may be crashing due to application misconfigurations, resource limits being exceeded, or issues with the container image. Resource constraints and application bugs are common causes."
  },
  {
    question: "Which of the following can help you troubleshoot a pod stuck in 'Pending' state due to insufficient resources?",
    question_id: 82,
    options: [
      "a) kubectl describe pod <pod_name>",
      "b) kubectl get events",
      "c) kubectl top node <node_name>",
      "d) All of the above",
    ],
    answer: "d) All of the above",
    explanation: "To troubleshoot a pod stuck in 'Pending' due to resource issues, you can use 'kubectl describe pod' for detailed pod status, 'kubectl get events' for any event messages, and 'kubectl top node' to check node resource utilization."
  },
  {
    question: "What does the 'kube-scheduler' do in the context of pod scheduling?",
    question_id: 83,
    options: [
      "a) It assigns a pod to a node based on resource availability",
      "b) It checks the health of nodes",
      "c) It manages container runtime on nodes",
      "d) It ensures that the container images are available",
    ],
    answer: "a) It assigns a pod to a node based on resource availability",
    explanation: "The 'kube-scheduler' is responsible for assigning pods to nodes in the cluster. It takes into account resource availability, affinity/anti-affinity rules, taints, and tolerations."
  },
  {
    question: "What could cause a pod’s deployment to fail when the deployment manifest specifies an invalid image?",
    question_id: 84,
    options: [
      "a) The container image cannot be pulled from the registry",
      "b) The pod is not scheduled due to resource limits",
      "c) The deployment is stuck in 'Pending' state",
      "d) Both a and c",
    ],
    answer: "d) Both a and c",
    explanation: "If the specified container image cannot be pulled (e.g., invalid image or authentication issue), the pod will fail to deploy and may remain in a 'Pending' state or fail to start."
  },
  {
    question: "What does a pod’s 'ReadinessProbe' determine?",
    question_id: 85,
    options: [
      "a) Whether the container is successfully running",
      "b) Whether the pod is ready to accept traffic",
      "c) Whether the pod is healthy and should be restarted",
      "d) Whether the pod can connect to other pods",
    ],
    answer: "b) Whether the pod is ready to accept traffic",
    explanation: "The 'ReadinessProbe' checks if a pod is ready to accept traffic. If it fails, the pod is marked as not ready and will not receive traffic until it becomes ready again."
  },
  {
    question: "If a pod’s container cannot pull its image due to an authentication error with the Docker registry, what can you do to resolve the issue?",
    question_id: 86,
    options: [
      "a) Update the pod’s image to one that does not require authentication",
      "b) Create a Kubernetes Secret containing the Docker registry credentials and use it in the pod specification",
      "c) Change the Kubernetes cluster's credentials for Docker",
      "d) Increase the timeout for pulling the image",
    ],
    answer: "b) Create a Kubernetes Secret containing the Docker registry credentials and use it in the pod specification",
    explanation: "To fix the authentication error, you can create a Secret to store the Docker registry credentials and reference it in the pod’s specification under 'imagePullSecrets'."
  },
  {
    question: "What is the role of the 'kubelet' in a Kubernetes cluster?",
    question_id: 87,
    options: [
      "a) It manages the control plane components",
      "b) It is responsible for managing the lifecycle of pods and containers on nodes",
      "c) It schedules pods on nodes",
      "d) It manages the network policies in the cluster",
    ],
    answer: "b) It is responsible for managing the lifecycle of pods and containers on nodes",
    explanation: "The 'kubelet' runs on each node and ensures that the containers in the pods are running and healthy. It reports the pod status back to the control plane."
  },
  {
    question: "What could cause a pod to fail the 'liveness probe'?",
    question_id: 88,
    options: [
      "a) The application inside the container is not responding to HTTP requests",
      "b) The pod is running out of memory",
      "c) The pod's node is under heavy load",
      "d) All of the above",
    ],
    answer: "d) All of the above",
    explanation: "A pod can fail the 'liveness probe' if the application inside the container is unresponsive, the pod runs out of memory, or the node is under heavy load. Any of these issues can cause the pod to be considered unhealthy."
  },
  {
    question: "How can you troubleshoot a node that is consistently running out of memory?",
    question_id: 89,
    options: [
      "a) Use 'kubectl describe node' to check the node's resource utilization",
      "b) Review the node's logs for out-of-memory (OOM) errors",
      "c) Use 'kubectl top node' to monitor resource usage",
      "d) All of the above",
    ],
    answer: "d) All of the above",
    explanation: "To troubleshoot a node running out of memory, you can check the node’s resource utilization using 'kubectl describe node' or 'kubectl top node', and review logs for 'OOM' (out-of-memory) errors."
  },
  {
    question: "What could cause a pod’s 'Deployment' to not update when a new container image is pushed?",
    question_id: 90,
    options: [
      "a) The imagePullPolicy is set to 'Never'",
      "b) The Deployment’s replicas are not updated",
      "c) The new image tag is the same as the previous one",
      "d) Both a and c",
    ],
    answer: "d) Both a and c",
    explanation: "If the 'imagePullPolicy' is set to 'Never', Kubernetes will not attempt to pull the new image. Additionally, if the image tag has not changed, Kubernetes will not recognize it as a new image and will not trigger an update."
  },
  {
    question: "What is the likely cause if a pod’s 'kubectl logs' command shows 'exited with code 137'?",
    question_id: 91,
    options: [
      "a) The pod was manually deleted by the user",
      "b) The pod’s container was killed due to an out-of-memory (OOM) condition",
      "c) The pod’s application crashed due to a configuration error",
      "d) The pod’s container could not pull the required image",
    ],
    answer: "b) The pod’s container was killed due to an out-of-memory (OOM) condition",
    explanation: "Exit code 137 typically indicates that the container was killed by the system due to running out of memory (OOMKilled), and this usually happens when a container exceeds its memory limit."
  },
  {
    question: "What command would you use to check the current status of a pod's resource usage?",
    question_id: 92,
    options: [
      "a) kubectl top pod <pod_name>",
      "b) kubectl describe pod <pod_name>",
      "c) kubectl logs <pod_name>",
      "d) kubectl get pods --show-all",
    ],
    answer: "a) kubectl top pod <pod_name>",
    explanation: "The 'kubectl top pod' command provides a snapshot of the current resource usage (CPU and memory) of the pod, helping to identify if the pod is resource-constrained."
  },
  {
    question: "If a pod is evicted from a node due to resource constraints, which event would you expect to see?",
    question_id: 93,
    options: [
      "a) NodeNotReady",
      "b) Evicted",
      "c) ResourceExhaustion",
      "d) FailedMount",
    ],
    answer: "b) Evicted",
    explanation: "When a pod is evicted from a node due to resource constraints (e.g., memory or CPU exhaustion), the 'Evicted' event is recorded. This event indicates that the pod was removed to free up resources on the node."
  },
  {
    question: "What could cause a pod’s 'LivenessProbe' to fail, leading to the pod being killed and restarted?",
    question_id: 94,
    options: [
      "a) The application inside the container is unresponsive or stuck",
      "b) The pod has exceeded its resource limits",
      "c) The pod is stuck in 'Pending' state",
      "d) The pod's node is under heavy load",
    ],
    answer: "a) The application inside the container is unresponsive or stuck",
    explanation: "A 'LivenessProbe' failure typically happens when the application inside the container becomes unresponsive or stuck, causing Kubernetes to consider the pod unhealthy and trigger a restart."
  },
  {
    question: "What should you check if a pod’s container is not starting and the event message shows 'Failed to pull image'?",
    question_id: 95,
    options: [
      "a) The image name or tag might be incorrect",
      "b) There could be an issue with image pull secrets or authentication",
      "c) The registry could be down or unreachable",
      "d) All of the above",
    ],
    answer: "d) All of the above",
    explanation: "If a pod fails to pull its image, it could be due to an incorrect image name or tag, authentication issues with image pull secrets, or a problem with the registry itself (e.g., it’s unreachable or down)."
  },
  {
    question: "Which Kubernetes tool can be used to check the resource usage on nodes and pods in real-time?",
    question_id: 96,
    options: [
      "a) kubectl logs",
      "b) kubectl top",
      "c) kubectl describe",
      "d) kubectl exec",
    ],
    answer: "b) kubectl top",
    explanation: "The 'kubectl top' command provides real-time resource usage metrics for nodes and pods, including CPU and memory usage, which can help diagnose resource issues."
  },
  {
    question: "What would be a reason to use 'kubectl describe pod <pod_name>' during troubleshooting?",
    question_id: 97,
    options: [
      "a) To check the pod’s logs",
      "b) To inspect the pod’s configuration and events",
      "c) To view the pod's resource usage",
      "d) To monitor the pod’s health",
    ],
    answer: "b) To inspect the pod’s configuration and events",
    explanation: "'kubectl describe pod' provides detailed information about the pod’s configuration, events, and status. It can help diagnose issues like scheduling problems, resource issues, or node-specific errors."
  },
  {
    question: "What can cause a pod to fail to start with the error 'ImagePullBackOff'?",
    question_id: 98,
    options: [
      "a) The image cannot be found or is inaccessible",
      "b) There is a network issue preventing the pull",
      "c) The image has a syntax error or is corrupt",
      "d) All of the above",
    ],
    answer: "d) All of the above",
    explanation: "The 'ImagePullBackOff' error indicates that the pod is unable to pull the container image. This could be due to an inaccessible image, a network issue, or a corrupt or invalid image."
  },
  {
    question: "What would be the most likely cause of a pod getting stuck in the 'Pending' state despite sufficient resources being available?",
    question_id: 99,
    options: [
      "a) There is a taint on the node that the pod does not tolerate",
      "b) The pod has a resource limit that exceeds the node’s capacity",
      "c) The node’s kubelet is not responding",
      "d) The pod’s image is missing",
    ],
    answer: "a) There is a taint on the node that the pod does not tolerate",
    explanation: "If a pod is stuck in the 'Pending' state despite sufficient resources, it might be due to a taint on the node that the pod does not tolerate, which prevents it from being scheduled on that node."
  },
  {
    question: "Which of the following would you use to resolve a persistent volume claim (PVC) that is stuck in 'Pending' state?",
    question_id: 100,
    options: [
      "a) Check if the persistent volume (PV) exists and is properly bound",
      "b) Delete the PVC and create a new one",
      "c) Check if the storage class and access modes are correctly configured",
      "d) All of the above",
    ],
    answer: "d) All of the above",
    explanation: "To resolve a PVC stuck in 'Pending', you should check if a compatible PV exists and is correctly bound, ensure the PVC’s storage class and access modes are correct, and troubleshoot any configuration issues."
  }
];
