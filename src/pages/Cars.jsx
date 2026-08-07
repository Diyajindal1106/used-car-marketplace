import "./Cars.css";
import { useEffect, useState } from "react";
import axios from "axios";

import SearchBar from "../components/SearchBar/SearchBar";
import FilterBar from "../components/FilterBar/FilterBar";
import CarCard from "../components/CarCard/CarCard";

function Cars() {

    const [cars, setCars] = useState([]);

    const [search, setSearch] = useState("");

    const [category, setCategory] = useState("All Categories");

    const [fuel, setFuel] = useState("All Fuel");

    const [price, setPrice] = useState("All Prices");

    const [sort, setSort] = useState("Default");

    useEffect(() => {

        const fetchCars = async () => {

            try {

                const { data } = await axios.get("http://localhost:5000/api/cars");

                setCars(data);

            }

            catch (error) {

                console.log(error);

            }

        };

        fetchCars();

    }, []);

    const filteredCars = cars

        // Search
        .filter((car) => {

            return `${car.company} ${car.model}`

                .toLowerCase()

                .includes(search.toLowerCase());

        })

        // Category
        .filter((car) => {

            if (category === "All Categories") return true;

            return car.category === category;

        })

        // Fuel
        .filter((car) => {

            if (fuel === "All Fuel") return true;

            return car.fuel === fuel;

        })

        // Price
        .filter((car) => {

            if (price === "All Prices") return true;

            if (price === "Below 5L")

                return car.amount < 500000;

            if (price === "5L-10L")

                return car.amount >= 500000 &&
                    car.amount <= 1000000;

            if (price === "Above 10L")

                return car.amount > 1000000;

            return true;

        })

        // Sort
        .sort((a, b) => {

            if (sort === "Low to High") {

                return a.amount - b.amount;

            }

            if (sort === "High to Low") {

                return b.amount - a.amount;

            }

            return 0;

        });

    return (

        <section className="cars-page">

            <div className="cars-container">

                <div className="cars-heading">

                    <h1>

                        Find Your Dream Car

                    </h1>

                    <p>

                        Explore premium verified used cars.

                    </p>

                </div>

                <SearchBar

                    search={search}

                    setSearch={setSearch}

                />

                <FilterBar

                    category={category}
                    setCategory={setCategory}

                    fuel={fuel}
                    setFuel={setFuel}

                    price={price}
                    setPrice={setPrice}

                    sort={sort}
                    setSort={setSort}

                />

                <div className="cars-grid">

                    {

                        filteredCars.length > 0 ? (

                            filteredCars.map((car) => (

                                <CarCard

                                    key={car._id}

                                    car={car}

                                />

                            ))

                        ) : (

                            <h2 style={{ color: "white" }}>

                                No Cars Found

                            </h2>

                        )

                    }

                </div>

            </div>

        </section>

    );

}

export default Cars;