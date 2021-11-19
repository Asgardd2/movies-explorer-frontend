import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import "./Navigation.css";
//{`header ${location.pathname === '/movies' ? "header_type_movies" : ""}`}
function Navigation(props) {

  const location = useLocation();
  return (
 <>
{location.pathname === '/movies' || location.pathname === '/saved-movies' || location.pathname === '/profile' ? (
    <div className={`${props.mainMenu ? "navigation__links" : "navigation__links_type_burger" }`}>
     {props.mainMenu ? null :
      <Link to='/' className="navigation__link navigation__link_type_burger" onClick={props.onClose}>
        Главная
      </Link>
     }
      <Link to='/movies' className={`navigation__link ${props.mainMenu ? "" : "navigation__link_type_burger"}`} onClick={props.onClose}>
        Фильмы
      </Link>
      <Link to='/saved-movies' className={`navigation__link ${props.mainMenu ? "" : "navigation__link_type_burger"}`} onClick={props.onClose}>
        Сохраненные фильмы
      </Link>
    </div>
  ) : null }
</>
  );
}

export default Navigation;

