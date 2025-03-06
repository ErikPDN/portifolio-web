import { SectionTitle } from "../sectionTitle/section-title";
import './experience.scss';
import { Skill } from '../skill/skill';

export function Experience() {

  return (
    <div className="experience">
      <SectionTitle text="Experience" />
      <p>I am looking for my first job as a developer.</p>
      <div className="experience-unit">
        <Skill image="/react-logo.png" measure={1} years="2 months" />
        <Skill image="/js-logo.png" measure={2} years="1 year" />
        <Skill image="/ts-logo.png" measure={1} years="2 months" />
        <Skill image="/java-logo.png" measure={3} years="1 year and six months" />
      </div>
    </div>
  );
}
