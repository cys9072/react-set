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
import CustomLink from "components/common/CustomLink";

export default function FindEmailPage() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Header BottomNavigation>
        <Back />
        <CenterTitle title="이메일 찾기" />
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
        <section className="find-email-section">
          <form>
            <fieldset>
              <legend>로그인</legend>
              <InputWrap>
                <DynamicInput
                  required
                  labelText="이름"
                  id="name-check"
                  placeholder="이름을 입력하세요."
                  guideText="이름을 확인해주세요."
                  // invalid
                />
                <DynamicInput
                  required
                  labelText="휴대폰 번호"
                  id="phone"
                  placeholder="휴대폰 번호를 입력하세요."
                  guideText="휴대폰 번호를 확인해주세요."
                  // invalid
                >
                  <CustomBtn text="인증코드 발송" buttonGrade="primary" disabled />
                </DynamicInput>
                <DynamicInput
                  required
                  id="code-confirm"
                  placeholder="인증번호를 입력하세요."
                  guideText="인증번호를 확인해주세요."
                  // invalid
                >
                  <p className="time-check">03:00</p>
                </DynamicInput>

                <button className="re-send-button" type="button">
                  재전송
                </button>
              </InputWrap>
            </fieldset>
          </form>
        </section>
        <div className="bottom-button">
          <CustomLink href="/find-email-complete" linkGrade="primary" text="확인" />
          {/* <CustomBtn text="확인" buttonGrade="primary" onClick={() => setOpenModal(true)} /> */}
        </div>
      </Layout>
    </>
  );
}
