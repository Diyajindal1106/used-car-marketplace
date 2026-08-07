import "./ViewCars.css";
import { Link } from "react-router-dom";
import carsData from "../data/CarsData";

function ViewCars() {

    return (

        <section className="view-cars">

            <h1>Manage Cars</h1>

            <table>

                <thead>

                    <tr>

                        <th>Image</th>

                        <th>Company</th>

                        <th>Model</th>

                        <th>Price</th>

                        <th>Fuel</th>

                        <th>Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        carsData.map((car)=>(

                            <tr key={car.id}>

                                <td>

                                    <img
                                        src={car.image}
                                        alt={car.model}
                                    />

                                </td>

                                <td>{car.company}</td>

                                <td>{car.model}</td>

                                <td>{car.price}</td>

                                <td>{car.fuel}</td>

                                <td>

                                    <Link
                                        className="edit-btn"
                                        to={`/admin/edit/${car.id}`}
                                    >

                                        Edit

                                    </Link>

                                    <button
                                        className="delete-btn"
                                    >

                                        Delete

                                    </button>

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </section>

    );

}

export default ViewCars;