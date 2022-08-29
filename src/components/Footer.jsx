import styles from "../style"
import { logo } from "../assets"
import {  } from "../constants"

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`} >
    <div className={`${styles.flexCenter} md:flex-row flex-col mb-8 w-full `} >
      <div className="flex-2 flex flex-col justify-start mr-10" >
        <img src={logo} alt="zappy" className="w-[266px] h-[72px] object-contain " />        
      </div>

     </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-black">
        Copyright Ⓒ 2022 Zappy. All Rights Reserved.
      </p>

  
    </div>
  </section>
);

export default Footer;