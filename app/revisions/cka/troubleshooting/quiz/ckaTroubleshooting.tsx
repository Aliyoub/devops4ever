export const questions = [
  {
    question:
      "Which command is used to check the status of a pod in Kubernetes?",
    options: [
      "a) kubectl get status pod <pod-name>",
      "b) kubectl describe pod <pod-name>",
      "c) kubectl check pod <pod-name>",
      "d) kubectl logs pod <pod-name>",
    ],
    answer: "b) kubectl describe pod <pod-name>",
  },
  {
    question:
      "What command would you use to view logs of a specific container in a pod?",
    options: [
      "a) kubectl get logs <container-name>",
      "b) kubectl describe logs <pod-name>",
      "c) kubectl logs <pod-name> -c <container-name>",
      "d) kubectl view logs <container-name>",
    ],
    answer: "c) kubectl logs <pod-name> -c <container-name>",
  },
  {
    question: "How would you troubleshoot a failed node in Kubernetes?",
    options: [
      "a) Run 'kubectl delete node <node-name>'",
      "b) Check 'kubectl describe node <node-name>' for issues",
      "c) Reboot the pod associated with the node",
      "d) Restart all containers on the node",
    ],
    answer: "b) Check 'kubectl describe node <node-name>' for issues",
  },
  {
    question:
      "What command helps identify issues with a service that isn't reachable?",
    options: [
      "a) kubectl debug service <service-name>",
      "b) kubectl expose <service-name>",
      "c) kubectl get endpoints <service-name>",
      "d) kubectl describe pod <service-name>",
    ],
    answer: "c) kubectl get endpoints <service-name>",
  },
  {
    question:
      "Which tool provides deeper analysis of network traffic between Kubernetes pods?",
    options: [
      "a) kubectl analyze",
      "b) kubenet",
      "c) NetworkPolicy",
      "d) tcpdump",
    ],
    answer: "d) tcpdump",
  },
  {
    question: "What is the purpose of 'kubectl get events'?",
    options: [
      "a) To list active pods",
      "b) To view resource usage",
      "c) To display recent cluster events",
      "d) To configure persistent storage",
    ],
    answer: "c) To display recent cluster events",
  },
  {
    question:
      "Which resource would you troubleshoot if a PersistentVolumeClaim is stuck in Pending?",
    options: ["a) Node", "b) PersistentVolume", "c) Deployment", "d) Ingress"],
    answer: "b) PersistentVolume",
  },
  {
    question:
      "Which command allows you to see recent error events in Kubernetes?",
    options: [
      "a) kubectl errors",
      "b) kubectl describe",
      "c) kubectl get events",
      "d) kubectl troubleshoot",
    ],
    answer: "c) kubectl get events",
  },
  {
    question:
      "If a pod is CrashLoopBackOff, what should be your first troubleshooting step?",
    options: [
      "a) Restart the pod",
      "b) Delete the pod",
      "c) Check the pod logs",
      "d) Increase pod resources",
    ],
    answer: "c) Check the pod logs",
  },
  {
    question:
      "Which tool helps in visualizing Kubernetes metrics and monitoring?",
    options: [
      "a) kubectl monitor",
      "b) Prometheus",
      "c) kubectl logs",
      "d) kube-exporter",
    ],
    answer: "b) Prometheus",
  },
  {
    question: "How can you test network connectivity between two pods?",
    options: [
      "a) Use kubectl net-test",
      "b) Run curl or ping from one pod to the other",
      "c) Check the pod's 'kubectl net' command",
      "d) Use kubectl ping",
    ],
    answer: "b) Run curl or ping from one pod to the other",
  },
  {
    question:
      "What Kubernetes resource allows you to configure DNS settings within the cluster?",
    options: ["a) Node", "b) ConfigMap", "c) Service", "d) Endpoint"],
    answer: "c) Service",
  },
  {
    question:
      "How can you increase the verbosity of logs for troubleshooting in Kubernetes?",
    options: [
      "a) kubectl debug --level=2",
      "b) Set --v=4 flag on kubectl commands",
      "c) Increase pod resources",
      "d) Use 'kubectl analyze'",
    ],
    answer: "b) Set --v=4 flag on kubectl commands",
  },
  {
    question: "What does a 'Pending' status on a pod usually indicate?",
    options: [
      "a) Network issue",
      "b) Resource scheduling issue",
      "c) Security misconfiguration",
      "d) Node failure",
    ],
    answer: "b) Resource scheduling issue",
  },
  {
    question: "Which command lets you view a deployment's status?",
    options: [
      "a) kubectl get deployment <deployment-name>",
      "b) kubectl describe deploy <deployment-name>",
      "c) kubectl view deployment <deployment-name>",
      "d) kubectl status deployment <deployment-name>",
    ],
    answer: "b) kubectl describe deploy <deployment-name>",
  },
  {
    question:
      "What type of error could cause a pod to go into an ImagePullBackOff state?",
    options: [
      "a) CPU limitation",
      "b) Pod affinity settings",
      "c) Incorrect image name or permissions",
      "d) Insufficient storage",
    ],
    answer: "c) Incorrect image name or permissions",
  },
  {
    question: "What command would show details about an Ingress resource?",
    options: [
      "a) kubectl describe ingress <ingress-name>",
      "b) kubectl get service <ingress-name>",
      "c) kubectl inspect ingress <ingress-name>",
      "d) kubectl ingress status <ingress-name>",
    ],
    answer: "a) kubectl describe ingress <ingress-name>",
  },
  {
    question:
      "If a pod's IP is reachable, but the service is not, what is a possible issue?",
    options: [
      "a) Incorrect pod configuration",
      "b) Node failure",
      "c) Service selector mismatch",
      "d) CPU throttling",
    ],
    answer: "c) Service selector mismatch",
  },
  {
    question: "What does the CrashLoopBackOff error indicate in Kubernetes?",
    options: [
      "a) Failed container start with auto-retry",
      "b) Node is out of resources",
      "c) Network configuration failure",
      "d) Cluster is unreachable",
    ],
    answer: "a) Failed container start with auto-retry",
  },
  {
    question:
      "If a node is in 'NotReady' state, what command should you run to troubleshoot?",
    options: [
      "a) kubectl describe node <node-name>",
      "b) kubectl restart node <node-name>",
      "c) kubectl delete node <node-name>",
      "d) kubectl check node <node-name>",
    ],
    answer: "a) kubectl describe node <node-name>",
  },
  {
    question:
      "How would you troubleshoot a network policy blocking traffic in Kubernetes?",
    options: [
      "a) Check kubectl describe netpolicy",
      "b) Remove all network policies",
      "c) Use a packet sniffer like tcpdump",
      "d) Restart affected pods",
    ],
    answer: "c) Use a packet sniffer like tcpdump",
  },
  {
    question:
      "What might cause a pod to be stuck in 'ContainerCreating' state?",
    options: [
      "a) DNS issue",
      "b) Image pull issues",
      "c) Pod name conflict",
      "d) Missing labels",
    ],
    answer: "b) Image pull issues",
  },
  {
    question: "Which command checks storage space on a node?",
    options: [
      "a) df -h",
      "b) kubectl get storage",
      "c) kubectl node capacity",
      "d) kubectl describe storage",
    ],
    answer: "a) df -h",
  },
  {
    question: "Which status indicates an issue with pod scheduling?",
    options: [
      "a) ContainerCreating",
      "b) Running",
      "c) Pending",
      "d) CrashLoopBackOff",
    ],
    answer: "c) Pending",
  },
  {
    question: "How do you verify if a node is properly labeled?",
    options: [
      "a) kubectl get labels <node-name>",
      "b) kubectl describe nodes <node-name>",
      "c) kubectl list labels <node-name>",
      "d) kubectl labels <node-name>",
    ],
    answer: "b) kubectl describe nodes <node-name>",
  },
  {
    question: "Which of these is NOT a valid way to view Kubernetes logs?",
    options: [
      "a) kubectl logs <pod-name>",
      "b) kubectl view logs <pod-name>",
      "c) kubectl logs <pod-name> -c <container-name>",
      "d) kubectl logs --tail=100 <pod-name>",
    ],
    answer: "b) kubectl view logs <pod-name>",
  },
  {
    question:
      "If a pod is in 'CrashLoopBackOff' status, what should you check first?",
    options: [
      "a) Pod resource limits",
      "b) Pod logs for error messages",
      "c) Node CPU utilization",
      "d) Service configurations",
    ],
    answer: "b) Pod logs for error messages",
  },
  {
    question:
      "How can you check why a Kubernetes node is in 'NotReady' status?",
    options: [
      "a) kubectl get events",
      "b) kubectl describe node <node-name>",
      "c) kubectl logs <node-name>",
      "d) kubectl get node status <node-name>",
    ],
    answer: "b) kubectl describe node <node-name>",
  },
  {
    question: "What command shows detailed events related to pod failures?",
    options: [
      "a) kubectl get events",
      "b) kubectl describe pod <pod-name>",
      "c) kubectl log events",
      "d) kubectl event history",
    ],
    answer: "b) kubectl describe pod <pod-name>",
  },
  {
    question:
      "If a pod cannot pull an image, resulting in 'ErrImagePull', what is a likely cause?",
    options: [
      "a) Incorrect image name or tag",
      "b) Pod scheduling issue",
      "c) Misconfigured storage volume",
      "d) Node network issue",
    ],
    answer: "a) Incorrect image name or tag",
  },
  {
    question:
      "Which command displays recent Kubernetes events to identify system issues?",
    options: [
      "a) kubectl get logs",
      "b) kubectl describe logs",
      "c) kubectl get events",
      "d) kubectl show events",
    ],
    answer: "c) kubectl get events",
  },
  {
    question:
      "What command shows networking details for a specific Kubernetes pod?",
    options: [
      "a) kubectl describe network <pod-name>",
      "b) kubectl inspect pod <pod-name>",
      "c) kubectl describe pod <pod-name>",
      "d) kubectl get pod <pod-name> --net",
    ],
    answer: "c) kubectl describe pod <pod-name>",
  },
  {
    question:
      "If a Kubernetes node has disk space issues, which command would help identify the problem?",
    options: [
      "a) kubectl node disk <node-name>",
      "b) kubectl describe node <node-name>",
      "c) df -h on the node",
      "d) kubectl get node disk space",
    ],
    answer: "c) df -h on the node",
  },
  {
    question:
      "Which command is used to view specific container logs within a pod?",
    options: [
      "a) kubectl logs <container-name>",
      "b) kubectl get logs <container-name>",
      "c) kubectl logs <pod-name> -c <container-name>",
      "d) kubectl describe logs <container-name>",
    ],
    answer: "c) kubectl logs <pod-name> -c <container-name>",
  },
  {
    question:
      "What Kubernetes command shows why a service may not be reachable?",
    options: [
      "a) kubectl debug service <service-name>",
      "b) kubectl expose <service-name>",
      "c) kubectl get endpoints <service-name>",
      "d) kubectl describe pod <service-name>",
    ],
    answer: "c) kubectl get endpoints <service-name>",
  },
  {
    question:
      "What is the likely issue if a pod is stuck in 'ContainerCreating' state?",
    options: [
      "a) CPU limitation",
      "b) Network policy misconfiguration",
      "c) PersistentVolume issues",
      "d) Pod name conflict",
    ],
    answer: "c) PersistentVolume issues",
  },
  {
    question: "How can you troubleshoot a blocked NetworkPolicy in Kubernetes?",
    options: [
      "a) Check 'kubectl describe netpolicy'",
      "b) Use a packet sniffer like tcpdump",
      "c) Run 'kubectl troubleshoot network <policy-name>'",
      "d) Recreate all network policies",
    ],
    answer: "b) Use a packet sniffer like tcpdump",
  },
  {
    question:
      "What Kubernetes component is responsible for managing pod scheduling?",
    options: [
      "a) Kubelet",
      "b) kube-scheduler",
      "c) etcd",
      "d) kube-controller-manager",
    ],
    answer: "b) kube-scheduler",
  },
  {
    question:
      "If a node shows high CPU usage, which command would help investigate pod CPU limits?",
    options: [
      "a) kubectl top pod",
      "b) kubectl describe node <node-name>",
      "c) kubectl describe cpu <node-name>",
      "d) kubectl get resources",
    ],
    answer: "a) kubectl top pod",
  },
  {
    question:
      "How can you investigate pod communication problems in Kubernetes?",
    options: [
      "a) Check Service DNS settings",
      "b) Run 'kubectl ping <pod-name>'",
      "c) Test with 'curl' or 'ping' within the pod network",
      "d) Inspect the pod's IP routing table",
    ],
    answer: "c) Test with 'curl' or 'ping' within the pod network",
  },
  {
    question:
      "If a pod repeatedly crashes, what command would give insight into the root cause?",
    options: [
      "a) kubectl status pod <pod-name>",
      "b) kubectl describe pod <pod-name>",
      "c) kubectl events <pod-name>",
      "d) kubectl restart pod <pod-name>",
    ],
    answer: "b) kubectl describe pod <pod-name>",
  },
  {
    question:
      "In Kubernetes, which of these could cause a service to become unreachable?",
    options: [
      "a) Node CPU issues",
      "b) Network policy blocking",
      "c) Incorrect pod name",
      "d) Pod in CrashLoopBackOff",
    ],
    answer: "b) Network policy blocking",
  },
  {
    question:
      "How do you view detailed errors of a failed PersistentVolumeClaim?",
    options: [
      "a) kubectl get pvc",
      "b) kubectl describe pvc <pvc-name>",
      "c) kubectl logs pvc <pvc-name>",
      "d) kubectl check pvc",
    ],
    answer: "b) kubectl describe pvc <pvc-name>",
  },
  {
    question:
      "Which command provides the node resource usage summary in Kubernetes?",
    options: [
      "a) kubectl describe resource",
      "b) kubectl top node",
      "c) kubectl node stats",
      "d) kubectl get usage",
    ],
    answer: "b) kubectl top node",
  },
  {
    question:
      "If a pod shows 'ImagePullBackOff' status, what could be a cause?",
    options: [
      "a) Insufficient storage",
      "b) Incorrect image repository",
      "c) Network issue on node",
      "d) Excessive CPU usage",
    ],
    answer: "b) Incorrect image repository",
  },
  {
    question:
      "To see what has been recently scheduled on a specific node, use:",
    options: [
      "a) kubectl describe node <node-name>",
      "b) kubectl logs <node-name>",
      "c) kubectl events <node-name>",
      "d) kubectl get pods",
    ],
    answer: "a) kubectl describe node <node-name>",
  },
  {
    question: "Which resource issue would result in a pod status of 'Pending'?",
    options: [
      "a) Insufficient CPU or memory on node",
      "b) Service misconfiguration",
      "c) PersistentVolumeClaim error",
      "d) Container image error",
    ],
    answer: "a) Insufficient CPU or memory on node",
  },
  {
    question: "What might cause a pod's logs to show network timeout errors?",
    options: [
      "a) Storage capacity issues",
      "b) Container memory leak",
      "c) NetworkPolicy blocking traffic",
      "d) High disk I/O",
    ],
    answer: "c) NetworkPolicy blocking traffic",
  },
  {
    question:
      "How would you check if a service is correctly routing traffic to a pod?",
    options: [
      "a) kubectl get routes",
      "b) kubectl describe endpoints <service-name>",
      "c) kubectl ping service <service-name>",
      "d) kubectl logs <service-name>",
    ],
    answer: "b) kubectl describe endpoints <service-name>",
  },
  {
    question:
      "What does 'Pending' status on PersistentVolumeClaim likely indicate?",
    options: [
      "a) No matching PersistentVolume",
      "b) Service error",
      "c) Ingress misconfiguration",
      "d) Pod scheduling issue",
    ],
    answer: "a) No matching PersistentVolume",
  },
  {
    question:
      "Which command helps you identify a misconfigured PersistentVolumeClaim?",
    options: [
      "a) kubectl get pvc",
      "b) kubectl describe pvc <pvc-name>",
      "c) kubectl check pvc",
      "d) kubectl debug pvc",
    ],
    answer: "b) kubectl describe pvc <pvc-name>",
  },
];
