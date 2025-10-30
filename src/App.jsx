import Hero from './components/Hero';
import Memories from './components/Memories';
import FunZone from './components/FunZone';
import GiftAndClosing from './components/GiftAndClosing';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero />
      <Memories />
      <FunZone />
      <GiftAndClosing />
    </div>
  );
}
