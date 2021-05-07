import "./sidebar.css";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { useTheme, useMediaQuery } from '@material-ui/core';

export default function Sidebar() {
     //responsive using BreakPoints
    const theme=useTheme();
    const isMatch=useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <div className="sidebar">
            {isMatch? (<div></div>) : (
                <>
                <div className="sidebarWrapper">
                <img src="/assets/person/1.jpg" alt="" className="profilImg"/>
                <div className="nameUser">
                    Name name
                </div>
                <ArrowDropDownIcon className="ArrowDropDownIcon" />
            </div>
            <hr className="sidebarHr"/>
            <div className="friendsRequest">
                    Friend request
                    <ul className="sidebarListRequests">
                        <li className="sidebarRequest">
                            <img className="requestFriendImg" src="/assets/person/2.jpg" alt=""/>
                            <span className="requestFriendName">Name name</span>
                            <div className="buttons" >
                                <button className="confirmButton">Confirm</button>
                                <button className="deleteButton">Delete</button>
                            </div>
                        </li>
                    </ul>
            </div>
            <hr className="sidebarHr"/>
            <div className="friends">
                    Friends
                    <ul className="sidebarListFriends">
                        <li className="sidebarFriends">
                            <img className="friendImg" src="/assets/person/3.jpg" alt=""/>
                            <span className="friendName">Name name</span>
                        </li>
                    </ul>
            </div>
            </>
            )}
        </div>
    )
}
