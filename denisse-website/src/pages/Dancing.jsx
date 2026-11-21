import ReelGrid from '../components/ReelGrid.jsx';
import { dancingReels } from '../data/reels.js';

export default function Dancing() {
  return (
    <>
      <div className="page-intro">
        <h1>Dancing</h1>
        <p>Contemporary, reggaeton, and ballet clips.</p>
      </div>
      <section>
        <ReelGrid reels={dancingReels} />
      </section>
    </>
  );
}
