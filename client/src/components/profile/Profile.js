import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';
import ProfileExperience from './ProfileExperience';
import ProfileEducation from './ProfileEducation';
import ProfileGithub from './ProfileGithub';
import { getProfileById } from '../../actions/profile';
import { Chat } from "@material-ui/icons";
//import Navbar from '../layout/Navbar';
import Topbar from '../topbarprofile/Topbar';
import Feed from '../feed/Feed'

const Profile = ({ getProfileById, profile: { profile }, auth, match }) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);

  return (
    <Fragment>
      <Topbar/>
      <br/>
      {profile === null ? (
        <Spinner />
      ) : (
        <Fragment>
          
          
            <ProfileTop profile={profile} />
            <hr className="Hr"/>
            <br/>
            <nav>
              <ul className="nav nav-tabs">
                <li className="nav-item"><a className="nav-link active" href="#feed">Posts</a></li>
                <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                <li className="nav-item"><a className="nav-link" href="#friends">Friends</a></li>
                <li className="nav-item"><Link to="/profiles" className="nav-link">Developers</Link></li>
                <li><Link to="/dashboard" className="nav-link">{' '}
                  <span className="hide-sm">Dashboard</span></Link>
                </li>
                <Link to="/profiles" >
                <button className="backbtn">Back To Profiles</button>
                </Link>
                {auth.isAuthenticated &&
                  auth.loading === false &&
                  auth.user._id === profile.user._id && (
                  <Link to="/edit-profile" >
                    <button className="editbtn">Edit Profile</button>
                  </Link>
                )}
              </ul>
            </nav>
            
            <div className="back">
              <div className="profile-grid my-1 ">
                <div className="profile-grid my-1 "> 
                  <ProfileAbout profile={profile} />
                  <div className="profile-exp bg-white p-2">
            
                    <h2 className="text-primary">Experience</h2>
                      {profile.experience.length > 0 ? (
                      <Fragment>
                        {profile.experience.map((experience) => (
                    <ProfileExperience
                      key={experience._id}
                      experience={experience}
                    />
                  ))}
                </Fragment>
              ) : (
                <h4>No experience credentials</h4>
              )}
            </div>

            <div className="profile-edu bg-white p-2">
              <h2 className="text-primary">Education</h2>
              {profile.education.length > 0 ? (
                <Fragment>
                  {profile.education.map((education) => (
                    <ProfileEducation
                      key={education._id}
                      education={education}
                    />
                  ))}
                </Fragment>
              ) : (
                <h4>No education credentials</h4>
              )}
            </div>

            {profile.githubusername && (
              <ProfileGithub username={profile.githubusername} />
            )}
          </div><Feed id="feed"/>
          <button className="chatIcon" ><Chat/></button></div></div>
        </Fragment>
      )}
    </Fragment>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, { getProfileById })(Profile);
