import { useLang } from '../LangContext.jsx'
import { ArrowRight, Calendar } from './icons.jsx'
import heroBg from '../assets/Group 2085664726.png'
import tower from '../assets/Башня 1.png'
import './Hero.css'

export default function Hero() {
  const { t } = useLang()
  const h = t.hero

  return (
    <section className="hero" id="hero">
      <div className="hero__card">
        <img src={heroBg} alt="" className="hero__bg" />
        <img src={tower} alt="" className="hero__tower" />

        <div className="hero__content">
          <h1 className="hero__title">{h.title}</h1>
          <p className="hero__kicker">
            <span className="hero__kicker-accent">{h.kicker.split(' ')[0]}</span>{' '}
            {h.kicker.split(' ').slice(1).join(' ')}
          </p>
          <div className="hero__sub">
            <span>{h.sub1}</span>
            <span>{h.sub2}</span>
          </div>
        </div>

        <a href="#ladder" className="btn-pill hero__cta">
          {h.cta}
          <span className="btn-pill__arrow">
            <ArrowRight size={20} color="#ff6e00" />
          </span>
        </a>

        <div className="hero__date">
          <Calendar size={24} color="#ff6e00" />
          <span>{h.date}</span>
        </div>
      </div>
    </section>
  )
}
