import React, { useState } from "react";
import AddReply from "./AddReply";
import classes from "./Comment.module.css";
import LikeCount from "./LikeCount";
import ReplyDeleteEdit from "./ReplyDeleteEdit";
import { formatDistanceToNowStrict } from "date-fns";

const Comment = ({
  commentData,
  currentUser,
  likeCountUpdater,
  addReplyHandler,
  deleteButtonHandler,
  updateCommentHandler,
}) => {
  const [showAddComment, setShowAddComment] = useState(false);
  const [updateComment, setUpdateComment] = useState(false);
  const [valueOfUpdatedComment, setValueOfUpdatedComment] = useState(
    commentData.content
  );

  const editButtonHandler = () => {
    setUpdateComment((prevState) => !prevState);
  };

  const replyButtonHandler = () => {
    setShowAddComment((prevState) => !prevState);
  };

  const dateFormatter = (date) => {
    if (typeof date === "string") {
      return date;
    } else {
      return formatDistanceToNowStrict(date, { addSuffix: true });
    }
  };

  return (
    <>
      <div className={classes.comment}>
        <div className={classes.uiAdjuster}>
          <div className={classes.header}>
            <img
              className={classes.dp}
              src={commentData.user.image.png}
              alt=""
            />
            <span className={classes.name}>{commentData.user.username}</span>
            {currentUser.username === commentData.user.username ? (
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
            <span className={classes.date}>
              {dateFormatter(commentData.createdAt)}
            </span>
          </div>
          <div className={classes.bodyCover}>
            <div className={classes.body}>
              <span style={{ color: "#5457b6", fontWeight: "bold" }}>
                {commentData.replyingTo ? `@${commentData.replyingTo} ` : ""}
              </span>
              {commentData.content}
            </div>
            {currentUser.username === commentData.user.username &&
              updateComment && (
                <input
                  className={classes.bodyInput}
                  type="text"
                  value={valueOfUpdatedComment}
                  onChange={(e) => {
                    setValueOfUpdatedComment(e.target.value);
                  }}
                />
              )}
          </div>
        </div>

        <div className={classes.footer}>
          <LikeCount
            score={commentData.score}
            commentId={commentData.id}
            likeCountUpdater={likeCountUpdater}
          />
          <ReplyDeleteEdit
            reply={currentUser.username !== commentData.user.username}
            mobileDesign={true}
            replyButtonHandler={replyButtonHandler}
            deleteButtonHandler={deleteButtonHandler}
            editButtonHandler={editButtonHandler}
            commentData={commentData}
            updateComment={updateComment}
            valueOfUpdatedComment={valueOfUpdatedComment}
            updateCommentHandler={updateCommentHandler}
          />
        </div>
        <React.Fragment>
          <ReplyDeleteEdit
            reply={currentUser.username !== commentData.user.username}
            mobileDesign={false}
            replyButtonHandler={replyButtonHandler}
            deleteButtonHandler={deleteButtonHandler}
            editButtonHandler={editButtonHandler}
            commentData={commentData}
            updateComment={updateComment}
            valueOfUpdatedComment={valueOfUpdatedComment}
            updateCommentHandler={updateCommentHandler}
          />
        </React.Fragment>
      </div>
      {showAddComment && (
        <AddReply
          currentUser={currentUser}
          replyingToCommentData={commentData}
          addReplyHandler={addReplyHandler}
        />
      )}
    </>
  );
};
export default Comment;
