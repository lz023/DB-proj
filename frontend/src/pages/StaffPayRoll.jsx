import React, { useState, useEffect } from "react";
import PayrollSearch from "../components/PayrollSearch";
import PayrollTable from "../components/PayrollTable";
import NoResult from "../components/NoResult";
import { toast } from "react-toastify";

const StaffPayroll = () => {
  const [staffPayroll, setStaffPayroll] = useState([]);
  const [filteredPayroll, setFilteredPayroll] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch payroll data from the JSON file in the public directory
    const fetchData = async () => {
      try {
        const response = await fetch("/staffPayroll.json");
        const data = await response.json();
        setStaffPayroll(data);
        setFilteredPayroll(data);
        setLoading(false);
      } catch (error) {
        toast.error("Failed to load staff payroll.");
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSearch = (query) => {
    if (!query) {
      setFilteredPayroll(staffPayroll);
      return;
    }

    const filtered = staffPayroll.filter(
      (staff) =>
        staff.name.toLowerCase().includes(query) ||
        staff.role.toLowerCase().includes(query)
    );

    if (filtered.length === 0) {
      toast.info("No matching staff found.");
    }

    setFilteredPayroll(filtered);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Staff Payroll</h2>
      <PayrollSearch onSearch={handleSearch} />
      {filteredPayroll.length > 0 ? (
        <PayrollTable payroll={filteredPayroll} />
      ) : (
        <NoResult />
      )}
    </div>
  );
};

export default StaffPayroll;
