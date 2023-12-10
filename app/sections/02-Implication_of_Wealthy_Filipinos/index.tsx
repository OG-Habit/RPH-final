"use client"

import SectionHeader from "@/common/SectionHeader"
import { title } from "process"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Second() {
    return (
        <div>
            <SectionHeader 
                headerInfo={{
                    title: "Implication of Wealthy Filipinos by the Katipunan", 
                    subtitle:"June, 1896", 
                    description:""
                }}/>

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
                  viewport={{ once: true }}
                >
                <Image
                    src="/img/andres-bonifacio.png"
                    height={300}
                    width={300}
                    alt="Andres Bonifacio"
                />
                <Image
                    src="/img/pio-valenzuela.png"
                    height={300}
                    width={300}
                    alt="Pio Valenzuela"
                />


            </motion.div>
           
        </div>
    )
}