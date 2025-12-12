import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Me',
  description: 'Gustavo del Prato — the person behind Inksky. Argentina → Europe → Berlin.',
};

const timeline = [
  {
    period: '2004–2020',
    title: 'Circus Years',
    description: 'Started as a street performer in Argentina. Toured internationally as Tavinsky — juggling, acrobatics, and physical theatre across South America and Europe.',
  },
  {
    period: '2018',
    title: 'Berlin',
    description: 'Settled in Berlin as home base. The city became the backdrop for the transition from physical to digital creation.',
  },
  {
    period: '2020–2022',
    title: 'Transition',
    description: 'Pandemic pivot. Started learning web development, music production, and visual tools like TouchDesigner.',
  },
  {
    period: '2023–Now',
    title: 'Inksky Era',
    description: 'Building Inksky as the umbrella for all creative work. Web projects, music, visuals, and new experiments.',
  },
];

const currentFocus = [
  'Web development (Next.js, React, Tailwind)',
  'Music production and DJ sets',
  'TouchDesigner and real-time visuals',
  'Dog Atlas project',
  'Building the Inksky ecosystem',
];

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/worlds"
            className="text-gray-600 hover:underline mb-8 inline-block"
          >
            ← Back to Worlds
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <span className="text-6xl">🌙</span>
            <div>
              <h1 className="text-5xl md:text-7xl font-bold">About Me</h1>
              <p className="text-2xl text-gray-600">Under This Sky</p>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl leading-relaxed">
            I'm <strong className="text-black">Gustavo del Prato</strong> — the person 
            behind Inksky. Argentine-born, Berlin-based. Former circus performer, now 
            a multidisciplinary creator working across web, music, and visuals.
          </p>
        </div>
      </section>

      {/* Who I Am */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Who I Am</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                I started performing on the streets of Argentina at 15, learned to juggle, 
                and turned it into a 20-year career touring festivals and theaters across 
                the world. The circus taught me discipline, improvisation, and how to 
                connect with an audience.
              </p>
              <p className="text-xl mb-6">
                Today, those same skills fuel my digital work. I build websites, produce 
                music, create real-time visuals, and run passion projects like Dog Atlas. 
                The medium changed, but the spirit is the same: craft something meaningful, 
                share it with people, keep learning.
              </p>
              <p className="text-xl">
                Berlin is home now. Dogs are my co-workers. The sky is wide.
              </p>
            </div>
            <div className="bg-gray-100 aspect-[3/4] flex items-center justify-center border-2 border-black">
              <span className="text-gray-400">Photo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Timeline</h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="flex gap-6 items-start"
              >
                <div className="text-lg font-bold text-gray-500 w-28 shrink-0">
                  {item.period}
                </div>
                <div className="flex-1 pb-8 border-b border-gray-200">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Focus */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Current Focus</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {currentFocus.map((item, index) => (
              <div
                key={index}
                className="p-4 border-2 border-black bg-white"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Skills & Experience</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border-2 border-black p-6">
              <h3 className="text-xl font-bold mb-4">Web Development</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• React / Next.js</li>
                <li>• TypeScript / JavaScript</li>
                <li>• Tailwind CSS</li>
                <li>• UI/UX Design</li>
                <li>• Responsive Development</li>
              </ul>
            </div>

            <div className="border-2 border-black p-6">
              <h3 className="text-xl font-bold mb-4">Visual Art</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• TouchDesigner</li>
                <li>• Generative Art</li>
                <li>• Motion Graphics</li>
                <li>• Audio-Reactive Systems</li>
                <li>• Live Visuals</li>
              </ul>
            </div>

            <div className="border-2 border-black p-6">
              <h3 className="text-xl font-bold mb-4">Music</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Ableton Live</li>
                <li>• Sound Design</li>
                <li>• DJing</li>
                <li>• Electronic Production</li>
                <li>• Audio for Visuals</li>
              </ul>
            </div>

            <div className="border-2 border-black p-6">
              <h3 className="text-xl font-bold mb-4">Performance</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Juggling</li>
                <li>• Physical Theatre</li>
                <li>• Stage Presence</li>
                <li>• Workshop Facilitation</li>
                <li>• Creative Direction</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Links */}
      <section className="py-24 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Connect</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="https://github.com/Tavinsky1"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-white hover:bg-white hover:text-black transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-white hover:bg-white hover:text-black transition-colors"
            >
              YouTube
            </a>
            <Link
              href="/contact"
              className="px-6 py-3 border-2 border-white hover:bg-white hover:text-black transition-colors"
            >
              Email
            </Link>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my universes: 
            <Link href="/worlds/tavinsky" className="text-white hover:underline mx-1">Tavinsky Circus</Link>, 
            <Link href="/worlds/music" className="text-white hover:underline mx-1">Music</Link>, 
            <Link href="/worlds/motion" className="text-white hover:underline mx-1">Motion & Visuals</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
