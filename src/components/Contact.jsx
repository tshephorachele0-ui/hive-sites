'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="section bg-darkGray">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Ready to take your business to the next level?
          </h2>
          <p className="text-gray-300 text-lg">
            Let's build a website that works for you.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-dark rounded-lg p-8 border border-darkGray">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-darkGray text-white px-4 py-3 rounded-lg border border-darkGray focus:border-gold focus:outline-none transition-all"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-darkGray text-white px-4 py-3 rounded-lg border border-darkGray focus:border-gold focus:outline-none transition-all"
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="6"
            className="w-full bg-darkGray text-white px-4 py-3 rounded-lg border border-darkGray focus:border-gold focus:outline-none transition-all mb-6"
          ></textarea>
          <button type="submit" className="btn-primary w-full md:w-auto">
            Send Message
          </button>
        </form>

        <div className="grid md:grid-cols-3 gap-8 mt-12 text-center">
          <div>
            <div className="text-4xl mb-2">📧</div>
            <p className="text-gray-400">hello@tshepho.com</p>
          </div>
          <div>
            <div className="text-4xl mb-2">📱</div>
            <p className="text-gray-400">+27 71 123 4567</p>
          </div>
          <div>
            <div className="text-4xl mb-2">📍</div>
            <p className="text-gray-400">Johannesburg, South Africa</p>
          </div>
        </div>
      </div>
    </section>
  )
}
