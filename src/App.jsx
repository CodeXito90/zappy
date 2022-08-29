import React from 'react'


import styles from './style'
import { Navbar, Hero, About, About2, Button, Footer, Section2,  } from './components'

const App = () => {
  return (
    <div className="bg-white w-full overflow-hidden w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter} bg-gradient-to-t from-slate-900 to-slate-900`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>

      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>          
          <Section2/> 
        </div>
      </div>

      <div className={`bg-white w-full overflow-hidden w-full overflow-hidden ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>          
          <About/> 
          <About2/>                            
          <Footer/> 
        </div>
      </div>

    </div>
  )
}

export default App