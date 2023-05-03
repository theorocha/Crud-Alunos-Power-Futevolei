import "./Footer.css";
import React from "react";

export default (props) => (
  <footer className="footer">
    <span>
      Desenvolvido com <i className=" fa fa-heart text-danger"></i> por
      <strong>
        {` The`}
        <span className="text-danger">o</span> Roch
        <span className="text-danger">a</span>
      </strong>
    </span>
  </footer>
);
