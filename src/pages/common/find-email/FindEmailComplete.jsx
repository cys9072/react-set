import React from "react";
import Layout from "Layout";
import Header from "Layout/Header";
import Back from "Layout/Header/Back";
import CenterTitle from "Layout/Header/CenterTitle";
import DetailHeading from "components/common/DetailItem/DetailHeading";
import CustomLink from "components/common/CustomLink";

export default function FindEmailComplete() {
  return (
    <>
      <Header BottomNavigation>
        <Back />
        <CenterTitle title="이메일 찾기" />
      </Header>
      <Layout>
        <DetailHeading
          className="PADDING_TOP_ZERO"
          title={
            <>
              가입하신 이메일은
              <br />
              <strong>asdqwe123@naver.com</strong>입니다.
            </>
          }
        />

        <section className="find-email-complete-section">
          <div className="find-email-complete__button-box">
            <CustomLink href="/sign-in" linkGrade="primary" text="로그인" addClass="MARGIN_BOTTOM_20" />
            <CustomLink href="/find-password" linkGrade="primary" text="비밀번호 찾기" addClass="btn--white-bg" />
          </div>
        </section>
      </Layout>
    </>
  );
}
