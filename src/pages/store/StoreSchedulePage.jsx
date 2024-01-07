import React from "react";
import Layout from "Layout";
import Header from "Layout/Header";
import CenterTitle from "Layout/Header/CenterTitle";
import Alarm from "Layout/Header/Alarm";
import StoreScheduleItem from "components/StoreScheduleItem";
import CustomLink from "components/common/CustomLink";
import { SVG } from "constants";

export default function StoreSchedulePage() {
  return (
    <>
      <Header reservation>
        <CenterTitle title="예약 내역" />
        <Alarm />
      </Header>
      <Layout>
        <section className="schedule-section">
          <div className="schedule-section__store-add">
            <CustomLink href="/reservation-detail/store" iconSrc={SVG.PLUS_BLUE_NO_CIRCLE_SVG} imgAlt="plus link img" text="추가" addClass="fit-element btn--white-bg" />
          </div>
          <ol className="card-list">
            <StoreScheduleItem href="/payment-detail/store" btnTitle="결제완료" linkType="payment" />
            <StoreScheduleItem href="/assign-complete/store" btnTitle="배정완료" linkType="assign" />
            <StoreScheduleItem href="/payment-cancel" btnTitle="취소완료" linkType="payment" />
          </ol>
        </section>
      </Layout>
    </>
  );
}
