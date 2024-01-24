import { FaPlus } from "react-icons/fa";
import "./process.css";
import React, { useState } from "react";
import Image from "./../../assets/mumu/2 Bedroom Block of flat.jpeg";
import Image1 from "./../../assets/mumu/modern luxury in this exquisitely designed living room_ The large, inviting sofas provide seating.jpeg";
import Image2 from "./../../assets/mumu/Портфолио_ дизайн интерьера квартир, домов, офисов и коммерческих помещений_ 300+ дизайн проектов.jpeg";
import Image3 from "./../../assets/mumu/Dubai International Airport.jpeg";
import Image4 from "./../../assets/mumu/180 N LaSalle — OKW Architects.jpeg";
import Image5 from "./../../assets/mumu/4dbf88f7-d35c-4608-9501-3724bda75883.jpeg";
import Image6 from "./../../assets/mumu/52+ Black and White Kitchen Cabinets ( TIMELESS LOOK ) - Cabinets.jpeg";
import Image7 from "./../../assets/mumu/A' Design Award & Competition_ Last Call to Enter Your Best Designs Before the Deadline.jpeg";

const Process = () => {
  const image = [
    { img: Image },
    { img: Image1 },
    { img: Image2 },
    { img: Image3 },
    { img: Image4 },
    { img: Image5 },
    { img: Image6 },
    { img: Image7 },
  ];
  const realdata = [
    { id: 1, text: "01.  MEET & AGREE" },
    { id: 2, text: "02. IDEAS & CONCEPT" },
    { id: 3, text: "03. DESIGN & CREATE" },
    { id: 4, text: "04. BUILD & INSTALL" },
  ];
  const [likee, setLikee] = useState(true);
  const [click, setclick] = useState([]);

  const likething = () => {
    setLikee((likee) => !likee);
  };

  const clickthing = (typeid) => {
    if (click.includes(typeid)) {
      setclick(click.filter((item) => item.id === typeid));
    } else {
      setclick([typeid]);
    }
  };

  return (
    <section id="process">
      <div className="process-up-side">
        <div className="process-up-side-right">
          <div>
            <h3>Our Progress</h3>
            <p>
              Explore the seamless real estate journey with us. From tailored
              solutions to transparent processes, our dedicated team ensures
              your satisfaction at every step. Discover your dream propety
              effortlessly with our expert guidiance and client-centric
              approach. Trust us to make your real estate aspirations a reality
            </p>
            <div className="btn">
              <FaPlus /> CONTACT US
            </div>
          </div>
        </div>
        <div className="process-up-side-left">
          {realdata.map((item) => (
            <div
              className="numbers"
              key={item.id}
              onClick={() => clickthing(item.id)}
            >
              {click.includes(item.id) ? (
                <h4
                  style={{
                    backgroundColor: "black",
                    borderRadius: "50%",
                    color: "white",
                    cursor: "pointer",
                    padding: "1rem 2rem",
                  }}
                >
                  {item.text}
                </h4>
              ) : (
                <h4
                  style={{ backgroundColor: "transparent", cursor: "pointer" }}
                >
                  {item.text}
                </h4>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="process-downside">
        <big>
          WHY THIS WIREFRAME IS AWESOME FOR <span>FUTURE DESIGN</span>
        </big>
        <div>
          {image.map((item) => (
            <img src={item.img} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
