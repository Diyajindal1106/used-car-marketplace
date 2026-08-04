import "./Cars.css";

function Cars() {
    return (
        <section className="cars-page">

            <div className="cars-container">

                <div className="cars-grid">

                    <div className="listing-card">

                        <img
                            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800"
                            alt="Car"
                        />

                        <div className="listing-content">

                            <div className="listing-top">

                                <div>

                                    <h2>Hyundai i20 Sportz</h2>

                                    <p className="price">₹7.80 Lakh</p>

                                </div>

                                <button className="wishlist-btn">
                                    🤍
                                </button>

                            </div>

                            <div className="specs">

                                <span>⛽ Petrol</span>
                                <span>⚙ Automatic</span>
                                <span>📅 2023</span>
                                <span>🛣 18,000 km</span>

                            </div>

                            <p className="location">
                                📍 Delhi
                            </p>

                            <button className="details-btn">
                                View Details →
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Cars;