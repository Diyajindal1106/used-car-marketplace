import "./AdminLogin.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const handleLogin = (e) => {

        e.preventDefault();

        if (
            email === "admin@driveluxe.com" &&
            password === "123456"
        ) {

            localStorage.setItem("admin", "true");

            alert("Login Successful!");

            navigate("/admin");

        }

        else {

            alert("Invalid Email or Password");

        }

    };

    return (

        <section className="admin-login">

            <div className="login-box">

                <h1>Admin Login</h1>

                <p>Login to access the dashboard</p>

                <form onSubmit={handleLogin}>

                    <input
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type="submit">

                        Login

                    </button>

                </form>

            </div>

        </section>

    );

}

export default AdminLogin;