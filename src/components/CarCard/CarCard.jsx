import "./CarCard.css";
import { FiHeart, FiMapPin } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function CarCard({ car }) {

    const navigate = useNavigate();

    return (

        <div className="car-card">

            <div className="car-image">

                <img src={car.image} alt={car.model} />

                <button className="wishlist-btn">
                    <FiHeart />
                </button>

            </div>

            <div className="car-content">

                <h2>{car.company} {car.model}</h2>

                <h3>{car.price}</h3>

                <div className="car-specs">

                    <span>{car.fuel}</span>

                    <span>{car.transmission}</span>

                    <span>{car.year}</span>

                </div>

                <p className="location">

                    <FiMapPin />

                    {car.location}

                </p>

                <button
                    className="details-btn"
                    onClick={() => navigate(`/cars/${car.id}`)}
                >
                    View Details →
                </button>

            </div>

        </div>

    );

}

export default CarCard;