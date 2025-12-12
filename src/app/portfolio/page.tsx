import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Web projects and digital work by Inksky — Dog Atlas, Euphoria Embassy, and more.',
};

const projects = [
  {
    name: 'Euphoria Embassy',
    url: 'https://www.euphoria-embassy.com',
    image: '/projects/euphoria-embassy.png',
    description: 'An immersive digital experience exploring sound, visuals, and interactive storytelling.',
    tech: ['Next.js', 'Three.js', 'WebGL'],
    status: 'Live',
    featured: true,
  },
  {
    name: 'Dog Atlas',
    url: 'https://www.dog-atlas.com',
    image: '/projects/dog-atlas.png',
    description: 'A comprehensive guide to dog breeds with detailed information, images, and comparison tools.',
    tech: ['Next.js', 'React', 'Tailwind CSS'],
    status: 'Live',
    featured: true,
  },
  {
    name: 'Inksky',
    url: 'https://www.inksky.net',
    image: null,
    description: 'This site — the central hub for all creative projects and worlds.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    status: 'Live',
    featured: false,
  },
];

const skills = [
  'React / Next.js',
  'TypeScript',
  'Tailwind CSS',
  'Node.js',
  'UI/UX Design',
  'Responsive Design',
  'SEO Optimization',
  'Vercel Deployment',
];

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Portfolio</h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl">
            Selected web projects and digital work. Modern, responsive, and built 
            with care using Next.js and the latest web technologies.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.filter(p => p.featured).map((project) => (
              <div
                key={project.name}
                className="border-2 border-black overflow-hidden group"
              >
                {/* Project Image */}
                <div className="aspect-video bg-gray-100 relative border-b-2 border-black overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`${project.name} screenshot`}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-gray-400">Screenshot</span>
                    </div>
                  )}
                </div>
                
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold">{project.name}</h3>
                    <span className="text-xs px-2 py-1 bg-green-100 text-green-800 font-medium">
                      {project.status}
                    </span>
                  </div>
                  
                  <p className="text-gray-700 mb-6">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-sm px-3 py-1 bg-gray-100 text-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 border-2 border-black hover:bg-black hover:text-white transition-colors font-medium"
                  >
                    Visit Site →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">All Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-white border-2 border-black hover:shadow-xl transition-all hover:-translate-y-1 group"
              >
                <h3 className="text-xl font-bold mb-2 group-hover:underline">
                  {project.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <span className="text-sm font-medium">Visit →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Tech Stack</h2>
          <p className="text-xl text-gray-600 mb-8">
            Tools and technologies I work with regularly:
          </p>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 border-2 border-black font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            I&apos;m available for freelance web development and design projects. 
            Let&apos;s discuss how we can work together.
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
