import { LOGO } from "constants";
import React from "react";

function Logo() {
  return (
    <li className="nav-top__list--logo">
      <h1>
        <a href="/">
          <img src={LOGO} alt="logo" />
        </a>
      </h1>
    </li>
  );
}

export default Logo;
