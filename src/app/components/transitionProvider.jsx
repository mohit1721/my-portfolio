"use client"
import React from 'react'
import Navbar from "./navbar";
import { AnimatePresence } from 'framer-motion'
import {motion} from "framer-motion"
import { usePathname } from 'next/navigation';
const TransitionProvider = ({children}) => {
    // 
    const pathName=usePathname();//jb route change hoga tbhi trigger krega ye..so use key..
  return (
    <AnimatePresence mode='wait'>
    <div key={pathName} className="w-full min-h-screen bg-gradient-to-b from-blue-100 to-red-100 ">
      {/* 1st layer */}
      <motion.div className='h-full w-full fixed bg-black rounded-b-[100px] z-40'
    animate={{height:"0vh"}}
    exit={{height:"140vh"}}
    transition={{duration:0.5,ease:"easeOut"}}
      />
      {/* text-layer */}
       <motion.div className='fixed m-auto text-center top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit'
    initial={{opacity:1}}
    animate={{opacity:0}}
    exit={{opacity:0}}
    transition={{duration:0.6,ease:"easeOut"}}
      >
        {pathName.substring(1)}
      </motion.div>
{/* 2nd layer->in background */}
      <motion.div className='h-full w-full fixed bg-black rounded-t-[100px] bottom-0 z-40'
    initial={{height:"140vh"}}
    animate={{height:"0vh",transition:{delay:0.5,}}}
    
      />
      {/* //black backgroundColor for transition ,for diff. routes..about/contact.. */}
       <div className="h-20">
          <Navbar />
        </div>
        <div className="h-full min-h-screen md:h-[100vh]">{children}</div>
     
    </div>
    
    </AnimatePresence>
  )
}

export default TransitionProvider