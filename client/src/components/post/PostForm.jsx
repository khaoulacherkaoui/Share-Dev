import "./postForm.css";
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { addPost } from '../../actions/post';
import {PermMedia, Label, Room, EmojiEmotions, Cancel,} from "@material-ui/icons";

const PostForm = ({addPost}) => {
  
    const [text,setText]= useState('');
    
    return (
    <form className="share" onSubmit={e=>{
        e.preventDefault();
        addPost({text});
        setText('');
    }}>
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/person/1.jpg" alt=""/>
          <input
            value={text}
            placeholder="What's in your mind ?" 
            className="shareInput"
            onChange={e=> setText(e.target.value)}
            />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom" >
          <div className="shareOptions">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
            <div className="shareOption">
              <Label htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <input type="submit" value="Share" className="shareButton"/>
        </div>
      </div>
    </form>
    )
}

PostForm.propTypes = {
    addPost: PropTypes.func.isRequired,
}

export default connect(null, {addPost})(PostForm);
