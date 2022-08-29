import React from 'react'
import {motion} from 'framer-motion'

const Button = ({ }) => {
  return (
    <motion.button whileHover={{ scale: 1.1 }} 
        whileTap={{ scale: 0.9 }} 
        className={` w-[90px] h-[30px] rounded-full 
        bg-navbar-btn font-poppins font-medium text-[18px] 
        text-white outline-none mr-5`}>
        Tutors
    </motion.button>
  )
}

export default Button