import "./App.css";
import Contact from "./sections/contact/contact";
import Footer from "./sections/footer/footer";
import Header from "./sections/header/header";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import Nav from "./sections/nav/nav";
import Project from "./sections/rojects/project";
import Process from "./sections/process/process";
import Boast from "./sections/boast/boast";
import News from "./sections/news/news";
import Review from "./sections/review/review";
function App() {
  return (
    <>
      <Nav />
      <Header />
      <Project />
      <Process />
      <News />
      <Boast />
      <Review />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
