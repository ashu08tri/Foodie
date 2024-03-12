"use client"
import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';



function Swipe() {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ['2 1', '2.5 1']
    })


    return (
        <motion.div ref={ref} style={{
            opacity: scrollYProgress,
            scale: scrollYProgress,
            animationDuration: '2s',
            padding: '20px 10px',
            position: 'absolute',
            top: 30
        }}
        animate={{x: [0,33,0]}}
        transition={{repeat: Infinity }}
        >
            <span
            style={{display: 'flex', alignItems: 'center', color: '#f95959',fontSize: 'larger', fontWeight: 'bold'}}>
              Swipe<KeyboardArrowRightIcon />
            </span>

            </motion.div>
      
    )
}

export default Swipe;