import { useState } from "react";

function CharacterRow({ character, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [level, setLevel] = useState(character.level);
  const [health, setHealth] = useState(character.health);

  const handleSave = async () => {
    await onUpdate(character._id, {
      level: Number(level),
      health: Number(health),
    });

    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <li>
        {character.name} — {character.classType}

        <input
          type="number"
          value={level}
          onChange={(event) => setLevel(event.target.value)}
        />

        <input
          type="number"
          value={health}
          onChange={(event) => setHealth(event.target.value)}
        />

        <button onClick={handleSave}>Save</button>
        <button onClick={() => setIsEditing(false)}>Cancel</button>
      </li>
    );
  }

  return (
    <li>
      <span>{character.name}</span>
      <span>{character.classType}</span>
      <span>Level {character.level} | HP {character.health}</span>

      <div className="character-actions">
        <button onClick={() => setIsEditing(true)}>Edit</button>
        <button onClick={() => onDelete(character._id)}>Delete</button>
      </div>
    </li>
  );
}

export default CharacterRow;