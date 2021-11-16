import './Login.css';
import { Link } from "react-router-dom";
import headerLogo from "../../images/header-logo.svg";

function Login() {
  return (
    <section className="login">
 

<Link to='/' className="login__logo-link">       <img
        src={headerLogo}
        alt="Логотип сервиса по фильмам"
        className="login__logo"
      /> </Link>
       <form name="login" className="login__form" >
       <h2 className="login__title">Рады видеть!</h2>
       <p className="login__subtitle">E-mail</p>
        <input
          id="nickname"
          name="nickname"
          placeholder="email"
          required
          className="login__input"
        />
        <p className="login__subtitle">Пароль</p>
        <input
          id="password"
          placeholder="Пароль"
          type="password"
          name="password"
          required
          className="login__input"
        />
        <button type="submit" className="login__login-button">
          Войти
        </button>

        <div className="login__signup">
          <p className="login__signup-question">Уже зарегистрированы?</p>
          <Link to="/signup" className="login__link">
            Регистрация
          </Link>
        </div>
      </form>
    </section>
  )
}

export default Login;
