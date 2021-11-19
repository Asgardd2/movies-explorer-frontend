import { Link } from "react-router-dom";
import aboutLogo from "../../images/about-logo.svg";

import "./Promo.css";

function promo(props) {
  return (
    <section className="promo">
        <img  alt="Круг из надписей"  className="promo__logo"
        src={aboutLogo}  
        />
        <h1 className="promo__title">
        Учебный проект студента факультета Веб-разработки.
        </h1>
        <h2 className="promo__subtitle">
        Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </h2>
        <div className="promo__button">
            <Link to="/" className="promo__link">Узнать больше</Link>
        </div>
    </section>
  );
}

export default promo;

