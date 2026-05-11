import { useEffect, useState } from "react";
import "./App.css";
import CharacterList from "./components/CharacterList";
import CharacterForm from "./components/CharacterForm";

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

  const deleteCharacter = async (id) => {
    const confirmDelete = window.confirm("Delete this character?");

    if (!confirmDelete) return;

    const response = await fetch(`http://localhost:5000/api/characters/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      alert("Failed to delete character");
      return;
    }

    fetchCharacters();
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  if (loading) return <p>Loading characters...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main>
      <h1>RPG Character Manager</h1>

      <CharacterForm onCharacterCreated={fetchCharacters} />

      <CharacterList characters={characters} onDelete={deleteCharacter} />
    </main>
  );
}

export default App;