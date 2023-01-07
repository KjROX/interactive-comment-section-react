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
          } else {
            prevComment.replies.forEach((reply) => {
              if (reply.id === commentId) {
                reply.score++;
              }
            });
          }
          return prevComment;
        });
      });
    } else {
      setComments((prevComments) => {
        return prevComments.map((prevComment) => {
          if (prevComment.id === commentId) {
            prevComment.score--;
          } else {
            prevComment.replies.forEach((reply) => {
              if (reply.id === commentId) {
                reply.score--;
              }
            });
          }
          return prevComment;
        });
      });
    }
  };

  const sendButtonHandler = (replyingToCommentData, replyData) => {
    if (replyingToCommentData.replies) {
      setComments((prevComments) => {
        return prevComments.map((prevComment) => {
          if (prevComment.id === replyingToCommentData.id) {
            prevComment.replies.push(replyData);
          }
          return prevComment;
        });
      });
    } else {
      setComments((prevComments) => {
        return prevComments.map((prevComment) => {
          if (prevComment.id === replyingToCommentData.replyingUnderCommentId) {
            prevComment.replies.push(replyData);
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
          sendButtonHandler={sendButtonHandler}
        />
        <AddComment currentUser={data.currentUser} />
      </div>
    </div>
  );
}

export default App;
