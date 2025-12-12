import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Worlds',
  description: 'Explore the creative worlds of Inksky — Tavinsky Circus, Music, Motion & Visuals, and more.',
};

const worlds = [
  {
    id: 'tavinsky',
    title: 'Tavinsky Circus',
    subtitle: 'The Juggler',
    description: '20 years of circus, juggling, street shows, and festivals across the world. The foundation of everything that came after.',
    href: '/worlds/tavinsky',
    color: 'bg-amber-50 hover:bg-amber-100',
    icon: '🎪',
    status: 'legacy',
  },
  {
    id: 'music',
    title: 'Music',
    subtitle: 'Sound & Night',
    description: 'Electronic music, lo-fi, club sounds, and late-night experiments. Dream Radio mixes, DJ sets, and original productions.',
    href: '/worlds/music',
    color: 'bg-violet-50 hover:bg-violet-100',
    icon: '🎵',
    status: 'active',
  },
  {
    id: 'motion',
    title: 'Motion & Visuals',
    subtitle: 'Real-time Art',
    description: 'TouchDesigner experiments, audio-reactive systems, generative art, and motion graphics for live performance.',
    href: '/worlds/motion',
    color: 'bg-cyan-50 hover:bg-cyan-100',
    icon: '✨',
    status: 'active',
  },
  {
    id: 'about',
    title: 'About Me',
    subtitle: 'Under This Sky',
    description: 'The person behind Inksky. Argentina → Europe → Berlin. Circus, music, dogs, and the journey that connects it all.',
    href: '/about',
    color: 'bg-rose-50 hover:bg-rose-100',
    icon: '🌙',
    status: 'personal',
  },
];

export default function Worlds() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Worlds</h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
            One sky, many little universes. Each world represents a different aspect of 
            the creative journey — past, present, and evolving.
          </p>
        </div>
      </section>

      {/* Worlds Grid */}
      <section className="py-12 px-4 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {worlds.map((world) => (
              <Link
                key={world.id}
                href={world.href}
                className={`${world.color} p-8 md:p-12 border-2 border-black transition-all hover:-translate-y-1 hover:shadow-xl group`}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-5xl">{world.icon}</span>
                  <span className="text-xs uppercase tracking-wider text-gray-500 font-medium">
                    {world.status}
                  </span>
                </div>
                <h2 className="text-3xl font-bold mb-2 group-hover:underline">
                  {world.title}
                </h2>
                <p className="text-lg font-medium text-gray-600 mb-4">
                  {world.subtitle}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {world.description}
                </p>
                <span className="inline-block mt-6 text-black font-medium">
                  Enter world →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Connection Note */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Everything Connects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            These worlds aren't separate — they influence each other. The discipline from 
            circus informs the music. The visuals react to the sound. The code brings it 
            all to life. That's the Inksky approach.
          </p>
          <Link
            href="/studio"
            className="text-black font-medium hover:underline inline-flex items-center gap-2"
          >
            Learn more about the studio →
          </Link>
        </div>
      </section>
    </main>
  );
}
