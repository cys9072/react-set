import React from "react";
import Layout from "Layout";
import Header from "Layout/Header";
import Back from "Layout/Header/Back";
import CenterTitle from "Layout/Header/CenterTitle";
import ScheduleItem from "components/ScheduleItem";

export default function SchedulePage() {
  return (
    <>
      <Header reservation>
        <Back />
        <CenterTitle title="예약 내역" />
      </Header>
      <Layout>
        <section className="schedule-section">
          <ol className="schedule-list">
            <ScheduleItem title="이용점 명" href="/payment-detail/user" btnTitle="결제완료" linkType="payment" />
            <ScheduleItem title="이용점 명" href="/assign-complete/user" btnTitle="배정완료" linkType="assign" />
            <ScheduleItem title="이용점 명" href="/payment-cancel" btnTitle="예약취소" linkType="payment" />
          </ol>
        </section>
      </Layout>
    </>
  );
}
