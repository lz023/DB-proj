import React, { useState } from "react";
import { toast } from "react-toastify";

const CheckIn = () => {
  const [passengerName, setPassengerName] = useState("");
  const [flightNumber, setFlightNumber] = useState("");
  const [seatNumber, setSeatNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation and submission logic
    if (!passengerName || !flightNumber || !seatNumber) {
      toast.error("All fields are required for check-in.");
      return;
    }

    // Simulate successful check-in
    toast.success(
      `Passenger ${passengerName} checked in successfully for flight ${flightNumber}, Seat ${seatNumber}.`
    );

    // Clear the form fields
    setPassengerName("");
    setFlightNumber("");
    setSeatNumber("");
  };

  return (
    <div className="container my-5">
      <div className="row text-center mb-4">
        <div className="col">
          <h2 className="fw-bold">Passenger Check-In</h2>
          <p className="text-muted">Quickly check-in passengers for their flights.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-8 mx-auto">
          <div className="card shadow-sm">
            <div className="card-body">
              <form id="checkInForm" onSubmit={handleSubmit}>
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
                    required
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
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="seatNumber" className="form-label">
                    Seat Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="seatNumber"
                    placeholder="Enter Seat Number"
                    value={seatNumber}
                    onChange={(e) => setSeatNumber(e.target.value)}
                    required
                  />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                    Check In
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

export default CheckIn;
