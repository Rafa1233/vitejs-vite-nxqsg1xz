export default function App() {
  return (
    <div className="app-shell relative isolate min-h-screen overflow-hidden">
      <span className="ambient-orb ambient-orb--one" aria-hidden="true" />
      <span className="ambient-orb ambient-orb--two" aria-hidden="true" />
      <span className="ambient-orb ambient-orb--three" aria-hidden="true" />

      <main className="relative z-10 flex min-h-screen items-center justify-center px-5 py-10">
        <section className="foundation-card glass-surface w-full max-w-xl rounded-[2rem] p-7 sm:p-10">
          <div className="brand-mark" aria-hidden="true">
            <span>♫</span>
          </div>

          <p className="foundation-eyebrow">WEB MUSIC PLAYER · PWA</p>
          <h1 className="foundation-title">Bubble Music</h1>
          <p className="foundation-description">
            Fondasi proyek berhasil dimuat. Sistem audio, navigasi Bubble UI,
            pencarian, lirik, library, dan pengaturan akan dibangun pada tahap
            berikutnya.
          </p>

          <div className="foundation-tags" aria-label="Teknologi proyek">
            <span>React 19</span>
            <span>Vite 8</span>
            <span>Tailwind 4</span>
            <span>PWA</span>
          </div>

          <div className="foundation-status">
            <span className="foundation-status-dot" aria-hidden="true" />
            Tahap 1 · Fondasi siap
          </div>
        </section>
      </main>
    </div>
  );
}
