import { useLang } from '../LangContext.jsx'
import meaningBg from '../assets/meaning-bg.png'
import levels from '../assets/meaning-levels.png'
import './Meaning.css'

export default function Meaning() {
  const { t } = useLang()
  const m = t.meaning

  return (
    <section className="meaning" id="meaning">
      <div className="container">
        <div className="meaning__head">
          <h2 className="section-title meaning__title">{m.title}</h2>
          <p className="meaning__note">{m.note}</p>
        </div>

        <div className="meaning__panel" style={{ backgroundImage: `url(${meaningBg})` }}>
          <div className="meaning__info">
            <div className="meaning__text">
              <h3 className="meaning__panel-title">{m.cardTitle}</h3>
              <p className="meaning__panel-sub">{m.cardText}</p>
            </div>
            <img src={levels} alt="" className="meaning__levels" />
          </div>
        </div>
      </div>
    </section>
  )
}
