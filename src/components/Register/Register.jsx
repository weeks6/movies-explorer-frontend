import { NavLink } from 'react-router-dom'
import Logo from '../Logo/Logo'


function Register() {
  return (
    <main className="main">
      <div className="wrap-container">
        <div className="wrap-container__header">
          <NavLink to='/' className="logo__link wrap-container__logo">
            <Logo />
          </NavLink>
          <h1 className="wrap-container__heading">Добро пожаловать!</h1>
        </div>
        <div className="wrap-container__body">
          <form className="form form_type_login">
            <label className="input-field">
              <span className="input-field__label">Имя</span>
              <input type="text" className="input-field__input" required />
              <span className="input-field__message"></span>
            </label>
            <label className="input-field">
              <span className="input-field__label">E-mail</span>
              <input type="email" className="input-field__input" required />
              <span className="input-field__message"></span>
            </label>
            <label className="input-field">
              <span className="input-field__label">Пароль</span>
              <input type="password" className="input-field__input" required minLength={8} />
              <span className="input-field__message">Что-то пошло не так...</span>
            </label>
            <button className="form__submit" type="submit">Зарегистрироваться</button>
          </form>
        </div>
        <div className="wrap-container__footer">
          <span className="wrap-container__notice">Уже зарегистрированы?</span>
          <NavLink to="/signin" className="wrap-container__link">Войти</NavLink>
        </div>
      </div>
    </main>
  )
}

export default Register
