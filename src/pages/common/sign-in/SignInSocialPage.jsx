import React, { useEffect, useState } from "react";
import { SVG } from "constants";
import Layout from "Layout";
import Header from "Layout/Header";
import Back from "Layout/Header/Back";
import CenterTitle from "Layout/Header/CenterTitle";
import DetailHeading from "components/common/DetailItem/DetailHeading";
import CustomLink from "components/common/CustomLink";
import { Link } from "react-router-dom";

export default function SignInSocialPage({ adminType }) {
  const [name, setName] = useState("");
  useEffect(() => {
    if (adminType === "user") return setName("사용자");
    if (adminType === "caddie") return setName("캐디");
    if (adminType === "store") return setName("이용점");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Header>
        <Back />
        <CenterTitle title={`${name} 로그인`} />
      </Header>
      <Layout>
        <section className="sign-in-social-section">
          <DetailHeading
            className="page-heading"
            title={
              <>
                간편 <strong>로그인</strong>으로
                <br />
                빠르게 이용해보세요.
              </>
            }
          />
          <div className="sign-in-social__btn-box">
            <div className="social-btn__box">
              {adminType !== "store" && (
                <>
                  {/* <button type="button" className="kakao">
                    <img src={SVG.KAKAO_LOGO} alt="kakao logo" />
                    카카오 로그인
                  </button>
                  <button type="button" className="naver">
                    <img src={SVG.NAVER_LOGO} alt="naver logo" />
                    네이버 로그인
                  </button>
                  <button type="button" className="google">
                    <img src={SVG.GOOGLE_LOGO} alt="google logo" />
                    구글 로그인
                  </button>
                  <button type="button" className="apple">
                    <img src={SVG.APPLE_LOGO} alt="apple logo" />
                    Apple 로그인
                  </button> */}

                  <Link to="" className="link kakao">
                    <img src={SVG.KAKAO_LOGO} alt="kakao logo" />
                    카카오 로그인
                  </Link>
                  <Link to="" className="link naver">
                    <img src={SVG.NAVER_LOGO} alt="naver logo" />
                    네이버 로그인
                  </Link>
                  <Link to="" className="link google">
                    <img src={SVG.GOOGLE_LOGO} alt="google logo" />
                    구글 로그인
                  </Link>
                  <Link to="" className="link apple">
                    <img src={SVG.APPLE_LOGO} alt="apple logo" />
                    Apple 로그인
                  </Link>
                </>
              )}
            </div>

            <div className="normal-sign-in-btn">
              <CustomLink
                href="/sign-in"
                linkGrade="primary"
                text="일반 로그인"
                addClass="btn--white-bg"
              />
            </div>
          </div>

          {adminType !== "store" && (
            <div className="sign-up-link">
              <a href="/sign-up">
                아직 회원이 아니신가요?&nbsp;&nbsp;<span>회원가입</span>
              </a>
            </div>
          )}
        </section>
      </Layout>
    </>
  );
}
