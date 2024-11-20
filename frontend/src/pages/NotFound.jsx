import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <section className="d-flex flex-column justify-content-center align-items-center min-vh-100 mt-4">
      <FaExclamationTriangle className="text-warning fs-1 mb-4" />
      <h1 className="display-1 fw-bold mb-4">404 Not Found</h1>
      <p className="fs-3 mb-5">This page does not exist</p>
      <Link
        to="/"
        className="btn btn-primary btn-lg mt-4"
      >
        Go Back
      </Link>
    </section>
  );
};

export default NotFoundPage;
