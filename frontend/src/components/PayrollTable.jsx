import React from "react";

const PayrollTable = ({ payroll }) => {
  const calculateTotalPay = (salary, bonus) => salary + bonus;

  return (
    <div className="p-4 border rounded bg-light shadow mt-4">
      <h4>Staff Payroll:</h4>
      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>Staff Name</th>
            <th>Role</th>
            <th>Salary</th>
            <th>Bonus</th>
            <th>Total Pay</th>
          </tr>
        </thead>
        <tbody>
          {payroll.map((staff, index) => (
            <tr key={index}>
              <td>{staff.name}</td>
              <td>{staff.role}</td>
              <td>${staff.salary}</td>
              <td>${staff.bonus}</td>
              <td>${calculateTotalPay(staff.salary, staff.bonus)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PayrollTable;
