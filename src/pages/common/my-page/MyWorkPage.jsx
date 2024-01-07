import React from "react";
import Layout from "Layout";
import Header from "Layout/Header";
import CenterTitle from "Layout/Header/CenterTitle";
import CustomLink from "components/common/CustomLink";
import { SVG } from "constants";
import Back from "Layout/Header/Back";

export default function MyWorkPage() {
  return (
    <>
      <Header mypage>
        <Back />
        <CenterTitle title="근무" />
      </Header>
      <Layout>
        <section className="my-page-service-section">
          <div className="my-page__link-wrapper">
            <CustomLink href="/my-page/work/work-list" linkGrade="primary" text="근무 내역" addClass="btn--my-page-bg border-bottom-block" iconSrc={SVG.WORK_LIST_SVG} imgAlt="profile img" rightArr />
            <CustomLink href="/my-page/work/education" linkGrade="primary" text="교육" addClass="btn--my-page-bg border-bottom-block" iconSrc={SVG.EDUCATION_SVG} imgAlt="profile img" rightArr />
          </div>
        </section>
      </Layout>
    </>
  );
}
