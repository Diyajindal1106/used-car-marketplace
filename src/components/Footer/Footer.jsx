import "./Footer.css";
import { Link } from "react-router-dom";
import { FaInstagram,FaLinkedin,FaGithub } from "react-icons/fa";

function Footer(){

return(

<footer className="footer">

<div className="footer-container">

<div>

<h2>Drive<span>Luxe</span></h2>

<p>

India's trusted used car marketplace.

</p>

</div>

<div>

<h3>Quick Links</h3>

<Link to="/">Home</Link>

<Link to="/cars">Cars</Link>

<Link to="/about">About</Link>

<Link to="/contact">Contact</Link>

</div>

<div>

<h3>Contact</h3>

<p>Delhi, India</p>

<p>support@driveluxe.com</p>

<p>+91 9876543210</p>

</div>

<div>

<h3>Follow Us</h3>

<div className="footer-icons">

<FaInstagram/>

<FaLinkedin/>

<FaGithub/>

</div>

</div>

</div>

<hr/>

<p className="copyright">

© 2026 DriveLuxe. All Rights Reserved.

</p>

</footer>

);

}

export default Footer;