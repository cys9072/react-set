import React from "react";
import Layout from "Layout";
import Header from "Layout/Header";
import Back from "Layout/Header/Back";
import CenterTitle from "Layout/Header/CenterTitle";
import MyEducationItem from "components/MyEducationItem";
import CustomLink from "components/common/CustomLink";
// import EmptyContents from "components/common/EmptyContents";

export default function MyEducationPage() {
  return (
    <>
      <Header BottomNavigation>
        <Back />
        <CenterTitle title="나의 교육" />
      </Header>
      <Layout>
        <section className="work-list-section">
          <ol className="card-list">
            {/* There is only one training-related item in this area that you have completed or will be completing. */}
            <MyEducationItem />
            <MyEducationItem complete />
          </ol>
          {/* If no List*/}
          {/* <EmptyContents text="진행 예정인 교육이 없습니다." /> */}
        </section>
        <div className="bottom-button">
          <CustomLink href="/my-page/work/education/education-list" text="교육 목록보기" linkGrade="primary" />
        </div>
      </Layout>
    </>
  );
}
