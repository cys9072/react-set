import React from "react";
import Layout from "Layout";
import Header from "Layout/Header";
import CenterTitle from "Layout/Header/CenterTitle";
import Back from "Layout/Header/Back";
import { SVG } from "constants";

import CustomLink from "components/common/CustomLink";

export default function MyNoticeDetailPage() {
  return (
    <>
      <Header mypage BottomNavigation>
        <Back />
        <CenterTitle title="공지사항 내용" />
      </Header>
      <Layout>
        <section className="my-page-service-notice-detail-section">
          <div className="notice-detail">
            <div className="notice-detail__title">
              <div className="notice-detail--text-area">
                <p className="notice-detail--text-area--title">제목</p>
                <div className="notice-detail--danger-area">
                  <div className="danger-init" dangerouslySetInnerHTML={{ __html: `<p>공지사항 제목공지사항 제목공지사항 제목공지사항 제목공지사항 제목공지사항 제목공지사항 제목공지사항 제목공지사항 제목공지사항 제목공지사항 제목공지사항 제목공지사항 제목공지사항 제목</p>` }}></div>{" "}
                </div>
              </div>
            </div>
            <div className="notice-detail__contents">
              <div className="notice-detail--text-area">
                <p className="notice-detail--text-area--title">내용</p>
                <div className="notice-detail--danger-area">
                  <div className="danger-init" dangerouslySetInnerHTML={{ __html: `<p>공지사항 내용공지사항 내용공지사항 내용공지사항 내용공지사항 내용공지사항 내용공지사항 내용공지사항 내용공지사항 내용공지사항 내용공지사항 내용공지사항 내용공지사항 내용공지사항 내용공지사항 내용공지사항 내용공지사항 내용공지사항 내용공지사항 내용공지사항 내용공지사항 내용공지사항 내용공지사항 내용공지사항 내용공지사항 내용공지사항 내용공지사항 내용공지사항 내용공지사항 내용공지사항 내용공지사항 내용공지사항 내용공지사항 내용공지사항 내용공지사항 내용공지사항 내용공지사항 내용공지사항 내용공지사항 내용공지사항 내용공지사항 내용공지사항 내용공지사항 내용공지사항 내용공지사항 내용공지사항 내용공지사항 내용공지사항 내용공지사항 내용</p>` }}></div>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="notice-detail__btn-wrap">
            <button className="notice-move-button notice-prev-button">
              <img src={SVG.NEXT_CIRCLE_SVG} alt="next button img" />
              <span className="ONE_LINE_ELLIPSIS">공지사항 제목입니</span>
            </button>

            <button className="notice-move-button notice-next-button">
              <span className="ONE_LINE_ELLIPSIS">공지사항 제목입니다</span>
              <img src={SVG.NEXT_CIRCLE_SVG} alt="next button img" />
            </button>
          </div>
        </section>
        <div className="bottom-button">
          <CustomLink href="/my-page/service/notice-list" text="목록으로" linkGrade="primary" addClass="btn--white-bg" />
        </div>
      </Layout>
    </>
  );
}
