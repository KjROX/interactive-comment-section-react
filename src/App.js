import "./App.css";
import { useEffect, useState } from "react";
import CommentsList from "./components/CommentsList";

import data from "./data/data.json";
import AddComment from "./components/AddComment";

function App() {
  const [comments, setComments] = useState(data.comments);

  useEffect(() => {
    const localComments = JSON.parse(localStorage.getItem("localComments"));
    if (localComments) {
      setComments(localComments);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("localComments", JSON.stringify(comments));
  }, [comments]);

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

  const AddReplyHandler = (replyingToCommentData, replyData) => {
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

  const AddCommentHandler = (newCommentData) => {
    setComments((prevComments) => {
      prevComments.push(newCommentData);
      return prevComments;
    });
  };

  return (
    <div className="App">
      <div className="container">
        <CommentsList
          comments={comments}
          currentUser={data.currentUser}
          likeCountUpdater={likeCountUpdater}
          AddReplyHandler={AddReplyHandler}
        />
        <AddComment
          currentUser={data.currentUser}
          AddCommentHandler={AddCommentHandler}
        />
      </div>
    </div>
  );
}

export default App;
