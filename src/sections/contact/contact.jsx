import "./contact.css";
import React from "react";

const Contact = () => {
  return (
    <section id="cont">
      <div className=" contact">
        <div className="ratio">
          <h4>RATIO THEME</h4>
          <p>
            Alieenum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil
            expetendis in.
          </p>
          <p>
            Mei an periculla euripidis, hinc partem ei est. Eos ei nisi graecis,
            vix aperiri consequat an. Elus lorem tincidunct vix at, vei
            pertinax.
          </p>
        </div>
        <div className="latest-post">
          <h4>LATEST POSTS</h4>
          <div className="posts-tex">
            <h5>New Presentation</h5>
            <small>May 25, 2016</small>
          </div>
          <hr />
          <div className="posts-tex">
            <h5>Wooden House</h5>
            <small>April 15, 2016</small>
          </div>
          <hr />
          <div className="posts-tex">
            <h5>Awning Windows</h5>
            <small>April 15, 2016</small>
          </div>
          <hr />
        </div>
        <div className="some-wid">
          <h4>SOME WIDGET HERE</h4>
          <h5>This Year Awards</h5>
          <h5>Biennale Projects</h5>
          <h5>Architectural News</h5>
          <h5>Check Out Our Services</h5>
          <h5>Find Us on the Map</h5>
        </div>
        <div className="sercices">
          <h3>Interior Design Services</h3>
          <h5>
            RATIO DECOR INTERIOR DESIGN SPECIALIZES IN RENOVATION, NEW
            CONSTRUCTION, KITCHEN AND BATH DESIGN, AND FULL INTERIOR DESIGN
            SERVICES
          </h5>
          <p>
            Westrive to make the design process fun and enjoyable by listening
            to our clients needs and tailoring each projects to reflects our
            client's unique style. Located in Imo, Califonia.
          </p>
          <big>1234 North Allen Avenue, Suite 100, Imo, Califonia. 91004</big>
        </div>
      </div>
    </section>
  );
};

export default Contact;
