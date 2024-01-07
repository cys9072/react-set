import React, { forwardRef, useState } from "react";
import { SVG } from "constants";
import Layout from "Layout";
import Header from "Layout/Header";
import Back from "Layout/Header/Back";
import CenterTitle from "Layout/Header/CenterTitle";
import { useNavigate } from "react-router";
import ReactDatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import "react-datepicker/dist/react-datepicker.css";
import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";
import CustomBtn from "components/common/CustomBtn";
import CustomDatePicker from "components/CustomDatePicker";

export default function ReservationDetailPage() {
  const [isGuidePop, setIsGuidePop] = useState(false);
  const navigate = useNavigate();

  const [startDate, setStartDate] = useState(new Date());
  const [isBottomSheet, setIsBottomSheet] = useState(false);

  const CustomDatePickerButton = forwardRef(({ value, onClick }, ref) => (
    <button className="datepicker-custom-input" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));

  return (
    <>
      <Header reservation BottomNavigation>
        <Back />
        <CenterTitle title="골프존파크 삼성점" />
      </Header>
      <Layout mainClassName="PADDING_TOP_ZERO PADDING_BOTTOM_ZERO FULL_SIDES">
        <section className="reservation-section">
          <form>
            <fieldset>
              <legend>날짜 시간 선택</legend>
              <div className="reservation-section__item">
                <p className="reservation-section__item--title">날짜 · 시간 선택</p>
                <ol className="reservation-list">
                  <li className="reservation-list__item">
                    <div className="reservation-list__item--list">
                      <img src={SVG.CALENDAR_SVG} alt="calendar img" />
                      <ReactDatePicker open={false} locale={ko} shouldCloseOnSelect={false} dateFormat={`yyyy.MM.dd (E)`} selected={startDate} onInputClick={() => setIsBottomSheet(true)} customInput={<CustomDatePickerButton />} />
                      <BottomSheet blocking={true} open={isBottomSheet} onDismiss={() => setIsBottomSheet(false)}>
                        <CustomDatePicker startDate={startDate} setStartDate={setStartDate} handleCloseBottomSheet={() => setIsBottomSheet(false)} />
                        <CustomBtn text="날짜선택" buttonGrade="primary" addClass="MARGIN_BOTTOM_20 MARGIN_TOP_20" onClick={() => setIsBottomSheet(false)} />
                      </BottomSheet>
                    </div>
                  </li>
                  <li className="reservation-list__item">
                    <div className="reservation-list__item--list">
                      <img src={SVG.TIME_SVG} alt="clock img" />
                      <div className="select-wrap">
                        <div className="radio-input MARGIN_LEFT_5">
                          <input className="radio-input__input" type="radio" id="오전" name="time" defaultChecked />
                          <label className="radio-input__label" htmlFor="오전">
                            오전
                          </label>
                        </div>
                        <div className="radio-input MARGIN_LEFT_5">
                          <input className="radio-input__input" type="radio" id="오후" name="time" />
                          <label className="radio-input__label" htmlFor="오후">
                            오후
                          </label>
                        </div>
                      </div>
                      <div className="select-wrap MARGIN_LEFT_AUTO">
                        <div className="select-wrap__select ">
                          <select name="사" id="시">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                          </select>
                        </div>
                        <span className="MARGIN_LEFT_5">시</span>
                        <div className="select-wrap__select MARGIN_LEFT_5">
                          <select name="사" id="시">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                          </select>
                        </div>
                        <span className="MARGIN_LEFT_5">분</span>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
            </fieldset>
            <hr className="hr-thick" />

            <fieldset>
              <legend>캐디선택</legend>
              <div className="reservation-section__item">
                <ol className="reservation-list">
                  <li className="reservation-list__item">
                    <div className="reservation-list__item--list">
                      <div className="reservation-list__item--title">
                        <p>캐디 선택</p>
                        <button type="button" className="caddie-pop-button" onClick={() => setIsGuidePop((val) => !val)}>
                          <img src={SVG.NOTICE_BLUE_SVG} alt="notice img" />
                        </button>
                        {isGuidePop && (
                          <div className="notice-box" onClick={() => setIsGuidePop((val) => !val)}>
                            <div className="notice-box__item">
                              <p>S 캐디란?</p>
                              <span>같이 게임을 할 수 없음</span>
                            </div>

                            <div className="notice-box__item">
                              <p>라운드 S 캐디란?</p>
                              <span>같이 게임도 가능함</span>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="select-wrap MARGIN_LEFT_AUTO">
                        <div className="select-wrap__select ">
                          <select name="caddie">
                            <option value="S 캐디 1명">S 캐디 1명</option>
                            <option value="S 캐디 2명">S 캐디 2명</option>
                            <option value="라운드 S 캐디 1명">라운드 S 캐디 1명</option>
                            <option value="라운드 S 캐디 2명">라운드 S 캐디 2명</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="reservation-list__item">
                    <div className="reservation-list__item--list flex-wrap">
                      <div className="reservation-list__item--title">
                        <p>인원수</p>
                      </div>

                      <div className="select-wrap MARGIN_LEFT_AUTO">
                        <div className="select-wrap__increase-decrease">
                          <button type="button">
                            <img src={SVG.MINUS_BLUE_SVG} alt="minus img" />
                            {false && <img src={SVG.MINUS_DISABLE_SVG} alt="minus img disabled" />}
                          </button>
                          <span>4명</span>
                          <button type="button">
                            <img src={SVG.PLUS_BLUE_SVG} alt="plus img" />
                            {false && <img src={SVG.PLUS_DISABLE_SVG} alt="plus img disabled" />}
                          </button>
                        </div>
                      </div>
                      <p className="product-guide-text">*1게임, 18홀 기준 금액입니다.</p>
                    </div>
                  </li>
                </ol>
              </div>
            </fieldset>
            <hr className="hr-thick" />

            <fieldset>
              <legend>요청사항</legend>
              <div className="reservation-section__item">
                <p className="reservation-section__item--title">요청사항</p>
                <ol className="reservation-list">
                  <li className="reservation-list__item">
                    <div className="reservation-list__item--list">
                      <div className="select-wrap FULL_WIDTH">
                        <div className="select-wrap__text-area">
                          <textarea placeholder="요청사항을 입력해 주세요."></textarea>
                        </div>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
            </fieldset>
            <hr className="hr-thick" />

            <fieldset>
              <legend>결제하기</legend>
              <div className="reservation-section__item">
                <p className="reservation-section__item--title">결제하기</p>
                <ol className="reservation-list">
                  <li className="reservation-list__item">
                    <div className="reservation-list__item--list">
                      <div className="reservation-list__item--title">
                        <p className="FONT_SIZE_14">포인트 사용</p>
                      </div>

                      <div className="select-wrap MARGIN_LEFT_AUTO">
                        <div className="select-wrap__input">
                          <input type="text" defaultValue="8,300 P" />
                          <p className="select-wrap__input--guide-text">최소 1,000 포인트 이상 100 포인트 단위로 사용 가능합니다.</p>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="reservation-list__item MARGIN_TOP_40">
                    <div className="reservation-list__item--list">
                      <div className="reservation-list__item--title">
                        <p className="FONT_SIZE_14">예상적립포인트</p>
                      </div>

                      <div className="select-wrap MARGIN_LEFT_AUTO">
                        <span className="select-wrap__point-number FONT_SIZE_14">23,000P</span>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
            </fieldset>
            <hr className="hr-thick" />

            <fieldset>
              <legend>총 결제금액</legend>
              <div className="reservation-section__item">

            <p className="reservation-section__item--title">환불정책</p>
            <p className="refund-text">게임시간 이전 100% 환불 가능 </p>
            <p className="refund-text">게임시간 이후 환불 불가</p>
              </div>
            </fieldset>

            <hr className="hr-thick" />


            <fieldset>
              <legend>총 결제금액</legend>
              <div className="reservation-section__item">
                <ol className="reservation-list">
                  <li className="reservation-list__item">
                    <div className="reservation-list__item--list">
                      <div className="reservation-list__item--title">
                        <p className="FONT_WEIGHT_SEMI_BOLD">총 결제 금액</p>
                      </div>

                      <div className="select-wrap MARGIN_LEFT_AUTO">
                        <span className="select-wrap__payment-number">222,000원</span>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
            </fieldset>
            <div className="payment-button-box">
              <button type="button" className="btn-common btn--primary" onClick={() => navigate("/payment-detail/user")}>
                {/* TODO */}
                {/* if login type is store -> <button type="button" className="btn-common btn--primary" onClick={() => navigate("/payment-detail/user")}> */}
                220,000원 결제하기
              </button>
            </div>
          </form>
        </section>
      </Layout>
    </>
  );
}
