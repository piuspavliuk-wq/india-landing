import { useLang } from '../LangContext.jsx'
import stageA from '../assets/stage-a.png'
import stageB from '../assets/stage-b.png'
import stageC from '../assets/stage-c.png'
import stageD from '../assets/stage-d.png'
import stageE from '../assets/stage-e.png'
import stagesRays from '../assets/stages-rays.png'
import stageBlob1 from '../assets/stage-blob-1.png'
import stageBlob2 from '../assets/stage-blob-2.png'
import './StagesNav.css'

const PHOTOS = [stageA, stageB, stageC, stageD, stageE]
const BLOBS = [stageBlob1, stageBlob2, stageBlob1, stageBlob2, stageBlob1]
// ширина блоба зберігає природні пропорції маски (висота фіксована 126px)
const BLOB_W = [167, 152, 167, 152, 167]

export default function StagesNav() {
  const { t } = useLang()

  return (
    <section className="stages">
      <div className="stages__rays" style={{ backgroundImage: `url(${stagesRays})` }} aria-hidden="true" />
      <div className="stages__row">
        {t.stages.map((stage, i) => (
          <div className="stages__group" key={stage.name}>
            <div className="stages__item">
              <div
                className="stages__circle"
                style={{
                  width: `${BLOB_W[i]}px`,
                  WebkitMaskImage: `url(${BLOBS[i]})`,
                  maskImage: `url(${BLOBS[i]})`,
                }}
              >
                <img src={PHOTOS[i]} alt={stage.name} />
              </div>
              <div className="stages__caption">
                <p className="stages__name">{stage.name}</p>
                <p className="stages__sub">{stage.sub}</p>
              </div>
            </div>

            {i < t.stages.length - 1 && (
              <div className="stages__connector">
                <span className="stages__line" aria-hidden="true" />
                <span className="stages__stay">{t.stagesStay}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
