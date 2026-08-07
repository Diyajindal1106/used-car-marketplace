import "./EditCar.css";

function EditCar() {

    return (

        <section className="edit-car">

            <h1>Edit Car</h1>

            <form className="edit-form">

                <input defaultValue="Hyundai" />

                <input defaultValue="i20 Sportz" />

                <input defaultValue="₹7.80 Lakh" />

                <input defaultValue="Petrol" />

                <input defaultValue="Automatic" />

                <input defaultValue="2023" />

                <input defaultValue="18,000 km" />

                <input defaultValue="Delhi" />

                <input defaultValue="Image URL" />

                <textarea
                    rows="5"
                    defaultValue="This vehicle is well maintained and thoroughly inspected."
                ></textarea>

                <button
                    type="button"
                    onClick={() => alert("Car Updated Successfully")}
                >
                    Update Car
                </button>

            </form>

        </section>

    );

}

export default EditCar;