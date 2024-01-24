import "./review.css";
import { SwiperSlide, Swiper } from "swiper/react";
import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import Image from "../../assets/linkedin/limpo.jpg";
import Image1 from "../../assets/linkedin/limpo1.jpg";
import Image2 from "../../assets/linkedin/limpo2.jpg";
import Image3 from "../../assets/linkedin/limpo3.jpg";
import Image4 from "../../assets/linkedin/limpo4.jpg";
import Image5 from "../../assets/linkedin/limpo5.jpg";
import Image6 from "../../assets/linkedin/limpo6.jpg";
import Image7 from "../../assets/linkedin/limpo7.jpg";

const Review = () => {
  const image = [
    { img: Image, text: "THINK CREATIVE", other: "JAKE" },
    { img: Image1, text: "LESS IS MORE", other: "SCOTT" },
    { img: Image2, text: "CLEAN & SIMPLE", other: "WRIGHT" },
    { img: Image3, text: "BEST QUALITY", other: "GAVIN" },
    { img: Image4, text: "TOP DESIGNS", other: "POWELL" },
    { img: Image5, text: "LOTS OF LOVE", other: "JAKE" },
    { img: Image6, text: "EDUCATIVE", other: "SCOTT" },
    { img: Image7, text: "INFORMATIVE", other: "POWELL" },
  ];
  return (
    <section id="review-container">
      <Swiper
        loopFillWithBlank={true}
        slidesPerView={3}
        slidesPerGroup={1}
        loop={true}
        autoplay={{ delay: 3 }}
        spaceBetween={50}
        modules={[Pagination, Navigation]}
        navigation={true}
        breakpoints={{
          10: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 1,
          },
          601: {
            slidesPerView: 2,
          },
          1025: {
            slidesPerView: 3,
          },
        }}
      >
        {image.map((item) => (
          <SwiperSlide>
            <div className="review-first-div">
              <h3> {item.text}</h3>
              <p>
                Allenum phaedrum torquatos nec eu. Vis detraxit periculis ex,
                nihil expetendis in mei. Mei an pericula euripidis, hinc partem
              </p>
            </div>
            <div className="review-second-div">
              <img src={item.img} alt="" />
              <div>
                <h5>{item.other}</h5>
                <big>Architect Student</big>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Review;
