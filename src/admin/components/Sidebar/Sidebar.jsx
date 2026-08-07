import "./Sidebar.css";
import {
    MdDashboard,
    MdAddCircle,
    MdDirectionsCar,
    MdLogout
} from "react-icons/md";

import { Link, useLocation, useNavigate } from "react-router-dom";

function Sidebar() {

    const navigate = useNavigate();

    const location = useLocation();

    const logout = () => {

        localStorage.removeItem("admin");

        navigate("/admin-login");

    };

    return (

        <aside className="admin-sidebar">

            <h2 className="admin-sidebar-logo">

                Drive<span>Luxe</span>

            </h2>

            <nav>

                <Link
                    className={location.pathname==="/admin"?"active":""}
                    to="/admin"
                >
                    <MdDashboard />
                    Dashboard
                </Link>

                <Link
                    className={location.pathname==="/admin/add"?"active":""}
                    to="/admin/add"
                >
                    <MdAddCircle />
                    Add Car
                </Link>

                <Link
                    className={location.pathname==="/admin/view"?"active":""}
                    to="/admin/view"
                >
                    <MdDirectionsCar />
                    Manage Cars
                </Link>

            </nav>

            <button
                className="logout"
                onClick={logout}
            >

                <MdLogout />

                Logout

            </button>

        </aside>

    );

}

export default Sidebar;