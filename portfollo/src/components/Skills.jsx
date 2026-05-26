import React from 'react'

const Skills = () => {
  const skills = [
    { name: 'HTML/CSS', level: 85, color: '#E34F26' },
    { name: 'JavaScript', level: 75, color: '#F7DF1E' },
    { name: 'React', level: 70, color: '#61DAFB' },
    { name: 'Tailwind CSS', level: 80, color: '#06B6D4' },
    { name: 'Python', level: 65, color: '#3776AB' },
    { name: 'Git & GitHub', level: 75, color: '#F05032' },
  ]

  const stats = [
    { value: '10+', label: 'Projects Completed', icon: '🚀' },
    { value: '2+', label: 'Years Learning', icon: '📚' },
    { value: '5+', label: 'Technologies', icon: '💻' },
    { value: '24/7', label: 'Available for Work', icon: '⭐' },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          My Skills
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg text-center shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">{stat.value}</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-gray-900 dark:text-white">{skill.name}</span>
                <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <div 
                  className="h-3 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%`, backgroundColor: skill.color }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills