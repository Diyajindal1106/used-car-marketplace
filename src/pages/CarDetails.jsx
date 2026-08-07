import "./CarDetails.css";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

import { FiMapPin, FiCalendar, FiSettings } from "react-icons/fi";
import { BsFuelPump } from "react-icons/bs";

function CarDetails() {

    const { id } = useParams();

    const [car, setCar] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchCar = async () => {

            try {

                const { data } = await axios.get(

                    `http://localhost:5000/api/cars/${id}`

                );

                setCar(data);

            }

            catch (error) {

                console.log(error);

            }

            finally {

                setLoading(false);

            }

        };

        fetchCar();

    }, [id]);

    if (loading) {

        return (

            <div className="car-not-found">

                <h2>Loading...</h2>

            </div>

        );

    }

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

                        <h3>Description</h3>

                        <p>

                            {car.description}

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