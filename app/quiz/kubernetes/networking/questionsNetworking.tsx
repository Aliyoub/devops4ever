export const questions = [
  {
    question: "What is the default networking model used by Kubernetes for pod communication?",
    question_id:0,
    options: [
      "a) Flat networking",
      "b) Overlay networking",
      "c) NAT-based networking",
      "d) VPC-based networking",
    ],
    answer: "a) Flat networking",
    explanation: "Kubernetes uses a flat networking model by default, allowing all pods to communicate with each other without NAT."
  },
  {
    question: "Which Kubernetes component is responsible for implementing Service networking?",
    question_id:1,
    options: [
      "a) kube-proxy",
      "b) kubelet",
      "c) kube-scheduler",
      "d) etcd",
    ],
    answer: "a) kube-proxy",
    explanation: "kube-proxy is responsible for maintaining network rules on nodes to enable communication between services and pods."
  },
  {
    question: "What is the primary purpose of a Kubernetes NetworkPolicy?",
    question_id:2,
    options: [
      "a) To control ingress and egress traffic to pods.",
      "b) To provide DNS resolution for services.",
      "c) To manage pod IP allocation.",
      "d) To encrypt traffic between nodes.",
    ],
    answer: "a) To control ingress and egress traffic to pods.",
    explanation: "NetworkPolicies allow administrators to define rules for controlling ingress and egress traffic for pods in a cluster."
  },
  {
    question: "Which IP range does Kubernetes typically use for pod IP allocation by default?",
    question_id:3,
    options: [
      "a) 192.168.0.0/16",
      "b) 10.244.0.0/16",
      "c) 172.16.0.0/12",
      "d) 127.0.0.0/8",
    ],
    answer: "b) 10.244.0.0/16",
    explanation: "The default pod CIDR for many Kubernetes setups (such as with Flannel) is 10.244.0.0/16, though this can be configured."
  },
  {
    question: "Which protocol does Kubernetes use for DNS-based service discovery?",
    question_id:4,
    options: [
      "a) HTTP",
      "b) UDP",
      "c) DNS",
      "d) TCP",
    ],
    answer: "c) DNS",
    explanation: "Kubernetes uses the DNS protocol to enable service discovery, allowing pods to resolve service names to their cluster IPs."
  },
  {
    question: "What is the function of the ClusterIP service type in Kubernetes?",
    question_id:5,
    options: [
      "a) Exposes a service to the internet.",
      "b) Exposes a service on a cluster-internal IP.",
      "c) Load balances traffic to multiple clusters.",
      "d) Allows external traffic to access a service.",
    ],
    answer: "b) Exposes a service on a cluster-internal IP.",
    explanation: "A ClusterIP service type creates an internal IP address for accessing the service within the cluster."
  },
  {
    question: "Which Kubernetes service type is used to expose an application on an external IP?",
    question_id:6,
    options: [
      "a) NodePort",
      "b) LoadBalancer",
      "c) ClusterIP",
      "d) ExternalName",
    ],
    answer: "b) LoadBalancer",
    explanation: "The LoadBalancer service type exposes an application to the internet by provisioning a load balancer with an external IP."
  },
  {
    question: "What is the default port range used by Kubernetes for NodePort services?",
    question_id:7,
    options: [
      "a) 30000-32767",
      "b) 20000-29999",
      "c) 10000-19999",
      "d) 40000-49999",
    ],
    answer: "a) 30000-32767",
    explanation: "Kubernetes uses the port range 30000-32767 by default for NodePort services to expose applications externally."
  },
  {
    question: "How does Kubernetes handle DNS resolution for a service named `myservice` in the `default` namespace?",
    question_id:8,
    options: [
      "a) myservice",
      "b) myservice.default",
      "c) myservice.default.svc",
      "d) myservice.default.svc.cluster.local",
    ],
    answer: "d) myservice.default.svc.cluster.local",
    explanation: "Kubernetes DNS resolves service names in the format `<service>.<namespace>.svc.cluster.local`."
  },
  {
    question: "What is the role of the kube-dns or CoreDNS component in Kubernetes?",
    question_id:9,
    options: [
      "a) Handles pod-to-pod communication.",
      "b) Provides DNS resolution for services and pods.",
      "c) Manages IP allocation for nodes.",
      "d) Routes traffic to external services.",
    ],
    answer: "b) Provides DNS resolution for services and pods.",
    explanation: "CoreDNS or kube-dns provides DNS-based service discovery, enabling pods to resolve service names to cluster IPs."
  },
  {
    question: "Which Kubernetes network model requirement ensures that all pods can communicate without NAT?",
    question_id:10,
    options: [
      "a) Pods must have unique IPs.",
      "b) Pods must use host networking.",
      "c) Pods must share the same IP range.",
      "d) Pods must be routable within the cluster.",
    ],
    answer: "d) Pods must be routable within the cluster.",
    explanation: "Kubernetes networking requires that all pods can communicate directly with each other without NAT."
  },
  {
    question: "What is the main purpose of a Kubernetes Ingress resource?",
    question_id:11,
    options: [
      "a) To manage internal DNS for the cluster.",
      "b) To provide access to services from outside the cluster.",
      "c) To route traffic between pods within the cluster.",
      "d) To define policies for pod communication.",
    ],
    answer: "b) To provide access to services from outside the cluster.",
    explanation: "An Ingress resource defines rules for external HTTP and HTTPS traffic to reach services within the cluster."
  },
  {
    question: "What is the default IP range for service ClusterIP allocation in Kubernetes?",
    question_id:12,
    options: [
      "a) 10.0.0.0/24",
      "b) 10.96.0.0/12",
      "c) 192.168.0.0/16",
      "d) 172.16.0.0/12",
    ],
    answer: "b) 10.96.0.0/12",
    explanation: "The default service CIDR for Kubernetes is 10.96.0.0/12, though this can be customized."
  },
  {
    question: "What is the role of a Container Network Interface (CNI) plugin in Kubernetes?",
    question_id:13,
    options: [
      "a) To manage API server connections.",
      "b) To enable pod-to-pod networking.",
      "c) To handle service discovery.",
      "d) To provide DNS resolution.",
    ],
    answer: "b) To enable pod-to-pod networking.",
    explanation: "CNI plugins enable pod-to-pod communication by setting up the network stack and routes for each pod."
  },
  {
    question: "Which protocol is used by Kubernetes services for communication between pods?",
    question_id:14,
    options: [
      "a) HTTP",
      "b) UDP",
      "c) IP",
      "d) TCP",
    ],
    answer: "c) IP",
    explanation: "Kubernetes services route communication between pods using the IP protocol, abstracting the details of the underlying transport."
  },
  {
    question: "What is the purpose of the `ExternalName` service type in Kubernetes?",
    question_id:15,
    options: [
      "a) It provides an external IP for accessing the service.",
      "b) It maps a service to a DNS name outside the cluster.",
      "c) It routes traffic to external pods.",
      "d) It creates a load balancer for the service.",
    ],
    answer: "b) It maps a service to a DNS name outside the cluster.",
    explanation: "The `ExternalName` service type maps a Kubernetes service to an external DNS name, enabling external resource access."
  },
  {
    question: "Which admission controller validates NetworkPolicy objects?",
    question_id:16,
    options: [
      "a) ResourceQuota",
      "b) LimitRange",
      "c) NamespaceLifecycle",
      "d) AlwaysAdmit",
    ],
    answer: "d) AlwaysAdmit",
    explanation: "The AlwaysAdmit admission controller accepts NetworkPolicy objects, ensuring their definitions are valid."
  },
  {
    question: "What type of load balancing does a Kubernetes Service with `ClusterIP` provide?",
    question_id:17,
    options: [
      "a) External load balancing",
      "b) Internal load balancing within the cluster",
      "c) No load balancing",
      "d) Round-robin DNS load balancing",
    ],
    answer: "b) Internal load balancing within the cluster",
    explanation: "ClusterIP services balance traffic between pods within the cluster without exposing them externally."
  },
  {
    question: "What is the primary advantage of using a NodePort service type in Kubernetes?",
    question_id:18,
    options: [
      "a) It provides persistent storage.",
      "b) It enables direct access to services on specific node ports.",
      "c) It supports dynamic IP allocation.",
      "d) It encrypts traffic between services.",
    ],
    answer: "b) It enables direct access to services on specific node ports.",
    explanation: "NodePort services expose applications externally by binding them to a specific port on each node."
  },
  {
    question: "What happens if no NetworkPolicy is applied to a pod in Kubernetes?",
    question_id:19,
    options: [
      "a) The pod is blocked from all communication.",
      "b) The pod can communicate freely with all other pods.",
      "c) The pod can only communicate with pods in its namespace.",
      "d) The pod can only communicate with services.",
    ],
    answer: "b) The pod can communicate freely with all other pods.",
    explanation: "By default, in the absence of any NetworkPolicy, all pods in Kubernetes can freely communicate with each other."
  },
  {
    question: "Which Kubernetes networking component manages routing rules for traffic to services?",
    question_id:20,
    options: [
      "a) kube-proxy",
      "b) kube-controller-manager",
      "c) kubelet",
      "d) CoreDNS",
    ],
    answer: "a) kube-proxy",
    explanation: "kube-proxy manages IP tables or IPVS rules to ensure traffic is correctly routed to the appropriate service endpoints."
  },
  {
    question: "What does the 'hostNetwork' field in a pod specification do?",
    question_id:21,
    options: [
      "a) It isolates the pod from the node's network.",
      "b) It allows the pod to share the node's network namespace.",
      "c) It disables DNS resolution for the pod.",
      "d) It creates a virtual network for the pod.",
    ],
    answer: "b) It allows the pod to share the node's network namespace.",
    explanation: "Setting 'hostNetwork: true' in a pod specification allows the pod to use the same network namespace as the host node."
  },
  {
    question: "How does Kubernetes ensure high availability of DNS resolution?",
    question_id:22,
    options: [
      "a) By using redundant CoreDNS pods.",
      "b) By storing DNS records in etcd.",
      "c) By enabling NodePort for DNS services.",
      "d) By exposing DNS services externally.",
    ],
    answer: "a) By using redundant CoreDNS pods.",
    explanation: "Kubernetes deploys multiple replicas of CoreDNS to ensure high availability and fault tolerance for DNS resolution."
  },
  {
    question: "What is the purpose of the EndpointSlice API in Kubernetes?",
    question_id:23,
    options: [
      "a) It improves scalability of service discovery.",
      "b) It provides IP allocation for services.",
      "c) It monitors pod network traffic.",
      "d) It enables dynamic network policies.",
    ],
    answer: "a) It improves scalability of service discovery.",
    explanation: "The EndpointSlice API improves scalability by splitting service endpoints into smaller, more manageable slices."
  },
  {
    question: "What does the `externalTrafficPolicy` field in a LoadBalancer service determine?",
    question_id:24,
    options: [
      "a) Whether traffic is routed through the cluster network.",
      "b) Whether the service supports internal communication.",
      "c) Whether traffic is encrypted before reaching pods.",
      "d) Whether the service uses a static external IP.",
    ],
    answer: "a) Whether traffic is routed through the cluster network.",
    explanation: "The `externalTrafficPolicy` field determines if traffic is routed through the cluster network or sent directly to the nodes."
  },
  {
    question: "Which Kubernetes CNI plugin is commonly used for providing pod-to-pod communication in a flat network?",
    question_id:25,
    options: [
      "a) Flannel",
      "b) Istio",
      "c) Calico",
      "d) Weave Net",
    ],
    answer: "a) Flannel",
    explanation: "Flannel is a simple and widely used CNI plugin that provides pod-to-pod communication through a flat networking model."
  },
  {
    question: "What is the purpose of an Ingress controller in Kubernetes?",
    question_id:26,
    options: [
      "a) To manage external load balancers.",
      "b) To enforce network policies.",
      "c) To implement Ingress resources.",
      "d) To handle pod-to-pod communication.",
    ],
    answer: "c) To implement Ingress resources.",
    explanation: "Ingress controllers process Ingress resources and manage routing of external HTTP/HTTPS traffic to cluster services."
  },
  {
    question: "Which protocol is used by kube-proxy in IPVS mode for load balancing?",
    question_id:27,
    options: [
      "a) BGP",
      "b) IPVS",
      "c) TCP",
      "d) VXLAN",
    ],
    answer: "b) IPVS",
    explanation: "kube-proxy in IPVS mode uses the IPVS protocol to provide high-performance load balancing for Kubernetes services."
  },
  {
    question: "Which field in a NetworkPolicy specifies the pods affected by the policy?",
    question_id:28,
    options: [
      "a) podSelector",
      "b) ingress",
      "c) namespaceSelector",
      "d) egress",
    ],
    answer: "a) podSelector",
    explanation: "The `podSelector` field determines which pods the NetworkPolicy rules apply to."
  },
  {
    question: "What is the default DNS policy used by Kubernetes pods?",
    question_id:29,
    options: [
      "a) Default",
      "b) ClusterFirst",
      "c) None",
      "d) ClusterOnly",
    ],
    answer: "b) ClusterFirst",
    explanation: "The `ClusterFirst` DNS policy directs DNS queries to the cluster DNS server unless the query is for an external domain."
  },
  {
    question: "How can you expose a Kubernetes service with a static external IP?",
    question_id:30,
    options: [
      "a) Using a NodePort service.",
      "b) Using a LoadBalancer service with an assigned external IP.",
      "c) Using a ClusterIP service.",
      "d) Using a NetworkPolicy.",
    ],
    answer: "b) Using a LoadBalancer service with an assigned external IP.",
    explanation: "A LoadBalancer service can be configured with a static external IP to expose the service to external clients."
  },
  {
    question: "Which Kubernetes object is used to route HTTP and HTTPS traffic to services based on hostnames or paths?",
    question_id:31,
    options: [
      "a) Service",
      "b) EndpointSlice",
      "c) Ingress",
      "d) NetworkPolicy",
    ],
    answer: "c) Ingress",
    explanation: "Ingress objects define rules for routing external HTTP/HTTPS traffic to services based on hostnames or paths."
  },
  {
    question: "What is the primary role of a Service in Kubernetes?",
    question_id:32,
    options: [
      "a) To create pod-to-pod communication policies.",
      "b) To abstract access to a set of pods.",
      "c) To manage external DNS.",
      "d) To allocate pod IP addresses.",
    ],
    answer: "b) To abstract access to a set of pods.",
    explanation: "A Service in Kubernetes abstracts access to a group of pods, allowing for consistent communication and load balancing."
  },
  {
    question: "What is the primary function of the kube-router CNI plugin?",
    question_id:33,
    options: [
      "a) To handle service discovery.",
      "b) To provide BGP-based pod networking.",
      "c) To encrypt traffic between nodes.",
      "d) To allocate service IP addresses.",
    ],
    answer: "b) To provide BGP-based pod networking.",
    explanation: "The kube-router CNI plugin uses BGP to enable efficient pod networking and routing in Kubernetes."
  },
  {
    question: "What is required for a NetworkPolicy to be effective in Kubernetes?",
    question_id:34,
    options: [
      "a) A CNI plugin that supports NetworkPolicies.",
      "b) A specific node selector on pods.",
      "c) An ExternalName service.",
      "d) Host network mode enabled on all pods.",
    ],
    answer: "a) A CNI plugin that supports NetworkPolicies.",
    explanation: "To enforce NetworkPolicies, a CNI plugin with NetworkPolicy support is required (e.g., Calico or Weave Net)."
  },
  {
    question: "What is the purpose of the `subnet` mode in Flannel?",
    question_id:35,
    options: [
      "a) It assigns IP ranges to nodes.",
      "b) It routes traffic based on hostnames.",
      "c) It encrypts pod-to-pod traffic.",
      "d) It creates virtual networks for pods.",
    ],
    answer: "a) It assigns IP ranges to nodes.",
    explanation: "Flannel in `subnet` mode assigns a unique IP range to each node for pod IP allocation."
  },
  {
    question: "Which Kubernetes feature can be used to restrict pod communication within namespaces?",
    question_id:36,
    options: [
      "a) NetworkPolicy",
      "b) Ingress",
      "c) EndpointSlice",
      "d) CoreDNS",
    ],
    answer: "a) NetworkPolicy",
    explanation: "NetworkPolicies can be used to restrict communication between pods, including isolating namespaces."
  },
  {
    question: "What is the purpose of kube-proxy running in `userspace` mode?",
    question_id:37,
    options: [
      "a) It processes DNS queries.",
      "b) It routes traffic through user space for compatibility.",
      "c) It enables advanced encryption features.",
      "d) It directly manages pod IP allocation.",
    ],
    answer: "b) It routes traffic through user space for compatibility.",
    explanation: "kube-proxy in `userspace` mode routes traffic through user space, providing compatibility but at a performance cost."
  },
  {
    question: "What does the `ipBlock` field in a NetworkPolicy allow?",
    question_id:38,
    options: [
      "a) Specifying CIDR ranges for traffic restrictions.",
      "b) Assigning static IPs to services.",
      "c) Blocking external IPs from accessing nodes.",
      "d) Enabling pod-to-service communication.",
    ],
    answer: "a) Specifying CIDR ranges for traffic restrictions.",
    explanation: "The `ipBlock` field in a NetworkPolicy allows specifying CIDR ranges to restrict traffic."
  },
  {
    question: "What happens if you delete an Ingress resource but keep its associated service?",
    question_id:39,
    options: [
      "a) The service remains accessible externally.",
      "b) The service becomes inaccessible externally.",
      "c) All pods in the service are restarted.",
      "d) DNS resolution for the service is disabled.",
    ],
    answer: "b) The service becomes inaccessible externally.",
    explanation: "Ingress resources manage external access; deleting the Ingress will block external access to the service."
  },
  {
    question: "What is the function of the `dnsPolicy` field set to `None` in a pod specification?",
    question_id:40,
    options: [
      "a) It disables DNS for the pod.",
      "b) It forces the pod to use custom DNS configuration.",
      "c) It ensures the pod uses the default cluster DNS.",
      "d) It prevents the pod from communicating with external services.",
    ],
    answer: "b) It forces the pod to use custom DNS configuration.",
    explanation: "Setting `dnsPolicy: None` allows the pod to define its own DNS configuration, ignoring the cluster's DNS settings."
  },
  {
    question: "What is the role of kube-proxy in Kubernetes?",
    question_id:41,
    options: [
      "a) Scheduling pods onto nodes.",
      "b) Managing IP tables and IPVS rules for service traffic.",
      "c) Handling DNS queries for pods.",
      "d) Assigning pod IP addresses.",
    ],
    answer: "b) Managing IP tables and IPVS rules for service traffic.",
    explanation: "kube-proxy ensures traffic is correctly routed by configuring IP tables or IPVS rules to direct requests to the appropriate service endpoints."
  },
  {
    question: "Which Kubernetes resource can be used to expose a service only within the cluster?",
    question_id:42,
    options: [
      "a) ClusterIP",
      "b) NodePort",
      "c) LoadBalancer",
      "d) Ingress",
    ],
    answer: "a) ClusterIP",
    explanation: "The `ClusterIP` type is used to expose a service only within the cluster, making it inaccessible from the outside."
  },
  {
    question: "What does the `type: NodePort` service expose?",
    question_id:43,
    options: [
      "a) The service on a specific port across all nodes in the cluster.",
      "b) The service on a private network only.",
      "c) The service on the cluster's DNS server.",
      "d) The service with an external IP address.",
    ],
    answer: "a) The service on a specific port across all nodes in the cluster.",
    explanation: "A `NodePort` service exposes the application on a port accessible on every node in the cluster, forwarding traffic to the service."
  },
  {
    question: "How can you allow pods in one namespace to communicate with pods in another namespace?",
    question_id:44,
    options: [
      "a) By creating a NetworkPolicy that permits cross-namespace communication.",
      "b) By using a NodePort service.",
      "c) By setting `hostNetwork: true` for pods.",
      "d) By using a LoadBalancer service.",
    ],
    answer: "a) By creating a NetworkPolicy that permits cross-namespace communication.",
    explanation: "NetworkPolicies can be configured to allow or restrict communication between pods in different namespaces."
  },
  {
    question: "Which networking model does Kubernetes use for pod communication?",
    question_id:45,
    options: [
      "a) Flat network with unique pod IPs.",
      "b) Layer 3 routing with overlapping pod IPs.",
      "c) VLAN segmentation for pods.",
      "d) Host-based NAT for pod communication.",
    ],
    answer: "a) Flat network with unique pod IPs.",
    explanation: "Kubernetes assumes a flat network where each pod has a unique IP address and can communicate with any other pod directly."
  },
  {
    question: "What is a key limitation of using NodePort services in Kubernetes?",
    question_id:46,
    options: [
      "a) They do not support SSL/TLS encryption.",
      "b) They expose services on all nodes, increasing security risks.",
      "c) They require a custom CNI plugin.",
      "d) They only work with Ingress controllers.",
    ],
    answer: "b) They expose services on all nodes, increasing security risks.",
    explanation: "NodePort services are accessible on a specific port on all nodes, which can lead to security risks if not properly managed."
  },
  {
    question: "What is the primary purpose of the Calico CNI plugin?",
    question_id:47,
    options: [
      "a) To provide service discovery.",
      "b) To enforce network policies and provide routing.",
      "c) To handle DNS resolution for pods.",
      "d) To manage external ingress traffic.",
    ],
    answer: "b) To enforce network policies and provide routing.",
    explanation: "Calico is a CNI plugin that focuses on network policy enforcement and provides efficient BGP-based routing."
  },
  {
    question: "What does a Service with `type: ExternalName` do?",
    question_id:48,
    options: [
      "a) It forwards traffic to an external DNS name.",
      "b) It creates a static external IP for the service.",
      "c) It balances load across external servers.",
      "d) It allows pod communication across namespaces.",
    ],
    answer: "a) It forwards traffic to an external DNS name.",
    explanation: "An `ExternalName` service maps a service to an external DNS name, allowing Kubernetes resources to access external services."
  },
  {
    question: "What is the default protocol for Kubernetes services if none is specified?",
    question_id:49,
    options: [
      "a) HTTP",
      "b) TCP",
      "c) UDP",
      "d) ICMP",
    ],
    answer: "b) TCP",
    explanation: "If no protocol is specified, Kubernetes services default to using the TCP protocol."
  },
  {
    question: "Which resource is required for exposing multiple services on different paths of the same domain?",
    question_id:50,
    options: [
      "a) Ingress",
      "b) ClusterIP",
      "c) NodePort",
      "d) NetworkPolicy",
    ],
    answer: "a) Ingress",
    explanation: "An Ingress resource enables routing of traffic to multiple services based on paths or hostnames on the same domain."
  },
  {
    question: "What is the purpose of using the `podSelector` field in a NetworkPolicy?",
    question_id:51,
    options: [
      "a) To specify which pods are targeted by the policy.",
      "b) To block all traffic to the namespace.",
      "c) To route traffic to external IPs.",
      "d) To configure DNS settings for the pods.",
    ],
    answer: "a) To specify which pods are targeted by the policy.",
    explanation: "The `podSelector` field identifies the pods to which the NetworkPolicy rules will apply."
  },
  {
    question: "What is the primary use of a LoadBalancer service in Kubernetes?",
    question_id:52,
    options: [
      "a) To balance traffic between pods within the cluster.",
      "b) To expose a service externally with a cloud provider's load balancer.",
      "c) To allocate IP addresses to nodes.",
      "d) To manage DNS resolution for services.",
    ],
    answer: "b) To expose a service externally with a cloud provider's load balancer.",
    explanation: "A LoadBalancer service integrates with the cloud provider to expose services externally via a load balancer."
  },
  {
    question: "Which of the following is a core requirement for Kubernetes network plugins?",
    question_id:53,
    options: [
      "a) Support for pod IP routing.",
      "b) Built-in encryption.",
      "c) DNS name resolution for services.",
      "d) Support for HTTP/HTTPS traffic only.",
    ],
    answer: "a) Support for pod IP routing.",
    explanation: "Kubernetes network plugins must provide pod IP routing to enable direct communication between pods."
  },
  {
    question: "How does Kubernetes handle DNS resolution for pods?",
    question_id:54,
    options: [
      "a) Through the CoreDNS service.",
      "b) By configuring NodePort services.",
      "c) By using external DNS servers only.",
      "d) Through the kube-proxy component.",
    ],
    answer: "a) Through the CoreDNS service.",
    explanation: "Kubernetes uses the CoreDNS service to handle DNS resolution for pods and services within the cluster."
  },
  {
    question: "What is a key feature of a NetworkPolicy in Kubernetes?",
    question_id:55,
    options: [
      "a) It allows restricting traffic to specific CIDR ranges.",
      "b) It assigns static IP addresses to pods.",
      "c) It balances load between services.",
      "d) It manages Ingress rules.",
    ],
    answer: "a) It allows restricting traffic to specific CIDR ranges.",
    explanation: "NetworkPolicies can restrict traffic to and from pods based on selectors, ports, and CIDR ranges."
  },
  {
    question: "What happens when you set `externalTrafficPolicy: Local` for a service?",
    question_id:56,
    options: [
      "a) Traffic is routed only to pods on the same node as the request.",
      "b) Traffic bypasses the cluster network.",
      "c) DNS resolution is disabled for the service.",
      "d) Traffic is encrypted by default.",
    ],
    answer: "a) Traffic is routed only to pods on the same node as the request.",
    explanation: "The `externalTrafficPolicy: Local` setting ensures traffic is routed only to pods on the same node, preserving the source IP."
  },
  {
    question: "What is the purpose of the `kubectl port-forward` command?",
    question_id:57,
    options: [
      "a) To forward traffic from a local port to a pod.",
      "b) To expose a service to external traffic.",
      "c) To create a NetworkPolicy for a pod.",
      "d) To assign a static IP address to a pod.",
    ],
    answer: "a) To forward traffic from a local port to a pod.",
    explanation: "The `kubectl port-forward` command allows local ports to connect directly to a specific pod for debugging or development."
  },
  {
    question: "How does a ClusterIP service facilitate communication?",
    question_id:58,
    options: [
      "a) It routes traffic within the cluster.",
      "b) It exposes the service on the internet.",
      "c) It assigns an IP address to a node.",
      "d) It manages external DNS for services.",
    ],
    answer: "a) It routes traffic within the cluster.",
    explanation: "ClusterIP services provide internal routing for pods within the cluster."
  },
  {
    question: "Which Kubernetes resource is required to allow HTTPS traffic through an Ingress?",
    question_id:59,
    options: [
      "a) TLS secret",
      "b) NetworkPolicy",
      "c) NodePort service",
      "d) ClusterIP service",
    ],
    answer: "a) TLS secret",
    explanation: "A TLS secret stores the SSL/TLS certificate and key required to terminate HTTPS traffic in an Ingress."
  },
  {
    question: "What is the function of a headless service in Kubernetes?",
    question_id:60,
    options: [
      "a) To provide direct access to pod IPs without load balancing.",
      "b) To expose a service to the internet.",
      "c) To enforce NetworkPolicies for pods.",
      "d) To route traffic to a static external IP.",
    ],
    answer: "a) To provide direct access to pod IPs without load balancing.",
    explanation: "Headless services allow direct communication with individual pod IPs, bypassing Kubernetes service load balancing."
  },
  {
    question: "What does a `hostNetwork: true` setting do in a pod specification?",
    question_id:61,
    options: [
      "a) It allows the pod to share the host's network namespace.",
      "b) It restricts the pod's communication to the host only.",
      "c) It disables DNS resolution for the pod.",
      "d) It forces the pod to use a NodePort service.",
    ],
    answer: "a) It allows the pod to share the host's network namespace.",
    explanation: "Enabling `hostNetwork: true` allows the pod to use the host's network namespace, sharing the same IP and ports."
  },
  {
    question: "What is a key advantage of using an Ingress resource in Kubernetes?",
    question_id:62,
    options: [
      "a) It provides HTTP routing to multiple services.",
      "b) It encrypts all pod-to-pod communication.",
      "c) It assigns a unique IP to each pod.",
      "d) It restricts external access to nodes.",
    ],
    answer: "a) It provides HTTP routing to multiple services.",
    explanation: "Ingress resources enable HTTP and HTTPS routing to multiple services based on hostnames and paths."
  },
  {
    question: "How can you ensure that only specific pods can send traffic to a service?",
    question_id:63,
    options: [
      "a) Use a NetworkPolicy.",
      "b) Set `externalTrafficPolicy: Local`.",
      "c) Configure a NodePort service.",
      "d) Create an Ingress rule.",
    ],
    answer: "a) Use a NetworkPolicy.",
    explanation: "A NetworkPolicy can be configured to restrict ingress traffic to a service to specific pods or namespaces."
  },
  {
    question: "Which networking feature allows pod IPs to remain consistent within the cluster?",
    question_id:64,
    options: [
      "a) CNI plugin",
      "b) NodePort service",
      "c) ExternalName service",
      "d) Headless service",
    ],
    answer: "a) CNI plugin",
    explanation: "A CNI plugin ensures consistent IP allocation for pods within the cluster, enabling stable networking."
  },
  {
    question: "What happens when a pod sends traffic to another pod on a different node?",
    question_id:65,
    options: [
      "a) The traffic is routed through the overlay network.",
      "b) The traffic is blocked by the kube-proxy.",
      "c) The traffic is sent directly via the host network.",
      "d) The traffic is NATed to the service IP.",
    ],
    answer: "a) The traffic is routed through the overlay network.",
    explanation: "Inter-node pod communication uses the cluster's overlay network, which routes traffic between nodes."
  },
  {
    question: "What is the default DNS suffix for Kubernetes services?",
    question_id:66,
    options: [
      "a) `.svc.cluster.local`",
      "b) `.k8s.local`",
      "c) `.cluster.internal`",
      "d) `.svc.kubernetes.local`",
    ],
    answer: "a) `.svc.cluster.local`",
    explanation: "By default, Kubernetes services are resolvable with a `.svc.cluster.local` DNS suffix."
  },
  {
    question: "Which type of service allows Kubernetes to communicate with external non-Kubernetes services?",
    question_id:67,
    options: [
      "a) ExternalName",
      "b) LoadBalancer",
      "c) ClusterIP",
      "d) NodePort",
    ],
    answer: "a) ExternalName",
    explanation: "ExternalName services map Kubernetes services to external DNS names, enabling access to non-Kubernetes services."
  },
  {
    question: "What is the primary function of an Ingress controller in Kubernetes?",
    question_id:68,
    options: [
      "a) To implement Ingress rules for routing traffic.",
      "b) To assign IPs to nodes.",
      "c) To enforce NetworkPolicies.",
      "d) To provide DNS resolution for services.",
    ],
    answer: "a) To implement Ingress rules for routing traffic.",
    explanation: "Ingress controllers interpret and apply Ingress rules, routing external HTTP/S traffic to Kubernetes services."
  },
  {
    question: "How can you achieve pod-to-pod encryption in Kubernetes?",
    question_id:69,
    options: [
      "a) Use a service mesh like Istio.",
      "b) Enable NodePort services.",
      "c) Set `hostNetwork: true`.",
      "d) Use a LoadBalancer service.",
    ],
    answer: "a) Use a service mesh like Istio.",
    explanation: "Service meshes like Istio provide secure communication channels, enabling pod-to-pod encryption."
  },
  {
    question: "What is a primary use case for the `hostAliases` field in pod specifications?",
    question_id:70,
    options: [
      "a) To map custom hostnames to IP addresses for the pod.",
      "b) To route traffic to specific nodes.",
      "c) To enforce DNS policies in the pod.",
      "d) To enable pod-to-pod communication.",
    ],
    answer: "a) To map custom hostnames to IP addresses for the pod.",
    explanation: "The `hostAliases` field provides custom hostname-to-IP mappings that override DNS for the pod."
  },
  {
    question: "What is the primary purpose of a NodePort service in Kubernetes?",
    question_id:71,
    options: [
      "a) To expose a service on a static port of each cluster node.",
      "b) To route traffic between pods within the cluster.",
      "c) To assign an external IP address to a pod.",
      "d) To enable DNS resolution for services.",
    ],
    answer: "a) To expose a service on a static port of each cluster node.",
    explanation: "A NodePort service makes the service accessible on a fixed port across all cluster nodes."
  },
  {
    question: "Which command displays the IP range used for pod networking in a Kubernetes cluster?",
    question_id:72,
    options: [
      "a) `kubectl cluster-info`",
      "b) `kubectl get nodes -o wide`",
      "c) `kubectl get pods --all-namespaces`",
      "d) `kubectl cluster-info dump`",
    ],
    answer: "d) `kubectl cluster-info dump`",
    explanation: "`kubectl cluster-info dump` provides detailed information, including network configurations like pod IP ranges."
  },
  {
    question: "How can you restrict egress traffic for pods in Kubernetes?",
    question_id:73,
    options: [
      "a) Use a NetworkPolicy.",
      "b) Configure a LoadBalancer service.",
      "c) Set `externalTrafficPolicy: Local`.",
      "d) Use an Ingress resource.",
    ],
    answer: "a) Use a NetworkPolicy.",
    explanation: "NetworkPolicies can be defined to control egress traffic from pods, enhancing security."
  },
  {
    question: "What does the `externalTrafficPolicy: Local` setting do for a LoadBalancer service?",
    question_id:74,
    options: [
      "a) It routes traffic only to pods on the same node as the client.",
      "b) It enables pod-to-pod encryption.",
      "c) It exposes the service on a public IP.",
      "d) It restricts traffic to the node's host network.",
    ],
    answer: "a) It routes traffic only to pods on the same node as the client.",
    explanation: "`externalTrafficPolicy: Local` ensures traffic is routed only to pods running on the same node where the traffic enters."
  },
  {
    question: "Which type of DNS record is created for a ClusterIP service by default?",
    question_id:75,
    options: [
      "a) A",
      "b) CNAME",
      "c) MX",
      "d) SRV",
    ],
    answer: "a) A",
    explanation: "Kubernetes creates an A record for ClusterIP services, pointing the service name to its cluster IP."
  },
  {
    question: "What does a CNI plugin provide in a Kubernetes cluster?",
    question_id:76,
    options: [
      "a) Pod networking capabilities.",
      "b) Ingress rules for HTTP traffic.",
      "c) Node resource management.",
      "d) Persistent volume storage.",
    ],
    answer: "a) Pod networking capabilities.",
    explanation: "A CNI plugin implements networking for pods, enabling IP allocation and routing within the cluster."
  },
  {
    question: "How can you resolve the DNS name of a headless service?",
    question_id:77,
    options: [
      "a) It resolves to the pod IPs directly.",
      "b) It resolves to the ClusterIP of the service.",
      "c) It requires an ExternalName record.",
      "d) It cannot be resolved using DNS.",
    ],
    answer: "a) It resolves to the pod IPs directly.",
    explanation: "Headless services omit the ClusterIP, allowing DNS resolution to return the pod IPs directly."
  },
  {
    question: "What is the default port used by kube-proxy for managing service traffic?",
    question_id:78,
    options: [
      "a) 10249",
      "b) 6443",
      "c) 2379",
      "d) 10250",
    ],
    answer: "a) 10249",
    explanation: "Kube-proxy listens on port 10249 for managing service traffic in the Kubernetes network."
  },
  {
    question: "Which Kubernetes resource is essential for enabling external HTTP traffic to a service?",
    question_id:79,
    options: [
      "a) Ingress",
      "b) ClusterIP service",
      "c) ConfigMap",
      "d) PersistentVolume",
    ],
    answer: "a) Ingress",
    explanation: "An Ingress resource defines rules for routing external HTTP and HTTPS traffic to Kubernetes services."
  },
  {
    question: "What is the default DNS policy for pods in Kubernetes?",
    question_id:80,
    options: [
      "a) ClusterFirst",
      "b) Default",
      "c) None",
      "d) Host",
    ],
    answer: "a) ClusterFirst",
    explanation: "The default DNS policy for pods is `ClusterFirst`, which resolves DNS queries within the cluster first."
  },
  {
    question: "What does the `kube-dns` component do in a Kubernetes cluster?",
    question_id:81,
    options: [
      "a) Provides DNS resolution for services and pods.",
      "b) Routes network traffic between pods.",
      "c) Manages IP allocation for pods.",
      "d) Enforces NetworkPolicies.",
    ],
    answer: "a) Provides DNS resolution for services and pods.",
    explanation: "`kube-dns` (or CoreDNS) is responsible for DNS resolution within a Kubernetes cluster."
  },
  {
    question: "Which type of service is best suited for exposing a database within the cluster?",
    question_id:82,
    options: [
      "a) ClusterIP",
      "b) NodePort",
      "c) LoadBalancer",
      "d) ExternalName",
    ],
    answer: "a) ClusterIP",
    explanation: "A ClusterIP service is ideal for exposing a database within the cluster, as it provides internal routing without external access."
  },
  {
    question: "How can you debug network connectivity issues for a pod in Kubernetes?",
    question_id:83,
    options: [
      "a) Use `kubectl exec` to check connectivity.",
      "b) Restart the kube-apiserver.",
      "c) Scale the deployment down and up.",
      "d) Create a new ClusterIP service.",
    ],
    answer: "a) Use `kubectl exec` to check connectivity.",
    explanation: "The `kubectl exec` command can be used to access a pod and test network connectivity directly."
  },
  {
    question: "What happens when a ServiceSelector does not match any pods?",
    question_id:84,
    options: [
      "a) Traffic is dropped.",
      "b) Traffic is routed to the default namespace.",
      "c) Traffic is routed to an external IP.",
      "d) Traffic is forwarded to all nodes.",
    ],
    answer: "a) Traffic is dropped.",
    explanation: "If a ServiceSelector does not match any pods, traffic directed to the service will be dropped."
  }
];
