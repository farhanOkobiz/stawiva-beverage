import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BradCumbs = ({ title = "", brad = "", className = "" }) => {
  return (
    <div className={`w-full py-6 bg-transparent ${className}`}>
      <div className="container mx-auto px-4">
        {title ? (
          <h2 className="text-2xl font-bold capitalize">{title}</h2>
        ) : null}
        {brad ? (
          <nav className="text-sm text-gray-600 mt-2">
            <Link to="/">Home</Link>
            <span className="mx-2">/</span>
            <span className="capitalize">{brad}</span>
          </nav>
        ) : null}
      </div>
    </div>
  );
};

BradCumbs.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  brad: PropTypes.string,
  className: PropTypes.string,
};

export default BradCumbs;
