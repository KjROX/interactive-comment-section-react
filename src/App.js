import "./App.css";
import { useState } from "react";
import AddComment from "./components/AddComment";
import CommentsList from "./components/CommentsList";

import data from "./data/data.json";

function App() {
  const [comments, setComments] = useState(data.comments);

  const likeCountUpdater = (symbol, commentId) => {
    if (symbol === "+") {
      setComments((prevComments) => {
        return prevComments.map((prevComment) => {
          if (prevComment.id === commentId) {
            prevComment.score++;
          }
          return prevComment;
        });
      });
    } else {
      setComments((prevComments) => {
        return prevComments.map((prevComment) => {
          if (prevComment.id === commentId) {
            prevComment.score--;
          }
          return prevComment;
        });
      });
    }
  };

  return (
    <div className="App">
      <div className="container">
        <CommentsList
          comments={comments}
          currentUser={data.currentUser}
          likeCountUpdater={likeCountUpdater}
        />
        <AddComment />
      </div>
    </div>
  );
}

export default App;
