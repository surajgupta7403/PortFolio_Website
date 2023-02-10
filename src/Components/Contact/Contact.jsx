import React, { useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {
    const form = useRef();

    const [done, setDone] =useState(false)

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_qwutjpv', 'template_z1oc7sh', form.current, 'vruNzoVVRbpQFG61i')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };

    const resetForm = () => { //{/*onClick={resetForm}*/}
        form.current.reset();   
        setDone(false);
      };

  return (
    <div className="contact-form">
        <div className="w-left">
            <div className="awesome">
                <span>Get in touch</span>
                <span>Contact me</span>
                <div 
                className="blur s-blur1"
                style={{ background: "#ABF!FF94" }}>
                </div>
            </div>
        </div>

        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" className="user"  placeholder="Name"/>
                <input type="email" name="user_email" className="user" placeholder="Email"/>
                <textarea name="message" className="user" placeholder="Message" />
                <input  type="submit" value="Send" className="button" onClick={resetForm}/> {/*onClick={resetForm}  line 23 resetform*/}
                <span>{done && "Thanks for Contacting me"}</span>
                <div
                    className="blur c-blur1"
                    style={{ background: "var(--purple)" }}
                ></div>
            </form>
        </div>


    </div>
  )
}

export default Contact
