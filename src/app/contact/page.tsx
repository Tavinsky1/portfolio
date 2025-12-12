import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact',
  description: "Get in touch with Inksky — let's collaborate on your next project.",
};

export default function Contact() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? Want to collaborate? Or just want to say hello? 
            I'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 px-4 pb-24">
        <div className="max-w-2xl mx-auto">
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
              <label htmlFor="subject" className="block text-lg font-bold mb-2">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-black bg-white"
              >
                <option value="">Select a topic...</option>
                <option value="web">Web Project</option>
                <option value="music">Music Collaboration</option>
                <option value="visuals">Visual Art / Motion</option>
                <option value="workshop">Workshop Inquiry</option>
                <option value="other">Other / General</option>
              </select>
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
                placeholder="Tell me about your project, idea, or just say hello..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 border-2 border-black bg-black text-white hover:bg-white hover:text-black transition-colors text-lg font-bold"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Alternative Contact */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Other Ways to Connect</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <a 
                href="mailto:hello@inksky.net" 
                className="text-gray-600 hover:text-black hover:underline"
              >
                hello@inksky.net
              </a>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-bold mb-2">GitHub</h3>
              <a 
                href="https://github.com/Tavinsky1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black hover:underline"
              >
                @Tavinsky1
              </a>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p className="text-gray-600">Berlin, Germany</p>
            </div>
          </div>
        </div>
      </section>

      {/* Response Time */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gray-600">
            I typically respond within 24–48 hours. For urgent matters, 
            please mention it in your message subject.
          </p>
        </div>
      </section>

      {/* Explore More */}
      <section className="py-24 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">While You're Here</h2>
          <p className="text-gray-400 mb-8">
            Explore what Inksky is about before reaching out.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/studio"
              className="px-6 py-3 border-2 border-white hover:bg-white hover:text-black transition-colors"
            >
              About the Studio
            </Link>
            <Link
              href="/portfolio"
              className="px-6 py-3 border-2 border-white hover:bg-white hover:text-black transition-colors"
            >
              View Portfolio
            </Link>
            <Link
              href="/worlds"
              className="px-6 py-3 border-2 border-white hover:bg-white hover:text-black transition-colors"
            >
              Explore Worlds
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
