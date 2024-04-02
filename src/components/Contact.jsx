import React from "react";
import '../styles/Contact.css';
import '../styles/index.css';

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact_info">
                <h1><span>03. </span><a id="contact" href="#">Contact</a></h1> <br/>
            </div>

            <div className="contact_main">

                <p>I am looking for opportunities, preferably in product based companies and startups. If you'd like to get in touch, feel free to <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=shobhitsnagpal@gmail.com&su=Let's Connect and Explore Opportunities" target="_blank" rel="noreferrer">send an email</a>.</p>
                
            </div>
        </div>
    )
}

export default Contact;