import React from 'react'

import KubernetesServices from './app/quiz/kubernetes/services/KubernetesServices'
import Kubernetes_ClusterArchitecture from './cluster-architecture/page'

const ListOfKubernetesThemes = () => {
  return (
    <>
    <KubernetesServices />
    <Kubernetes_ClusterArchitecture />
    </>
  )
}

export default ListOfKubernetesThemes