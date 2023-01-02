import React from "react";
import classes from "./Comment.module.css";
import LikeCount from "./LikeCount";
import ReplyDeleteEdit from "./ReplyDeleteEdit";
const Comment = ({ commentData, currentUser, likeCountUpdater }) => {
  return (
    <div className={classes.comment}>
      <div className={classes.uiAdjuster}>
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
      </div>

      <div className={classes.footer}>
        <LikeCount
          score={commentData.score}
          commentId={commentData.id}
          likeCountUpdater={likeCountUpdater}
        />
        <ReplyDeleteEdit
          reply={currentUser !== commentData.user.username}
          mobileDesign={true}
        />
      </div>
      <React.Fragment>
        <ReplyDeleteEdit
          reply={currentUser !== commentData.user.username}
          mobileDesign={false}
        />
      </React.Fragment>
    </div>
  );
};
export default Comment;
