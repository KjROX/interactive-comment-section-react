import classes from "./LikeCount.module.css";
const LikeCount = ({ score, likeCountUpdater, commentId }) => {
  const likeHandler = (e) => {
    const symbol = e.target.alt;
    likeCountUpdater(symbol, commentId);
  };
  return (
    <div className={classes.likeCount}>
      <img src="./images/icon-plus.svg" alt="+" onClick={likeHandler} />
      <span>{score}</span>
      <img src="./images/icon-minus.svg" alt="-" onClick={likeHandler} />
    </div>
  );
};
export default LikeCount;
