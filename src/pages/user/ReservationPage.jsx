import React, { useState } from "react";
import { SVG } from "constants";
import Layout from "Layout";
import Header from "Layout/Header";
import Logo from "Layout/Header/Logo";
import Alarm from "Layout/Header/Alarm";
import CustomLink from "components/common/CustomLink";
import NaverMap from "components/NaverMap";

export default function ReservationPage() {
  const [isClick, setIsClick] = useState(false);
  return (
    <>
      <Header reservation BottomNavigation>
        <Logo />
        <Alarm />
      </Header>
      <Layout mainClassName="PADDING_BOTTOM_ZERO">
        {!isClick && (
          <>
            <section className="map-section">
              <button className="map-section--button" type="button" onClick={() => setIsClick((val) => !val)}>
                어디서 부르시나요?
              </button>
              <NaverMap />
              <div className="bottom-button MARGIN_TOP_20">
                <CustomLink href="/reservation-detail/user" linkGrade="primary" text="예약 하기" />
              </div>
            </section>
          </>
        )}
        {isClick && (
          <section className="search-section">
            <form className="search-section__form">
              <fieldset>
                <legend>map search</legend>
                <div className="search-input-box">
                  <button type="button" className="search-input-box__back-button" onClick={() => setIsClick((val) => !val)}>
                    <img src={SVG.BACK_SVG} alt="back button" />
                  </button>
                  <input className="search-input-box__input" type="search" placeholder="주소를 입력하세요." />
                  <button type="submit" className="search-input-box__search-button">
                    <img src={SVG.SEARCH_GREY_SVG} alt="search button" />
                  </button>
                </div>
              </fieldset>
            </form>
            <ul className="search-section__list">
              {new Array(5).fill("").map((_, index) => {
                return (
                  <li className="search-item" key={index}>
                    <button className="search-item--button" onClick={() => setIsClick((val) => !val)}>
                      <img src={SVG.MAP_MAKER_BLACK_SVG} alt="marker-img" />
                      <span className="ONE_LINE_ELLIPSIS">이용점</span>
                    </button>
                  </li>
                );
              })}
              {new Array(5).fill("").map((_, index) => {
                return (
                  <li className="search-item" key={index}>
                    <button className="search-item--button" onClick={() => setIsClick((val) => !val)}>
                      <img src={SVG.MAP_MAKER_BLACK_SVG} alt="marker-img" />
                      <span className="ONE_LINE_ELLIPSIS">이용점이용점이용점이용점이용점이용점이용점이용점이용점이용점</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </section>
        )}
      </Layout>
    </>
  );
}
