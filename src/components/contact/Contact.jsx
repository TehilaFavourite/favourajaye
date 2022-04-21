import React from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import  { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6eqda9a', 'template_zswqs03', form.current, 'vdsIYxCJWjirmv7ri')
      
    e.target.reset()
  };

  return <section id='contact'>
    <h5>Get in Touch</h5>
    <h2>Contact Me</h2>

    <div className="container contact__container">
      <div className="contact__options">
        <article className="contact__option">
          <MdOutlineEmail className="contact__option-icon"/>
          <h4>Email</h4>
          <h5>tehilafavourite@gmail.com</h5>
          <a href="mailto:tehilafavourite@gmail.com" target="_blank">Send a message</a>
        </article>
        <article className="contact__option">
          <FaTelegramPlane className="contact__option-icon" />
          <h4>Telegram</h4>
          <h5>Ajaye Favour</h5>
          <a href="https://t.me/deecentralized" target="_blank">Send a message</a>
        </article>
        <article className="contact__option" >
          <AiOutlineLinkedin className="contact__option-icon" />
          <h4>Linkedin</h4>
          <h5>Ajaye Favour</h5>
          <a href="www.linkedin.com/in/ajaye-favour-blockchain-developer" target="_blank">Send a message</a>
        </article>
      </div>

      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your FullName" required />
        <input type="text" name="email" placeholder="Your Email" required />
        <textarea name="message"  rows="7" placeholder="Your message" required></textarea>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
    </div>
  </section>;
};

export default Contact;
