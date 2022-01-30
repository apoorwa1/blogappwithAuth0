import "./App.css";
import Header from "../Header/Header.js";
// import articles from "../../libs/articles";

// function App() {
//   return (
//     <div className="App">
//       <h1>WikiPigeon</h1>
//       <article className="post">
//         <h2>{articles[0].title}</h2>
//         {articles[0].paragraphs.map((paragraph) => (
//           <p>{paragraph}</p>
//         ))}
//         <button className="like-button">Like 👍</button>
//         <section className="comment-section">
//           {articles[0].comments.map((comment) => {
//             return (
//               <div className="comment">
//                 <h4>{comment.name} says:</h4>
//                 <p>{comment.text}</p>
//               </div>
//             );
//           })}
//         </section>
//       </article>
//       <h2>{articles[1].title}</h2>
//       {articles[1].paragraphs.map((paragraph) => (
//         <p>{paragraph}</p>
//       ))}
//       <button className="like-button">Like 👍</button>
//       <section className="comment-section">
//         {articles[1].comments.map((comment) => {
//           return (
//             <div className="comment">
//               <h4>{comment.name} says:</h4>
//               <p>{comment.text}</p>
//             </div>
//           );
//         })}
//       </section>
//     </div>
//   );
// }

// export default App;

import React from "react";
import "./App.css";
import LoginButton from "../LoginButton";
import LogoutButton from "../LogoutButton";
import Profile from "../UserProfile";
//import { useAuth0 } from "@auth0/auth0-react";
//import { Routes, Route } from "react-router-dom";
import Posts from "../Posts/Posts.js";
//import Home from "../Home.js";

const App = () => {
  //const { isAuthincated } = useAuth0;
  // if (!isAuthincated) {
  //   return <LoginButton />;
  // }
  return (
    <div>
      <Header />
      <LoginButton />
      <LogoutButton />
      <Profile />
      <Posts />
    </div>
  );
};

export default App;
