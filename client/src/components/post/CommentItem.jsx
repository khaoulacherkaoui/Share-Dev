import React from 'react';
import "./postItem.css";
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Moment from 'react-moment';
import {deleteComment} from '../../actions/post';
import DeleteIcon from '@material-ui/icons/Delete';

const CommentItem = ({
    postId,
    comment :{ _id, text, name, avatar, user, date },
    auth,
    deleteComment
}) => {
    return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${user}`}>
            <img className="postProfileImg" src={avatar} alt="" />
            <span className="postUsername">{name}</span>
            </Link>
            <span className="postDate">Commented on {' '}<Moment format='YYYY/MM/DD'>{date}</Moment></span>
          </div>
          <div className="postTopRight">
              {!auth.loading && user===auth.user._id && (
                <button onClick={e=> deleteComment(postId, _id)} type="button" className="likes">
                  <DeleteIcon/>
                </button>
              )}
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{text}</span>
        </div>
      </div>
      
    </div>
    )
}

CommentItem.propTypes = {
    postId: PropTypes.number.isRequired,
    comment: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    deleteComment: PropTypes.func.isRequired,
}
const mapStateToProps= state=> ({
    auth:state.auth
})

export default connect(mapStateToProps, {deleteComment})(CommentItem)
