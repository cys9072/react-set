import React, { useState } from "react";
import Layout from "Layout";
import Header from "Layout/Header";
import CenterTitle from "Layout/Header/CenterTitle";
import { MOCK_QAN_DATA, MOCK_QAN_LIST_DATA } from "constants";
import Back from "Layout/Header/Back";
import ScrollContainer from "react-indiana-drag-scroll";
import AccordionItem from "components/AccordionItem";
import CustomPagination from "components/common/CustomPagination";

export default function MyQnaPage() {
  const [isClick, setIsClick] = useState(1);

  return (
    <>
      <Header mypage>
        <Back />
        <CenterTitle title="자주 묻는 질문" />
      </Header>
      <Layout>
        <section className="my-page-service-qna-section">
          <div className="qna-tab">
            <ScrollContainer className="scroll-container">
              {MOCK_QAN_DATA &&
                MOCK_QAN_DATA.map((item, index) => {
                  return (
                    <React.Fragment key={item.id}>
                      <button type="button" className={`scroll-item btn-common qna-button ${item.id === isClick ? "active" : ""} `} onClick={() => setIsClick(item.id)}>
                        {item.title}
                      </button>
                    </React.Fragment>
                  );
                })}
            </ScrollContainer>
          </div>

          <div className="qna-accordion">
            {MOCK_QAN_LIST_DATA &&
              MOCK_QAN_LIST_DATA.map((item, index) => {
                return <AccordionItem key={item.id} title={`${item.title}/${index}`} text={item.text} />;
              })}
          </div>
          <CustomPagination />
        </section>
      </Layout>
    </>
  );
}
