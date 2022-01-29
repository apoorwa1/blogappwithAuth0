import React from "react";
import posts from "./posts.module.css";
import articles from "../../libs/articles.js";
import Post from "../Post/Post.js";

function Posts() {
  return (
    <div className={posts.postsContainer}>
      {articles.map((post, index) => (
        <Post key={index} name={index} post={post} />
      ))}
    </div>
  );
}

export default Posts;
