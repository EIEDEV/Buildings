import Image from "./../../assets/mumu/abx.jpg";
import Image1 from "./../../assets/mumu/abw.jpg";
import Image2 from "./../../assets/mumu/abu.jpg";
import "./news.css";
import { FaArrowRight } from "react-icons/fa";

const News = () => {
  const image = [
    {
      img: Image,
      text: "LIFE IN SPIRAL",
    },

    {
      img: Image1,
      text: "YOUNG ARCHITECTS",
    },

    {
      img: Image2,
      text: "ARCHITECTS NOW",
    },
  ];
  return (
    <section id="news">
      <h2>LATEST NEWS</h2>
      <p>
        Ipsum lorem ad sea, in reque bonorum definiebas mei. Ius causae
        conclusioneemque in. Sea ex nemore eirmoddellicatissim.
      </p>
      <div className="news-pics">
        {image.map((item) => (
          <div className="news-text">
            <img src={item.img} />
            <h3>{item.text}</h3>
            <small>
              by Gavin Bell <span>Housing</span> Apr 15, 2016
            </small>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              mattis eieifend lorem nec ultrices. Suspendisse potenti, Sed nisi
              ex, tincidunt eu lorem at, molestle ullamcorper ips
            </p>
            <div className="btn">
              Read More <FaArrowRight />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default News;
