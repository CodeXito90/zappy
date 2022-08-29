import { features } from '../constants';
import styles, { layout } from '../style';
import { Button } from '.'
import { BlackTiltedBottom, BlackTiltedTop } from '../assets';
import { motion } from 'framer-motion'



const About2 = () => {
  return (
    <section id="tutors" className={`bg-white ${layout.section}`}>
       <img src={BlackTiltedBottom} alt="tilted iphone" className='w-[200px] relative-z[5]'/>
        <div className={layout.sectionImgReverse}>            
          <div className={layout.sectionInfo2} >
             <h2 className={styles.heading3}>Zappy Tutors</h2>
             <p className={`${styles.paragraph2} max-w-[470px] mt-5`}>
             Eleven behöver inte boka möte, behöver inte aktivt välja undervisare, behöver 
             inte ta sig tillbaka till skolan och behöver inte heller vara beroende av 
             föräldrars närvaro </p>         
          </div>        
        </div>     
     
        
      
    </section>

    
  )
}

export default About2