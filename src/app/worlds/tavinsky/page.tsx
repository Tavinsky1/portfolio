import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tavinsky Circus',
  description: '20 years of circus, juggling, street shows & festivals. The legacy that started it all.',
};

const highlights = [
  {
    year: '2004',
    title: 'First Street Show',
    description: 'Started performing on the streets of Argentina at age 15.',
  },
  {
    year: '2008',
    title: 'European Tours',
    description: 'Began touring festivals and events across Europe.',
  },
  {
    year: '2012',
    title: 'Festival Circuit',
    description: 'Regular appearances at major street arts and circus festivals.',
  },
  {
    year: '2018',
    title: 'Berlin Base',
    description: 'Established Berlin as home base while continuing to tour.',
  },
  {
    year: '2020+',
    title: 'Transition',
    description: 'Shifted focus to digital creation while keeping the circus spirit alive.',
  },
];

const skills = [
  'Juggling (balls, clubs, rings)',
  'Acrobatics & physical theatre',
  'Street performance',
  'Stage presence & audience connection',
  'Improvisation',
  'Workshop facilitation',
];

export default function TavinskyCircus() {
  return (
    <main className="min-h-screen bg-amber-50">
      {/* Hero */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/worlds"
            className="text-amber-800 hover:underline mb-8 inline-block"
          >
            ← Back to Worlds
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <span className="text-6xl">🎪</span>
            <div>
              <h1 className="text-5xl md:text-7xl font-bold">Tavinsky</h1>
              <p className="text-2xl text-amber-800">The Juggler</p>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl leading-relaxed">
            20 years of circus, juggling, street shows, and festivals across the world. 
            This is where it all began — the discipline, the joy of performance, and the 
            connection with audiences that still drives everything I create today.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">The Story</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-xl mb-6">
              I picked up my first juggling balls at 15 on the streets of Argentina. 
              What started as a way to make pocket money quickly became a passion — 
              then a profession — then a way of life.
            </p>
            <p className="text-xl mb-6">
              For two decades, Tavinsky was my identity. I performed on streets, in 
              theaters, at festivals, and in the most unexpected places across South 
              America and Europe. The circus taught me everything: discipline, 
              improvisation, reading an audience, and the courage to fail publicly.
            </p>
            <p className="text-xl">
              Those skills didn&apos;t disappear when I transitioned to digital work — they 
              transformed. The same presence I brought to a street show now goes into 
              building websites, creating visuals, and producing music. Tavinsky isn&apos;t 
              just my past; it&apos;s the foundation of who I am.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-4 bg-amber-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Highlights</h2>
          <div className="space-y-8">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex gap-6 items-start"
              >
                <div className="text-xl font-bold text-amber-800 w-16 shrink-0">
                  {item.year}
                </div>
                <div className="flex-1 pb-8 border-b border-amber-200">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Skills & Disciplines</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="p-4 border-2 border-black bg-amber-50"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Placeholder */}
      <section className="py-24 px-4 bg-amber-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Media</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="aspect-video bg-amber-100 border-2 border-amber-200 flex items-center justify-center"
              >
                <span className="text-amber-400">Photo/Video {i}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8">
            Photos and videos from performances coming soon.
          </p>
        </div>
      </section>

      {/* Legacy Connection */}
      <section className="py-24 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            The Legacy Lives On
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Circus discipline, improvisation, and performance energy now flow into 
            music, visuals, and digital creation. Different medium, same spirit.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/worlds/music"
              className="px-6 py-3 border-2 border-white hover:bg-white hover:text-black transition-colors"
            >
              Explore Music →
            </Link>
            <Link
              href="/worlds/motion"
              className="px-6 py-3 border-2 border-white hover:bg-white hover:text-black transition-colors"
            >
              Explore Visuals →
            </Link>
          </div>
        </div>
      </section>

      {/* Shop Connection */}
      <section className="py-16 px-4 bg-amber-100">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-bold mb-4">Shop This World</h3>
          <p className="text-gray-700 mb-4">
            Circus-inspired prints, Tavinsky designs, and performance art posters.
          </p>
          <Link
            href="/store"
            className="text-amber-800 font-medium hover:underline"
          >
            Coming soon to the Inksky Store →
          </Link>
        </div>
      </section>
    </main>
  );
}
