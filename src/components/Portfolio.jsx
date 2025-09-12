import React, { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, Github, ExternalLink, ChevronDown, Code, Database, Shield, Brain, Users, MessageSquare, Wrench, Lightbulb, MapPin, Calendar, Award, User, BookOpen, Briefcase, Star } from 'lucide-react';
import profilePhoto from '/src/assets/profile.jpg';
import profilePng from '/src/assets/profile.png';
import elimupng from '/src/assets/elimututs.png';
import werentImg from '/src/assets/werent.png';

function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Image paths - Add your actual image paths here
  const images = {
    profilePhoto: profilePhoto, 
    projectImages: {
      kazilink: "public/assets/kazilink.png",
      werent: werentImg,
      elimututs: elimupng,
      wasafiret: "/images/projects/wasafiret.jpg",
      employee: "/images/projects/employee.jpg",
      blog: "/images/projects/blog.jpg"
      
    },
    aboutImage:profilePng,
  };

  const skills = [
    { name: 'JavaScript', icon: Code, level: 50 },
    { name: 'Python', icon: Code, level: 60 },
    { name: 'Java', icon: Code, level: 40 },
    { name: 'PHP', icon: Code, level: 30 },
    { name: 'Database Systems', icon: Database, level: 65 },
    { name: 'Cybersecurity', icon: Shield, level: 60 },
    { name: 'Machine Learning', icon: Brain, level: 50 },
    { name: 'API Development', icon: Wrench, level: 50 }
  ];

  const projects = [
    {
      title: "KaziLink System",
      desc: "USSD-based job connection platform using Africa's Talking API",
      tech: ["Python", "FastAPI", "USSD", "API Integration"],
      url: "https://github.com/Knelso/ussd_job.git",
      role: "Team Member",
      highlights: ["Technical documentation", "Backend development", "Live deployment"],
      image: images.projectImages.kazilink
    },
    {
      title: "WeRent System",
      desc: "Full-stack property rental platform with booking and management",
      tech: ["JavaScript", "RESTful API", "Full-stack"],
      url: "https://www.werentonline.com/",
      role: "Full-Stack Developer",
      highlights: ["Backend optimization", "API endpoints", "UI/UX enhancement"],
      image: images.projectImages.werent
    },
    {
      title: "ElimuTuts System",
      desc: "Comprehensive education platform with courses and dashboards",
      tech: ["MERN Stack", "MongoDB", "React", "Node.js"],
      url: "https://elimu-tuts.vercel.app/",
      role: "Team Member",
      highlights: ["Course management", "Dashboard development", "Assignment system"],
      image: images.projectImages.elimututs
    },
    {
      title: "WasafiRet E-commerce",
      desc: "Django-based e-commerce platform with full shopping features",
      tech: ["Django", "Python", "Payment Processing"],
      url: "https://github.com/muthonijulie/WasafiRetailers",
      role: "Team Member",
      highlights: ["Product listing", "Cart functionality", "Payment integration"],
      image: images.projectImages.wasafiret
    },
    {
      title: "Employee Management System",
      desc: "HR tool with interactive UI and advanced JavaScript features",
      tech: ["JavaScript", "HTML/CSS", "UI/UX"],
      url: "https://github.com/muthonijulie/EmployeeManagementSystem",
      role: "Team Lead",
      highlights: ["Team leadership", "UI interactivity", "HR functionality"],
      image: images.projectImages.employee
    },
    {
      title: "Blog Platform",
      desc: "Content management system with user posts and admin controls",
      tech: ["Django", "Python", "CMS"],
      url: "https://github.com/muthonijulie/DjangoAss1",
      role: "Developer",
      highlights: ["Content management", "Admin controls", "Dynamic rendering"],
      image: images.projectImages.blog
    }
  ];

  const certifications = [
    "CCNA 1 Networking Certification",
    "Portswigger Web Security Certification",
    "Postman API Fundamentals Student Expert",
    "Python-Django Course Completion",
    "CyberTalents Linux Basics",
    "Power Learn Project - Software Development",
    "Cyber Shujaa - AI and Data Science",
    "Global Mentorship Initiative - Mentee"
  ];

  const experience = [
    {
      company: "Tana Water Works Development Agency",
      role: "Computer Scientist Attachee",
      period: "February 2025 - April 2025",
      responsibilities: [
        "Networking and ICT technical support",
        "Enterprise Resource Planning implementation",
        "System enhancement according to agency needs"
      ]
    },
    {
      company:"Power Learn Project",
      role:"Volunteer",
      period:"July 2025 -October 2025",
      responsibilities:[
        "Tutor learners on project development",
        "Assist in supporting learners",
        "Participate in events and workshops",
      ]

    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-violet-900 text-white min-h-screen w-full overflow-x-hidden">
      {/* Enhanced Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Elizabeth Muthoni
            </div>
            <ul className="hidden md:flex space-x-8">
              {["Home", "About", "Skills", "Experience", "Projects", "Contact"].map((section) => (
                <li key={section}>
                  <a 
                    href={`#${section.toLowerCase()}`} 
                    className={`transition-colors duration-300 hover:text-purple-400 ${
                      activeSection === section.toLowerCase() ? 'text-purple-400' : 'text-gray-300'
                    }`}
                  >
                    {section}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex w-full items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            >
              <div className="w-2 h-2 bg-purple-400 rounded-full opacity-60"></div>
            </div>
          ))}
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="mb-8 relative">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-purple-600 to-pink-600 p-1 animate-pulse">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img 
                  src={images.profilePhoto} 
                  alt="Elizabeth Muthoni" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to icon if image fails to load
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full bg-gray-300 flex items-center justify-center" style={{display: 'none'}}>
                  <User size={80} className="text-gray-600" />
                </div>
              </div>
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 animate-ping opacity-20"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
            Elizabeth Muthoni
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-gray-300">
            Computer Science Student & Software Developer
          </p>
          <p className="text-lg text-purple-300 mb-8 max-w-2xl mx-auto">
            Passionate about innovative technology solutions, backend development, and contributing to meaningful projects that drive technological advancement.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="mailto:bethjulius08@gmail.com" className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full transition-colors">
              <Mail size={20} /> Contact Me
            </a>
            <a href="https://www.linkedin.com/in/elizabeth-julius-2b27ab347" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-purple-600 hover:bg-purple-600 px-6 py-3 rounded-full transition-colors">
              <Linkedin size={20} /> LinkedIn
            </a>
          </div>
          
          <div className="animate-bounce">
            <ChevronDown size={32} className="mx-auto text-purple-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black/30">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm Elizabeth Muthoni, a dedicated Computer Science student at Dedan Kimathi University of Technology 
                with a strong foundation in software development, networking, and database systems.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My expertise spans multiple programming languages including JavaScript, Python, Java, and PHP. 
                I'm particularly passionate about backend development, cybersecurity, and machine learning.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Through various projects and professional experiences, I've developed strong problem-solving skills 
                and a collaborative approach to technology development.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center gap-2 text-purple-300">
                  <MapPin size={20} />
                  <span>Nairobi, Kenya</span>
                </div>
                <div className="flex items-center gap-2 text-purple-300">
                  <Calendar size={20} />
                  <span>Available for Opportunities</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-8 rounded-2xl border border-purple-500/20">
              <h3 className="text-2xl font-bold mb-6 text-purple-300">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-300">Education:</span>
                  <span className="text-purple-300">BSc Computer Science</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">University:</span>
                  <span className="text-purple-300">Dedan Kimathi University</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Focus:</span>
                  <span className="text-purple-300">Backend Development</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Languages:</span>
                  <span className="text-purple-300">English, Swahili</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {skills.map((skill, index) => (
              <div key={skill.name} className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-3 mb-4">
                  <skill.icon className="text-purple-400" size={24} />
                  <h3 className="font-semibold text-white">{skill.name}</h3>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-400 mt-2">{skill.level}% Proficiency</p>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-8 rounded-2xl border border-purple-500/20">
            <h3 className="text-2xl font-bold mb-6 text-purple-300 flex items-center gap-2">
              <Award size={24} />
              Certifications & Training
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-black/20 rounded-lg">
                  <Star size={16} className="text-purple-400 flex-shrink-0" />
                  <span className="text-gray-300">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-black/30">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
          </div>
          
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-8 rounded-xl border border-purple-500/20">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-purple-300">{exp.role}</h3>
                    <p className="text-xl text-gray-300">{exp.company}</p>
                  </div>
                  <div className="text-purple-400 font-semibold">{exp.period}</div>
                </div>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-300">
                      <ChevronDown size={16} className="text-purple-400 mt-1 flex-shrink-0" />
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            
           
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105">
                {/* Project Image */}
                <div className="h-48 bg-gray-700 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback to gradient background if image fails
                      e.target.style.display = 'none';
                      e.target.parentElement.style.background = 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)';
                    }}
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>
                    
                  </div>
                  
                  <p className="text-gray-300 mb-4">{project.desc}</p>
                  
                  <div className="mb-4">
                    <p className="text-sm text-purple-300 font-semibold mb-2">Role: {project.role}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-purple-600/20 text-purple-300 rounded-full text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-purple-300 mb-2">Key Highlights:</h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-start gap-1">
                          <ChevronDown size={12} className="text-purple-400 mt-1 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-colors text-sm font-semibold"
                  >
                    View Project <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-4"></div>
            <p className="text-gray-300 text-lg">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-8 rounded-xl border border-purple-500/20">
              <h3 className="text-2xl font-bold mb-6 text-purple-300">Contact Information</h3>
              <div className="space-y-4">
                <a href="mailto:bethjulius08@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-purple-300 transition-colors">
                  <Mail size={20} className="text-purple-400" />
                  bethjulius08@gmail.com
                </a>
                <a href="tel:+254797565461" className="flex items-center gap-3 text-gray-300 hover:text-purple-300 transition-colors">
                  <Phone size={20} className="text-purple-400" />
                  +254 797 565 461
                </a>
                <a href="https://www.linkedin.com/in/elizabeth-julius-2b27ab347" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-purple-300 transition-colors">
                  <Linkedin size={20} className="text-purple-400" />
                  LinkedIn Profile
                </a>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-8 rounded-xl border border-purple-500/20">
              <h3 className="text-2xl font-bold mb-6 text-purple-300">Let's Connect</h3>
              <div className="space-y-6">
                <p className="text-gray-300">
                  I'm currently seeking opportunities in software development, particularly in backend development, 
                  API design, and full-stack projects. I'm also open to internships and collaborative projects.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Briefcase size={20} className="text-purple-400" />
                    <span>Open to full-time opportunities</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Users size={20} className="text-purple-400" />
                    <span>Available for collaborations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black/50 border-t border-purple-500/20">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Elizabeth Muthoni. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Built with passion for technology and innovation
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Portfolio;