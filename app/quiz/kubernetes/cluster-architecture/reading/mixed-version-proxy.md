**Résumé du contenu (en français) :**

Le document **« Mixed Version Proxy »**, disponible à l’adresse <https://kubernetes.io/docs/concepts/architecture/mixed-version-proxy/>, décrit la façon dont le **kube-proxy** peut coexister avec des versions différentes de Kubernetes dans un cluster. Il aborde notamment les sujets suivants :

---

## 1. Contexte du « Mixed Version Proxy »

- Dans un cluster Kubernetes, il arrive que tous les composants ne soient pas strictement à la même version (ex. lors d’une mise à jour progressive ou d’un cluster à n + 1 versions).
- **kube-proxy** est le composant chargé du routage réseau, notamment à travers iptables ou IPVS, afin de faire transiter le trafic vers les Pods cibles.

---

## 2. Tolérance aux versions (version skew)

- Kubernetes prévoit une **tolérance** à un certain écart de versions (*version skew*) entre le plan de contrôle (API server, kube-controller-manager, etc.) et les nœuds (où tournent kubelet et kube-proxy).
- **Exemple** : Un kube-proxy en version X peut rester compatible avec un API server en version X+1, selon la politique de compatibilité de Kubernetes.

---

## 3. Mises à jour et compatibilité

1. **Mise à jour échelonnée** :
   - Il est possible de mettre à niveau progressivement les différents composants (API server, kubelet, kube-proxy) sans briser la compatibilité.
2. **kube-proxy** :
   - On peut mettre à jour le kube-proxy indépendamment du kubelet, tant qu’on reste dans l’éventail de versions compatibles (habituellement +/- 1 version de différence).

---

## 4. Mécanisme de compatibilité

- **API server** et **kube-proxy** échangent via l’API de Kubernetes.  
- Même si leurs versions ne sont pas identiques, tant que l’API server prend en charge la version des API attendues par le kube-proxy, la communication demeure fonctionnelle.
- Kubernetes maintient une **stabilité d’API** d’une version sur l’autre pour minimiser les ruptures.

---

## 5. Pratiques recommandées

- **Suivre les versions supportées** : se conformer au plan de compatibilité officiel, qui recommande généralement que le kubelet (et kube-proxy) ne dépasse pas deux versions d’écart par rapport au serveur (ex. v1.25 vs v1.23).
- **Mettre à jour prioritairement le plan de contrôle** : On commence par l’API server et les composants du contrôle, puis on met à niveau les nœuds (kubelet, kube-proxy).
- **Surveiller l’état du cluster** : pendant la cohabitation de versions différentes, vérifier que le routage réseau (Service, iptables, IPVS, etc.) fonctionne correctement.

---

**En résumé**, la page **« Mixed Version Proxy »** explique que Kubernetes autorise une certaine **coexistence** de différentes versions de kube-proxy et du plan de contrôle. Grâce à la politique de **version skew** et la compatibilité d’API, on peut mettre à jour le cluster de manière progressive sans interrompre la connectivité des services. Kubernetes veille ainsi à éviter les incompatibilités tout en permettant un **upgrade** étape par étape des différents composants réseau.