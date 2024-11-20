import React from "react";

const FlightEntry = ({ flight, onEdit, onDelete }) => {
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="card-title">Flight: {flight.flightNumber}</h5>
        <p className="card-text">
          <strong>Status:</strong> {flight.status}
        </p>
        <p className="card-text">
          <strong>Departure:</strong> {new Date(flight.departure).toLocaleString()}
        </p>
        <div className="d-flex justify-content-between">
          <button
            className="btn btn-warning btn-sm"
            onClick={() => onEdit(flight)}
          >
            Edit
          </button>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => onDelete(flight.flightNumber)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlightEntry;
