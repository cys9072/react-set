import React, { useState } from "react";
import Layout from "Layout";
import Header from "Layout/Header";
import Back from "Layout/Header/Back";
import CenterTitle from "Layout/Header/CenterTitle";
import InputWrap from "components/common/InputWrap";
import HorizonLineThin from "components/common/HorizonLineThin";
import DetailHeading from "components/common/DetailItem/DetailHeading";
import CustomCheckBox from "components/common/InputWrap/CustomCheckBox";
import CustomModal from "components/common/CustomModal";
import ModalDangerousHtml from "components/common/CustomModal/ModalDangerousHtml";
import CustomLink from "components/common/CustomLink";

const INIT_MODAL = { open: false, title: "" };

export default function SignUpTermsOfUsePage() {
  const [openModal, setOpenModal] = useState(INIT_MODAL);
  return (
    <>
      <Header BottomNavigation>
        <Back />
        <CenterTitle title="회원가입 이용약관" />
      </Header>
      <Layout>
        <CustomModal addClassName="full-size" isOpen={openModal.open} handleClose={() => setOpenModal(INIT_MODAL)}>
          <ModalDangerousHtml title={openModal.title} text={"<p>Edit text Edit text area Edit text area</p>"} onClose={() => setOpenModal(false)} />
        </CustomModal>
        <section className="terms-of-use-section">
          <DetailHeading
            className="page-heading TEXT_CENTER"
            title={
              <>
                캐디 <strong>서비스 이용약관</strong>
                <br />
                동의가 필요합니다
              </>
            }
          />
          <form>
            <fieldset>
              <legend>이용약관</legend>
              <InputWrap>
                <div className="terms-of-use-section__top">
                  <CustomCheckBox required id="terms1" labelText="개인정보 처리방침동의">
                    <button type="button" onClick={() => setOpenModal({ open: true, title: "개인정보 처리방침동의" })}>
                      보기
                    </button>
                  </CustomCheckBox>
                  <CustomCheckBox required id="terms2" labelText="위치정보 이용약관 동의">
                    <button type="button" onClick={() => setOpenModal({ open: true, title: "위치정보 이용약관 동의" })}>
                      보기
                    </button>
                  </CustomCheckBox>
                  <CustomCheckBox required id="terms3" labelText="전자금융거래 이용약관">
                    <button type="button" onClick={() => setOpenModal({ open: true, title: "전자금융거래 이용약관" })}>
                      보기
                    </button>
                  </CustomCheckBox>
                </div>
                <HorizonLineThin />
                <div className="terms-of-use-section__bottom">
                  <CustomCheckBox id="terms4" labelText="전체 동의하기" />
                </div>
              </InputWrap>
            </fieldset>
          </form>
        </section>
        <div className="bottom-button">
          <CustomLink href="/sign-up-form" linkGrade="primary" text="회원가입" />
        </div>
      </Layout>
    </>
  );
}
