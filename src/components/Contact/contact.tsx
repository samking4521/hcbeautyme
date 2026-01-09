import { FaEnvelope, FaTimes } from "react-icons/fa";
import "./contact.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

type ContactProps = {
  contact: boolean;
  closeContactForm: () => void;
};

const Contact = ({ contact, closeContactForm }: ContactProps) => {
  if (!contact) return null;

  
    const email = "Huguetcara9@gmail.com"; // ← replace with your email
  const subject = encodeURIComponent("Model Booking Inquiry");
  

  


  
  return (
    <div
      className={`contact-overlay ${contact ? "show" : ""}`}
      onClick={closeContactForm}
    >
      <div
        className="contact-panel"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="contact-content">
          <button className="close-button" onClick={closeContactForm}>
            <FaTimes />
          </button>

          <LazyLoadImage
            src={"https://assets.hcbeautyme.com/tourist/tourist_four.jpg"}
            alt="Ava Sinclair"
            className="contact-photo"
            effect="blur"
          />

          <p className="contact-name">HCBeauty</p>

          <p className="contact-desc">
            Professional model based in Phoenix Arizona. Available for runway,
            editorial, and fashion campaigns worldwide.
          </p>

           <span style={{fontStyle: "italic"}}>Get in touch:</span>

          <div className="contact-info">

           
            {/* <p>
              <FaPhone /> +1 (555) 123-4567
            </p> */}
            
                     <a href={`mailto:${email}?subject=${subject}`} style={{textDecoration: "none"}}>
                        <p className="contact-email">
                                          <FaEnvelope size={25} /> ava@example.com

                        </p>
            </a>
           
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
