import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Headerdata from "./headerdata";
import "./header.css";
import { Navigation, Pagination } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Header = () => {
  return (
    <header className="swiper-container">
      <Swiper
        modules={[Pagination, Navigation]}
        navigation={{
          nextEl: ".custom-swiper-button-next",
          prevEl: ".custom-swiper-button-prev",
        }}
        className="mySwiper"
        loopFillWithBlank={true}
        slidesPerView={1}
        slidesPerGroup={1}
        loop={true}
        autoplay={{ delay: 3 }}
      >
        <div className="abs-header">
          <h2>INTERIOR DESIGN</h2>
          <p>
            Start right now and easily construct your website in the perfect
            ratio
          </p>
          <div className="btn">PURCHASE</div>
        </div>
        {Headerdata.map((item) => (
          <SwiperSlide>
            <img src={item.img} key={item.id} />
          </SwiperSlide>
        ))}
        <div className="custom-swiper-button-prev">
          <FaArrowLeft className="custom-icon" />
        </div>
        <div className="custom-swiper-button-next">
          <FaArrowRight className="custom-icon" />
        </div>
      </Swiper>
    </header>
  );
};

export default Header;
