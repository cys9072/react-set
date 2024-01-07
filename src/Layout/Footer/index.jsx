import React from "react";

function Footer() {
  return (
    <footer>
      <section className="footer-section">
        <h3 className="footer-section__title">주식회사 에스캐디</h3>
        <div className="footer-section__info">
          <span>주소</span>
          <span>:</span>
          <span>대전광역시 유성구 대덕대로 548 2층(도룡동)</span>
          <span>|</span>
          <span>사업자정보</span>
          <span>:</span>
          <span>418-81-56024</span>
          <span>|</span>
          <span>통신판매 신고번호</span>
          <span>:</span>
          <span>제 2023-대전유성-0320호</span>
          <span>|</span>
          <span>정보처리 관리자</span>
          <span>:</span>
          <span>이소백 admscaddie@gmail.com</span>
          <span>|</span>
          <a href="/이용약관">이용약관</a>
        </div>
        <div className="footer-section__call">
          <p>
            고객센터 <a href="tel:042-863-6024">042-863-6024</a>
          </p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
