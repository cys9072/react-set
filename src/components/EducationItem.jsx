import { SVG } from "constants";
import React from "react";
import { Link } from "react-router-dom";

function EducationItem({ disabled }) {
  return (
    <li className={`card-list__item ${disabled ? "disabled" : ""}`}>
      <Link to="/my-page/work/education/education-list/detail">
        <div className="card-list__item--info">
          <div className="info-box">
            <div className="info-box-_icon-box">
              <img src={SVG.PLACE_MARKER_SVG} alt="calendar img" />
              <span className="ONE_LINE_ELLIPSIS">
                서울시 강남구강남구강남구강남구강남구강남구강남구
              </span>
            </div>
            {disabled ? (
              <span className="info-box__toggle-text">마감</span>
            ) : (
              <span className="info-box__toggle-text active">접수중</span>
            )}
          </div>
          <div className="info-box">
            <div className="info-box-_icon-box">
              <img src={SVG.CALENDAR_SVG} alt="calendar img" />
              <span>12.30 (금)</span>
            </div>
            <span className="perpendicular-line">|</span>
            <div className="info-box-_icon-box">
              <img src={SVG.TIME_SVG} alt="clock img" />
              <span>오전 12:30</span>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default EducationItem;
