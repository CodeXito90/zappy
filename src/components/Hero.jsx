import React from 'react'
import styles from '../style'
import {motion} from 'framer-motion'
import { apple, google, notis, zapFrontScreen, zapLogin, zappy2phones } from '../assets'
import Button from './Button'



const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};
 // This is the Hero text section where we will add gradient effects to our 
 // title text & hero image. Tailwind css makes it easy to style straight inside the components, 
 // the classnames used here can be found in the '../style.js' file

const Hero = () => (            //The classnames look confusing but once you play around it with it you will get used to it in no time
  <section id="home" className={`flex md:flex-row flex-col bg-gradient-to-t from-pink-600 via-pink-500 to-slate-900 ${styles.paddingY}`}>
      <motion.div 
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}>
          <p className={`${styles.paragraph}`} >Välkommen till</p>
          <div className='flex flex-row justify-between items-center w-full'>          
            <h1 className='flex-1 text-center font-poppins font-semibold ss:text-[63px] text-[52px] text-white 
            ss:leading-[100px] leading-[75px] pb-5'> DIN DIGITALA LÄXHJÄLP </h1>               
          </div>
            <a href=''>
              <motion.button 
              whileHover={{ scale: 1.1 }}  
              whileTap={{ scale: 0.9 }} 
              className={`animate-bounce w-[90px] h-[30px] rounded-full bg-hero-btn font-poppins font-medium text-[18px] text-white outline-none mr-5 ${styles}`}>
              Läs mer
              </motion.button>
            </a>
              <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
              <img src={apple} alt="apple_store" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer ' />
              <img src={google} alt="google_play" className='w-[128px] h-[42px] object-contain  cursor-pointer ' />                           
        </div>             
      </motion.div>       

      <motion.div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <motion.img src={notis} alt="login screen" className='first__img w-[35%] relative z-[1]'  
          whileInView={{ y: [+100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
        />
        <motion.img src={zapLogin} alt="" className='second__img w-[35%] relative z-[0] '
          whileInView={{ y: [+100, 0], opacity: [0, 1] }}
          transition={{ duration: 1.5 }}
        />             
      </motion.div>  
   
   
  </section> 
    
  
)

export default Hero