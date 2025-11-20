import Link from 'next/link';

// Replace with your actual SoundCloud track IDs
const tracks = [
  {
    id: 1,
    title: 'Track Title 1',
    soundcloudUrl: '123456789', // Replace with actual SoundCloud track ID
  },
  {
    id: 2,
    title: 'Track Title 2',
    soundcloudUrl: '987654321', // Replace with actual SoundCloud track ID
  },
  // Add more tracks
];

export default function Music() {
  return (
    <main className="min-h-screen bg-white px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-black hover:underline mb-8 inline-block">
          ← Back to Home
        </Link>
        
        <h1 className="text-5xl md:text-6xl font-bold text-black mb-4">
          Music
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          Original compositions and sound design
        </p>

        <div className="space-y-8">
          {tracks.map((track) => (
            <div key={track.id} className="border-2 border-black p-6">
              <h2 className="text-2xl font-bold mb-4">{track.title}</h2>
              {/* SoundCloud embed */}
              <iframe
                width="100%"
                height="166"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${track.soundcloudUrl}&color=%23000000&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`}
              />
            </div>
          ))}
          
          {/* Placeholder message */}
          {tracks.length === 0 && (
            <div className="text-center text-gray-600 py-12">
              <p>Music tracks coming soon. Add your SoundCloud track IDs to display them here.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
