import React, { useEffect , useState } from "react";
import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube ,FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
     
    const [year , setYear] = useState("") ; 

    useEffect(()=>{  
         
         
      let date = new Date() ; 
        setYear(date.getFullYear());
       
    } , [])
   
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-text-dark dark:text-text-dark text-text-light py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-xl font-semibold text-primary-green">Shubham Kushwaha</h2>

        {/* Navigation Links - Responsive */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skill" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
            { name: "Contact", id: "contact" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-primary-green text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            // { icon: <FaFacebook />, link: "https://www.facebook.com/tarun.kaushik.3511041/" },
            { icon: <FaXTwitter />, link: "https://x.com/Shubham5932" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/shubham-kushwaha-rewa17/" },
            { icon: <FaGithub  />, link: "https://github.com/SHUBHAMREWA" },

            // { icon: <FaInstagram />, link: "https://www.instagram.com/coding_.master/" },
            // { icon: <FaYoutube />, link: "https://www.youtube.com/codingmasteryt" },
            
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-primary-green transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-6">
          © {year} Shubham Kushwaha. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
