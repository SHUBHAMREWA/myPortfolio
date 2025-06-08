import { Typewriter } from 'react-simple-typewriter';
import  Tilt from "react-parallax-tilt"
import profileImg  from "../../assets/profileimg.png"

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
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
              Hi I am
            </h1>

            {/* Name */}
            <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Shubham Kushwaha
            </h2>

            {/* Skill with typing effect */}
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#8245ec] leading-tight">
              <span className="text-white">I am a </span>
              <span className="text-[#8245ec]">
                <Typewriter
                  words={['Web Developer', 'React Developer', 'Coder', 'Web Tech Learner']}
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
             <p className='text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed'>
             Hi, I'm Shubham Kushwaha — a passionate web developer specializing in React.js and modern web technologies. 
             I enjoy learning new skills and solving problems daily.
              Currently, I Focused on frontend, exploring Node.js and modern web tech.

             </p>

         {/* Resume Button */}
          <a href="https://drive.google.com/file/d/1njgKQ-N_dfzu6PWu4QeQI1e32iBf_EWy/view?usp=sharing"
          target='_blank'
          className='inline-block text-white  py-3 px-8  rounded-full mt-5 text-lg font-bold transition duration-300 hover:scale-105'
          style={{
            background : "linear-gradient(90deg)",
            boxShadow :"0 0 2px #8245ec , 0 0 2px #8245ec, 0 0 40px #8245ec"
          }}
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
          className='w-90 h-90  border-4 border-gray-400 rounded-3xl'
          >
            <img className='w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130, 69 ,236 ,0.5)]'
            src={profileImg}/>  
        </Tilt>
          </div>


        </div>
      </section>
    </>
  );
};

export default About;
