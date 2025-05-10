import React, { useState, useEffect, useRef } from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiTailwindcss, SiExpress, SiPhp } from "react-icons/si";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const aboutRef = useRef(null);
  const [activeTab, setActiveTab] = useState("all");
  const [skills] = useState([
    { name: "React", level: 90, icon: <FaReact className="w-12 h-12" />, color: "text-blue-500" },
    { name: "JavaScript", level: 85, icon: <SiJavascript className="w-12 h-12" />, color: "text-yellow-400" },
    { name: "Node.js", level: 80, icon: <FaNodeJs className="w-12 h-12" />, color: "text-green-500" },
    { name: "MongoDB", level: 75, icon: <SiMongodb className="w-12 h-12" />, color: "text-green-600" },
    { name: "HTML5", level: 95, icon: <FaHtml5 className="w-12 h-12" />, color: "text-orange-500" },
    { name: "CSS3", level: 85, icon: <FaCss3Alt className="w-12 h-12" />, color: "text-blue-400" },
    { name: "TailwindCSS", level: 80, icon: <SiTailwindcss className="w-12 h-12" />, color: "text-cyan-400" },
    { name: "Express.js", level: 70, icon: <SiExpress className="w-12 h-12" />, color: "text-gray-600" },
    { name: "PHP", level: 65, icon: <SiPhp className="w-12 h-12" />, color: "text-purple-500" },
    { name: "Git", level: 90, icon: <FaGitAlt className="w-12 h-12" />, color: "text-orange-600" }
  ]);

  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show/hide back to top button
      setShowBackToTop(window.scrollY > 500);

      // Trigger animation when About section is in view
      if (aboutRef.current) {
        const rect = aboutRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.75 && !animated) {
          setAnimated(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [animated]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    setAnimated(true);
  }, []);

  // Add useEffect for dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const projects = [
    {
      id: 1,
      title: "Mobile Banking App",
      category: "mobile",
      image: "/api/placeholder/600/400",
      description: "Redesigned user experience for a leading banking application"
    },
    {
      id: 2,
      title: "E-commerce Website",
      category: "web",
      image: "/api/placeholder/600/400",
      description: "Full-scale design for an online fashion retailer"
    },
    {
      id: 3,
      title: "Fitness Dashboard",
      category: "web",
      image: "/api/placeholder/600/400",
      description: "Interactive dashboard for tracking workout progress"
    },
    {
      id: 4,
      title: "Food Delivery App",
      category: "mobile",
      image: "/api/placeholder/600/400",
      description: "UI/UX design for a food delivery service"
    }
  ];

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`font-sans transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Dark Mode Toggle */}
      <button 
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 z-50 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
      >
        {darkMode ? (
          <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        )}
      </button>

      {/* Hero Section - Modified */}
      <div className="min-h-screen bg-white flex items-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 py-12 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
              Frontend
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500">
                Developer
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Building modern web experiences with React and JavaScript.
              Turning ideas into interactive realities.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors">
                View My Work
              </button>
              <button 
                onClick={scrollToContact}
                className="border-2 border-blue-600 px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-50 transition-colors"
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gray-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-gray-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* About Section - Modified */}
      <div ref={aboutRef} className="py-20 px-8 bg-gray-100 dark:bg-gray-800" id="about">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center dark:text-white">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Modified image container to be circular */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full animate-pulse"></div>
                <img 
                  src="https://scontent.fmnl17-8.fna.fbcdn.net/v/t1.15752-9/494573394_7891304987659960_1358431570567970216_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=0024fc&_nc_ohc=Hs5RuB_jeToQ7kNvwGfoRLV&_nc_oc=AdnRO3-mA6nExttS_NULGQHU1mIIBnTRA1S4SilMmNL2_-iMJgCxC_dS42IXFFXSwVA&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fmnl17-8.fna&oh=03_Q7cD2QHXyuC9MEQXQ1GgXr3r9iL9DfGjEZ5DYKXwx4Kba4GlSw&oe=68466C45" 
                  alt="Your Name" 
                  className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] rounded-full object-cover object-top"
                />
              </div>
            </div>
            <div className="space-y-6">
              <div className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg">
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p className="text-lg leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="py-20 px-8 bg-white" id="skills">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Technologies I Use</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className={`flex flex-col items-center p-6 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${skill.color} bg-opacity-10 hover:bg-opacity-20`}
              >
                <div className={`text-gray-800 mb-4 ${skill.color} text-opacity-80`}>
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 px-8 bg-gray-100" id="services">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">My Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-gray-800 rounded-lg flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">UI Design</h3>
              <p className="text-gray-600">
                Creating beautiful, responsive interfaces that align with brand identity and meet user needs.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-gray-800 rounded-lg flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">UX Research</h3>
              <p className="text-gray-600">
                Conducting user research to understand behaviors, needs, and motivations through observation and feedback.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-gray-800 rounded-lg flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Prototyping</h3>
              <p className="text-gray-600">
                Building interactive prototypes to test concepts, validate ideas, and refine the user experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-20 px-8 bg-gray-100" id="contact">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Get In Touch</h2>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-gray-800 rounded-lg flex items-center justify-center mr-4">
                    <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <span className="text-gray-600">mike@example.com</span>
                </div>
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-gray-800 rounded-lg flex items-center justify-center mr-4">
                    <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <span className="text-gray-600">(123) 456-7890</span>
                </div>
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-gray-800 rounded-lg flex items-center justify-center mr-4">
                    <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <span className="text-gray-600">San Francisco, CA</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-bold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a href="#" className="h-10 w-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                    </svg>
                  </a>
                  <a href="#" className="h-10 w-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"></path>
                    </svg>
                  </a>
                  <a href="#" className="h-10 w-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"></path>
                    </svg>
                  </a>
                  <a href="#" className="h-10 w-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.441 16.892c-2.102.144-6.784.144-8.883 0-2.276-.156-2.541-1.27-2.558-4.892.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0 2.277.156 2.541 1.27 2.559 4.892-.018 3.629-.285 4.736-2.559 4.892zm-6.441-7.234l4.917 2.338-4.917 2.346v-4.684z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="flex-1">
              <form className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    type="text"
                    id="name"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    type="email"
                    id="email"
                    placeholder="Your Email"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    type="text"
                    id="subject"
                    placeholder="Subject"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400 h-32"
                    id="message"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button className="w-full bg-gray-800 text-white py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-4 bg-blue-600 text-white rounded-full shadow-lg transition-all duration-300 hover:bg-blue-700 ${
          showBackToTop ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="font-bold text-xl">Mike</span>
            <p className="text-gray-400 text-sm mt-1">UX/UI Designer</p>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-center md:text-left">
            <a href="#about" className="hover:text-gray-300 transition-colors">About</a>
            <a href="#portfolio" className="hover:text-gray-300 transition-colors">Portfolio</a>
            <a href="#services" className="hover:text-gray-300 transition-colors">Services</a>
            <a href="#testimonials" className="hover:text-gray-300 transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-gray-300 transition-colors">Contact</a>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-gray-400 text-sm">© 2025 Mike. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;