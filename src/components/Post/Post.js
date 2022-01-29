import React from "react";
import style from "./style.module.css";

const Post = ({ post: { title, paragraphs, comments }, index }) => {
  return (
    <div className={style.postContainer}>
      <h1 className={style.heading}>{title}</h1>
      <div className={style.paragraph}>
        {paragraphs.map((paragraph) => {
          return <p>{paragraph}</p>;
        })}
      </div>
      <button className={style.likeButton}>Like 👍</button>
      <div className={style.commentSection}>
        {comments.map((comment) => {
          return (
            <div className={style.comment}>
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
