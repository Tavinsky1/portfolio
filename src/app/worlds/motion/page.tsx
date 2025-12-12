import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Motion & Visuals',
  description: 'TouchDesigner experiments, generative art, audio-reactive systems, and motion graphics.',
};

const tools = [
  {
    name: 'TouchDesigner',
    description: 'Primary tool for real-time visuals and interactive systems.',
    level: 'Main',
  },
  {
    name: 'Ableton Live',
    description: 'Audio source and MIDI control for reactive visuals.',
    level: 'Audio',
  },
  {
    name: 'Blender',
    description: '3D modeling and animation (exploring).',
    level: 'Learning',
  },
  {
    name: 'After Effects',
    description: 'Motion graphics and video post-production.',
    level: 'Secondary',
  },
];

const experiments = [
  {
    title: 'Audio-Reactive Particles',
    description: 'Particle systems driven by audio frequency analysis.',
    type: 'TouchDesigner',
  },
  {
    title: 'Generative Patterns',
    description: 'Algorithmic pattern generation and noise-based visuals.',
    type: 'TouchDesigner',
  },
  {
    title: 'Live VJ Sets',
    description: 'Real-time visual performance synced to DJ sets.',
    type: 'Live',
  },
  {
    title: 'Abstract Motion',
    description: 'Experimental motion graphics and loop explorations.',
    type: 'Motion',
  },
];

export default function Motion() {
  return (
    <main className="min-h-screen bg-cyan-50">
      {/* Hero */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/worlds"
            className="text-cyan-800 hover:underline mb-8 inline-block"
          >
            ← Back to Worlds
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <span className="text-6xl">✨</span>
            <div>
              <h1 className="text-5xl md:text-7xl font-bold">Motion</h1>
              <p className="text-2xl text-cyan-800">Real-time Art</p>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl leading-relaxed">
            Real-time visuals, audio-reactive experiments, generative art, and motion 
            design tests. Where sound becomes image and code becomes performance.
          </p>
        </div>
      </section>

      {/* What I Play With */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">What I Play With</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="p-6 border-2 border-black bg-cyan-50"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold">{tool.name}</h3>
                  <span className={`text-xs px-2 py-1 ${
                    tool.level === 'Main' 
                      ? 'bg-cyan-600 text-white' 
                      : tool.level === 'Learning'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {tool.level}
                  </span>
                </div>
                <p className="text-gray-700">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiments */}
      <section className="py-24 px-4 bg-cyan-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Experiments</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {experiments.map((exp, index) => (
              <div
                key={index}
                className="p-6 bg-white border-2 border-black"
              >
                <span className="text-sm font-bold uppercase tracking-wider text-cyan-600 mb-2 block">
                  {exp.type}
                </span>
                <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                <p className="text-gray-700">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Placeholder */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Gallery</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="aspect-square bg-cyan-100 border-2 border-cyan-200 flex items-center justify-center"
              >
                <span className="text-cyan-400">Visual {i}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8">
            Short looping videos and visual experiments coming soon.
          </p>
        </div>
      </section>

      {/* Tech Notes */}
      <section className="py-24 px-4 bg-cyan-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">How It Works</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-xl mb-6">
              Most of my visual work connects to music. The typical setup: Ableton Live 
              sends audio and MIDI data to TouchDesigner, which generates real-time visuals 
              that react to frequency, amplitude, and beat information.
            </p>
            <p className="text-xl mb-6">
              This creates a feedback loop between sound and image — the music shapes the 
              visuals, but the visuals also influence how I approach the music. It's 
              performance art made with code.
            </p>
            <p className="text-xl">
              I'm currently exploring 3D workflows with Blender and thinking about how 
              these tools can enhance live DJ sets and installations.
            </p>
          </div>
        </div>
      </section>

      {/* Connection */}
      <section className="py-24 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Sound Meets Image
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            The visual world is deeply connected to the music world. They're designed 
            to work together — in live sets, in recordings, and in the creative process.
          </p>
          <Link
            href="/worlds/music"
            className="px-6 py-3 border-2 border-white hover:bg-white hover:text-black transition-colors inline-block"
          >
            Explore the Music →
          </Link>
        </div>
      </section>

      {/* Shop Connection */}
      <section className="py-16 px-4 bg-cyan-100">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-bold mb-4">Shop This World</h3>
          <p className="text-gray-700 mb-4">
            Abstract prints, generative art posters, and visual experiment outputs.
          </p>
          <Link
            href="/store"
            className="text-cyan-800 font-medium hover:underline"
          >
            Coming soon to the Inksky Store →
          </Link>
        </div>
      </section>
    </main>
  );
}
