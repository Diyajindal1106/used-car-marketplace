import "./ViewCars.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ViewCars() {

    const [cars, setCars] = useState([]);

    useEffect(() => {

        fetchCars();

    }, []);

    const fetchCars = async () => {

        try {

            const { data } = await axios.get(
                "http://localhost:5000/api/cars"
            );

            setCars(data);

        }

        catch (error) {

            console.log(error);

        }

    };

    const deleteCar = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this car?"
        );

        if (!confirmDelete) return;

        try {

            await axios.delete(
                `http://localhost:5000/api/cars/${id}`
            );

            alert("Car Deleted Successfully!");

            fetchCars();

        }

        catch (error) {

            console.log(error);

            alert("Failed to Delete Car");

        }

    };

    return (

        

    <section className="view-cars">

        <h1>Manage Cars</h1>

        <div className="view-cars-container">

            {

                cars.map((car)=>(

                    <div
                        key={car._id}
                        className="car-card"
                    >

                        <div className="car-image">

                        <img
                            src={car.image}
                            alt={car.model}
                        />

                        <span className="category-badge">
                            {car.category}
                        </span>
                        </div>

                        <div className="car-info">

                            <h2>

                                {car.company} {car.model}

                            </h2>

                            <p>

                                📍 {car.location}

                            </p>

                            <p>

                                ⛽ {car.fuel}

                            </p>

                            <h3>

                                {car.price}

                            </h3>

                        </div>

                        <div className="car-actions">

                            <Link
                                to={`/admin/edit/${car._id}`}
                                className="edit-btn"
                            >

                                Edit

                            </Link>

                            <button
                                className="delete-btn"
                                onClick={() => deleteCar(car._id)}
                            >

                                Delete

                            </button>

                        </div>

                    </div>

                ))

            }

        </div>

    </section>



    );

}

export default ViewCars;