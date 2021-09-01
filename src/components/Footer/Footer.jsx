import { useLocation } from 'react-router-dom'
import './Footer.css'

function Footer() {

  const location = useLocation()
  const hideFooter = ['/signin', '/signup', '/profile']

  return (
    !hideFooter.includes(location.pathname) && <footer className="footer">
      <div className="footer__container container">
        <span className="footer__misc footer__misc-divider">Учебный проект Яндекс.Практикум х BeatFilm.</span>
        <ul className="footer__links">
          <li className="footer__links-item">
            <a href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer" className="footer__link nav__link">Яндекс.Практикум</a>
          </li>
          <li className="footer__links-item">
            <a href="https://github.com/weeks6" target="_blank" rel="noreferrer" className="footer__link nav__link">Github</a>
          </li>
          <li className="footer__links-item">
            <a href="https://vk.com/n0_harm" target="_blank" rel="noreferrer" className="footer__link nav__link">VK</a>
          </li>
        </ul>
        <span className="footer__misc footer__copyright">©2021</span>
      </div>
    </footer>
  )
}

export default Footer
