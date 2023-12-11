import SectionHeader from "@/common/SectionHeader";
import { motion } from "framer-motion";


export default function Eighth() {
    
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
            viewport={{ once: false }}>
            <SectionHeader
                headerInfo={{
                    title: "Rivalry between Andres and Emilio", 
                    subtitle:"March, 1897", 
                    description:""
            }}/>
        </motion.div>
    )
}