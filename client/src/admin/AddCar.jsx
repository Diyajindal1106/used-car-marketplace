import "./AddCar.css";
import { useState } from "react";
import axios from "axios";

function AddCar() {

    const [car, setCar] = useState({
        company: "",
        model: "",
        category: "",
        fuel: "",
        transmission: "",
        year: "",
        km: "",
        amount: "",
        price: "",
        location: "",
        image: "",
        description: ""
    });

    const [imageFile, setImageFile] = useState(null);

    const [preview, setPreview] = useState("");

    const [uploading, setUploading] = useState(false);

    const handleChange = (e) => {

        setCar({

            ...car,

            [e.target.name]: e.target.value

        });

    };

    const handleImage = (e) => {

        const file = e.target.files[0];

        if (!file) return;

        setImageFile(file);

        setPreview(URL.createObjectURL(file));

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            if (!imageFile) {

                alert("Please select an image.");

                return;

            }

            setUploading(true);

            const formData = new FormData();

            formData.append("image", imageFile);

            const uploadRes = await axios.post(

                "http://localhost:5000/api/upload",

                formData

            );

            const imageUrl = uploadRes.data.image;

            await axios.post(

                "http://localhost:5000/api/cars",

                {

                    ...car,

                    image: imageUrl

                }

            );

            setUploading(false);

            alert("Car Added Successfully!");

            setCar({

                company: "",
                model: "",
                category: "",
                fuel: "",
                transmission: "",
                year: "",
                km: "",
                amount: "",
                price: "",
                location: "",
                image: "",
                description: ""

            });

            setImageFile(null);

            setPreview("");

        }

        catch (error) {

            console.log(error);

            setUploading(false);

            alert("Failed to Add Car");

        }

    };

   return (

    <section className="add-car">

        <h1>Add New Car</h1>

        <form
            className="add-form"
            onSubmit={handleSubmit}
        >

            <input
                type="text"
                name="company"
                placeholder="Company"
                value={car.company}
                onChange={handleChange}
            />

            <input
                type="text"
                name="model"
                placeholder="Model"
                value={car.model}
                onChange={handleChange}
            />

            <select
    name="category"
    value={car.category}
    onChange={handleChange}
>
    <option value="">Select Category</option>
    <option value="Hatchback">Hatchback</option>
    <option value="Sedan">Sedan</option>
    <option value="SUV">SUV</option>
    <option value="MPV">MPV</option>
    <option value="Coupe">Coupe</option>
    <option value="Crossover">Crossover</option>
</select>

            <select
    name="fuel"
    value={car.fuel}
    onChange={handleChange}
>
    <option value="">Select Fuel</option>
    <option value="Petrol">Petrol</option>
    <option value="Diesel">Diesel</option>
    <option value="CNG">CNG</option>
    <option value="Electric">Electric</option>
</select>
            
            <select
    name="transmission"
    value={car.transmission}
    onChange={handleChange}
>
    <option value="">Select Transmission</option>
    <option value="Manual">Manual</option>
    <option value="Automatic">Automatic</option>
</select>

            <input
                type="number"
                name="year"
                placeholder="Year"
                min="2000"
                max={new Date().getFullYear()}
                step="1"
                value={car.year}
                onChange={handleChange}
            />

            <input
                type="number"
                name="km"
                placeholder="KM Driven"
                value={car.km}
                onChange={handleChange}
            />

            <input
                type="number"
                name="amount"
                placeholder="Amount (Example: 780000)"
                value={car.amount}
                onChange={handleChange}
            />

            <input
                type="text"
                name="price"
                placeholder="Display Price (₹7.80 Lakh)"
                value={car.price}
                onChange={handleChange}
            />

            <input
                type="text"
                name="location"
                placeholder="Location"
                value={car.location}
                onChange={handleChange}
            />

            <label className="image-label">

                Choose Car Image

            </label>

            <input
                type="file"
                accept="image/*"
                onChange={handleImage}
            />

            {

                preview && (

                    <img
                        src={preview}
                        alt="Preview"
                        className="image-preview"
                    />

                )

            }

            <textarea
                rows="5"
                name="description"
                placeholder="Description"
                value={car.description}
                onChange={handleChange}
            />

            <button
                type="submit"
            >

                {

                    uploading

                        ? "Uploading..."

                        : "Add Car"

                }

            </button>

        </form>

    </section>

);

}

export default AddCar;