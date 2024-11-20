import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div
      className="text-center"
      style={{
        marginTop: "50px",
        padding: "20px 10px",
      }}
    >
      <h2 className="mb-3 text-primary" style={{ fontWeight: "bold" }}>
        Find Your Flight Status
      </h2>
      <p className="mb-4 text-muted" style={{ fontSize: "1.1rem" }}>
        Search airline, city, or flight number
      </p>
      <div className="input-group mx-auto" style={{ maxWidth: "600px" }}>
        <input
          type="text"
          className="form-control border-primary"
          placeholder="Search flight status..."
          id="flightSearch"
          style={{
            borderRadius: "30px 0 0 30px",
            padding: "12px 20px",
            fontSize: "1.1rem",
          }}
        />
        <button
          className="btn btn-primary"
          id="searchButton"
          style={{
            borderRadius: "0 30px 30px 0",
            padding: "12px 20px",
          }}
        >
          <FaSearch size={20} />
        </button>
      </div>
      <div className="mt-4">
        <button
          className="btn btn-outline-primary me-2 shadow-sm"
          style={{
            borderRadius: "30px",
            padding: "10px 20px",
            fontSize: "1rem",
          }}
        >
          Departures
        </button>
        <button
          className="btn btn-outline-primary shadow-sm"
          style={{
            borderRadius: "30px",
            padding: "10px 20px",
            fontSize: "1rem",
          }}
        >
          Arrivals
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
