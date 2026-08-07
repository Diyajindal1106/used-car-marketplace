import Hero from "../components/Hero/Hero";
import FeaturedCars from "../components/FeaturedCars/FeaturedCars";
import PopularCars from "../components/PopularCars/PopularCars";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Testimonials from "../components/Testimonials/Testimonials";
import CTA from "../components/CTA/CTA";
import Footer from "../components/Footer/Footer";

function Home() {
    return (
        <>
            <Hero />
            <FeaturedCars />
            <PopularCars />
            <WhyChooseUs />
            <Testimonials />
            <CTA />
            <Footer />      
        </>
    );
}

export default Home;