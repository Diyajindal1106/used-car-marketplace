import "./PopularCars.css";
import {FiHeart} from "react-icons/fi";
import hyundaii20Image from "../../assets/images/hyundaii20.jpg";
import hondaCityImage from "../../assets/images/hondacity.jpg";
import nexonImage from "../../assets/images/nexon.jpg";
import kiaImage from "../../assets/images/kia.jpg";

const cars=[
    {
        id:1,
        name:"Hyundai i20",
        image:hyundaii20Image,
        price:"₹7.80 Lakh",
        fuel:"Petrol",
        location:"Delhi",
        transmission:"Manual"
    },
    {
        id:2,
        name:"Honda City",
        image:hondaCityImage,
        price:"₹9.50 Lakh",
        fuel:"Diesel",
        location:"Mumbai",
        transmission:"Automatic"
    },
    {
        id:3,
        name:"Tata Nexon",
        image:nexonImage,
        price:"₹10.20 Lakh",
        fuel:"Petrol",
        location:"Bangalore",
        transmission:"Manual"
    },
    {
        id:4,
        name:"Kia Carens",
        image:kiaImage,
        price:"₹12.80 Lakh",
        fuel:"Diesel",
        location:"Chennai",
        transmission:"Automatic"
    }
];

function PopularCars(){

    return(

        <section className="popular">

            <div className="container">

                <h2>Popular Cars</h2>

                <p>
                    Explore the most loved cars chosen by thousands of buyers.
                </p>

                <div className="popular-grid">

                    {cars.map((car)=>(

                        <div
                            className="popular-card"
                            key={car.id}
                        >

                            <img
                                src={car.image}
                                alt={car.name}
                            />

                            <div className="wishlist">

                                <FiHeart />

                            </div>

                            <div className="popular-info">

                                <h3>{car.name}</h3>

                                <span>{car.price}</span>

                                <p className="location">
                                    📍 {car.location}
                                </p>

                                <div className="car-details">

                                    <p>{car.fuel}</p>

                                    <p>{car.transmission}</p>

                                </div>

                                <button>

                                    View Details <span>→</span>

                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    )

}

export default PopularCars;