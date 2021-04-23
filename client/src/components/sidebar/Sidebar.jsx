import "./sidebar.css";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <img src="/assets/person/2.jpg" alt="" className="profilImg"/>
                <div className="nameUser">
                    Name name
                </div>
                <ArrowDropDownIcon className="ArrowDropDownIcon" />
            </div>
            <hr className="sidebarHr"/>
        </div>
    )
}
