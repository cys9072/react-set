import React from "react";
import { PNG, SVG } from "constants";
import Layout from "Layout";
import Header from "Layout/Header";
import Back from "Layout/Header/Back";
import CenterTitle from "Layout/Header/CenterTitle";
import DetailHeading from "components/common/DetailItem/DetailHeading";
import Rate from "rc-rate";
import "rc-rate/assets/index.css";
import CustomLink from "components/common/CustomLink";

export default function ReviewPage() {
  const onChange = (e) => {
    console.log("rate =>", e);
  };

  return (
    <>
      <Header>
        <Back />
        <CenterTitle title="별점 남기기" />
      </Header>
      <Layout>
        <section className="review-section ">
          <DetailHeading
            className="page-heading"
            title={
              <>
                <strong>S캐디</strong>는 어떠셨나요?
              </>
            }
          />
          <div className="review-section__banner">
            <img src={PNG.REVIEW_BANNER} alt="" />
          </div>
          <div className="review-section__rate-box">
            <Rate defaultValue={3} onChange={(e) => onChange(e)} character={<img src={SVG.STAR_BLUE} alt="star img" />} />
          </div>

          <form>
            <fieldset>
              <legend>리뷰 남기기</legend>
            </fieldset>
            <div className="review-section__textarea">
              <textarea />
            </div>
            <CustomLink href="/" linkGrade="primary" text="완료" />
          </form>
        </section>
      </Layout>
    </>
  );
}
