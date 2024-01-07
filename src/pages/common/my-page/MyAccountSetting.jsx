import React, { useState } from "react";
import Layout from "Layout";
import Header from "Layout/Header";
import CenterTitle from "Layout/Header/CenterTitle";
import { SVG } from "constants";
import CustomBtn from "components/common/CustomBtn";
import CustomModal from "components/common/CustomModal";
import ModalHeading from "components/common/CustomModal/ModalHeading";
import ModalText from "components/common/CustomModal/ModalText";
import HorizonLineThin from "components/common/HorizonLineThin";
import ModalButtonBox from "components/common/CustomModal/ModalButtonBox";
import { useNavigate } from "react-router";
import Back from "Layout/Header/Back";

export default function MyAccountSetting({ adminType }) {
  console.log("adminType", adminType);
  const [openModal, setOpenModal] = useState(false);
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <Header mypage>
        <Back />
        <CenterTitle title="계정관리" />
      </Header>
      <Layout>
        <CustomModal isOpen={openModal} handleClose={() => setOpenModal(false)}>
          <ModalHeading heading="알림" />
          <HorizonLineThin />
          <ModalText
            text={
              <>
                보유중인 캐시 및 포인트가 소멸될 수 있습니다.
                <br /> 정말 탈퇴하시겠습니까?
              </>
            }
          />
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
          <ModalText text="회원 탈퇴가 완료되었습니다." />
          <HorizonLineThin />
          <ModalButtonBox>
            <CustomBtn
              text="확인"
              type="tertiary"
              onClick={() => {
                navigate("/");
                setOpenConfirmModal(false);
              }}
            />
          </ModalButtonBox>
        </CustomModal>
        <section className="my-page-account-setting-section">
          <div className="my-page__link-wrapper">
            <CustomBtn buttonGrade="primary" text="로그아웃" addClass="btn--my-page-bg border-bottom-block" iconSrc={SVG.LOG_OUT_SVG} imgAlt="profile img" rightArr />
            <CustomBtn buttonGrade="primary" text="탈퇴" addClass="btn--my-page-bg border-bottom-block" iconSrc={SVG.SIGN_OUT_SVG} imgAlt="profile img" rightArr onClick={() => setOpenModal(true)} />
          </div>
        </section>
      </Layout>
    </>
  );
}
