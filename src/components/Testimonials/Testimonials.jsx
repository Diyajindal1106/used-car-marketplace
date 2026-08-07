import "./Testimonials.css";
import { FaStar } from "react-icons/fa";

function Testimonials() {

    const reviews = [

        {
            name: "Rahul Sharma",
            city: "Delhi",
            review: "DriveLuxe made buying my first car incredibly easy. The vehicle was exactly as described.",
        },

        {
            name: "Priya Verma",
            city: "Gurugram",
            review: "Verified cars, smooth paperwork and great customer support. Highly recommended!",
        },

        {
            name: "Aman Gupta",
            city: "Noida",
            review: "Best used car marketplace I've ever used. Honest pricing and trusted sellers.",
        }

    ];

    return (

        <section className="testimonials">

            <div className="container">

                <div className="section-title">

                    <h2>What Our Customers Say</h2>

                    <p>Real experiences from happy customers.</p>

                </div>

                <div className="testimonial-grid">

                    {reviews.map((item,index)=>(

                        <div className="testimonial-card" key={index}>

                            <div className="stars">

                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>

                            </div>

                            <p className="review">

                                "{item.review}"

                            </p>

                            <h3>{item.name}</h3>

                            <span>{item.city}</span>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}

export default Testimonials;