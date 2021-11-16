import './Register.css';
import { Link } from "react-router-dom";
import headerLogo from "../../images/header-logo.svg";

function Register() {
  return (
    <section className="register">
       <img
        src={headerLogo}
        alt="Логотип сервиса по фильмам"
        className="register__logo"
      />
       <form name="register" className="register__form" >
       <h2 className="register__title">Добро пожаловать!</h2>
       <p className="register__subtitle">Имя</p>
        <input
          id="nickname"
          name="nickname"
          placeholder="nickname"
          required
          className="register__input"
        />
        <p className="register__subtitle">E-mail</p>
        <input
          id="email"
          name="email"
          placeholder="Email"
          required
          className="register__input"
        />
        <p className="register__subtitle">Пароль</p>
        <input
          id="password"
          placeholder="Пароль"
          type="password"
          name="password"
          required
          className="register__input"
        />
        <span className="register__error">
          Что-то пошло не так...
        </span>
        <button type="submit" className="register__login-button">
          Зарегистрироваться
        </button>

        <div className="register__signin">
          <p className="register__signin-question">Уже зарегистрированы?</p>
          <Link to="/signin" className="register__link">
            Войти
          </Link>
        </div>
      </form>
    </section>
  )
}

export default Register;
