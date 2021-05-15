import "./profile.css";
import ProfileBar from "../../components/profilebar/ProfileBar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import LeftBar from "../../components/leftbar/LeftBar";


export default function Profile() {

  return (
    <>
      <ProfileBar />
      <div className="profile">
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileCoverImg" src="/assets/person/1.jpg" alt="" />
              <img className="profileUserImg" src="/assets/person/2.jpg" alt="" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">fatima</h4>
              <span className="profileInfoDesc">student</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <LeftBar/>
            <Feed />
          </div>
        </div>
      </div>
    </>
  );
}