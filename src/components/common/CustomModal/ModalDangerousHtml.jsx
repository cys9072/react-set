import { SVG } from "constants";
import React from "react";
import HorizonLineThin from "../HorizonLineThin";

function ModalDangerousHtml({ title, text, onClose }) {
  return (
    <div className="custom-modal-danger-wrap">
      <div className="custom-modal-danger-wrap__top">
        <button type="button" onClick={onClose}>
          <img src={SVG.CLOSE_SVG} alt="close img" />
        </button>
      </div>
      <HorizonLineThin />
      <div className="custom-modal-danger-wrap__bottom">
        <p className="custom-modal-danger-wrap__bottom--title">{title}</p>
        <HorizonLineThin />
        <div className="danger-init">
          <div dangerouslySetInnerHTML={{ __html: text }}></div>
        </div>
      </div>
    </div>
  );
}

export default ModalDangerousHtml;
