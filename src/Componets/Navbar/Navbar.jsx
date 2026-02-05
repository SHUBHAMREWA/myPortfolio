
import { FaGithub, FaLinkedin, } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiMenu, FiX } from "react-icons/fi";
import { useEffect, useState } from "react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const Navbar = () => {

    const [IsOpen, setIsOpen] = useState(false)
    const [activesection, setActivesection] = useState("");
    const [scroll, setScroll] = useState(false) ;
   

   //Check  scroll &  change navbar background 

   useEffect(()=>{
    
    const handleScroll =()=>{
            setScroll(window.scrollY < 50)
    }

         window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   } , [] )


    // scroll Function 
    const handleMenuItemClick = (id) => {
        setActivesection(id)
        setIsOpen(false)
    }

    const MenuItems = [
        { id: "about", label: "About" },
        { id: "skill", label: "Skills" },
        // { id: "experience", label: "Experience" },
        // { id: "work", label: "Work" },
        { id: "projects", label: "Projects" },
        { id: "education", label: "Education" },
        { id: "contact", label: "Contact" },
        
    
    ]


    return (

        <nav className={`fixed top-0 w-full flex z-50 transition duration-300 px-4 md:px-[7vw] 
              dark:bg-bg-dark bg-bg-light bg-opacity-90  backdrop-blur-md shadow-md`}>

            <div      className="text-text-dark dark:text-text-dark text-text-light w-full px-0 md:px-4 py-5 gap-4 flex justify-between  items-center">
                {/* name */}

                <div 
                onClick={()=>window.scrollTo({ top: 0, behavior: "smooth" })} 
                 className="text-lg  font-semibold cursor-pointer">

                    <span className="text-primary-green">&lt;</span>
                    <span className="text-text-dark dark:text-text-dark text-text-light">Shubham</span>
                    <span className="text-primary-green">/</span>
                    <span className="text-text-dark dark:text-text-dark text-text-light">Kushwaha</span>
                    <span className="text-primary-green">&gt;</span>

                </div>

                {/* desktop Menu */}

                <ul className="hidden md:flex text-gray-400 dark:text-gray-300 gap-4 ">

                    {
                        MenuItems.map((el, index) => {
                            return <li
                                className={`cursor-pointer hover:text-primary-green  ${activesection == el.id ? "text-primary-green" : ""
                                    }`}
                                key={index + Math.random()}>
                                    <a href={`#${el.id}`}>
                                <button 
                                    
                                    onClick={() => handleMenuItemClick(el.id)}
                                >
                                    {el.label}
                                </button>
                               </a>
                            </li>
                        })
                    }
                </ul>

                {/* social Media Icons */}

                <div className="hidden md:flex space-x-4 items-center">
                    <ThemeToggle />

                    <a href="https://github.com/SHUBHAMREWA"
                        target="_blank" 
                        rel="no prefer"
                        className="text-gray-400 dark:text-gray-300 hover:text-primary-green"
                    >
                        <FaGithub size={24} />
                    </a>


                    <a href="https://www.linkedin.com/in/shubham-kushwaha-rewa17/"
                        rel="no prefer"
                        className="text-gray-400 dark:text-gray-300 hover:text-primary-green"
                        target="_blank"
                    >
                        <FaLinkedin size={24} />
                    </a>


                    <a  href="https://x.com/Shubham5932"
                        rel="no prefer"
                        className="text-gray-400 dark:text-gray-300 hover:text-primary-green"
                        target="_blank"
                    >
                        <FaXTwitter size={24} />
                    </a>

                </div>

                {/* Mobile Menu Icons */}
                <div className="md:hidden flex items-center gap-3">
                    <ThemeToggle />
                    {
                        IsOpen ?
                            <FiX className="text-primary-green cursor-pointer"
                                size={24}
                                onClick={() => setIsOpen(false)}
                            />
                            :
                            <FiMenu className="text-primary-green cursor-pointer"
                                size={24}
                                onClick={() => setIsOpen(true)}
                            />
                    }

                </div>
            </div>

            {/* menu items for Mobile Screen */} 
            {
                IsOpen && (
                     <div className="absolute pb-3 pt-3 flex flex-col gap-3 top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-bg-light dark:bg-bg-dark bg-opacity-100  rounded-lg shadow-lg md:hidden border border-primary-green">
            
                       <ul className="flex flex-col text-center item-center space-y-4 text-gray-600 dark:text-gray-300">  
                           
                            {
                                 MenuItems.map((el, index)=>{ 
                                    console.log(el)
                                    return <li className = {` hover:text-primary-green font-semibold cursor-pointer
                                         ${activesection == el.id ? "text-primary-green" : ""} `} key={el.id} >

                                     <a href={"#"+el.id}>
                                        <button 
                                        onClick={()=>handleMenuItemClick(el.id)}>
                                       {el.label}
                                        </button>

                                      </a>   
                                    </li>
                                     
                                 })
                            }

                       </ul>

                       <div className ="flex space-x-4 justify-center">
 
                  <a href="https://github.com/SHUBHAMREWA"
                        target="_blank" 
                        rel="no prefer"
                        className="text-gray-600 dark:text-gray-300 hover:text-primary-green"
                    >
                        <FaGithub size={24} />
                    </a>


                    <a href="https://www.linkedin.com/in/shubham-kushwaha-rewa17/"
                        rel="no prefer"
                        className="text-gray-600 dark:text-gray-300 hover:text-primary-green"
                        target="_blank"
                    >
                        <FaLinkedin size={24} />
                    </a>


                    <a  href="https://x.com/Shubham5932"
                        rel="no prefer"
                        className="text-gray-600 dark:text-gray-300 hover:text-primary-green"
                        target="_blank"
                    >
                        <FaXTwitter size={24} />
                    </a>

                       </div>

                     </div>
                )

            }

        </nav>
    )

}

export default Navbar;