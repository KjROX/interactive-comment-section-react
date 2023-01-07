import React, { useState } from "react";
import classes from "./AddComment.module.css";
import { v4 as uuid } from "uuid";

const AddComment = ({
  currentUser,
  replyingToCommentData,
  sendButtonHandler,
}) => {
  const [inputValue, setInputValue] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    const replyData = {
      id: uuid(),
      content: inputValue,
      createdAt: Date.now(),
      score: 0,
      replyingTo: replyingToCommentData.user.username,
      user: currentUser,
      replyingUnderCommentId: replyingToCommentData.id,
    };
    sendButtonHandler(replyingToCommentData, replyData);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input
        type="text"
        className={classes.input}
        placeholder="Add a comment..."
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <div className={classes.div}>
        <img
          src={currentUser.image.png}
          alt="current-user-dp"
          className={classes.image}
        />
        <button className={classes.button}>Send</button>
      </div>
    </form>
  );
};

export default AddComment;
