import React from "react";
import { SVG } from "constants";
import Layout from "Layout";
import Header from "Layout/Header";
import Back from "Layout/Header/Back";
import CenterTitle from "Layout/Header/CenterTitle";
import DetailHeading from "components/common/DetailItem/DetailHeading";
import CustomLink from "components/common/CustomLink";

export default function SignInGuidePage() {
  return (
    <>
      <Header>
        <Back />
        <CenterTitle title="로그인" />
      </Header>
      <Layout>
        <section className="sign-in-guide-section">
          <DetailHeading
            className="page-heading"
            title={
              <>
                원하시는 <strong>로그인</strong>
                <br />
                유형을 선택해 주세요.
              </>
            }
          />

          <div className="sign-in-guide__btn-box">
            <CustomLink href="/sign-in-social/user" linkGrade="primary" text="사용자" addClass="btn--white-bg" iconSrc={SVG.PROFILE_BLUE} imgAlt="profile img" />
            <CustomLink href="/sign-in-social/caddie" linkGrade="primary" text="캐디" addClass="btn--white-bg" iconSrc={SVG.CADDIE_BLUE} imgAlt="caddie img" />
            <CustomLink href="/sign-in-social/store" linkGrade="primary" text="이용점" addClass="btn--white-bg" iconSrc={SVG.STORE_BLUE} imgAlt="store img" />
          </div>
        </section>
      </Layout>
    </>
  );
}
