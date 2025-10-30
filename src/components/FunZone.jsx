import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';

const questions = [
  {
    q: 'Which comedian makes Neha laugh the hardest?',
    options: ['Trevor Noah', 'Vir Das', 'Ali Wong'],
  },
  {
    q: "What's Neha’s reaction to a bad joke?",
    options: ['Eye roll + giggle', 'A dramatic sigh', 'Laughs anyway'],
  },
];

export default function FunZone() {
  // Quiz state
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [showResult, setShowResult] = useState(false);

  // Music player state
  const [isPlaying, setIsPlaying] = useState(false);
  const audio = useMemo(() => {
    const el = new Audio(
      'https://cdn.pixabay.com/download/audio/2022/03/15/audio_c9f59e86b6.mp3?filename=happy-birthday-to-you-piano-112706.mp3'
    );
    el.loop = true;
    el.volume = 0.35;
    return el;
  }, []);

  useEffect(() => {
    const start = () => {
      audio.play().then(() => setIsPlaying(true)).catch(() => {});
    };
    window.addEventListener('start-music', start);
    return () => window.removeEventListener('start-music', start);
  }, [audio]);

  useEffect(() => {
    return () => {
      audio.pause();
    };
  }, [audio]);

  const handleSelect = (qi, oi) => {
    const next = [...answers];
    next[qi] = oi;
    setAnswers(next);
  };

  const onSubmit = () => setShowResult(true);

  return (
    <section id="fun" className="py-20 bg-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-sky-900">Quick Laughs — For the Queen of Standups 👑</h2>
          <p className="mt-2 text-sky-700/80">Answer a couple of fun questions or just vibe to the tune.</p>
        </div>

        {/* Quiz */}
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-sky-100 bg-sky-50/40 p-6">
            {questions.map((item, qi) => (
              <div key={qi} className="mb-6">
                <h3 className="font-semibold text-sky-900">{qi + 1}. {item.q}</h3>
                <div className="mt-3 flex flex-wrap gap-3">
                  {item.options.map((opt, oi) => {
                    const active = answers[qi] === oi;
                    return (
                      <button
                        key={oi}
                        onClick={() => handleSelect(qi, oi)}
                        className={`rounded-full border px-4 py-2 text-sm transition ${
                          active
                            ? 'border-sky-600 bg-sky-600 text-white'
                            : 'border-sky-200 bg-white text-sky-800 hover:border-sky-400'
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
            <button
              onClick={onSubmit}
              className="mt-2 rounded-full bg-sky-600 px-5 py-2 text-white hover:bg-sky-700"
            >
              See Result
            </button>

            {showResult && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 rounded-xl bg-white p-4 text-sky-800"
              >
                You know Neha well — but not as well as her mirror! 😄
              </motion.div>
            )}
          </div>

          {/* Music & visualization */}
          <div className="rounded-2xl border border-sky-100 bg-gradient-to-br from-sky-50 to-white p-6">
            <h3 className="font-semibold text-sky-900">Music & Mood 🎵</h3>
            <p className="mt-1 text-sm text-sky-700/80">Upbeat birthday tune. May require a click to start due to browser policies.</p>

            <div className="mt-4 flex items-center gap-3">
              <button
                onClick={() => {
                  if (isPlaying) {
                    audio.pause();
                    setIsPlaying(false);
                  } else {
                    audio
                      .play()
                      .then(() => setIsPlaying(true))
                      .catch(() => {});
                  }
                }}
                className={`rounded-full px-4 py-2 text-white ${isPlaying ? 'bg-rose-500 hover:bg-rose-600' : 'bg-emerald-500 hover:bg-emerald-600'}`}
              >
                {isPlaying ? 'Pause' : 'Play'}
              </button>
              <span className="text-sky-800/80">Happy Birthday – Piano Instrumental</span>
            </div>

            {/* Animated bars */}
            <div className="mt-6 flex h-20 items-end gap-1">
              {Array.from({ length: 24 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 rounded-t bg-sky-400"
                  animate={{ height: isPlaying ? [8, 40, 12, 28, 16, 36][i % 6] : 8 }}
                  transition={{ duration: 0.8 + (i % 5) * 0.05, repeat: Infinity, repeatType: 'mirror' }}
                  style={{ height: 8 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
