import { useLang } from '../LangContext.jsx'
import photo from '../assets/doubts-photo.png'
import './Doubts.css'

export default function Doubts() {
  const { t } = useLang()
  const d = t.doubts

  return (
    <section className="doubts" id="doubts">
      <div className="container doubts__inner">
        <h2 className="section-title doubts__title">{d.title}</h2>

        <div className="doubts__rows">
          {d.items.map((item) => (
            <div className="doubts__row" key={item.title}>
              <h3 className="doubts__row-title">{item.title}</h3>
              <p className="doubts__row-text">{item.text}</p>
            </div>
          ))}
          <img src={photo} alt="" className="doubts__photo" />
        </div>
      </div>
    </section>
  )
}
