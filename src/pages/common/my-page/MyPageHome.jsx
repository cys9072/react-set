import React from "react";
import Layout from "Layout";
import Header from "Layout/Header";
import CenterTitle from "Layout/Header/CenterTitle";
import CustomLink from "components/common/CustomLink";
import { SVG, USER_TYPE } from "constants";

export default function MyPageHome({ adminType }) {
  console.log("adminType", adminType);
  return (
    <>
      <Header mypage>
        <CenterTitle title="마이페이지" />
      </Header>
      <Layout>
        <section className="my-page-section">
          <div className="my-page__link-wrapper">
            {adminType === USER_TYPE.user && (
              <>
                <CustomLink href="/my-page/info/user" linkGrade="primary" text="개인정보" addClass="btn--my-page-bg" iconSrc={SVG.PROFILE_BLACK} imgAlt="profile img" rightArr />
                <CustomLink href="" linkGrade="primary" text="포인트" addClass="btn--my-page-bg POINTER_NONE" iconSrc={SVG.POINT_SVG} imgAlt="profile img" pointText="8,300P" />
                <CustomLink href="/schedule-list/user" linkGrade="primary" text="예약" addClass="btn--my-page-bg" iconSrc={SVG.TIME_REVERSE_SVG} imgAlt="profile img" rightArr />
                <CustomLink href="/my-page/service" linkGrade="primary" text="고객센터" addClass="btn--my-page-bg" iconSrc={SVG.SUPPORT_SVG} imgAlt="profile img" rightArr />
                <CustomLink href="/my-page/account-setting" linkGrade="primary" text="계정관리" addClass="btn--my-page-bg" iconSrc={SVG.PROFILE_SETTING_SVG} imgAlt="profile img" rightArr />
              </>
            )}
            {adminType === USER_TYPE.caddie && (
              <>
                <CustomLink href="/my-page/info/caddie" linkGrade="primary" text="개인정보" addClass="btn--my-page-bg" iconSrc={SVG.PROFILE_BLACK} imgAlt="profile img" rightArr />
                <CustomLink href="" linkGrade="primary" text="캐시" addClass="btn--my-page-bg POINTER_NONE" iconSrc={SVG.CASH_SVG} imgAlt="profile img" pointText="18,300C" />
                <CustomLink href="/my-page/work" linkGrade="primary" text="근무" addClass="btn--my-page-bg" iconSrc={SVG.CADDIE_SVG} imgAlt="profile img" rightArr />
                <CustomLink href="/my-page/service" linkGrade="primary" text="고객센터" addClass="btn--my-page-bg" iconSrc={SVG.SUPPORT_SVG} imgAlt="profile img" rightArr />
                <CustomLink href="/my-page/account-setting" linkGrade="primary" text="계정관리" addClass="btn--my-page-bg" iconSrc={SVG.PROFILE_SETTING_SVG} imgAlt="profile img" rightArr />
              </>
            )}
            {adminType === USER_TYPE.store && (
              <>
                <CustomLink href="/my-page/info/store" linkGrade="primary" text="개인정보" addClass="btn--my-page-bg" iconSrc={SVG.PROFILE_BLACK} imgAlt="profile img" rightArr />
                <CustomLink href="" linkGrade="primary" text="포인트" addClass="btn--my-page-bg POINTER_NONE" iconSrc={SVG.POINT_SVG} imgAlt="profile img" pointText="8,300P" />
                <CustomLink href="/schedule-list/store" linkGrade="primary" text="예약" addClass="btn--my-page-bg" iconSrc={SVG.TIME_REVERSE_SVG} imgAlt="profile img" rightArr />
                <CustomLink href="/my-page/service" linkGrade="primary" text="고객센터" addClass="btn--my-page-bg" iconSrc={SVG.SUPPORT_SVG} imgAlt="profile img" rightArr />
                <CustomLink href="/my-page/account-setting" linkGrade="primary" text="계정관리" addClass="btn--my-page-bg" iconSrc={SVG.PROFILE_SETTING_SVG} imgAlt="profile img" rightArr />
              </>
            )}
          </div>
        </section>
      </Layout>
    </>
  );
}
