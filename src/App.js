import "./App.css";
import React from "react";
import Comment from "./components/Comment";
import data from "./data/data.json";

function App() {
  return (
    <div className="App">
      {data.comments.map((comment, i) => {
        if (comment.replies.length !== 0) {
          return (
            <React.Fragment key={i}>
              <Comment key={comment.id} commentData={comment} />
              <div className="replies">
                {comment.replies.map((reply) => (
                  <Comment key={reply.id} commentData={reply} />
                ))}
              </div>
            </React.Fragment>
          );
        } else {
          return <Comment key={comment.id} commentData={comment} />;
        }
      })}
    </div>
  );
}

export default App;
