import React from "react";
import "./About.css";
import ME from "../../assets/about_me.png";
import { FaAward } from "react-icons/fa";
import { RiUserStarFill } from "react-icons/ri";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About Image' />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>3+ Years Working Experience</small>
            </article>
            <article className='about__card'>
              <RiUserStarFill className='about__icon' />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>80+ completed projects</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
            voluptas ea architecto quibusdam, dolorem tempora facere sapiente
            maxime asperiores placeat dicta nemo odio doloribus aliquam fugit
            debitis itaque incidunt numquam.
          </p>
          <a href="#contact" className="btn btn-primary"> Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
