import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from "../styles";
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';



const ServiceCard = ({ index, title, icon }) => {
  return(
    <Tilt className="xs:w-[210px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        
        <div options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[260px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/> 
          <h3 className='tex-white  text-[20px] font-bold text-center '>{title}</h3>
        </div>
        </motion.div> 
    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()} >
      <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider sm:py-0">Introduction</p>
      <h2 className="text-white font-black md:text-[40px] sm:text-[50px] xs:text-[40px] text-[30px] sm:py-0">Overview.</h2>
    </motion.div>

    <motion.p 
    variants={fadeIn("", "", 0.1, 1)}
    className='mt-1 text-secondary text-[16px] max-w-2xl leading-[30px]'
    >
      I'm a skilled web developer with experience in JavaScript, and expertise in frameworks like React, three.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user friendly solutions that solve real-world problems. Let's work together te bring your ideas to life!
    </motion.p>

    <div className="mt-20 flex flex-wrap gap-8">
      {services.map((service, index) => (
        <ServiceCard key={service.title} index= {index} {...service} />
      ))}
    </div>
    </>
  )
}

 export default SectionWrapper(About, "about")