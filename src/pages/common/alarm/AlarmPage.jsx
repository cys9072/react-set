import React from "react";
import Layout from "Layout";
import Header from "Layout/Header";
import Back from "Layout/Header/Back";
import CenterTitle from "Layout/Header/CenterTitle";
// import EmptyContents from "components/common/EmptyContents";

export default function AlarmPage() {
  return (
    <>
      <Header>
        <Back />
        <CenterTitle title="알람" />
      </Header>
      <Layout mainClassName="visible-footer FULL_SIDES">
        <section class="alarm-section">
          <ol class="alarm-section__list">
            {new Array(10).fill("").map((_, index) => {
              return (
                <li class="alarm-item" key={index}>
                  <span class="alarm-item--dot"></span>
                  <p class="alarm-item--text ONE_LINE_ELLIPSIS">요청하신 S캐디가 배정되었습니다! 요청하신 S캐디가 배정되었습니다! </p>
                  <span class="alarm-item--date">2022.00.0{index}</span>
                </li>
              );
            })}
            {new Array(40).fill("").map((_, index) => {
              return (
                <li class="alarm-item" key={index}>
                  <span class="alarm-item--dot"></span>
                  <p class="alarm-item--text ONE_LINE_ELLIPSIS">요청하신 S캐디가 배정되었습니다! 요청하신 S캐디가 배정되었습니다! 요청하신 S캐디가 배정되었습니다! 요청하신 S캐디가 배정되었습니다!</p>
                  <span class="alarm-item--date">2022.00.0{index}</span>
                </li>
              );
            })}
          </ol>

          {/* If no List */}
          {/* <EmptyContents text="알림 내역이 없습니다." /> */}
        </section>
      </Layout>
    </>
  );
}
