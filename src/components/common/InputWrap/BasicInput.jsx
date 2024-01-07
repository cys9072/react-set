import React from "react";

function BasicInput({ placeholder }) {
  return (
    <div className="input-wrap__basic-input-box">
      <input type="text" className="basic-input" placeholder={placeholder} />
    </div>
  );
}

export default BasicInput;
