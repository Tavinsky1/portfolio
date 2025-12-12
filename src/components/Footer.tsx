import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">INKSKY</h3>
            <p className="text-gray-400 max-w-md">
              Independent Creative Studio — One sky, many little worlds. 
              Music, visuals, circus, and digital craft under one roof.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Explore</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/studio" className="hover:text-white transition-colors">
                  Studio
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/worlds" className="hover:text-white transition-colors">
                  Worlds
                </Link>
              </li>
              <li>
                <Link href="/store" className="hover:text-white transition-colors">
                  Store
                </Link>
              </li>
            </ul>
          </div>

          {/* Worlds */}
          <div>
            <h4 className="font-bold mb-4">Worlds</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/worlds/tavinsky" className="hover:text-white transition-colors">
                  Tavinsky Circus
                </Link>
              </li>
              <li>
                <Link href="/worlds/music" className="hover:text-white transition-colors">
                  Music
                </Link>
              </li>
              <li>
                <Link href="/worlds/motion" className="hover:text-white transition-colors">
                  Motion & Visuals
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Me
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Inksky. Gustavo del Prato. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">
              Contact
            </Link>
            <a 
              href="https://github.com/Tavinsky1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
