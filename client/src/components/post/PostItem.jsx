import React from 'react';
import "./postItem.css";
import { MoreVert, ThumbDownAlt } from "@material-ui/icons";
import DeleteIcon from '@material-ui/icons/Delete';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import PropTypes from 'prop-types';
import {Link } from 'react-router-dom';
import {connect } from 'react-redux';
import Moment from 'react-moment';
import { addLike, removeLike, deletePost} from '../../actions/post'
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';

const PostItem = ({
    addLike,
    removeLike,
    deletePost,
    auth,
    post: {_id, text, name,postimage, avatar, user, likes, comments, date}}) => (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${user}`}>
            <img className="postProfileImg" src={avatar} alt="" />
            <span className="postUsername">{name}</span>
            </Link>
            <span className="postDate">Posted on {' '}<Moment format='YYYY/MM/DD'>{date}</Moment></span>
          </div>
          <div className="postTopRight">
              {!auth.loading && user===auth.user._id && (
                <button onClick={e=> deletePost(_id)} type="button" className="likes">
                  <DeleteIcon/>
                </button>
              )}
            {/*<MoreVert />*/}
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{text}</span>
          <img className="postImg" src={`/uploads/${postimage}`} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
              <button onClick={e=> addLike(_id)} type="button" className="likes">
                <ThumbUpAltIcon/> {' '}
                <span>
                  {likes.length > 0 && 
                    <span className="postLikeCounter">{likes.length}</span>}
                </span>
              </button>
              <button onClick={e=> removeLike(_id)} type="button" className="likes">
                 <ThumbDownAltIcon/>
              </button>
              <CommentForm postId={_id} />
          </div>
          <div className="postBottomRight">
              <Link to={'/login'}>
                  <span className="postCommentText">{comments.length} comments</span>
              </Link>
          </div>
        </div>
      </div>
      <div className="comments">
          {comments.map(comment => (
            <CommentItem key={comment._id} comment={comment} postId={_id} />
          ))}
      </div>
    </div>
    )


PostItem.propTypes = {
    post: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    addLike: PropTypes.func.isRequired,
    removeLike: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired,
}
const mapStateToProps = (state) => ({
    auth: state.auth
  });

export default connect(mapStateToProps, {addLike, removeLike, deletePost})(PostItem)
