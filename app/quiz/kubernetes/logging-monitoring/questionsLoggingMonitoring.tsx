export const questions = [
  {
    question: "Which of the following is the primary tool used by Kubernetes for gathering logs from pods?",
    question_id: 0,
    options: [
      "a) Fluentd",
      "b) kubectl logs",
      "c) Prometheus",
      "d) ElasticSearch",
    ],
    answer: "b) kubectl logs",
    explanation: "The `kubectl logs` command is used to gather logs from containers in a pod. It allows users to view stdout and stderr output."
  },
  {
    question: "Which Kubernetes resource is commonly used to aggregate logs from multiple pods into a centralized system?",
    question_id: 1,
    options: [
      "a) StatefulSet",
      "b) DaemonSet",
      "c) ReplicaSet",
      "d) Job",
    ],
    answer: "b) DaemonSet",
    explanation: "DaemonSets are typically used to run a logging agent, like Fluentd or Filebeat, on each node in a cluster to aggregate logs from all pods."
  },
  {
    question: "Which tool is commonly used in Kubernetes for monitoring metrics and alerting?",
    question_id: 2,
    options: [
      "a) Prometheus",
      "b) Grafana",
      "c) Kibana",
      "d) Fluentd",
    ],
    answer: "a) Prometheus",
    explanation: "Prometheus is a popular open-source monitoring and alerting toolkit designed for reliability and scalability. It integrates seamlessly with Kubernetes to collect metrics."
  },
  {
    question: "What does the 'kubectl logs' command show by default when you run it on a pod?",
    question_id: 3,
    options: [
      "a) Only the most recent log lines",
      "b) Logs from all containers in the pod",
      "c) Logs from the first container only",
      "d) Logs from previous pod instances",
    ],
    answer: "b) Logs from all containers in the pod",
    explanation: "By default, the `kubectl logs` command will show the logs for all containers in a pod."
  },
  {
    question: "What is the primary function of the Fluentd logging agent in a Kubernetes cluster?",
    question_id: 4,
    options: [
      "a) Collecting logs from containers and forwarding them to a centralized location.",
      "b) Analyzing logs in real time to detect anomalies.",
      "c) Serving logs through a web interface.",
      "d) Aggregating logs from multiple clusters into a single database.",
    ],
    answer: "a) Collecting logs from containers and forwarding them to a centralized location.",
    explanation: "Fluentd is often used in Kubernetes clusters to collect logs from containers and nodes, and forward them to a centralized logging system like Elasticsearch or Splunk."
  },
  {
    question: "What is the main purpose of the 'kubectl describe pod' command?",
    question_id: 5,
    options: [
      "a) To show detailed information about a pod's configuration and current state.",
      "b) To display logs from the pod's containers.",
      "c) To get the list of services associated with the pod.",
      "d) To update the pod's configuration.",
    ],
    answer: "a) To show detailed information about a pod's configuration and current state.",
    explanation: "'kubectl describe pod' provides detailed information about a pod, including its containers, resource usage, events, and more."
  },
  {
    question: "Which of the following is a common tool used for visualizing Kubernetes metrics?",
    question_id: 6,
    options: [
      "a) Prometheus",
      "b) Kibana",
      "c) Grafana",
      "d) Fluentd",
    ],
    answer: "c) Grafana",
    explanation: "Grafana is widely used to visualize and analyze time-series data, and it integrates well with Prometheus to display Kubernetes metrics."
  },
  {
    question: "Which of the following is a Kubernetes-native solution for monitoring cluster health and resource usage?",
    question_id: 7,
    options: [
      "a) Kubernetes Dashboard",
      "b) Prometheus Operator",
      "c) Kibana",
      "d) Grafana",
    ],
    answer: "b) Prometheus Operator",
    explanation: "The Prometheus Operator is a Kubernetes-native solution that automates the deployment, scaling, and management of Prometheus instances for monitoring Kubernetes clusters."
  },
  {
    question: "Which Kubernetes component is primarily responsible for managing and collecting metrics from cluster nodes and pods?",
    question_id: 8,
    options: [
      "a) Kubelet",
      "b) Kubernetes Dashboard",
      "c) Prometheus",
      "d) Metrics Server",
    ],
    answer: "d) Metrics Server",
    explanation: "The Metrics Server is a lightweight, short-term storage solution for resource usage metrics in Kubernetes, used for gathering metrics from nodes and pods."
  },
  {
    question: "What is the purpose of the 'kubectl top' command in Kubernetes?",
    question_id: 9,
    options: [
      "a) To show resource usage of nodes and pods.",
      "b) To display logs from a pod.",
      "c) To display the current state of all services in the cluster.",
      "d) To restart a pod.",
    ],
    answer: "a) To show resource usage of nodes and pods.",
    explanation: "The 'kubectl top' command is used to display the resource usage (CPU, memory) of nodes and pods in the Kubernetes cluster."
  },
  {
    question: "Which of the following is NOT a valid method to expose logs in Kubernetes?",
    question_id: 10,
    options: [
      "a) Using a sidecar container",
      "b) Using a DaemonSet",
      "c) Using a Job",
      "d) Using a Service",
    ],
    answer: "c) Using a Job",
    explanation: "Jobs are typically used for running batch tasks and do not directly manage log aggregation. Logs are usually exposed via sidecar containers or DaemonSets."
  },
  {
    question: "How can you access logs from a previous container instance in Kubernetes?",
    question_id: 11,
    options: [
      "a) kubectl logs --previous",
      "b) kubectl logs --last",
      "c) kubectl logs --old",
      "d) kubectl logs --prev",
    ],
    answer: "a) kubectl logs --previous",
    explanation: "The `kubectl logs --previous` command retrieves logs from the previous instance of a container, typically after a pod has been restarted."
  },
  {
    question: "What is the function of the 'kubectl logs -f' command?",
    question_id: 12,
    options: [
      "a) To follow the logs output of a pod in real-time.",
      "b) To filter logs by severity.",
      "c) To view logs from all containers in a pod.",
      "d) To find logs from previous pod versions.",
    ],
    answer: "a) To follow the logs output of a pod in real-time.",
    explanation: "The `-f` option in `kubectl logs` allows users to stream logs in real-time, following new log entries as they are written."
  },
  {
    question: "Which Kubernetes component is responsible for the collection of metrics and resource usage?",
    question_id: 13,
    options: [
      "a) Kube-apiserver",
      "b) Metrics Server",
      "c) Kubelet",
      "d) Prometheus",
    ],
    answer: "b) Metrics Server",
    explanation: "The Metrics Server collects resource usage metrics from the nodes and pods and exposes them to the Kubernetes API for access by `kubectl top` and other tools."
  },
  {
    question: "Which of the following tools is used to manage and view logs in a centralized logging system in Kubernetes?",
    question_id: 14,
    options: [
      "a) Fluentd",
      "b) Prometheus",
      "c) Kubelet",
      "d) Istio",
    ],
    answer: "a) Fluentd",
    explanation: "Fluentd is a widely used log collector and aggregator in Kubernetes, often used to forward logs from various sources to a centralized logging system such as Elasticsearch."
  },
  {
    question: "Which tool integrates with Kubernetes to provide a dashboard for monitoring metrics?",
    question_id: 15,
    options: [
      "a) Fluentd",
      "b) Grafana",
      "c) Kibana",
      "d) Nagios",
    ],
    answer: "b) Grafana",
    explanation: "Grafana is a popular open-source dashboarding tool that integrates with monitoring systems like Prometheus to display Kubernetes metrics visually."
  },
  {
    question: "What type of log data does Fluentd typically handle in Kubernetes?",
    question_id: 16,
    options: [
      "a) Application logs",
      "b) System logs",
      "c) Audit logs",
      "d) All of the above",
    ],
    answer: "d) All of the above",
    explanation: "Fluentd can handle a wide range of log data including application, system, and audit logs, forwarding them to centralized systems like Elasticsearch or other log aggregators."
  },
  {
    question: "How does Prometheus collect metrics in Kubernetes?",
    question_id: 17,
    options: [
      "a) By querying Kubernetes API Server directly.",
      "b) Through scraping endpoints exposed by nodes and pods.",
      "c) By analyzing logs from containers.",
      "d) Using syslog for node-level metrics.",
    ],
    answer: "b) Through scraping endpoints exposed by nodes and pods.",
    explanation: "Prometheus collects metrics by scraping HTTP endpoints exposed by nodes, pods, and other components in Kubernetes that expose metrics in the Prometheus format."
  },
  {
    question: "Which of the following is a recommended practice for securing log data in Kubernetes?",
    question_id: 18,
    options: [
      "a) Encrypting log data at rest and in transit.",
      "b) Allowing all users to access logs freely.",
      "c) Storing logs in plain text on nodes.",
      "d) Disabling logging to reduce overhead.",
    ],
    answer: "a) Encrypting log data at rest and in transit.",
    explanation: "It is recommended to encrypt log data both at rest and in transit to ensure security and compliance, preventing unauthorized access to sensitive information."
  },
  {
    question: "Which Kubernetes tool can be used to check the health of a cluster's nodes and pods?",
    question_id: 19,
    options: [
      "a) kubectl health",
      "b) kubectl get nodes",
      "c) kubectl get pods",
      "d) kubectl describe cluster",
    ],
    answer: "b) kubectl get nodes",
    explanation: "The `kubectl get nodes` command shows the health and status of the nodes in a Kubernetes cluster, and can be used to troubleshoot node-related issues."
  },
  {
    question: "What is the purpose of the 'kubectl logs' command?",
    question_id: 20,
    options: [
      "a) To view real-time logs from a pod.",
      "b) To display all metrics for a specific pod.",
      "c) To view the configuration of a pod.",
      "d) To get logs of a pod's previous containers.",
    ],
    answer: "a) To view real-time logs from a pod.",
    explanation: "'kubectl logs' is used to view the logs of containers in a pod in real-time, allowing administrators to diagnose issues with running applications."
  },
  {
    question: "Which Kubernetes object can be used to monitor the health of a pod's containers?",
    question_id: 21,
    options: [
      "a) PodDisruptionBudget",
      "b) Liveness Probe",
      "c) ReplicaSet",
      "d) StatefulSet",
    ],
    answer: "b) Liveness Probe",
    explanation: "A Liveness Probe is a health check used to determine if a container is still running. It is often used to ensure that the container is healthy and should remain running."
  },
  {
    question: "Which of the following is a log aggregation solution that integrates with Kubernetes?",
    question_id: 22,
    options: [
      "a) Elasticsearch",
      "b) Prometheus",
      "c) Grafana",
      "d) Fluentd",
    ],
    answer: "d) Fluentd",
    explanation: "Fluentd is commonly used in Kubernetes environments to collect, aggregate, and forward logs from multiple pods and containers to a central logging system like Elasticsearch."
  },
  {
    question: "Which tool would you use to alert on specific events or metrics in Kubernetes?",
    question_id: 23,
    options: [
      "a) Kibana",
      "b) Prometheus Alertmanager",
      "c) Grafana",
      "d) Fluentd",
    ],
    answer: "b) Prometheus Alertmanager",
    explanation: "Prometheus Alertmanager is used to manage alerts generated by Prometheus metrics. It sends notifications when defined thresholds are exceeded, helping to monitor the health of a Kubernetes cluster."
  },
  {
    question: "Which of the following is a logging solution that provides a web interface for visualizing logs in Kubernetes?",
    question_id: 24,
    options: [
      "a) Grafana",
      "b) Kibana",
      "c) Prometheus",
      "d) Fluentd",
    ],
    answer: "b) Kibana",
    explanation: "Kibana is a visualization tool often used in combination with Elasticsearch to visualize logs and data. It provides a web interface for searching and viewing log data."
  },
  {
    question: "What does a pod's 'audit log' typically contain?",
    question_id: 25,
    options: [
      "a) Logs about the pod's performance metrics.",
      "b) Logs detailing the actions taken by users or services within the cluster.",
      "c) Logs about resource usage like CPU and memory.",
      "d) Logs about network traffic to and from the pod.",
    ],
    answer: "b) Logs detailing the actions taken by users or services within the cluster.",
    explanation: "Audit logs record detailed actions performed on the Kubernetes API server, such as user actions, resource modifications, and access requests."
  },
  {
    question: "What is a common practice for managing logs in a Kubernetes environment with many pods and nodes?",
    question_id: 26,
    options: [
      "a) Writing logs to a local file on each node.",
      "b) Forwarding logs to a centralized logging system.",
      "c) Storing logs in a database for future analysis.",
      "d) Displaying logs on the Kubernetes Dashboard.",
    ],
    answer: "b) Forwarding logs to a centralized logging system.",
    explanation: "Centralized logging systems aggregate logs from all nodes and pods in the Kubernetes cluster, making it easier to monitor and troubleshoot issues from a single location."
  },
  {
    question: "Which of the following can be used to query and analyze logs stored in a centralized logging system?",
    question_id: 27,
    options: [
      "a) Prometheus",
      "b) Kibana",
      "c) Fluentd",
      "d) Grafana",
    ],
    answer: "b) Kibana",
    explanation: "Kibana is commonly used with Elasticsearch for searching, visualizing, and analyzing log data. It provides a powerful query interface for log analysis."
  },
  {
    question: "How can you view the logs of all containers in a pod with kubectl?",
    question_id: 28,
    options: [
      "a) kubectl logs --all-containers=true pod-name",
      "b) kubectl logs --containers=all pod-name",
      "c) kubectl logs pod-name",
      "d) kubectl logs pod-name --all",
    ],
    answer: "a) kubectl logs --all-containers=true pod-name",
    explanation: "The `--all-containers=true` option tells kubectl to show logs from all containers in the specified pod."
  },
  {
    question: "What is the role of Prometheus in Kubernetes logging and monitoring?",
    question_id: 29,
    options: [
      "a) To collect and store logs from Kubernetes nodes and pods.",
      "b) To monitor and collect metrics from nodes and pods.",
      "c) To display logs from Kubernetes clusters.",
      "d) To forward logs to a centralized logging system.",
    ],
    answer: "b) To monitor and collect metrics from nodes and pods.",
    explanation: "Prometheus is a monitoring system and time-series database that collects and stores metrics from Kubernetes components like nodes and pods, enabling performance monitoring."
  },
  {
    question: "What does the 'kubectl top' command display in a Kubernetes cluster?",
    question_id: 30,
    options: [
      "a) The current status of all pods in the cluster.",
      "b) Resource usage metrics like CPU and memory of nodes and pods.",
      "c) Logs of all containers in the cluster.",
      "d) Detailed audit logs of the Kubernetes API server.",
    ],
    answer: "b) Resource usage metrics like CPU and memory of nodes and pods.",
    explanation: "The `kubectl top` command displays resource usage metrics such as CPU and memory for nodes and pods, making it a useful tool for monitoring system performance."
  },
  {
    question: "Which Kubernetes feature helps to detect and handle container crashes by restarting containers?",
    question_id: 31,
    options: [
      "a) ReplicaSet",
      "b) Liveness Probe",
      "c) StatefulSet",
      "d) PodDisruptionBudget",
    ],
    answer: "b) Liveness Probe",
    explanation: "A Liveness Probe is used to determine if a container is running. If it fails, Kubernetes will automatically restart the container to restore it to a healthy state."
  },
  {
    question: "What is the primary purpose of the Prometheus 'scrape' operation?",
    question_id: 32,
    options: [
      "a) To collect logs from a pod's container.",
      "b) To collect and store metrics from Kubernetes resources.",
      "c) To monitor network traffic in the cluster.",
      "d) To query the state of Kubernetes objects.",
    ],
    answer: "b) To collect and store metrics from Kubernetes resources.",
    explanation: "Prometheus uses a 'scrape' operation to periodically collect metrics from endpoints exposed by Kubernetes resources (such as nodes, pods, and services)."
  },
  {
    question: "What type of monitoring system does Prometheus use to collect time-series data?",
    question_id: 33,
    options: [
      "a) Polling",
      "b) Push",
      "c) Event-based",
      "d) Streaming",
    ],
    answer: "a) Polling",
    explanation: "Prometheus collects time-series data through polling, scraping metrics from specified endpoints at regular intervals."
  },
  {
    question: "Which of the following is the primary function of Fluentd in Kubernetes?",
    question_id: 34,
    options: [
      "a) Aggregating metrics from nodes and pods.",
      "b) Collecting, filtering, and forwarding logs to a central repository.",
      "c) Generating real-time alerts based on metrics.",
      "d) Storing logs in a distributed file system.",
    ],
    answer: "b) Collecting, filtering, and forwarding logs to a central repository.",
    explanation: "Fluentd is a popular open-source data collector used to collect logs from Kubernetes clusters, filter them, and forward them to centralized logging systems like Elasticsearch or Kafka."
  },
  {
    question: "Which Kubernetes object is used to ensure that a specified number of pod replicas are running at all times?",
    question_id: 35,
    options: [
      "a) Deployment",
      "b) StatefulSet",
      "c) ReplicaSet",
      "d) DaemonSet",
    ],
    answer: "c) ReplicaSet",
    explanation: "A ReplicaSet is responsible for maintaining a stable set of replica pods, ensuring that a specified number of replicas are running at any given time."
  },
  {
    question: "What is the purpose of an 'alert' in Kubernetes monitoring systems like Prometheus?",
    question_id: 36,
    options: [
      "a) To query data from pods in the cluster.",
      "b) To notify when a metric exceeds a predefined threshold.",
      "c) To display logs in a web interface.",
      "d) To create visual dashboards for monitoring resources.",
    ],
    answer: "b) To notify when a metric exceeds a predefined threshold.",
    explanation: "An alert is generated in response to specific conditions or thresholds being met in the monitored metrics, and can trigger notifications to the appropriate users."
  },
  {
    question: "How does a DaemonSet contribute to log management in Kubernetes?",
    question_id: 37,
    options: [
      "a) It collects and forwards logs from each node in the cluster.",
      "b) It stores logs in a distributed database.",
      "c) It collects logs only from containerized applications.",
      "d) It runs a set of containers to manage logs in a single pod.",
    ],
    answer: "a) It collects and forwards logs from each node in the cluster.",
    explanation: "A DaemonSet ensures that a specific pod runs on all or selected nodes in the cluster, which can be used for logging and monitoring tasks like collecting logs from each node."
  },
  {
    question: "Which of the following tools can be used to visualize and query Prometheus metrics in Kubernetes?",
    question_id: 38,
    options: [
      "a) Kibana",
      "b) Grafana",
      "c) Fluentd",
      "d) Elasticsearch",
    ],
    answer: "b) Grafana",
    explanation: "Grafana is a popular open-source tool for visualizing time-series data, often used in combination with Prometheus to display Kubernetes metrics in interactive dashboards."
  },
  {
    question: "What Kubernetes object would you use to run a monitoring agent on each node in the cluster?",
    question_id: 39,
    options: [
      "a) DaemonSet",
      "b) StatefulSet",
      "c) ReplicaSet",
      "d) Deployment",
    ],
    answer: "a) DaemonSet",
    explanation: "A DaemonSet ensures that a copy of a pod runs on every node in the cluster, which is useful for running monitoring agents or log collectors on all nodes."
  },
  {
    question: "How can you enable Kubernetes to forward logs from all containers in the cluster to a centralized location?",
    question_id: 40,
    options: [
      "a) By using Fluentd with a DaemonSet.",
      "b) By enabling log forwarding on each node individually.",
      "c) By configuring kubectl logs to forward logs.",
      "d) By creating a custom script for log forwarding.",
    ],
    answer: "a) By using Fluentd with a DaemonSet.",
    explanation: "Fluentd is often used with a DaemonSet in Kubernetes to collect logs from all containers in the cluster and forward them to a centralized logging system such as Elasticsearch."
  },
  {
    question: "What is the function of the 'kubectl logs -f' command in Kubernetes?",
    question_id: 41,
    options: [
      "a) To tail the logs of a pod's container in real-time.",
      "b) To delete logs from a pod's container.",
      "c) To export logs from all containers in a pod.",
      "d) To search logs based on a given query.",
    ],
    answer: "a) To tail the logs of a pod's container in real-time.",
    explanation: "The `-f` flag with `kubectl logs` allows you to follow or tail the logs of a specific container in a pod in real-time, making it useful for monitoring."
  },
  {
    question: "What is the main benefit of using a centralized logging system like Elasticsearch in Kubernetes?",
    question_id: 42,
    options: [
      "a) To monitor the cluster's resource usage in real-time.",
      "b) To store and search logs from all pods and nodes in a central location.",
      "c) To visualize pod logs using dashboards.",
      "d) To ensure high availability of logs in case of node failure.",
    ],
    answer: "b) To store and search logs from all pods and nodes in a central location.",
    explanation: "Centralized logging systems like Elasticsearch store logs from all pods and nodes, allowing for easy search and analysis, which helps in troubleshooting and monitoring."
  },
  {
    question: "Which Kubernetes feature allows you to automatically trigger an action if a pod's resource usage exceeds a certain threshold?",
    question_id: 43,
    options: [
      "a) Resource Requests and Limits",
      "b) Horizontal Pod Autoscaler",
      "c) Liveness Probe",
      "d) Vertical Pod Autoscaler",
    ],
    answer: "b) Horizontal Pod Autoscaler",
    explanation: "The Horizontal Pod Autoscaler automatically adjusts the number of pods in a deployment or replica set based on observed CPU or memory usage, helping to maintain performance."
  },
  {
    question: "Which tool is commonly used for visualizing the performance metrics of Kubernetes clusters and nodes?",
    question_id: 44,
    options: [
      "a) Grafana",
      "b) Kibana",
      "c) Prometheus",
      "d) Fluentd",
    ],
    answer: "a) Grafana",
    explanation: "Grafana is an open-source tool used for visualizing time-series data. It is often used in combination with Prometheus to display metrics from Kubernetes clusters."
  },
  {
    question: "What type of logs does Kubernetes write by default when a pod is deleted?",
    question_id: 45,
    options: [
      "a) Resource usage logs",
      "b) Termination logs",
      "c) Crash logs",
      "d) Audit logs",
    ],
    answer: "b) Termination logs",
    explanation: "When a pod is deleted, Kubernetes writes termination logs that contain information about the reason for the pod's termination, useful for debugging and audit purposes."
  },
  {
    question: "Which of the following tools can be used to send alerts based on metrics in Kubernetes?",
    question_id: 46,
    options: [
      "a) Prometheus Alertmanager",
      "b) Fluentd",
      "c) Grafana",
      "d) Kibana",
    ],
    answer: "a) Prometheus Alertmanager",
    explanation: "Prometheus Alertmanager is used to handle alerts sent by Prometheus when a metric exceeds a specified threshold, allowing for automated notifications."
  },
  {
    question: "Which of the following best describes 'log aggregation' in Kubernetes?",
    question_id: 47,
    options: [
      "a) Combining logs from multiple sources into a single system for easier management and analysis.",
      "b) Collecting logs in a distributed manner across all nodes.",
      "c) Storing logs for historical purposes.",
      "d) Filtering logs to reduce the amount of data stored.",
    ],
    answer: "a) Combining logs from multiple sources into a single system for easier management and analysis.",
    explanation: "Log aggregation involves collecting logs from multiple sources, such as containers and nodes, and storing them in a centralized system where they can be searched and analyzed."
  },
  {
    question: "What does the 'kubectl logs --previous' command do?",
    question_id: 48,
    options: [
      "a) It shows logs from a previous pod run (if applicable).",
      "b) It shows logs from a different container in the pod.",
      "c) It shows logs from a previously terminated container in the pod.",
      "d) It retrieves all historical logs of a pod.",
    ],
    answer: "c) It shows logs from a previously terminated container in the pod.",
    explanation: "The `--previous` flag allows you to view logs from a container that has terminated, which can be useful for diagnosing crashes or failures."
  },
  {
    question: "Which of the following is a method to configure resource limits for containers in Kubernetes?",
    question_id: 49,
    options: [
      "a) In a ConfigMap",
      "b) Using the 'resources' field in a pod specification",
      "c) In a secret",
      "d) Using an environment variable",
    ],
    answer: "b) Using the 'resources' field in a pod specification",
    explanation: "You can set resource requests and limits for containers in Kubernetes using the `resources` field within the pod specification to control CPU and memory usage."
  },
  {
    question: "Which of the following is an advantage of using the Kubernetes Horizontal Pod Autoscaler (HPA)?",
    question_id: 50,
    options: [
      "a) It automatically balances the resource usage across all nodes in the cluster.",
      "b) It automatically increases the number of pods based on CPU or memory usage.",
      "c) It collects logs from all containers in the cluster.",
      "d) It reduces the number of nodes in the cluster.",
    ],
    answer: "b) It automatically increases the number of pods based on CPU or memory usage.",
    explanation: "The Horizontal Pod Autoscaler automatically scales the number of pods in a deployment or replica set based on CPU or memory usage metrics, ensuring application availability and responsiveness."
  },
  {
    question: "Which Kubernetes object is primarily used to define resource limits and requests for containers?",
    question_id: 51,
    options: [
      "a) PodSpec",
      "b) Deployment",
      "c) ReplicaSet",
      "d) ContainerSpec",
    ],
    answer: "a) PodSpec",
    explanation: "Resource requests and limits are defined within the `PodSpec` of a pod definition. This ensures that Kubernetes can allocate resources appropriately for each container."
  },
  {
    question: "Which of the following is an open-source tool used for logging and monitoring that is often deployed in Kubernetes clusters?",
    question_id: 52,
    options: [
      "a) Grafana",
      "b) Fluentd",
      "c) Prometheus",
      "d) All of the above",
    ],
    answer: "d) All of the above",
    explanation: "Grafana, Fluentd, and Prometheus are all popular open-source tools that are commonly used for monitoring, logging, and visualizing data within Kubernetes environments."
  },
  {
    question: "What is the default logging driver for Docker, which can be configured for use with Kubernetes containers?",
    question_id: 53,
    options: [
      "a) json-file",
      "b) syslog",
      "c) fluentd",
      "d) journald",
    ],
    answer: "a) json-file",
    explanation: "By default, Docker uses the `json-file` logging driver, which stores logs in a JSON format, and it can be configured in Kubernetes container runtimes to collect logs."
  },
  {
    question: "Which of the following is NOT a valid logging solution for Kubernetes clusters?",
    question_id: 54,
    options: [
      "a) Elastic Stack (ELK)",
      "b) Fluentd",
      "c) Prometheus",
      "d) Splunk",
    ],
    answer: "c) Prometheus",
    explanation: "While Prometheus is a powerful monitoring tool, it is not primarily used for logging. Tools like Fluentd, Elastic Stack (ELK), and Splunk are designed specifically for log aggregation and management."
  },
  {
    question: "What is the role of a 'readiness probe' in Kubernetes?",
    question_id: 55,
    options: [
      "a) It checks if a container is running and ready to accept traffic.",
      "b) It checks if a pod should be terminated.",
      "c) It ensures that the pod's logs are being generated.",
      "d) It limits the memory usage of a pod.",
    ],
    answer: "a) It checks if a container is running and ready to accept traffic.",
    explanation: "The readiness probe checks if a container is ready to accept traffic, and Kubernetes will not route traffic to it until the probe is successful."
  },
  {
    question: "Which of the following tools can be used to aggregate and process logs in a Kubernetes environment?",
    question_id: 56,
    options: [
      "a) Fluentd",
      "b) Prometheus",
      "c) Helm",
      "d) Kubelet",
    ],
    answer: "a) Fluentd",
    explanation: "Fluentd is widely used to collect logs from containers and Kubernetes components, and forward them to centralized logging systems such as Elasticsearch."
  },
  {
    question: "What is the main purpose of the Kubernetes 'kube-state-metrics' service?",
    question_id: 57,
    options: [
      "a) To expose metrics about the state of Kubernetes objects.",
      "b) To collect logs from all Kubernetes nodes.",
      "c) To monitor the resource usage of pods.",
      "d) To generate alerts when pods crash.",
    ],
    answer: "a) To expose metrics about the state of Kubernetes objects.",
    explanation: "`kube-state-metrics` exposes various metrics about the current state of Kubernetes objects such as deployments, pods, and nodes, which can be scraped by Prometheus for monitoring."
  },
  {
    question: "Which Kubernetes component is responsible for managing the health checks (readiness and liveness probes) of containers?",
    question_id: 58,
    options: [
      "a) Kubelet",
      "b) Controller Manager",
      "c) API Server",
      "d) Scheduler",
    ],
    answer: "a) Kubelet",
    explanation: "The Kubelet is responsible for managing the health of containers, including performing readiness and liveness checks to ensure the containers are healthy."
  },
  {
    question: "Which metric is typically used to measure the health of a pod's CPU usage in Kubernetes monitoring systems like Prometheus?",
    question_id: 59,
    options: [
      "a) node_cpu_seconds_total",
      "b) pod_cpu_usage",
      "c) pod_memory_usage",
      "d) cpu_limit_usage",
    ],
    answer: "a) node_cpu_seconds_total",
    explanation: "The `node_cpu_seconds_total` metric measures the total CPU time consumed by a node, which can be used to gauge the health and load of the cluster."
  },
  {
    question: "How does Kubernetes handle log retention by default?",
    question_id: 60,
    options: [
      "a) Kubernetes does not handle log retention, and it is managed externally.",
      "b) Logs are stored indefinitely on the nodes.",
      "c) Logs are automatically compressed and stored in a local cache.",
      "d) Logs are deleted after 30 days.",
    ],
    answer: "a) Kubernetes does not handle log retention, and it is managed externally.",
    explanation: "Kubernetes does not have built-in log retention management. Log storage and retention policies must be configured externally, typically in centralized logging systems."
  },
  {
    question: "Which of the following is a valid use case for Kubernetes' 'liveness probe'?",
    question_id: 61,
    options: [
      "a) To verify if a container has been started correctly and is still running.",
      "b) To monitor the network traffic of a container.",
      "c) To scale the number of pods based on resource usage.",
      "d) To automatically restart a failed pod.",
    ],
    answer: "a) To verify if a container has been started correctly and is still running.",
    explanation: "The liveness probe is used to detect and remedy situations where a container is running but cannot make progress. If the probe fails, Kubernetes can restart the container."
  },
  {
    question: "Which Kubernetes object is used to expose metrics collected by the Kubelet to monitoring systems?",
    question_id: 62,
    options: [
      "a) PodMetrics",
      "b) MetricsServer",
      "c) Prometheus",
      "d) NodeMetrics",
    ],
    answer: "b) MetricsServer",
    explanation: "The `MetricsServer` is a cluster-wide aggregator of resource usage data, collecting metrics such as CPU and memory usage for nodes and pods. It provides these metrics to the Kubernetes API for use in horizontal pod autoscaling."
  },
  {
    question: "Which of the following is a key benefit of using Prometheus for monitoring in Kubernetes?",
    question_id: 63,
    options: [
      "a) It automatically collects logs from containers.",
      "b) It integrates seamlessly with Kubernetes to collect and store metrics.",
      "c) It ensures 100% uptime for Kubernetes clusters.",
      "d) It automatically deploys applications in response to alerts.",
    ],
    answer: "b) It integrates seamlessly with Kubernetes to collect and store metrics.",
    explanation: "Prometheus is designed for monitoring and alerting. It integrates seamlessly with Kubernetes to collect and store metrics related to cluster health, pod performance, and resource usage."
  },
  {
    question: "Which of the following is the primary purpose of the 'kubectl top' command in Kubernetes?",
    question_id: 64,
    options: [
      "a) To display a summary of resource usage for pods and nodes.",
      "b) To change the resource limits of a pod.",
      "c) To monitor logs from running containers.",
      "d) To view the current status of the Kubernetes control plane.",
    ],
    answer: "a) To display a summary of resource usage for pods and nodes.",
    explanation: "The `kubectl top` command is used to show resource usage (CPU and memory) for nodes or pods, which is useful for monitoring the performance of the cluster."
  },
  {
    question: "What is the purpose of Fluentd in a Kubernetes logging system?",
    question_id: 65,
    options: [
      "a) To collect and aggregate logs from various sources.",
      "b) To store logs in a centralized database.",
      "c) To visualize logs in a dashboard.",
      "d) To monitor the health of the Kubernetes API server.",
    ],
    answer: "a) To collect and aggregate logs from various sources.",
    explanation: "Fluentd is an open-source log collector that gathers logs from multiple sources, including containers, and forwards them to a log management or analysis tool, such as Elasticsearch."
  },
  {
    question: "Which Kubernetes resource allows you to define alerts based on monitoring metrics?",
    question_id: 66,
    options: [
      "a) Horizontal Pod Autoscaler",
      "b) Kubernetes Event",
      "c) Prometheus Alertmanager",
      "d) PodDisruptionBudget",
    ],
    answer: "c) Prometheus Alertmanager",
    explanation: "Prometheus Alertmanager is used to manage and trigger alerts based on monitoring metrics. Alerts can be configured to notify system administrators when a certain threshold is reached."
  },
  {
    question: "In which format does Kubernetes logs container output by default?",
    question_id: 67,
    options: [
      "a) YAML",
      "b) JSON",
      "c) Plain text",
      "d) CSV",
    ],
    answer: "c) Plain text",
    explanation: "By default, Kubernetes logs container output in plain text. This is the standard format, although it can be configured to output in other formats like JSON."
  },
  {
    question: "What does 'kubectl logs' command do?",
    question_id: 68,
    options: [
      "a) It retrieves the logs of a specific pod.",
      "b) It stores logs in a file.",
      "c) It filters logs by timestamp.",
      "d) It deletes the logs of a container.",
    ],
    answer: "a) It retrieves the logs of a specific pod.",
    explanation: "The `kubectl logs` command retrieves logs from containers in a pod. It can be used to view logs for debugging and troubleshooting container applications."
  },
  {
    question: "Which of the following tools provides both monitoring and alerting features for Kubernetes?",
    question_id: 69,
    options: [
      "a) Prometheus",
      "b) Fluentd",
      "c) Kibana",
      "d) Helm",
    ],
    answer: "a) Prometheus",
    explanation: "Prometheus is a powerful monitoring system that also provides alerting features. It scrapes metrics from monitored systems and triggers alerts when predefined conditions are met."
  },
  {
    question: "Which of the following is a feature of Kubernetes' Horizontal Pod Autoscaler (HPA)?",
    question_id: 70,
    options: [
      "a) It adjusts the number of nodes in the cluster based on CPU usage.",
      "b) It automatically scales the number of pods based on observed metrics like CPU utilization.",
      "c) It manages pod resource requests and limits.",
      "d) It enables log aggregation from all running containers.",
    ],
    answer: "b) It automatically scales the number of pods based on observed metrics like CPU utilization.",
    explanation: "The Horizontal Pod Autoscaler (HPA) automatically scales the number of pods in a deployment or replica set based on the observed values of CPU utilization or other selected metrics."
  },
  {
    question: "Which Kubernetes component exposes metrics about the Kubernetes cluster to Prometheus?",
    question_id: 71,
    options: [
      "a) Metrics Server",
      "b) Kubelet",
      "c) Prometheus Operator",
      "d) Kube-state-metrics",
    ],
    answer: "d) Kube-state-metrics",
    explanation: "The `kube-state-metrics` component exposes various metrics related to the state of Kubernetes resources (such as pods, deployments, and nodes) to Prometheus."
  },
  {
    question: "Which Kubernetes feature allows you to define resource limits and alerts for logs and metrics?",
    question_id: 72,
    options: [
      "a) Horizontal Pod Autoscaler",
      "b) ResourceQuotas",
      "c) PodDisruptionBudgets",
      "d) Resource Requests and Limits",
    ],
    answer: "d) Resource Requests and Limits",
    explanation: "Resource Requests and Limits allow Kubernetes to manage and enforce limits on CPU and memory usage for containers. It helps in resource allocation and setting alerts for resource utilization."
  },
  {
    question: "Which Kubernetes object is commonly used for centralizing logs in a Kubernetes cluster?",
    question_id: 73,
    options: [
      "a) ConfigMap",
      "b) DaemonSet",
      "c) Pod",
      "d) StatefulSet",
    ],
    answer: "b) DaemonSet",
    explanation: "A DaemonSet is commonly used to ensure that log collection agents (such as Fluentd or Logstash) run on all (or some) nodes in the cluster, collecting logs from every container and forwarding them to a central logging system."
  },
  {
    question: "Which Kubernetes component is responsible for managing the lifecycle of containers in a pod?",
    question_id: 74,
    options: [
      "a) Kubelet",
      "b) Controller Manager",
      "c) API Server",
      "d) Scheduler",
    ],
    answer: "a) Kubelet",
    explanation: "The Kubelet is responsible for ensuring that the containers in a pod are running, healthy, and meet their resource requirements. It also manages container logs and probes."
  },
  {
    question: "Which of the following is a key benefit of integrating Fluentd with Kubernetes?",
    question_id: 75,
    options: [
      "a) It enables scaling of pods automatically based on metrics.",
      "b) It allows centralized log aggregation across nodes and containers.",
      "c) It directly monitors Kubernetes nodes for CPU and memory usage.",
      "d) It replaces Prometheus for monitoring Kubernetes metrics.",
    ],
    answer: "b) It allows centralized log aggregation across nodes and containers.",
    explanation: "Fluentd is widely used for log aggregation in Kubernetes. It collects logs from various sources such as containers and nodes and forwards them to centralized logging systems like Elasticsearch or Splunk."
  },
  {
    question: "Which of the following is true about Kubernetes logging by default?",
    question_id: 76,
    options: [
      "a) Kubernetes stores logs in a centralized system by default.",
      "b) Logs are written to the standard output of each container.",
      "c) Logs are automatically sent to Prometheus for monitoring.",
      "d) Logs are encrypted by default in Kubernetes.",
    ],
    answer: "b) Logs are written to the standard output of each container.",
    explanation: "By default, Kubernetes writes container logs to the standard output (stdout) and standard error (stderr) streams. These logs are accessible via `kubectl logs` and can be forwarded to centralized systems."
  },
  {
    question: "Which of the following monitoring tools is often used alongside Kubernetes to visualize metrics collected by Prometheus?",
    question_id: 77,
    options: [
      "a) Grafana",
      "b) Fluentd",
      "c) Kibana",
      "d) Nagios",
    ],
    answer: "a) Grafana",
    explanation: "Grafana is a powerful visualization tool that is often used with Prometheus to visualize and analyze metrics in real-time, providing dashboards for Kubernetes clusters."
  },
  {
    question: "What is the purpose of the 'kubectl describe' command in Kubernetes monitoring?",
    question_id: 78,
    options: [
      "a) It provides detailed information about a Kubernetes object, including events and logs.",
      "b) It displays only the CPU usage of a pod.",
      "c) It restarts a pod.",
      "d) It lists all the logs generated by a Kubernetes component.",
    ],
    answer: "a) It provides detailed information about a Kubernetes object, including events and logs.",
    explanation: "The `kubectl describe` command provides detailed information about a resource, including events related to the object, which can help with troubleshooting issues in the cluster."
  },
  {
    question: "Which of the following components is responsible for collecting metrics about resource usage from nodes and pods in Kubernetes?",
    question_id: 79,
    options: [
      "a) Metrics Server",
      "b) Kube-state-metrics",
      "c) Prometheus",
      "d) Kubelet",
    ],
    answer: "a) Metrics Server",
    explanation: "The `Metrics Server` collects resource usage metrics (CPU and memory) from nodes and pods and exposes them to the Kubernetes API, making them available for use by the Horizontal Pod Autoscaler and other tools."
  },
  {
    question: "What happens when a liveness probe fails in Kubernetes?",
    question_id: 80,
    options: [
      "a) The container is restarted.",
      "b) The pod is terminated.",
      "c) A new pod is created to replace the failed one.",
      "d) Kubernetes scales the number of pods in the deployment.",
    ],
    answer: "a) The container is restarted.",
    explanation: "If a liveness probe fails, Kubernetes will automatically restart the container to attempt to recover from the failure, ensuring that the application stays healthy."
  },
  {
    question: "Which of the following tools can be used to collect and store logs in a Kubernetes cluster?",
    question_id: 81,
    options: [
      "a) Prometheus",
      "b) Fluentd",
      "c) Helm",
      "d) Kube-state-metrics",
    ],
    answer: "b) Fluentd",
    explanation: "Fluentd is a popular open-source data collector used to gather logs from various sources (e.g., containers, nodes) and forward them to centralized storage like Elasticsearch or cloud-based logging systems."
  },
  {
    question: "Which of the following Kubernetes resources can be used to define alerts based on metrics for scaling purposes?",
    question_id: 82,
    options: [
      "a) Horizontal Pod Autoscaler",
      "b) ConfigMap",
      "c) Secret",
      "d) StatefulSet",
    ],
    answer: "a) Horizontal Pod Autoscaler",
    explanation: "The Horizontal Pod Autoscaler (HPA) scales the number of pods based on observed metrics like CPU utilization or custom metrics. It can be configured to trigger scaling actions based on thresholds."
  },
  {
    question: "Which of the following is a common way to collect logs from Kubernetes pods?",
    question_id: 83,
    options: [
      "a) Using Kubernetes API directly",
      "b) Using Fluentd, Logstash, or similar log aggregators",
      "c) Using `kubectl logs` for each container",
      "d) Using kube-proxy to forward logs to the API server",
    ],
    answer: "b) Using Fluentd, Logstash, or similar log aggregators",
    explanation: "Log aggregators like Fluentd and Logstash are commonly used in Kubernetes clusters to collect and forward logs from containers to centralized logging platforms, enabling better visibility and troubleshooting."
  },
  {
    question: "What is the primary purpose of the Kubelet in relation to logging and monitoring?",
    question_id: 84,
    options: [
      "a) To collect logs from containers and send them to Prometheus",
      "b) To monitor the health of the Kubernetes API server",
      "c) To ensure that containers in a pod are running and healthy, including managing logs",
      "d) To aggregate metrics from all nodes and expose them to Prometheus",
    ],
    answer: "c) To ensure that containers in a pod are running and healthy, including managing logs",
    explanation: "The Kubelet is responsible for managing the lifecycle of containers within a pod, including ensuring that containers are running and reporting logs for monitoring and troubleshooting."
  },
  {
    question: "Which Kubernetes component is primarily responsible for managing logs in a cluster?",
    question_id: 85,
    options: [
      "a) Kube-proxy",
      "b) Kubelet",
      "c) Kube-state-metrics",
      "d) Prometheus",
    ],
    answer: "b) Kubelet",
    explanation: "The Kubelet is responsible for managing the container runtime on each node, including collecting logs generated by containers and ensuring that logs are available for troubleshooting."
  },
  {
    question: "What does the 'kubectl logs' command do?",
    question_id: 86,
    options: [
      "a) It displays the logs of a specific Kubernetes resource.",
      "b) It provides detailed logs about node events.",
      "c) It retrieves logs from a container in a pod.",
      "d) It clears the logs for a given container.",
    ],
    answer: "c) It retrieves logs from a container in a pod.",
    explanation: "'kubectl logs' is used to fetch the logs of a specific container within a pod, allowing you to troubleshoot and monitor the status of running applications."
  },
  {
    question: "Which tool is commonly used for alerting and managing notifications based on metrics in Kubernetes?",
    question_id: 87,
    options: [
      "a) Prometheus Alertmanager",
      "b) Fluentd",
      "c) Kibana",
      "d) Helm",
    ],
    answer: "a) Prometheus Alertmanager",
    explanation: "Prometheus Alertmanager is a tool that allows you to define alerting rules based on metrics, aggregate alerts, and notify users when specific conditions are met."
  },
  {
    question: "Which of the following is a common tool used for visualizing metrics collected by Prometheus in Kubernetes?",
    question_id: 88,
    options: [
      "a) Fluentd",
      "b) Grafana",
      "c) Kubernetes Dashboard",
      "d) Kube-state-metrics",
    ],
    answer: "b) Grafana",
    explanation: "Grafana is commonly used to visualize the metrics collected by Prometheus. It allows you to create dashboards and graphs for easy analysis of the health and performance of Kubernetes clusters."
  },
  {
    question: "Which of the following Kubernetes objects should be used to define log collection agents that run on all nodes?",
    question_id: 89,
    options: [
      "a) DaemonSet",
      "b) Pod",
      "c) Deployment",
      "d) StatefulSet",
    ],
    answer: "a) DaemonSet",
    explanation: "A DaemonSet ensures that a particular pod runs on every node in the cluster. This is ideal for log collection agents, which need to run on all nodes to aggregate logs from containers."
  },
  {
    question: "Which of the following is true about the Kubernetes Metrics Server?",
    question_id: 90,
    options: [
      "a) It stores historical metrics data for analysis.",
      "b) It collects and exposes resource usage metrics for nodes and pods.",
      "c) It integrates with Prometheus for long-term metric storage.",
      "d) It is used for managing application logs in Kubernetes.",
    ],
    answer: "b) It collects and exposes resource usage metrics for nodes and pods.",
    explanation: "The Kubernetes Metrics Server is responsible for collecting resource usage data (e.g., CPU, memory) from nodes and pods and exposing it to the Kubernetes API for scaling purposes and monitoring."
  },
  {
    question: "Which of the following tools can be used for log aggregation in Kubernetes?",
    question_id: 91,
    options: [
      "a) Fluentd",
      "b) Kubelet",
      "c) Prometheus",
      "d) Helm",
    ],
    answer: "a) Fluentd",
    explanation: "Fluentd is widely used for log aggregation in Kubernetes. It collects logs from multiple sources (e.g., containers, nodes) and forwards them to centralized logging systems such as Elasticsearch, Splunk, or Cloud-native logging solutions."
  },
  {
    question: "Which of the following Kubernetes components is responsible for scaling applications based on CPU usage?",
    question_id: 92,
    options: [
      "a) Horizontal Pod Autoscaler",
      "b) Cluster Autoscaler",
      "c) Kube-state-metrics",
      "d) Kubernetes Scheduler",
    ],
    answer: "a) Horizontal Pod Autoscaler",
    explanation: "The Horizontal Pod Autoscaler automatically scales the number of pods in a deployment, replica set, or stateful set based on observed CPU utilization or custom metrics."
  },
  {
    question: "What is the primary function of Prometheus in a Kubernetes cluster?",
    question_id: 93,
    options: [
      "a) Log aggregation and forwarding",
      "b) Metrics collection and alerting",
      "c) Container orchestration",
      "d) Service discovery",
    ],
    answer: "b) Metrics collection and alerting",
    explanation: "Prometheus is a monitoring and alerting toolkit designed for collecting metrics from various sources, including Kubernetes nodes and pods. It can also define alerting rules based on the collected metrics."
  },
  {
    question: "Which Kubernetes object is typically used for long-term storage and querying of application logs?",
    question_id: 94,
    options: [
      "a) PersistentVolume",
      "b) Log aggregator (e.g., Fluentd, Logstash)",
      "c) Deployment",
      "d) ConfigMap",
    ],
    answer: "b) Log aggregator (e.g., Fluentd, Logstash)",
    explanation: "Log aggregators such as Fluentd or Logstash are commonly used to collect, process, and forward logs from Kubernetes pods to centralized storage systems for long-term retention and querying."
  },
  {
    question: "Which of the following commands would you use to view logs from a specific pod in Kubernetes?",
    question_id: 95,
    options: [
      "a) kubectl logs <pod_name>",
      "b) kubectl describe pod <pod_name>",
      "c) kubectl get logs <pod_name>",
      "d) kubectl show logs <pod_name>",
    ],
    answer: "a) kubectl logs <pod_name>",
    explanation: "'kubectl logs' is used to view logs from a specific pod, including the logs from containers within that pod. It's commonly used to troubleshoot issues with applications running in the pod."
  },
  {
    question: "Which of the following is true regarding log retention in Kubernetes?",
    question_id: 96,
    options: [
      "a) Kubernetes retains logs indefinitely by default.",
      "b) Logs are not retained in Kubernetes, they need to be exported to external systems.",
      "c) Kubernetes stores logs in a PersistentVolume by default.",
      "d) Logs are stored in etcd for long-term retention.",
    ],
    answer: "b) Logs are not retained in Kubernetes, they need to be exported to external systems.",
    explanation: "By default, Kubernetes does not retain logs for long periods. Logs are written to the standard output and error streams of containers and are typically exported to external logging systems for persistence and analysis."
  },
  {
    question: "How can Kubernetes monitor resource usage across nodes and pods in real-time?",
    question_id: 97,
    options: [
      "a) By using the Kubernetes Dashboard",
      "b) By using the Metrics Server",
      "c) By using Kube-state-metrics",
      "d) By using kubectl top",
    ],
    answer: "b) By using the Metrics Server",
    explanation: "The Metrics Server collects resource usage data such as CPU and memory usage from nodes and pods. This data is exposed through the Kubernetes API and can be used by tools like the Horizontal Pod Autoscaler for scaling decisions."
  },
  {
    question: "Which Kubernetes resource can be used to monitor and limit memory and CPU usage for containers?",
    question_id: 98,
    options: [
      "a) PodDisruptionBudget",
      "b) ResourceRequests and Limits",
      "c) ReplicaSet",
      "d) Deployment",
    ],
    answer: "b) ResourceRequests and Limits",
    explanation: "Resource Requests and Limits allow you to set limits on memory and CPU usage for containers, ensuring that they don't exceed predefined limits. These are important for monitoring resource utilization and preventing resource contention."
  },
  {
    question: "Which Kubernetes component is used to visualize the performance of applications and infrastructure?",
    question_id: 99,
    options: [
      "a) Prometheus",
      "b) Grafana",
      "c) Fluentd",
      "d) Kube-state-metrics",
    ],
    answer: "b) Grafana",
    explanation: "Grafana is often used alongside Prometheus to visualize metrics in dashboards. It allows Kubernetes users to track the performance of both the applications running inside the cluster and the cluster's infrastructure itself."
  },
  {
    question: "Which tool is commonly integrated with Kubernetes for aggregating logs from various sources (e.g., containers, nodes)?",
    question_id: 100,
    options: [
      "a) Prometheus",
      "b) Helm",
      "c) Fluentd",
      "d) Kubernetes Dashboard",
    ],
    answer: "c) Fluentd",
    explanation: "Fluentd is a log collection and aggregation tool commonly used in Kubernetes environments. It collects logs from containers, nodes, and other sources, then forwards them to storage and analysis systems like Elasticsearch or cloud logging services."
  }
];
