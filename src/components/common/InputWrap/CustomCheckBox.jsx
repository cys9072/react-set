import React from "react";

function CustomCheckBox({ id, required, labelText, children }) {
  return (
    <div className="checkbox-wrapper">
      <label className="checkbox-wrapper__label" htmlFor={id}>
        <input
          // checked
          className="checkbox-wrapper__input"
          id={id}
          type="checkbox"
          // name={name}
          // onChange={onChange}
          // value={value}
          // pattern={pattern}
        />
        <span className="checkbox-wrapper__span">{labelText}</span>
        {required && <span className="checkbox-wrapper__required-text">(필수)</span>}
      </label>
      {children}
    </div>
  );
}

export default CustomCheckBox;
