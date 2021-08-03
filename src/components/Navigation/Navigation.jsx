import "./Navigation.css"

import { useState, useEffect } from "react"
import { NavLink, useLocation } from 'react-router-dom'

function Navigation() {
  const [menuState, setMenuState] = useState(false)
  const [showAuth, setShowAuth] = useState(false)

  const location = useLocation()

  useEffect(() => {
    handleMenuClose()

    if (location.pathname === '/') {
      setShowAuth(true)
    } else {
      setShowAuth(false)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location])

  // debug


  /**
   * Закрытие меню по Esc
   * @param {Event} evt 
   */
  function handleEscClose(evt) {
    if (evt.key === "Escape") {
      handleMenuClose()
    }
  }

  function handleMenuOpen() {
    document.addEventListener('keydown', handleEscClose)
    setMenuState(true)
  }

  function handleMenuClose() {
    document.removeEventListener('keydown', handleEscClose)
    setMenuState(false)
  }

  return (
    <nav className="nav">
      {!showAuth ?
        <>
          <button className="nav__menu" aria-label="Открыть меню навигации" onClick={handleMenuOpen}>
            <span className="nav__menu-icon nav__menu-icon_burger"></span>
          </button>
          <div className={menuState ? "nav__wrapper nav__wrapper_active" : "nav__wrapper"}>
            <div className="nav__container">
              <div className="nav__header">
                <button className="nav__menu nav__menu_close" aria-label="Заркыть меню навигации" onClick={handleMenuClose}>
                  <span className="nav__menu-icon nav__menu-icon_cross"></span>
                </button>
              </div>

              <div className="nav__list">
                <NavLink exact to='/' className="nav__list-item nav__list-item_main" activeClassName="nav__list-item_active">
                  <span className="nav__list-item-text">
                    Главная
                  </span>
                </NavLink>
                <NavLink to='/movies' className="nav__list-item" activeClassName="nav__list-item_active">
                  <span className="nav__list-item-text">
                    Фильмы
                  </span>
                </NavLink>
                <NavLink to='/saved-movies' className="nav__list-item" activeClassName="nav__list-item_active">
                  <span className="nav__list-item-text">
                    Сохранённые фильмы
                  </span>
                </NavLink>
                <NavLink to='/profile' className="profile__link" activeClassName="profile__link_active">
                  <span className="profile__link-icon">
                  </span>
                  <span className="profile__link-text">
                    Профиль
                  </span>
                </NavLink>
              </div>
            </div>
            <div className="nav__overlay" onClick={handleMenuClose}></div>
          </div>
        </>
        :
        <div className="nav__auth-wrapper">
          <NavLink to="/signup" className="nav__btn">Регистрация</NavLink>
          <NavLink to="/signin" className="nav__btn nav__btn_accent">Войти</NavLink>
        </div>
      }
    </nav >
  )
}

export default Navigation
