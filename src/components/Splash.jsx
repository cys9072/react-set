import { SVG } from "constants";
import React from "react";

function Splash() {
  return (
    <div id="splash-cover">
      <img src={SVG.SPLASH_SVG} alt="splash img" />
    </div>
  );
}

export default Splash;
