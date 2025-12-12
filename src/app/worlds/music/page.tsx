import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Music',
  description: 'Electronic music, lo-fi, DJ sets & sound experiments. Dream Radio mixes and original productions.',
};

const releases = [
  {
    title: 'Dream Radio Mix Series',
    type: 'Mix Series',
    description: 'Long-form ambient and electronic mixes for focus, relaxation, and late-night listening.',
    platform: 'YouTube',
    status: 'Active',
  },
  {
    title: 'Club Sets',
    type: 'DJ Sets',
    description: 'House, techno, and eclectic club-oriented selections.',
    platform: 'Various',
    status: 'Active',
  },
  {
    title: 'Original Productions',
    type: 'Originals',
    description: 'Original tracks and experiments across electronic genres.',
    platform: 'Coming Soon',
    status: 'In Progress',
  },
];

const genres = [
  'Electronic',
  'Lo-fi',
  'Ambient',
  'House',
  'Techno',
  'Downtempo',
  'Club',
  'Experimental',
];

export default function Music() {
  return (
    <main className="min-h-screen bg-violet-50">
      {/* Hero */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/worlds"
            className="text-violet-800 hover:underline mb-8 inline-block"
          >
            ← Back to Worlds
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <span className="text-6xl">🎵</span>
            <div>
              <h1 className="text-5xl md:text-7xl font-bold">Music</h1>
              <p className="text-2xl text-violet-800">Sound & Night</p>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl leading-relaxed">
            Electronic music, lo-fi textures, club sounds, and late-night experiments. 
            DJ sets, mixes, and evolving original productions under the Inksky umbrella.
          </p>
        </div>
      </section>

      {/* What I Do */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">What I Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border-2 border-black bg-violet-50">
              <h3 className="text-xl font-bold mb-3">Producing</h3>
              <p className="text-gray-700">
                Original tracks, remixes, and sound experiments across electronic genres.
              </p>
            </div>
            <div className="p-6 border-2 border-black bg-violet-50">
              <h3 className="text-xl font-bold mb-3">DJing</h3>
              <p className="text-gray-700">
                Eclectic sets blending house, techno, ambient, and unexpected selections.
              </p>
            </div>
            <div className="p-6 border-2 border-black bg-violet-50">
              <h3 className="text-xl font-bold mb-3">Curating</h3>
              <p className="text-gray-700">
                Long-form mixes and playlists for different moods and moments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Releases / Projects */}
      <section className="py-24 px-4 bg-violet-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Releases & Projects</h2>
          <div className="space-y-6">
            {releases.map((release, index) => (
              <div
                key={index}
                className="p-8 bg-white border-2 border-black"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="text-sm font-bold uppercase tracking-wider text-violet-600">
                      {release.type}
                    </span>
                    <h3 className="text-2xl font-bold">{release.title}</h3>
                  </div>
                  <span className={`text-sm px-3 py-1 ${
                    release.status === 'Active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {release.status}
                  </span>
                </div>
                <p className="text-gray-700 mb-4">{release.description}</p>
                <p className="text-sm text-gray-500">
                  Platform: {release.platform}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Genres */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Genres & Sounds</h2>
          <div className="flex flex-wrap gap-3">
            {genres.map((genre, index) => (
              <span
                key={index}
                className="px-4 py-2 border-2 border-black bg-violet-50 font-medium"
              >
                {genre}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Listen Placeholder */}
      <section className="py-24 px-4 bg-violet-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Listen</h2>
          <div className="aspect-video bg-violet-100 border-2 border-violet-200 flex items-center justify-center mb-8 max-w-2xl mx-auto">
            <span className="text-violet-400">YouTube / SoundCloud Embed</span>
          </div>
          <p className="text-gray-600">
            Embedded players and links to streaming platforms coming soon.
          </p>
        </div>
      </section>

      {/* Visual Identity */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Visual Identity</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-square bg-violet-100 border-2 border-violet-200 flex items-center justify-center"
              >
                <span className="text-violet-400">Cover {i}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8">
            Mix covers, artwork, and visual identity pieces.
          </p>
        </div>
      </section>

      {/* Future */}
      <section className="py-24 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            This Is Evolving
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Expect more original sets, club-oriented tracks, long focus mixes, and 
            audio-reactive visual experiments. The music world of Inksky is just 
            getting started.
          </p>
          <Link
            href="/worlds/motion"
            className="px-6 py-3 border-2 border-white hover:bg-white hover:text-black transition-colors inline-block"
          >
            See the Visuals →
          </Link>
        </div>
      </section>

      {/* Shop Connection */}
      <section className="py-16 px-4 bg-violet-100">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-bold mb-4">Shop This World</h3>
          <p className="text-gray-700 mb-4">
            Sound & Night merch — Dream Radio posters, DJ gear, and music-inspired designs.
          </p>
          <Link
            href="/store"
            className="text-violet-800 font-medium hover:underline"
          >
            Coming soon to the Inksky Store →
          </Link>
        </div>
      </section>
    </main>
  );
}
