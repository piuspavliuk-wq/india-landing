import { useState } from 'react'
import { useLang } from '../LangContext.jsx'
import { WhatsApp } from './icons.jsx'
import { WHATSAPP } from '../contacts.js'
import logo from '../assets/logo.png'
import languageIcon from '../assets/Language.svg'
import './Header.css'

export default function Header() {
  const { t, lang, toggle } = useLang()
  const [open, setOpen] = useState(false)

  return (
    <header className={`header ${open ? 'is-open' : ''}`}>
      <div className="header__inner">
        <a href="#hero" className="header__logo" onClick={() => setOpen(false)}>
          <img src={logo} alt="Turiya" />
        </a>

        <nav className="header__menu">
          {t.nav.map((link) => (
            <a key={link.href} href={link.href} className="header__link">
              {link.label}
            </a>
          ))}
          <button className="header__lang" onClick={toggle}>
            <img src={languageIcon} alt="" width={16} height={16} />
            <span>{t.other}</span>
          </button>
        </nav>

        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="header__contact">
          <span>{t.contact}</span>
          <span className="header__contact-icon">
            <WhatsApp size={16} />
          </span>
        </a>

        <button
          className={`header__burger ${open ? 'is-open' : ''}`}
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`header__drawer ${open ? 'is-open' : ''}`}>
        <nav className="header__drawer-nav">
          {t.nav.map((link) => (
            <a key={link.href} href={link.href} className="header__drawer-link" onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <button className="header__drawer-lang" onClick={toggle}>
          <span className={lang === 'ru' ? 'is-active' : ''}>RU</span>
          <span className="header__drawer-lang-sep" />
          <span className={lang === 'ua' ? 'is-active' : ''}>UKR</span>
        </button>

        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="header__drawer-contact">
          <span className="header__contact-icon">
            <WhatsApp size={16} />
          </span>
          <span className="header__drawer-contact-text">{t.contact}</span>
        </a>
      </div>
    </header>
  )
}
