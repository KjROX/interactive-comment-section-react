import React from "react";
import classes from "./Comment.module.css";
const Comment = () => {
  return (
    <div className={classes.comment}>
      <div className={classes.header}>
        <img
          className={classes.dp}
          src="./images/avatars/image-amyrobson.png"
          alt=""
        />
        <span className={classes.name}>amyrobson</span>
        <span className={classes.date}>1 month ago</span>
      </div>
      <div className={classes.body}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque quo sed
        esse, odio nesciunt rem repudiandae tempora voluptates quidem hic
        voluptas amet laboriosam perspiciatis sunt unde placeat rerum? Sunt,
        provident.
      </div>
      <div className={classes.footer}>
        <div className={classes.likeCount}>
          <img src="./images/icon-plus.svg" alt="" />
          <span>12</span>
          <img src="./images/icon-minus.svg" alt="" />
        </div>
        <div className={classes.reply}>
          <img src="./images/icon-reply.svg" alt="" />
          <span>Reply</span>
        </div>
      </div>
    </div>
  );
};
export default Comment;
