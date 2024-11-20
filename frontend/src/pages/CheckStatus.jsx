import React, { useState, useEffect } from "react";
import StatusSearchBar from "../components/StatusSearchBar";
import StatusResult from "../components/StatusResult";
import NoResult from "../components/NoResult";

const CheckStatus = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [flightData, setFlightData] = useState([]);
  const [filteredFlights, setFilteredFlights] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/flightData.json");
      const data = await response.json();
      setFlightData(data);
    };
    fetchData();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);

    const results = flightData.filter((flight) =>
      flight.flightNumber.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredFlights(results);
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Check Flight Status</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <StatusSearchBar onSearch={handleSearch} />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
          {filteredFlights.length > 0 ? (
            <StatusResult flights={filteredFlights} />
          ) : (
            searchQuery && <NoResult />
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckStatus;
