import { useState, ChangeEvent } from "react";
import Fuse from "fuse.js";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../../app/styles.css"; // Assurez-vous d'avoir un fichier CSS pour les animations

interface SearchComponentProps {
  data: { parent: string }[];
}

const SearchComponent = ({ data }: SearchComponentProps) => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<{ parent: string }[]>([]);

  const fuse = new Fuse(data, {
    keys: ["parent"],
    threshold: 0.3,
    includeScore: true,
  });

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);

    if (searchQuery.trim()) {
      const searchResults = fuse.search(searchQuery);
      setResults(searchResults.map((result) => result.item));
    } else {
      setResults([]);
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
                </li>
              </CSSTransition>
            ))
          : query && (
              <CSSTransition key="no-results" timeout={500} classNames="fade">
                <li>Aucun résultat trouvé</li>
              </CSSTransition>
            )}
      </TransitionGroup>
    </div>
  );
};

export default SearchComponent;
