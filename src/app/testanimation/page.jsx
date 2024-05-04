"use client"
import React from 'react'
import {motion} from 'framer-motion'
const page = () => {

const variants={
    varient1:{
        x:400,
        y:300,
        opacity:0.5,
        transition:{
            duration:2,
        }
    },
    varient2:{
        x:100,
        y:-300,
        rotation:90,
    },

}
/*

*/

  return (
    <div className='flex h-full items-center justify-center'>
    <motion.div className='w-96 h-96 bg-red-300 rounded-md' 
    // initial={{x:-100}} 
    // animate={{x:400,y:300,opacity:0.5}} 
    transition={{delay:2,duration:4}}

    variants={variants}
    animate="varient1"
    ></motion.div>



    </div>
  )
}

export default page