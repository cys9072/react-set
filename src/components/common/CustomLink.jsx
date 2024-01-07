import { SVG } from "constants";
import React from "react";
import { Link } from "react-router-dom";

// .btn--primary{height: 58px;}
// .btn--secondary{height: 50px;}
// .btn--tertiary{height: 42px;}

function CustomLink({ href, text, addClass, linkGrade, iconSrc, imgAlt, rightArr, pointText }) {
  return (
    <Link to={href} className={`btn-common ${addClass ? addClass : ""} ${linkGrade ? `btn--${linkGrade}` : ""}`}>
      {iconSrc && <img className="btn-common__img" src={iconSrc} alt={imgAlt} />}
      {text}

      {/* My page use */}
      {rightArr && (
        <div className="btn-common__right-area">
          <img src={SVG.BACK_SVG} alt="t" />
        </div>
      )}
      {pointText && (
        <div className="btn-common__right-area">
          <span>{pointText}</span>
        </div>
      )}
    </Link>
  );
}

export default CustomLink;
