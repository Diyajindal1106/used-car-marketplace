import "./CTA.css";
import { Link } from "react-router-dom";

function CTA(){

    return(

        <section className="cta">

            <div className="cta-box">

                <h2>

                    Ready To Find Your Dream Car?

                </h2>

                <p>

                    Explore hundreds of verified used cars with confidence.

                </p>

                <Link

                to="/cars"

                className="cta-btn"

                >

                Explore Cars

                </Link>

            </div>

        </section>

    );

}

export default CTA;