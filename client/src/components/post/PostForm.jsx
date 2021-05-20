import "./postForm.css";
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addPost} from '../../actions/post';
import {PermMedia, Label, Room, EmojiEmotions, Cancel,} from "@material-ui/icons";
import axios from "axios";

const PostForm = ({addPost}) => {
    const [text,setText]= useState('');
    const [fileName, setFileName]= useState('');

    const onChangeFile = e => {
      setFileName(e.target.files[0]);
    }

    const changeOnClick = (e) => {
      e.preventDefault();

      const formData= new FormData();

      formData.append("text", text);
      formData.append("postimage", fileName);

      setText('');
      setFileName('');

      axios.post('/api/posts', formData);
    }

    return (
    <form className="share" onSubmit={changeOnClick} encType="multipart/form-data">
      <div className="shareWrapper">
        <div className="shareTop">
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
            <div className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <input 
              type="file" 
              filename="image" 
              placeholder="Photo" 
              className="shareInput" 
              onChange={e => {
                setFileName(e.target.files[0]);
              }}
            />
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

export default connect(null, {addPost})(PostForm)
