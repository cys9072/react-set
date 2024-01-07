import React, { useState } from "react";
import Layout from "Layout";
import Header from "Layout/Header";
import CenterTitle from "Layout/Header/CenterTitle";
import CustomLink from "components/common/CustomLink";
import { USER_TYPE } from "constants";
import Back from "Layout/Header/Back";
import CustomBtn from "components/common/CustomBtn";
import HorizonLineThin from "components/common/HorizonLineThin";
import InputWrap from "components/common/InputWrap";
import DynamicInput from "components/common/InputWrap/DynamicInput";
import CustomModal from "components/common/CustomModal";
import ModalHeading from "components/common/CustomModal/ModalHeading";
import ModalText from "components/common/CustomModal/ModalText";
import ModalButtonBox from "components/common/CustomModal/ModalButtonBox";
import { useNavigate } from "react-router";

export default function MyInfoEditPage({ adminType }) {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const handleModalClose = () => {
    navigate("/");
    setOpenModal(false);
  };
  return (
    <>
      <Header BottomNavigation>
        <Back />
        <CenterTitle title="개인정보 수정" />
      </Header>
      <Layout>
        <CustomModal isOpen={openModal} handleClose={handleModalClose}>
          <ModalHeading heading="알림" />
          <HorizonLineThin />
          <ModalText text="저장 되었습니다." />
          <HorizonLineThin />
          <ModalButtonBox>
            <CustomBtn
              text="확인"
              buttonGrade="tertiary"
              onClick={() => {
                navigate("/");
                setOpenModal(false);
              }}
            />
          </ModalButtonBox>
        </CustomModal>
        <section className="terms-of-use-section">
          <form>
            <fieldset>
              <legend>개인정보 수정 </legend>
              {adminType !== USER_TYPE.store && (
                <InputWrap>
                  <DynamicInput
                    required
                    labelText="이름"
                    id="name"
                    placeholder="이름을 입력하세요."
                    guideText="입력정보를 확인 해주세요."
                    value={"박캐디"}
                    // invalid
                  />
                  <DynamicInput
                    required
                    labelText="휴대폰 번호"
                    id="phone"
                    placeholder="휴대폰 번호를 입력하세요."
                    guideText="휴대폰 번호를 확인해주세요."
                    value={"01000000000"}
                    disabled
                    // invalid
                  >
                    <CustomBtn text="변경" buttonGrade="primary" disabled />
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
                  <DynamicInput
                    required
                    labelText="비밀번호"
                    inputType="password"
                    id="password-check"
                    placeholder="8~15자 · 영문 대소문자, 숫자, 특수문자를 조합하세요."
                    guideText="비밀번호가 일치하지 않습니다."
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
              )}
              {adminType === USER_TYPE.store && (
                <InputWrap>
                  <DynamicInput
                    required
                    labelText="비밀번호"
                    inputType="password"
                    id="password-check"
                    placeholder="8~15자 · 영문 대소문자, 숫자, 특수문자를 조합하세요."
                    guideText="비밀번호가 일치하지 않습니다."
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
              )}
            </fieldset>
          </form>
        </section>
        <div className="detail-button-box multiple-btn FULL_SIDES">
          <CustomBtn text="저장" buttonGrade="secondary" onClick={() => setOpenModal(true)} />
          <CustomLink href={`/my-page/${adminType}`} linkGrade="secondary" text="취소" addClass="btn--white-bg" />
        </div>
      </Layout>
    </>
  );
}
