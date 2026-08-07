import "./AddCar.css";

function AddCar() {

    return (

        <section className="add-car">

            <h1>Add New Car</h1>

            <form className="add-form">

                <input placeholder="Company" />

                <input placeholder="Model" />

                <input placeholder="Price" />

                <input placeholder="Fuel Type" />

                <input placeholder="Transmission" />

                <input placeholder="Year" />

                <input placeholder="KM Driven" />

                <input placeholder="Location" />

                <input placeholder="Image URL" />

                <textarea
                    rows="5"
                    placeholder="Description"
                ></textarea>

                <button>

                    Add Car

                </button>

            </form>

        </section>

    );

}

export default AddCar;