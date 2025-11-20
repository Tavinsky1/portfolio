import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-black mb-4">
          Gustavo Del Prato
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-12 text-center">
          Web Designer • Artist • Musician • Educator
        </p>
        
        <nav className="flex flex-wrap gap-6 justify-center">
          <Link 
            href="/web-projects" 
            className="px-8 py-3 border-2 border-black hover:bg-black hover:text-white transition-colors"
          >
            Web Projects
          </Link>
          <Link 
            href="/art" 
            className="px-8 py-3 border-2 border-black hover:bg-black hover:text-white transition-colors"
          >
            Visual Art
          </Link>
          <Link 
            href="/music" 
            className="px-8 py-3 border-2 border-black hover:bg-black hover:text-white transition-colors"
          >
            Music
          </Link>
          <Link 
            href="/teaching" 
            className="px-8 py-3 border-2 border-black hover:bg-black hover:text-white transition-colors"
          >
            Teaching
          </Link>
          <Link 
            href="/about" 
            className="px-8 py-3 border-2 border-black hover:bg-black hover:text-white transition-colors"
          >
            About
          </Link>
          <Link 
            href="/contact" 
            className="px-8 py-3 border-2 border-black hover:bg-black hover:text-white transition-colors"
          >
            Contact
          </Link>
        </nav>
      </section>
    </main>
  );
}
