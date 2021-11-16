import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

import burgerlogo from "../../images/burger-menu.svg";
import AccountNav from "../AccountNav/AccountNav";
import "./NavTab.css";
//{`navTab ${location.pathname === '/movies' ? "navTab_type_movies" : ""}`}
function NavTab(props) {

  const location = useLocation();
  return (
 <>
      {location.pathname === '/movies' || location.pathname === '/saved-movies' || location.pathname === '/profile'  ? (
              <>
<AccountNav/>
              <div className="navTab__burgmenu">
              <img
                src={burgerlogo}
                alt="Бургер меню"
                className="navTab__burgmenu-img"
                onClick={props.onOpenBurgerMenu}
              />
              </div>
              </>
            ) : <div className="auth__panel">
            <Link to='/signup' className="auth__link">Регистрация</Link>
            <Link to='/signin' className="auth__button">Войти</Link>
          </div>
          
      
          }
</>
  );
}

export default NavTab;

