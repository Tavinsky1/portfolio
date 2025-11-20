import Link from 'next/link';

const projects = [
  {
    name: 'Dog Atlas',
    url: 'https://www.dog-atlas.com',
    description: 'A comprehensive guide to dog breeds and information',
    image: '/projects/dog-atlas.jpg', // Placeholder - add your screenshot
  },
  {
    name: 'Euphoria Embassy',
    url: 'https://www.euphoria-embassy.com',
    description: 'An immersive digital experience',
    image: '/projects/euphoria-embassy.jpg', // Placeholder
  },
  {
    name: 'Tavinsky',
    url: 'https://www.tavinsky.com',
    description: 'Creative portfolio and experiments',
    image: '/projects/tavinsky.jpg', // Placeholder
  },
];

export default function WebProjects() {
  return (
    <main className="min-h-screen bg-white px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="text-black hover:underline mb-8 inline-block">
          ← Back to Home
        </Link>
        
        <h1 className="text-5xl md:text-6xl font-bold text-black mb-4">
          Web Projects
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          Selected web design and development work
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.name} className="border-2 border-black overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gray-100 flex items-center justify-center">
                {/* Replace with actual project images */}
                <span className="text-gray-400">Screenshot</span>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{project.name}</h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 border-2 border-black hover:bg-black hover:text-white transition-colors"
                >
                  Visit Site →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
