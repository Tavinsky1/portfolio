import Link from 'next/link';

export default function About() {
  return (
    <main className="min-h-screen bg-white px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-black hover:underline mb-8 inline-block">
          ← Back to Home
        </Link>
        
        <h1 className="text-5xl md:text-6xl font-bold text-black mb-12">
          About Me
        </h1>

        {/* Introduction */}
        <section className="mb-16">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            I'm Gustavo Del Prato, a multidisciplinary creative working at the intersection 
            of web design, visual art, and music. My work explores the connections between 
            technology, aesthetics, and human experience.
          </p>
        </section>

        {/* Skills & Experience */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Experience & Skills</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Web Development */}
            <div className="border-2 border-black p-6">
              <h3 className="text-2xl font-bold mb-4">Web Developer</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• React / Next.js</li>
                <li>• TypeScript / JavaScript</li>
                <li>• Tailwind CSS</li>
                <li>• UI/UX Design</li>
                <li>• Responsive Development</li>
              </ul>
            </div>

            {/* Artist */}
            <div className="border-2 border-black p-6">
              <h3 className="text-2xl font-bold mb-4">Visual Artist</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• TouchDesigner</li>
                <li>• Procreate</li>
                <li>• Generative Art</li>
                <li>• Motion Graphics</li>
                <li>• Digital Illustration</li>
              </ul>
            </div>

            {/* Musician */}
            <div className="border-2 border-black p-6">
              <h3 className="text-2xl font-bold mb-4">Musician</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Composition</li>
                <li>• Sound Design</li>
                <li>• Audio Production</li>
                <li>• [Add your instruments]</li>
                <li>• [Add your genres]</li>
              </ul>
            </div>

            {/* Other */}
            <div className="border-2 border-black p-6">
              <h3 className="text-2xl font-bold mb-4">Other Skills</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Creative Direction</li>
                <li>• Project Management</li>
                <li>• Branding</li>
                <li>• [Add more skills]</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Resume Section */}
        <section className="border-t-2 border-black pt-12">
          <h2 className="text-3xl font-bold mb-6">Resume</h2>
          <p className="text-gray-700 mb-6">
            Interested in my full resume? Please reach out via the contact page and I'll be 
            happy to share it with you.
          </p>
          <Link 
            href="/contact"
            className="inline-block px-8 py-3 border-2 border-black hover:bg-black hover:text-white transition-colors"
          >
            Request Resume
          </Link>
        </section>
      </div>
    </main>
  );
}
