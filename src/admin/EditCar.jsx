import "./EditCar.css";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditCar() {

    const { id } = useParams();

    const navigate = useNavigate();

  

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

useEffect(() => {

    const fetchCar = async () => {

        try {

            const { data } = await axios.get(
                `http://localhost:5000/api/cars/${id}`
            );

            setCar(data);

            setPreview(data.image);

        }

        catch (error) {

            console.log(error);

        }

    };

    fetchCar();

}, [id]);

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

        let imageUrl = car.image;

        if (imageFile) {

            setUploading(true);

            const formData = new FormData();

            formData.append("image", imageFile);

            const uploadRes = await axios.post(

                "http://localhost:5000/api/upload",

                formData

            );

            imageUrl = uploadRes.data.image;

            setUploading(false);

        }

        await axios.put(

            `http://localhost:5000/api/cars/${id}`,

            {

                ...car,

                image: imageUrl

            }

        );

        alert("Car Updated Successfully!");

        navigate("/admin/view");

    }

    catch (error) {

        console.log(error);

        setUploading(false);

        alert("Failed to Update Car");

    }

};
return (

    <section className="edit-car">

        <h1>Edit Car</h1>

        <form
            className="edit-form"
            onSubmit={handleSubmit}
        >

            <input
                type="text"
                name="company"
                value={car.company}
                onChange={handleChange}
                placeholder="Company"
            />

            <input
                type="text"
                name="model"
                value={car.model}
                onChange={handleChange}
                placeholder="Model"
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
                min="2000"
                max={new Date().getFullYear()}
                value={car.year}
                onChange={handleChange}
                placeholder="Year"
            />

            <input
                type="number"
                name="km"
                value={car.km}km
                onChange={handleChange}
                placeholder="KM Driven"
            />

            <input
                type="number"
                name="amount"
                value={car.amount}
                onChange={handleChange}
                placeholder="Amount"
            />

            <input
                type="text"
                name="price"
                value={car.price}
                onChange={handleChange}
                placeholder="Display Price"
            />

            <input
                type="text"
                name="location"
                value={car.location}
                onChange={handleChange}
                placeholder="Location"
            />

            <label className="image-label">

                Change Car Image

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
                value={car.description}
                onChange={handleChange}
                placeholder="Description"
            />

            <button type="submit">

                {

                    uploading

                        ? "Uploading..."

                        : "Update Car"

                }

            </button>

        </form>

    </section>

);

}

export default EditCar;