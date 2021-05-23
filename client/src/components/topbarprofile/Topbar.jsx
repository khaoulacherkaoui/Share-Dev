import "./topbar.css";
import { Search, Settings, Chat, Notifications ,Home } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext } from "react";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo"><img src="/assets/logo.png" alt="" className="logoImg" /></span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarIcons">
        <div className="topbarIconItem">
            <Link to="/"className="linkstyle" style={{ textDecoration: "none"  }}>
              <Home />
            </Link>
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
  );
}