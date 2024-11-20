import React, { useState } from "react";

const PayrollSearch = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query.trim().toLowerCase());
  };

  return (
    <div className="p-4 border rounded bg-light shadow">
      <h4 className="text-center mb-4">Search Staff Payroll</h4>
      <form onSubmit={handleSearch}>
        <div className="mb-3">
          <label htmlFor="searchQuery" className="form-label">
            Enter Staff Name or Role
          </label>
          <input
            type="text"
            className="form-control"
            id="searchQuery"
            placeholder="Search by staff name or role"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            required
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default PayrollSearch;
