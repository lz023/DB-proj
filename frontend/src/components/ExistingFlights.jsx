import React from "react";
import FlightEntry from "./FlightEntry";

const ExistingFlights = ({ flights, onEdit, onDelete }) => {
  return (
    <div className="container p-4 border rounded bg-light shadow mt-4">
      <h3 className="text-center mb-4">Existing Flights</h3>
      <div className="row">
        {flights.map((flight) => (
          <div className="col-md-4 mb-4" key={flight.flightNumber}>
            <FlightEntry
              flight={flight}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExistingFlights;
