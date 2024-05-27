import React from 'react';
import "./Contacts.css";
import { FaWhatsapp } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

const Contacts = () => {
  return (
    <>

    <section>
      <div className="container">

        <p className="contact_phon_tit">Контактный тел: +996 507 605 408 </p>
        <p className="contact_phon_tit">Соц. сети</p>
        <p className="contact_phon"><FaTelegramPlane  className='Whatsapp'/> <span>+996 708 985 426</span>   </p>
        <p className="contact_phon"><FaInstagram className='Whatsapp'/> <span>._kuzua.06</span> </p>
        
      </div>
    </section>
    </>
  )
}

export default Contacts
