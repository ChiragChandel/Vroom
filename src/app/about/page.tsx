import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      

      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Back Button */}
          <div className="absolute top-6 left-6 z-10">
            <Link 
              href="/"
              className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-all duration-300">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>
        {/* Background with gradient overlay */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&h=800&fit=crop&auto=format"
            alt="Luxury cars background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              VROOM
            </h1>
            <p className="text-xl md:text-2xl text-[#E0E0E0] leading-relaxed">
              Where automotive passion meets premium storytelling
            </p>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Mission Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-b from-[#2A2A2A] to-[#252525] rounded-2xl p-8 md:p-12"
               style={{
                 boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(64, 64, 64, 0.3)'
               }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Our Mission</h2>
            <p className="text-lg text-[#E0E0E0] leading-relaxed mb-6">
              Vroom is a premium automotive publication dedicated to the discerning enthusiast. We don't just cover cars — we celebrate the artistry, engineering excellence, and cultural impact of the automotive world.
            </p>
            <p className="text-lg text-[#E0E0E0] leading-relaxed">
              Whether you're passionate about cutting-edge electric vehicles, luxurious grand tourers, or the timeless appeal of classic automobiles, our curated content delivers the depth and insight you deserve.
            </p>
          </div>
        </div>

        {/* What We Cover */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">What We Cover</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Electric Future",
                description: "In-depth coverage of EV innovations, sustainability, and the transition to electric mobility.",
                icon: "⚡"
              },
              {
                title: "Luxury & Performance",
                description: "Exclusive reviews of premium vehicles, supercars, and engineering marvels.",
                icon: "🏎️"
              },
              {
                title: "Expert Guidance",
                description: "Comprehensive buying guides, maintenance insights, and industry analysis.",
                icon: "🛠️"
              },
              {
                title: "Cultural Impact",
                description: "How automobiles shape society, design trends, and lifestyle choices.",
                icon: "🌟"
              }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-b from-[#2A2A2A] to-[#252525] rounded-xl p-6 hover:from-[#323232] hover:to-[#2A2A2A] transition-all duration-300"
                   style={{
                     boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(64, 64, 64, 0.3)'
                   }}>
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                <p className="text-[#B0B0B0] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-16">
          <div className="bg-gradient-to-b from-[#2A2A2A] to-[#252525] rounded-2xl p-8 md:p-12"
               style={{
                 boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(64, 64, 64, 0.3)'
               }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Built for Speed</h2>
            <p className="text-lg text-[#E0E0E0] leading-relaxed mb-8">
              Just like the vehicles we cover, our platform is engineered for performance. Built with cutting-edge technology to deliver lightning-fast load times and an immersive reading experience.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { tech: "Next.js", description: "React framework for production" },
                { tech: "TypeScript", description: "Type-safe development" },
                { tech: "Tailwind CSS", description: "Utility-first styling" }
              ].map((item, index) => (
                <div key={index} className="text-center p-4 bg-black/30 rounded-lg">
                  <div className="text-blue-400 font-bold text-lg mb-2">{item.tech}</div>
                  <div className="text-[#B0B0B0] text-sm">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-blue-700/20 rounded-2xl p-8 md:p-12 border border-blue-500/30">
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to Explore?</h2>
            <p className="text-lg text-[#E0E0E0] mb-8">
              Dive into our collection of premium automotive content and discover your next favorite read.
            </p>
            <Link 
              href="/"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Browse Articles
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}