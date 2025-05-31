

import { projects } from "../../constant";
import { useState } from "react";

const Work = () => {

  const [selectedProject  , setSelectedProject]  = useState(null)

    const handleOpenModal = (el)=>{
        setSelectedProject(el)
    }

    const handleCloseModel = (el)  =>{
          setSelectedProject(null)
    }

    return (

        <section
            id="projects"
            className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
        >

            {/* section title */}

            <div className="text-center mb-16 ">
                <h2 className="text-4xl text-white font-bold">
                    PROJECTS
                </h2>
                <div className="w-32 h-1 bg-purple-500 mx-auto mt-4">        </div>
                <p
                    className="text-gray-400 mt-4 text-xl font-semibold"
                >A showcase of the projects I have worked on, highlighting my skills and experience in various technologies</p>
            </div>



            {/* project grid */}


            <div
                className="grid gap-12 grid-cols-1 md:grid-cols-3 lg:gird-cols-3">

                {
                    projects.map((el, index) => {
                        return (
                            <div 
                            key={index}
                            onClick={ ()=>handleOpenModal(el) }
                                className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl  shadow-2xl overflow-hidden cursor-pointer 
                                    hover:shadow-purple-800 hover:translate-y-2  transition-transform duration-300"
                            >
                                <div className="p-4">
                                    <img src={el.image} alt="" className="w-full h-48 object-cover rounded-xl" />
                                </div>
                             
                             <div className="p-6 text-center">
                                <h3 className="text-2xl text-white mb-2 font-bold">
                                    {el.title}
                                </h3>
                                 <p className="text-gray-500 pt-5 mb-4 line-clamp-3">{el.description}</p>
                                 <div className="mb-4">
                                    {
                                        el.tags.map((el ,index)=>{
                                             return <span key={index} className="inline-block bg-[#251f38] 
                                              text-xs font-semibold text-purple-500 rounded px-2 py-1 mr-2 mb-2"> {el}</span>
                                        })
                                    }
                                 </div>
                             </div>
                              

                            </div>
                        )

                    })
                }

            </div>



{/* modal Container */}

       {selectedProject && (

        <div className="fixed inset-0 z-50 flex items-center bg-black justify-center bg-opacity-90">

            <div 
            className="bg-gray-900 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative"
            >
                <div className="flex justify-end p-4">
                    <button 
                    onClick={handleCloseModel}
                    className="text-white text-3xl font-bold hover:text-purple-500 "
                    > 
                    &times;
                    </button>
                </div>

                <div className="flex flex-col">
                    <div className="w-100 flex justify-center bg-gray-900 px-4">
                          <img  height={120}
                          className=" w-[80%] sm:w-[90%]  object-contain rounded-xl shadow-2xl "
                          src={selectedProject.image} alt="selected project_title" />
                    </div>

                    <div className="lg:p-8 p-6">
                        <h3 className="text-3xl text-white mb-2 font-bold">
                            {selectedProject.title}
                        </h3>
                        <p className="text-gray-500 pt-5 mb-4 ">
                            {selectedProject.description }
                        </p>
                        <div className="mb-4">
                                    {
                                        selectedProject.tags.map((el ,index)=>{
                                             return <span key={index} className="inline-block bg-[#251f38] 
                                               font-semibold text-purple-500 rounded px-2 py-1 mr-2 mb-2"> {el}</span>
                                        })
                                    }
                                 </div>

                                 <div className="mb-4 flex gap-4">
                                     <a 
                                     className="w-1/2 bg-gray-800  transition duration-300 hover:bg-purple-800 text-gray-400 text-center lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl font-semibold "
                                     href={selectedProject.github} target="_blank"> View Code</a>
                                     <a 
                                     className="w-1/2 bg-gray-800  transition duration-300 hover:bg-purple-800 text-gray-400 text-center lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl font-semibold "
                                     href={selectedProject.webapp} target="_blank">View Live </a>


                                 </div>

                    </div>
                </div>

                <div>
                    
                </div>

            </div>

        </div>

       )

        }

        </section>

    )



}

export default Work;