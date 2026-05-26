import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="text-center px-4 max-w-4xl mx-auto">
        {/* Profile Photo */}
        <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl">
          <img 
            src="/images/Zacki.jpeg" 
            alt="Zakaria Adow Iman" 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://ui-avatars.com/api/?name=Zakaria+Adow+Iman&background=3b82f6&color=fff&size=128'
            }}
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          Hi, I'm <span className="text-blue-600 dark:text-blue-400">ZAKARIA ADOW IMAN</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
          Student | Web Developer | Tech Enthusiast
        </p>
        <div className="flex justify-center gap-4 mb-8">
          <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm">Garissa University</span>
          <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm">Northken Technology Institution</span>
        </div>
        <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Passionate about creating innovative web solutions and constantly learning new technologies.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all hover:scale-105 shadow-lg">
              Contact Me
            </button>
          </Link>
          <button className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-all">
            Download CV
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero