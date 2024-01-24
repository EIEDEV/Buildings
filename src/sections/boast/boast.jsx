import "./boast.css";

import React from "react";

const Boast = () => {
  return (
    <section id="boast">
      <div className="boast-upside">
        <div className="boast-numbers">
          <h3>224</h3>
          <p>Finished Projects</p>
        </div>
        <div className="boast-numbers">
          <h3>184</h3>
          <p>New Designs</p>
        </div>
        <div className="boast-numbers">
          <h3>268</h3>
          <p>Team Members</p>
        </div>
        <div className="boast-numbers">
          <h3>167</h3>
          <p>Happy Clients</p>
        </div>
      </div>
      <div className="boast-downside">
        <div className="downside-photo a">
          <div className="boad "></div>
        </div>
        <div className="downside-photo b">
          <div className="boad">
            <big>NO CODING</big>
            <p>
              Allenrum phaedrum torquatos nec vis detraxit periculis ex nihil
              expetendis in met. Mei an apericula euripidis, hinc partern ei
              est. Eos ei nisigraecis, vix aperiri consequat an.
            </p>
            <div className="btn">VIEW MORE</div>
          </div>
        </div>
        <div className="downside-photo c">
          <div className="boad">
            <big>CREATIVE ELEMENTS</big>
            <p>
              Allenrum phaedrum torquatos nec vis detraxit periculis ex nihil
              expetendis in met. Mei an apericula euripidis, hinc partern ei
              est. Eos ei nisigraecis, vix aperiri consequat an.
            </p>
            <div className="btn">VIEW MORE</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Boast;
