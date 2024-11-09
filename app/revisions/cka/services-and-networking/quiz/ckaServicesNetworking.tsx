export const questions = [
    {
        question: "Which type of Kubernetes Service provides a stable internal IP for communication within a cluster?",
        options: [
            "a) LoadBalancer",
            "b) NodePort",
            "c) ClusterIP",
            "d) ExternalName"
        ],
        answer: "c) ClusterIP"
    },
    {
        question: "What is the purpose of the 'externalTrafficPolicy' setting in a Service of type LoadBalancer or NodePort?",
        options: [
            "a) To ensure traffic is distributed equally across all nodes",
            "b) To preserve the client source IP",
            "c) To allow cross-cluster communication",
            "d) To restrict access to specific IPs"
        ],
        answer: "b) To preserve the client source IP"
    },
    {
        question: "Which Service type enables access to an application from external clients through a specific port on each node?",
        options: [
            "a) ClusterIP",
            "b) ExternalName",
            "c) LoadBalancer",
            "d) NodePort"
        ],
        answer: "d) NodePort"
    },
    {
        question: "What is the role of 'kube-proxy' in Kubernetes networking?",
        options: [
            "a) It provides DNS resolution for pods",
            "b) It manages network policies",
            "c) It routes traffic to appropriate pod endpoints",
            "d) It deploys services on external IPs"
        ],
        answer: "c) It routes traffic to appropriate pod endpoints"
    },
    {
        question: "How does a Service of type 'ExternalName' function?",
        options: [
            "a) It provides an internal cluster IP",
            "b) It forwards traffic to a DNS name outside the cluster",
            "c) It opens ports on each node for external access",
            "d) It allocates a cloud load balancer"
        ],
        answer: "b) It forwards traffic to a DNS name outside the cluster"
    },
    {
        question: "Which Service type requires cloud provider integration to function properly?",
        options: [
            "a) ClusterIP",
            "b) LoadBalancer",
            "c) NodePort",
            "d) ExternalName"
        ],
        answer: "b) LoadBalancer"
    },
    {
        question: "In Kubernetes, which resource enables fine-grained control over pod-to-pod communication within namespaces?",
        options: [
            "a) Ingress",
            "b) NetworkPolicy",
            "c) ServiceAccount",
            "d) EndpointSlice"
        ],
        answer: "b) NetworkPolicy"
    },
    {
        question: "What protocol does Kubernetes use by default for intra-cluster Service communication?",
        options: [
            "a) TCP",
            "b) UDP",
            "c) HTTP",
            "d) HTTPS"
        ],
        answer: "a) TCP"
    },
    {
        question: "Which Kubernetes object is used to control HTTP and HTTPS routing to different backend services?",
        options: [
            "a) NetworkPolicy",
            "b) Ingress",
            "c) Service",
            "d) Endpoint"
        ],
        answer: "b) Ingress"
    },
    {
        question: "How can you restrict egress traffic from a pod to specific IP ranges in Kubernetes?",
        options: [
            "a) By defining an Ingress object",
            "b) By applying a NetworkPolicy with egress rules",
            "c) By configuring an ExternalName service",
            "d) By setting a ServiceAccount with limited access"
        ],
        answer: "b) By applying a NetworkPolicy with egress rules"
    },
    {
        question: "Which field in a NetworkPolicy allows you to specify allowed IP ranges for ingress traffic?",
        options: [
            "a) podSelector",
            "b) ipBlock",
            "c) namespaceSelector",
            "d) labelSelector"
        ],
        answer: "b) ipBlock"
    },
    {
        question: "How does Kubernetes handle DNS for a Service named 'my-service' in the namespace 'default'?",
        options: [
            "a) Creates a DNS entry at my-service.default.svc.cluster.local",
            "b) Assigns a random external IP",
            "c) Configures an Ingress route",
            "d) Registers it at my-service.cluster.local"
        ],
        answer: "a) Creates a DNS entry at my-service.default.svc.cluster.local"
    },
    {
        question: "Which field is necessary in an Ingress resource to handle HTTPS traffic?",
        options: [
            "a) spec.host",
            "b) spec.tls",
            "c) spec.port",
            "d) spec.ssl"
        ],
        answer: "b) spec.tls"
    },
    {
        question: "Which Kubernetes component is responsible for maintaining the rules defined in NetworkPolicies?",
        options: [
            "a) kube-apiserver",
            "b) kube-scheduler",
            "c) kube-proxy",
            "d) kube-controller-manager"
        ],
        answer: "c) kube-proxy"
    },
    {
        question: "What is the primary use of EndpointSlices in Kubernetes?",
        options: [
            "a) To create Service entries for DNS",
            "b) To enable network segmentation",
            "c) To store and distribute network endpoints",
            "d) To balance traffic across namespaces"
        ],
        answer: "c) To store and distribute network endpoints"
    },
    {
        question: "When a Service with 'type: LoadBalancer' is deployed, what typically happens in a cloud environment?",
        options: [
            "a) An external DNS entry is created",
            "b) An Ingress is automatically configured",
            "c) A cloud load balancer is provisioned",
            "d) Internal IP is assigned to nodes"
        ],
        answer: "c) A cloud load balancer is provisioned"
    },
    {
        question: "What is the function of the 'targetPort' field in a Kubernetes Service spec?",
        options: [
            "a) It specifies the port on the node",
            "b) It defines the port the Service is exposed on",
            "c) It maps to the port where the container listens",
            "d) It opens an external port on each pod"
        ],
        answer: "c) It maps to the port where the container listens"
    },
    {
        question: "Which command is used to view the IP and port details of a Service in Kubernetes?",
        options: [
            "a) kubectl get endpoints",
            "b) kubectl describe service <service-name>",
            "c) kubectl get pods",
            "d) kubectl get ingress"
        ],
        answer: "b) kubectl describe service <service-name>"
    },
    {
        question: "How does a headless Service differ from a regular ClusterIP Service?",
        options: [
            "a) It exposes services externally",
            "b) It doesn't assign an IP and directly routes traffic to endpoints",
            "c) It only supports UDP traffic",
            "d) It balances traffic across multiple namespaces"
        ],
        answer: "b) It doesn't assign an IP and directly routes traffic to endpoints"
    },
    {
        question: "Which field in an Ingress spec defines the paths that should route to specific services?",
        options: [
            "a) spec.rules.http.paths",
            "b) spec.hosts",
            "c) spec.backend.rules",
            "d) spec.port"
        ],
        answer: "a) spec.rules.http.paths"
    },
    {
        question: "What is the function of the 'clusterIP' field when set to 'None' in a Service spec?",
        options: [
            "a) It allocates an IP from the cluster",
            "b) It makes the Service headless",
            "c) It enables LoadBalancer mode",
            "d) It disables the Service"
        ],
        answer: "b) It makes the Service headless"
    },
    {
        question: "In a Kubernetes network policy, which rule type would allow connections from all pods in a specific namespace?",
        options: [
            "a) egressSelector",
            "b) namespaceSelector",
            "c) podSelector",
            "d) labelSelector"
        ],
        answer: "b) namespaceSelector"
    },
    {
        question: "Which parameter in a Service spec is required to expose a Service externally with a fixed IP?",
        options: [
            "a) clusterIP",
            "b) externalIPs",
            "c) nodePort",
            "d) externalTrafficPolicy"
        ],
        answer: "b) externalIPs"
    },
    {
        question: "What is the purpose of the 'selector' field in a Kubernetes Service spec?",
        options: [
            "a) To define network policies",
            "b) To select pods with specific labels",
            "c) To assign IPs to nodes",
            "d) To specify egress rules"
        ],
        answer: "b) To select pods with specific labels"
    },
    {
        question: "Which Service type would you use to expose an application directly to the internet?",
        options: [
            "a) ClusterIP",
            "b) NodePort",
            "c) ExternalName",
            "d) LoadBalancer"
        ],
        answer: "d) LoadBalancer"
    },
    {
        question: "Which type of Kubernetes Service provides a stable internal IP for communication within a cluster?",
        options: [
            "a) LoadBalancer",
            "b) NodePort",
            "c) ClusterIP",
            "d) ExternalName"
        ],
        answer: "c) ClusterIP"
    },
    {
        question: "What is the purpose of the 'externalTrafficPolicy' setting in a Service of type LoadBalancer or NodePort?",
        options: [
            "a) To ensure traffic is distributed equally across all nodes",
            "b) To preserve the client source IP",
            "c) To allow cross-cluster communication",
            "d) To restrict access to specific IPs"
        ],
        answer: "b) To preserve the client source IP"
    },
    {
        question: "Which Service type enables access to an application from external clients through a specific port on each node?",
        options: [
            "a) ClusterIP",
            "b) ExternalName",
            "c) LoadBalancer",
            "d) NodePort"
        ],
        answer: "d) NodePort"
    },
    {
        question: "What is the role of 'kube-proxy' in Kubernetes networking?",
        options: [
            "a) It provides DNS resolution for pods",
            "b) It manages network policies",
            "c) It routes traffic to appropriate pod endpoints",
            "d) It deploys services on external IPs"
        ],
        answer: "c) It routes traffic to appropriate pod endpoints"
    },
    {
        question: "How does a Service of type 'ExternalName' function?",
        options: [
            "a) It provides an internal cluster IP",
            "b) It forwards traffic to a DNS name outside the cluster",
            "c) It opens ports on each node for external access",
            "d) It allocates a cloud load balancer"
        ],
        answer: "b) It forwards traffic to a DNS name outside the cluster"
    },
    // Add the remaining questions here as necessary, following the same structure.
]
