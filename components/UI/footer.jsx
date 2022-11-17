import React from "react";
import { Container } from "@nextui-org/react";

function Footer() {
  return (
    <div
      style={{
        height: 100,

        backgroundColor: "#155263",
        color: "white",
        marginTop: "90px",
      }}
    >
      <footer>
        <div css={{ marginLeft: "360px" }}>
          <h6>
            &copy; 2022
            <a href="https://karabolentsoe-personal-portfolio.netlify.app/">
              Karabo
            </a>
            .T's and C's apply{" "}
          </h6>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
