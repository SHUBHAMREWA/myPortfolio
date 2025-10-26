import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import { ClipLoader } from "react-spinners";

const Contact = () => {
    const form = useRef();
    const [isSend, setisSend] = useState(false);
    const [loading , setLoading] = useState(false)

    const sendEmail = (e) => { 
        e.preventDefault();
        setLoading(true)
        
        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(() => {
            setisSend(true);
            setLoading(false)
            form.current.reset();
            
            toast.success("Message sent successfully ✅", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeButton: true,
                pauseOnHover: true,
                theme: "dark"
            });
        })
        .catch((error) => {
           setLoading(false)
            console.error("EmailJS Error:", error);
            
            toast.error("Failed to send message. Please try again!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeButton: true,
                pauseOnHover: true,
                theme: "dark"
            });
        });
    }

    return (
        <>
            <section 
                id="contact"
                className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
            >
                <ToastContainer />

                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-text-dark dark:text-text-dark text-text-light">Contact</h2>
                    <div className="w-32 h-1 bg-primary-green mx-auto mt-4"></div>
                    <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg font-semibold">
                        I'd love to hear from you—reach out for any opportunities or questions! 
                    </p>
                </div>

                {/* Contact Form */}
                <div className="mt-8 p-6 w-full max-w-md bg-card-light dark:bg-[#0d081f] border border-primary-green rounded-lg">
                    <h3 className="text-xl font-semibold text-text-light dark:text-text-dark text-center">
                        Connect With Me 🚀
                    </h3>

                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className="mt-4 flex flex-col text-text-light dark:text-text-dark space-y-4"
                    >
                        <input 
                            type="email" 
                            name="user_email" 
                            placeholder="Your Email"
                            className="w-full p-3 rounded-md bg-white dark:bg-[#131025] text-text-light dark:text-text-dark border border-primary-green focus:outline-none focus:border-dark-green"
                            required 
                        />

                        <input 
                            type="text" 
                            name="user_name" 
                            placeholder="Your Name"
                            className="w-full p-3 rounded-md bg-white dark:bg-[#131025] text-text-light dark:text-text-dark border border-primary-green focus:outline-none focus:border-dark-green"
                            required 
                        />

                        <input 
                            type="text" 
                            name="subject" 
                            placeholder="Subject"
                            className="w-full p-3 rounded-md bg-white dark:bg-[#131025] text-text-light dark:text-text-dark border border-primary-green focus:outline-none focus:border-dark-green"
                            required 
                        />

                        <textarea
                            className="w-full p-3 rounded-md bg-white dark:bg-[#131025] text-text-light dark:text-text-dark border border-primary-green focus:outline-none focus:border-dark-green"
                            name="message" 
                            placeholder="Message" 
                            rows={4}
                            required
                        />

                        {/* Send Button */}
                        <button  
                            
                            disabled={loading}
                            type="submit"
                            className="w-full font-semibold bg-primary-green py-3 text-text-light dark:text-text-dark rounded-md hover:opacity-80 transition duration-500"
                        >
                            { loading ?  <ClipLoader size={22}/> : "Send Message"}
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
}

export default Contact;