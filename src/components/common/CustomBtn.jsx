import { SVG } from "constants";
import React from "react";

// .btn--primary{height: 58px;}
// .btn--secondary{height: 50px;}
// .btn--tertiary{height: 42px;}

function CustomBtn({ text, iconSrc, imgAlt, addClass, buttonType, buttonGrade, onClick, active, disabled, form, rightArr }) {
  return (
    <button form={form} disabled={disabled} type={buttonType ? buttonType : "button"} className={`btn-common ${addClass ? addClass : ""} ${buttonGrade ? `btn--${buttonGrade}` : ""}`} onClick={onClick}>
      {iconSrc && <img className="btn-common__img" src={iconSrc} alt={imgAlt} />}
      {text}
      {rightArr && (
        <div className="btn-common__right-area">
          <img src={SVG.BACK_SVG} alt="t" />
        </div>
      )}
    </button>
  );
}

export default CustomBtn;
