"use client"

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from 'react'
import Image from "next/image";
import Link from "next/link";
const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Studynotion",
    desc: "StudyNotion is a versatile and intuitive ed-tech platform that enables users to create, consume, and rate educational content. The platform is built using the MERN stack, which includes ReactJS, NodeJS, MongoDB, and ExpressJS.",
    img: "https://i.ibb.co/sPwfv16/studynotion-laptop.jpg",
    link: "https://mystudynotion.vercel.app/",
  },
  {
    id: 2,
    color: "from-blue-300 to-green-300",
    title: "Zcrum",
    desc: "Zscrum is a modern project management platform built using cutting-edge technologies like Next.js, Prisma, NeonDB, and Clerk. Designed as a clone of Jira, Zscrum aims to help teams and organizations to track project progress, collaborate and streamline workflows—just like Jira, but with a more customizable and scalable solution.",
    img: "https://i.ibb.co/0DbLZsZ/zcrum.jpg",
    link: "https://zescrum.vercel.app/",
  },
  {
    id: 3,
    color: "from-blue-300 to-violet-300",
    title: "Code Sync",
    desc: "Code Sync is a realtime collaborative code editor which syncs code in realtime ",
    img: "https://i.ibb.co/JqB2GXX/codeSync.jpg",
    link: "https://codes-sync.vercel.app",
  },
  {
    id: 4,
    color: "from-blue-300 to-violet-300",
    title: "Dev Detective",
    desc: "Dev Detective is a web application designed to quickly retrieve information about GitHub users.Users can enter a GitHub username into the search bar, triggering a request to the GitHub API. The application then displays relevant user data ",
    img: "https://i.ibb.co/7R6wYLh/dev-det.jpg",
    link: "https://mohit1721.github.io/DevDetective/",
  },
  {
    id: 5,
    color: "from-violet-300 to-purple-300",
    title: "Password Generator",
    desc: "Create secure passwords with custom options. HTML for structure, CSS for style, and JavaScript for generating random passwords. Simple, effective, and user-friendly.",
    img: "https://i.ibb.co/vztCCrH/pwd-gen.jpg",
    link: "https://mohit1721.github.io/Password-generator/",
  },

  {
    id: 6,
    color: "from-red-300 to-blue-300",
    title: "Weather App",
    desc: "Our weather app is a user-friendly tool designed to provide real-time weather information based on the user's current location. With a clean and intuitive interface, users can easily access crucial weather data at their fingertips.",
    img: "https://i.ibb.co/30tPGnB/weather-laptop.jpg",
    link: "https://mohit1721.github.io/WeatherApp/",
  },
  {
    id: 7,
    color: "from-red-300 to-blue-300",
    title: "Tic Tae Toe",
    desc: "Ultimate Tic-Tac-Toe brings the classic game of Tic-Tac-Toe to life with a modern twist. This web-based game offers players an engaging and interactive experience, featuring a sleek design and intuitive gameplay.",
    img: "https://i.ibb.co/xmWYZXJ/tic-tae.jpg",
    link: "https://mohit1721.github.io/Tic-Tae-Toe/",
  },
  
  {
    id: 8,
    color: "from-red-300 to-blue-300",
    title: "Space X",
    desc: "Welcome to SpaceX Mission Control! Experience the thrill of space exploration right from your browser. Our landing page provides you with the latest updates, mission information, and a glimpse into the future of space travel.",
    img: "https://i.ibb.co/Fn0gH36/space-X-laptop.jpg",
    link: "https://mohit1721.github.io/spaxe-X/",
  },
  {
    id: 9,
    color: "from-blue-300 to-green-300",
    title: "Animated Product",
    desc: "Dynamic chair animation showcasing CSS skills",
    img: "https://i.ibb.co/zQ2VxCt/chair.jpg",
    link: "https://mohit1721.github.io/MODERN-CHAIR/",
  },
];
const PortfolioPage = () => {
const ref=useRef()
const {scrollYProgress}=useScroll({target:ref})
const x=useTransform(scrollYProgress,[0,1],["0%","-80%"])


  return (
    <motion.div className="h-screen w-screen" 
  initial={{y:"-200vh"}} 
  transition={{duration:1}}
  animate={{y:"0%"}}>
<div className=" h-[600vh] relative" ref={ref}>
<div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
My Works
</div>
{/* MOHIT */}
<div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-4xl xl:text-6xl mt-[120px] lg:mt-[180px]">
                    {item.title}
                  </h1>
                  <Link href={item.link} className="relative object-contain w-80 h-56 md:w-96 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill loading="lazy" />
                  </Link>
                  <p className="w-80 text-sm lg:h-80 h-40 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                 
                </div>
              </div>
            ))}
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-red-300 to-green-300" />
          </motion.div>
        </div>


</div>
<div className="w-screen h-screen mt-11 flex flex-col gap-16 items-center justify-center text-center">
<h1 className="text-8xl">Do you have a project?</h1>

<div className="relative">
<motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link href="/contact">
        <button 
        className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
        >Hire Me</button>
          </Link>
</div>
</div>
  </motion.div>
  )
}

export default PortfolioPage