import headerLogo from "../../images/header-logo.svg";

import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import Navigation from "../Navigation/Navigation";
import NavTab from "../NavTab/NavTab";
import "./Header.css";
//{`header ${location.pathname === '/movies' ? "header_type_movies" : ""}`}
function Header(props) {

  const location = useLocation();
  return (
    <header className={`header ${location.pathname === '/movies' || location.pathname === '/saved-movies' || location.pathname === '/profile'  ? "header_type_movies" : "header_type_main"}`}>
      <div className="header__block"> 
          <Link to='/' className="header__logo-link"> <img
        src={headerLogo}
        alt="Логотип сервиса по фильмам"
        className="header__logo"
      /> </Link>
      <Navigation
        mainMenu = "true"/>
       </div>
      <NavTab
      onOpenBurgerMenu={props.onOpenBurgerMenu}
      />


    </header>
  );
}

export default Header;
