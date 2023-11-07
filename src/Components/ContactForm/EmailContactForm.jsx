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
        alert("Email sent")
      }, (error) => {
        alert("fail")
      });
  };

  return (
<div style={myStyle}>
<div className="flexingEmail">

    <div className="emailContainer">
      <div> If you wish to come in contact with our management,
        please use this form to contact our staff. The same goes for business inquiries!</div>
        <div className='formCont'>
         <form ref={form} onSubmit={sendEmail}>
          <p className="fontContact">Name</p>
          <input type="text" name="to_name" required="true"/>
          <br />
          <p className="fontContact">Email</p>
          <input type="email" name="from_name" required="true"/>
          <br />
          <p className="fontContact">Message</p>
          <textarea name="message" required="true"/>
          <input type="submit" value="Send" />
        </form>
        </div>
        </div>
</div>
</div>
  );
};

export default EmailContactForm;
