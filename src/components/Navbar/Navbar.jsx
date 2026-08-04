import "./Navbar.css";
import { useState, useEffect } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FiUser, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

function Navbar() {

    const [openMenu, setOpenMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    return (

        <>

            <nav className={scrolled ? "navbar scrolled" : "navbar"}>

                <div
                    className="menu-icon"
                    onClick={() => setOpenMenu(true)}
                >
                    <HiOutlineMenuAlt3 />
                </div>

                <Link to="/" className="logo">
                    Drive<span>Luxe</span>
                </Link>

                <div className="user-icon">
                    <FiUser />
                </div>

            </nav>

            <div className={openMenu ? "sidebar active" : "sidebar"}>

                <div className="sidebar-top">

                    <h2>
                        Drive<span>Luxe</span>
                    </h2>

                    <FiX
                        className="close-btn"
                        onClick={() => setOpenMenu(false)}
                    />

                </div>

                <ul>

                    <li>
                        <Link to="/" onClick={() => setOpenMenu(false)}>Home</Link>
                    </li>

                    <li>
                        <Link to="/cars" onClick={() => setOpenMenu(false)}>Cars</Link>
                    </li>

                    <li>
                        <Link to="/about" onClick={() => setOpenMenu(false)}>About</Link>
                    </li>

                    <li>
                        <Link to="/contact" onClick={() => setOpenMenu(false)}>Contact</Link>
                    </li>

                </ul>

            </div>

            {openMenu && (
                <div
                    className="backdrop"
                    onClick={() => setOpenMenu(false)}
                ></div>
            )}

        </>

    );

}

export default Navbar;