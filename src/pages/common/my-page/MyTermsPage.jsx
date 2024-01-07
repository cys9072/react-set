import React from "react";
import Layout from "Layout";
import Header from "Layout/Header";
import CenterTitle from "Layout/Header/CenterTitle";
import CustomLink from "components/common/CustomLink";
import { SVG } from "constants";
import Back from "Layout/Header/Back";

export default function MyTermsPage({ adminType }) {
  console.log("adminType", adminType);
  return (
    <>
      <Header mypage>
        <Back />
        <CenterTitle title="약관 및 정책" />
      </Header>
      <Layout>
        <section className="my-page-service-section">
          <div className="my-page__link-wrapper">
            <CustomLink href="/my-page/service/terms/privacy" linkGrade="primary" text="개인정보 처리방침 약관" addClass="btn--my-page-bg border-bottom-block" iconSrc={SVG.PRIVACY_SVG} imgAlt="privacy img" rightArr />
            <CustomLink href="/my-page/service/terms/location" linkGrade="primary" text="위치정보 이용약관" addClass="btn--my-page-bg border-bottom-block" iconSrc={SVG.LOCATION_SVG} imgAlt="location img" rightArr />
            <CustomLink href="/my-page/service/terms/financial" linkGrade="primary" text="전자금융거래 이용약관" addClass="btn--my-page-bg border-bottom-block" iconSrc={SVG.FINANCIAL_SVG} imgAlt="financial img" rightArr />
          </div>
        </section>
      </Layout>
    </>
  );
}
