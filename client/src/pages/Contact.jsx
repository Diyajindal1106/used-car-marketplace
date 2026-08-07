import "./Contact.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaLinkedin } from "react-icons/fa";

function Contact() {

    return (

        <section className="contact-page">

            <div className="contact-container">

                <div className="contact-heading">

                    <h1>Contact Us</h1>

                    <p>
                        We'd love to hear from you. Get in touch with us.
                    </p>

                </div>

                <div className="contact-wrapper">

                    <div className="contact-info">

                        <h2>Get In Touch</h2>

                        <div className="info-box">
                            <FaPhoneAlt />
                            <span>+91 9876543210</span>
                        </div>

                        <div className="info-box">
                            <FaEnvelope />
                            <span>support@driveluxe.com</span>
                        </div>

                        <div className="info-box">
                            <FaMapMarkerAlt />
                            <span>Delhi, India</span>
                        </div>

                        <div className="social-icons">

                            <FaInstagram />

                            <FaLinkedin />

                        </div>

                    </div>

                    <form className="contact-form">

                        <input
                            type="text"
                            placeholder="Your Name"
                        />

                        <input
                            type="email"
                            placeholder="Your Email"
                        />

                        <input
                            type="text"
                            placeholder="Subject"
                        />

                        <textarea
                            rows="6"
                            placeholder="Your Message"
                        ></textarea>

                        <button>

                            Send Message

                        </button>

                    </form>

                </div>

            </div>

        </section>

    );

}

export default Contact;