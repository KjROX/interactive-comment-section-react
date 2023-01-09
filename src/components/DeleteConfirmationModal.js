import React from "react";
import ReactDOM from "react-dom";
import classes from "./DeleteConfirmationModal.module.css";

const ModalOverlay = ({ cancelButtonHandler, confirmedDeleteHandler }) => {
  return (
    <div
      className={classes.backdrop}
      onClick={() => {
        cancelButtonHandler();
      }}
    >
      <div className={classes.modal}>
        <h1 className={classes.h1}>Delete Comment</h1>
        <p className={classes.p}>
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone.
        </p>
        <div className={classes.buttons}>
          <button
            onClick={() => {
              cancelButtonHandler();
            }}
            className={classes.cancel}
          >
            NO,CANCEL
          </button>
          <button
            className={classes.delete}
            onClick={() => {
              confirmedDeleteHandler();
            }}
          >
            YES,DELETE
          </button>
        </div>
      </div>
    </div>
  );
};

const DeleteConfirmationModal = ({
  cancelButtonHandler,
  confirmedDeleteHandler,
}) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <ModalOverlay
          cancelButtonHandler={cancelButtonHandler}
          confirmedDeleteHandler={confirmedDeleteHandler}
        />,
        document.querySelector("#modal-root")
      )}
    </React.Fragment>
  );
};
export default DeleteConfirmationModal;
