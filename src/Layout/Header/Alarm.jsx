import { SVG } from "constants";
import React from "react";
import { Link } from "react-router-dom";

function Alarm() {
  return (
    <li className="nav-top__list--alarm">
      <Link to="/alarm">
        <img src={SVG.ALARM_SVG} alt="alarm" />
      </Link>
    </li>
  );
}

export default Alarm;
