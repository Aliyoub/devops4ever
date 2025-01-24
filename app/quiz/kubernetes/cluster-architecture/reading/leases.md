**Résumé du contenu (en français) :**

Le document **« Leases »** situé à l’adresse <https://kubernetes.io/docs/concepts/architecture/leases/> explique la ressource **Lease** dans Kubernetes, qui est un objet léger servant principalement à gérer et stocker des informations éphémères (notamment pour l’**élection de leader** et la signalisation d’activité entre composants). Voici les points essentiels :

---

## 1. Définition générale

- **Lease** est un objet (une ressource de type `Lease`) stocké dans **etcd**, léger et régulièrement mis à jour pour refléter un état de possession ou de signalement.
- Il est souvent utilisé comme **« baton »** (ou jeton) pour assurer qu’un seul composant à la fois agit en tant que leader (leadership).
- Il peut aussi servir à annoncer qu’un composant est **vivant** (heartbeat).

---

## 2. Champ d’application des « Leases »

1. **Leader Election** :  
   - Les contrôleurs ou opérateurs (par exemple, un contrôleur personnalisé) utilisent un objet Lease pour décider lequel prend le rôle actif.  
   - Si un leader ne renouvelle plus son Lease avant expiration, un autre participant peut prendre la relève.

2. **Heartbeats** :  
   - Un composant peut mettre à jour un Lease à intervalles réguliers pour indiquer qu’il est opérationnel.  
   - D’autres composants scrutent ce Lease pour détecter un crash ou une indisponibilité.

3. **Utilisation légère en base de données** :  
   - Comme c’est un objet simple et peu volumineux, cela réduit la charge sur `etcd`.

---

## 3. Caractéristiques techniques

- Ressource nommée **`Lease`** (dans l’API group `coordination.k8s.io/v1`).  
- Structure minimaliste, qui inclut :  
  - **holderIdentity** (qui détient le Lease),  
  - **leaseDurationSeconds** (durée pendant laquelle le Lease est valide si pas renouvelé),  
  - **renewTime** et **acquireTime** (timestamp d’obtention ou de renouvellement).  
- Peut être créé et mis à jour via l’**API server** comme n’importe quel autre objet de type `CustomResource`.

---

## 4. Modèle de fonctionnement

1. **Création** : un composant crée l’objet Lease ou le récupère s’il existe déjà.  
2. **Obtention / Mise à jour** : il renseigne `holderIdentity` et met à jour `renewTime` pour indiquer qu’il « détient » le Lease.  
3. **Expiration** : si l’entité détenant le Lease ne le renouvelle pas avant `leaseDurationSeconds`, la possession est considérée comme expirée. Un autre participant peut alors prendre le Lease.  
4. **Boucle de leader election** : en général, un composant tente d’acquérir le Lease ; s’il réussit, il agit comme leader jusqu’à ce qu’il libère ou qu’il échoue à renouveler le Lease.

---

## 5. Cas d’usage dans Kubernetes

- **kube-controller-manager** : Pour s’assurer qu’un seul scheduler ou qu’un seul contrôleur est leader dans le cadre d’une configuration haute disponibilité.  
- **Opérateurs et contrôleurs custom** : Pour partager une logique de leader election (ex. un opérateur unique qui pilote les modifications sur le cluster).

---

**En résumé**, la page **« Leases »** décrit l’objet **Lease** comme un mécanisme léger et simple pour gérer l’**élection de leader** ou tout autre usage nécessitant un « droit de possession » renouvelable. Les composants Kubernetes (ou des opérateurs custom) peuvent l’utiliser afin de s’assurer qu’une seule instance prend des décisions critiques à un instant donné, ou qu’un composant continue d’envoyer des signaux de vie. C’est une ressource de coordination centrale pour la haute disponibilité et la distribution de tâches dans Kubernetes.