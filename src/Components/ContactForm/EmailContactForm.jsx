import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Email.css';
import '../../index.css';

const myStyle = {
  backgroundImage: `url(${process.env.PUBLIC_URL + "../bg.jpg"})`,
  height: '100vh',
  backgroundSize: '100% 100%',
  backgroundRepeat: 'repeat',
  backgroundAttachment: "fixed"
};

const EmailContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs.sendForm('service_gic95qp', 'template_08by5sp', form.current, 'K3BMMGqJhl2Yfh2KQ')
      .then((result) => {
        alert("success")
      }, (error) => {
        alert("fail")
      });
  };

  return (

<div className="flexingEmail">
<div style={myStyle}></div>
    <div className="test">
      <div> If you wish to come in contact with our management,
        please use this form to contact our staff. The same goes for business inquiries!</div></div>

         <form ref={form} onSubmit={sendEmail}>
          <p className="fontContact">Name</p>
          <input type="text" name="to_name" />
          <br />
          <p className="fontContact">Email</p>
          <input type="email" name="from_name" />
          <br />
          <p className="fontContact">Message</p>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
</div>

  );
};

export default EmailContactForm;
