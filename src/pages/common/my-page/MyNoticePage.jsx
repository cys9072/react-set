import React from "react";
import Layout from "Layout";
import Header from "Layout/Header";
import CenterTitle from "Layout/Header/CenterTitle";
import Back from "Layout/Header/Back";
import NoticeItem from "components/NoticeItem";
import { MOCK_NOTICE_DATA } from "constants";
import CustomPagination from "components/common/CustomPagination";

export default function MyNoticePage() {
  return (
    <>
      <Header mypage>
        <Back />
        <CenterTitle title="공지사항" />
      </Header>
      <Layout mainClassName="PADDING_TOP_ZERO">
        <section className="my-page-service-notice-section">
          <div className="notice-area notice-title">
            <div className="notice--number">번호</div>
            <p className="notice--text">제목</p>
            <span className="notice--date">작성일시</span>
          </div>
          <ul className="notice-list">
            {MOCK_NOTICE_DATA &&
              MOCK_NOTICE_DATA.map((item, index) => {
                return <NoticeItem key={item.id} list_number={item.id} title={item.title} date={item.date} recently={item.recently} />;
              })}
          </ul>

          <CustomPagination />
        </section>
      </Layout>
    </>
  );
}
