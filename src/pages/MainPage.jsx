import React from "react";
import BannerLInk from "components/common/BannerLInk";
import { JPG } from "constants";
import Layout from "Layout";
import Footer from "Layout/Footer";
import Header from "Layout/Header";
import Alarm from "Layout/Header/Alarm";
import Logo from "Layout/Header/Logo";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper/core";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

export default function MainPage() {
  SwiperCore.use([Autoplay]);
  return (
    <>
      <Header home>
        <Logo />
        <Alarm />
      </Header>
      <Layout mainClassName="visible-footer FULL_SIDES">
        <section className="main-section">
          {/* !! 
          상단 2개는 스크롤링되는 배너(좌우 움직임 + 5초마다 자동 롤링(230308 추가됨))
          하단 3개는 하드코딩된 배너 (고정 형식(움직이지 x))
          */}
          <div className="main-section__banner-box">
            <Swiper
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
            >
              <SwiperSlide>
                <BannerLInk className="main-section__link" bannerLink="/" imgSrc={JPG.MAIN_BANNER_01} imgAlt="advertisement-banner-img" />
              </SwiperSlide>
              <SwiperSlide>
                <BannerLInk className="main-section__link" bannerLink="/" imgSrc={JPG.MAIN_BANNER_02} imgAlt="advertisement-banner-img" />
              </SwiperSlide>
              <SwiperSlide>
                <BannerLInk className="main-section__link" bannerLink="/" imgSrc={JPG.MAIN_BANNER_03} imgAlt="advertisement-banner-img" />
              </SwiperSlide>
              <SwiperSlide>
                <BannerLInk className="main-section__link" bannerLink="/" imgSrc={JPG.MAIN_BANNER_04} imgAlt="advertisement-banner-img" />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="main-section__banner-box">
            <Swiper
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
            >
              <SwiperSlide>
                <BannerLInk className="main-section__link" bannerLink="/" imgSrc={JPG.MAIN_BANNER_01} imgAlt="advertisement-banner-img" />
              </SwiperSlide>
              <SwiperSlide>
                <BannerLInk className="main-section__link" bannerLink="/" imgSrc={JPG.MAIN_BANNER_02} imgAlt="advertisement-banner-img" />
              </SwiperSlide>
              <SwiperSlide>
                <BannerLInk className="main-section__link" bannerLink="/" imgSrc={JPG.MAIN_BANNER_03} imgAlt="advertisement-banner-img" />
              </SwiperSlide>
              <SwiperSlide>
                <BannerLInk className="main-section__link" bannerLink="/" imgSrc={JPG.MAIN_BANNER_04} imgAlt="advertisement-banner-img" />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="main-section__banner-box">
            <BannerLInk className="main-section__link" bannerLink="/" imgSrc={JPG.MAIN_BANNER_01} imgAlt="advertisement-banner-img" />
          </div>

          <div className="main-section__banner-box">
            <BannerLInk className="main-section__link" bannerLink="/" imgSrc={JPG.MAIN_BANNER_01} imgAlt="advertisement-banner-img" />
          </div>

          <div className="main-section__banner-box">
            <BannerLInk className="main-section__link" bannerLink="/" imgSrc={JPG.MAIN_BANNER_01} imgAlt="advertisement-banner-img" />
          </div>
        </section>
      </Layout>
      <Footer />
    </>
  );
}
