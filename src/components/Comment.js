import React from "react";
import classes from "./Comment.module.css";
const Comment = ({ commentData, currentUser }) => {
  return (
    <div className={classes.comment}>
      <div className={classes.header}>
        <img className={classes.dp} src={commentData.user.image.png} alt="" />
        <span className={classes.name}>{commentData.user.username}</span>
        {currentUser === commentData.user.username ? (
          <span
            style={{
              color: "white",
              backgroundColor: "#5457b6",
              padding: "0.2rem",
              fontSize: "1.3rem",
            }}
          >
            YOU
          </span>
        ) : (
          ""
        )}
        <span className={classes.date}>{commentData.createdAt}</span>
      </div>
      <div className={classes.body}>
        <span style={{ color: "#5457b6", fontWeight: "bold" }}>
          {commentData.replyingTo ? `@${commentData.replyingTo} ` : ""}
        </span>
        {commentData.content}
      </div>
      <div className={classes.footer}>
        <div className={classes.likeCount}>
          <img src="./images/icon-plus.svg" alt="" />
          <span>{commentData.score}</span>
          <img src="./images/icon-minus.svg" alt="" />
        </div>

        {currentUser === commentData.user.username ? (
          <div className={classes.deleteEdit}>
            <div>
              <img src="./images/icon-delete.svg" alt="" />
              <button style={{ color: "red" }}>Delete</button>
            </div>
            <div>
              <img src="./images/icon-edit.svg" alt="" />
              <button style={{ color: "#5457b6" }}>Edit</button>
            </div>
          </div>
        ) : (
          <div className={classes.replyDiv}>
            <img src="./images/icon-reply.svg" alt="" />
            <button className={classes.reply}>Reply</button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Comment;
