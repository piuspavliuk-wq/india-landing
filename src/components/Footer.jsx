import { useLang } from '../LangContext.jsx'
import { ArrowRight, Instagram } from './icons.jsx'
import { TELEGRAM, INSTAGRAM, FACEBOOK } from '../contacts.js'
import logo from '../assets/logo.png'
import telegramIcon from '../assets/telegram.svg'
import facebookIcon from '../assets/facebook.svg'
import './Footer.css'

const HREFS = ['#hero', '#ladder', '#participation', '#meaning', '#guide', '#doubts']

export default function Footer() {
  const { t } = useLang()
  const f = t.footer
  const col1 = f.nav.slice(0, 3)
  const col2 = f.nav.slice(3, 6)

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__logo">
          <img src={logo} alt="Turiya" />
          <span className="footer__copy">{f.copy}</span>
        </div>

        <div className="footer__cta-block">
          <h2 className="footer__heading">{f.heading}</h2>
          <p className="footer__text">{f.text}</p>
          <a href="#consultation" className="footer__btn">
            {f.cta}
            <span className="footer__btn-icon">
              <ArrowRight size={20} color="#ffffff" />
            </span>
          </a>
        </div>

        <div className="footer__right">
          <nav className="footer__nav">
            <ul>
              {col1.map((label, i) => (
                <li key={label}>
                  <a href={HREFS[i]}>{label}</a>
                </li>
              ))}
            </ul>
            <ul>
              {col2.map((label, i) => (
                <li key={label}>
                  <a href={HREFS[i + 3]}>{label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__social">
            <a href={TELEGRAM} target="_blank" rel="noopener noreferrer" className="footer__social-circle" aria-label="Telegram">
              <img src={telegramIcon} alt="" width={28} height={28} />
            </a>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="footer__social-circle" aria-label="Instagram">
              <Instagram size={28} color="#ff6e00" />
            </a>
            <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" className="footer__social-circle" aria-label="Facebook">
              <img src={facebookIcon} alt="" width={28} height={28} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
