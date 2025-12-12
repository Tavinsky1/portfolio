import Link from 'next/link';

const worlds = [
  {
    id: 'tavinsky',
    title: 'Tavinsky Circus',
    subtitle: '20 years of circus, juggling & street performance',
    href: '/worlds/tavinsky',
    color: 'bg-amber-50',
    icon: '🎪',
  },
  {
    id: 'music',
    title: 'Music',
    subtitle: 'Electronic, lo-fi, DJ sets & sound experiments',
    href: '/worlds/music',
    color: 'bg-violet-50',
    icon: '🎵',
  },
  {
    id: 'motion',
    title: 'Motion & Visuals',
    subtitle: 'TouchDesigner, generative art & audio-reactive systems',
    href: '/worlds/motion',
    color: 'bg-cyan-50',
    icon: '✨',
  },
];

const featuredProjects = [
  {
    name: 'Dog Atlas',
    description: 'Comprehensive dog breed guide',
    href: 'https://www.dog-atlas.com',
  },
  {
    name: 'Euphoria Embassy',
    description: 'Immersive digital experience',
    href: 'https://www.euphoria-embassy.com',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-4 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, black 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-black mb-6 tracking-tight">
            INKSKY
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-4">
            Independent Creative Studio
          </p>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            One sky, many little worlds — music, visuals, circus arts, and digital craft 
            by <span className="text-black font-medium">Gustavo del Prato</span>
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/worlds"
              className="px-8 py-4 bg-black text-white font-medium hover:bg-gray-800 transition-colors"
            >
              Explore Worlds
            </Link>
            <Link
              href="/studio"
              className="px-8 py-4 border-2 border-black text-black font-medium hover:bg-black hover:text-white transition-colors"
            >
              About the Studio
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-black/20 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-black/40 rounded-full" />
          </div>
        </div>
      </section>

      {/* Worlds Preview Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Worlds</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Different universes, one creative vision. Explore the worlds that make up Inksky.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {worlds.map((world) => (
              <Link
                key={world.id}
                href={world.href}
                className={`${world.color} p-8 border-2 border-black hover:shadow-xl transition-all hover:-translate-y-1 group`}
              >
                <span className="text-4xl mb-4 block">{world.icon}</span>
                <h3 className="text-2xl font-bold mb-2 group-hover:underline">
                  {world.title}
                </h3>
                <p className="text-gray-700">{world.subtitle}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/worlds"
              className="text-black font-medium hover:underline inline-flex items-center gap-2"
            >
              View all worlds →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Work</h2>
            <p className="text-xl text-gray-600">
              Selected projects from the portfolio
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {featuredProjects.map((project) => (
              <a
                key={project.name}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-8 border-2 border-black hover:bg-black hover:text-white transition-all"
              >
                <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                <p className="text-gray-600 group-hover:text-gray-300">
                  {project.description}
                </p>
                <span className="inline-block mt-4 font-medium">
                  Visit site →
                </span>
              </a>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="px-8 py-4 border-2 border-black hover:bg-black hover:text-white transition-colors inline-block"
            >
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let&apos;s Create Something Together
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Whether it&apos;s a web project, visual design, or creative collaboration — 
            I&apos;m always open to new ideas.
          </p>
          <Link
            href="/contact"
            className="px-8 py-4 bg-white text-black font-medium hover:bg-gray-200 transition-colors inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
