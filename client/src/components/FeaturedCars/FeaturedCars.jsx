import "./FeaturedCars.css";
import { useNavigate } from "react-router-dom";
import hatchbackImage from "../../assets/images/hatchback.jpg";
import sedanImage from "../../assets/images/sedan.jpg";
import suvImage from "../../assets/images/SUV.jpg";
import mpvImage from "../../assets/images/MPV.jpg";
// import crossoverImage from "../../assets/images/crossover.jpg";
// import coupeImage from "../../assets/images/coupe.jpg";


const categories = [
    {
        title: "Hatchback",
        image: hatchbackImage
    },
    
    {
        title: "Sedan",
        image: sedanImage
    },
    {
        title: "SUV",
        image: suvImage
    },
    {
        title: "MPV",
        image: mpvImage
    },
    // {
    //     title: "Crossover",
    //     image: crossoverImage
    // },
    // {
    //     title: "Coupe",
    //     image: coupeImage
    // }
];

function FeaturedCars() {
    const navigate = useNavigate();

    return (

        <section className="featured">

            <div className="container">

                <h2> Explore cars by Category</h2>

                <p>
                    Explore verified vehicles across every segment,
from city hatchbacks to luxury SUVs.
                </p>

                <div className="category-grid">

                    {categories.map((item) => (

                        <div className="category-card"
                         key={item.title}
                         onClick={()=> navigate("/cars")}>

                            <img
                                src={item.image}
                                alt={item.title}
                            />

                            <div className="category-overlay">

                                <h3>{item.title}</h3>

                                <button onClick={()=> navigate("/cars")}>
                                    Explore<span> →</span>
                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}

export default FeaturedCars;