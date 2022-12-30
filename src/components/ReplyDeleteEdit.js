import classes from "./ReplyDeleteEdit.module.css";
const ReplyDeleteEdit = ({ reply, mobileDesign }) => {
  return (
    <div
      className={`${
        mobileDesign ? classes.mobileDesign : classes.notMobileDesign
      }`}
    >
      {reply ? (
        <button
          className={classes.replyDiv}
          style={{ color: "#5457b6", fontWeight: "bold" }}
        >
          <img src="./images/icon-reply.svg" alt="" />
          Reply
        </button>
      ) : (
        <div className={classes.deleteEdit}>
          <button className={classes.delete}>
            <img src="./images/icon-delete.svg" alt="" />
            Delete
          </button>
          <button className={classes.edit}>
            <img src="./images/icon-edit.svg" alt="" />
            Edit
          </button>
        </div>
      )}
    </div>
  );
};
export default ReplyDeleteEdit;
