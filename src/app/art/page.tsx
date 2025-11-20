import Link from 'next/link';

// Placeholder data - replace with your actual TouchDesigner videos and YouTube embeds
const artWorks = [
  {
    id: 1,
    title: 'TouchDesigner Experiment 01',
    type: 'video',
    videoUrl: '/videos/td-01.mp4', // Replace with actual video path
    description: 'Generative visual exploration',
  },
  {
    id: 2,
    title: 'YouTube Visual Series',
    type: 'youtube',
    youtubeId: 'dQw4w9WgXcQ', // Replace with actual YouTube video ID
    description: 'Motion graphics and visual art',
  },
  {
    id: 3,
    title: 'Procreate Digital Art',
    type: 'image',
    imageUrl: '/art/procreate-01.jpg', // Replace with actual image
    description: 'Digital illustration and painting',
  },
  // Add more artworks
];

export default function Art() {
  return (
    <main className="min-h-screen bg-black text-white px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="text-white hover:underline mb-8 inline-block">
          ← Back to Home
        </Link>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Visual Art
        </h1>
        <p className="text-xl text-gray-400 mb-12">
          TouchDesigner experiments, digital art, and video work
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {artWorks.map((work) => (
            <div key={work.id} className="border-2 border-white overflow-hidden">
              <div className="aspect-video bg-gray-900 flex items-center justify-center">
                {work.type === 'youtube' ? (
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${work.youtubeId}`}
                    title={work.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                ) : work.type === 'video' ? (
                  <video 
                    controls 
                    className="w-full h-full object-cover"
                    poster="/placeholder.jpg"
                  >
                    <source src={work.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <span className="text-gray-600">Image Placeholder</span>
                )}
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{work.title}</h2>
                <p className="text-gray-400">{work.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
