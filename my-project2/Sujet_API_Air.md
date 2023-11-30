# Projet API Air

On vous demande de créer une application qui permet de récupérer des données sur la qualité de l'air dans une ville donnée à l'aide de l'API [Air Quality](https://www.iqair.com).

## A / TD : API Fetch

L'API Fetch et la méthode fetch() permet de faire des appels HTTP afin de récupérer des ressources sur le réseau (API, images, fichiers, etc.).

La méthode fetch() prend en entrée l’URL de la ressource à récupérer et renvoie une promesse qui sera résolue lorsque la réponse sera disponible. En d'autres mots, la méthode fetch() va chercher une ressource se trouvant sur un serveur et la ramène afin de pouvoir la manipuler.

```javascript
// Code minimum
async function fetchData() {
  const reponse = await fetch("http://example.com/films.json");
  const data = await reponse.json();
  console.log(data);
}
```

Dans sa forme la plus simple, `fetch()` utilise un argument qui correspond au chemin de la ressource à récupérer. Cet appel ne renvoie pas directement une réponse avec un corps en JSON, mais une promesse qui est résolue en un objet `Response`.

L'objet `Response` ne contient pas directement le corps de la réponse en JSON mais fournit une représentation de l'ensemble de la réponse HTTP. Aussi, pour extraire le corps en JSON de l'objet Response, on utilise la méthode `json()`, qui renvoie une deuxième promesse dont la résolution fournit le résultat de l'analyse du corps de la réponse au format JSON.

#### Définitions

- `async` signifie que la fonction est asynchrone et qu'elle renvoie une promesse.
- La programmation `asynchrone` est une technique qui permet à un programme de démarrer une tâche à l'exécution potentiellement longue et, au lieu d'avoir à attendre la fin de la tâche, de pouvoir continuer à réagir aux autres évènements pendant l'exécution de cette tâche.
- Une `promesse` est un objet ( Promise ) qui représente la complétion ou l'échec d'une opération asynchrone.
- `await` permet d'attendre la résolution de la promesse avant de continuer l'exécution du code.

### Exercice d'application

Nous allons tester l'API Fetch avec l'API [randomuser](https://randomuser.me/api/).
Partir d'un projet React JS et créer un composant `App` qui va récupérer les données de l'API et les afficher dans la console.

Nous allons pour ceci utiliser le hook `useEffect` qui permet d'exécuter une fonction au chargement du composant.

---

## B/ TP projet : API Air

Créer le prototype responsif de l'application sous Figma pour le TP de vendredi.

### version 1

À l'aide de React JS en utilisant l'API fetch et les données de l'API Air Quality, créer une application qui permet de récupérer des données sur la qualité de l'air dans une ville donnée.

### version 2

Intégrer le design de l'application à l'aide de Tailwind CSS et d'une librairie d'animation : Framer Motion, Gsap, Anime JS, etc.
