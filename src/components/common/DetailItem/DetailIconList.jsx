import React from "react";

function DetailIconList({ imgSrc, imgAlt, className, subTitle }) {
  return (
    <ol className="detail-list icon">
      <li className="detail-list__item">
        <img src={imgSrc} alt={imgAlt} />
      </li>
      <li className="detail-list__item">
        <p className={`detail-list__item--sub-title ${className ? className : ""}`}>{subTitle}</p>
      </li>
    </ol>
  );
}

export default DetailIconList;
