'use client'

export default function About() {
  return (
    <section id="about" className="section bg-dark">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image Placeholder */}
          <div className="hidden md:block">
            <div className="bg-gradient-to-br from-gold/10 to-darkGray rounded-xl p-8 border border-gold/20 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">📸</div>
                <p className="text-gray-400">Your Photo Here</p>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold mb-4">
                About <span className="text-gold">Me</span>
              </h2>
              <div className="w-16 h-1 bg-gold rounded"></div>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate web designer and developer dedicated to creating stunning, high-performance websites that help businesses and creators establish a strong online presence.
            </p>
            
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">What I Offer</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-3">
                  <span className="text-gold">✓</span>
                  <span>Custom Website Design</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-gold">✓</span>
                  <span>Website Development</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-gold">✓</span>
                  <span>Mobile Responsive Design</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-gold">✓</span>
                  <span>Website Maintenance & Support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-gold">✓</span>
                  <span>SEO Friendly & Fast Sites</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-300 italic">
              <strong>Your vision. My code. Real results.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
