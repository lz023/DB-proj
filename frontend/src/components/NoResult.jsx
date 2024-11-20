import React from "react";
import { FaSearch } from "react-icons/fa";

const NoResult = () => {
  return (
    <div
      id="noResults"
      className="card text-center shadow-sm border-0"
      style={{ maxWidth: "400px", margin: "20px auto" }}
    >
      <div className="card-body d-flex flex-column align-items-center p-4">
        <FaSearch size={50} className="text-secondary mb-3" />
        <h5 className="card-title text-danger">No Results Found</h5>
        <p className="card-text text-muted">
          No flight found matching your search query. Please try again.
        </p>
      </div>
    </div>
  );
};

export default NoResult;
