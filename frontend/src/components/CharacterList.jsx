function CharacterList({ characters }) {
  return (
    <ul>
      {characters.map((character) => (
        <li key={character._id}>
          {character.name} — {character.classType} — Level {character.level}
        </li>
      ))}
    </ul>
  );
}

export default CharacterList;