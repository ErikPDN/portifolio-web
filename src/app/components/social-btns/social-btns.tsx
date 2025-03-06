import { GithubIcon } from "../icons/github-icon";
import { InstagramIcon } from "../icons/instagram-icon";
import { LinkedInIcon } from "../icons/linkedin-icon";

import './social-btns.scss';

export function SocialBtns() {
  return (
    <div className="social">
      <a href="https://www.instagram.com/_erikdn/">
        <InstagramIcon />
      </a>

      <a href="https://www.linkedin.com/in/erik-pereira-071190264/">
        <LinkedInIcon />
      </a>

      <a href="https://github.com/ErikPDN">
        <GithubIcon />
      </a>
    </div>
  )
}
