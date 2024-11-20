import React, { useState, useEffect } from "react";
import ScheduleSearch from "../components/ScheduleSearch";
import ScheduleTable from "../components/ScheduleTable";
import NoResult from "../components/NoResult";
import { toast } from "react-toastify";

const StaffScheduling = () => {
  const [staffSchedule, setStaffSchedule] = useState([]);
  const [filteredSchedule, setFilteredSchedule] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the staff schedule data from the public directory
    const fetchData = async () => {
      try {
        const response = await fetch("/staffSchedule.json");
        const data = await response.json();
        setStaffSchedule(data);
        setFilteredSchedule(data);
        setLoading(false);
      } catch (error) {
        toast.error("Failed to load staff schedule.");
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSearch = (query) => {
    if (!query) {
      setFilteredSchedule(staffSchedule);
      return;
    }

    const filtered = staffSchedule.filter(
      (staff) =>
        staff.name.toLowerCase().includes(query) ||
        staff.role.toLowerCase().includes(query)
    );

    if (filtered.length === 0) {
      toast.info("No matching staff found.");
    }

    setFilteredSchedule(filtered);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Staff Scheduling</h2>
      <ScheduleSearch onSearch={handleSearch} />
      {filteredSchedule.length > 0 ? (
        <ScheduleTable schedule={filteredSchedule} />
      ) : (
        <NoResult />
      )}
    </div>
  );
};

export default StaffScheduling;
