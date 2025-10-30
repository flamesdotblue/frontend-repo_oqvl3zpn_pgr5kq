import { useRef } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const sectionRef = useRef(null);

  const handleCelebrate = () => {
    const el = document.getElementById('memories');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    // Hint the app to start music if available
    window.dispatchEvent(new CustomEvent('start-music'));
  };

  return (
    <section ref={sectionRef} id="hero" className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/pVLJXSVq3zyQq0OD/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Overlay gradient for text readability; pointer events disabled so Spline remains interactive */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sky-50/60 via-sky-50/20 to-white" />

      {/* Floating balloons (emoji) */}
      <div aria-hidden className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: '-20%', opacity: 1 }}
            transition={{ duration: 10 + i * 0.6, repeat: Infinity, delay: i * 0.5, ease: 'easeOut' }}
            className="absolute text-3xl md:text-5xl select-none"
            style={{ left: `${(i * 9) % 100}%` }}
          >
            🎈
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-extrabold tracking-tight text-4xl md:text-6xl text-sky-900 drop-shadow-sm"
          >
            🎉 Happy 25th Birthday, Nehahahaha! 🎂
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-4 text-sky-800/90 text-lg md:text-xl"
          >
            You make everyone’s life brighter with your kindness and humor!
          </motion.p>

          {/* Confetti sparkles */}
          <div className="relative mx-auto mt-8 flex h-8 w-full max-w-sm items-center justify-center">
            {[...Array(18)].map((_, i) => (
              <motion.span
                key={i}
                className="absolute block h-1 w-1 rounded-full"
                style={{ backgroundColor: ['#ef4444','#f59e0b','#10b981','#3b82f6','#8b5cf6'][i % 5] }}
                initial={{ opacity: 0, y: 0, x: 0, scale: 0.6 }}
                animate={{ opacity: [0, 1, 0], x: (Math.random() - 0.5) * 160, y: (Math.random() - 0.5) * 60, scale: [0.6, 1, 0.6] }}
                transition={{ duration: 2.2, delay: i * 0.08, repeat: Infinity }}
              />
            ))}
          </div>

          <motion.button
            onClick={handleCelebrate}
            whileTap={{ scale: 0.98 }}
            whileHover={{ scale: 1.03 }}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-sky-600 px-6 py-3 text-white shadow-lg shadow-sky-600/30 hover:bg-sky-700 focus:outline-none focus:ring-4 focus:ring-sky-300"
          >
            Let’s Celebrate 🎈
          </motion.button>
        </div>
      </div>
    </section>
  );
}
