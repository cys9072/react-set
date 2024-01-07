import React from "react";

// Wrap it in strong tags to insert blue text.
// EX)
// <DetailHeading title={ <>예약완료! <strong>S캐디</strong>가 배정중!</>} />

function DetailHeading({ title, className }) {
  return <h2 className={`detail-section__heading ${className ? className : ""}`}>{title}</h2>;
}

export default DetailHeading;
