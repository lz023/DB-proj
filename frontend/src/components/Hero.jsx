import React from "react";

const Hero = () => {
  return (
    <div className="container-fluid bg-primary text-white py-5 shadow-sm">
      <div className="row justify-content-center">
        <div className="col-10 text-center">
          <h2 className="fw-bold">Welcome to the Airport Management System</h2>
          <p className="mt-3 fs-5">
            Stay updated with flight statuses, book tickets, manage passengers, and more!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
