import React from "react";
import classes from "./AddComment.module.css";

const AddComment = () => {
  return (
    <form className={classes.form}>
      <input
        type="text"
        className={classes.input}
        placeholder="Add a comment..."
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
