import "./WhyChooseUs.css";
import { FaCar, FaShieldAlt, FaHandshake, FaBolt } from "react-icons/fa";

function WhyChooseUs() {

    const features = [
        {
            featureicon: <FaCar />,
            title: "Verified Cars",
            desc: "Every vehicle is inspected and quality checked before listing."
        },
        {
            featureicon: <FaShieldAlt />,
            title: "Secure Deals",
            desc: "Safe documentation and verified ownership for every purchase."
        },
        {
            featureicon: <FaHandshake />,
            title: "Trusted Sellers",
            desc: "Connect with reliable dealers and genuine car owners."
        },
        {
            featureicon: <FaBolt />,
            title: "Fast Process",
            desc: "Buy your dream car quickly with a hassle-free experience."
        }
    ];

    return (
        <section className="why">
            <div className="container">

                <div className="section-title">
                    <h2>Why Choose DriveLuxe?</h2>
                    <p>Your trusted destination for premium pre-owned cars.</p>
                </div>

                <div className="why-grid">

                    {features.map((item, index) => (

                        <div className="why-card" key={index}>

                            <div className="feature-icon">
                                {item.featureicon}
                            </div>

                            <h3>{item.title}</h3>

                            <p>{item.desc}</p>

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
}

export default WhyChooseUs;