import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm border-bottom">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          Flight Manager
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* Flights Dropdown */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="flightsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Flights
              </Link>
              <ul className="dropdown-menu" aria-labelledby="flightsDropdown">
                <li>
                  <Link className="dropdown-item" to="/edit-flight">
                    Edit Flight Status
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/check-status">
                    Check Flight Status
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/gate-assignment">
                    Gate Assignment
                  </Link>
                </li>
              </ul>
            </li>

            {/* Passenger Management Dropdown */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="passengerDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Passenger Management
              </Link>
              <ul className="dropdown-menu" aria-labelledby="passengerDropdown">
                <li>
                  <Link className="dropdown-item" to="/checkIn">
                    Check-in
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/track-baggage">
                    Baggage Tracking
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/loyality-program">
                    Loyalty Program
                  </Link>
                </li>
              </ul>
            </li>

            {/* Staff Management Dropdown */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="staffDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Staff Management
              </Link>
              <ul className="dropdown-menu" aria-labelledby="staffDropdown">
                <li>
                  <Link className="dropdown-item" to="/scheduling">
                    Scheduling
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/staff-payroll">
                    Payroll
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/staff-communication">
                    Staff Communication
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
