import React from 'react';
import Header from '../../components/Header';
import headerImage from '../../images/header_bg_2.jpg';
import { MdEmail } from 'react-icons/md';
import { BsMessenger } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';
import './contact.css';


const Contact = () => {
  return (
   <>
   <Header title="Get In Touch" image={headerImage}>
      Proin eu elementum libero. Aliquam rhoncus faucibus tempor. Vivamus feugiat imperdiet augue ac pellentesque. Vestibulum laoreet.
   </Header>

    <section className="contact">
      <div className="container contact-container">
        <div className="contact-wrapper">
          <a href="mailto:ehapamicheal@gmail.com" target="_blank" rel="noreferrer noopener"><MdEmail/></a>
          <a href="https://m.me/micheal_abraham" target="_blank" rel="noreferrer noopener"><BsMessenger/></a>
          <a href="https://wa.me/+2347061288017" target="_blank" rel="noreferrer noopener"><IoLogoWhatsapp/></a>
        </div>
      </div>
    </section>

   </>
  )
}

export default Contact;