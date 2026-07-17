'use client'

const projects = [
  {
    title: 'Project One',
    category: 'Web Design',
    description: 'A stunning website for a modern brand',
    image: '🌐'
  },
  {
    title: 'E-Commerce Store',
    category: 'E-Commerce',
    description: 'High-converting online store',
    image: '🛍️'
  },
  {
    title: 'Corporate Site',
    category: 'Development',
    description: 'Enterprise-level website',
    image: '🏢'
  },
  {
    title: 'Creative Portfolio',
    category: 'Design',
    description: 'Showcase of creative work',
    image: '🎨'
  }
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="section bg-dark">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-gold font-semibold mb-2">PORTFOLIO</p>
          <h2 className="text-4xl font-bold mb-4">
            Websites We're <span className="text-gold">Proud Of</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Check out some of my latest projects and see what I can create for you
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-darkGray rounded-lg overflow-hidden border border-darkGray hover:border-gold transition-all"
            >
              <div className="bg-gradient-to-br from-gold/20 to-darkGray h-64 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                {project.image}
              </div>
              <div className="p-6">
                <p className="text-gold text-sm font-semibold mb-2">{project.category}</p>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <a href="#" className="text-gold hover:text-yellow-400 font-semibold transition-all">
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
