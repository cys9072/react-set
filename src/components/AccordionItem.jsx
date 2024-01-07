import { SVG } from "constants";
import React, { useState } from "react";

function AccordionItem({ title, text }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="accordion-item">
      <button type="button" className="accordion-item__title" onClick={() => setIsOpen((val) => !val)}>
        <span>Q.&nbsp;&nbsp;</span>
        <p>{title}</p>
        <span className={`accordion-item__title--arrow ${isOpen ? "open" : "close"}`}>
          <img src={SVG.DOWN_ARR_SVG} alt="down arrow img" />
        </span>
      </button>
      {isOpen && (
        <div className="accordion-item__contents">
          <span>A.&nbsp;&nbsp;</span>
          <p>{text}</p>
        </div>
      )}
    </div>
  );
}

export default AccordionItem;
