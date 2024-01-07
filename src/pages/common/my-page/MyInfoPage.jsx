import React from "react";
import Layout from "Layout";
import Header from "Layout/Header";
import CenterTitle from "Layout/Header/CenterTitle";
import CustomLink from "components/common/CustomLink";
import { SVG, USER_TYPE } from "constants";
import Back from "Layout/Header/Back";
import MyPageInfo from "components/common/MyPageInfo";

export default function MyInfoPage({ adminType }) {
  return (
    <>
      <Header BottomNavigation>
        <Back />
        <CenterTitle title="개인정보" />
      </Header>
      <Layout>
        <section className="my-page-info-section">
          <ul className="info-list">
            {adminType !== USER_TYPE.store && (
              <>
                <MyPageInfo title="이메일" subTitle="asdasd@naver.com" />
                <MyPageInfo title="회원가입 경로" subTitle="카카오 회원가입" />
                <MyPageInfo title="회원명" subTitle="박유저" />
                <MyPageInfo title="연락처" subTitle="010-0000-0000" />
              </>
            )}
            {adminType === USER_TYPE.store && (
              <>
                <MyPageInfo title="이메일" subTitle="asdasd@naver.com" />
                <MyPageInfo title="이용점명" subTitle="골프존파크 삼성점" />
                <MyPageInfo title="연락처" subTitle="010-0000-0000" />
                <MyPageInfo
                  title="주소"
                  subTitle={
                    <>
                      09090
                      <br />
                      서울시 강남구 삼성로 123로 골프존 파크 삼성점
                    </>
                  }
                />
              </>
            )}
          </ul>
        </section>
        <div className="bottom-button">
          {adminType !== USER_TYPE.store && <CustomLink href={`/my-page/info/edit/${adminType}`} text="변경" linkGrade="primary" />}
          {adminType === USER_TYPE.store && (
            <>
              <span className="bottom-button__guide-text">
                <img src={SVG.NOTICE_SVG} alt="notice img" />
                이용점 정보 변경은 관리자이게 문의해주세요.
              </span>
              <CustomLink href={`/my-page/info/edit/${adminType}`} text="변경" linkGrade="primary" />
            </>
          )}
        </div>
      </Layout>
    </>
  );
}
