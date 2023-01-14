import classes from "./ReplyDeleteEdit.module.css";
const ReplyDeleteEdit = ({
  reply,
  mobileDesign,
  replyButtonHandler,
  deleteButtonHandler,
  commentData,
  editButtonHandler,
  updateComment,
  valueOfUpdatedComment,
  updateCommentHandler,
}) => {
  const updateButtonHandler = () => {
    updateCommentHandler(commentData.id, valueOfUpdatedComment, Date.now());
    editButtonHandler();
  };
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
          onClick={() => {
            replyButtonHandler();
          }}
        >
          <img src="./images/icon-reply.svg" alt="" />
          Reply
        </button>
      ) : updateComment ? (
        <button
          className={classes.update}
          onClick={updateButtonHandler}
          disabled={valueOfUpdatedComment.length === 0}
        >
          Update
        </button>
      ) : (
        <div className={classes.deleteEdit}>
          <button
            className={classes.delete}
            onClick={() => {
              deleteButtonHandler(commentData);
            }}
          >
            <img src="./images/icon-delete.svg" alt="" />
            Delete
          </button>
          <button
            className={classes.edit}
            onClick={() => {
              editButtonHandler();
            }}
          >
            <img src="./images/icon-edit.svg" alt="" />
            Edit
          </button>
        </div>
      )}
    </div>
  );
};
export default ReplyDeleteEdit;
