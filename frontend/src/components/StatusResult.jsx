import React from "react";
import ResultEntry from "./ResultEntry";

const StatusResult = ({ flights }) => {
  return (
    <div className="container my-4">
      <div className="card shadow-sm">
        <div className="card-body">
          <h4 className="card-title mb-3 text-center">Flight Status</h4>
          <div className="row">
            {flights.map((flight) => (
              <div key={flight.flightNumber} className="col-md-6">
                <ResultEntry flight={flight} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusResult;
