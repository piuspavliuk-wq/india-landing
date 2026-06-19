import { useLang } from '../LangContext.jsx'
import { ArrowRight, Chat, Instagram } from './icons.jsx'
import { WHATSAPP, TELEGRAM, INSTAGRAM, FACEBOOK } from '../contacts.js'
import consultBgRotunda from '../assets/stage-c.png'
import mandala from '../assets/Мандала.png'
import logo from '../assets/logo.png'
import telegramIcon from '../assets/telegram.svg'
import facebookIcon from '../assets/facebook.svg'
import './Consultation.css'

export default function Consultation() {
  const { t } = useLang()
  const c = t.consult

  // Перенос заголовка перед "на" — лише на мобільному (керується CSS),
  // працює для UA "Записатися на..." і RU "Записаться на...".
  const titleMatch = c.title.match(/^(.*?)\s(на\s.*)$/i)
  const title = titleMatch ? (
    <>
      {titleMatch[1]} <br className="consult__title-br" />
      {titleMatch[2]}
    </>
  ) : (
    c.title
  )

  return (
    <section className="consult" id="consultation">
      <div className="consult__card">
        <img src={consultBgRotunda} alt="" className="consult__bg" />
        <div className="consult__overlay" />
        <img src={mandala} alt="" className="consult__mandala consult__mandala--left" />
        <img src={mandala} alt="" className="consult__mandala consult__mandala--right" />

        <div className="consult__content">
          <img src={logo} alt="Turiya" className="consult__logo" />
          <div className="consult__heading">
            <h2 className="consult__title">{title}</h2>
            <p className="consult__subtitle">{c.subtitle}</p>
          </div>

          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="consult__btn">
            {c.cta}
            <Chat size={27} color="#ffffff" />
          </a>

          <div className="consult__social">
            <span className="consult__social-label">{c.social}</span>
            <div className="consult__social-icons">
              <a href={TELEGRAM} target="_blank" rel="noopener noreferrer" className="consult__social-circle" aria-label="Telegram">
                <img src={telegramIcon} alt="" width={28} height={28} />
              </a>
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="consult__social-circle" aria-label="Instagram">
                <Instagram size={28} color="#ff6e00" />
              </a>
              <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" className="consult__social-circle" aria-label="Facebook">
                <img src={facebookIcon} alt="" width={28} height={28} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
