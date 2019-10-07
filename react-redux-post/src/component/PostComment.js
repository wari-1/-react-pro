import React, { Component } from "react";
import { getCommentsNum } from "../store/selectors";
import { connect } from "react-redux";
import { delComment, addComment } from "../store/actions";
class PostComment extends Component {
  state = {
    val: ""
  };
  handleInput = event => {
    this.setState({
      val: event.target.value
    });
  };
  addComment = () => {
    const { postId } = this.props;
    const { val } = this.state;
    if (val.trim()) {
      this.props.addComment(
        {
          text: val,
          postId
        },
        this.clear
      );
    }
  };
  clear = () => {
    this.setState({
      val: ""
    });
  };
  del = id => {
    this.props.delComment(id);
  };

  render() {
    const { comments } = this.props;
    const commentsList = comments.length ? (
      comments.map(item => (
        <li key={item.id}>
          <div dangerouslySetInnerHTML={{ __html: item.text }} />
          <button onClick={() => this.del(item.id)}>删除</button>
        </li>
      ))
    ) : (
      <li />
    );
    const { val } = this.state;
    return (
      <div>
        <span>评论数：{getCommentsNum(comments)}</span>
        <ul>{commentsList}</ul>
        <textarea
          value={val}
          onChange={event => this.handleInput(event)}
          onKeyDown={event => {
            if (event.which === 13) {
              this.addComment(event);
            }
          }}
        />
        <br />
        <br />
        <button onClick={() => this.addComment()}>评论</button>
      </div>
    );
  }
}

export default connect(
  null,
  { delComment, addComment }
)(PostComment);
