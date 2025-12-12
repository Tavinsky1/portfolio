import Link from 'next/link';

const workshops = [
  {
    id: 1,
    title: 'Circus Performance Workshop',
    category: 'Circus Arts',
    description: 'Introduction to circus techniques, physical theatre, and stage presence. Perfect for beginners and intermediate performers.',
    audience: 'Ages 12+, all levels',
    topics: ['Acrobatics basics', 'Stage presence', 'Physical storytelling', 'Performance techniques'],
  },
  {
    id: 2,
    title: 'Creative Coding with TouchDesigner',
    category: 'Digital Art',
    description: 'Learn to create real-time interactive visuals and generative art using TouchDesigner. From basics to audio-reactive systems.',
    audience: 'Artists, designers, performers',
    topics: ['TouchDesigner fundamentals', 'Audio-reactive visuals', 'Live performance systems', 'Generative art'],
  },
  {
    id: 3,
    title: 'Music Production & Sound Design',
    category: 'Music',
    description: 'Hands-on workshop covering composition, production techniques, and sound design for multimedia projects.',
    audience: 'Musicians and multimedia artists',
    topics: ['DAW fundamentals', 'Sound design', 'Composition techniques', 'Music for visuals'],
  },
  {
    id: 4,
    title: 'Digital Illustration in Procreate',
    category: 'Visual Art',
    description: 'Master digital illustration techniques in Procreate. Learn professional workflows for creating stunning artwork.',
    audience: 'Artists and illustrators',
    topics: ['Procreate tools & brushes', 'Color theory', 'Composition', 'Professional workflow'],
  },
];

export default function Teaching() {
  return (
    <main className="min-h-screen bg-white px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="text-black hover:underline mb-8 inline-block">
          ← Back to Home
        </Link>
        
        <h1 className="text-5xl md:text-6xl font-bold text-black mb-4">
          Teaching & Workshops
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl">
          Sharing knowledge across circus arts, creative technology, music, and digital art. 
          I believe in empowering others to explore their creative potential through hands-on learning.
        </p>

        {/* Teaching Philosophy */}
        <section className="mb-16 p-8 border-2 border-black">
          <h2 className="text-3xl font-bold mb-4">Teaching Philosophy</h2>
          <p className="text-gray-700 mb-4">
            My approach combines technical skill-building with creative exploration. Whether it&apos;s 
            circus performance, TouchDesigner, or music production, I focus on:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Learning by doing — hands-on practice from day one</li>
            <li>Connecting disciplines — showing how circus, music, and digital art intersect</li>
            <li>Building confidence — creating a supportive environment for experimentation</li>
            <li>Real-world application — teaching tools and techniques you&apos;ll actually use</li>
          </ul>
        </section>

        {/* Workshops Grid */}
        <h2 className="text-3xl font-bold mb-8">Available Workshops</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {workshops.map((workshop) => (
            <article key={workshop.id} className="border-2 border-black p-6 hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <span className="text-sm font-bold uppercase tracking-wider text-gray-500">
                  {workshop.category}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-3">{workshop.title}</h3>
              <p className="text-gray-700 mb-4">{workshop.description}</p>
              
              <div className="mb-4">
                <p className="text-sm font-bold text-gray-600 mb-2">
                  Audience: <span className="font-normal">{workshop.audience}</span>
                </p>
              </div>

              <div>
                <p className="text-sm font-bold text-gray-600 mb-2">Topics covered:</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                  {workshop.topics.map((topic, index) => (
                    <li key={index}>{topic}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {/* Past Experience */}
        <section className="mb-16 bg-gray-50 p-8 border-2 border-black">
          <h2 className="text-3xl font-bold mb-6">Teaching Experience</h2>
          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="text-xl font-bold mb-2">Circus & Performance</h3>
              <p>Led workshops internationally, teaching acrobatics, physical theatre, and performance skills to diverse groups from beginners to professionals.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Creative Technology</h3>
              <p>Conducted TouchDesigner workshops for artists and performers, covering real-time visuals, interactive installations, and live performance systems.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Music & Sound</h3>
              <p>Taught music production, sound design, and composition techniques for multimedia projects and live performances.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Digital Art</h3>
              <p>Guided students through digital illustration workflows, from concept to final artwork using Procreate and other tools.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center p-12 border-2 border-black">
          <h2 className="text-3xl font-bold mb-4">Interested in a Workshop?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            I offer both in-person and online workshops, tailored to your group&apos;s needs and skill level. 
            Let&apos;s discuss how we can collaborate.
          </p>
          <Link 
            href="/contact"
            className="inline-block px-8 py-4 border-2 border-black bg-black text-white hover:bg-white hover:text-black transition-colors text-lg font-bold"
          >
            Get in Touch
          </Link>
        </section>
      </div>
    </main>
  );
}
