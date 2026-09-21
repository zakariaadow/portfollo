import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Get In Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
              I'm always open to new opportunities, collaborations, or just a friendly chat. 
              Feel free to reach out!
            </p>
            <div className="space-y-6">
              {/* WhatsApp */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center group-hover:bg-green-600 transition-colors">
                  <span className="text-2xl group-hover:text-white transition-colors">💬</span>
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">WhatsApp</div>
                  <a 
                    href="https://wa.me/254748677930" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xl font-semibold text-gray-900 dark:text-white hover:text-green-600 transition-colors"
                  >
                    0748677930
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <span className="text-2xl group-hover:text-white transition-colors">📧</span>
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Email</div>
                  <a 
                    href="mailto:zakariaadow191@gmail.com" 
                    className="text-gray-900 dark:text-white hover:text-blue-600 transition-colors"
                  >
                    zakariaadow191@gmail.com
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-lg flex items-center justify-center group-hover:bg-pink-600 transition-colors">
                  <span className="text-2xl group-hover:text-white transition-colors">📷</span>
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Instagram</div>
                  <a 
                    href="https://instagram.com/zakariaadowiman188" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-900 dark:text-white hover:text-pink-600 transition-colors"
                  >
                    @zakariaadowiman188
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center group-hover:bg-purple-600 transition-colors">
                  <span className="text-2xl group-hover:text-white transition-colors">📍</span>
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Location</div>
                  <div className="text-gray-900 dark:text-white">Garissa / Nairobi, Kenya</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            {submitted ? (
              <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 p-8 rounded-lg text-center">
                <div className="text-5xl mb-3">✓</div>
                <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                <p>Thanks for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-5 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full px-5 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Your Message"
                    required
                    className="w-full px-5 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                  ></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all shadow-md font-semibold">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact