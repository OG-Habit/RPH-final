import EvidenceCarousel from "@/common/EvidenceCarousel";
import SectionHeader from "@/common/SectionHeader";
import { motion } from "framer-motion";
import Image from "next/image";
import fifthData from "./data";

export default function Fifth() {


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
                    title: "Rivalry between Andres and Emilio", 
                    subtitle:"March, 1897", 
                    description:""
            }}/>
            <div className="flex flex-wrap justify-evenly mb-12">
                <Image
                    src="/img/andres-bonifacio.png"
                    height={300}
                    width={280}
                    alt="Andres Bonifacio"
                />
                <div className="flex flex-col justify-evenly" style={{ 
                    width: '700px'
                 }}>
                    <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero self-center">
                        The Downfall of a {"   "}
                        <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                        Fierce Leader
                        </span>
                    </h1>
                    <p className="mb-8 text-base leading-relaxed text-titlebgdark dark:text-waterloo">
                        Andres Bonifacio, a luminary of the Philippine Revolution, stands as a symbol of unwavering dedication to the quest for independence. Born in 1863, his life was a testament to the fervor and resilience of those who yearned for freedom from Spanish colonial rule. As the founder of the Katipunan and a charismatic revolutionary leader, Bonifacio ignited the flames of rebellion, rallying a diverse group of patriots in pursuit of a shared dream. His indomitable spirit and commitment to social justice echoed in the corridors of history, leaving an enduring legacy that continues to inspire generations. Bonifacio&apos;s journey, marked by sacrifice and honor, is a cornerstone of the Philippines&apos; struggle for sovereignty, making him a revered figure in the tapestry of national heroism.
                    </p>
                </div>
            </div>  
            <div className="flex flex-wrap justify-evenly mb-12">
                <div className="flex flex-col justify-evenly" style={{ 
                    width: '700px'
                 }}>
                    <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero self-start">
                        The Politician of that {"   "}
                        <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                        Time
                        </span>
                    </h1>
                    <p className="mb-8 text-base leading-relaxed text-titlebgdark dark:text-waterloo">
                        Emilio Aguinaldo, a pivotal figure in Philippine history, emerged as a multifaceted leader during a tumultuous period of revolution and nation-building. Born in 1869, Aguinaldo would become a key architect of the Philippines&apos; path to independence. Rising through the ranks of the revolutionary movement, he navigated the complex landscape of political alliances and strategic decisions. Aguinaldo&apos;s role as the first President of the Philippines signaled the dawn of a new era, yet his legacy is entwined with the controversies and challenges that shaped the nascent republic. From the Tejeros Convention to the peaks of leadership, Aguinaldo&apos;s story unfolds as a narrative of ambition, triumph, and, ultimately, the complexities of nationhood.
                    </p>
                </div>
                <Image
                    src="/img/emilio-aguinaldo.png"
                    height={300}
                    width={280}
                    alt="Emilio Aguinaldo"
                />
            </div>
            <div>
                <EvidenceCarousel
                    items={fifthData}/>
            </div>
        </motion.div>
    )
}