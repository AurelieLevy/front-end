# Internet of Things - Groupe front-end
Dans le cadre du cours IOT à la HEIG-VD, Suisse.

## Introduction
Ce repository est consacré à la partie front-end. Elle consiste en la mise en place d'une interface utilisateur permettant de voir les différentes valeurs fournies par les capteurs. Les données ont été traitées de manière à présenter des informations compréhensibles et utilisables. Divers graphiques représentent donc les résultats afin de les présenter visuellement.
Une carte représente les emplacements des différents groupes de capteurs. Un clic suffit à l'ouverture des informations liées au groupe choisi.

## Technologies utilisées
* [React](https://reactjs.org/) : est une bibliothèque JavaScript libre développée par Facebook depuis 2013. Le but principal de cette bibliothèque est de faciliter la création d'application web monopage, via la création de composants dépendant d'un état et générant une page (ou portion) HTML à chaque changement d'état. Nous avons décidé d'utiliser cette technologie car Matthias la connait très bien. De cette manière, nous avons pu gagner énormément de temps, car React permet de créer des composants de manière rapide et propre. Lesdit composants utilisent des données entrantes qui peuvent changer au cours du temps.
* [D3](https://d3js.org/) : est une bibliothèque graphique JavaScript qui permet l'affichage de données numériques sous une forme graphique et dynamique. Nous avions déjà appris à l'utiliser en cours, ce qui nous avait permis de constater son utilité. Cette bibliothèque permet en effet de créer des graphiques recherchés et facilement lisible visuellement, de manière à représenter les données sous une forme propre et utilisable. Comme de nombreux codes de graphique sont déjà mis à disposition en libre utilisation, il est facile de créer un graphique et de le modifier afin d'obtenir ce qui est nécessaire à la partie frontend.
* [Mapbox.js](https://www.mapbox.com/mapbox.js/api/) : est une bibliothèque JavaScript — basée sur [Leaflet](https://leafletjs.com/) qui permet l'affichage de cartes interactives et dynamiques. Cette librairie est relativement bien documentée et permet de créer une carte avec différentes caractéristiques, permettant par exemple de limiter le terrain visible ou encore le zoom arrière-avant disponible.

Le projet est build avec [webpack](https://webpack.js.org/) qui aide à organiser l'application en modules

## Spécificités
### Contraintes
Le front-end doit mettre à disposition différentes fonctionnalités selon le rôle de l'utilisateur connecté.
Deux types d'utilisateurs existent: admin et lambda. 
Dès que quelqu'un souhaite avoir accès à l'application, il doit se connecter avec son mot de passe.
***admin***
L'utilisateur admin a tous les droits. Il a donc accès à toutes les fonctionnalités de l'application.
En plus des pages que l'utilisateur lambda peut voir, il peut aussi modifier le temps de rafraichissement des capteurs.
***lambda***
L'utilisateur lambda a accès aux pages permettant de visionner les données et les graphiques.

### Pages
Plusieurs pages sont disponibles, chacune correspondantes à une fonctionnalité.
Une page permet de voir une carte ou se trouve des points, lesquels représentent la position de chaque groupe de capteurs. Au clic sur un de ces points, il est possible d'atteindre une page présentant les données liées aux capteurs visés.
De cette manière, il est possible d'observer séparément les capteurs selon leur emplacements.

### Endpoints
Pour plus d'informations sur les endpoints, veuillez vous référer à la partie backend.

### Visuel
[Captures d'écran et explications]

## Déploiement
[Instruction de déploiement/utilisation]

## Problèmes rencontrés et difficultés à prendre en compte

## Conclusion
[Points à améliorer, points en suspens, améliorations futures, ...]

## Documentation supplémentaire
[liens utiles]
