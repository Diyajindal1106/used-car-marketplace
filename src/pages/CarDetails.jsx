import "./CarDetails.css";
import { useParams, Link } from "react-router-dom";
import { FiMapPin, FiCalendar, FiSettings } from "react-icons/fi";
import { BsFuelPump } from "react-icons/bs";

import carsData from "../data/CarsData";

function CarDetails() {

    const { id } = useParams();

    const car = carsData.find((item) => item.id === Number(id));

    if (!car) {

        return (

            <div className="car-not-found">

                <h2>Car Not Found</h2>

                <Link to="/cars">
                    Back to Cars
                </Link>

            </div>

        );

    }

    return (

        <section className="car-details-page">

            <div className="details-container">

                <div className="image-section">

                    <img
                        src={car.image}
                        alt={car.model}
                    />

                </div>

                <div className="info-section">

                    <h1>

                        {car.company} {car.model}

                    </h1>

                    <h2>

                        {car.price}

                    </h2>

                    <div className="spec-grid">

                        <div className="spec-card">

                            <BsFuelPump />

                            <span>{car.fuel}</span>

                        </div>

                        <div className="spec-card">

                            <FiSettings />

                            <span>{car.transmission}</span>

                        </div>

                        <div className="spec-card">

                            <FiCalendar />

                            <span>{car.year}</span>

                        </div>

                        <div className="spec-card">

                            🚗

                            <span>{car.km}</span>

                        </div>

                        <div className="spec-card">

                            <FiMapPin />

                            <span>{car.location}</span>

                        </div>

                    </div>

                    <div className="description">

                        <h3>

                            Description

                        </h3>

                        <p>

                            This vehicle is well maintained and thoroughly inspected.
                            It comes with genuine documents, smooth engine performance,
                            excellent mileage and premium condition. Perfect for daily
                            city driving as well as long highway trips.

                        </p>

                    </div>

                    <div className="details-buttons">

                        <button className="contact-btn">

                            Contact Seller

                        </button>

                        <Link
                            to="/cars"
                            className="back-btn"
                        >

                            ← Back to Cars

                        </Link>

                    </div>

                </div>

            </div>

        </section>

    );

}

export default CarDetails;