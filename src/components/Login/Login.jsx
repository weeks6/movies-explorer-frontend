import { NavLink } from 'react-router-dom'
import Logo from '../Logo/Logo'

function Login() {
  return (
    <main className="main">
      <div className="wrap-container">
        <div className="wrap-container__header">
          <NavLink to='/' className="logo__link wrap-container__logo">
            <Logo />
          </NavLink>
          <h1 className="wrap-container__heading">Рады видеть!</h1>
        </div>
        <div className="wrap-container__body">
          <form noValidate className="form form_type_login">
            <label className="input-field">
              <span className="input-field__label">E-mail</span>
              <input type="email" className="input-field__input" required />
              <span className="input-field__message"></span>
            </label>
            <label className="input-field">
              <span className="input-field__label">Пароль</span>
              <input type="password" className="input-field__input" required />
              <span className="input-field__message"></span>
            </label>
            <button className="form__submit" type="submit">Войти</button>
          </form>
        </div>
        <div className="wrap-container__footer">
          <span className="wrap-container__notice">Ещё не зарегистрированы?</span>
          <NavLink to="/signup" className="wrap-container__link">Регистрация</NavLink>
        </div>
      </div>
    </main>
  )
}

export default Login
