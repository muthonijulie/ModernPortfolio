import React from 'react';
import Portb from "../assets/portb.png";
import about from "../assets/profile.png";
import background from "../assets/bd.png";
import proj from "../assets/ecomm.png";
import proj1 from "../assets/proj.jpeg";
import proj2 from "../assets/proj2.jpeg";


function Portfolio() {
  return (
    <div className="bg-[#1a0826] text-gray-900 scroll-smooth">
    
      <nav className="bg-[#1a0826] py-4 sticky top-0 z-50">
        <ul className="flex flex-wrap justify-center space-x-4 sm:space-x-6 text-purple-300 text-xs sm:text-sm">
          {["Home", "About", "Education", "Projects", "Contacts"].map((section) => (
            <li key={section}>
              <a href={`#${section.toLowerCase()}`} className="hover:text-blue-400">
                {section}
              </a>
            </li>
          ))}
        </ul>
      </nav>

 
      <header
        id="home"
        className="relative h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="absolute inset-0 bg-[rgba(34,11,51,0.5)]"></div>
        <div className="relative z-10 text-white text-center">
          <img
            src={Portb}
            alt="Elizabeth"
            className="rounded-full object-cover w-40 h-40 sm:w-60 sm:h-60 mx-auto border-4 border-[#3a0d5e] shadow-lg"
          />
          <h1 className="text-xl sm:text-4xl font-bold mt-4">
            I'm <span className="text-yellow-400">Elizabeth</span>
            <br /> A Web Developer
          </h1>
        </div>
      </header>

     
      <section id="about" className="flex flex-col sm:flex-row justify-center items-center py-10 px-4 bg-[#1a0826] text-white">
        <div className="sm:w-1/3 mb-6 sm:mb-0">
          <img src={about} alt="About" className="object-cover w-60 h-40 mx-auto rounded-lg bg-[#3a0d5e]" />
        </div>
        <div className="sm:w-2/3 px-4 text-justify">
          <h1 className="text-lg font-semibold mb-4 text-purple-400">About Me</h1>
          <p className="text-sm leading-relaxed text-gray-300">
            My name is Elizabeth Muthoni, pursuing Bachelor of Science in Computer Science at Dedan Kimathi University of Technology.
            I have a strong interest in backend web development and have worked on several projects using different languages.
          </p>
        </div>
      </section>

    
      <section id="education" className="py-10 bg-[#220b33] text-center px-4">
        <h2 className="text-2xl font-semibold text-purple-400 mb-6">Education</h2>
        <div className="space-y-6 max-w-2xl mx-auto">
          {[
            {
              year: "2022 - Present",
              title: "Bachelor of Science in Computer Science",
              school: "Dedan Kimathi University of Technology",
            },
            {
              year: "2018 - 2021",
              school: "Loreto High School Girls Limuru",
            },
            {
              year: "2006 - 2017",
              school: "Stepping Stones Preparatory",
            },
          ].map((edu, idx) => (
            <div key={idx} className="bg-[#3a0d5e] p-4 rounded-md shadow-md border border-[#3a0d5e] text-gray-300">
              {edu.year && <p className="text-sm text-gray-400">{edu.year}</p>}
              {edu.title && <h3 className="text-lg font-bold">{edu.title}</h3>}
              <p className="text-sm">{edu.school}</p>
            </div>
          ))}
        </div>
      </section>

  
      <section id="projects" className="py-10 bg-[#1a0826] text-center px-4">
        <h2 className="text-2xl font-semibold mb-6 text-purple-400">Projects</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            {
              img: proj,
              title: "E-commerce Website",
              desc: "Clothing and Shoes Store",
              url: "https://github.com/muthonijulie/WasafiRetailers",
            },
            {
              img: proj1,
              title: "Blog App",
              desc: "Post, view, and update features.",
              url: "https://github.com/muthonijulie/DjangoAss1",
            },
            {
              img: proj2,
              title: "Employee Management System",
              desc: "Tracking employee data.",
              url: "https://github.com/muthonijulie/EmployeeManagementSystem",
            },
          ].map((project, idx) => (
            <a
              key={idx}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-82 h-82 perspective-1000 group"
            >
              <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                <div className="absolute w-full h-full bg-white shadow-lg rounded-lg flex items-center justify-center backface-hidden">
                  <img src={project.img} alt={project.title} className="w-full h-full rounded-lg object-cover" />
                </div>
                <div className="absolute w-full h-full bg-[#3a0d5e] text-white shadow-lg rounded-lg rotate-y-180 flex flex-col justify-center items-center backface-hidden p-4">
                <h1 className="text-base sm:text-lg font-semibold text-center">{project.title}</h1>
                <p className="text-xs sm:text-sm text-center mt-2">{project.desc}</p>
                <p className="text-xs sm:text-xs text-center mt-3 italic">Tap to view the project</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

     
      <section id="contacts" className="py-10 bg-[#220b33] text-center px-4 flex justify-center items-center">
        <div className="w-full max-w-lg bg-[#3a0d5e] p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-purple-300">Contact Me</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-6">
              {["First Name", "Last Name", "Email Address", "Comments"].map((label, idx) => (
                <div key={idx}>
                  <label htmlFor={label.toLowerCase().replace(" ", "-")} className="block text-sm font-medium text-purple-200">
                    {label}
                  </label>
                  {label === "Comments" ? (
                    <textarea
                      id="comments"
                      name="comments"
                      rows="4"
                      className="block w-full rounded-md bg-white px-3 py-2 text-gray-900 outline-none focus:ring-2 focus:ring-purple-500 sm:text-sm"
                    ></textarea>
                  ) : (
                    <input
                      id={label.toLowerCase().replace(" ", "-")}
                      name={label.toLowerCase().replace(" ", "-")}
                      type={label.includes("Email") ? "email" : "text"}
                      className="block w-full rounded-md bg-white px-3 py-2 text-gray-900 outline-none focus:ring-2 focus:ring-purple-500 sm:text-sm"
                    />
                  )}
                </div>
              ))}
              <div className="mt-6 flex justify-end gap-x-4">
                <button type="button" className="text-sm font-semibold text-purple-200 hover:text-white">
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-purple-500 focus:ring-2 focus:ring-purple-400"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>

      <footer className="py-4 bg-[#1a0826] text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Elizabeth Muthoni. All rights reserved.
      </footer>
    </div>
  );
}

export default Portfolio;
