import AboutProject from "../AboutProject/AboutProject";
import Promo from "../Promo/Promo";
import Techs from "../Techs/Techs";
import Portfolio from "../Portfolio/Portfolio";
import AboutMe from "../AboutMe/AboutMe";

import './Main.css';

function Main() {
  return (
    <main className="main">
        <Promo/>
        <AboutProject/>
        <Techs/>
        <AboutMe/>
        <Portfolio/>


    </main>
  );
}

export default Main;
