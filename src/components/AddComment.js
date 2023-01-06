import React, { useState } from "react";
import classes from "./AddComment.module.css";

const AddComment = () => {
  const [inputValue, setInputValue] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(inputValue);
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
          src="./images/avatars/image-amyrobson.png"
          alt=""
          className={classes.image}
        />
        <button className={classes.button}>Send</button>
      </div>
    </form>
  );
};

export default AddComment;
