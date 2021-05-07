import './menu.css';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import GroupIcon from '@material-ui/icons/Group';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Search } from '@material-ui/icons';

export default function SimpleMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <div className="menu1">
          <div className="searchbar">
                  <Search className="searchIcon" />
                  <input
                    placeholder="Search for friend, post or video"
                    className="searchInput2"
                  />
                </div>
        <IconButton
          aria-label="more"
          aria-controls="menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
        >
            <MenuItem onClick={handleClose}>
                <img src="/assets/person/1.jpg" alt="" className="profilImg"/>
                <div className="nameUser">
                    Name name
                </div>
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <GroupAddIcon className="add"/>
                <div className="req">
                    Friend Request
                </div>
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <GroupIcon className="add"/>
                <div className="req">
                    Friends
                </div>
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <ExitToAppIcon className="add"/>
                <div className="req">
                    Logout
                </div>
            </MenuItem>
      </Menu>
      </div>
  );
}