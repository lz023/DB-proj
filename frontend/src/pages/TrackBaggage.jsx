import React, { useState } from "react";
import { toast } from "react-toastify";


const TrackBaggage = () => {
  const [passengerName, setPassengerName] = useState("");
  const [flightNumber, setFlightNumber] = useState("");
  const [baggageID, setBaggageID] = useState("");
  const [trackBaggageID, setTrackBaggageID] = useState("");
  const [baggageStatus, setBaggageStatus] = useState("");

  const handleLogBaggage = (e) => {
    e.preventDefault();

    if (!passengerName || !flightNumber || !baggageID) {
      toast.error("All fields are required to log baggage.");
      return;
    }

    toast.success(
      `Baggage with ID ${baggageID} logged successfully for passenger ${passengerName} on flight ${flightNumber}.`
    );

    setPassengerName("");
    setFlightNumber("");
    setBaggageID("");
  };

  const handleTrackBaggage = () => {
    if (!trackBaggageID) {
      toast.error("Please enter a Baggage ID to track.");
      return;
    }

    setBaggageStatus("In Transit");
    toast.success(`Baggage with ID ${trackBaggageID} is currently in transit.`);
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Baggage Tracking</h2>

      {/* Baggage Logging Form */}
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form id="baggageForm" onSubmit={handleLogBaggage} className="p-4 border rounded bg-light shadow">
            <div className="mb-3">
              <label htmlFor="passengerName" className="form-label">
                Passenger Name
              </label>
              <input
                type="text"
                className="form-control"
                id="passengerName"
                placeholder="Enter Passenger Name"
                value={passengerName}
                onChange={(e) => setPassengerName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="flightNumber" className="form-label">
                Flight Number
              </label>
              <input
                type="text"
                className="form-control"
                id="flightNumber"
                placeholder="Enter Flight Number"
                value={flightNumber}
                onChange={(e) => setFlightNumber(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="baggageID" className="form-label">
                Baggage ID
              </label>
              <input
                type="text"
                className="form-control"
                id="baggageID"
                placeholder="Enter Baggage ID"
                value={baggageID}
                onChange={(e) => setBaggageID(e.target.value)}
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-success">
                Log Baggage
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Baggage Tracking Section */}
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="p-4 border rounded bg-light shadow">
            <h4>Track Baggage</h4>
            <div className="mb-3">
              <label htmlFor="trackBaggageID" className="form-label">
                Baggage ID
              </label>
              <input
                type="text"
                className="form-control"
                id="trackBaggageID"
                placeholder="Enter Baggage ID to Track"
                value={trackBaggageID}
                onChange={(e) => setTrackBaggageID(e.target.value)}
              />
            </div>
            <div className="d-grid">
              <button
                id="trackButton"
                className="btn btn-primary"
                onClick={handleTrackBaggage}
              >
                Track
              </button>
            </div>
            {baggageStatus && (
              <p className="mt-3 text-success">Baggage Status: {baggageStatus}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackBaggage;
