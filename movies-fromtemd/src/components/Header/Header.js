import headerLogo from "../../images/header-logo.svg";
import accountLogo from "../../images/account-icon.png";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import "./Header.css";
//{`header ${location.pathname === '/movies' ? "header_type_movies" : ""}`}
function Header(props) {

  const location = useLocation();
  return (
    <header className={`header ${location.pathname === '/movies' || location.pathname === '/saved-movies' || location.pathname === '/profile'  ? "header_type_movies" : "header_type_main"}`}>
      <div className="header__block">      <img
        src={headerLogo}
        alt="Логотип сервиса по фильмам"
        className="header__logo"
      />
       {location.pathname === '/movies' || location.pathname === '/saved-movies' || location.pathname === '/profile' ? (
              <div className="header__film-types">
                <Link className="header__film-type">
                  Фильмы
                </Link>
                <Link className="header__film-type">
                  Сохраненные фильмы
                </Link>
              </div>
            ) : null}</div>

      {location.pathname === '/movies' || location.pathname === '/saved-movies' || location.pathname === '/profile'  ? (
              <div className="header__account">
                <img src={accountLogo}
                alt="Логотип аккаунта"
                className="header__account-logo"
                />
                <Link className="header__account-link">
                  Аккаунт
                </Link>
              </div>
            ) : <div className="auth__panel">
            <Link className="auth__link">Регистрация</Link>
            <Link className="auth__button">Войти</Link>
          </div>}

    </header>
  );
}

export default Header;
