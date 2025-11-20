import Link from 'next/link';

export default function Contact() {
  return (
    <main className="min-h-screen bg-white px-4 py-16">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="text-black hover:underline mb-8 inline-block">
          ← Back to Home
        </Link>
        
        <h1 className="text-5xl md:text-6xl font-bold text-black mb-4">
          Get in Touch
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          Let's collaborate on your next project
        </p>

        {/* Contact Form */}
        <form className="space-y-6 mb-12">
          <div>
            <label htmlFor="name" className="block text-lg font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Tell me about your project..."
            />
          </div>

          <button
            type="submit"
            className="w-full px-8 py-4 border-2 border-black bg-black text-white hover:bg-white hover:text-black transition-colors text-lg font-bold"
          >
            Send Message
          </button>
        </form>

        {/* Social Links Placeholder */}
        <div className="border-t-2 border-black pt-8">
          <h2 className="text-2xl font-bold mb-4">Connect</h2>
          <div className="space-y-2 text-gray-700">
            <p>Email: <a href="mailto:your@email.com" className="underline">your@email.com</a></p>
            <p>Add your social media links here</p>
          </div>
        </div>
      </div>
    </main>
  );
}
