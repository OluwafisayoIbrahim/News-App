import PropTypes from "prop-types"; // Import PropTypes

const NavBar = ({ setCategory }) => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge bg-light text-dark fs-6">News</span>
        </a>
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
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => setCategory("technology")}
                style={{ cursor: "pointer" }}
              >
                Technology
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => setCategory("business")}
                style={{ cursor: "pointer" }}
              >
                Business
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => setCategory("health")}
                style={{ cursor: "pointer" }}
              >
                Health
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => setCategory("science")}
                style={{ cursor: "pointer" }}
              >
                Science
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => setCategory("sports")}
                style={{ cursor: "pointer" }}
              >
                Sports
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => setCategory("entertainment")}
                style={{ cursor: "pointer" }}
              >
                Entertainment
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

NavBar.propTypes = {
  setCategory: PropTypes.func.isRequired, // Add this line for the 'setCategory' prop
};

export default NavBar;
