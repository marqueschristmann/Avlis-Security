import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Hardware from './components/Hardware';
import About from './components/About';
import Presence from './components/Presence';
import Authority from './components/Authority';
import Technology from './components/Technology';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <div className="min-h-screen bg-background-dark text-slate-100 selection:bg-primary selection:text-background-dark">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Hardware />
        <About />
        <Presence />
        <Authority />
        <Technology />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
