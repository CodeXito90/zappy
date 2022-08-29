import { features } from '../constants';
import styles, { layout } from '../style';
import { Button } from '../components'
import { BlackTiltedTop, lower } from '../assets';
import { motion } from 'framer-motion'



const About = () => {
  return (
    <section id="whiteboard" className={`bg-white ${layout.section}`}  >
      <motion.div className={layout.sectionImgReverse}
       whileInView={{ y: [+100, 0], opacity: [0, 1] }}
       transition={{ duration: 0.5 }}
      >
        <h1 className={styles.heading3}>Witeboard
        <p className={`${styles.paragraph2}  max-w-[470px] mt-5 items-end"`}>Med hjälp av en digital whiteboard 
        kan undervisaren skicka tillbaka en lösningsförslaget till användaren. 
        </p></h1>  

      </motion.div>
      <motion.img src={lower} alt="tilted iphone" className='w-[50%] md:ml-10 ml-0 md:mt-0 mt-10 relative z-[5]'
       whileInView={{ y: [+100, 0], opacity: [0, 1] }}
       transition={{ duration: 0.5 }}
      />

      <div>

      </div>
    </section>

    
  )
}

export default About