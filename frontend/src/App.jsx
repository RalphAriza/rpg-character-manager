import { useEffect, useState } from "react";
import "./App.css";
import CharacterList from "./components/CharacterList";
import CharacterForm from "./components/CharacterForm";
import SearchFilter from "./components/SearchFilter";
import backgroundImage from "./assets/rpg-background.jpg";

function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [classFilter, setClassFilter] = useState("");
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await fetch("http://localhost:5000/api/users");
    const data = await response.json();
    setUsers(data);
  };
  
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

  const updateCharacter = async (id, updatedData) => {
    const response = await fetch(`http://localhost:5000/api/characters/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      alert("Failed to update character");
      return;
    }

    fetchCharacters();
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
    fetchUsers();
    fetchCharacters();

    const intervalId = setInterval(() => {
      fetchCharacters();
    }, 180000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  if (loading) return <p>Loading characters...</p>;
  if (error) return <p>{error}</p>;

  const filteredCharacters = characters.filter((character) => {
    const matchesName = character.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesClass =
      classFilter === "" || character.classType === classFilter;

    return matchesName && matchesClass;
  });

  return (
    <main
      style={{
        backgroundImage: `linear-gradient(
          rgba(0,0,0,0.72),
          rgba(0,0,0,0.82)
        ), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <h1>RPG Character Manager</h1>

      <CharacterForm onCharacterCreated={fetchCharacters} users={users}/>

      <SearchFilter
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        classFilter={classFilter}
        onClassFilterChange={setClassFilter}
      />

      <CharacterList
        characters={filteredCharacters}
        onDelete={deleteCharacter}
        onUpdate={updateCharacter}
      />
    </main>
  );
}

export default App;