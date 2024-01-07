import React, { useState } from "react";
import { SVG } from "constants";
import Layout from "Layout";
import Header from "Layout/Header";
import Back from "Layout/Header/Back";
import CenterTitle from "Layout/Header/CenterTitle";
import DetailItem from "components/common/DetailItem";
import DetailIconList from "components/common/DetailItem/DetailIconList";
import HorizonLineThick from "components/common/HorizonLineThick";

import CustomModal from "components/common/CustomModal";
import ModalHeading from "components/common/CustomModal/ModalHeading";
import HorizonLineThin from "components/common/HorizonLineThin";
import ModalText from "components/common/CustomModal/ModalText";
import ModalButtonBox from "components/common/CustomModal/ModalButtonBox";
import CustomBtn from "components/common/CustomBtn";
/* eslint-disable no-unused-vars */
import CustomLink from "components/common/CustomLink";

export default function MyOtherEducationListDetailPage() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Header mypage BottomNavigation>
        <Back />
        <CenterTitle title="교육 일정" />
      </Header>
      <Layout mainClassName="PADDING_TOP_ZERO PADDING_BOTTOM_ZERO FULL_SIDES">
        <CustomModal isOpen={openModal} handleClose={() => setOpenModal(false)}>
          <ModalHeading heading="알림" />
          <HorizonLineThin />
          <ModalText text="이미 신청한 교육이 있습니다." />
          <HorizonLineThin />
          <ModalButtonBox>
            <CustomBtn
              text="확인"
              type="tertiary"
              onClick={() => {
                setOpenModal(false);
              }}
            />
          </ModalButtonBox>
        </CustomModal>
        <section className="detail-section">
          <DetailItem title="교육 일시">
            <DetailIconList imgSrc={SVG.CALENDAR_SVG} imgAlt="calendar img" subTitle="2022.12.30 (금)" className="FONT_WEIGHT_SEMI FONT_SIZE_16" />
            <DetailIconList imgSrc={SVG.TIME_SVG} imgAlt="time img" subTitle="오전 12:30" className="FONT_WEIGHT_SEMI FONT_SIZE_16" />
          </DetailItem>
          <HorizonLineThick />

          <DetailItem title="예약 지점">
            <span>서울시 강남구 삼성로 000로 00빌딩 12층</span>
          </DetailItem>
          <HorizonLineThick />

          <DetailItem title="안내">
            <div
              className="danger-init"
              dangerouslySetInnerHTML={{
                __html: `<p>안내 사항 내용이 들어갑니다. 안내 사항 내용이 들어갑니다. 안내 사항 내용이 들어갑니다. 안내 사항 내용이 들어갑니다. 안내 사항 내용이 들어갑니다. 안내 사항 내용이 들어갑니다. 안내 사항 내용이 들어갑니다. 안내 사항 내용이 들어갑니다. 안내 사항 내용이 들어갑니다. 안내 사항 내용이 들어갑니다. 안내 사항 내용이 들어갑니다. 안내 사항 내용이 들어갑니다. 안내 사항 내용이 들어갑니다. 안내 사항 내용이 들어갑니다. 안내 사항 내용이 들어갑니다. </p>`,
              }}
            ></div>
          </DetailItem>
          <HorizonLineThick />

          <div className="detail-button-box">
            {/* TODO :: if success <CustomLink href="/my-page/work/education/education-list" text="신청하기" linkGrade="primary" /> */}
            <CustomBtn text="신청하기" buttonGrade="primary" onClick={() => setOpenModal(true)} />
          </div>
        </section>
      </Layout>
    </>
  );
}
