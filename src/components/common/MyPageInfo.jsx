import React from "react";

function MyPageInfo({ title, subTitle }) {
  return (
    <li className="info-list__item">
      <p className="info-list__item--title">{title}</p>
      <span className="info-list__item--sub-title">{subTitle}</span>
    </li>
  );
}

export default MyPageInfo;
