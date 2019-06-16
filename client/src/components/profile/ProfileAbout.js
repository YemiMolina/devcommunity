import React, { Component } from "react";
import isEmpty from "../../validation/is_empty";

class ProfileAbout extends Component {
  render() {
    const { profile } = this.props;

    //Get first name
    const firstName = profile.user.name.trim().split(" ")[0];

    //Skill List
    const skills = profile.skills.map((skill, index) => (
      <div key={index} className="p-3">
        <i className="fa fa-check" /> {skill}
      </div>
    ));

    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-light mb-3">
            <h3 className="text-center text-info">{firstName}'s Bio</h3>
            <p className="lead text-center">
              {isEmpty(profile.bio) ? (
                <span>{firstName} does not have a bio</span>
              ) : (
                <span>{profile.bio}</span>
              )}
            </p>
            <hr />
            <h3 className="text-center text-info">Skill Set</h3>
            <div className="row" style={{ margin: "0 auto" }}>
              {skills}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileAbout;
