import CreditsTable from '../components/CreditsTable.jsx';
import SkillsGrid from '../components/SkillsGrid.jsx';
import { theatre, filmTv, commercials, education, skillCategories } from '../data/resume.js';
import headshot from '../assets/headshot.jpg';

export default function Home() {
  return (
    <>
      <section className="hero">
        <img src={headshot} alt="Headshot of Denisse Ponce" />
        <div>
          <h1>Denisse Ponce</h1>
          <p className="tagline">Actor — Toronto, ON</p>
          <p className="stats">Height: 5' 5" &nbsp;·&nbsp; Eyes: Dark Brown &nbsp;·&nbsp; Hair: Black &nbsp;·&nbsp; Non-Union</p>
          <p className="contact">denisseponce110@gmail.com &nbsp;·&nbsp; 437-604-7712</p>
        </div>
      </section>

      <section>
        <h2 className="section-title">Theatre</h2>
        <CreditsTable rows={theatre} />
      </section>

      <section>
        <h2 className="section-title">Film / TV</h2>
        <CreditsTable rows={filmTv} />
      </section>

      <section>
        <h2 className="section-title">Commercials</h2>
        <CreditsTable rows={commercials} />
      </section>

      <section>
        <h2 className="section-title">Education</h2>
        <CreditsTable rows={education} />
      </section>

      <section>
        <h2 className="section-title">Special Skills &amp; Training</h2>
        <SkillsGrid categories={skillCategories} />
      </section>
    </>
  );
}
