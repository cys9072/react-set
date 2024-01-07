import React, { useState } from "react";
import Layout from "Layout";
import Header from "Layout/Header";
import Back from "Layout/Header/Back";
import CenterTitle from "Layout/Header/CenterTitle";
import InputWrap from "components/common/InputWrap";
import CustomBtn from "components/common/CustomBtn";
import CustomModal from "components/common/CustomModal";
import ModalHeading from "components/common/CustomModal/ModalHeading";
import HorizonLineThin from "components/common/HorizonLineThin";
import ModalText from "components/common/CustomModal/ModalText";
import ModalButtonBox from "components/common/CustomModal/ModalButtonBox";
import DynamicInput from "components/common/InputWrap/DynamicInput";

export default function SignInPage() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Header>
        <Back href="/" />
        <CenterTitle title="일반 로그인" />
      </Header>
      <Layout>
        <CustomModal isOpen={openModal} handleClose={() => setOpenModal(false)}>
          <ModalHeading heading="알림" />
          <HorizonLineThin />
          <ModalText text="일치하는 회원 정보가 없습니다." />
          <HorizonLineThin />
          <ModalButtonBox>
            <CustomBtn text="확인" buttonGrade="tertiary" onClick={() => setOpenModal(false)} />
          </ModalButtonBox>
        </CustomModal>
        <section className="sign-in-section">
          <form>
            <fieldset>
              <legend>로그인</legend>
              <InputWrap>
                <DynamicInput required labelText="이메일" placeholder="이메일을 입력하세요." />
                <DynamicInput required labelText="비밀번호" placeholder="비밀번호를 입력하세요." />
              </InputWrap>
            </fieldset>
            <div className="sign-in-section__bottom">
              <CustomBtn buttonGrade="primary" text="로그인" onClick={() => setOpenModal(true)} />
            </div>
          </form>
          <div className="link-box">
            <a href="/find-email">이메일 찾기</a>
            <span>|</span>
            <a href="/find-password">비밀번호 찾기</a>
          </div>
        </section>
      </Layout>
    </>
  );
}
