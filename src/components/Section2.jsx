import { zappyApp, gp15, apple, google } from '../assets'
import styles, { layout } from '../style'
import { motion } from 'framer-motion'

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

const Section2 = () => (     
    <section id='product'>   
      <div className='bg-gradient-to-t from-slate-900 via-pink-500 to-pink-600'>
        <div className='text-center'>
          <motion.h2 
          whileInView={{ y: [+100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className={`${styles.heading2}`}>Framtidens läxhjälp är här 
          <p className={`${styles.paragraph}`} >Visst är det jobbigt att fastna med en läxa? Visst är det frustrerande när det inte  <br className={`${styles.flexCenter} sm:block hidden`}/>finns hjälp i närheten? Oroa inte dig, vi finns här för dig!</p>
          </motion.h2>
        </div>

        <div className={`${styles.flexCenter} font-poppins font-semibold xs:text-[38px] text-[30px] text-white xs:leading-[76.8px] leading-[66.8px] `} >        
          <motion.img src={gp15} alt="zappy App" className='w-[35%] relative z-[5] '
          whileInView={{ y: [+100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}/>
          <div className={layout.sectionInfo2}>        
          <h2 className={styles.heading2} >Zappy är revolutionerade och helt digital <br className='sm:block hidden'/></h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`} >Visst är det jobbigt att fastna med en läxa? Visst är det frustrerande när det inte finns hjälp i närheten? Oroa inte dig, vi finns här för dig!</p>
          <p className={`${styles.paragraph} max-w-[470px] mt-5 mb-5`}>läxhjälp för grundskole- och gymnasieelever. Hjälp och stöd brukar inte alltid finnas.</p>
        </div>
        </div>
      
      </div>
    </section>
  )


export default Section2