import "./Header.css"

import { NavLink } from "react-router-dom"
import Navigation from '../Navigation/Navigation'
import Logo from '../Logo/Logo'

function Header() {
  return (
    <header className="header">
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
