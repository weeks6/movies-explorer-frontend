import "./Header.css"

import { NavLink, useLocation } from "react-router-dom"
import Navigation from '../Navigation/Navigation'
import Logo from '../Logo/Logo'

function Header() {

  const location = useLocation()
  const hideHeader = ['/signin', '/signup']

  return (
    !hideHeader.includes(location.pathname) && <header className="header">
      <div className="header__container">
        <NavLink to='/' className="logo__link">
          <Logo />
        </NavLink>
        <Navigation></Navigation>
      </div>
    </header>
  )
}

export default Header
