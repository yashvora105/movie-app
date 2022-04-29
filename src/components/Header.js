import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
import { IC_ARROW } from "../images/index";

const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {props?.arrowimage && (
          <div className="navbar-brand">
            <img
              className="img"
              style={{ width: "25px" }}
              src={IC_ARROW}
              alt=""
              onClick={props?.onClick}
            ></img>
          </div>
        )}

        <a className="navbar-brand" href="/">
          {props.name}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        ></div>
      </div>
    </nav>
  );
};

Header.propTypes = {
  name: PropTypes.string,
  arrowimage: PropTypes.bool,
};

Header.defaultProps = {
  name: "Pop Movies",
  arrowimage: false,
};

export default Header;
