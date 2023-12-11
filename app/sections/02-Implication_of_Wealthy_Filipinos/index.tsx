"use client"

import SectionHeader from "@/common/SectionHeader"
import { title } from "process"
import Image from "next/image"
import { motion } from "framer-motion"
import ReactCardFlip from 'react-card-flip';
import { useState } from "react"

export default function Second() {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        setIsFlipped(!isFlipped)
    }

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
            <SectionHeader 
                headerInfo={{
                    title: "Implication of Wealthy Filipinos by the Katipunan", 
                    subtitle:"June, 1896", 
                    description:""
            }}/>                    
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
            <ReactCardFlip 
                isFlipped={isFlipped} flipDirection="vertical">
                <div>
                    This is the front of the card.
                    <button onClick={handleFlip}>Click to flip</button>
                </div>

                <div>
                    This is the back of the card.
                    <button onClick={handleFlip}>Click to flip</button>
                </div>
            </ReactCardFlip>          
        </motion.div>
    )
}