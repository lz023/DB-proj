import React from "react";

const ResultEntry = ({ flight }) => {
  return (
    <div className="card shadow-sm border-0 mb-4">
      <div className="card-body">
        <h5 className="card-title text-primary">
          Flight Number: <span className="text-dark">{flight.flightNumber}</span>
        </h5>
        <ul className="list-unstyled">
          <li>
            <strong>Status:</strong> {flight.status}
          </li>
          <li>
            <strong>Departure:</strong> {new Date(flight.departure).toLocaleString()}
          </li>
          <li>
            <strong>Arrival:</strong> {new Date(flight.arrival).toLocaleString()}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ResultEntry;
