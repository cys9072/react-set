import React from "react";
import ReactModal from "react-modal";
function CustomModal({ isOpen, handleClose, children, addClassName }) {
  return (
    <div>
      <ReactModal isOpen={isOpen} onRequestClose={() => handleClose()} className={`custom-modal ${addClassName ? addClassName : ""}`} overlayClassName="custom-overlay" bodyOpenClassName="body-lock">
        <div className="custom-modal-wrap">{children}</div>
      </ReactModal>
    </div>
  );
}

export default CustomModal;
