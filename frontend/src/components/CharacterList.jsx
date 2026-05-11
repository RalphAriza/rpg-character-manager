import CharacterRow from "./CharacterRow";

function CharacterList({ characters, onDelete }) {
  return (
    <ul>
      {characters.map((character) => (
        <CharacterRow
          key={character._id}
          character={character}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default CharacterList;