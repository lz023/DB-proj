import React, { useState } from "react";

const StatusSearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="card shadow-sm p-4 mb-4">
      <h5 className="card-title text-center mb-3">Search Flight Status</h5>
      <div className="input-group">
        <input
          type="text"
          placeholder="Enter flight number"
          value={query}
          onChange={handleInputChange}
          className="form-control"
        />
        <button
          onClick={handleSearch}
          className="btn btn-primary"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default StatusSearchBar;
