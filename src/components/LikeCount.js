import { useState } from "react";
import classes from "./LikeCount.module.css";
const LikeCount = ({ score }) => {
  const [count, setCount] = useState(score);

  const onAddingLikeHandler = () => {
    setCount((prevcount) => prevcount++);
  };
  return (
    <div className={classes.likeCount}>
      <img src="./images/icon-plus.svg" alt="+" onClick={onAddingLikeHandler} />
      <span>{count}</span>
      <img src="./images/icon-minus.svg" alt="-" />
    </div>
  );
};
export default LikeCount;
