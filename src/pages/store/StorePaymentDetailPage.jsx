import React, { useState } from "react";
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

import CustomModal from "components/common/CustomModal";
import ModalHeading from "components/common/CustomModal/ModalHeading";
import HorizonLineThin from "components/common/HorizonLineThin";
import ModalText from "components/common/CustomModal/ModalText";
import ModalButtonBox from "components/common/CustomModal/ModalButtonBox";
import CustomBtn from "components/common/CustomBtn";
import { useNavigate } from "react-router";

export default function StorePaymentDetailPage() {
  const [openModal, setOpenModal] = useState(false);
  const [openConfirmModal, setOpenConfirmModal] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      <Header reservation BottomNavigation>
        <Back href="/schedule-list/store" />
        <CenterTitle title="결제 완료" />
      </Header>
      <Layout mainClassName="PADDING_TOP_ZERO PADDING_BOTTOM_ZERO FULL_SIDES">
        <CustomModal isOpen={openModal} handleClose={() => setOpenModal(false)}>
          <ModalHeading heading="알림" />
          <HorizonLineThin />
          <ModalText text="정말 취소하시겠습니까?" />
          <HorizonLineThin />
          <ModalButtonBox>
            <CustomBtn
              text="예"
              type="tertiary"
              addClass="btn--white-bg"
              onClick={() => {
                setOpenModal(false);
                setOpenConfirmModal(true);
              }}
            />
            <CustomBtn text="아니오" type="tertiary" addClass="MARGIN_LEFT_10" onClick={() => setOpenModal(false)} />
          </ModalButtonBox>
        </CustomModal>

        <CustomModal isOpen={openConfirmModal} handleClose={() => setOpenConfirmModal(false)}>
          <ModalHeading heading="알림" />
          <HorizonLineThin />
          <ModalText text="취소가 완료되었습니다." />
          <HorizonLineThin />
          <ModalButtonBox>
            <CustomBtn
              text="확인"
              type="tertiary"
              onClick={() => {
                navigate("/payment-cancel");
                setOpenConfirmModal(false);
              }}
            />
          </ModalButtonBox>
        </CustomModal>
        <section className="detail-section">
          <DetailHeading
            title={
              <>
                예약완료! <strong>S캐디</strong>가 배정중!
              </>
            }
          />
          <DetailItem title="예약 일시">
            <DetailIconList imgSrc={SVG.CALENDAR_SVG} imgAlt="calendar img" subTitle="2022.12.30 (금)" className="FONT_WEIGHT_SEMI FONT_SIZE_16" />
            <DetailIconList imgSrc={SVG.TIME_SVG} imgAlt="time img" subTitle="오전 12:30" className="FONT_WEIGHT_SEMI FONT_SIZE_16" />
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
            <DetailList listTitle="결제 시 적립 포인트" listSubTitle="23,000 p" />
            <DetailList listTitle="총 적립 포인트" listSubTitle="31,300 p" className="FONT_SIZE_16 FONT_WEIGHT_SEMI BLUE" />
          </DetailItem>
          <HorizonLineThick />

          <div className="detail-button-box">
            <CustomBtn text="예약 취소" buttonGrade="primary" addClass="btn--white-bg" onClick={() => setOpenModal(true)} />
          </div>
          <BannerLInk bannerLink="/" imgSrc={JPG.MAIN_BANNER_01} imgAlt="advertisement-banner-img" />
        </section>
      </Layout>
    </>
  );
}
