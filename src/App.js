import React from "react";

import "./App.css";

import Comment from "./components/Comment";
import AddComment from "./components/AddComment";

import data from "./data/data.json";

function App() {
  return (
    <div className="App">
      {data.comments.map((comment, i) => {
        if (comment.replies.length !== 0) {
          return (
            <React.Fragment key={i + 10}>
              <Comment
                key={comment.id}
                commentData={comment}
                currentUser={data.currentUser.username}
              />
              <div className="replies">
                {comment.replies.map((reply) => (
                  <Comment
                    key={reply.id}
                    commentData={reply}
                    currentUser={data.currentUser.username}
                  />
                ))}
              </div>
            </React.Fragment>
          );
        } else {
          return (
            <Comment
              key={comment.id}
              commentData={comment}
              currentUser={data.currentUser.username}
            />
          );
        }
      })}
      <AddComment />
    </div>
  );
}

export default App;
