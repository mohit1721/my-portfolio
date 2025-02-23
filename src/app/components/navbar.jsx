// "use client"

// import Link from 'next/link'
// import React, { useState } from 'react'
// import NavLink from './navLink';
// import Image from 'next/image';
// import {motion, stagger} from "framer-motion"
// const links=[
//     {url:"/",title:"Home"},
//     {url:"/about",title:"About"},
//     {url:"/portfolio",title:"Portfolio"},
//     {url:"/contact",title:"Contact"},
// ];

// const Navbar = () => {
// const [open,setOpen] = useState(false);
// // ye humburger menu ko X ka css h[[using framer-motion]]
// const topVariants={
//     closed:{
//         rotate:0,

//     },
//     opened:{
//         rotate:45,
//         backgroundColor:"rgb(255,255,255)"

//     },

// }

// const centerVariants={
//     closed:{
//         rotate:0,
//         opacity:1,
//     },
//     opened:{
//         opacity:0,

//     },

// }
// const bottomVariants={
//     closed:{
//         rotate:0,

//     },
//     opened:{
//         rotate:-45,
//         backgroundColor:"rgb(255,255,255)",

//     },

// }
// const listVariants={
//     closed:{
//         x:"100vw",
//     },
//     opened:{
//         x:0,
//         transition:{
//             when:"beforeChildren",
//             staggerChildren:0.15,//this is for each item delay acc. to parent delay
//         },
//     }
// }
// const listItemVariants={
// closed:{
//     x:-10,
//     opacity:0,
// },
// opened:{
//     x:0,
//    opacity:1,
// },


// }

//   return (
//     <div className='h-full flex items-center justify-between px-6 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl'>
//     {/* LINKS */}
//     <div className='hidden md:flex gap-4 w-1/3'>
//     {
//         links.map((link)=>(
//         <NavLink link={link} key={link.title}/>
//     ))
//     }
//     </div>
    
//     {/* LOGO */}
//     <div className='md:hidden lg:flex xl:w-1/3 xl:justify-center'>
//         <Link href='/' className='text-sm bg-black rounded-md p-1 gap-x-2 font-semibold flex items-center justify-center'>
//            <span className='text-white'>Mohit</span> 
//            <span className='w-12 h-8 rounded bg-white text-black flex items-center  justify-center'> .dev</span>
//         </Link>
//     </div>

// <div className='hidden md:flex gap-4 w-1/3'>
// <Link href='https://github.com/mohit1721'> 
//     <Image src="https://i.ibb.co/jLnxSBV/github.png" alt="g" height={24} width={24}  />
// </Link>
// <Link href='https://www.linkedin.com/in/mohit-kumar-mandal-4344b3229/'>
//     <Image src="https://i.ibb.co/6mBVzYY/linkedin.png"  alt="g" height={24} width={24}  />
// </Link>
// <Link href='https://leetcode.com/u/mohit1702/'>
//     <Image src="https://i.ibb.co/NYhFgxp/leetcode.png" alt="g" height={24} width={24}  />
// </Link>
// <Link href='https://linktr.ee/mk1702'>
//     <Image src="https://i.ibb.co/bvnYMpZ/linktree.png" alt="g" height={24} width={24}  />
// </Link>
// </div>

//     {/* RESPONSIVE MENU */}
//     <div className='md:hidden '>
//     {/* MENU BUTTON */}
//     <button className='w-10 h-8 flex flex-col justify-between z-50 relative' 
//     onClick={(()=>setOpen(prev=>!prev))}
//     >
// <motion.div variants={topVariants}
// animate={open?"opened" : "closed"}
//  className='w-10 h-1 bg-black rounded origin-left' ></motion.div>
// <motion.div variants={centerVariants}
// animate={open?"opened" : "closed"}
//  className='w-10 h-1 bg-black rounded' ></motion.div>
// <motion.div variants={bottomVariants}
// animate={open?"opened" : "closed"}
//  className='w-10 h-1 bg-black rounded origin-left' ></motion.div>
//     </button>
// {/* MENU LIST */}

// {
//    open && (<motion.div variants={listVariants} initial="closed" animate="opened" className='absolute top-0 left-0 z-40 w-full h-full bg-black text-yellow-50 flex flex-col items-center justify-center gap-8 text-4xl '>
// {
//     links.map((link)=>(
//         <motion.div variants={listItemVariants} key={link.title} className=''>
//         <Link href={link.url} key={link.title}>{link.title}</Link>
//         </motion.div>
//     ))
// }

// </motion.div>)}

//     </div>
    
//     </div>
//   )
// }

// export default Navbar
// /*** */


"use client";

import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./navLink";
import Image from "next/image";
import { motion } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Menu button animations
  const topVariants = {
    closed: { rotate: 0 },
    opened: { rotate: 45, backgroundColor: "rgb(255,255,255)" },
  };

  const centerVariants = {
    closed: { opacity: 1 },
    opened: { opacity: 0 },
  };

  const bottomVariants = {
    closed: { rotate: 0 },
    opened: { rotate: -45, backgroundColor: "rgb(255,255,255)" },
  };

  // Mobile menu animations
  const listVariants = {
    closed: { x: "100vw" },
    opened: {
      x: 0,
      transition: { when: "beforeChildren", staggerChildren: 0.15 },
    },
  };

  const listItemVariants = {
    closed: { x: -10, opacity: 0 },
    opened: { x: 0, opacity: 1 },
  };

  return (
    <div className="fixed top-0 left-0 w-full h-16 backdrop-blur-lg bg-white/20 shadow-md z-50 flex items-center justify-between px-6 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* LINKS (Hidden on mobile) */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>

      {/* LOGO */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md px-3 py-1 flex items-center gap-x-2 font-semibold"
        >
          <span className="text-white">Mohit</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
            .dev
          </span>
        </Link>
      </div>

      {/* SOCIAL LINKS (Hidden on mobile) */}
      <div className="hidden md:flex gap-4 w-1/3">
        {[
          { href: "https://github.com/mohit1721", src: "https://i.ibb.co/jLnxSBV/github.png" },
          { href: "https://www.linkedin.com/in/mohit-kumar-mandal-4344b3229/", src: "https://i.ibb.co/6mBVzYY/linkedin.png" },
          { href: "https://leetcode.com/u/mohit1702/", src: "https://i.ibb.co/NYhFgxp/leetcode.png" },
          { href: "https://linktr.ee/mk1702", src: "https://i.ibb.co/bvnYMpZ/linktree.png" },
        ].map((social, index) => (
          <Link href={social.href} key={index}>
            <Image src={social.src} alt="social" height={24} width={24} />
          </Link>
        ))}
      </div>

      {/* RESPONSIVE MENU (Mobile Only) */}
      <div className="md:hidden z-50">
        {/* MENU BUTTON */}
        <button
          className="w-10 h-8 flex flex-col justify-between relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>

        {/* MENU LIST */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-full h-screen bg-black text-yellow-50 flex flex-col items-center justify-center gap-8 text-4xl"
          >
            {links.map((link) => (
              <motion.div variants={listItemVariants} key={link.title}>
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
