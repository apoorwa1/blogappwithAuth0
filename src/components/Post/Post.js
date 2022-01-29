import React from "react";
import "./Post.css";

const Post = ({ post: { title, paragraphs, comments }, index }) => {
  return (
    <div className="post-container">
      <h1 className="heading">{title}</h1>
      <div className="paragraph">
        {paragraphs.map((paragraph) => {
          return <p>{paragraph}</p>;
        })}
      </div>
      <button className="like-button">Like 👍</button>
      <div className="comment-section">
        {comments.map((comment) => {
          return (
            <div className="comment">
              <h4>{comment.name} says:</h4>
              <p>{comment.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Post;
