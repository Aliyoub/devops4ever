import React from 'react'
import Kubernetes_Services from './services/page'
import Kubernetes_ClusterArchitecture from './cluster-architecture/page'

const ListOfKubernetesThemes = () => {
  return (
    <>
    <Kubernetes_Services />
    <Kubernetes_ClusterArchitecture />
    </>
  )
}

export default ListOfKubernetesThemes