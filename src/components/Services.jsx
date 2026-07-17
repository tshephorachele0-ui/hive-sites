'use client'

const services = [
  {
    icon: '🎨',
    title: 'Web Design',
    description: 'Beautiful, responsive websites that represent your brand perfectly.'
  },
  {
    icon: '🛒',
    title: 'E-Commerce',
    description: 'Online stores designed to convert visitors into loyal customers.'
  },
  {
    icon: '💻',
    title: 'Web Development',
    description: 'Fast, secure and scalable websites built with modern technologies.'
  },
  {
    icon: '📊',
    title: 'SEO & Performance',
    description: 'Optimized websites that rank higher and load faster.'
  },
  {
    icon: '🔧',
    title: 'Maintenance',
    description: 'Ongoing support and maintenance to keep your website perfect.'
  },
  {
    icon: '🚀',
    title: 'Launch Support',
    description: 'Complete assistance from development to live deployment.'
  }
]

export default function Services() {
  return (
    <section id="services" className="section bg-darkGray">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-gold font-semibold mb-2">SERVICES</p>
          <h2 className="text-4xl font-bold mb-4">
            Services That Help You <span className="text-gold">Grow</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            I provide comprehensive web solutions to help your business thrive online
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-dark rounded-lg p-8 border border-darkGray hover:border-gold transition-all hover:shadow-lg hover:shadow-gold/20"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <a href="#contact" className="text-gold hover:text-yellow-400 font-semibold transition-all">
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
