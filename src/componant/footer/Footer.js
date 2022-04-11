import React from 'react'
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        Inshorts clone made by -{" "}
        <a href="https://www.linkedin.com/in/piyush-eon" target="__blank">
          Amit
        </a>
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
        <a href="https://www.instagram.com/singh.amit_007/" target="__blank">
          <i className="fab fa-instagram-square fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/amit-singh-a3215216b/" target="__blank">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
      </div>
    </div>
  )
}

export default Footer