import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostItem from './PostItem';
import { getPosts } from '../../actions/post';
import PostForm from './PostForm';

const Post = ({ getPosts, post: { posts,loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <div className="posts">
      <PostForm/>
    {posts.map(post => (
      <PostItem key={post._id} post={post}/>
    ))}
  </div>
  );
};

Post.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  post: state.post
});

export default connect(mapStateToProps, { getPosts })(Post);
