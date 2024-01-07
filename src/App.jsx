/* eslint-disable no-unused-vars */
import Splash from "components/Splash";
import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as Pages from "./pages";

const App = () => {
  useEffect(() => {
    ReactModal.setAppElement("#root");
  });

  return (
    <Router>
      {/* Splash Img */}
      {/* <Splash /> */}
      <Routes>
        {/* common start*/}
        <Route path="/" element={<Pages.MainPage />} />
        <Route path="/alarm" element={<Pages.AlarmPage />} />
        <Route path="/sign-in-guide" element={<Pages.SignInGuidePage />} />
        <Route path="/sign-in-social/user" element={<Pages.SignInSocialPage adminType="user" />} />
        <Route path="/sign-in-social/caddie" element={<Pages.SignInSocialPage adminType="caddie" />} />
        <Route path="/sign-in-social/store" element={<Pages.SignInSocialPage adminType="store" />} />
        <Route path="/sign-in" element={<Pages.SignInPage />} />

        {/* normal sign up */}
        <Route path="/sign-up" element={<Pages.SignUpTermsOfUsePage />} />
        <Route path="/sign-up-form" element={<Pages.SignUpPage />} />
        <Route path="/sign-up-complete" element={<Pages.SignUpCompletePage />} />

        {/* sns sign up */}
        <Route path="/sns-sign-up" element={<Pages.SnsSignUpTermsOfUsePage />} />
        <Route path="/sns-sign-up-form" element={<Pages.SnsSignUpPage />} />

        {/* find id / password */}
        <Route path="/find-email" element={<Pages.FindEmailPage />} />
        <Route path="/find-email-complete" element={<Pages.FindEmailComplete />} />
        <Route path="/find-password" element={<Pages.FindPasswordPage />} />
        <Route path="/password-setting" element={<Pages.PasswordSettingPage />} />

        {/* user start */}
        <Route path="/reservation" element={<Pages.ReservationPage />} />
        <Route path="/reservation-detail/user" element={<Pages.ReservationDetailPage />} />
        <Route path="/payment-detail/user" element={<Pages.PaymentDetailPage />} />
        <Route path="/payment-cancel" element={<Pages.PaymentCancelPage />} />
        <Route path="/assign-complete/user" element={<Pages.AssignCompletePage />} />
        <Route path="/schedule-list/user" element={<Pages.SchedulePage />} />
        <Route path="/review" element={<Pages.ReviewPage />} />
        {/* user ------ end ------*/}

        {/* caddie start */}
        <Route path="/reservation/caddie" element={<Pages.ReservationCaddiePage />} />
        <Route path="/reservation-reception/caddie" element={<Pages.ReservationReceptionPage />} />
        {/* caddie ------ end ------*/}

        {/* store start */}
        <Route path="/schedule-list/store" element={<Pages.StoreSchedulePage />} />
        <Route path="/reservation-detail/store" element={<Pages.ReservationDetailPage />} />
        <Route path="/payment-detail/store" element={<Pages.StorePaymentDetailPage />} />
        <Route path="/payment-cancel" element={<Pages.PaymentCancelPage />} />
        <Route path="/assign-complete/store" element={<Pages.StoreAssignCompletePage />} />
        {/* store ------ end ------*/}

        {/* My_page */}
        <Route path="/my-page/user" element={<Pages.MyPageHome adminType="user" />} />
        <Route path="/my-page/caddie" element={<Pages.MyPageHome adminType="caddie" />} />
        <Route path="/my-page/store" element={<Pages.MyPageHome adminType="store" />} />

        <Route path="/my-page/info/user" element={<Pages.MyInfoPage adminType="user" />} />
        <Route path="/my-page/info/caddie" element={<Pages.MyInfoPage adminType="caddie" />} />
        <Route path="/my-page/info/store" element={<Pages.MyInfoPage adminType="store" />} />

        {/* My_page -common */}
        <Route path="/my-page/info/edit/user" element={<Pages.MyInfoEditPage adminType="user" />} />
        <Route path="/my-page/info/edit/caddie" element={<Pages.MyInfoEditPage adminType="caddie" />} />
        <Route path="/my-page/info/edit/store" element={<Pages.MyInfoEditPage adminType="store" />} />

        <Route path="/my-page/account-setting" element={<Pages.MyAccountSetting />} />
        <Route path="/my-page/service" element={<Pages.MyServicePage />} />
        <Route path="/my-page/service/qna" element={<Pages.MyQnaPage />} />
        <Route path="/my-page/service/notice-list" element={<Pages.MyNoticePage />} />
        <Route path="/my-page/service/notice-list/detail" element={<Pages.MyNoticeDetailPage />} />
        <Route path="/my-page/service/terms" element={<Pages.MyTermsPage />} />
        <Route path="/my-page/service/terms/privacy" element={<Pages.MyTermsDetailPage termsType="privacy" />} />
        <Route path="/my-page/service/terms/location" element={<Pages.MyTermsDetailPage termsType="location" />} />
        <Route path="/my-page/service/terms/financial" element={<Pages.MyTermsDetailPage termsType="financial" />} />
        {/* My_page -common ------ end ------ */}

        {/* My_page for-caddie */}
        <Route path="/my-page/work" element={<Pages.MyWorkPage />} />
        <Route path="/my-page/work/work-list" element={<Pages.MyWorkListPage />} />

        <Route path="/my-page/work/education" element={<Pages.MyEducationPage />} />
        <Route path="/my-page/work/education/education-list" element={<Pages.MyOtherEducationListPage />} />
        <Route path="/my-page/work/education/education-list/detail" element={<Pages.MyOtherEducationListDetailPage />} />
        {/* My_page for-caddie ------ end ------ */}

        {/* My_page ------ end ------*/}
      </Routes>
    </Router>
  );
};

export default App;
