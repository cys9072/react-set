import React from "react";
import { useNavigate } from "react-router";

function Back({ href }) {
  const navigate = useNavigate();
  return (
    <li className="nav-top__list--back">
      <div
        style={{ cursor: "pointer" }}
        onClick={() => {
          if (href) {
            navigate(href);
            return;
          }
          if (!href) {
            navigate(-1);
            return;
          }
        }}
      >
        <img src="/asset/image/icons/back-arr.svg" alt="back-arr" />
      </div>
    </li>
  );
}

export default Back;
