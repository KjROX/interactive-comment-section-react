import classes from "./LikeCount.module.css";
const LikeCount = ({ score, likeCountUpdater, commentId }) => {
  const onUsingLikeHandler = (e) => {
    const symbol = e.target.alt;
    likeCountUpdater(symbol, commentId);
  };
  return (
    <div className={classes.likeCount}>
      <img src="./images/icon-plus.svg" alt="+" onClick={onUsingLikeHandler} />
      <span>{score}</span>
      <img src="./images/icon-minus.svg" alt="-" onClick={onUsingLikeHandler} />
    </div>
  );
};
export default LikeCount;
