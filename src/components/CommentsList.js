import React from "react";
import Comment from "./Comment";
import classes from "./CommentsList.module.css";

const CommentsList = ({ data }) => {
  return (
    <>
      {data.comments.map((comment, i) => {
        if (comment.replies.length !== 0) {
          return (
            <React.Fragment key={i + 10}>
              <Comment
                key={comment.id}
                commentData={comment}
                currentUser={data.currentUser.username}
              />
              <div className={classes.replies}>
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
    </>
  );
};
export default CommentsList;
