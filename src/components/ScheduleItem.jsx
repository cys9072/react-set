import { SVG } from "constants";
import React from "react";
import CustomLink from "./common/CustomLink";
import HorizonLineThin from "./common/HorizonLineThin";

function ScheduleItem({ title, href, btnTitle, linkType }) {
  return (
    <li className="card-list__item">
      <div className="card-list__item--info">
        <div className="info-box">
          <a href="tel:1599-1599">
            {title}&nbsp;&nbsp;
            <img src={SVG.SERVICE} alt="phone img" />
          </a>
          {linkType === "cancel" && <CustomLink text={btnTitle} linkGrade="tertiary" addClass="fit-element disabled" />}
          {linkType !== "cancel" && <CustomLink href={href} text={btnTitle} linkGrade="tertiary" addClass={`fit-element ${linkType}`} />}
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
      <HorizonLineThin />
      <div className="card-list__item--pay-info">
        <div className="info-box">
          <p>결제금액</p>
          <span>220,0000 원</span>
        </div>
      </div>
    </li>
  );
}

export default ScheduleItem;
