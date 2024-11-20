import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

const FlightForm = ({ flight, onAddOrUpdateFlight }) => {
  const [formData, setFormData] = useState({
    flightNumber: "",
    status: "on-time",
    departure: "",
  });

  useEffect(() => {
    if (flight) {
      setFormData({
        flightNumber: flight.flightNumber,
        status: flight.status,
        departure: new Date(flight.departure).toISOString().slice(0, 16),
      });
    } else {
      setFormData({
        flightNumber: "",
        status: "on-time",
        departure: "",
      });
    }
  }, [flight]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    if (!formData.flightNumber || !formData.status || !formData.departure) {
      toast.error("All fields are required!");
      return;
    }

    // Pass the updated flight to the parent
    onAddOrUpdateFlight(formData);

    toast.success(
      flight ? "Flight updated successfully!" : "Flight added successfully!"
    );

    // Reset form if adding a new flight
    if (!flight) {
      setFormData({
        flightNumber: "",
        status: "on-time",
        departure: "",
      });
    }
  };

  return (
    <div className="container p-4 border rounded bg-light shadow">
      <h4 className="text-center mb-4">
        {flight ? "Update Flight" : "Add Flight"}
      </h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="flightNumber" className="form-label">
            Flight Number
          </label>
          <input
            type="text"
            className="form-control"
            id="flightNumber"
            value={formData.flightNumber}
            onChange={handleChange}
            placeholder="Enter Flight Number"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="status" className="form-label">
            Flight Status
          </label>
          <select
            className="form-select"
            id="status"
            value={formData.status}
            onChange={handleChange}
            required
          >
            <option value="on-time">On Time</option>
            <option value="delayed">Delayed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="departure" className="form-label">
            Departure Time
          </label>
          <input
            type="datetime-local"
            className="form-control"
            id="departure"
            value={formData.departure}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          {flight ? "Update Flight" : "Add Flight"}
        </button>
      </form>
    </div>
  );
};

export default FlightForm;
