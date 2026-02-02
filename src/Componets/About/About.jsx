import { Typewriter } from 'react-simple-typewriter';
import  Tilt from "react-parallax-tilt"

const About = () => {
  return (
    <>
      <section
        id="about"
        className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
      >
        <div className="flex flex-col-reverse md:flex-row justify-between items-start">
          {/* Left content */}


          <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
            {/* Greeting */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-text-dark dark:text-text-dark text-text-light mb-2 leading-tight">
              Hi I am
            </h1>

            {/* Name */}
            <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold text-text-dark dark:text-text-dark text-text-light mb-4 leading-tight">
              Shubham Kushwaha
            </h2>

            {/* Skill with typing effect */}
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary-green leading-tight">
              <span className="text-text-dark dark:text-text-dark text-text-light">I am a </span>
              <span className="text-primary-green">
                <Typewriter
                  words={['Full Stack Developer',  'Coder', 'Web Tech Learner']}
                  loop={false}
                  cursor
                  cursorStyle="_"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </span>
            </h3>
            
             
             {/* About Me Paragraph */} 
             <p className='text-base sm:text-lg md:text-lg text-gray-600 dark:text-gray-400 mb-10 mt-8 leading-relaxed'>
           Hi, I'm Shubham Kushwaha — a MERN stack developer with a strong focus on building modern, responsive, and user-friendly web applications. I enjoy learning new skills, solving real-world problems, and continuously improving my development experience
             </p>
             
             



         {/* Resume Button */}
          <a href="https://drive.google.com/file/d/1UPb3Lh_siof9svINwlHbkxvpVIOmqWfl/view?usp=sharing"
          target='_blank'
          className='  shadow-green-400 shadow-md hover:shadow-green-400 hover:shadow-lg
           inline-block text-black   py-3 px-8  rounded-full mt-5 text-lg font-bold transition duration-300 hover:scale-105 bg-primary-green'
         
          > 
          DOWNLOAD CV
          </a>

          </div>

          {/* Right Content */}
          <div className='md:w-1/2 flex justify-center md:justify-end'>
          <Tilt 
          tiltReverse={true}
          tiltMaxAngleX={20} 
          tiltMaxAngleY={20} 
          perspective={1000}
          scale={1.05}
          transitionSpeed={1500}
          gyroscope = {true}
          className='w-[80%] h-[80%]  border-4 border-primary-green rounded-3xl'
          >
            <img className='w-[100%] h-[100%] rounded-full object-cover drop-shadow-[0_10px_20px_rgba(0,255,136,0.5)]'
            src="/profileimg.jpeg" alt='Shubham Kushwaha - Full Stack Developer Profile Picture' title='Shubham Kushwaha - MERN Stack Developer' loading="eager" />
        </Tilt>
          </div>


        </div>
      </section>
    </>
  );
};

export default About;
