const car= require("../models/carModel");
const carsData = [

    {
        id: 1,

        company: "Hyundai",

        model: "i20 Sportz",

        category: "Hatchback",

        fuel: "Petrol",

        transmission: "Automatic",

        year: 2023,

        km: "18,000 km",

        amount: 780000,

        price: "₹7.80 Lakh",

        location: "Delhi",

        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200"
    },

    {
        id: 2,

        company: "Honda",

        model: "City VX",

        category: "Sedan",

        fuel: "Petrol",

        transmission: "Manual",

        year: 2022,

        km: "24,000 km",

        amount: 940000,

        price: "₹9.40 Lakh",

        location: "Gurugram",

        image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200"
    },

    {
        id: 3,

        company: "Tata",

        model: "Nexon XZ+",

        category: "SUV",

        fuel: "Diesel",

        transmission: "Manual",

        year: 2023,

        km: "15,500 km",

        amount: 1020000,

        price: "₹10.20 Lakh",

        location: "Noida",

        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200"
    },

    {
        id: 4,

        company: "Kia",

        model: "Seltos GTX",

        category: "SUV",

        fuel: "Petrol",

        transmission: "Automatic",

        year: 2024,

        km: "8,000 km",

        amount: 1350000,

        price: "₹13.50 Lakh",

        location: "Jaipur",

        image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=1200"
    },

    {
        id: 5,

        company: "Maruti",

        model: "Ertiga",

        category: "MPV",

        fuel: "CNG",

        transmission: "Manual",

        year: 2023,

        km: "20,000 km",

        amount: 930000,

        price: "₹9.30 Lakh",

        location: "Lucknow",

        image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200"
    },

    {
        id: 6,

        company: "Toyota",

        model: "Innova Crysta",

        category: "MPV",

        fuel: "Diesel",

        transmission: "Automatic",

        year: 2022,

        km: "30,000 km",

        amount: 1750000,

        price: "₹17.50 Lakh",

        location: "Chandigarh",

        image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1200"
    },

    {
        id: 7,

        company: "Mahindra",

        model: "XUV700",

        category: "SUV",

        fuel: "Diesel",

        transmission: "Automatic",

        year: 2024,

        km: "7,000 km",

        amount: 2100000,

        price: "₹21.00 Lakh",

        location: "Pune",

        image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1200"
    },

    {
        id: 8,

        company: "BMW",

        model: "320d",

        category: "Sedan",

        fuel: "Diesel",

        transmission: "Automatic",

        year: 2021,

        km: "40,000 km",

        amount: 3200000,

        price: "₹32.00 Lakh",

        location: "Mumbai",

        image: "https://images.unsplash.com/photo-1504215680853-026ed2a45def?w=1200"
    }

];

module.exports = carsData;

export default carsData;