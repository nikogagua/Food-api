import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [searchInput, setSearchInput] = useState("");

  function handleInputChange(e) {
    setSearchInput(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    onSearch(searchInput);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for recipes..."
          value={searchInput}
          onChange={handleInputChange}
          className="search-bar"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </div>
    </form>
  );
}
