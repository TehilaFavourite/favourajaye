import React from "react";
import "./Footer.css";
import {AiOutlineLinkedin} from "react-icons/ai"
import {BsGithub} from "react-icons/bs"
import {GrTwitter} from "react-icons/gr"


const Footer = () => {
  return <footer>
    <a href="#" className="footer__logo">AJAYE FAVOUR</a>
    <ul className="permalinks">
      <li> <a href="#">Home</a> </li>
      <li> <a href="#about">About</a> </li>
      <li> <a href="#experience">Experience</a> </li>
      <li> <a href="#services">Services</a> </li>
      <li> <a href="#portfolio">Portfolio</a> </li>
      <li> <a href="#testimonials">Testimonials</a> </li>
      <li> <a href="#contact">Contacts</a> </li>
    </ul>

    <div className="footer__socials">
      <a href="https://linkedin.com"> <AiOutlineLinkedin /> </a>
      <a href="https://github.com"> <BsGithub /> </a>
      <a href="https://twitter.com"> <GrTwitter /> </a>
    </div>

    <div className="footer__copyright">
      <small>&copy; AJAYE FAVOUR. All Rights Reserved</small>
    </div>
  </footer>;
};

export default Footer;
