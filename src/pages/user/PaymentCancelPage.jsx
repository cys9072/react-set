import React from "react";
import { JPG, SVG } from "constants";
import Layout from "Layout";
import Header from "Layout/Header";
import Back from "Layout/Header/Back";
import CenterTitle from "Layout/Header/CenterTitle";
import DetailItem from "components/common/DetailItem";
import DetailList from "components/common/DetailItem/DetailList";
import DetailHeading from "components/common/DetailItem/DetailHeading";
import DetailIconList from "components/common/DetailItem/DetailIconList";
import HorizonLineThick from "components/common/HorizonLineThick";
import BannerLInk from "components/common/BannerLInk";

export default function PaymentCancelPage() {
  return (
    <>
      <Header reservation>
        <Back href="/schedule-list/user" />
        {/* if login type is store -> <Back href="/schedule-list/store" /> */}
        <CenterTitle title="취소 완료" />
      </Header>
      <Layout mainClassName="PADDING_TOP_ZERO FULL_SIDES">
        <section className="detail-section">
          <DetailHeading title="예약이 취소 되었습니다." />
          <DetailItem title="예약 일시">
            <DetailIconList imgSrc={SVG.CALENDAR_SVG} imgAlt="calendar img" subTitle="2022.12.30 (금)" className="FONT_WEIGHT_SEMI FONT_SIZE_16" />
            <DetailIconList imgSrc={SVG.TIME_SVG} imgAlt="time img" subTitle="오전 12:30" className="FONT_WEIGHT_SEMI FONT_SIZE_16" />
          </DetailItem>
          <HorizonLineThick />

          <DetailItem title="예약 지점">
            {/* <Link to="tel:1599-1599">1599</Link> */}
            <a href="tel:1599-1599">
              이용점 명&nbsp;&nbsp;
              <img src={SVG.SERVICE} alt="phone img" />
            </a>
          </DetailItem>
          <HorizonLineThick />

          <DetailItem title="예약 정보">
            <DetailList listTitle="캐디 유형" listSubTitle="S캐디" className="BLUE FONT_WEIGHT_SEMI" />
            <DetailList listTitle="캐디 수" listSubTitle="3명" className="BLUE FONT_WEIGHT_SEMI" />
            <DetailList listTitle="인원 수" listSubTitle="4명" className="BLUE FONT_WEIGHT_SEMI" />
          </DetailItem>
          <HorizonLineThick />
          <DetailItem title="요청 사항">
            <textarea readOnly defaultValue="요청사항 텍스트가 적혀있는 영역입니다." />
          </DetailItem>
          <HorizonLineThick />
          <DetailItem title="사용 포인트">
            <DetailList listTitle="사용 포인트" listSubTitle="8,300p" />
          </DetailItem>
          <HorizonLineThick />
          <DetailItem title="결제 금액">
            <DetailList listTitle="결제 수단" listSubTitle="신용카드" className="FONT_WEIGHT_SEMI" />
            <DetailList listTitle="결제 금액" listSubTitle="220,000 원" className="FONT_SIZE_16" />
          </DetailItem>
          <HorizonLineThick />
          <DetailItem title="총 적립 포인트">
            <DetailList listTitle="기존 포인트" listSubTitle="8,300 p" />
            <DetailList listTitle="총 적립 포인트" listSubTitle="- 23,000 p" className="FONT_SIZE_16 FONT_WEIGHT_SEMI BLUE" />
          </DetailItem>
          <HorizonLineThick />

          <BannerLInk bannerLink="/" imgSrc={JPG.MAIN_BANNER_01} imgAlt="advertisement-banner-img" />
        </section>
      </Layout>
    </>
  );
}
