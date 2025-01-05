"use client";

import { useState, useEffect } from "react";

// Étape 3 : Page qui utilise le composant

import { dataForAccordionsStructure } from "./accordionsStructure";
import SearchComponent from "@/components/searchComponent/SearchComponent";

const Search = () => {
  // Exemple de données
  const sampleData = [
    {
      title: "Introduction à Next.js",
      description: "Guide pratique pour commencer avec Next.js.",
    },
    {
      title: "Tutoriel React",
      description: "Apprenez les bases de React pas à pas.",
    },
    {
      title: "Fuse.js et recherche approximative",
      description: "Implémentation d’une recherche rapide et efficace.",
    },
    {
      title: "Développement DevOps",
      description: "Les meilleures pratiques pour DevOps.",
    },
  ];

  return (
    <div
      style={
        {
          // maxWidth: "600px",
          // margin: "50px auto",
          // fontFamily: "Arial, sans-serif",
        }
      }
    >
      {/* <h1>Recherche avec Fuse.js</h1> */}
      <SearchComponent data={dataForAccordionsStructure} />
      {/* <SearchComponent data={sampleData} /> */}
    </div>
  );
};

export default Search;

// Étape 4 : Fonctionnement
// 1. Clonez ou créez une nouvelle application Next.js.
// 2. Ajoutez ce code dans un composant de recherche dédié (par exemple, `SearchComponent.js`).
// 3. Ajoutez le fichier de page (par exemple, `index.js`) qui consomme ce composant.
// 4. Démarrez le serveur avec `npm run dev` et accédez à l'interface.
// 5. Essayez de rechercher des mots-clés dans le champ de recherche pour voir les résultats dynamiques.

// Points d’amélioration possibles :
// - Ajouter un spinner pour indiquer qu'une recherche est en cours.
// - Intégrer des données depuis une API avec `getStaticProps` ou `getServerSideProps`.
// - Ajouter des animations pour une meilleure expérience utilisateur.
