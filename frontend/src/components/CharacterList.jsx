function CharacterList({ characters, onDelete }) {
  return (
    <ul>
      {characters.map((character) => (
        <li key={character._id}>
          {character.name} — {character.classType} — Level {character.level}

          <button onClick={() => onDelete(character._id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default CharacterList;