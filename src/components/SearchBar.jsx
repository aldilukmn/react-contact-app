import React from "react";
import PropTypes from "prop-types";

function SearchBar({ keyword, keywordChange }) {
    return (
        <input 
        type="text"
        className="search_bar"
        placeholder="Cari berdasarkan nama ..."
        value={keyword}
        onChange={(event) => keywordChange(event.target.value)} />
    )
}

SearchBar.propType = {
    keyword: PropTypes.string.isRequired,
    keywordChange: PropTypes.func.isRequired
}

export default SearchBar