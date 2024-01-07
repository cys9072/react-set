import { SVG } from "constants";
import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import CustomBtn from "../CustomBtn";
import ModalButtonBox from "./ModalButtonBox";

function ModalLocation({ onClose }) {
  return (
    <div className="custom-modal-local-wrap">
      <div className="local-wrap">
        <div className="local-box local-wrap__heading">
          <p>지역선택</p>
          <button type="button" onClick={onClose}>
            <img src={SVG.CLOSE_SVG} alt="close img" />
          </button>
        </div>

        <div className="local-box half local-wrap__sub-heading">
          <p>도/시</p>
          <p>시/구/군</p>
        </div>

        <div className="local-box half local-wrap__select">
          <ul className="local-select">
            {new Array(50).fill("").map((_, index) => {
              return (
                <li className="local-select__item" key={index}>
                  <button type="button" className="active">
                    서울
                  </button>
                </li>
              );
            })}
          </ul>
          <ul className="local-select">
            {new Array(50).fill("").map((_, index) => {
              return (
                <li className="local-select__item" key={index}>
                  <button type="button">강남구</button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="local-box local-wrap__heading">
          <ScrollContainer className="scroll-container">
            {new Array(10).fill("").map((_, index) => {
              return (
                <div key={index} className="scroll-item">
                  <div className="local-preview">
                    <span className="local-preview__title">서울시 강남구</span>
                    <button type="button" className="local-preview__close-button">
                      <img src={SVG.CLOSE_WHITE_SVG} alt="close img" />
                    </button>
                  </div>
                </div>
              );
            })}
          </ScrollContainer>
        </div>
        <ModalButtonBox>
          <CustomBtn text="완료" buttonGrade="tertiary" onClick={onClose} />
        </ModalButtonBox>
      </div>
    </div>
  );
}

export default ModalLocation;
