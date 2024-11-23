export const questions: Array<{
  question: string;
  question_id: number;
  options: { a: string; b: string; c: string; d: string };
  answer: string;
  explanation: string;
}> = [
  // 1 à 30
  {
    question: "What is the primary purpose of a Kubernetes Service?",
    question_id: 0,
    options: {
      a: "To manage Pods in the cluster",
      b: "To provide persistent storage to Pods",
      c: "To define access policies for applications running on Kubernetes",
      d: "To expose Pods and manage traffic routing to them",
    },
    answer: "d",
    explanation:
      "A Kubernetes Service provides an abstraction layer to expose and manage traffic to a set of Pods, ensuring stable networking and load balancing.",
  },
  {
    question: "What is the primary purpose of a Kubernetes Service?",
    question_id: 1,
    options: {
      a: "To manage Pods in the cluster",
      b: "To provide persistent storage to Pods",
      c: "To define access policies for applications running on Kubernetes",
      d: "To expose Pods and manage traffic routing to them",
    },
    answer: "d",
    explanation:
      "A Kubernetes Service provides an abstraction layer to expose and manage traffic to a set of Pods, ensuring stable networking and load balancing.",
  },
  {
    question:
      "What type of Service would you use if you want to expose your application to the external world and automatically get a cloud load balancer?",
    question_id: 2,
    options: {
      a: "ClusterIP",
      b: "NodePort",
      c: "LoadBalancer",
      d: "ExternalName",
    },
    answer: "c",
    explanation:
      "The 'LoadBalancer' service type automatically provisions a cloud provider’s load balancer and exposes the service to external traffic.",
  },
  {
    question:
      "Which field in a Kubernetes Service definition determines the port to which the traffic is forwarded on the Pods?",
    question_id: 3,
    options: {
      a: "port",
      b: "targetPort",
      c: "nodePort",
      d: "selector",
    },
    answer: "b",
    explanation:
      "The 'targetPort' field in a Service definition specifies the port on the Pod that traffic should be forwarded to.",
  },
  {
    question:
      "What is the default type for a Kubernetes Service if no 'type' is specified?",
    question_id: 4,
    options: {
      a: "ClusterIP",
      b: "NodePort",
      c: "LoadBalancer",
      d: "ExternalName",
    },
    answer: "a",
    explanation:
      "By default, Kubernetes Services are of 'ClusterIP' type, which exposes the service on an internal IP within the cluster.",
  },
  {
    question:
      "Which Kubernetes Service type allows you to expose your service on a static port on every node in the cluster?",
    question_id: 5,
    options: {
      a: "ClusterIP",
      b: "NodePort",
      c: "LoadBalancer",
      d: "ExternalName",
    },
    answer: "b",
    explanation:
      "A 'NodePort' service exposes your service on a static port on every node, allowing external access to the service.",
  },
  {
    question:
      "Which field in a Kubernetes Service allows you to select the Pods that will receive traffic from the service?",
    question_id: 6,
    options: {
      a: "name",
      b: "selector",
      c: "port",
      d: "targetPort",
    },
    answer: "b",
    explanation:
      "The 'selector' field in a Service is used to select the Pods that match the labels, allowing traffic to be routed to the appropriate Pods.",
  },
  {
    question:
      "How does Kubernetes ensure that traffic is routed to Pods that are part of a Service?",
    question_id: 7,
    options: {
      a: "By using labels and selectors",
      b: "By using an external DNS",
      c: "By using an IP hash function",
      d: "By using an external load balancer",
    },
    answer: "a",
    explanation:
      "Kubernetes uses labels and selectors to match Pods with the Service, ensuring that traffic is routed correctly.",
  },
  {
    question:
      "Which Kubernetes resource should you use to expose services outside the cluster if your cloud provider supports it?",
    question_id: 8,
    options: {
      a: "Ingress",
      b: "NodePort",
      c: "LoadBalancer",
      d: "ExternalName",
    },
    answer: "c",
    explanation:
      "The 'LoadBalancer' service type automatically provisions a cloud provider's load balancer to expose the service outside the cluster.",
  },
  {
    question: "What is the function of an Ingress controller in Kubernetes?",
    question_id: 9,
    options: {
      a: "To provide routing for traffic to services inside the cluster",
      b: "To expose services to external traffic through DNS",
      c: "To manage persistent storage for services",
      d: "To monitor and log service traffic",
    },
    answer: "a",
    explanation:
      "Ingress controllers are used to manage external access to the services in a cluster, providing HTTP/S routing rules and ingress configurations.",
  },
  {
    question:
      "Which type of Kubernetes Service would you use to expose an external DNS name to a Kubernetes service?",
    question_id: 10,
    options: {
      a: "NodePort",
      b: "LoadBalancer",
      c: "ExternalName",
      d: "ClusterIP",
    },
    answer: "c",
    explanation:
      "'ExternalName' service type maps a service to an external DNS name, making external services accessible within Kubernetes.",
  },
  {
    question:
      "Which of the following is the default port type used by Kubernetes Services to route traffic to Pods?",
    question_id: 11,
    options: {
      a: "HTTP",
      b: "TCP",
      c: "UDP",
      d: "SCTP",
    },
    answer: "b",
    explanation:
      "Kubernetes Services default to TCP as the protocol for routing traffic to Pods, though other protocols can be used if specified.",
  },
  {
    question:
      "What is the purpose of the 'sessionAffinity' field in a Kubernetes Service?",
    question_id: 12,
    options: {
      a: "To ensure that requests from a particular client are always routed to the same Pod",
      b: "To define which Pods can communicate with each other",
      c: "To limit the number of concurrent sessions allowed",
      d: "To configure external load balancing for the service",
    },
    answer: "a",
    explanation:
      "'sessionAffinity' ensures that requests from the same client (identified by its IP) are routed to the same Pod for the duration of the session.",
  },
  {
    question:
      "Which service type should be used to expose a service outside the Kubernetes cluster without requiring a cloud provider?",
    question_id: 13,
    options: {
      a: "NodePort",
      b: "LoadBalancer",
      c: "ClusterIP",
      d: "ExternalName",
    },
    answer: "a",
    explanation:
      "The 'NodePort' service type exposes a service on a static port on every node, allowing external access without requiring a cloud provider.",
  },
  {
    question:
      "What does the 'targetPort' field in a Kubernetes Service specification define?",
    question_id: 14,
    options: {
      a: "The port on which the service listens for incoming traffic",
      b: "The port that the external client uses to access the service",
      c: "The port on the Pods where traffic will be sent",
      d: "The IP address of the Pod",
    },
    answer: "c",
    explanation:
      "The 'targetPort' defines the port on the Pods that will receive the traffic sent to the service.",
  },
  {
    question:
      "Which of the following service types allows you to expose a service to external clients and automatically provision a cloud load balancer?",
    question_id: 15,
    options: {
      a: "NodePort",
      b: "LoadBalancer",
      c: "ClusterIP",
      d: "ExternalName",
    },
    answer: "b",
    explanation:
      "The 'LoadBalancer' service type automatically provisions a cloud load balancer to route traffic to the service's Pods from external clients.",
  },
  {
    question:
      "What happens if you create a Service with a 'type' of 'ClusterIP' and do not specify any endpoints?",
    question_id: 16,
    options: {
      a: "The service will not be created",
      b: "The service will be created, but no traffic will be routed",
      c: "The service will default to 'NodePort'",
      d: "The service will automatically create default endpoints",
    },
    answer: "b",
    explanation:
      "A 'ClusterIP' service can be created even if no endpoints are specified, but traffic will not be routed until there are endpoints available.",
  },
  {
    question:
      "Which of the following statements is true regarding Kubernetes Services?",
    question_id: 17,
    options: {
      a: "Services in Kubernetes are permanent and cannot be deleted",
      b: "A Service can automatically scale based on the load",
      c: "A Service allows stable networking for dynamic Pods",
      d: "Services only allow HTTP traffic",
    },
    answer: "c",
    explanation:
      "A Service provides stable networking and abstraction for accessing dynamic Pods, even as Pods are added or removed.",
  },
  {
    question:
      "What type of Kubernetes service should be used if you need to map a service name to an external DNS name?",
    question_id: 18,
    options: {
      a: "ClusterIP",
      b: "NodePort",
      c: "LoadBalancer",
      d: "ExternalName",
    },
    answer: "d",
    explanation:
      "'ExternalName' services are used to map a Kubernetes service to an external DNS name, allowing Kubernetes resources to access services outside the cluster.",
  },
  {
    question:
      "Which component of Kubernetes is responsible for ensuring that a Service's network traffic is properly routed to the appropriate Pods?",
    question_id: 19,
    options: {
      a: "kube-apiserver",
      b: "kube-proxy",
      c: "kube-controller-manager",
      d: "kube-scheduler",
    },
    answer: "b",
    explanation:
      "kube-proxy is responsible for routing traffic from Services to the appropriate Pods, managing load balancing within the cluster.",
  },
  {
    question:
      "Which of the following is true about Kubernetes 'EndpointSlices'?",
    question_id: 20,
    options: {
      a: "They are used for managing services with multiple external IP addresses",
      b: "They replace traditional Endpoints with a more scalable solution",
      c: "They are used to expose services to external clients",
      d: "They are used to define the IP addresses of services in the cluster",
    },
    answer: "b",
    explanation:
      "EndpointSlices are designed to improve scalability and performance for managing a large number of endpoints in Kubernetes.",
  },
  {
    question:
      "Which field in the Service specification allows traffic to be routed to different ports based on the type of traffic?",
    question_id: 21,
    options: {
      a: "targetPort",
      b: "port",
      c: "protocol",
      d: "selector",
    },
    answer: "c",
    explanation:
      "The 'protocol' field defines whether the traffic should be routed using TCP, UDP, or SCTP, allowing for different types of traffic routing.",
  },
  {
    question:
      "How can you expose a service to external clients on a static port across all nodes in the cluster?",
    question_id: 22,
    options: {
      a: "By using a ClusterIP service",
      b: "By using a LoadBalancer service",
      c: "By using a NodePort service",
      d: "By using an ExternalName service",
    },
    answer: "c",
    explanation:
      "A 'NodePort' service exposes a service on a static port on every node in the cluster, allowing external access.",
  },
  {
    question:
      "What does Kubernetes use to resolve the name of a service within a cluster?",
    question_id: 23,
    options: {
      a: "DNS resolution via CoreDNS",
      b: "The service's IP address",
      c: "An external DNS server",
      d: "The kube-scheduler",
    },
    answer: "a",
    explanation:
      "CoreDNS is used by Kubernetes to resolve service names to their corresponding IP addresses within the cluster.",
  },
  {
    question:
      "How can a Kubernetes Service ensure that traffic is routed to the nearest available Pods based on the client's location?",
    question_id: 24,
    options: {
      a: "By using the 'affinity' field",
      b: "By using the 'sessionAffinity' field",
      c: "By using the 'externalTrafficPolicy' field",
      d: "By using an Ingress controller",
    },
    answer: "b",
    explanation:
      "'sessionAffinity' can be used to ensure that a client’s requests are routed to the same Pod, improving session management, but Kubernetes doesn't natively route traffic based on client location.",
  },
  {
    question:
      "What is the default behavior of Kubernetes Services when there are no Pods matching the Service's selector?",
    question_id: 25,
    options: {
      a: "The Service will route traffic to all Pods in the cluster",
      b: "The Service will be deleted automatically",
      c: "The Service will not route any traffic",
      d: "The Service will route traffic to the first available Pod",
    },
    answer: "c",
    explanation:
      "If no Pods match the selector, the Service will not route any traffic, but the Service resource itself remains available.",
  },
  {
    question:
      "Which Kubernetes resource is responsible for providing network load balancing for Services?",
    question_id: 26,
    options: {
      a: "kube-proxy",
      b: "Ingress controller",
      c: "NetworkPolicy",
      d: "LoadBalancer",
    },
    answer: "a",
    explanation:
      "kube-proxy is responsible for managing the network routing and load balancing of traffic for Services in the Kubernetes cluster.",
  },
  {
    question:
      "What is the main advantage of using Kubernetes Ingress over a NodePort service?",
    question_id: 27,
    options: {
      a: "Ingress provides external load balancing",
      b: "Ingress allows for routing based on host or path",
      c: "Ingress is more secure than NodePort",
      d: "Ingress provides DNS management",
    },
    answer: "b",
    explanation:
      "Ingress allows for routing traffic based on the hostname or URL path, providing more advanced routing capabilities than a simple NodePort service.",
  },
  {
    question:
      "Which of the following service types can be used to expose a service through a cloud provider's load balancer?",
    question_id: 28,
    options: {
      a: "LoadBalancer",
      b: "NodePort",
      c: "ClusterIP",
      d: "ExternalName",
    },
    answer: "a",
    explanation:
      "The 'LoadBalancer' service type provisions a cloud load balancer to expose the service to external traffic.",
  },
  {
    question:
      "Which command would you use to expose a service with a 'LoadBalancer' type?",
    question_id: 29,
    options: {
      a: "kubectl expose service myservice --type=LoadBalancer",
      b: "kubectl expose deployment mydeployment --type=NodePort",
      c: "kubectl expose pod mypod --type=LoadBalancer",
      d: "kubectl expose service myservice --type=ClusterIP",
    },
    answer: "a",
    explanation:
      "The correct command to expose a service with 'LoadBalancer' type is 'kubectl expose service myservice --type=LoadBalancer'.",
  },
];
