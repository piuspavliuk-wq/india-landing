import { LangProvider } from './LangContext.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import StagesNav from './components/StagesNav.jsx'
import Ladder from './components/Ladder.jsx'
import Participation from './components/Participation.jsx'
import Meaning from './components/Meaning.jsx'
import Guide from './components/Guide.jsx'
import Doubts from './components/Doubts.jsx'
import Consultation from './components/Consultation.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <LangProvider>
      <Header />
      <main>
        <Hero />
        <StagesNav />
        <Ladder />
        <Participation />
        <Meaning />
        <Guide />
        <Doubts />
        <Consultation />
      </main>
      <Footer />
    </LangProvider>
  )
}
