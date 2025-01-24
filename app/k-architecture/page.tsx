// app/md/page.tsx
"use client";

import { Roboto } from "next/font/google";
import React, { useEffect, useState } from "react";

const roboto = Roboto({
  subsets: ["latin"], // Charge le sous-ensemble latin uniquement
  weight: ["400", "700"], // Charge les poids 400 et 700
  style: ["normal", "italic"], // Charge les styles normal et italique
  display: "swap", // Paramètre pour l'optimisation du chargement
});

export default function MarkdownViewer() {
  const [mdData, setMdData] = useState<{
    rawMarkdown: string;
    convertedHtml: string;
    html: string;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // 1. Appeler l'endpoint pour récupérer les données
    fetch("/api/github-md")
      .then(async (res) => {
        if (!res.ok) {
          throw new Error(`Erreur: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        // 2. Stocker la réponse dans le state
        setMdData(data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  if (error) {
    return <p>Erreur lors du fetch du contenu: {error}</p>;
  }

  // Tant que le fetch n'est pas terminé, on peut afficher un loader
  if (!mdData) {
    return <p>Chargement en cours...</p>;
  }

  return (
    <main
      style={{
        overflowY: "auto",
        height: "100vh",
        maxWidth: "800px",
        margin: "0 auto",
      }}
      className={roboto.className}
    >
      {/* <h1>Affichage du fichier Markdown</h1> */}

      {/* 1) Affichage du contenu brut (Markdown) */}
      {/* <section
        style={{
          border: "1px solid #ccc",
          padding: "1rem",
          marginBottom: "2rem",
          overflowY: "auto",
          height: "200px",
        }}
      >
        <h2>Markdown brut</h2>
        <pre
          style={{ whiteSpace: "pre-wrap", overflowY: "auto", height: "200px" }}
        >
          {mdData.rawMarkdown}
        </pre>
      </section> */}

      {/* ================================================================================ */}

      {/* 2) Affichage du contenu converti en HTML */}
      <section
        style={{
          overflowY: "auto",
          height: "500px",
          border: "1px solid #ccc",
          padding: "1.5rem",
          backgroundColor: "white",
          textAlign: "justify",
          //   wordSpacing: "-2.5rem",
        }}
        className={roboto.className}
      >
        <h2>Kubernetes Architecture</h2>
        <div
          style={{
            // overflowY: "auto",
            lineHeight: "1.5rem",
            // height: "200px",
            // padding: 30,
          }}
          className={roboto.className}
          dangerouslySetInnerHTML={{ __html: mdData.html }}
        />
      </section>
    </main>
  );
}
