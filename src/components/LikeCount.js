import classes from "./LikeCount.module.css";
const LikeCount = ({ score }) => {
  return (
    <div className={classes.likeCount}>
      <img src="./images/icon-plus.svg" alt="" />
      <span>{score}</span>
      <img src="./images/icon-minus.svg" alt="" />
    </div>
  );
};
export default LikeCount;
