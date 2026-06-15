import { createContext, useContext, useState } from 'react'
import { translations } from './i18n.js'

const LangContext = createContext(null)

export function LangProvider({ children }) {
  const [lang, setLang] = useState('ua')
  const toggle = () => setLang((l) => (l === 'ua' ? 'ru' : 'ua'))
  const t = translations[lang]
  return <LangContext.Provider value={{ lang, setLang, toggle, t }}>{children}</LangContext.Provider>
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within LangProvider')
  return ctx
}
