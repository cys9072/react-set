import { SVG } from "constants";
import React from "react";

function MyEducationItem({ complete }) {
  return (
    <li className="card-list__item">
      <div className="card-list__item--info">
        <div className="info-box">
          <div className="info-box-_icon-box">
            <img src={SVG.CALENDAR_SVG} alt="calendar img" />
            <span>12.30 (금)</span>
          </div>
          <div className="info-box-_icon-box">
            <img src={SVG.TIME_SVG} alt="clock img" />
            <span>오전 12:30</span>
          </div>
          {complete ? <span className="info-box__toggle-text active">교육예정</span> : <span className="info-box__toggle-text">수료완료</span>}
        </div>
      </div>
      <div className="card-list__item--pay-info">
        <div className="info-box">
          <p>교육장소</p>
          <span>교육장소 명</span>
        </div>
      </div>
    </li>
  );
}

export default MyEducationItem;
