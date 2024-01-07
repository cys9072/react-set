import React, { useState } from "react";
import Layout from "Layout";
import Header from "Layout/Header";
import Back from "Layout/Header/Back";
import CenterTitle from "Layout/Header/CenterTitle";
import { SVG } from "constants";
import ScrollContainer from "react-indiana-drag-scroll";
import CustomBtn from "components/common/CustomBtn";
import CaddieSearchItem from "components/CaddieSearchItem";
import CustomPagination from "components/common/CustomPagination";
import CustomModal from "components/common/CustomModal";
import ModalLocation from "components/common/CustomModal/ModalLocation";

export default function ReservationCaddiePage() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Header reservation>
        <Back />
        <CenterTitle title="예약" />
      </Header>
      <Layout mainClassName="PADDING_TOP_ZERO ">
        <CustomModal isOpen={openModal} handleClose={() => setOpenModal(false)}>
          <ModalLocation onClose={() => setOpenModal(false)} />
        </CustomModal>

        <section className="reservation-search-section">
          <div className="reservation-search-box">
            <div className="reservation-search__item">
              <div className="reservation-search__item--title">
                <p>보유중인 캐시</p>
                <div>
                  <span className="reservation-search__item--subtitle">14,000C</span>
                </div>
              </div>
            </div>

            <div className="reservation-search__item">
              <div className="reservation-search__item--title">
                <p>지역 선택</p>
                <div>
                  <button type="button" onClick={() => setOpenModal(true)}>
                    <img src={SVG.ROUND_SETTING_SVG} alt="setting img" />
                  </button>
                </div>
              </div>

              <div className="reservation-search__item--contents">
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
            </div>

            <div className="reservation-search__item">
              <div className="reservation-search__item--title">
                <p>캐디 유형</p>
              </div>

              <div className="reservation-search__item--contents">
                <div className="caddie-type">
                  <CustomBtn buttonType="primary" text="S 캐디" addClass="btn--white-bg" />
                  {/* <CustomBtn buttonType="primary" text="S 캐디" /> */}
                  {/* <CustomBtn buttonType="primary" text="S 캐디" disabled /> */}
                  <CustomBtn buttonType="primary" text="라운드 S 캐디" disabled />
                </div>
              </div>
            </div>
          </div>

          <div className="reservation-result-list">
            <div className="select-wrap">
              <div className="select-wrap__select MARGIN_LEFT_AUTO">
                <select name="filter" id="filter">
                  <option value="접수순">접수순</option>
                  <option value="날짜순">날짜순</option>
                  <option value="높은 가격순">높은 가격순</option>
                </select>
              </div>
            </div>
            <ol className="card-list">
              <CaddieSearchItem />
              <CaddieSearchItem />
            </ol>
          </div>
          <CustomPagination />
        </section>
      </Layout>
    </>
  );
}
