
import { Header } from './components/header/header';
import { Experience } from './components/experience/experience';
import { Info } from './components/information/information';

import './styles/home.scss';
import { EmailIcon } from './components/icons/email-icon';
import { SocialBtns } from './components/social-btns/social-btns';

export default function Home() {
  return (
    <main className="container">
      <Header />
      <Experience />
      <Info />
      <div className="buttons">
        <SocialBtns />
        <a className="btn-primary" href="mailto:erik.pereiradn@gmail.com">
          contact me
          <EmailIcon />
        </a>
      </div>
    </main >
  );
}
