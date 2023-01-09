import classes from "./AddReply.module.css";
import { useState } from "react";
import { v4 as uuid } from "uuid";

const AddComment = ({ currentUser, addCommentHandler }) => {
  const [inputValue, setInputValue] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    const newCommentData = {
      id: uuid(),
      content: inputValue,
      createdAt: Date.now(),
      score: 0,
      user: currentUser,
      replies: [],
    };
    addCommentHandler(newCommentData);
    setInputValue("");
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
        <button className={classes.button} disabled={inputValue.length === 0}>
          Send
        </button>
      </div>
    </form>
  );
};
export default AddComment;
