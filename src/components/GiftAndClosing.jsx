import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function GiftAndClosing() {
  const [opened, setOpened] = useState(false);
  const [reveal, setReveal] = useState(false);
  const confettiRef = useRef(null);

  const openGift = () => {
    if (opened) return;
    setOpened(true);
    setTimeout(() => setReveal(true), 700);
  };

  const replay = () => {
    setReveal(false);
    setOpened(false);
    setTimeout(() => {
      const el = document.getElementById('hero');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 200);
  };

  return (
    <section id="gift" className="relative bg-gradient-to-b from-white via-sky-50 to-white py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-sky-900">Here’s a little surprise 🎁</h2>
        <p className="mt-2 text-sky-700/80">Tap the gift to open it!</p>

        {/* Gift box */}
        <div className="mt-10 flex justify-center">
          <div className="relative">
            <motion.div
              onClick={openGift}
              className="relative h-48 w-56 cursor-pointer select-none"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Base box */}
              <div className="absolute bottom-0 left-0 right-0 h-36 rounded-b-xl bg-gradient-to-br from-rose-400 to-pink-500 shadow-xl" />
              {/* Lid */}
              <motion.div
                animate={opened ? { y: -80, rotate: -10 } : { y: 0, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 120, damping: 12 }}
                className="absolute left-1/2 top-0 h-16 w-60 -translate-x-1/2 rounded-t-xl bg-gradient-to-br from-rose-500 to-pink-600 shadow-xl"
              />
              {/* Ribbon */}
              <div className="absolute inset-x-1/2 bottom-0 top-0 w-6 -translate-x-1/2 bg-white/90" />
              <div className="absolute left-0 right-0 top-12 h-6 bg-white/90" />

              {/* Confetti spark on open */}
              <div ref={confettiRef} className="absolute inset-0">
                <AnimatePresence>
                  {opened && (
                    <>
                      {Array.from({ length: 60 }).map((_, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.6 }}
                          animate={{
                            opacity: [0, 1, 0],
                            x: (Math.random() - 0.5) * 300,
                            y: -120 - Math.random() * 140,
                            rotate: Math.random() * 180,
                            scale: [0.6, 1, 0.6],
                          }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 1.8, delay: (i % 12) * 0.03 }}
                          className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-sm"
                          style={{ backgroundColor: ['#f43f5e','#f59e0b','#10b981','#3b82f6','#8b5cf6'][i % 5] }}
                        />
                      ))}
                    </>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Reveal card */}
        <AnimatePresence>
          {reveal && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              className="mx-auto mt-10 max-w-2xl rounded-2xl bg-white p-6 text-sky-900 shadow-lg"
            >
              <p className="text-xl leading-relaxed">
                <span className="block text-2xl font-bold">Happy 25th Birthday, Neha!</span>
                Keep smiling, keep laughing — you make every day lighter 💕
              </p>
              <button
                onClick={replay}
                className="mt-6 rounded-full bg-sky-600 px-5 py-2 text-white hover:bg-sky-700"
              >
                Click to Replay 🎉
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Closing */}
        <div className="mt-20">
          <p className="text-center text-sky-700">
            Made with ❤️ by [Your Name] for the funniest, kindest sister ever — Nehahahaha.
          </p>
          <button
            onClick={() => {
              const el = document.getElementById('hero');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="mx-auto mt-6 block rounded-full border border-sky-200 bg-white px-5 py-2 text-sky-700 hover:border-sky-400"
          >
            Replay Celebration
          </button>
        </div>
      </div>
    </section>
  );
}
