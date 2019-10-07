import React from "react";
const PostBody = props => {
  const { post } = props;
  console.log(props);
  const list = post ? (
    <div>
      <h4>{post.title}</h4>
      <span dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  ) : (
    <div />
  );
  return <div>{list}</div>;
};

export default PostBody;
