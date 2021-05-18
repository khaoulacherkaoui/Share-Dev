import "./postForm.css";
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addComment} from '../../actions/post';

const CommentForm = ({postId, addComment}) => {
    const [text,setText]= useState('');
    return (
        <form className="share" onSubmit={e=>{
            e.preventDefault();
            addComment(postId, {text});
            setText('');
        }}>
          <div className="shareWrapper">
            <div className="shareTop">
              <input
                value={text}
                placeholder="Leave a comment" 
                className="shareInput"
                onChange={e=> setText(e.target.value)}
                />
            
            <input type="submit" value="Comment" className="shareButton"/>
            </div>
          </div>
        </form>
    )
}

CommentForm.propTypes = {
    addComment: PropTypes.func.isRequired,
}

export default connect(null, {addComment})(CommentForm);
