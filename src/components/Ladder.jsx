import { useLang } from '../LangContext.jsx'
import { ArrowRight, Calendar, PriceTag } from './icons.jsx'
import loop from '../assets/ladder-loop.svg'
import emTemple from '../assets/emblem-temple.png'
import emLotus from '../assets/emblem-lotus.png'
import emArchway from '../assets/emblem-archway.png'
import emMountain from '../assets/emblem-mountain.png'
import emPalm from '../assets/emblem-palm.png'
import card1 from '../assets/card-1.png'
import card2 from '../assets/card-2.png'
import card3 from '../assets/card-3.png'
import card4 from '../assets/card-4.png'
import card5 from '../assets/card-5.png'
import './Ladder.css'

const PHOTOS = [card1, card2, card3, card4, card5]
// емблема на лінії для кожної картки (перша — петля, тож емблеми з 2-ї)
const EMBLEMS = [null, emLotus, emArchway, emMountain, emPalm]

export default function Ladder() {
  const { t } = useLang()

  return (
    <section className="ladder" id="ladder">
      <div className="ladder__inner">
        <h2 className="section-title ladder__title">{t.ladderTitle}</h2>

        <div className="ladder__rows">
          <span className="ladder__top-dot" aria-hidden="true" />
          <img src={loop} alt="" className="ladder__loop" aria-hidden="true" />
          <span className="ladder__line" aria-hidden="true" />

          {t.cards.map((card, i) => (
            <div className="ladder__row" key={card.title}>
              {EMBLEMS[i] && (
                <span className="ladder__node" aria-hidden="true">
                  <img src={EMBLEMS[i]} alt="" />
                </span>
              )}

              <article className="ladder__card">
                <div className="ladder__photo">
                  <img src={PHOTOS[i]} alt="" />
                </div>
                <div className="ladder__overlay" />

                <div className="ladder__content">
                  <div className="ladder__tags">
                    <span className="ladder__badge">{card.stage}</span>
                    <span className="ladder__tag">{card.tag}</span>
                  </div>

                  <h3 className="ladder__name">{card.title}</h3>

                  <div className="ladder__pill">
                    <span className="ladder__date">
                      <Calendar size={22} color="#ff6e00" />
                      {card.date}
                    </span>
                    <span className="ladder__price">
                      <PriceTag size={22} color="#ff6e00" />
                      {card.price}
                    </span>
                  </div>

                  <ul className="ladder__points">
                    {card.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>

                  <a href="#consultation" className="btn-pill ladder__cta">
                    {t.cardCta}
                    <span className="btn-pill__arrow">
                      <ArrowRight size={20} color="#ff6e00" />
                    </span>
                  </a>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
