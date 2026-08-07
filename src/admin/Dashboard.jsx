import "./Dashboard.css";
import Sidebar from "./components/Sidebar/Sidebar";
import { Link } from "react-router-dom";
import { FaCarSide, FaPlusCircle, FaListAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {

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

        catch (err) {

            console.log(err);

        }

    };

    return (

        <div className="admin-layout">

            <Sidebar />

            <main className="dashboard-content">

                <div className="dashboard-header">

                    <div>

                        <h1>Welcome Back 👋</h1>

                        <p>Manage your marketplace from one place.</p>

                    </div>

                </div>

                <div className="dashboard-cards">

                    <div className="dashboard-card">

                        <FaCarSide />

                        <h2>{cars.length}</h2>

                        <span>Total Cars</span>

                    </div>

                    <Link
                        to="/admin/add"
                        className="dashboard-card"
                    >

                        <FaPlusCircle />

                        <h2>Add</h2>

                        <span>New Car</span>

                    </Link>

                    <Link
                        to="/admin/view"
                        className="dashboard-card"
                    >

                        <FaListAlt />

                        <h2>Manage</h2>

                        <span>Cars</span>

                    </Link>

                </div>

                <div className="recent-section">

                    <h2>Recently Added Cars</h2>

                    {

                        cars.slice(0,5).map((car)=>(

                            <div
                                key={car._id}
                                className="recent-car"
                            >

                                <img
                                    src={car.image}
                                    alt={car.model}
                                />

                                <div>

                                    <h3>

                                        {car.company} {car.model}

                                    </h3>

                                    <p>

                                        {car.location}

                                    </p>

                                </div>

                                <strong>

                                    {car.price}

                                </strong>

                            </div>

                        ))

                    }

                </div>

            </main>

        </div>

    );

}

export default Dashboard;