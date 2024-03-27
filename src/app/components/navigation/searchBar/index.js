import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./searchBar.module.css";
// import './SearchBar.css';

function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    // Update the parent component
  };

  return (
    <div className={styles.inputWrapper}>
      <FaSearch className={styles.searchicon} />
      <input
        type="text"
        className={styles.input}
        placeholder="Search"
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default SearchBar;
