

import { SkillsInfo } from "../../constant";
import  Tilt from "react-parallax-tilt" ;

const Skill = () => {

    return (

        <section
            id="skill"
            className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient"
        >

            {/* section title */}
            <div className="text-center mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-white">Skills</h2>
                <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
            </div>

            <div className="text-center">
                <p className="text-gray-400 mt-4 text-lg font-semibold">
                    A collection of my technical skills and expertise honed through various projects and experiences
                </p>
            </div>


            {/* skill category */}

            <div
                className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between"
            >
                {
                    SkillsInfo.map((el, index) => {

                        return     <div
                            key={index + Math.random()}
                            className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white 
                                      shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
                                      >

                                        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
                                            {el.title}</h3>

                                            {/* skill item  */}

                                        <Tilt 
                                         
                                        tiltMaxAngleX={20} 
                                        tiltMaxAngleY={20} 
                                        perspective={1000}
                                        scale={1.05}
                                        transitionSpeed={1500}
                                        gyroscope = {true}
                                        >

                                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">                                                  
                                                  {
                                                       el.skills.map((skill, index)=>{                                                                                                                        
                                                         return   <div 
                                                            key={skill.name}
                                                            className="flex item-center justify-center space-x-2 bg-transparent border-2 rounded-2xl py-2 px-2 sm:py-2 sm:px-2 text-center"
                                                            >
                                                                <img 
                                                                className="w-6 h-6 sm:w-8 sm:h-8"
                                                                src={skill.logo} alt={skill.name}/>
                                                                <span className="text-xs sm:text-sm text-gray-300">{skill.name}</span>
                                                            </div>
                                                 })                                                
                                                  }                                                
                                        </div>
                                         </Tilt>

                        </div>

                    })
                }

            </div>


        </section>
    )




}

export default Skill;