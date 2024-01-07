import React from "react";
import Layout from "Layout";
import Header from "Layout/Header";
import Back from "Layout/Header/Back";
import CenterTitle from "Layout/Header/CenterTitle";
import EducationItem from "components/EducationItem";
import CustomPagination from "components/common/CustomPagination";

export default function MyOtherEducationListPage() {
  return (
    <>
      <Header mypage>
        <Back />
        <CenterTitle title="교육 목록" />
      </Header>
      <Layout>
        <section className="work-list-section">
          <ol className="card-list">
            <EducationItem />
            <EducationItem disabled />
            <EducationItem />
            <EducationItem />
            <EducationItem />
            <EducationItem />
            <EducationItem />
            <EducationItem />
            <EducationItem />
            <EducationItem />
            <EducationItem />
            <EducationItem />
            <EducationItem />
            <EducationItem />
            <EducationItem />
            <EducationItem />
          </ol>
          <CustomPagination />
        </section>
      </Layout>
    </>
  );
}
