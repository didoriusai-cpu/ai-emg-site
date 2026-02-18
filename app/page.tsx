import Nav from "../components/Nav";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-grid">
      <Nav />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="glass p-10">
          <p className="badge">AI Entertainment Media Group</p>
          <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
            AI EMG — brand hub for music, artists, and tools.
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            Home for AI Radio, Sound Lab, Lyrical Lab, and more.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="btn" href="/ai-radio">AI Radio</Link>
            <Link className="btn" href="/sound-lab">Sound Lab</Link>
            <Link className="btn btn-ghost" href="/more">More Hub</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
