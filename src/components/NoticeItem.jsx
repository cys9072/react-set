import { SVG } from "constants";
import React from "react";
import { Link } from "react-router-dom";

function NoticeItem({ list_number, title, date, recently }) {
  return (
    <li className="notice-area notice-list__item">
      <div className="notice--number">{list_number}</div>
      <Link to="/my-page/service/notice-list/detail" className="notice--text ONE_LINE_ELLIPSIS">
        {recently && <img src={SVG.NEW_SVG} alt="new text img" />}
        {title}
      </Link>
      <span className="notice--date">{date}</span>
    </li>
  );
}

export default NoticeItem;
