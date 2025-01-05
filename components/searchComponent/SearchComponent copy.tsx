import { useState, useEffect, ChangeEvent } from "react";
import Fuse from "fuse.js";

interface SearchComponentProps {
  data: { title: string; description: string }[];
}

const SearchComponent = ({ data }: SearchComponentProps) => {
  // État pour stocker les résultats de la recherche
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<
    { title: string; description: string }[]
  >([]);

  // Configuration de Fuse.js
  const fuse = new Fuse(data, {
    keys: ["title", "description"], // Clés à rechercher dans l'objet
    threshold: 0.3, // Tolérance d'imprécision dans la recherche
    includeScore: true, // Inclure le score de pertinence
  });

  // Fonction pour gérer la recherche
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);

    if (searchQuery.trim() !== "") {
      const searchResults = fuse.search(searchQuery);
      setResults(searchResults.map((result) => result.item));
    } else {
      setResults([]); // Réinitialiser si la recherche est vide
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Rechercher..."
        value={query}
        onChange={handleSearch}
        style={{ padding: "8px", width: "100%", marginBottom: "10px" }}
      />

      <ul>
        {results.length > 0
          ? results.map((item, index) => (
              <li
                key={index}
                style={{ padding: "10px", borderBottom: "1px solid #ddd" }}
              >
                <strong>{item.title}</strong>
                <p>{item.description}</p>
              </li>
            ))
          : query && <p>Aucun résultat trouvé</p>}
      </ul>
    </div>
  );
};

export default SearchComponent;
