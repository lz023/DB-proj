import React from "react";

const About = () => {
  return (
    <div className="container my-5">
      {/* About Section */}
      <div className="row text-center mb-4">
        <div className="col">
          <h2 className="fw-bold">About Us</h2>
          <p className="text-muted">
            Learn more about the services and features offered by our airport.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-8 mx-auto">
          <div
            className="card shadow-sm mb-5"
            style={{
              backgroundColor: "#f9f9f9",
              padding: "20px",
              borderRadius: "10px",
              border: "1px solid #ddd",
            }}
          >
            <div className="card-body">
              <p className="mb-0">
                We are dedicated to providing world-class services, including
                flight management, passenger support, and staff coordination. Our
                mission is to ensure a seamless experience for all travelers and
                staff.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="row text-center mb-4">
        <div className="col">
          <h2 className="fw-bold">Contact Information</h2>
          <p className="text-muted">If you have any queries, reach out to us.</p>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-8 mx-auto">
          <div
            className="card shadow-sm"
            style={{
              backgroundColor: "#f9f9f9",
              padding: "20px",
              borderRadius: "10px",
              border: "1px solid #ddd",
            }}
          >
            <div className="card-body">
              <p>Email: <strong>support@airport.com</strong></p>
              <p>Phone: <strong>+123 456 7890</strong></p>
              <form>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>
                <div className="d-grid">
                  <button className="btn btn-primary">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
