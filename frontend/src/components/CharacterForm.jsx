import { useState } from "react";

function CharacterForm({ onCharacterCreated }) {
  const [formData, setFormData] = useState({
    name: "",
    classType: "Warrior",
    level: 1,
    health: 100,
    mana: 50,
    strength: 5,
    intelligence: 5,
    agility: 5,
    userId: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]:
        event.target.type === "number"
          ? Number(event.target.value)
          : event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validation
    if (!formData.name.trim()) {
      alert("Character name is required");
      return;
    }

    if (formData.level < 1 || formData.level > 100) {
      alert("Level must be between 1 and 100");
      return;
    }

    if (formData.health < 0) {
      alert("Health cannot be negative");
      return;
    }
    
    const response = await fetch("http://localhost:5000/api/characters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      alert("Failed to create character");
      return;
    }

    onCharacterCreated();

    setFormData({
      name: "",
      classType: "Warrior",
      level: 1,
      health: 100,
      mana: 50,
      strength: 5,
      intelligence: 5,
      agility: 5,
      userId: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Character</h2>

      <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} />

      <select name="classType" value={formData.classType} onChange={handleChange}>
        <option>Warrior</option>
        <option>Mage</option>
        <option>Archer</option>
        <option>Assassin</option>
        <option>Priest</option>
      </select>

      <input name="level" type="number" value={formData.level} onChange={handleChange} />
      <input name="health" type="number" value={formData.health} onChange={handleChange} />
      <input name="mana" type="number" value={formData.mana} onChange={handleChange} />
      <input name="strength" type="number" value={formData.strength} onChange={handleChange} />
      <input name="intelligence" type="number" value={formData.intelligence} onChange={handleChange} />
      <input name="agility" type="number" value={formData.agility} onChange={handleChange} />

      <input
        name="userId"
        placeholder="User ID"
        value={formData.userId}
        onChange={handleChange}
      />

      <button type="submit">Create</button>
    </form>
  );
}

export default CharacterForm;