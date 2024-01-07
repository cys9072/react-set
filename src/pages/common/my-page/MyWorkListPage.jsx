import React from "react";
import Layout from "Layout";
import Header from "Layout/Header";
import Back from "Layout/Header/Back";
import CenterTitle from "Layout/Header/CenterTitle";
import WorkItem from "components/WorkItem";
// import EmptyContents from "components/common/EmptyContents";

export default function MyWorkListPage() {
  return (
    <>
      <Header mypage>
        <Back />
        <CenterTitle title="근무 내역" />
      </Header>
      <Layout>
        <section className="work-list-section">
          <ol className="card-list">
            <WorkItem />
            <WorkItem disabled />
            <WorkItem />
            <WorkItem />
            <WorkItem />
            <WorkItem />
            <WorkItem />
            <WorkItem disabled />
          </ol>
          {/* If no List*/}
          {/* <EmptyContents text="근무 내역이 없습니다." /> */}
        </section>
      </Layout>
    </>
  );
}
