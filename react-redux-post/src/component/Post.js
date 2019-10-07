import React, { Component } from "react";
import PostBody from "./PostBody";
import PostComment from "./PostComment";
import { getPost, getComments } from "../store/actions";
import { connect } from "react-redux";
class Post extends Component {
  componentDidMount() {
    const id = this.props.location.pathname.replace("/post/", "");
    this.props.getPost(id);
    this.props.getComments(id);
  }
  render() {
    const { post, comments } = this.props;
    const id = this.props.location.pathname.replace("/post/", "");
    return (
      <div>
        <PostBody post={post} />
        <PostComment comments={comments} postId={id} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    post: state.post,
    comments: state.comments
  };
};
export default connect(
  mapStateToProps,
  { getPost, getComments }
)(Post);
