import './topbar.css';
import { Search, Person, Chat, Notifications, Settings } from "@material-ui/icons";
import { useTheme, useMediaQuery } from '@material-ui/core'
import SimpleMenu from '../menu/Menu';

export default function Topbar() {
  //responsive using BreakPoints
  const theme=useTheme();
  const isMatch=useMediaQuery(theme.breakpoints.down('sm'));
    return (
    <div className="topbarContainer">
      <div className="topbarLeft">
              <img className="logo" src="/assets/logo.png"/>
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
              <Person />
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <Chat />
              <span className="topbarIconBadge">2</span>
            </div>
            <div className="topbarIconItem">
              <Notifications />
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <Settings />
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}
