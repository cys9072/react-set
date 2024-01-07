import React from "react";

function DetailItem({ title, children, addClass }) {
  return (
    <div className={`detail__item ${addClass ? addClass : ""}`}>
      <p className="detail__item--title">{title}</p>
      {children}
    </div>
  );
}

export default DetailItem;
