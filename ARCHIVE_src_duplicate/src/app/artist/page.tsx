import Nav from "@/components/Nav";

export default function Page(artist) {
  return (
    <main className="min-h-screen bg-grid">
      <Nav />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="glass p-10">
          <h1 className="text-4xl font-semibold tracking-tight">TITLE</h1>
          <p className="mt-4 text-white/80">Coming soon.</p>
        </div>
      </section>
    </main>
  );
}
