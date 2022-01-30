import React from "react";
import posts from "./posts.module.css";
import articles from "../../libs/articles.js";
import Post from "../Post/Post.js";
import { useAuth0 } from "@auth0/auth0-react";

function Posts() {
  const { isAuthenticated } = useAuth0();
  if (isAuthenticated === false) {
    return <div>Please login to view articles</div>;
  }
  return (
    isAuthenticated && (
      <div className={posts.postsContainer}>
        {articles.map((post, index) => (
          <Post key={index} name={index} post={post} />
        ))}
      </div>
    )
  );
}

export default Posts;
