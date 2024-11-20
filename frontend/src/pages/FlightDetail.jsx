import React, { useState, useEffect } from 'react';
import ExistingFlights from '../components/ExistingFlights';
import FlightForm from '../components/FlightForm';

const FlightDetail = () => {
  const [flights, setFlights] = useState([]);
  const [selectedFlight, setSelectedFlight] = useState(null);

  useEffect(() => {
    // Fetch flights from the JSON file
    const fetchFlights = async () => {
      try {
        const response = await fetch("/flights.json");
        const data = await response.json();
        setFlights(data);
      } catch (error) {
        console.error("Error fetching flights:", error);
      }
    };

    fetchFlights();
  }, []);

  const handleEdit = (flight) => {
    setSelectedFlight(flight); // Set the selected flight to populate the form
  };

  const handleAddOrUpdateFlight = (updatedFlight) => {
    if (selectedFlight) {
      // Update existing flight
      const updatedFlights = flights.map((flight) =>
        flight.flightNumber === selectedFlight.flightNumber
          ? { ...flight, ...updatedFlight }
          : flight
      );
      setFlights(updatedFlights);
    } else {
      // Add new flight
      setFlights((prevFlights) => [...prevFlights, updatedFlight]);
    }
    setSelectedFlight(null); // Reset the selected flight after submission
  };

  const handleDelete = (flightNumber) => {
    const updatedFlights = flights.filter(flight => flight.flightNumber !== flightNumber);
    setFlights(updatedFlights);
  };

  return (
    <div className="container my-4">
  <div className="row justify-content-center">
    <div className="col-md-10">
      <FlightForm
        flight={selectedFlight}
        onAddOrUpdateFlight={handleAddOrUpdateFlight}
      />
    </div>
  </div>
  <div className="row justify-content-center mt-4">
    <div className="col-md-10">
      <ExistingFlights
        flights={flights}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  </div>
</div>

  );
};

export default FlightDetail;
