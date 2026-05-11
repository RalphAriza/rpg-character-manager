import { useEffect, useState } from "react";
import "./App.css";
import CharacterList from "./components/CharacterList";

function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchCharacters = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/api/characters");

      if (!response.ok) {
        throw new Error("Failed to fetch characters");
      }

      const data = await response.json();
      setCharacters(data);
      setError("");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  if (loading) return <p>Loading characters...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main>
      <h1>RPG Character Manager</h1>

      <CharacterList characters={characters} />
    </main>
  );
}

export default App;