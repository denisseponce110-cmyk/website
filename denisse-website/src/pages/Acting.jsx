import ReelGrid from '../components/ReelGrid.jsx';
import { actingReels } from '../data/reels.js';

export default function Acting() {
  return (
    <>
      <div className="page-intro">
        <h1>Acting</h1>
        <p>A selection of film, TV, and theatre work.</p>
      </div>
      <section>
        <ReelGrid reels={actingReels} />
      </section>
    </>
  );
}
