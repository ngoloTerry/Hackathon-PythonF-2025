# 🎓 Hackathon PythonF 2025 — Guide interactif des salles de l’UFR Sciences

## 🚀 Objectif du projet

Lors du Hackathon PythonF 2025, notre équipe s’est donné pour mission de créer un **site web interactif** capable de guider un étudiant depuis une **entrée du campus (Est/Ouest)** jusqu’à **sa salle de cours**, grâce à une interface intuitive, des photos en carrousel, et une base de données en lien avec l’emploi du temps de l’université.

Ce projet a été réalisé avec l’aide d’un LLM (modèle de langage) pour accélérer le prototypage, la documentation et les choix techniques.

---

## 🧠 Idée de départ

L’idée est née d’un constat simple : il est difficile de se repérer sur le campus. L’utilisateur entre son point d’entrée et choisit sa salle de destination. En réponse, le site lui affiche le **chemin illustré par des photos**, étape par étape.

---

## ⚙️ Technologies utilisées

### Backend

* **Node.js + Express** – Pour héberger le serveur web
* **Base de données** (à venir) – Pour associer les salles aux chemins et images

### Frontend

* **HTML5 / CSS3**
* **TailwindCSS** – Pour un design rapide et propre
* **jQuery** – Pour les animations (`fadeIn`, suggestions dynamiques)

### Traitement de données

* Script de **prétraitement des fichiers iCal** venant du site officiel de l’emploi du temps
* Extraction prévue vers une base de données SQLite ou équivalent léger

---

## 📦 Installation rapide

### 1. Prérequis

#### Debian

```bash
sudo apt install nodejs npm
```

#### Windows/macOS

* Télécharger Node.js : [https://nodejs.org/](https://nodejs.org/)

### 2. Installer les dépendances

Dans le répertoire du projet :

```bash
npm install
```

### 3. Lancer le serveur

```bash
npm start
```

Le serveur sera accessible sur [http://localhost:3000](http://localhost:3000)

---

## 🧑‍🎨 Personnaliser Tailwind CSS

Un exécutable `tailwindcss` est fourni :

```bash
cd public
../libprive/tailwindcss -i ../libprive/input.css -o style.css --watch --cwd . --optimize
```

---

## 📸 Fonctionnalités actuelles

* Choix d’une entrée (`Est` ou `Ouest`)
* Animation jQuery `fadeIn` après sélection
* Barre de recherche avec **suggestions automatiques**
* Overlay modale pour choisir la salle
* Maquette responsive en Tailwind

---

## 🧩 Données à intégrer

Nous utiliserons l’échantillon de données iCal fourni par l’université :

```
https://emploidutemps.univ-reunion.fr/jsp/custom/modules/plannings/anonymous_cal.jsp?... 
```

### Format attendu :

\| Cours | Date | Plage | Horaire | Niveau | Domaine | Groupe | Salle | ... |

Les salles seront associées à une **suite de photos** pour reconstituer le trajet.

---

## 🛠️ Améliorations envisagées

* 🧠 Assistant virtuel : salle + heure → lieu exact
* 📱 Application mobile
* 🔊 Guide vocal pour personnes malvoyantes
* 📷 Réalité augmentée : surcouche fléchée en direct
* 🛤️ Carrousel intelligent généré dynamiquement
* ✅ Authentification étudiante pour personnalisation

---

## 🎬 Équipe & rôles

* **Tahiry** – Prise de photos (Est/Ouest), prétraitement des données
* **Pierrick** – Documentation, présentation orale, support visuel
* **LLM** – Conseiller technique & assistant de code
* **Corentin** – Intégration Express, logique backend, gestion du front, interfaçage BDD

---

## 🧪 Prototype simplifié

Dans une version simplifiée :

* L’utilisateur choisit sa salle depuis une liste déroulante
* Le site lui affiche le **chemin sous forme de carrousel d’images**
* La logique de chemin dépend de l’entrée choisie (Est/Ouest)

---

## 🌟 Objectif final

Créer un **assistant intelligent de navigation universitaire** :

* L’utilisateur entre sa **salle et son heure de cours**
* Le site génère le **chemin le plus logique**
* Il affiche une **suite d’images avec indications**
* (À terme : réalité augmentée + accessibilité)

---

> **🎉 Merci à l’équipe, aux outils open source, et à notre modèle LLM pour la collaboration efficace !**
