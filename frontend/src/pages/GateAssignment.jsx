import React, { useState } from "react";
import { toast } from "react-toastify";

const GateAssignment = () => {
  const [flightNumber, setFlightNumber] = useState("");
  const [gateNumber, setGateNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mimic form validation and submission logic
    if (!flightNumber || !gateNumber) {
      toast.error("Please fill in both fields to assign a gate.");
      return;
    }

    // Simulate successful assignment
    toast.success(`Gate ${gateNumber} assigned to flight ${flightNumber}.`);

    // Clear form fields after submission
    setFlightNumber("");
    setGateNumber("");
  };

  return (
    <div className="container my-5">
      <div className="row text-center mb-4">
        <div className="col">
          <h2 className="fw-bold">Gate Assignment</h2>
          <p className="text-muted">Assign gates to flights easily and efficiently.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-8 mx-auto">
          <div className="card shadow-sm">
            <div className="card-body">
              <form id="gateAssignmentForm" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="flightNumber" className="form-label">
                    Flight Number
                  </label>
                  <input
                    type="text"
                    id="flightNumber"
                    className="form-control"
                    placeholder="Enter Flight Number"
                    value={flightNumber}
                    onChange={(e) => setFlightNumber(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="gateNumber" className="form-label">
                    Gate Number
                  </label>
                  <input
                    type="text"
                    id="gateNumber"
                    className="form-control"
                    placeholder="Enter Gate Number"
                    value={gateNumber}
                    onChange={(e) => setGateNumber(e.target.value)}
                    required
                  />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                    Assign Gate
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GateAssignment;
