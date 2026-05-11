function SearchFilter({ searchTerm, onSearchChange }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search by character name..."
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
      />
    </div>
  );
}

export default SearchFilter;