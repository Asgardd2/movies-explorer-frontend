import accountLogo from "../../images/account-icon.svg";

import { Link } from "react-router-dom";

import "./AccountNav.css";
//{`popupMenu ${props.isOpen && "popupMenu_opened"}`}
//{`header ${location.pathname === '/movies' ? "header_type_movies" : ""}`}
function AccountNav(props) {

  return (
    <div className={`${props.type === "burger" ? "accountNav__account_type_burger" : "accountNav__account"}`}>
    <img src={accountLogo}
    alt="Логотип аккаунта"
    className="accountNav__logo"
    />
    <Link to='/profile' className="accountNav__link" onClick={props.onClosePopup}>
      Аккаунт
    </Link>
  </div>
  );
}

export default AccountNav;



