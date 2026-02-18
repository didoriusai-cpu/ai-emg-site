import Nav from "@/components/Nav";
import Link from "next/link";

const tiles = [
  { href: "/lyrical-lab", title: "Lyrical Lab", desc: "Hooks, story frameworks, rewrites, cadence control." },
  { href: "/sound-creation", title: "Sound Creation", desc: "Beat direction, vibe presets, structure templates." },
  { href: "/sound-lab", title: "Sound Lab", desc: "Vocals, harmony stacks, ad-libs, full song packs." },
  { href: "/ai-lab", title: "AI Lab", desc: "Your R&D tools and workflows for AI media." },
  { href: "/community", title: "Community", desc: "Drops, showcases, feedback loops, curation." },
  { href: "/upload", title: "Upload", desc: "Submit tracks, stems, visuals, or projects." },
];

export default function MoreHubPage() {
  return (
    <main className="min-h-screen bg-grid">
      <Nav />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="glass p-10">
          <p className="badge">More</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight">Tools & Pages</h1>
          <p className="mt-4 text-white/80 max-w-2xl">
            Everything beyond the main navigation, organized as a hub.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            {tiles.map((t) => (
              <Link key={t.href} href={t.href} className="tile">
                <div className="tile-title">{t.title}</div>
                <div className="tile-desc">{t.desc}</div>
                <div className="tile-cta">Open →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
