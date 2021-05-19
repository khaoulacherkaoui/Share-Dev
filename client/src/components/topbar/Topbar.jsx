import './topbar.css';
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useTheme, useMediaQuery } from '@material-ui/core'
import { Link } from "react-router-dom";
import SimpleMenu from '../menu/Menu';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {logout} from '../../actions/auth';

const Topbar=({ auth: {isAuthenticated, loading}, logout})=> {
  //responsive using BreakPoints
  const theme=useTheme();
  const isMatch=useMediaQuery(theme.breakpoints.down('sm'));
    return (
    <div className="topbarContainer">
      <div className="topbarLeft">
      <Link to="/" className="link">
              <img className="logo" src="/assets/logo.png"/>
              </Link>
              {isMatch ? <SimpleMenu/> : (
                <div className="searchbar">
                  <Search className="searchIcon" />
                  <input
                    placeholder="Search for friend, post or video"
                    className="searchInput"
                  />
                </div>
              )}
      </div>
      <div className="topbarRightContainer">
        <div className="topbarRight">
          <div className="topbarIcons">
            <div className="topbarIconItem">
            <Link to="/profile"  className="link">
              <Person />
              </Link>
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
            <Link to="/messenger" className="link">
              <Chat />
              </Link>
              <span className="topbarIconBadge">2</span>
            </div>
            <div className="topbarIconItem">
              <Notifications />
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <Link to='/login'>
              { !loading && (
                <button onClick={logout} type="button" className="logout">
                <ExitToAppIcon />
              </button>
              )}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

Topbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
}
const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, {logout})(Topbar)