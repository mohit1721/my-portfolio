"use client"
import Brain from '../components/brain'
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import React, { useRef } from 'react'

const AboutPage = () => {
const containerRef=useRef()
const {scrollYProgress}=useScroll({container:containerRef})

const skillRef=useRef()
 // const isSkillRefInView = useInView(skillRef, {once:true});
const isSkillRefInView=useInView(skillRef,{margin:"-100px"})//{once:true}
// exp.
const experienceRef=useRef()
const isExperienceRefInView=useInView(experienceRef,{margin:"-100px"})//{once:true}

  return (
    <motion.div 
    className="h-full" 
  initial={{y:"-200vh"}} 
  transition={{duration:1}}
  animate={{y:"0%"}}>
{/* CONTAINER */}

<div className="h-full overflow-scroll lg:flex" ref={containerRef}>
{/* TEXT CONTAINER */}
<div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-4 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
{/* BIOGRAPHY CONTAINER*/}
<div className="flex flex-col gap-1 justify-center">
 {/* BIOGRAPHY IMAGE */}
{/* <a href="https://ibb.co/fkDbmcZ"><img src="https://i.ibb.co/0CskPw1/picofme.png" alt="picofme" border="0"></a> */}
    <Image
              src="https://i.ibb.co/0CskPw1/picofme.png"
              alt="my_pic"
              width={512}
              height={512}
              className="w-28 h-28 rounded-full object-cover"
            />

<h1 className="font-bold text-2xl">BIOGRAPHY</h1>
<p className="text-lg">
Full-stack developer specializing in the MERN stack with expertise in building high-performance,
 scalable applications. Strong background in secure application development with experience in optimizing API performance, secure authentication, and database management. 
Passionate about solving complex problems and continuously improving software efficiency.
   </p>
<span className="italic">For seamless experiences, we bridge vision with reality.</span>
{/* SVG SIGNATURE--> <a href="https://ibb.co/JtcLt1m"><img src="https://i.ibb.co/W5H95hG/sign.png" alt="sign" border="0"></a>*/}
<Image src='https://i.ibb.co/W5H95hG/sign.png' height={80} width={198} className="self-end top-0" alt="mysign"/>
  {/* BIOGRAPHY SCROLL SVG */}
  <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
              className=""
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>

</div>
{/* SKILLS CONTAINER*/}

<div className="flex flex-col gap-12 justify-center" ref={skillRef}>
<motion.h1
 initial={{x:"-300px"}} 
 animate={isSkillRefInView?{x:0}:{}} 
transition={{delay:0.2}}
className="font-bold text-2xl">SKILLS</motion.h1>
{/* SKILLS LIST */}
<motion.div
 initial={{x:"-300px"}} animate={isSkillRefInView?{x:0}:{}} 
transition={{delay:0.2}} className=" flex gap-4 flex-wrap ">
  <div className="rounded p-2 text-sm shadow-b shadow-md shadow-slate-500 cursor-pointer bg-black text-white hover:text-black hover:bg-white">
    HTML
  </div>
  <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:text-black hover:bg-white">
    CSS
  </div>
  <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:text-black hover:bg-white">
    Javascript
  </div>
  <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:text-black hover:bg-white">
    React Js
  </div>
  <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:text-black hover:bg-white">
    Mongo DB
  </div>
  <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:text-black hover:bg-white">
    Express
  </div>
  <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:text-black hover:bg-white">
    Node Js
  </div>
  <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:text-black hover:bg-white">
    TailwindCSS
  </div>
  <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:text-black hover:bg-white">
    Boootstrap
  </div>
  <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:text-black hover:bg-white">
   C/C++
  </div>
  <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
  SQL
</div>
  <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
  Git
</div>
<div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
  Redux
</div>
<div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
  Framer Motion
</div>
</motion.div>

{/* SCROLL SVG */}
  {/* SKILL SCROLL SVG */}
  {/* <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
  </motion.svg> */}

{/* <div>
  
</div> */}

</div>
{/* EXPERIENCE CONTAINER*/}



</div>
{/* SVG CONTAINER */}
<div className="hidden lg:block w-1/3 xl:w-1/2 sticky top-0 z-30">
  <Brain scrollYProgress={scrollYProgress} />
</div>

</div>
  </motion.div>
  )
}

export default AboutPage
// **
 