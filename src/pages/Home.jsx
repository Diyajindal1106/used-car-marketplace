import Hero from "../components/Hero/Hero";
import FeaturedCars from "../components/FeaturedCars/FeaturedCars";
import PopularCars from "../components/PopularCars/PopularCars";

function Home() {
    return (
        <>
            <Hero />
            <FeaturedCars />
            <PopularCars />
        </>
    );
}

export default Home;