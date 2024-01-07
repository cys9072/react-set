import React from "react";
import Layout from "Layout";
import Header from "Layout/Header";
import CenterTitle from "Layout/Header/CenterTitle";
import CustomLink from "components/common/CustomLink";
import { SVG } from "constants";
import Back from "Layout/Header/Back";

export default function MyServicePage({ adminType }) {
  console.log("adminType", adminType);
  return (
    <>
      <Header mypage>
        <Back />
        <CenterTitle title="고객센터" />
      </Header>
      <Layout>
        <section className="my-page-service-section">
          <div className="my-page__link-wrapper">
            <CustomLink href="/my-page/service/qna" linkGrade="primary" text="자주 묻는 질문" addClass="btn--my-page-bg border-bottom-block" iconSrc={SVG.QUESTION_MARK_SVG} imgAlt="profile img" rightArr />
            <CustomLink href="/my-page/service/notice-list" linkGrade="primary" text="공지사항" addClass="btn--my-page-bg border-bottom-block" iconSrc={SVG.SPEAKER_SVG} imgAlt="profile img" rightArr />
            <CustomLink href="/my-page/service/terms" linkGrade="primary" text="약관" addClass="btn--my-page-bg border-bottom-block" iconSrc={SVG.NOTE_SVG} imgAlt="profile img" rightArr />
            {/* 230201 삭제  */}
            {/* <CustomLink linkGrade="primary" text="설정" addClass="btn--my-page-bg border-bottom-block" iconSrc={SVG.SETTING_SVG} imgAlt="profile img" rightArr /> */}
          </div>
        </section>
      </Layout>
    </>
  );
}
