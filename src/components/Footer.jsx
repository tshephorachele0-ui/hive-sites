'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark border-t border-darkGray">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">Tshepho Rachele</h3>
            <p className="text-gray-400 text-sm">
              I design and build high-performing websites that help businesses and creators succeed online.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#services" className="hover:text-gold transition-all">Web Design</a></li>
              <li><a href="#services" className="hover:text-gold transition-all">Web Development</a></li>
              <li><a href="#services" className="hover:text-gold transition-all">E-Commerce</a></li>
              <li><a href="#services" className="hover:text-gold transition-all">Maintenance</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#home" className="hover:text-gold transition-all">Home</a></li>
              <li><a href="#about" className="hover:text-gold transition-all">About</a></li>
              <li><a href="#portfolio" className="hover:text-gold transition-all">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-gold transition-all">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Follow Me</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gold hover:text-yellow-400 transition-all">Twitter</a>
              <a href="#" className="text-gold hover:text-yellow-400 transition-all">LinkedIn</a>
              <a href="#" className="text-gold hover:text-yellow-400 transition-all">GitHub</a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-darkGray pt-8 text-center text-gray-400 text-sm">
          <p>© {currentYear} Tshepho Rachele. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
