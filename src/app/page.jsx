"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
const Homepage = () => {

// https://drive.google.com/file/d/1YRY1aKJgzdooGE1qKrcrRjtf1wwnTGIS/view?usp=sharing
const handleDownloadCV = () => {
  // Your download CV function

    // Replace '/path/to/resume.pdf' with the actual path to your PDF resume
    const resumeUrl = 'https://drive.google.com/file/d/1YRY1aKJgzdooGE1qKrcrRjtf1wwnTGIS/view?usp=sharing';
  
    // Create a hidden anchor element
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'resume.pdf'; // Specify the filename for the downloaded file
    link.style.display = 'none';
    
    // Add the anchor element to the document
    document.body.appendChild(link);
    
    // Trigger a click on the anchor element
    link.click();
    
    // Remove the anchor element from the document
    document.body.removeChild(link);
};

  return (<motion.div className="h-[100vh] w-[100vw]" 
  initial={{y:"-200vh"}} 
  transition={{duration:1}}
  animate={{y:"0%"}}>

<div className="flex flex-col h-full gap-y-20 lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
  {/* IMAGE CONTAINER

   */}
  
<div className="h-1/2 relative lg:h-full lg:w-1/2">
  <Image src="https://i.ibb.co/RzVHFjz/hero.png" alt="" fill className="object-contain"/>
</div>
  {/* TEXT CONTAINER */}
  <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
{/* TITLE */}
<h1 className="text-4xl md:text-6xl font-bold">
Crafting Digital Experience, Designing Tommorow.
</h1>
{/* DESC.
<p> */}
  <p className="text-md">
  Welcome to my digital canvas,where innovative and creativity 
  converege.With a keen eye for aesthetics and a mastery of code, my 
  portfolio showcase a diverse collection of projects that reflect my
  commitment to excellence.
  </p>
{/* BUTTONS */}
<div className="w-full flex gap-4">
<Link href='/portfolio'>
<button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">View My Work</button>
</Link>
  
  
  <button
  onClick={handleDownloadCV}
   className="p-4 rounded-lg ring-1 ring-black">Resume</button>

</div>
  </div>
  
  </div>;
  </motion.div>)
  
};

export default Homepage;


