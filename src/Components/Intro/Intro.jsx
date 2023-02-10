import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
// import {motion} from 'framer-motion';
//import { useMotionValue, useTransform } from "framer-motion"
// import { motion } from 'framer-motion/dist/framer-motion'
// import {AnimatePresence, motion} from "framer-motion/dist/framer-motion";


const Intro = () => {
    
    //const transition = {duration : 2, type: 'spring'}

  return (
    <div className="intro">
        {/* this is left side */}
        <div className="i-left">
            <div className="i-name">
                <span>Hello I Am</span>
                <span>Suraj Gupta</span>
                <span>I am Fresher, Currently I am learning Reactjs and working as a intern for Strugend.</span>
            </div>
            <button className="button i-button">Hire me</button>
            <div className="i-icons">
                <a href="https://github.com/">
                    <img src={Github} alt="" />
                </a>
                <a href="https://www.linkedin.com/feed/">
                    <img src={Linkedin} alt="" />
                </a>
                <a href="https://www.instagram.com/">
                    <img src={Instagram} alt="" />
                </a>
            </div>
        </div>
        {/* This is right side */}
        <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <img
        //motion.
        // initial={{left: '-36%'}}
        // whileInView= {{left: '-24'}}
        // transition={transition}

        src={glassesimoji} alt="" />
        <div style={{top: '6%', left: '63%'}}>
            <FloatingDiv image={Crown} txt1='web' txt2='Developer'/>
        </div>
        <div style={{top: '18rem', left: '1.3rem'}}>
            <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award'/>
        </div>
        {/* blur div */}
        <div className="blur" style={{background: "rgba(238 210 255)"}}></div>
        <div className="blur" style={{background: '#C1F5FF', top: '17rem', width: '30rem', height: '11rem'}}></div>
        </div>
    </div>
  )
}

export default Intro;