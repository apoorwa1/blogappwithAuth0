import React from "react";
import "./Posts.css";
import articles from "../../libs/articles.js";
import Post from "../Post/Post.js";

function Posts() {
  return (
    <div className="posts-container">
      {articles.map((post, index) => (
        <Post key={index} name={index} post={post} />
      ))}
    </div>
  );
}

export default Posts;
