import React, { useState } from "react";
import Layout from "Layout";
import Header from "Layout/Header";
import Back from "Layout/Header/Back";
import CenterTitle from "Layout/Header/CenterTitle";
import { useNavigate } from "react-router";
import InputWrap from "components/common/InputWrap";
import CustomBtn from "components/common/CustomBtn";
import CustomModal from "components/common/CustomModal";
import ModalHeading from "components/common/CustomModal/ModalHeading";
import HorizonLineThin from "components/common/HorizonLineThin";
import ModalText from "components/common/CustomModal/ModalText";
import ModalButtonBox from "components/common/CustomModal/ModalButtonBox";
import DynamicInput from "components/common/InputWrap/DynamicInput";

export default function PasswordSettingPage() {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <Header BottomNavigation>
        <Back />
        <CenterTitle title="비밀번호 재설정" />
      </Header>
      <Layout>
        <CustomModal isOpen={openModal} handleClose={() => setOpenModal(false)}>
          <ModalHeading heading="알림" />
          <HorizonLineThin />
          <ModalText text="비밀번호 변경이 완료되었습니다." />
          <HorizonLineThin />
          <ModalButtonBox>
            <CustomBtn
              text="확인"
              buttonGrade="tertiary"
              onClick={() => {
                navigate("/sign-in-guide");
                setOpenModal(false);
              }}
            />
          </ModalButtonBox>
        </CustomModal>
        <section className="find-email-section">
          <form>
            <fieldset>
              <legend>비밀번호 재설정</legend>
              <InputWrap>
                <DynamicInput
                  required
                  labelText="비밀번호"
                  inputType="password"
                  id="password-check-confirm"
                  placeholder="8~15자 · 영문 대소문자, 숫자, 특수문자를 조합하세요."
                  guideText="비밀번호가 동일하지 않습니다."
                  // invalid
                />
                <DynamicInput
                  required
                  labelText="비밀번호 확인"
                  inputType="password"
                  id="password-check-confirm"
                  placeholder="위 비밀번호와 동일하게 입력하세요."
                  guideText="비밀번호가 동일하지 않습니다."
                  // invalid
                />
              </InputWrap>
            </fieldset>
          </form>
        </section>
        <div className="bottom-button">
          <CustomBtn text="확인" buttonGrade="primary" onClick={() => setOpenModal(true)} />
        </div>
      </Layout>
    </>
  );
}
