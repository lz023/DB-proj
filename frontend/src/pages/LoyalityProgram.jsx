import React, { useState } from "react";
import { toast } from "react-toastify";

const LoyaltyProgram = () => {
  const [passengerName, setPassengerName] = useState("");
  const [email, setEmail] = useState("");
  const [emailCheck, setEmailCheck] = useState("");
  const [loyaltyPoints, setLoyaltyPoints] = useState(null);

  const handleEnrollment = (e) => {
    e.preventDefault();

    if (!passengerName || !email) {
      toast.error("All fields are required for enrollment.");
      return;
    }

    // Simulate successful enrollment
    toast.success(`Passenger ${passengerName} successfully enrolled.`);
    setPassengerName("");
    setEmail("");
  };

  const handleCheckPoints = (e) => {
    e.preventDefault();

    if (!emailCheck) {
      toast.error("Please enter your email address to check points.");
      return;
    }

    // Simulate loyalty points retrieval
    const points = Math.floor(Math.random() * 10000); // Generate random points
    setLoyaltyPoints(points);
    toast.success(`Loyalty points retrieved successfully.`);
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Loyalty Program</h2>

      {/* Enrollment Form */}
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="p-4 border rounded bg-light shadow">
            <h4>Enroll in Loyalty Program</h4>
            <form id="enrollmentForm" onSubmit={handleEnrollment}>
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
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-success">
                  Enroll
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Check Loyalty Points */}
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="p-4 border rounded bg-light shadow">
            <h4>Check Loyalty Points</h4>
            <form id="loyaltyCheckForm" onSubmit={handleCheckPoints}>
              <div className="mb-3">
                <label htmlFor="emailCheck" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="emailCheck"
                  placeholder="Enter Email Address"
                  value={emailCheck}
                  onChange={(e) => setEmailCheck(e.target.value)}
                />
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Check Points
                </button>
              </div>
            </form>
            {loyaltyPoints !== null && (
              <p
                id="loyaltyPoints"
                className="mt-3 text-success"
                style={{ display: 'block' }}
              >
                Loyalty Points: {loyaltyPoints}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoyaltyProgram;
