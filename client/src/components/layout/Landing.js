import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import Cookies from "../common/Cookies";

class Landing extends Component {
  render() {
    let container = null;
    if (this.props.auth.isAuthenticated) {
      container = (
        <div className="col-md-12 text-center">
          <h1 className="display-4 mb-4">Enjoy customizing your profile</h1>
          <Link to="/dashboard" className="btn btn-lg btn-info mr-2">
            Dashboard
          </Link>
        </div>
      );
    } else {
      container = (
        <div className="col-md-12 text-center">
          <h1 className="display-3 mb-4">
            Welcome to your Developer's community{" "}
          </h1>
          <p className="lead">
            Create a profile, share posts and get help from other developers
          </p>
          <hr />
          <Link to="/register" className="btn btn-lg btn-info mr-2">
            Sign Up
          </Link>
          <Link to="/login" className="btn btn-lg btn-light">
            Login
          </Link>
        </div>
      );
    }

    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row" />
            {container}
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps)(Landing);
