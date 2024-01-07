import React, { useState } from "react";
import Layout from "Layout";
import Header from "Layout/Header";
import Back from "Layout/Header/Back";
import CenterTitle from "Layout/Header/CenterTitle";
import InputWrap from "components/common/InputWrap";
import CustomBtn from "components/common/CustomBtn";
import HorizonLineThin from "components/common/HorizonLineThin";
import { useNavigate } from "react-router";
import DynamicInput from "components/common/InputWrap/DynamicInput";
import CustomModal from "components/common/CustomModal";
import ModalHeading from "components/common/CustomModal/ModalHeading";
import ModalText from "components/common/CustomModal/ModalText";
import ModalButtonBox from "components/common/CustomModal/ModalButtonBox";

export default function SnsSignUpPage() {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <Header BottomNavigation>
        <Back />
        <CenterTitle title="SNS 회원가입" />
      </Header>
      <Layout>
        <CustomModal isOpen={openModal} handleClose={() => setOpenModal(false)}>
          <ModalHeading heading="알림" />
          <HorizonLineThin />
          <ModalText text="이미 가입한 회원입니다." />
          <HorizonLineThin />
          <ModalButtonBox>
            <CustomBtn text="확인" buttonGrade="tertiary" onClick={() => setOpenModal(false)} />
          </ModalButtonBox>
        </CustomModal>
        <section className="terms-of-use-section">
          <form id="sign-up">
            <fieldset>
              <legend>이용약관</legend>
              <InputWrap>
                <DynamicInput
                  required
                  labelText="이름"
                  id="name"
                  placeholder="이름을 입력하세요."
                  guideText="입력정보를 확인 해주세요."
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
          {/* <CustomBtn text="회원가입" buttonGrade="primary" onClick={() => setOpenModal(true)} /> */}
          <CustomBtn buttonType="submit" text="다음으로" buttonGrade="primary" onClick={() => navigate("/sign-up-complete")} />
          {/* <CustomBtn form="sign-up" buttonType="submit" text="회원가입" buttonGrade="primary" /> */}
        </div>
      </Layout>
    </>
  );
}
