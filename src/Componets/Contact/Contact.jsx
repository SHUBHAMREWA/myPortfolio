import { useRef , useState } from "react";
import {ToastContainer , toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import emailjs from "@emailjs/browser"




const Contact = ()=>{

    const form = useRef()

    const [isSend , setisSend] = useState(false);


    const sendEmail = (e)=>{ 
         e.preventDefault() ;

          emailjs.
          sendForm(
            "service_uj2x0qk" ,
            "template_d5hbdas" ,
            form.current , 
            "znKFTVgTZj5gxe8k0"
          ).then(()=> {
              setisSend(true)
              form.current.reset() 
              toast.success("message send successfully ✅" , {
                position : "top-right" ,
                autoClose  : 3000 ,
                hideProgressBar  :false ,
                closeButton : true ,
                pauseOnHover : true ,
                theme : "dark" 
              }) ,
              (error)=>{
                  toast.error("Error Sending Message" , error) ;
                  toast.error("Failed to Send message please try Again !" , {
                    position : "top-right" ,
                autoClose  : 3000 ,
                hideProgressBar  :false ,
                closeButton : true ,
                pauseOnHover : true ,
                theme : "dark" 
                  })
              }
          })
    }

return (
    <>

    <section 
            id="contact"
            className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]" >

              <ToastContainer/>

   {/* Section Title */}

      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">Contact</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
         I'd love to hear from you—reach out for any opportunities or questions! 
        </p>
      </div>

      {/* Contact Form */}

       <div className="mt-8 p-6 w-full  max-w-md bg-[#0d081f] border border-gray-700 rounded-lg">
        <h3 className="text-xl font-semibold  text-white text-center">
            Connect With Me 🚀
        </h3>

        <form
         ref={form}
         onSubmit={sendEmail}
          className="mt-4 flex flex-col text-white space-y-4">
            <input type="email" name="user_email" placeholder="your Email"
            className = 'w—full p-3 rounded—md bg-[#131025] text—white border border-gray-600 focus:outline-none focus:border-purple-500'
             required />


            <input type="text" name="user_name" placeholder="your Name"
            className = 'w—full p-3 rounded—md bg-[#131025] text—white border border-gray-600 focus:outline-none focus:border-purple-500'
              required />


            <input type="text" name="subject" placeholder="Subject"
            className = 'w—full p-3 rounded—md bg-[#131025] text—white border border-gray-600 focus:outline-none focus:border-purple-500'
             required />

             <textarea
             className="w—full p-3 rounded—md bg-[#131025] text—white border border-gray-600 focus:outline-none focus:border-purple-500"
              name="message" placeholder="Message" rows={4}/>

              {/* send Button */}

              <button className=" w-full font-semibold bg-gradient-to-r from-purple-600 to-pink-300 py-3 text-white rounded-md hover:opacity-80 transition duration-500">Send</button>
        </form>
       </div>


    </section>
    
    </>
)



}

export default Contact ;