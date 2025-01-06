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
    const resumeUrl = 'https://drive.google.com/file/d/1h9iFrojXni8_3nZxXGIyRTFI_iaq8Kaz/view?usp=drivesdk';
  
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

  return (<motion.div className="h-full w-full  lg:overflow-y-hidden" 
  initial={{y:"-200vh"}} 
  transition={{duration:1}}
  animate={{y:"0%"}}>

<div className="flex flex-col h-[120%] md:h-full gap-y-20 lg:flex-row px-6 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
  {/* IMAGE CONTAINER
   */}
  
<div className="md:h-1/2 h-1/4 relative lg:h-full lg:w-1/2">
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
  I am a ReactJS and MERN stack developer with a proven track record in spearheading the development of innovative projects such as StudyNotion,
aimed at transforming education. Eager to contribute to a dynamic organization with a focus on innovation and
excellence.

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
  
  </div>
  </motion.div>)
  
};

export default Homepage;


