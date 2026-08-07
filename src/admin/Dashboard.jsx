import "./Dashboard.css";
import { FaCar, FaPlusCircle, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

function Dashboard() {

    return (

        <section className="dashboard">

            <h1>Admin Dashboard</h1>

            <div className="stats">

                <div className="card">
                    <FaCar />
                    <h2>12</h2>
                    <p>Total Cars</p>
                </div>

                <div className="card">
                    <FaPlusCircle />
                    <h2>Add</h2>
                    <p>New Car</p>
                </div>

                <div className="card">
                    <FaEye />
                    <h2>View</h2>
                    <p>Manage Cars</p>
                </div>

            </div>

            <div className="actions">

                <Link to="/admin/add">
                    Add Car
                </Link>

                <Link to="/admin/view">
                    View Cars
                </Link>

            </div>

        </section>

    );

}

export default Dashboard;