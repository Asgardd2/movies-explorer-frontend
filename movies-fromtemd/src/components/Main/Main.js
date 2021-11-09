import AboutProject from "../AboutProject/AboutProject";
import Promo from "../Promo/Promo";
import Techs from "../Techs/Techs";
import Portfolio from "../Portfolio/Portfolio";

import './Main.css';

function Main() {
  return (
    <main className="main">
        <Promo/>
        <AboutProject/>
        <Techs/>
        <Portfolio/>

    </main>
  );
}

export default Main;
