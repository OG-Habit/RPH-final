import DoubleTextBlock from '@/common/DoubleTextBlock'
import SectionHeader from '@/common/SectionHeader'
import { motion } from 'framer-motion'

export default function First() {
    return (
      <motion.div
            variants={{
                hidden: {
                opacity: 0,
                y: -20,
                },
    
                visible: {
                opacity: 1,
                y: 0,
                },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}>

        <DoubleTextBlock
        first={
          <></>
        }
        second={
          <></>
        }
        leftRatio={8}
        rightRatio={4}/>    
    </motion.div>
    )
  }  