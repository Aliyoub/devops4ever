import { useState, useEffect, ChangeEvent } from "react";
import Fuse from "fuse.js";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../../app/styles.css"; // Assurez-vous d'avoir un fichier CSS pour les animations

interface SearchComponentProps {
  data: { parent: string }[];
  // data: { parent: string; children: string }[];
}

const SearchComponent = ({ data }: SearchComponentProps) => {
  // État pour stocker les résultats de la recherche
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<
    { parent: string }[]
    // { parent: string; children: string }[]
  >([]);

  // Configuration de Fuse.js
  const fuse = new Fuse(data, {
    keys: ["parent"], // Clés à rechercher dans l'objet
    // keys: ["parent", "children"], // Clés à rechercher dans l'objet
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

      <TransitionGroup component="ul">
        {results.length > 0
          ? results.map((item, index) => (
              <CSSTransition key={index} timeout={500} classNames="fade">
                <li style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                  <strong>{item.parent}</strong>
                  {/* <p>{item.description}</p> */}
                </li>
              </CSSTransition>
            ))
          : query && (
              <CSSTransition key="no-results" timeout={500} classNames="fade">
                <p>Aucun résultat trouvé</p>
              </CSSTransition>
            )}
      </TransitionGroup>
    </div>
  );
};

export default SearchComponent;
