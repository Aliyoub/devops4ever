export const questions = [
  {
    question: "What is the default behavior of Kubernetes when a pod's security context is not specified?",
    question_id: 0,
    options: [
      "a) The pod runs as root user.",
      "b) The pod is automatically restricted to non-root user.",
      "c) The pod fails to start without a security context.",
      "d) The pod inherits the security context from the namespace.",
    ],
    answer: "a) The pod runs as root user.",
    explanation: "By default, if no security context is provided, Kubernetes runs pods as the root user, which is a security risk. It is recommended to specify a non-root user for better security."
  },
  {
    question: "Which Kubernetes resource can restrict the container image registries that pods are allowed to use?",
    question_id: 1,
    options: [
      "a) PodSecurityPolicy",
      "b) NetworkPolicy",
      "c) ImagePolicyWebhook",
      "d) RoleBinding",
    ],
    answer: "c) ImagePolicyWebhook",
    explanation: "ImagePolicyWebhook allows cluster administrators to enforce policies on container image registries and other image attributes before a pod is admitted."
  },
  {
    question: "What component is responsible for enforcing Kubernetes Network Policies?",
    question_id: 2,
    options: [
      "a) kube-apiserver",
      "b) CNI plugin",
      "c) kube-scheduler",
      "d) kube-proxy",
    ],
    answer: "b) CNI plugin",
    explanation: "Network policies are enforced by the Container Network Interface (CNI) plugin, which manages networking configurations in the cluster."
  },
  {
    question: "Which of the following is NOT part of the Kubernetes RBAC roles?",
    question_id: 3,
    options: [
      "a) ClusterRole",
      "b) RoleBinding",
      "c) RolePolicy",
      "d) ClusterRoleBinding",
    ],
    answer: "c) RolePolicy",
    explanation: "Kubernetes RBAC consists of Role, ClusterRole, RoleBinding, and ClusterRoleBinding. 'RolePolicy' is not a valid RBAC resource."
  },
  {
    question: "What is the purpose of the `readOnlyRootFilesystem` setting in a pod's security context?",
    question_id: 4,
    options: [
      "a) It disables root user access in the pod.",
      "b) It makes the container filesystem immutable.",
      "c) It prevents pods from accessing other namespaces.",
      "d) It enforces the use of non-root users.",
    ],
    answer: "b) It makes the container filesystem immutable.",
    explanation: "Setting `readOnlyRootFilesystem` to true ensures the container filesystem cannot be modified, improving security by preventing malicious changes."
  },
  {
    question: "How can you prevent a container from running as the root user?",
    question_id: 5,
    options: [
      "a) Set `runAsNonRoot: true` in the security context.",
      "b) Use a NetworkPolicy to block root access.",
      "c) Enable PodSecurityPolicy globally.",
      "d) Assign a RoleBinding with root restrictions.",
    ],
    answer: "a) Set `runAsNonRoot: true` in the security context.",
    explanation: "The `runAsNonRoot` setting in the pod's security context ensures that the container runs as a non-root user, mitigating security risks."
  },
  {
    question: "What Kubernetes resource is used to configure fine-grained permissions for API access?",
    question_id: 6,
    options: [
      "a) Role and RoleBinding",
      "b) PodSecurityPolicy",
      "c) NetworkPolicy",
      "d) kubeconfig",
    ],
    answer: "a) Role and RoleBinding",
    explanation: "Roles and RoleBindings allow you to configure fine-grained permissions for users and service accounts to access specific Kubernetes resources."
  },
  {
    question: "Which Kubernetes feature helps isolate pods at the network level?",
    question_id: 7,
    options: [
      "a) PodSecurityPolicy",
      "b) NetworkPolicy",
      "c) ResourceQuota",
      "d) RBAC",
    ],
    answer: "b) NetworkPolicy",
    explanation: "NetworkPolicies are used to control traffic flow at the network level, allowing administrators to isolate pods and restrict their communication."
  },
  {
    question: "What is the purpose of the Kubernetes `audit` logs?",
    question_id: 8,
    options: [
      "a) To track CPU and memory usage.",
      "b) To record API server requests for security monitoring.",
      "c) To monitor the health of etcd.",
      "d) To analyze the state of kubelet processes.",
    ],
    answer: "b) To record API server requests for security monitoring.",
    explanation: "Kubernetes audit logs capture API server requests, which are essential for tracking activities, detecting anomalies, and ensuring compliance."
  },
  {
    question: "Which flag ensures that kubelet only accepts secure, TLS-encrypted connections?",
    question_id: 9,
    options: [
      "a) --client-ca-file",
      "b) --anonymous-auth=false",
      "c) --read-only-port=0",
      "d) --tls-cert-file",
    ],
    answer: "d) --tls-cert-file",
    explanation: "The `--tls-cert-file` flag ensures kubelet accepts only TLS-encrypted connections, securing communication between components."
  },
  {
    question: "What is the primary function of Kubernetes Role-Based Access Control (RBAC)?",
    question_id: 10,
    options: [
      "a) To manage pod-to-pod communication.",
      "b) To define and enforce user permissions for Kubernetes resources.",
      "c) To ensure containers are running as non-root users.",
      "d) To enforce network security policies in the cluster.",
    ],
    answer: "b) To define and enforce user permissions for Kubernetes resources.",
    explanation: "RBAC allows administrators to control access to Kubernetes resources by defining roles and binding them to users or service accounts."
  },
  {
    question: "Which resource can limit what privileged operations a pod can perform?",
    question_id: 11,
    options: [
      "a) ResourceQuota",
      "b) NetworkPolicy",
      "c) PodSecurityPolicy",
      "d) ClusterRole",
    ],
    answer: "c) PodSecurityPolicy",
    explanation: "PodSecurityPolicy allows administrators to enforce restrictions on pod privileges, such as disallowing privileged containers or enforcing non-root users."
  },
  {
    question: "What is the purpose of a ServiceAccount in Kubernetes?",
    question_id: 12,
    options: [
      "a) To authenticate pods within the cluster.",
      "b) To configure network access between services.",
      "c) To limit resource consumption by pods.",
      "d) To manage role-based access for administrators.",
    ],
    answer: "a) To authenticate pods within the cluster.",
    explanation: "A ServiceAccount provides an identity for pods to authenticate with the Kubernetes API and other services within the cluster."
  },
  {
    question: "Which Kubernetes component handles the validation of RBAC policies?",
    question_id: 13,
    options: [
      "a) kube-apiserver",
      "b) kube-scheduler",
      "c) kube-controller-manager",
      "d) kubelet",
    ],
    answer: "a) kube-apiserver",
    explanation: "The `kube-apiserver` validates and enforces RBAC policies, ensuring that users and service accounts only perform allowed actions."
  },
  {
    question: "What setting prevents a pod from mounting the host filesystem?",
    question_id: 14,
    options: [
      "a) `readOnlyRootFilesystem`",
      "b) `allowPrivilegeEscalation`",
      "c) `hostPath: false`",
      "d) `privileged: false`",
    ],
    answer: "d) `privileged: false`",
    explanation: "Setting `privileged: false` in the security context prevents pods from performing privileged operations, such as mounting the host filesystem."
  },
  {
    question: "Which command checks the permissions assigned to a Kubernetes user?",
    question_id: 15,
    options: [
      "a) `kubectl auth can-i`",
      "b) `kubectl describe rolebinding`",
      "c) `kubectl get rbac`",
      "d) `kubectl view permissions`",
    ],
    answer: "a) `kubectl auth can-i`",
    explanation: "The `kubectl auth can-i` command checks what actions a user or service account is allowed to perform based on RBAC policies."
  },
  {
    question: "What is the benefit of enabling `anonymous-auth=false` on the kube-apiserver?",
    question_id: 16,
    options: [
      "a) It disables all non-root access to the API server.",
      "b) It ensures that all API requests require authentication.",
      "c) It restricts kubelet communication with the API server.",
      "d) It blocks privileged pods from accessing the API.",
    ],
    answer: "b) It ensures that all API requests require authentication.",
    explanation: "Setting `anonymous-auth=false` ensures that unauthenticated requests to the kube-apiserver are denied, improving security."
  },
  {
    question: "How can you encrypt Kubernetes Secrets at rest?",
    question_id: 17,
    options: [
      "a) Use Kubernetes RoleBinding policies.",
      "b) Enable etcd encryption with a provider configuration.",
      "c) Store Secrets in ConfigMaps.",
      "d) Use the `readOnlyRootFilesystem` option.",
    ],
    answer: "b) Enable etcd encryption with a provider configuration.",
    explanation: "Kubernetes supports encrypting Secrets at rest by enabling etcd encryption with a specified encryption provider."
  },
  {
    question: "What is the recommended way to provide credentials to a pod?",
    question_id: 18,
    options: [
      "a) Hardcode credentials in environment variables.",
      "b) Use a ConfigMap to pass credentials.",
      "c) Use a Kubernetes Secret resource.",
      "d) Store credentials directly in the container image.",
    ],
    answer: "c) Use a Kubernetes Secret resource.",
    explanation: "Kubernetes Secrets are the recommended way to manage sensitive information like credentials, ensuring they are encrypted at rest and accessed securely."
  },
  {
    question: "Which admission controller can validate and enforce custom security policies?",
    question_id: 19,
    options: [
      "a) PodSecurityPolicy",
      "b) ResourceQuota",
      "c) ValidatingWebhook",
      "d) NodeRestriction",
    ],
    answer: "c) ValidatingWebhook",
    explanation: "A ValidatingWebhook admission controller allows administrators to enforce custom validation policies for Kubernetes resources."
  },
  {
    question: "What is the main purpose of the `allowPrivilegeEscalation` setting in a pod's security context?",
    question_id: 20,
    options: [
      "a) It prevents containers from running as privileged users.",
      "b) It blocks containers from gaining additional privileges.",
      "c) It ensures pods do not communicate outside the cluster.",
      "d) It enforces TLS encryption for container communication.",
    ],
    answer: "b) It blocks containers from gaining additional privileges.",
    explanation: "The `allowPrivilegeEscalation` setting prevents a container from gaining more privileges than its parent process, enhancing security."
  },
  {
    question: "Which Kubernetes feature is specifically designed to secure communication between pods?",
    question_id: 21,
    options: [
      "a) PodSecurityPolicy",
      "b) TLS Encryption",
      "c) NetworkPolicy",
      "d) RBAC",
    ],
    answer: "c) NetworkPolicy",
    explanation: "NetworkPolicies secure communication between pods by defining rules for inbound and outbound network traffic."
  },
  {
    question: "How can you ensure that a container does not use a host network namespace?",
    question_id: 22,
    options: [
      "a) Set `hostNetwork: false` in the pod specification.",
      "b) Use `allowPrivilegeEscalation: false`.",
      "c) Define a NetworkPolicy to block host communication.",
      "d) Enable RBAC restrictions on host namespace usage.",
    ],
    answer: "a) Set `hostNetwork: false` in the pod specification.",
    explanation: "Setting `hostNetwork: false` ensures that the container does not share the host’s network namespace, reducing exposure."
  },
  {
    question: "Which flag enables encryption for communication between kube-apiserver and etcd?",
    question_id: 23,
    options: [
      "a) --etcd-cert-file",
      "b) --encryption-provider-config",
      "c) --etcd-ssl",
      "d) --audit-policy-file",
    ],
    answer: "a) --etcd-cert-file",
    explanation: "The `--etcd-cert-file` flag enables secure communication between kube-apiserver and etcd using TLS encryption."
  },
  {
    question: "What is the purpose of a Kubernetes Pod Disruption Budget (PDB) in security-sensitive applications?",
    question_id: 24,
    options: [
      "a) To limit pod-to-pod disruptions for sensitive workloads.",
      "b) To prevent malicious containers from scaling up.",
      "c) To restrict access to system resources.",
      "d) To enforce non-root user settings.",
    ],
    answer: "a) To limit pod-to-pod disruptions for sensitive workloads.",
    explanation: "A Pod Disruption Budget ensures a minimum number of pods remain available during voluntary disruptions, improving reliability for critical workloads."
  },
  {
    question: "What role does the `kube-proxy` component play in Kubernetes networking?",
    question_id: 25,
    options: [
      "a) It applies network policies to restrict pod communication.",
      "b) It routes traffic to the correct pods based on Services.",
      "c) It encrypts all network communication between pods.",
      "d) It validates RBAC roles for network connections.",
    ],
    answer: "b) It routes traffic to the correct pods based on Services.",
    explanation: "`kube-proxy` is responsible for routing traffic to the appropriate pods as defined in Kubernetes Services."
  },
  {
    question: "Which admission controller denies pod creation if a container attempts to run as the root user?",
    question_id: 26,
    options: [
      "a) NodeRestriction",
      "b) PodSecurityPolicy",
      "c) ValidatingWebhook",
      "d) ResourceQuota",
    ],
    answer: "b) PodSecurityPolicy",
    explanation: "PodSecurityPolicy can enforce restrictions, such as preventing containers from running as the root user, improving cluster security."
  },
  {
    question: "What does the `--anonymous-auth=false` flag achieve for the kubelet?",
    question_id: 27,
    options: [
      "a) It disables unauthenticated access to the kubelet API.",
      "b) It restricts kubelet logs to root-only users.",
      "c) It prevents unauthorized pods from accessing Secrets.",
      "d) It enforces TLS for kubelet communication.",
    ],
    answer: "a) It disables unauthenticated access to the kubelet API.",
    explanation: "The `--anonymous-auth=false` flag disables anonymous access, ensuring that kubelet requests must be authenticated."
  },
  {
    question: "What is a recommended approach to restrict access to sensitive data in ConfigMaps?",
    question_id: 28,
    options: [
      "a) Use RBAC to limit access to ConfigMaps.",
      "b) Store all sensitive data directly in container images.",
      "c) Use NetworkPolicy to protect ConfigMaps.",
      "d) Encrypt ConfigMaps using the kube-proxy component.",
    ],
    answer: "a) Use RBAC to limit access to ConfigMaps.",
    explanation: "RBAC can restrict access to ConfigMaps, ensuring that only authorized users or service accounts can view or modify them."
  },
  {
    question: "Which Kubernetes resource can help ensure that only signed container images are used?",
    question_id: 29,
    options: [
      "a) PodSecurityPolicy",
      "b) ImagePolicyWebhook",
      "c) ValidatingWebhook",
      "d) ClusterRoleBinding",
    ],
    answer: "b) ImagePolicyWebhook",
    explanation: "ImagePolicyWebhook can enforce policies requiring that container images are signed and originate from trusted registries."
  },
  {
    question: "Which Kubernetes resource allows you to enforce constraints on container capabilities?",
    question_id: 30,
    options: [
      "a) RoleBinding",
      "b) PodSecurityPolicy",
      "c) ConfigMap",
      "d) ResourceQuota",
    ],
    answer: "b) PodSecurityPolicy",
    explanation: "PodSecurityPolicy (PSP) allows you to define and enforce constraints, such as restricting container capabilities like privileged mode or host namespace access."
  },
  {
    question: "What is the primary benefit of enabling audit logs in Kubernetes?",
    question_id: 31,
    options: [
      "a) Monitoring network traffic between pods.",
      "b) Tracking API server requests for security analysis.",
      "c) Preventing unauthorized kubelet access.",
      "d) Encrypting traffic between API server and etcd.",
    ],
    answer: "b) Tracking API server requests for security analysis.",
    explanation: "Audit logs provide a record of API server requests, which can help detect security anomalies and ensure compliance."
  },
  {
    question: "How can you ensure a pod runs only with a specific user ID?",
    question_id: 32,
    options: [
      "a) Set `runAsUser` in the pod's security context.",
      "b) Use a NetworkPolicy to enforce user ID.",
      "c) Set `allowPrivilegeEscalation: false`.",
      "d) Configure RBAC rules for the user ID.",
    ],
    answer: "a) Set `runAsUser` in the pod's security context.",
    explanation: "The `runAsUser` field in the security context specifies the user ID under which the container runs, preventing it from running as root."
  },
  {
    question: "What is the purpose of the `seccomp` profile in Kubernetes?",
    question_id: 33,
    options: [
      "a) To manage container networking securely.",
      "b) To restrict system calls available to containers.",
      "c) To enforce TLS encryption for API requests.",
      "d) To validate container images before deployment.",
    ],
    answer: "b) To restrict system calls available to containers.",
    explanation: "The `seccomp` profile restricts the system calls that a container can make, reducing the attack surface of the container runtime."
  },
  {
    question: "What happens when `allowPrivilegeEscalation` is set to `false`?",
    question_id: 34,
    options: [
      "a) Containers cannot run as root.",
      "b) Containers cannot gain more privileges than their parent process.",
      "c) Containers cannot mount the host filesystem.",
      "d) Containers are restricted to a specific user namespace.",
    ],
    answer: "b) Containers cannot gain more privileges than their parent process.",
    explanation: "Setting `allowPrivilegeEscalation: false` prevents containers from acquiring additional privileges, improving security."
  },
  {
    question: "What is the role of the `NodeRestriction` admission controller?",
    question_id: 35,
    options: [
      "a) It prevents nodes from modifying API server resources.",
      "b) It restricts unauthorized access to nodes.",
      "c) It validates node-to-pod communication policies.",
      "d) It restricts Kubernetes RBAC roles for nodes.",
    ],
    answer: "a) It prevents nodes from modifying API server resources.",
    explanation: "The `NodeRestriction` admission controller ensures that kubelet nodes can only modify their own Node and Pod objects, improving security."
  },
  {
    question: "How can you enforce encryption for etcd data in Kubernetes?",
    question_id: 36,
    options: [
      "a) Use a ConfigMap to enable etcd encryption.",
      "b) Enable encryption with an encryption provider configuration.",
      "c) Set RBAC policies on etcd data access.",
      "d) Configure TLS for kubelet-to-etcd communication.",
    ],
    answer: "b) Enable encryption with an encryption provider configuration.",
    explanation: "Etcd encryption at rest is configured using an encryption provider configuration file, ensuring that sensitive data like Secrets is encrypted."
  },
  {
    question: "Which command lists the active admission controllers in a Kubernetes cluster?",
    question_id: 37,
    options: [
      "a) `kubectl get admission-controllers`",
      "b) `kubectl describe cluster`",
      "c) Check the `kube-apiserver` configuration.",
      "d) `kubectl api-resources`",
    ],
    answer: "c) Check the `kube-apiserver` configuration.",
    explanation: "The list of active admission controllers is found in the `kube-apiserver` configuration, specifically in the `--enable-admission-plugins` flag."
  },
  {
    question: "What does enabling `hostPID: false` in a pod specification achieve?",
    question_id: 38,
    options: [
      "a) It blocks privileged access to host processes.",
      "b) It prevents the container from sharing the host's process namespace.",
      "c) It restricts network access to host ports.",
      "d) It ensures the container runs as a non-root user.",
    ],
    answer: "b) It prevents the container from sharing the host's process namespace.",
    explanation: "Setting `hostPID: false` ensures that the container does not share the host's process namespace, improving process isolation."
  },
  {
    question: "What is the purpose of Kubernetes Service Accounts?",
    question_id: 39,
    options: [
      "a) To enable network isolation for pods.",
      "b) To authenticate pods with the API server.",
      "c) To encrypt pod-to-pod communication.",
      "d) To monitor pod resource usage.",
    ],
    answer: "b) To authenticate pods with the API server.",
    explanation: "Service Accounts provide pods with an identity to authenticate and interact securely with the Kubernetes API server."
  },
  {
    question: "Which of the following ensures that a container runs with a read-only filesystem?",
    question_id: 40,
    options: [
      "a) `readOnlyRootFilesystem: true`",
      "b) `hostNetwork: false`",
      "c) `runAsNonRoot: true`",
      "d) `allowPrivilegeEscalation: false`",
    ],
    answer: "a) `readOnlyRootFilesystem: true`",
    explanation: "Setting `readOnlyRootFilesystem: true` in the pod’s security context ensures the container’s filesystem is mounted as read-only, preventing tampering with critical data."
  },
  {
    question: "What does the Kubernetes `NodeRestriction` admission controller prevent?",
    question_id: 41,
    options: [
      "a) Nodes from modifying their own objects.",
      "b) Nodes from modifying other nodes' API objects.",
      "c) Nodes from creating privileged pods.",
      "d) Nodes from accessing Kubernetes Secrets.",
    ],
    answer: "b) Nodes from modifying other nodes' API objects.",
    explanation: "The `NodeRestriction` admission controller prevents kubelet nodes from modifying API objects other than their own, improving security."
  },
  {
    question: "How can you prevent a pod from running as the root user?",
    question_id: 42,
    options: [
      "a) Set `allowPrivilegeEscalation: false`.",
      "b) Use `runAsNonRoot: true` in the pod's security context.",
      "c) Use a NetworkPolicy to restrict root access.",
      "d) Disable anonymous-auth for the API server.",
    ],
    answer: "b) Use `runAsNonRoot: true` in the pod's security context.",
    explanation: "Setting `runAsNonRoot: true` ensures that the container runs with a non-root user, enhancing security by avoiding privileged execution."
  },
  {
    question: "What is the role of a `ValidatingWebhook` admission controller?",
    question_id: 43,
    options: [
      "a) To enforce pod security policies.",
      "b) To validate Kubernetes API requests against custom rules.",
      "c) To encrypt Secrets at rest.",
      "d) To block access to the Kubernetes API server.",
    ],
    answer: "b) To validate Kubernetes API requests against custom rules.",
    explanation: "The `ValidatingWebhook` admission controller intercepts API requests and validates them based on custom-defined policies before the changes are persisted."
  },
  {
    question: "Which flag enables mutual TLS authentication for kubelet communication?",
    question_id: 44,
    options: [
      "a) `--client-ca-file`",
      "b) `--etcd-cert-file`",
      "c) `--kubelet-tls-verify`",
      "d) `--anonymous-auth=false`",
    ],
    answer: "a) `--client-ca-file`",
    explanation: "The `--client-ca-file` flag ensures mutual TLS authentication by validating client certificates presented during kubelet communication."
  },
  {
    question: "What is the primary purpose of Kubernetes `NetworkPolicy`?",
    question_id: 45,
    options: [
      "a) To encrypt traffic between API server and etcd.",
      "b) To limit network traffic between pods based on rules.",
      "c) To enforce pod security restrictions.",
      "d) To manage node access permissions.",
    ],
    answer: "b) To limit network traffic between pods based on rules.",
    explanation: "NetworkPolicy defines rules for controlling the network flow between pods, restricting access where necessary to improve security."
  },
  {
    question: "Which Kubernetes component handles the creation of audit logs?",
    question_id: 46,
    options: [
      "a) kube-scheduler",
      "b) kubelet",
      "c) kube-apiserver",
      "d) kube-controller-manager",
    ],
    answer: "c) kube-apiserver",
    explanation: "The `kube-apiserver` generates audit logs, which record all API requests for monitoring and security analysis."
  },
  {
    question: "How can you limit the CPU and memory usage of a container?",
    question_id: 47,
    options: [
      "a) Use a ResourceQuota.",
      "b) Use LimitRange in the namespace.",
      "c) Set resource requests and limits in the pod specification.",
      "d) Define a PodSecurityPolicy.",
    ],
    answer: "c) Set resource requests and limits in the pod specification.",
    explanation: "Defining CPU and memory resource requests and limits in the pod specification ensures the container does not exceed allocated resources."
  },
  {
    question: "What happens when the `hostIPC: true` option is set in a pod?",
    question_id: 48,
    options: [
      "a) The pod shares the host’s IPC namespace.",
      "b) The pod can communicate with all pods in the namespace.",
      "c) The pod is restricted to private inter-process communication.",
      "d) The pod gains privileged permissions.",
    ],
    answer: "a) The pod shares the host’s IPC namespace.",
    explanation: "When `hostIPC: true` is set, the container shares the host’s IPC namespace, which can pose security risks by exposing host-level processes."
  },
  {
    question: "Which command is used to check RBAC permissions for a specific action?",
    question_id: 49,
    options: [
      "a) `kubectl get rbac`",
      "b) `kubectl describe role`",
      "c) `kubectl auth can-i`",
      "d) `kubectl validate rbac`",
    ],
    answer: "c) `kubectl auth can-i`",
    explanation: "The `kubectl auth can-i` command checks whether a user or service account has permission to perform a specific action based on RBAC policies."
  },
  {
    question: "Which Kubernetes resource helps to store and manage sensitive information like passwords or tokens securely?",
    question_id: 50,
    options: [
      "a) ConfigMap",
      "b) Secret",
      "c) PersistentVolume",
      "d) ServiceAccount",
    ],
    answer: "b) Secret",
    explanation: "Kubernetes Secrets are used to securely store sensitive information like passwords, tokens, or keys, and prevent hardcoding them into pod specifications."
  },
  {
    question: "How do you enforce encryption for Kubernetes Secrets at rest?",
    question_id: 51,
    options: [
      "a) Enable encryption with the `--encryption-provider-config` flag on kube-apiserver.",
      "b) Use `TLS` for communication between kubelet and API server.",
      "c) Store Secrets in a ConfigMap.",
      "d) Restrict access to Secrets using RBAC.",
    ],
    answer: "a) Enable encryption with the `--encryption-provider-config` flag on kube-apiserver.",
    explanation: "Enabling the `--encryption-provider-config` flag ensures that Kubernetes Secrets are encrypted at rest using a provider configuration."
  },
  {
    question: "What does the `--anonymous-auth=false` flag do in the kube-apiserver configuration?",
    question_id: 52,
    options: [
      "a) It disables unauthenticated requests to the API server.",
      "b) It restricts anonymous access to kubelet logs.",
      "c) It ensures only root users can access API server endpoints.",
      "d) It enforces RBAC roles for all API requests.",
    ],
    answer: "a) It disables unauthenticated requests to the API server.",
    explanation: "The `--anonymous-auth=false` flag blocks unauthenticated API requests, ensuring all requests must be authenticated."
  },
  {
    question: "What is the purpose of the `default-deny` policy in Kubernetes NetworkPolicies?",
    question_id: 53,
    options: [
      "a) It denies access to all pods by default.",
      "b) It blocks external traffic to the cluster.",
      "c) It ensures no traffic is allowed until explicitly permitted.",
      "d) It restricts API server communication.",
    ],
    answer: "c) It ensures no traffic is allowed until explicitly permitted.",
    explanation: "A `default-deny` policy in NetworkPolicies blocks all traffic unless explicitly allowed, improving security through network isolation."
  },
  {
    question: "Which admission controller is responsible for applying default values to pod security settings?",
    question_id: 54,
    options: [
      "a) LimitRanger",
      "b) ResourceQuota",
      "c) PodSecurityPolicy",
      "d) DefaultTolerationSeconds",
    ],
    answer: "c) PodSecurityPolicy",
    explanation: "PodSecurityPolicy can apply default security settings, such as disallowing privileged pods or enforcing non-root user execution."
  },
  {
    question: "What is the purpose of setting `runAsGroup` in a pod's security context?",
    question_id: 55,
    options: [
      "a) To ensure the container runs as part of a specific group.",
      "b) To block containers from using host groups.",
      "c) To assign a Kubernetes ServiceAccount to the container.",
      "d) To restrict the container from running as root.",
    ],
    answer: "a) To ensure the container runs as part of a specific group.",
    explanation: "The `runAsGroup` field specifies the group ID under which the container runs, allowing group-based access control."
  },
  {
    question: "How can you ensure that containers do not bind to privileged ports (<1024) in Kubernetes?",
    question_id: 56,
    options: [
      "a) Use a NetworkPolicy to block privileged ports.",
      "b) Set `allowPrivilegeEscalation: false` in the security context.",
      "c) Use PodSecurityPolicy to disallow privileged ports.",
      "d) Use `runAsNonRoot: true` and `runAsUser` settings.",
    ],
    answer: "d) Use `runAsNonRoot: true` and `runAsUser` settings.",
    explanation: "By setting `runAsNonRoot: true` and a non-root user ID in the pod security context, you prevent containers from binding to privileged ports."
  },
  {
    question: "What is a Kubernetes `ClusterRole` primarily used for?",
    question_id: 57,
    options: [
      "a) Defining namespace-specific permissions.",
      "b) Managing resources across multiple clusters.",
      "c) Defining cluster-wide permissions.",
      "d) Restricting node-level privileges.",
    ],
    answer: "c) Defining cluster-wide permissions.",
    explanation: "A `ClusterRole` is used to define permissions that apply to cluster-wide resources, unlike Role, which is namespace-specific."
  },
  {
    question: "How can you restrict pod-to-pod communication to specific namespaces?",
    question_id: 58,
    options: [
      "a) Use RoleBindings to restrict communication.",
      "b) Define a NetworkPolicy with namespace selectors.",
      "c) Use PodSecurityPolicy to limit access.",
      "d) Configure RBAC policies for namespaces.",
    ],
    answer: "b) Define a NetworkPolicy with namespace selectors.",
    explanation: "NetworkPolicies can restrict communication between pods across namespaces by using namespace selectors."
  },
  {
    question: "Which kubelet flag ensures that only authenticated users can access its API?",
    question_id: 59,
    options: [
      "a) `--anonymous-auth=false`",
      "b) `--tls-cert-file`",
      "c) `--client-ca-file`",
      "d) `--protect-kubelet=true`",
    ],
    answer: "a) `--anonymous-auth=false`",
    explanation: "Setting `--anonymous-auth=false` ensures that unauthenticated users cannot access the kubelet API."
  },
  {
    question: "What is the primary function of the `RBAC` (Role-Based Access Control) system in Kubernetes?",
    question_id: 60,
    options: [
      "a) Encrypt communication between pods and services.",
      "b) Control access to Kubernetes resources based on roles.",
      "c) Apply network policies to pods.",
      "d) Restrict CPU and memory usage for containers.",
    ],
    answer: "b) Control access to Kubernetes resources based on roles.",
    explanation: "RBAC (Role-Based Access Control) allows administrators to define who can access Kubernetes resources and what actions they can perform."
  },
  {
    question: "Which Kubernetes object can enforce resource usage limits for a namespace?",
    question_id: 61,
    options: [
      "a) LimitRange",
      "b) PodSecurityPolicy",
      "c) ResourceQuota",
      "d) ClusterRole",
    ],
    answer: "c) ResourceQuota",
    explanation: "ResourceQuota enforces limits on resource usage within a namespace, such as CPU, memory, or object counts."
  },
  {
    question: "How does Kubernetes handle the storage of sensitive information in Secrets by default?",
    question_id: 62,
    options: [
      "a) Secrets are stored as plain text in etcd.",
      "b) Secrets are encrypted using TLS.",
      "c) Secrets are stored in an external vault by default.",
      "d) Secrets are hashed and secured with RBAC.",
    ],
    answer: "a) Secrets are stored as plain text in etcd.",
    explanation: "By default, Kubernetes stores Secrets as base64-encoded strings in etcd. Additional encryption at rest must be configured manually."
  },
  {
    question: "What is the recommended method to secure etcd communication?",
    question_id: 63,
    options: [
      "a) Configure TLS certificates for etcd communication.",
      "b) Enable RBAC for etcd API requests.",
      "c) Use NetworkPolicies to block unauthorized access.",
      "d) Restrict etcd access to root users only.",
    ],
    answer: "a) Configure TLS certificates for etcd communication.",
    explanation: "Using TLS certificates ensures that communication with etcd is encrypted and authenticated, preventing unauthorized access."
  },
  {
    question: "Which Kubernetes feature restricts container access to specific system calls?",
    question_id: 64,
    options: [
      "a) PodSecurityPolicy",
      "b) seccomp profiles",
      "c) RBAC policies",
      "d) NetworkPolicies",
    ],
    answer: "b) seccomp profiles",
    explanation: "Seccomp profiles restrict the system calls that containers can use, reducing the risk of exploitation."
  },
  {
    question: "What does the `ServiceAccount` in Kubernetes provide to a pod?",
    question_id: 65,
    options: [
      "a) An identity to interact with the API server.",
      "b) Network policies to control pod communication.",
      "c) A way to secure container images.",
      "d) CPU and memory usage limits.",
    ],
    answer: "a) An identity to interact with the API server.",
    explanation: "ServiceAccounts provide pods with an identity to authenticate and interact securely with the Kubernetes API server."
  },
  {
    question: "What is the purpose of the `kube-apiserver` flag `--audit-policy-file`?",
    question_id: 66,
    options: [
      "a) To enable RBAC auditing.",
      "b) To define the audit logging policy for API requests.",
      "c) To restrict access to audit logs.",
      "d) To configure TLS encryption for audit logs.",
    ],
    answer: "b) To define the audit logging policy for API requests.",
    explanation: "The `--audit-policy-file` flag specifies the policy that determines what events are recorded in Kubernetes audit logs."
  },
  {
    question: "What does setting `hostNetwork: true` in a pod specification allow?",
    question_id: 67,
    options: [
      "a) The pod to use the node’s network namespace.",
      "b) The pod to communicate with all namespaces.",
      "c) The pod to run with elevated privileges.",
      "d) The pod to enforce a NetworkPolicy.",
    ],
    answer: "a) The pod to use the node’s network namespace.",
    explanation: "Setting `hostNetwork: true` allows the pod to use the host node's network namespace, which can expose the node’s network interfaces to the container."
  },
  {
    question: "How do you restrict a pod from running as a privileged container?",
    question_id: 68,
    options: [
      "a) Set `privileged: false` in the container security context.",
      "b) Use a NetworkPolicy to block privileged mode.",
      "c) Configure a ResourceQuota for the pod.",
      "d) Set `hostPID: false` in the pod specification.",
    ],
    answer: "a) Set `privileged: false` in the container security context.",
    explanation: "Setting `privileged: false` in the security context ensures that the container does not run in privileged mode, reducing its access to host-level resources."
  },
  {
    question: "What is the purpose of Kubernetes `NetworkPolicy` egress rules?",
    question_id: 69,
    options: [
      "a) To control outgoing traffic from pods.",
      "b) To block all pod-to-pod communication.",
      "c) To encrypt egress network traffic.",
      "d) To allow API server access to pods.",
    ],
    answer: "a) To control outgoing traffic from pods.",
    explanation: "Egress rules in a NetworkPolicy control the traffic leaving pods, providing granular control over allowed external destinations."
  },
  {
    question: "What is the primary purpose of a Pod Security Admission (PSA) controller in Kubernetes?",
    question_id: 70,
    options: [
      "a) To validate and enforce pod security standards.",
      "b) To enforce network communication rules between pods.",
      "c) To apply resource limits for pod containers.",
      "d) To encrypt pod logs and secrets automatically.",
    ],
    answer: "a) To validate and enforce pod security standards.",
    explanation: "The Pod Security Admission (PSA) controller enforces security standards (e.g., privileged, baseline, restricted) to ensure pods meet defined security policies."
  },
  {
    question: "Which flag in the kubelet configuration disables anonymous authentication?",
    question_id: 71,
    options: [
      "a) `--anonymous-auth=false`",
      "b) `--client-ca-file`",
      "c) `--disable-anonymous-auth`",
      "d) `--tls-cert-file`",
    ],
    answer: "a) `--anonymous-auth=false`",
    explanation: "Setting `--anonymous-auth=false` in kubelet configuration disables unauthenticated requests, improving kubelet API security."
  },
  {
    question: "What is the function of the `default-deny-all` rule in a NetworkPolicy?",
    question_id: 72,
    options: [
      "a) It blocks all ingress and egress traffic by default.",
      "b) It allows all traffic unless explicitly denied.",
      "c) It blocks access to the Kubernetes API server.",
      "d) It restricts pod creation in namespaces.",
    ],
    answer: "a) It blocks all ingress and egress traffic by default.",
    explanation: "A `default-deny-all` rule in a NetworkPolicy blocks all incoming and outgoing traffic until explicitly allowed by other rules."
  },
  {
    question: "How can you prevent pods from accessing the node’s process ID (PID) namespace?",
    question_id: 73,
    options: [
      "a) Set `hostPID: false` in the pod specification.",
      "b) Use RBAC to restrict PID access.",
      "c) Enable PodSecurityPolicy to disable host PID.",
      "d) Apply NetworkPolicies to block PID access.",
    ],
    answer: "a) Set `hostPID: false` in the pod specification.",
    explanation: "Setting `hostPID: false` prevents pods from sharing the host’s process ID namespace, enhancing process isolation."
  },
  {
    question: "What is the primary role of `Kubernetes Audit Logging`?",
    question_id: 74,
    options: [
      "a) To encrypt all cluster logs.",
      "b) To record requests to the Kubernetes API server.",
      "c) To monitor container resource usage.",
      "d) To restrict unauthorized log access.",
    ],
    answer: "b) To record requests to the Kubernetes API server.",
    explanation: "Kubernetes Audit Logging tracks all requests to the API server, providing a detailed audit trail for security and troubleshooting."
  },
  {
    question: "What does the `allowPrivilegeEscalation: false` security setting prevent?",
    question_id: 75,
    options: [
      "a) It prevents containers from gaining more privileges than their parent process.",
      "b) It prevents the container from running as root.",
      "c) It blocks network access for privileged pods.",
      "d) It ensures the pod cannot access host storage.",
    ],
    answer: "a) It prevents containers from gaining more privileges than their parent process.",
    explanation: "The `allowPrivilegeEscalation: false` setting ensures that a container cannot escalate privileges beyond those it was originally granted."
  },
  {
    question: "Which Kubernetes security mechanism ensures that nodes cannot access resources of other nodes?",
    question_id: 76,
    options: [
      "a) NodeRestriction Admission Controller",
      "b) RBAC policies",
      "c) NetworkPolicies",
      "d) PodSecurityPolicy",
    ],
    answer: "a) NodeRestriction Admission Controller",
    explanation: "The NodeRestriction Admission Controller ensures that kubelet nodes can only modify their own API objects, preventing unauthorized access to other nodes."
  },
  {
    question: "What is the recommended way to restrict API server access to specific IP addresses?",
    question_id: 77,
    options: [
      "a) Use RBAC to block IPs.",
      "b) Configure a NetworkPolicy for the API server.",
      "c) Use `--anonymous-auth=false`.",
      "d) Use an API server firewall or `--client-ca-file`.",
    ],
    answer: "d) Use an API server firewall or `--client-ca-file`.",
    explanation: "Restricting API server access can be achieved using firewall rules or enforcing TLS with `--client-ca-file` to authenticate requests."
  },
  {
    question: "Which Kubernetes component provides certificates for TLS authentication within the cluster?",
    question_id: 78,
    options: [
      "a) kube-apiserver",
      "b) kube-controller-manager",
      "c) kubelet",
      "d) kubeadm",
    ],
    answer: "d) kubeadm",
    explanation: "Kubeadm generates and manages TLS certificates during cluster setup, ensuring secure communication between Kubernetes components."
  },
  {
    question: "What is the effect of setting `readOnlyRootFilesystem: true` in a container's security context?",
    question_id: 79,
    options: [
      "a) It allows containers to write only to the host file system.",
      "b) It blocks containers from modifying their root filesystem.",
      "c) It restricts container access to root user privileges.",
      "d) It enforces encryption for the container's filesystem.",
    ],
    answer: "b) It blocks containers from modifying their root filesystem.",
    explanation: "The `readOnlyRootFilesystem: true` setting prevents containers from writing to their root filesystem, improving security by limiting changes."
  },
  {
    question: "What is the role of the `NodeRestriction` admission controller in Kubernetes?",
    question_id: 80,
    options: [
      "a) It restricts nodes from modifying resources they do not own.",
      "b) It prevents nodes from accessing secrets in other namespaces.",
      "c) It limits API server access for anonymous users.",
      "d) It applies security policies to node-level workloads.",
    ],
    answer: "a) It restricts nodes from modifying resources they do not own.",
    explanation: "The NodeRestriction admission controller limits nodes to only modifying their own Node and Pod objects, preventing unauthorized changes."
  },
  {
    question: "What does the `--kubelet-client-certificate` flag configure on the API server?",
    question_id: 81,
    options: [
      "a) It configures the client certificate for kubelets to authenticate to the API server.",
      "b) It sets up a TLS certificate for kubelet logs.",
      "c) It enables anonymous authentication for kubelets.",
      "d) It defines encryption keys for API traffic.",
    ],
    answer: "a) It configures the client certificate for kubelets to authenticate to the API server.",
    explanation: "The `--kubelet-client-certificate` flag configures a client certificate used by kubelets to securely authenticate to the Kubernetes API server."
  },
  {
    question: "What is the purpose of the `hostPath` volume in Kubernetes?",
    question_id: 82,
    options: [
      "a) To allow pods to access the node’s filesystem.",
      "b) To provide a secure, encrypted volume for pods.",
      "c) To enforce network isolation between pods.",
      "d) To create a temporary volume for container logs.",
    ],
    answer: "a) To allow pods to access the node’s filesystem.",
    explanation: "The `hostPath` volume mounts directories from the host filesystem into a pod, but it can pose security risks if not controlled properly."
  },
  {
    question: "How can you enforce a non-root user for containers in Kubernetes?",
    question_id: 83,
    options: [
      "a) Set `runAsNonRoot: true` in the security context.",
      "b) Enable `allowPrivilegeEscalation: false`.",
      "c) Use NetworkPolicies to block root access.",
      "d) Define a default service account with limited privileges.",
    ],
    answer: "a) Set `runAsNonRoot: true` in the security context.",
    explanation: "Setting `runAsNonRoot: true` ensures that the container cannot run as the root user, improving security by restricting privileges."
  },
  {
    question: "Which admission controller ensures containers do not use `hostPath` volumes unless explicitly allowed?",
    question_id: 84,
    options: [
      "a) PodSecurityPolicy",
      "b) NodeRestriction",
      "c) LimitRanger",
      "d) ResourceQuota",
    ],
    answer: "a) PodSecurityPolicy",
    explanation: "The PodSecurityPolicy admission controller can be configured to disallow the use of `hostPath` volumes to prevent potential security risks."
  },
  {
    question: "What is the primary benefit of using a NetworkPolicy in Kubernetes?",
    question_id: 85,
    options: [
      "a) To secure pod-to-pod communication within the cluster.",
      "b) To enforce RBAC for API server requests.",
      "c) To apply resource limits to pod workloads.",
      "d) To monitor network bandwidth usage.",
    ],
    answer: "a) To secure pod-to-pod communication within the cluster.",
    explanation: "NetworkPolicies allow you to define and enforce rules for pod-to-pod and pod-to-external communication, improving network security."
  },
  {
    question: "What Kubernetes feature enables encryption of data at rest for etcd?",
    question_id: 86,
    options: [
      "a) Encryption Providers configured in kube-apiserver.",
      "b) TLS certificates enabled on etcd.",
      "c) Secrets stored in ConfigMaps.",
      "d) RBAC policies for etcd access.",
    ],
    answer: "a) Encryption Providers configured in kube-apiserver.",
    explanation: "Encryption Providers, configured using the `--encryption-provider-config` flag, enable encryption of etcd data at rest."
  },
  {
    question: "Which security setting prevents a container from gaining more privileges than its parent process?",
    question_id: 87,
    options: [
      "a) `allowPrivilegeEscalation: false`",
      "b) `runAsNonRoot: true`",
      "c) `hostPID: false`",
      "d) `readOnlyRootFilesystem: true`",
    ],
    answer: "a) `allowPrivilegeEscalation: false`",
    explanation: "Setting `allowPrivilegeEscalation: false` prevents the container from gaining additional privileges beyond those granted initially."
  },
  {
    question: "What is the impact of enabling the `--protect-kernel-defaults` flag on kubelet?",
    question_id: 88,
    options: [
      "a) It prevents kubelet from overriding kernel security settings.",
      "b) It disables anonymous authentication for kubelet.",
      "c) It ensures kubelet communicates only over TLS.",
      "d) It blocks pods from accessing the host PID namespace.",
    ],
    answer: "a) It prevents kubelet from overriding kernel security settings.",
    explanation: "The `--protect-kernel-defaults` flag ensures that kubelet does not alter the kernel security configurations, preserving system defaults."
  },
  {
    question: "How can you ensure that a container only runs specific system calls?",
    question_id: 89,
    options: [
      "a) Use seccomp profiles.",
      "b) Set `runAsNonRoot: true`.",
      "c) Use NetworkPolicies.",
      "d) Enable PodSecurityPolicy with restricted privileges.",
    ],
    answer: "a) Use seccomp profiles.",
    explanation: "Seccomp profiles restrict the system calls that a container can use, reducing the risk of kernel-level exploits."
  },
  {
    question: "Which Kubernetes component is responsible for ensuring that pods are scheduled only on appropriate nodes?",
    question_id: 90,
    options: [
      "a) kube-apiserver",
      "b) kube-scheduler",
      "c) kube-proxy",
      "d) kubelet",
    ],
    answer: "b) kube-scheduler",
    explanation: "The kube-scheduler ensures that pods are scheduled on appropriate nodes based on resource availability and constraints."
  },
  {
    question: "What Kubernetes security mechanism ensures that containers cannot access the host’s IPC namespace?",
    question_id: 91,
    options: [
      "a) `hostIPC: false`",
      "b) `runAsNonRoot: true`",
      "c) PodSecurityPolicy",
      "d) NetworkPolicy",
    ],
    answer: "a) `hostIPC: false`",
    explanation: "Setting `hostIPC: false` in a pod's specification prevents containers from accessing the host's IPC namespace, enhancing process isolation."
  },
  {
    question: "What is the role of the Kubernetes `kube-proxy` component?",
    question_id: 92,
    options: [
      "a) It manages pod-to-pod networking and service routing.",
      "b) It restricts pod communication using NetworkPolicies.",
      "c) It authenticates API server requests.",
      "d) It enforces pod security contexts.",
    ],
    answer: "a) It manages pod-to-pod networking and service routing.",
    explanation: "The kube-proxy manages network rules and routes traffic between pods and services in the cluster."
  },
  {
    question: "What is the benefit of using Kubernetes `NetworkPolicies`?",
    question_id: 93,
    options: [
      "a) They control ingress and egress traffic to and from pods.",
      "b) They encrypt etcd data at rest.",
      "c) They enforce resource limits for containers.",
      "d) They restrict kubelet API access.",
    ],
    answer: "a) They control ingress and egress traffic to and from pods.",
    explanation: "NetworkPolicies provide fine-grained control over ingress and egress traffic for pods, improving network security."
  },
  {
    question: "Which Kubernetes feature helps protect sensitive data such as passwords and API keys?",
    question_id: 94,
    options: [
      "a) Secrets",
      "b) ConfigMaps",
      "c) RBAC policies",
      "d) PodSecurityPolicy",
    ],
    answer: "a) Secrets",
    explanation: "Secrets are a Kubernetes resource specifically designed to store sensitive data securely, such as passwords, tokens, and keys."
  },
  {
    question: "What is the effect of enabling the `PodSecurityAdmission` feature?",
    question_id: 95,
    options: [
      "a) It enforces security standards like `baseline` and `restricted`.",
      "b) It encrypts all traffic between pods.",
      "c) It blocks pods that exceed resource limits.",
      "d) It enforces RBAC rules for all namespaces.",
    ],
    answer: "a) It enforces security standards like `baseline` and `restricted`.",
    explanation: "The PodSecurityAdmission feature validates pod configurations against predefined security standards like `privileged`, `baseline`, and `restricted`."
  },
  {
    question: "Which flag ensures that the API server validates etcd client connections using TLS certificates?",
    question_id: 96,
    options: [
      "a) `--etcd-certfile`",
      "b) `--kubelet-client-certificate`",
      "c) `--audit-policy-file`",
      "d) `--anonymous-auth=false`",
    ],
    answer: "a) `--etcd-certfile`",
    explanation: "The `--etcd-certfile` flag ensures that the API server validates etcd client connections using TLS certificates for secure communication."
  },
  {
    question: "How does Kubernetes ensure secure communication between the API server and kubelet?",
    question_id: 97,
    options: [
      "a) By using TLS certificates for mutual authentication.",
      "b) By enforcing RBAC rules for the kubelet API.",
      "c) By enabling the NodeRestriction admission controller.",
      "d) By encrypting logs stored in kubelet.",
    ],
    answer: "a) By using TLS certificates for mutual authentication.",
    explanation: "Kubernetes uses TLS certificates to authenticate and encrypt communication between the API server and kubelet."
  },
  {
    question: "Which Kubernetes admission controller can block pods that do not meet specific security criteria?",
    question_id: 98,
    options: [
      "a) PodSecurityPolicy",
      "b) NodeRestriction",
      "c) ResourceQuota",
      "d) LimitRange",
    ],
    answer: "a) PodSecurityPolicy",
    explanation: "The PodSecurityPolicy admission controller can block pods that do not meet specific security requirements, such as privilege restrictions."
  },
  {
    question: "What is the recommended way to secure sensitive data stored in Kubernetes Secrets?",
    question_id: 99,
    options: [
      "a) Enable encryption at rest for etcd.",
      "b) Store Secrets in ConfigMaps.",
      "c) Use RBAC to deny access to Secrets.",
      "d) Restrict access using PodSecurityPolicies.",
    ],
    answer: "a) Enable encryption at rest for etcd.",
    explanation: "Enabling encryption at rest for etcd ensures that Kubernetes Secrets are stored securely and cannot be read without proper decryption keys."
  }
];
