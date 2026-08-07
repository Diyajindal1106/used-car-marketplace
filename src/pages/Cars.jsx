import "./Cars.css";
import { useState } from "react";

import SearchBar from "../components/SearchBar/SearchBar";
import FilterBar from "../components/FilterBar/FilterBar";
import CarCard from "../components/CarCard/CarCard";

import CarsData from "../data/CarsData";

function Cars() {

    const [search, setSearch] = useState("");

    const [category, setCategory] = useState("All Categories");

    const [fuel, setFuel] = useState("All Fuel");

    const [price, setPrice] = useState("All Prices");

    const [sort, setSort] = useState("Default");



    const filteredCars = CarsData

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

                return car.amount >= 500000 && car.amount <= 1000000;

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

                        filteredCars.map((car) => (

                            <CarCard

                                key={car.id}

                                car={car}

                            />

                        ))

                    }

                </div>

            </div>

        </section>

    );

}

export default Cars;