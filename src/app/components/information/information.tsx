import { SectionTitle } from '../sectionTitle/section-title'
import './information.scss'

export function Info() {
  return (
    <div className="infos">
      <SectionTitle text='Languages' />
      <div className="languages-info">
        <span>🇺🇸 EN - Intermediate</span>
        <span>🇧🇷 PT-BR - Native Speaker</span>
      </div>
      <SectionTitle text='Education' />
      <div className="educational-info">
        <span>🎓</span>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <span>Bachelor's degree in Sistemas da Informação from Universidade Federal de Goiás</span>
      </div>
    </div>
  )
}
