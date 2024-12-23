import React from 'react'

import Kubernetes_ClusterArchitecture from './cluster-architecture/page'
import Kubernetes_Security from './security/page'
import Kubernetes_Services from './Services/page'
import Kubernetes_Storage from './storage/page'
import Kubernetes_Networking from './networking/page'
import Kubernetes_Troubleshooting from './troubleshooting/page'
import Kubernetes_InstallationConfiguration from './installation-configuration/page'
import Kubernetes_WorkloadsScheduling from './workloads-scheduling/page'
import Kubernetes_LoggingMonitoring from './logging-monitoring/page'

const ListOfKubernetesThemes = () => {
  return (
    <>
    <Kubernetes_Security />
    <Kubernetes_InstallationConfiguration />
    <Kubernetes_WorkloadsScheduling />
    <Kubernetes_LoggingMonitoring />
    <Kubernetes_Storage />
    <Kubernetes_Services />
    <Kubernetes_Troubleshooting />
    <Kubernetes_Networking />
    <Kubernetes_ClusterArchitecture />
    </>
  )
}

export default ListOfKubernetesThemes