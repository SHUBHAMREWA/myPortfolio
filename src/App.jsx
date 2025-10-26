

import About from "./Componets/About/About"; ;
import Contact from "./Componets/Contact/Contact";
import Education from "./Componets/Education/Education"; 
import Experience from "./Componets/Experience/Experience";
import Footer from "./Componets/Footer/Footer"; 
import Navbar from "./Componets/Navbar/Navbar";
import Skill from "./Componets/Skills/Skill";
import Work from "./Componets/Work/Work";
import BlurBlob from "./BlurBlob.jsx";
import { useTheme } from "./context/ThemeContext";

const App = ()=>{
  const { isDarkMode } = useTheme();
      
  return (

    <>
    <div className={isDarkMode ? "dark" : ""}>
    <div className="bg-bg-dark dark:bg-bg-dark bg-bg-light min-h-screen transition-colors duration-300">
         
         <BlurBlob 
         size = {{width : "30%" , height : "40%"}}
         position={{top :" 35%" , left : "20%"}} />

      <div className="inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[linear-gradient(to_right,#00ff8820_1px,transparent_1px),linear-gradient(to_bottom,#00ff8820_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>


           <div className="ralative pt-20">
             <Navbar/>
             <About/>
             <Skill/>
             <Experience/>
             <Work/>
             <Education/>
             <Contact/>
             <Footer/>
           </div>

      </div>
      </div>
    </>
  )
    
}

export default App ;
