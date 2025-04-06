import React from 'react'
import Portb from "../assets/portb.png"
import about from "../assets/profile.png"
import background from "../assets/bd.png"
import proj from "../assets/ecomm.png"
import proj1 from "../assets/proj.jpeg"
import proj2 from "../assets/proj2.jpeg"
function Portfolio() {
  return (
         <div className="bg-[#1a0826] text-gray-900">
    
      <nav className="bg-[#1a0826]  py-4 sticky top-0 z-50">
        <ul className="flex justify-center space-x-6 text-purple-300">
          {["Home", "About", "Education", "Projects", "Contacts"].map(
            (section) => (
              <li key={section}>
                <a href={`#${section.toLowerCase()}`} className="hover:text-blue-400">
                  {section}
                </a>
              </li>
            )
          )}
        </ul>
      </nav>

    
    <header className="relative  bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${background})` }}>
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(34, 11, 51, 0.5)" }} > </div>
      <div className="relative z-10  flex flex-col items-center justify-center h-full text-white text-center">
        <h1 className="text-4xl font-bold">
           <img src={Portb} alt="Elizabeth" className="rounded-full object-cover w-60 h-60 mx-auto mt-4 border-4 border-[#3a0d5e] shadow-lg" />
          I'm <span className="text-yellow-400">Elizabeth</span>
          <br /> A Web Developer
        </h1>
      
       </div>
    </header>

     
      <section id="about" className="flex flex-wrap justify-center py-10 bg-[#1a0826]">
        <div className="w-1/3 p-4">
          <img src={about} alt="Books" className="object-cover w-60 h-40 mx-auto mt-4 rounded-lg bg-[#3a0d5e]" />
        </div>
        <div className="w-2/3 p-4 text-justify">
          <h1 className="text-lg font-semibold mb-4 text-purple-400">About Me</h1>
          <p className="text-left leading-relaxed text-gray-300">
            My name is Elizabeth Muthoni, pursuing Bachelor of Science in Computer Science at Dedan Kimathi University of Technology.
            I have a great interest in web development-Backend development and have worked on several projects using different languages.
          
            
          </p>
        </div>
      </section>
  


    
      <section id="education" className="py-7  bg-[#220b33] flex items-center justify-center">
        <div className="w-[700px] text-center">
        <h2 className="text-2lg font-semibold text-purple-400 mb-4 flex items-center justify-center mr-2">Education</h2>
         <div className="space-y-3">
      
      <div className="bg-[#3a0d5e] p-4 rounded-md text-center shadow-md border border-[#3a0d5e]">
        <p className="text-sm text-gray-400">2022 - Present</p>
        <h3 className="text-lg font-bold">Bachelor of Science in Computer Science</h3>
        <p className="text-gray-300 text-sm">Dedan Kimathi University of Technology</p>
      </div>

 <div className="bg-[#3a0d5e] p-4 rounded-md text-center shadow-md border border-[#3a0d5e]">
        <p className="text-sm text-gray-400">2018 - 2021</p>
        <p className="text-gray-300 text-sm">Loreto HighSchool Girls Limuru</p>
      </div>
 <div className="bg-[#3a0d5e] p-4 rounded-md text-center shadow-md border border-[#3a0d5e]">
        <p className="text-sm text-gray-400">2006 - 2017</p>
        <p className="text-gray-300 text-sm">Stepping Stones Preparatory</p>
      </div>
</div>
</div>
      </section>
      <section id="projects" className="py-10 text-center bg-[#1a0826] flex flex-col items-center">
  <h2 className="text-2xl font-semibold mb-6 text-purple-400">Projects</h2>


  <div className="flex flex-wrap justify-center gap-6">
    
    
    <a 
      href="https://github.com/muthonijulie/WasafiRetailers" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="relative w-72 h-72 perspective-1000 group"
    >
      <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
    
        <div className="absolute w-full h-full bg-white shadow-lg rounded-lg flex items-center justify-center backface-hidden">
          <img src={proj} alt="Project 1" className="w-full h-full rounded-lg object-cover" />
        </div>
   
        <div className="absolute w-full h-full bg-[#3a0d5e] text-white shadow-lg rounded-lg rotate-y-180 flex flex-col justify-center items-center backface-hidden p-4">
          <h1 className="text-xl font-bold text-center">E-commerce Website</h1>
          <p className="text-sm text-center">Clothing and Shoes Store</p>
          <p className="text-sm text-center mt-2">Click anywhere to view the project.</p>
        </div>
      </div>
    </a>

    
    <a 
      href="https://github.com/muthonijulie/DjangoAss1" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="relative w-72 h-72 perspective-1000 group"
    >
      <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
       
        <div className="absolute w-full h-full bg-white shadow-lg rounded-lg flex items-center justify-center backface-hidden">
          <img src={proj1} alt="Project 2" className="w-full h-full rounded-lg object-cover" />
        </div>
       
        <div className="absolute w-full h-full bg-[#3a0d5e] text-white shadow-lg rounded-lg rotate-y-180 flex flex-col justify-center items-center backface-hidden p-4">
          <h1 className="text-xl font-bold text-center">Blog app</h1>
          <p className="text-sm text-center">Blog app with post, view, and update features.</p>
          <p className="text-sm text-center mt-2">Click anywhere to view the project.</p>
        </div>
      </div>
    </a>

 
    <a 
      href="https://github.com/muthonijulie/EmployeeManagementSystem" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="relative w-72 h-72 perspective-1000 group"
    >
      <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
      
        <div className="absolute w-full h-full bg-white shadow-lg rounded-lg flex items-center justify-center backface-hidden">
          <img src={proj2} alt="Project 3" className="w-full h-full rounded-lg object-cover" />
        </div>
      
        <div className="absolute w-full h-full bg-[#3a0d5e] text-white shadow-lg rounded-lg rotate-y-180 flex flex-col justify-center items-center backface-hidden p-4">
          <h1 className="text-xl font-bold text-center">Employee management system</h1>
          <p className="text-sm text-center">Employee management system for tracking employee data.</p>
          <p className="text-sm text-center mt-2">Click anywhere to view the project.</p>
        </div>
      </div>
    </a>

  </div>
</section>


    <section id="contacts" className="py-10 bg-[#220b33] text-center flex justify-center items-center min-h-screen">
  <div className="w-full max-w-lg bg-[#3a0d5e] p-8 rounded-lg shadow-lg">
    <h2 className="text-2xl font-semibold mb-6 text-purple-300">Contact Me</h2>
    <form>
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label htmlFor="first-name" className="block text-sm font-medium text-purple-200">
              First Name
            </label>
            <input
              id="first-name"
              name="first-name"
              type="text"
              autoComplete="given-name"
              className="block w-full rounded-md bg-white px-3 py-2 text-gray-900 outline-none focus:ring-2 focus:ring-purple-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="last-name" className="block text-sm font-medium text-purple-200">
              Last Name
            </label>
            <input
              id="last-name"
              name="last-name"
              type="text"
              autoComplete="family-name"
              className="block w-full rounded-md bg-white px-3 py-2 text-gray-900 outline-none focus:ring-2 focus:ring-purple-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-purple-200">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="block w-full rounded-md bg-white px-3 py-2 text-gray-900 outline-none focus:ring-2 focus:ring-purple-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="comments" className="block text-sm font-medium text-purple-200">
              Comments
            </label>
            <textarea
              id="comments"
              name="comments"
              rows="4"
              className="block w-full rounded-md bg-white px-3 py-2 text-gray-900 outline-none focus:ring-2 focus:ring-purple-500 sm:text-sm"
            ></textarea>
          </div>
        </div>

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



      <footer className="text-center py-4 bg-[#1a0826] text-white">
        <p>Email: <a href="mailto:bethjulius08@gmail.com" className="text-gray-300">bethjulius08@gmail.com</a></p>
        <p className="text-gray-300">Mobile: 0797565461</p>
        <p>&copy; 2024 Elizabeth Portfolio</p>
      </footer>
      
    </div>
  )
}

export default Portfolio
