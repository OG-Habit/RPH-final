import { motion } from 'framer-motion';
import React from 'react'

interface Props {
    reactWindow?: () => Window;
    children: React.ReactNode;
  }

export default function CommonFramerMotion(props: Props) {
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
        {props.children}
    </motion.div>
  )
}
