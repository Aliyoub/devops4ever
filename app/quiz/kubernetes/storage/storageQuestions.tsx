
 export const storageQuestions = [
    {
        question: "Which Kubernetes volume type is ephemeral and deleted when the pod terminates?",
        options: [
            "a) emptyDir",
            "b) PersistentVolume",
            "c) ConfigMap",
            "d) hostPath"
        ],
        answer: "a) emptyDir"
    },
    {
        question: "What access mode is required to allow multiple nodes to read but not write to a volume?",
        options: [
            "a) ReadWriteOnce",
            "b) ReadOnlyMany",
            "c) ReadWriteMany",
            "d) ReadOnceWriteMany"
        ],
        answer: "b) ReadOnlyMany"
    },
    {
        question: "What Kubernetes resource is required to bind a PersistentVolume to a pod?",
        options: [
            "a) ConfigMap",
            "b) NetworkPolicy",
            "c) PersistentVolumeClaim",
            "d) Secret"
        ],
        answer: "c) PersistentVolumeClaim"
    },
    {
        question: "Which field in a PersistentVolume manifest specifies the storage class?",
        options: [
            "a) volumeMode",
            "b) storageClassName",
            "c) accessModes",
            "d) capacity"
        ],
        answer: "b) storageClassName"
    },
    {
        question: "Which access mode allows only a single pod to mount the volume for writing?",
        options: [
            "a) ReadOnlyMany",
            "b) ReadWriteOnce",
            "c) ReadWriteMany",
            "d) WriteOnceReadMany"
        ],
        answer: "b) ReadWriteOnce"
    },
    {
        question: "Which volume type can be used to share data between containers in the same pod?",
        options: [
            "a) PersistentVolume",
            "b) emptyDir",
            "c) hostPath",
            "d) ConfigMap"
        ],
        answer: "b) emptyDir"
    },
    {
        question: "Which of these is NOT a valid Kubernetes volume?",
        options: [
            "a) persistentVolumeClaim",
            "b) secret",
            "c) sharedPath",
            "d) projected"
        ],
        answer: "c) sharedPath"
    },
    {
        question: "What does the storage class in a PersistentVolume specify?",
        options: [
            "a) Volume size",
            "b) Type of storage provisioner",
            "c) Access modes",
            "d) Encryption options"
        ],
        answer: "b) Type of storage provisioner"
    },
    {
        question: "Which PersistentVolume access mode allows multiple pods to write to the same volume from different nodes?",
        options: [
            "a) ReadWriteOnce",
            "b) ReadOnlyMany",
            "c) ReadWriteMany",
            "d) WriteOnceReadMany"
        ],
        answer: "c) ReadWriteMany"
    },
    {
        question: "What command is used to create a PersistentVolume in Kubernetes?",
        options: [
            "a) kubectl apply -f pv.yaml",
            "b) kubectl create pv.yaml",
            "c) kubectl attach pv.yaml",
            "d) kubectl add pv.yaml"
        ],
        answer: "a) kubectl apply -f pv.yaml"
    },
    {
        question: "Which volume type should be used for temporary scratch data in a pod?",
        options: [
            "a) PersistentVolumeClaim",
            "b) emptyDir",
            "c) configMap",
            "d) secret"
        ],
        answer: "b) emptyDir"
    },
    {
        question: "What Kubernetes object provides a bridge between PersistentVolumes and pods?",
        options: [
            "a) StorageClass",
            "b) ConfigMap",
            "c) PersistentVolumeClaim",
            "d) VolumeMount"
        ],
        answer: "c) PersistentVolumeClaim"
    },
    {
        question: "Which PersistentVolumeClaim status indicates that the claim has been successfully bound to a PersistentVolume?",
        options: [
            "a) Pending",
            "b) Bound",
            "c) Available",
            "d) Claimed"
        ],
        answer: "b) Bound"
    },
    {
        question: "Which volume type should be used to mount configuration data into a pod?",
        options: [
            "a) secret",
            "b) emptyDir",
            "c) configMap",
            "d) persistentVolumeClaim"
        ],
        answer: "c) configMap"
    },
    {
        question: "What Kubernetes storage type is suitable for sharing sensitive information like passwords?",
        options: [
            "a) PersistentVolume",
            "b) emptyDir",
            "c) secret",
            "d) configMap"
        ],
        answer: "c) secret"
    },
    {
        question: "Which command is used to delete a PersistentVolumeClaim in Kubernetes?",
        options: [
            "a) kubectl delete pvc <claim-name>",
            "b) kubectl remove pvc <claim-name>",
            "c) kubectl delete volume <claim-name>",
            "d) kubectl delete pv <claim-name>"
        ],
        answer: "a) kubectl delete pvc <claim-name>"
    },
    {
        question: "Which PersistentVolume type directly maps to a local directory on the node?",
        options: [
            "a) emptyDir",
            "b) hostPath",
            "c) NFS",
            "d) secret"
        ],
        answer: "b) hostPath"
    },
    {
        question: "What field in a PersistentVolumeClaim specifies the requested storage capacity?",
        options: [
            "a) storageClassName",
            "b) accessModes",
            "c) resources.requests.storage",
            "d) volumeMode"
        ],
        answer: "c) resources.requests.storage"
    },
    {
        question: "Which volume type allows a pod to reference a PersistentVolume?",
        options: [
            "a) configMap",
            "b) emptyDir",
            "c) persistentVolumeClaim",
            "d) projected"
        ],
        answer: "c) persistentVolumeClaim"
    },
    {
        question: "Which of these is NOT a valid reclaim policy for a PersistentVolume?",
        options: [
            "a) Retain",
            "b) Recycle",
            "c) Delete",
            "d) Release"
        ],
        answer: "d) Release"
    },
    {
        question: "What is the purpose of the 'volumeMode' field in a PersistentVolume?",
        options: [
            "a) Specifies access modes",
            "b) Defines the storage backend",
            "c) Sets the type of binding (Filesystem or Block)",
            "d) Determines the encryption type"
        ],
        answer: "c) Sets the type of binding (Filesystem or Block)"
    },
    {
        question: "Which Kubernetes resource defines the underlying storage type like AWS EBS or GCE PD?",
        options: [
            "a) PersistentVolumeClaim",
            "b) StorageClass",
            "c) PersistentVolume",
            "d) VolumeMount"
        ],
        answer: "b) StorageClass"
    },
    {
        question: "What PersistentVolumeClaim field is used to specify the storage backend requirements?",
        options: [
            "a) volumeMode",
            "b) storageClassName",
            "c) capacity",
            "d) accessModes"
        ],
        answer: "b) storageClassName"
    },
    {
        question: "Which volume type in Kubernetes is most appropriate for single-use sensitive data like passwords?",
        options: [
            "a) configMap",
            "b) emptyDir",
            "c) secret",
            "d) hostPath"
        ],
        answer: "c) secret"
    },
    {
        question: "In Kubernetes, how is a PersistentVolume created programmatically?",
        options: [
            "a) With PersistentVolumeClaims",
            "b) Through dynamic provisioning",
            "c) By creating StorageClasses",
            "d) By binding manually"
        ],
        answer: "b) Through dynamic provisioning"
    },
    {
        question: "What does the reclaim policy 'Retain' do in a PersistentVolume?",
        options: [
            "a) Deletes the volume",
            "b) Unbinds but keeps data",
            "c) Returns volume to the pool",
            "d) Formats the data"
        ],
        answer: "b) Unbinds but keeps data"
    },
    {
        question: "What PersistentVolumeClaim field determines how data is accessed (e.g., block or filesystem)?",
        options: [
            "a) volumeMode",
            "b) accessModes",
            "c) reclaimPolicy",
            "d) storageClassName"
        ],
        answer: "a) volumeMode"
    },
    {
        question: "Which Kubernetes volume allows direct block storage access?",
        options: [
            "a) emptyDir",
            "b) blockVolume",
            "c) persistentVolumeClaim with volumeMode set to Block",
            "d) configMap"
        ],
        answer: "c) persistentVolumeClaim with volumeMode set to Block"
    },
    {
        question: "How is a PersistentVolume dynamically provisioned in Kubernetes?",
        options: [
            "a) By creating a PersistentVolume directly",
            "b) Through a PersistentVolumeClaim and StorageClass",
            "c) By specifying volumeMode",
            "d) Using a HostPath volume"
        ],
        answer: "b) Through a PersistentVolumeClaim and StorageClass"
    },
    {
        question: "In Kubernetes, what must match between a PersistentVolume and a PersistentVolumeClaim for binding?",
        options: [
            "a) StorageClass",
            "b) VolumeMode",
            "c) AccessModes",
            "d) Both StorageClass and AccessModes"
        ],
        answer: "d) Both StorageClass and AccessModes"
    }
]
