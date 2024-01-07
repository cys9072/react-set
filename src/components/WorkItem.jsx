import { SVG } from "constants";
import React from "react";
import HorizonLineThin from "./common/HorizonLineThin";

function WorkItem({ disabled }) {
  return (
    <li className={`card-list__item ${disabled ? "disabled" : ""}`}>
      <div className="card-list__item--info">
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
      <HorizonLineThin />
      <div className="card-list__item--pay-info">
        <div className="info-box">
          <p>이용점명</p>
          <span>이용점명</span>
        </div>
        <div className="info-box">
          <p>캐디유형</p>
          <span>S 캐디</span>
        </div>
        <div className="info-box">
          <p>인원수</p>
          <span>2명</span>
        </div>
      </div>
    </li>
  );
}

export default WorkItem;
