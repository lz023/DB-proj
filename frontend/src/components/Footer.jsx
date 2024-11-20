import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-light py-4 shadow-sm border-top mt-auto">
      <div className="container text-center">
        <ul className="list-inline mb-0">
          <li className="list-inline-item">
            <Link to="/privacy-policy" className="text-decoration-none text-secondary">
              Privacy Policy
            </Link>
          </li>
          <li className="list-inline-item mx-3">
            <Link to="/terms-of-service" className="text-decoration-none text-secondary">
              Terms of Service
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to="/about" className="text-decoration-none text-secondary">
              About Us
            </Link>
          </li>
        </ul>
        <p className="mt-3 text-muted small">&copy; 2024 Flight Manager. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
