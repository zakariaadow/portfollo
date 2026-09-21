import React from 'react'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Zacks Business Online',
      description: 'E-commerce platform based in Garissa, Kenya selling premium smartphones including iPhone 15 Pro Max (KSh 250,000), Samsung Galaxy S24 Ultra (KSh 230,000), Google Pixel 8 Pro (KSh 180,000), and Xiaomi 13 Pro (KSh 120,000). Features real-time stock status and secure checkout.',
      tech: ['React', 'HTML', 'CSS', 'JavaScript'],
      image: '/images/zacks businessonline.jpg',
      demoLink: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Zacks Real Estate',
      description: 'Property listing platform for finding dream homes in Garissa. Buy or rent properties in Bula Sigaray, Bula Madina, Bula Punda, and Bula Hagar. Features property listings, user dashboard, and property filtering.',
      tech: ['React', 'Vite', 'Tailwind CSS', 'JavaScript'],
      image: '/images/zacks realestate.jpg',
      demoLink: 'https://estate-app-ucg6.vercel.app/',
      featured: true
    },
    {
      id: 3,
      title: 'My Project',
      description: 'Personal project showcasing modern web development skills and creative solutions.',
      tech: ['React', 'HTML', 'CSS', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600',
      demoLink: '#',
      featured: false
    },
    {
      id: 4,
      title: 'My Market App - HIILDUMAR Beauty Hair',
      description: 'E-commerce platform for 100% pure, organic hair oils. Features include product showcase, customer testimonials, and online shopping. Serves 5000+ happy customers with 4.9★ rating and 24/7 customer support.',
      tech: ['React', 'HTML', 'CSS', 'JavaScript'],
      image: '/images/my-market-app.jpg',
      demoLink: 'https://my-market-app-pearl.vercel.app/',
      featured: false
    },
    {
      id: 5,
      title: 'GAWASCO Management System',
      description: 'Water services management system for Garissa Water and Sewerage Company. Handles customer records, billing, meter readings, and service requests with an admin dashboard.',
      tech: ['React', 'Tailwind CSS', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600',
      demoLink: 'https://gawasco-management-system-2fbh.vercel.app/',
      featured: false
    },
    {
      id: 6,
      title: 'Somali National University System',
      description: 'University management platform for Somali National University. Features student registration, course management, results, and administrative dashboards.',
      tech: ['React', 'Tailwind CSS', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600',
      demoLink: 'https://somali-national-university-flame.vercel.app/',
      featured: false
    },
    {
      id: 7,
      title: 'LMS App',
      description: 'Learning Management System for online courses. Students can enroll, track lessons, submit assignments, and instructors manage content through an admin panel.',
      tech: ['React', 'Tailwind CSS', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600',
      demoLink: 'https://lms-app-eta-blush.vercel.app/',
      featured: false
    },
    {
      id: 8,
      title: 'Urban Chic Beauty Salon',
      description: 'Beauty salon booking and showcase platform. Features service listings, appointment booking, gallery, and customer testimonials for a modern salon experience.',
      tech: ['React', 'Tailwind CSS', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600',
      demoLink: 'https://urban-chic-boutiq-real-estate-s-projects1.vercel.app/',
      featured: false
    }
  ]

  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          My Projects
        </h2>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
              Featured Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </>
        )}

        {/* All Projects */}
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
          All Projects
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

// Project Card Component
const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        {project.featured && (
          <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
            Featured
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
          >
            Live Demo →
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projects