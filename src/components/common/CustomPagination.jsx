import { SVG } from "constants";
import React from "react";

function CustomPagination() {
  return (
    <div className="pagination-wrap">
      <button type="button" className="pagination-button prev-button active">
        <img src={SVG.NEXT_CIRCLE_SVG} alt="back circle img" />
      </button>
      <div className="pagination-button-list">
        <button type="button" className="pagination-button-list__button active">
          1
        </button>
        <button type="button" className="pagination-button-list__button">
          2
        </button>
        <button type="button" className="pagination-button-list__button">
          3
        </button>
        <button type="button" className="pagination-button-list__button">
          4
        </button>
        <button type="button" className="pagination-button-list__button">
          5
        </button>
      </div>
      <button type="button" className="pagination-button next-button">
        <img src={SVG.NEXT_CIRCLE_SVG} alt="back circle img" />
      </button>
    </div>
  );
}

export default CustomPagination;
