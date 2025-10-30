import { motion } from 'framer-motion';

const photos = [
  {
    src: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1200&auto=format&fit=crop',
    caption: 'The best smile ever',
  },
  {
    src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop',
    caption: 'Classic Neha laugh',
  },
  {
    src: 'https://images.unsplash.com/photo-1600289031525-38b07be6d732?q=80&w=1200&auto=format&fit=crop',
    caption: 'Sunshine energy',
  },
  {
    src: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1200&auto=format&fit=crop',
    caption: 'Joy in the little things',
  },
  {
    src: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1200&auto=format&fit=crop',
    caption: 'Always glowing',
  },
];

export default function Memories() {
  return (
    <section id="memories" className="relative py-20 bg-gradient-to-b from-white via-sky-50 to-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-sky-900">A Few Amazing Moments of You ❤️</h2>
          <p className="mt-2 text-sky-700/80">Little snapshots that capture your kindness and humor.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((p, idx) => (
            <motion.figure
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-sky-100"
            >
              {/* Using standard img for external demo sources; lazy loading enabled */}
              <img
                src={p.src}
                loading="lazy"
                alt={p.caption}
                className="h-60 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
              />
              <figcaption className="p-4 text-center text-sky-800/90">
                <span className="relative inline-flex items-center">
                  {p.caption}
                  <motion.span
                    aria-hidden
                    className="ml-2 inline-block h-1 w-1 rounded-full bg-yellow-400"
                    animate={{ scale: [1, 1.6, 1] }}
                    transition={{ duration: 1.6, repeat: Infinity }}
                  />
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
