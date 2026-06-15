import { useLang } from '../LangContext.jsx'
import star from '../assets/star.png'
import leaves2 from '../assets/leaves-2.png'
import texture from '../assets/texture.png'
import curve from '../assets/curve-participation.svg'
import illustration1 from '../assets/card-illustration-1.svg'
import illustration2 from '../assets/card-illustration-2.svg'
import illustration3 from '../assets/card-illustration-3.svg'
import './Participation.css'

const ILLUSTRATIONS = [illustration1, illustration2, illustration3]

export default function Participation() {
  const { t } = useLang()
  const p = t.participation

  return (
    <section className="participation" id="participation">
      <img src={star} alt="" className="participation__star" />
      <img src={leaves2} alt="" className="participation__leaves2" />
      <img src={curve} alt="" className="participation__curve" />

      <div className="container participation__inner">
        <div className="participation__head">
          <h2 className="section-title participation__title">{p.title}</h2>
          <p className="participation__subtitle">{p.subtitle}</p>
        </div>

        <div className="participation__cards">
          {p.items.map((item, i) => (
            <div className="participation__card" key={item.title}>
              <img src={ILLUSTRATIONS[i]} alt="" className="participation__lotus" />
              <div className="participation__card-inner">
                <div className="participation__card-text">
                  <h3 className="participation__card-title">{item.title}</h3>
                  <p className="participation__card-desc">{item.text}</p>
                </div>
                <a href="#consultation" className="participation__btn">
                  {p.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <img src={texture} alt="" className="participation__divider" />
    </section>
  )
}
