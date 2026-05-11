import CharacterRow from "./CharacterRow";

function CharacterList({ characters, onDelete, onUpdate }) {
  return (
    <ul>
      {characters.map((character) => (
        <CharacterRow
          key={character._id}
          character={character}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </ul>
  );
}

export default CharacterList;