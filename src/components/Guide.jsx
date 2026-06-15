import { useLang } from '../LangContext.jsx'
import guideBg from '../assets/guide-bg.png'
import person from '../assets/guide-person.png'
import icQuality from '../assets/ic-quality.png'
import icRoute from '../assets/ic-route.png'
import icHandshake from '../assets/ic-handshake.png'
import icSecurity from '../assets/ic-security.png'
import './Guide.css'

const ADV = [
  { icon: icQuality, pos: 'tl', side: 'left' },
  { icon: icRoute, pos: 'bl', side: 'left' },
  { icon: icHandshake, pos: 'tr', side: 'right' },
  { icon: icSecurity, pos: 'br', side: 'right' },
]

export default function Guide() {
  const { t } = useLang()
  const g = t.guide

  return (
    <section className="guide" id="guide">
      <div className="guide__inner" style={{ backgroundImage: `url(${guideBg})` }}>
        <div className="guide__head">
          <h2 className="section-title guide__title">{g.title}</h2>
          <p className="guide__note">{g.note}</p>
        </div>

        <div className="guide__stage">
          <img src={person} alt="Ірина" className="guide__photo" />

          {ADV.map((a, i) => (
            <div className={`guide__glass guide__glass--${a.pos}`} key={`glass-${i}`} aria-hidden="true" />
          ))}

          {ADV.map((a, i) => (
            <div className={`guide__adv guide__adv--${a.pos} guide__adv--${a.side}`} key={i}>
              <img src={a.icon} alt="" className="guide__adv-icon" />
              <span className="guide__adv-text">{g.advantages[i]}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
