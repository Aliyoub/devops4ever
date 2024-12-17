import React from 'react'

import Kubernetes_ClusterArchitecture from './cluster-architecture/page'
import Kubernetes_Services from './Services/page'

const ListOfKubernetesThemes = () => {
  return (
    <>
    <Kubernetes_Services />
    <Kubernetes_ClusterArchitecture />
    </>
  )
}

export default ListOfKubernetesThemes