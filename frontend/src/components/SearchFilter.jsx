function SearchFilter({ searchTerm, onSearchChange, classFilter, onClassFilterChange }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search by character name..."
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
      />

      <select
        value={classFilter}
        onChange={(event) => onClassFilterChange(event.target.value)}
      >
        <option value="">All classes</option>
        <option value="Warrior">Warrior</option>
        <option value="Mage">Mage</option>
        <option value="Archer">Archer</option>
        <option value="Assassin">Assassin</option>
        <option value="Priest">Priest</option>
      </select>
    </div>
  );
}

export default SearchFilter;