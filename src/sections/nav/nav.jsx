import "./nav.css";

import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { LiaSearchSolid } from "react-icons/lia";
import { IoMenu } from "react-icons/io5";
const Nav = () => {
  const [trues, settrues] = useState(true);
  const istrue = () => {
    settrues((trues) => !trues);
  };
  return (
    <nav>
      <h1>RATIO</h1>
      <div className="most-wahala">
        <div style={{ display: trues ? "inherit" : "none" }}>
          <h6 className="nav-text v">
            {" "}
            HOME <RiArrowDropDownLine className="roll" />
          </h6>
          <h6 className="nav-text v">
            PAGE <RiArrowDropDownLine className="roll" />
          </h6>
          <h6 className="nav-text v">
            PORTFOLIO <RiArrowDropDownLine className="roll" />
          </h6>
          <h6 className="nav-text v">
            BLOG <RiArrowDropDownLine className="roll" />
          </h6>
          <h6 className="nav-text v">
            SHOP <RiArrowDropDownLine className="roll" />
          </h6>
          <h6 className="nav-text v">
            ELEMENTS <RiArrowDropDownLine className="roll" />
          </h6>
        </div>
        <h6 className="nav-text v">
          <LiaSearchSolid />
        </h6>
        <h6 className="nav-text w" onClick={istrue}>
          <IoMenu />{" "}
        </h6>
      </div>
    </nav>
  );
};

export default Nav;
