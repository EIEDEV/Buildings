import "./footer.css";

import React from "react";

const Footer = () => {
  return (
    <div
      className="footer-div"
      style={{
        display: "flex",
        textAlign: "center",
        padding: "1rem",
        backgroundColor: "grey",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      BRANDING AND WEB DESIGN BY EIEDEV
      <span
        style={{
          fontWeight: "900",
          margin: "0 0.5rem",
        }}
      >
        &middot;
      </span>
      COYRIGHT 2016 RATIO DECOR INTERIOR DESIGN
    </div>
  );
};

export default Footer;
