function CharacterRow({ character, onDelete }) {
  return (
    <li>
      {character.name} — {character.classType} — Level {character.level}

      <button onClick={() => onDelete(character._id)}>Delete</button>
      <button>Edit</button>
    </li>
  );
}

export default CharacterRow;