import "./Hero.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import heroVideo from "../../assets/videos/hero.mp4";
import Navbar from "../Navbar/Navbar";

function Hero() {

    const [showContent, setShowContent] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {

        const handleScroll = () => {

            if (window.scrollY > 50) {
                setShowContent(true);
            } else {
                setShowContent(false);
            }

        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    return (

        <section className="hero">

            {/* Background Video */}

            <video
                className="hero-video"
                src={heroVideo}
                autoPlay
                muted
                loop
                playsInline
            />

            {/* Overlay */}

            <div className="overlay"></div>

            {/* Navbar */}

            <Navbar />

            {/* Hero Content */}

            <div className={`hero-content ${showContent ? "show" : ""}`}>

                <p className="tagline">
                    India's Trusted Used Car Marketplace
                </p>

                <h1>
                    Find Your Perfect <span>Drive</span>
                </h1>

                <p className="hero-text">
                    Discover thousands of verified used cars at unbeatable prices.
                    Buy with confidence and drive home your dream car today.
                </p>

                <div className="hero-buttons">

                    <button
                        className="primary-btn"
                        onClick={() => navigate("/cars")}
                    >
                        Explore Cars
                    </button>

                    <button
                        className="secondary-btn"
                        onClick={() => navigate("/contact")}
                    >
                        Sell Your Car
                    </button>

                </div>

            </div>

            {/* Scroll Indicator */}

            <div className="scroll-indicator">

                <span>Scroll to Discover</span>

                <div className="arrow"></div>

            </div>

        </section>

    );

}

export default Hero;