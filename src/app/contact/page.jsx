"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import emailjs from '@emailjs/browser';
import { useState,useRef } from "react";
import { TypeAnimation } from "react-type-animation";
const ContactPage = () => {

  const text="Say Hello"
  const [success,setSuccess]=useState(false)
  const [error,setError]=useState(false)
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <motion.div className="h-full" 
    initial={{y:"-200vh"}} 
    transition={{duration:1}}
    animate={{y:"0%"}}>

<div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
{/* TEXT CONTAINER */}
<div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">

  <div className="flex items-center justify-center">
{/* {text.split("").map((letter,index)=>(
  <motion.span
  initial={{opacity:1}}
  transition={{
    duration:3,
    repeat:Infinity,
    delay:index*0.1,
  }}
  animate={{opacity:0}}
  key={letter.id}
  >
    {letter} 
  </motion.span>
))} */}
<div className="h-1/2 lg:h-full lg:w-1/2 text-black flex items-center justify-center text-6xl ">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            <TypeAnimation
              sequence={[
                "Hello", 1000, // English
                "નમસ્તે",1000,
                "ਸਤ ਸ੍ਰੀ ਅਕਾਲ",1000,//punjabi
                "হ্যালো", 1000, // Tamil                
               
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              repeatType="reverse"
            />
          </motion.div>
        </div>

<Image src='/emoji.png' width={100} height={100} alt="emoji"/>
  </div>
</div>
{/* FORM CONTAINER */}
<form 
onSubmit={sendEmail}
ref={form}
 className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 gap-8 justify-center p-24 rounded-xl text-xl flex flex-col ">
<span>Dear Mohit Kumar,</span>
<textarea
     rows={6}
            className="bg-transparent border-b-2 border-b-black outline-none resize-none"
            name="user_message"
          />
<span>My mail address is:</span>
<input type="text"
name="user_email"
className="bg-transparent border-b-2 border-b-black outline-none"

/>
<span>Regards</span>
<button
className="bg-purple-200 rounded font-semibold text-gray-600 p-4"
>Send</button>
{success && (
            <span className="text-green-600 font-semibold">
              Your message has been sent successfully!
            </span>
          ) }
          {error && (
            <span className="text-red-600 font-semibold">
              Something went wrong!
            </span>
          )}
</form>
</div>
  
    </motion.div>
  )
}

export default ContactPage