import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Store',
  description: 'Inksky Store — prints, merch, and creative goods from all worlds.',
};

const categories = [
  {
    id: 'originals',
    title: 'Inksky Originals',
    description: 'Prints, posters, and artwork from the studio.',
    status: 'Coming Soon',
    color: 'bg-gray-50',
  },
  {
    id: 'tavinsky',
    title: 'Tavinsky Collection',
    description: 'Circus-inspired designs and performance art prints.',
    status: 'Coming Soon',
    color: 'bg-amber-50',
    world: '/worlds/tavinsky',
  },
  {
    id: 'sound-night',
    title: 'Sound & Night',
    description: 'Music merch, Dream Radio gear, and DJ-inspired items.',
    status: 'Coming Soon',
    color: 'bg-violet-50',
    world: '/worlds/music',
  },
  {
    id: 'visual-prints',
    title: 'Visual Prints',
    description: 'Generative art and motion design outputs as prints.',
    status: 'Coming Soon',
    color: 'bg-cyan-50',
    world: '/worlds/motion',
  },
  {
    id: 'dog-atlas',
    title: 'Dog Atlas Shop',
    description: 'Dog breed prints, accessories, and pet lover goods.',
    status: 'Coming Soon',
    color: 'bg-orange-50',
    external: 'https://www.dog-atlas.com',
  },
];

export default function Store() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Store</h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
            Prints, merch, and creative goods from the Inksky universe. 
            Each collection connects to a different world.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 px-4 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div
                key={category.id}
                className={`${category.color} p-8 border-2 border-black`}
              >
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold">{category.title}</h2>
                  <span className="text-xs px-2 py-1 bg-black/10 text-black/60 font-medium">
                    {category.status}
                  </span>
                </div>
                <p className="text-gray-700 mb-6">{category.description}</p>
                
                {category.world && (
                  <Link
                    href={category.world}
                    className="text-sm text-gray-600 hover:text-black hover:underline"
                  >
                    Explore this world →
                  </Link>
                )}
                {category.external && (
                  <a
                    href={category.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 hover:text-black hover:underline"
                  >
                    Visit site →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-2">Created Here</h3>
              <p className="text-gray-600">
                All designs originate from Inksky projects and worlds.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-xl font-bold mb-2">Print on Demand</h3>
              <p className="text-gray-600">
                Fulfilled via quality print partners. No waste, no overstock.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold mb-2">Ships Worldwide</h3>
              <p className="text-gray-600">
                Available globally with tracking and quality guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Be the First to Know
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            The store is launching soon. Leave your email to get notified when 
            new collections drop.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 bg-white text-black placeholder-gray-500"
            />
            <button className="px-6 py-3 bg-white text-black font-medium hover:bg-gray-200 transition-colors">
              Notify Me
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            No spam, ever. Just store updates.
          </p>
        </div>
      </section>

      {/* Amazon Note */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-bold mb-4">Amazon Integration</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Some products will be available via Amazon for faster shipping in certain 
            regions. The Inksky Store will clearly indicate which items are fulfilled 
            by Amazon.
          </p>
        </div>
      </section>
    </main>
  );
}
