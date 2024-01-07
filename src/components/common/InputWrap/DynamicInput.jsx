import React from "react";

function DynamicInput({ id, value, onChange, inputType, labelText, placeholder, required, children, guideText, validText, inputGrade, valid, invalid, disabled }) {
  return (
    <div className="input-wrap__dynamic-input-box">
      {labelText && (
        <label htmlFor={id}>
          {labelText}
          {required && <span className="required-mark">*</span>}
        </label>
      )}
      <div className="dynamic-box">
        <div className="dynamic-box__input-area">
          <input
            type={inputType ? inputType : "text"}
            className={`dynamic-input ${inputGrade ? inputGrade : "primary"} ${invalid ? "invalid" : ""}`}
            placeholder={placeholder}
            required={required}
            id={id}
            defaultValue={value}
            disabled={disabled}
            // readOnly={readOnly}
            // name={name}
            onChange={onChange}
          />
          {children}
        </div>

        {invalid && <div className="dynamic-box__guide-text-area">{guideText && <p className={`dynamic-box__guide-text-area--guide-text ${invalid ? "invalid" : ""}`}>{guideText}</p>}</div>}
        {valid && <div className="dynamic-box__guide-text-area">{validText && <p className={`dynamic-box__guide-text-area--guide-text`}>{validText}</p>}</div>}
      </div>
    </div>
  );
}

export default DynamicInput;

// <div class="input-wrap__box">
// <div class="input-wrap__box--primary">
//     <label class="input-wrap__box--primary-label" for="">primary인풋 액티브</label>
//     <input class="input-wrap__box--primary-input invalid" type="text" placeholder="아이디를 입력해주세요">
//     <div class="input-wrap__box--guide-text">
//         <span>가이드 텍스트</span>
//     </div>
// </div>
// </div>
