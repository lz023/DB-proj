import React from "react";

const ScheduleTable = ({ schedule }) => {
  return (
    <div className="p-4 border rounded bg-light shadow mt-4">
      <h4>Staff Schedule:</h4>
      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>Staff Name</th>
            <th>Role</th>
            <th>Shift Start</th>
            <th>Shift End</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((staff, index) => (
            <tr key={index}>
              <td>{staff.name}</td>
              <td>{staff.role}</td>
              <td>{new Date(staff.shiftStart).toLocaleString()}</td>
              <td>{new Date(staff.shiftEnd).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScheduleTable;
