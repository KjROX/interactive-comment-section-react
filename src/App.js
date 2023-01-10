import "./App.css";
import { useEffect, useState } from "react";
import CommentsList from "./components/CommentsList";

import data from "./data/data.json";
import AddComment from "./components/AddComment";
import DeleteConfirmationModal from "./components/DeleteConfirmationModal";

function App() {
  const [comments, setComments] = useState(data.comments);
  const [showDeleteConfirmationModal, setshowDeleteConfirmationModal] =
    useState(false);

  const [commentDataToBeDeleted, setCommentDataToBeDeleted] = useState({});

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

  const addReplyHandler = (replyingToCommentData, replyData) => {
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

  const addCommentHandler = (newCommentData) => {
    setComments((prevComments) => {
      const newComments = [...prevComments, newCommentData];
      return newComments;
    });
  };

  const deleteButtonHandler = (commentData) => {
    setshowDeleteConfirmationModal(true);
    setCommentDataToBeDeleted(commentData);
  };

  const cancelButtonHandler = () => {
    setshowDeleteConfirmationModal(false);
  };

  const confirmedDeleteHandler = () => {
    const idOfCommentDataToBeDeleted = commentDataToBeDeleted.id;
    setComments((prevComments) => {
      const prevCommentsInstance = [...prevComments];
      prevCommentsInstance.forEach((prevComment, index) => {
        if (prevComment.id === idOfCommentDataToBeDeleted) {
          prevCommentsInstance.splice(index, 1);
        } else {
          prevComment.replies.forEach((reply, i) => {
            if (reply.id === idOfCommentDataToBeDeleted) {
              prevComment.replies.splice(i, 1);
            }
          });
        }
      });
      return prevCommentsInstance;
    });
  };

  const updateCommentHandler = (
    updatingCommentId,
    updatingCommentContent,
    updatedTime
  ) => {
    setComments((prevComments) => {
      const prevCommentsInstance = [...prevComments];
      prevCommentsInstance.forEach((prevComment) => {
        if (prevComment.id === updatingCommentId) {
          prevComment.content = updatingCommentContent;
          prevComment.createdAt = updatedTime;
        } else {
          prevComment.replies.forEach((reply) => {
            if (reply.id === updatingCommentId) {
              reply.content = updatingCommentContent;
              reply.createdAt = updatedTime;
            }
          });
        }
      });
      return prevCommentsInstance;
    });
  };

  return (
    <div className={showDeleteConfirmationModal ? `App disable-scroll` : `App`}>
      <div className="container">
        <CommentsList
          comments={comments}
          currentUser={data.currentUser}
          likeCountUpdater={likeCountUpdater}
          addReplyHandler={addReplyHandler}
          deleteButtonHandler={deleteButtonHandler}
          updateCommentHandler={updateCommentHandler}
        />
        <AddComment
          currentUser={data.currentUser}
          addCommentHandler={addCommentHandler}
        />
      </div>
      {showDeleteConfirmationModal && (
        <DeleteConfirmationModal
          cancelButtonHandler={cancelButtonHandler}
          confirmedDeleteHandler={confirmedDeleteHandler}
        />
      )}
    </div>
  );
}

export default App;
