'use client'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-dark via-darkGray to-dark pt-24 flex items-center">
      <div className="container mx-auto px-4 md:px-8 py-16 md:py-0">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block border border-gold rounded-full px-4 py-2 text-sm text-gold">
              ✨ Welcome to my portfolio
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Professional Websites That <span className="text-gold">Grow</span> Your Business.
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              I design and build fast, modern and high-performing websites that help businesses and creators stand out and succeed online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="btn-primary">
                Get Started
              </button>
              <button className="btn-secondary">
                View My Work
              </button>
            </div>
          </div>

          {/* Right Content - Placeholder for mockup */}
          <div className="hidden md:block">
            <div className="bg-gradient-to-br from-gold/20 to-darkGray rounded-2xl p-8 border border-gold/20 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">💻</div>
                <p className="text-gray-400">Website Mockup</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
