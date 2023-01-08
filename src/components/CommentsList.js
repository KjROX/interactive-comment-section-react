import React from "react";
import Comment from "./Comment";
import classes from "./CommentsList.module.css";

const CommentsList = ({
  comments,
  currentUser,
  likeCountUpdater,
  AddReplyHandler,
}) => {
  return (
    <>
      {comments.map((comment, i) => {
        if (comment.replies.length !== 0) {
          return (
            <React.Fragment key={i + 10}>
              <Comment
                key={comment.id}
                commentData={comment}
                currentUser={currentUser}
                likeCountUpdater={likeCountUpdater}
                AddReplyHandler={AddReplyHandler}
              />
              <div className={classes.replies}>
                {comment.replies.map((reply) => (
                  <Comment
                    key={reply.id}
                    commentData={reply}
                    currentUser={currentUser}
                    likeCountUpdater={likeCountUpdater}
                    AddReplyHandler={AddReplyHandler}
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
              currentUser={currentUser}
              likeCountUpdater={likeCountUpdater}
              AddReplyHandler={AddReplyHandler}
            />
          );
        }
      })}
    </>
  );
};
export default CommentsList;
