import './profilebar.css';
import { Search, Person, Chat, Notifications, Settings } from "@material-ui/icons";

export default function Profilebar() {
  //responsive using BreakPoints

    return (
    <div className="topbarContainer">
        <div className="topbarRight">
            <div className="leftbar">
                <img className="logo" src="/assets/logo.png"/>
                <div className="searchbar">
                    <Search className="searchIcon" />
                    <input
                            placeholder="Search for friend, post or video"
                            className="searchInput"
                    />
                </div>
            </div>
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
    )
}
