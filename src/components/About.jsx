import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm <span className="font-semibold text-blue-600">Zakaria Adow Iman</span>, a dedicated student at 
              <span className="font-semibold text-blue-600"> Garissa University</span> and 
              <span className="font-semibold text-blue-600"> Northken Technology Institution</span>.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm passionate about web development and technology. Currently pursuing my studies while building 
              practical skills in modern web technologies including React, Node.js, and Tailwind CSS.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              My goal is to become a full-stack developer who creates meaningful digital solutions that make a difference. 
              I'm constantly learning and staying updated with the latest industry trends.
            </p>
            <div className="grid md:grid-cols-2 gap-4 pt-6">
              <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md">
                <div className="text-sm text-gray-500 dark:text-gray-400">🎓 Education</div>
                <div className="font-semibold text-gray-900 dark:text-white">Garissa University</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Computer Science</div>
              </div>
              <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md">
                <div className="text-sm text-gray-500 dark:text-gray-400">🏫 Institution</div>
                <div className="font-semibold text-gray-900 dark:text-white">Northken Technology</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Web Development</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About