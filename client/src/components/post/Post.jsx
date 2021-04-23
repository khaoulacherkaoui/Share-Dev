import "./post.css";
import { MoreVert } from "@material-ui/icons";


export default function Post() {

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src="/assets/person/1.jpg" alt="" />
            <span className="postUsername">Name name</span>
            <span className="postDate">00h00</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Hi! its my first post</span>
          <img className="postImg" src="/assets/image_share.png" alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="/assets/thumb-up.png" alt="" />
            <img className="likeIcon" src="/assets/heart.png" alt="" />
            <span className="postLikeCounter">10 people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText"> comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
