import React from "react";
import { getYear, getMonth } from "date-fns"; // getYear, getMonth
import ReactDatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import "react-datepicker/dist/react-datepicker.css";
import "react-spring-bottom-sheet/dist/style.css";
import { SVG } from "constants";

function CustomDatePicker({ startDate, setStartDate, handleCloseBottomSheet }) {
  const months = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];
  return (
    <div className="custom-datePicker-wrap">
      <ReactDatePicker
        //
        calendarClassName="custom-datePicker-wrap"
        renderCustomHeader={({ date, decreaseMonth, increaseMonth, prevMonthButtonDisabled, nextMonthButtonDisabled }) => (
          <div className="picker-head">
            <div className="picker-head__top">
              <p className="picker-head__year">{getYear(date)}년</p>
              <button className="picker-head__sheet-button" type="button" onClick={handleCloseBottomSheet}>
                <img src={SVG.CLOSE_SVG} alt="" />
              </button>
            </div>
            <div className="picker-head__bottom">
              <p className="picker-head__month">{months[getMonth(date)]}</p>
              <button type="button"></button>
              <div className="picker-head__button-wrap">
                <button type="button" className="picker-month-btn picker-month-btn__prev-btn" onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                  <img src={SVG.PICKER_PREV_SVG} alt="prev img" />
                </button>
                <button type="button" className="picker-month-btn picker-month-btn__next-btn" onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                  <img src={SVG.PICKER_PREV_SVG} alt="prev img" />
                </button>
              </div>
            </div>
          </div>
        )}
        inline
        open
        locale={ko}
        shouldCloseOnSelect={false}
        dateFormat={`MM.dd (E)`}
        selected={startDate}
        onChange={(date) => {
          setStartDate(date);
        }}
      />
    </div>
  );
}

export default CustomDatePicker;
