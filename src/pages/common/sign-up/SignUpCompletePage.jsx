import React from "react";
import Layout from "Layout";
import Header from "Layout/Header";
import Back from "Layout/Header/Back";
import { PNG } from "constants";
import CustomLink from "components/common/CustomLink";

export default function SignUpCompletePage() {
  return (
    <>
      <Header BottomNavigation>
        <Back href="/" />
      </Header>
      <Layout>
        <section className="sign-up-complete-section">
          <div className="sign-up-complete__banner">
            <img src={PNG.SIGN_UP_COMPLETE_BANNER} alt="sing up complete img" />
          </div>
          <p className="sign-up-complete__text">회원가입이 완료 되었습니다.</p>
        </section>
        <div className="bottom-button">
          <CustomLink href="/" linkGrade="primary" text="확인" />
        </div>
      </Layout>
    </>
  );
}
