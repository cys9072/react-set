import React, { useEffect, useState } from "react";
import Layout from "Layout";
import Header from "Layout/Header";
import CenterTitle from "Layout/Header/CenterTitle";
import Back from "Layout/Header/Back";

export default function MyTermsDetailPage({ termsType }) {
  const [termsTitle, setTermsTitle] = useState(termsType);
  useEffect(() => {
    if (termsType === "privacy") {
      setTermsTitle("개인정보 처리방침 약관");
    }
    if (termsType === "location") {
      setTermsTitle("위치정보 이용약관");
    }
    if (termsType === "financial") {
      setTermsTitle("전자금융거래 이용약관");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Header mypage>
        <Back />
        <CenterTitle title={termsTitle} />
      </Header>
      <Layout mainClassName="PADDING_TOP_ZERO">
        <section className="my-page-terms-detail-section">
          <div className="terms-detail__version">
            <div className="select-wrap">
              <div className="select-wrap__select MARGIN_LEFT_AUTO">
                <select name="terms" id="terms">
                  <option value="2022.05.26">2022.05.26</option>
                </select>
              </div>
            </div>
          </div>

          <div className="terms-detail__danger-box">
            <div
              className="danger-init"
              dangerouslySetInnerHTML={{
                __html: `<p>제 1장 총직
제1조(목적)
본 약관은 에스캐디가 운영, 제공하는 위치기반 서비스에 대한 내용입니다. 본 약관은 에스캐디가 운영, 제공하는 위치기반 서비스에 대한 내용입니다. 본 약관은 에스캐디가 운영, 제공하는 위치기반 서비스에 대한 내용입니다. 본 약관은 에스캐디가 운영, 제공하는 위치기반 서비스에 대한 내용입니다. 본 약관은 에스캐디가 운영, 제공하는 위치기반 서비스에 대한 내용입니다. 본 약관은 에스캐디가 운영, 제공하는 위치기반 서비스에 대한 내용입니다. 
제2조(목적)
본 약관은 에스캐디가 운영, 제공하는 위치기반 서비스에 대한 내용입니다. 본 약관은 에스캐디가 운영, 제공하는 위치기반 서비스에 대한 내용입니다. 본 약관은 에스캐디가 운영, 제공하는 위치기반 서비스에 대한 내용입니다. 본 약관은 에스캐디가 운영, 제공하는 위치기반 서비스에 대한 내용입니다. 본 약관은 에스캐디가 운영, 제공하는 위치기반 서비스에 대한 내용입니다. 본 약관은 에스캐디가 운영, 제공하는 위치기반 서비스에 대한 내용입니다. 
제2조(목적)
본 약관은 에스캐디가 운영, 제공하는 위치기반 서비스에 대한 내용입니다. 본 약관은 에스캐디가 운영, 제공하는 위치기반 서비스에 대한 내용입니다. 본 약관은 에스캐디가 운영, 제공하는 위치기반 서비스에 대한 내용입니다. 본 약관은 에스캐디가 운영, 제공하는 위치기반 서비스에 대한 내용입니다. 본 약관은 에스캐디가 운영, 제공하는 위치기반 서비스에 대한 내용입니다. 본 약관은 에스캐디가 운영, 제공하는 위치기반 서비스에 대한 내용입니다. 
`,
              }}
            ></div>
          </div>
        </section>
      </Layout>
    </>
  );
}
