import React, { useState } from "react";
import { SVG } from "constants";
import Layout from "Layout";
import Header from "Layout/Header";
import Back from "Layout/Header/Back";
import CenterTitle from "Layout/Header/CenterTitle";
import DetailItem from "components/common/DetailItem";
import DetailList from "components/common/DetailItem/DetailList";
import DetailIconList from "components/common/DetailItem/DetailIconList";
import HorizonLineThick from "components/common/HorizonLineThick";

import CustomModal from "components/common/CustomModal";
import ModalHeading from "components/common/CustomModal/ModalHeading";
import HorizonLineThin from "components/common/HorizonLineThin";
import ModalText from "components/common/CustomModal/ModalText";
import ModalButtonBox from "components/common/CustomModal/ModalButtonBox";
import CustomBtn from "components/common/CustomBtn";
import { useNavigate } from "react-router";

export default function ReservationReceptionPage() {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <Header reservation BottomNavigation>
        <Back href="/reservation/caddie" />
        <CenterTitle title="예약접수" />
      </Header>
      <Layout mainClassName="PADDING_TOP_ZERO PADDING_BOTTOM_ZERO FULL_SIDES">
        <CustomModal isOpen={openModal} handleClose={() => setOpenModal(false)}>
          <ModalHeading heading="알림" />
          <HorizonLineThin />
          <ModalText text="취소가 완료되었습니다" />
          {/* <ModalText text="해당 예약 취소는 관리자에게 문의해주세요." /> */}
          <HorizonLineThin />
          <ModalButtonBox>
            <CustomBtn
              text="확인"
              type="tertiary"
              onClick={() => {
                setOpenModal(false);
                navigate("/");
              }}
            />
          </ModalButtonBox>
        </CustomModal>
        <section className="detail-section">
          <DetailItem title="예약 일시">
            <DetailIconList
              imgSrc={SVG.CALENDAR_SVG}
              imgAlt="calendar img"
              subTitle="2022.12.30 (금)"
              className="FONT_WEIGHT_SEMI FONT_SIZE_16"
            />
            <DetailIconList
              imgSrc={SVG.TIME_SVG}
              imgAlt="time img"
              subTitle="오전 12:30"
              className="FONT_WEIGHT_SEMI FONT_SIZE_16"
            />
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
            <DetailList listTitle="캐디 유형" listSubTitle="S캐디" className="FONT_WEIGHT_SEMI" />
            <DetailList listTitle="인원수" listSubTitle="3명" className="FONT_WEIGHT_SEMI" />
          </DetailItem>
          <HorizonLineThick />
          <DetailItem title="요청 사항">
            <textarea readOnly defaultValue="요청사항 텍스트가 적혀있는 영역입니다." />
          </DetailItem>
          <HorizonLineThick />

          <DetailItem title="금액">
            <DetailList listTitle="금액" listSubTitle="220,000 원" />
          </DetailItem>
          <HorizonLineThick />

          <DetailItem title="캐디 메뉴얼 및 유의사항" addClass="grey-bg">
            <dl className="dl-list">
              <dt className="dl-list__title">[S캐디 메뉴얼]</dt>
              <dd className="dl-list__content">
                1. 게임시작 20분 전에 도착하여 미리 셋팅해 놓는다.
              </dd>
              <dd className="dl-list__content">2. S캐디 유니폼과 편안한 신발을 착용한다.</dd>
            </dl>

            <dl className="dl-list">
              <dt className="dl-list__title">[S캐디 유의사항]</dt>
              <dd className="dl-list__content">1. 시간엄수 : 20분 전 도착</dd>
              <dd className="dl-list__content">2. 복장 준수 : S캐디 유니폼 착용, 편안한 신발</dd>
              <dd className="dl-list__content">3. 안전사고 주의 : 골프채, 공 등</dd>
              <dd className="dl-list__content">4. 신체접촉 금지</dd>
            </dl>
          </DetailItem>
          <HorizonLineThick />
          <div className="detail-button-box">
            <CustomBtn
              text="출근 취소"
              buttonGrade="primary"
              addClass="btn--white-bg"
              onClick={() => setOpenModal(true)}
            />
          </div>
        </section>
      </Layout>
    </>
  );
}
