// "use client"

// import { motion, useScroll, useTransform } from "framer-motion";
// import React, { useRef } from 'react'
// import Image from "next/image";
// import Link from "next/link";
//  import projects from "./projects";
// const PortfolioPage = () => {
// const ref=useRef()
// const {scrollYProgress}=useScroll({target:ref})
// const x=useTransform(scrollYProgress,[0,1],["0%","-80%"])

// // h-[calc(100vh-6rem)]
//   return (
//     <motion.div className="min-h-screen w-screen" 
//   initial={{y:"-200vh"}} 
//   transition={{duration:1}}
//   animate={{y:"0%"}}>
// <div className=" h-[600vh] relative" ref={ref}>
// <div className="w-screen min-h-screen flex items-center justify-center text-8xl text-center">
// My Works
// </div>
// {/* MOHIT */}
// <div className="sticky top-16 flex h-screen gap-4 items-center overflow-hidden">
//           <motion.div style={{ x }} className="flex">
//           <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-red-300 to-purple-300" />
//           <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />

//             <div className="min-h-screen min-w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
//             {projects?.map((item,idx) => (
//               <div
//                 className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
//                 key={idx}
//               >
//                 <div className="flex flex-col gap-8 text-white">
//                   <h1 className="text-xl font-bold md:text-4xl lg:text-4xl xl:text-6xl mt-[120px] lg:mt-[180px]">
//                     {item.title}
//                   </h1>
//                   <Link href={item.link} className="relative object-contain w-80 h-36 md:w-96 lg:w-[450px] lg:h-[250px] xl:w-[500px] xl:h-[420px]">
//                     <Image src={item.img} alt="" fill loading="lazy" />
//                   </Link>
//                   <p className="w-80 text-sm lg:h-80 h-40 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px]">
//                     {item.desc}
//                   </p>
                 
//                 </div>
//               </div>
//             ))}
//             <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-red-300 to-green-300" />
//           </motion.div>
//         </div>


// </div>
// <div className="w-screen h-screen mt-11 flex flex-col gap-16 items-center justify-center text-center">
// <h1 className="text-8xl">Do you have a project?</h1>

// <div className="relative">
// <motion.svg
//             animate={{ rotate: 360 }}
//             transition={{ duration: 8, ease: "linear", repeat: Infinity }}
//             viewBox="0 0 300 300"
//             className="w-64 h-64 md:w-[500px] md:h-[500px] "
//           >
//             <defs>
//               <path
//                 id="circlePath"
//                 d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
//               />
//             </defs>
//             <text fill="#000">
//               <textPath xlinkHref="#circlePath" className="text-xl">
//                 Front-end Developer and UI Designer
//               </textPath>
//             </text>
//           </motion.svg>
//           <Link href="/contact">
//         <button 
//         className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
//         >Hire Me</button>
//           </Link>
// </div>
// </div>
//   </motion.div>
//   )
// }

// export default PortfolioPage

// /**
//  */
//  */
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import projects from "./projects";

const PortfolioPage = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-screen w-screen bg-transparent bg-opacity-50 backdrop-blur-lg"
      initial={{ y: "-200vh" }}
      transition={{ duration: 1 }}
      animate={{ y: "0%" }}
    >
      {/* Scrollable Container h-[calc(100vh-2rem)] */}
      <div className="h-[600vh] relative" ref={ref}>
        {/* Heading */}
        <div className="w-screen h-screen -top-16 flex items-center justify-center text-8xl text-center">
          My Works
        </div>

        {/* Sticky Scrolling Projects Section */}
        {/* Sticky Scrolling Projects Section */}
        <div className="sticky top-16 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            {/* Background Gradient Blocks */}
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-red-300 to-purple-300" />
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />

            {/* Project Cards (Consistent Size & Truncated Description) */}
            {projects?.map((item, idx) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color} p-8`}
                key={idx}
              >
                <div className="flex flex-col gap-8 w-[350px] text-white md:w-[500px] text-center bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-lg shadow-xl">
                  {/* Project Title */}
                  <h1 className="text-xl font-bold md:text-4xl lg:text-4xl xl:text-5xl">
                    {item.title}
                  </h1>

                  {/* Project Image (Fixed Size) */}
                  <Link href={item.link} className="relative w-[250px] md:w-[400px] h-[250px]">
                    <Image src={item.img} alt={item.title} fill className="rounded-lg object-cover" loading="lazy" />
                  </Link>

                  {/* Truncated Project Description */}
                  <p className="text-sm md:text-lg w-full line-clamp-3">
                    {item.desc.length > 150 ? item.desc.slice(0, 150) + "..." : item.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Final Gradient Block */}
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-red-300 to-green-300" />
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
          </motion.div>
        </div>
      </div>

      {/* Hire Me Section */}
      <div className="w-screen bg-white h-screen overflow-y-hidden flex flex-col items-center justify-center text-center">
        <h1 className="text-8xl font-bold flex top-16 mt-12">Do you have a project?</h1>

        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px]"
          >
            <defs>
              <path id="circlePath" d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 " />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link href="/contact">
            <button className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center">
              Hire Me
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
