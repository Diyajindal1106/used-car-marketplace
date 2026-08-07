import "./About.css";
import { Link } from "react-router-dom";

import aboutImage from "../assets/images/SUV.jpg";

import {
    FaCar,
    FaHandshake,
    FaShieldAlt,
    FaBolt
} from "react-icons/fa";

function About() {

    return (

        <section className="about-page">

            <div className="about-container">

                <div className="about-header">

                    <h1>About DriveLuxe</h1>

                    <p>

                        Your trusted destination for buying premium
                        verified used cars across India.

                    </p>

                </div>

                <div className="about-story">

                    <div className="about-image">

                        <img
                            src={aboutImage}
                            alt="About"
                        />

                    </div>

                    <div className="about-content">

                        <h2>

                            Our Story

                        </h2>

                        <p>

                            DriveLuxe is a modern used car marketplace
                            that connects buyers with trusted sellers.
                            Every vehicle is carefully verified before
                            being listed, ensuring transparency,
                            quality and peace of mind.

                        </p>

                        <Link
                            to="/cars"
                            className="explore-btn"
                        >

                            Explore Cars

                        </Link>

                    </div>

                </div>

                <div className="about-why-section">

                    <h2>

                        Why Choose Us

                    </h2>

                    <div className="about-why-grid">

                        <div className="about-why-card">

                            <FaCar />

                            <h3>Verified Cars</h3>

                            <p>Every car is quality checked before listing.</p>

                        </div>

                        <div className="about-why-card">

                            <FaHandshake />

                            <h3>Trusted Sellers</h3>

                            <p>Only genuine sellers are listed.</p>

                        </div>

                        <div className="about-why-card">

                            <FaShieldAlt />

                            <h3>Secure Deals</h3>

                            <p>Safe documentation & verified ownership.</p>

                        </div>

                        <div className="about-why-card">

                            <FaBolt />

                            <h3>Fast Process</h3>

                            <p>Quick search and hassle-free buying.</p>

                        </div>

                    </div>

                </div>

                <div className="stats-section">

                    <div className="stat-box">

                        <h2>500+</h2>

                        <p>Cars Sold</p>

                    </div>

                    <div className="stat-box">

                        <h2>250+</h2>

                        <p>Happy Customers</p>

                    </div>

                    <div className="stat-box">

                        <h2>50+</h2>

                        <p>Trusted Dealers</p>

                    </div>

                    <div className="stat-box">

                        <h2>100%</h2>

                        <p>Verified Cars</p>

                    </div>

                </div>

            </div>

        </section>

    );

}

export default About;