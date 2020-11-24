import React from "react";

import "../../App.css";
const Footer = () => {
  return (
    <div className="mainbody__footer">
      <footer class="page-footer font-small blue sticky">
        <div class="footer-copyright text-center py-3">
          © 2020 Copyright:
          <a href="/" style={{ textDecoration: "none", color: "red" }}>
            BMSCE
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
