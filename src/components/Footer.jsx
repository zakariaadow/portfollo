import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-3 text-blue-400">ZAKARIA ADOW</h3>
            <p className="text-gray-400 text-sm">
              Student at Garissa University & Northken Technology Institution.
              Passionate about web development and technology.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-blue-400 transition-colors">About</Link></li>
              <li><Link to="/skills" className="text-gray-400 hover:text-blue-400 transition-colors">Skills</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-blue-400 transition-colors">Projects</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                💬 <a href="https://wa.me/254748677930" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">0748677930 (WhatsApp)</a>
              </li>
              <li className="flex items-center gap-2">
                📧 <a href="mailto:zakariaadow191@gmail.com" className="hover:text-blue-400 transition-colors">zakariaadow191@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                📷 <a href="https://instagram.com/zakariaadowiman188" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">@zakariaadowiman188</a>
              </li>
              <li className="flex items-center gap-2">📍 Garissa / Nairobi, Kenya</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} ZAKARIA ADOW IMAN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer