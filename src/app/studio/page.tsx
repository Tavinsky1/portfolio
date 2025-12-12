import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Studio',
  description: 'Inksky Independent Creative Studio — about our philosophy, services, and creative approach.',
};

const services = [
  {
    title: 'Web Design & Development',
    description: 'Modern, responsive websites built with Next.js, React, and Tailwind CSS. From portfolios to complex web applications.',
    icon: '🌐',
  },
  {
    title: 'Visual Art & Motion',
    description: 'TouchDesigner-powered visuals, generative art, audio-reactive systems, and motion graphics for live events.',
    icon: '✨',
  },
  {
    title: 'Music Production',
    description: 'Original compositions, sound design, DJ sets, and audio for multimedia projects.',
    icon: '🎵',
  },
  {
    title: 'Creative Direction',
    description: 'Brand identity, visual strategy, and creative consulting for artists and projects.',
    icon: '🎯',
  },
];

const values = [
  {
    title: 'Craft Over Speed',
    description: 'Quality takes time. Every project gets the attention it deserves.',
  },
  {
    title: 'Cross-Disciplinary',
    description: 'The best ideas come from connecting different worlds — music, visuals, code, and performance.',
  },
  {
    title: 'Human Scale',
    description: 'Small studio, direct communication, personal involvement in every project.',
  },
  {
    title: 'Continuous Learning',
    description: 'Always experimenting, always growing. New tools, new techniques, new perspectives.',
  },
];

export default function Studio() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Studio</h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl leading-relaxed">
            <strong className="text-black">Inksky</strong> is an independent creative studio 
            based in Berlin, founded by Gustavo del Prato. We work at the intersection of 
            technology, art, and human experience.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Philosophy</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-6">
              The name <em>Inksky</em> represents the idea of a vast creative space — 
              <strong>"one sky, many little worlds."</strong> Under this sky live different 
              projects, personas, and experiments, each with its own identity but connected 
              by a common creative vision.
            </p>
            <p className="text-xl text-gray-700 mb-6">
              After 20 years as a circus performer touring the world, I transitioned into 
              digital creation — bringing the same discipline, improvisation, and joy of 
              performance into new mediums: web design, visual art, music production, and 
              creative technology.
            </p>
            <p className="text-xl text-gray-700">
              Inksky is where all these threads come together.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value) => (
              <div key={value.title} className="p-8 border-2 border-black">
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-4 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What We Do</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.title} className="p-8 border-2 border-white">
                <span className="text-3xl mb-4 block">{service.icon}</span>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Person */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">The Person Behind</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <p className="text-xl text-gray-700 mb-6">
                <strong className="text-black">Gustavo del Prato</strong> — Argentine-born, 
                Berlin-based. Started as a street performer and circus artist at 15, toured 
                internationally for two decades, then pivoted into creative technology.
              </p>
              <p className="text-xl text-gray-700 mb-6">
                Today: web developer, visual artist, music producer, and eternal learner. 
                The circus taught me discipline, presence, and how to connect with an audience. 
                Those skills translate directly into digital work.
              </p>
              <Link
                href="/about"
                className="text-black font-medium hover:underline inline-flex items-center gap-2"
              >
                Read full story →
              </Link>
            </div>
            <div className="bg-gray-100 aspect-square flex items-center justify-center border-2 border-black">
              <span className="text-gray-400">Photo</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Work With Us</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Have a project in mind? Let's talk about how Inksky can help bring your vision to life.
          </p>
          <Link
            href="/contact"
            className="px-8 py-4 bg-black text-white font-medium hover:bg-gray-800 transition-colors inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
