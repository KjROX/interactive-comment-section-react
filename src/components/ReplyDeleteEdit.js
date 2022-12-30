import classes from "./ReplyDeleteEdit.module.css";
const ReplyDeleteEdit = ({ reply }) => {
  return (
    <>
      {reply ? (
        <div className={classes.replyDiv}>
          <img src="./images/icon-reply.svg" alt="" />
          <button className={classes.reply}>Reply</button>
        </div>
      ) : (
        <div className={classes.deleteEdit}>
          <div>
            <img src="./images/icon-delete.svg" alt="" />
            <button style={{ color: "red" }}>Delete</button>
          </div>
          <div>
            <img src="./images/icon-edit.svg" alt="" />
            <button style={{ color: "#5457b6" }}>Edit</button>
          </div>
        </div>
      )}
    </>
  );
};
export default ReplyDeleteEdit;
