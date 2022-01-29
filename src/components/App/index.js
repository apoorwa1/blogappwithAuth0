import "./App.css";
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

import Posts from "../Posts/Posts.js";

const App = () => {
  return (
    <div className="main-container">
      <h1 className="main-heading">WikiPigeon</h1>
      <Posts />
    </div>
  );
};

export default App;
