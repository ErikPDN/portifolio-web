import { Header } from './components/header/header';
import { Experience } from './components/experience/experience';

import './styles/home.scss';

export default function Home() {
  return (
    <main className="container">
      <Header />
      <Experience />
      <div className="infos">
        <h3>Languages</h3>
        <div className="languages-info">
          <span>🇺🇸EN - Intermediate</span>
          <span>🇧🇷 PT-BR - Native Speaker</span>
        </div>
        <h3>Education</h3>
        <div className="education-info">
          <span>🎓</span>
          <span>Bachelor's degree in Sistemas da Informação from UFG</span>
        </div>
        <div className="buttons">
          <div className="social">
          </div>
          <button>contact me</button>
        </div>
      </div>
    </main>
  );
}
