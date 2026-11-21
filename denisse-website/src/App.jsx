import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Acting from './pages/Acting.jsx';
import Dancing from './pages/Dancing.jsx';

export default function App() {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acting" element={<Acting />} />
          <Route path="/dancing" element={<Dancing />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
