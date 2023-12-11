import SectionHeader from "@/common/SectionHeader";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import data from './data'
import FeaturesTabItem from "./FeaturesTabItem";

export default function Fourth() {
    const TAB_ONE = 'tabOne'
    const TAB_TWO = 'tabTwo'
    const TAB_THREE = 'tabThree'

    const [currentTab, setCurrentTab] = useState(TAB_ONE);
    
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
                    title: "Rizal and Katipunan Betrayed", 
                    subtitle:"November, 1896", 
                    description:""
            }}/>   

            <div className="flex flex-wrap justify-evenly mb-12">
                <div className="flex flex-col justify-evenly bg-white" style={{ 
                    width: '700px'
                 }}>
                    <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero self-center">
                        An Esteemed General Broken {"   "}
                        <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                        Under Pressure
                        </span>
                    </h1>
                    <p className="mb-8 text-base leading-relaxed text-titlebgdark dark:text-waterloo">
                        General Antonio Luna was a brilliant military strategist and one of the key figures in the Philippine Revolution against Spanish colonial rule and the subsequent Philippine-American War. Born in 1866, Luna was a pharmacist, a physician, and a military officer. He played a crucial role in the establishment of the First Philippine Republic and served as the Chief of War Operations during the Philippine-American War.
                    </p>
                </div>
                <div className="flex">
                    <Image
                        src="/img/antonio-luna.png"
                        height={100}
                        width={250}
                        alt="Antonio Luna"
                    />
                </div>
            </div>  
            <div className="flex flex-wrap items-start justify-evenly mb-12">
                <Image
                    src="/img/price-of-freedom.png"
                    height={300}
                    width={280}
                    alt="The Price of Freedom (La Senda Del Sacrificio): Episodes and Anecdotes of Our Struggles for Freedom"
                />
                {/* <!-- Tab Menues Start --> */}
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
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="animate_top flex flex-col flex-wrap justify-start rounded-[10px] border border-stroke bg-white shadow-solid-5 dark:border-strokedark dark:bg-blacksection dark:shadow-solid-6 md:flex-nowrap xl:mb-13"
                    >
                        <div
                        onClick={() => setCurrentTab("tabOne")}
                        className={`relative flex w-full cursor-pointer items-center gap-4 border-b border-stroke px-6 py-2 last:border-0 dark:border-strokedark md:w-auto md:border-0 xl:px-13.5 xl:py-5 ${
                            currentTab === TAB_ONE
                            ? "active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-primary"
                            : ""
                        }`}
                        >
                            <div className="flex h-12.5 w-12.5 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                                <p className="text-metatitle3 font-medium text-black dark:text-white">
                                01
                                </p>
                            </div>
                            <div className="md:w-3/5 lg:w-auto">
                                <button className="text-sm font-medium text-black dark:text-white xl:text-regular">
                                Quote from the Book
                                </button>
                            </div>
                        </div>
                        <div
                        onClick={() => setCurrentTab("tabTwo")}
                        className={`relative flex w-full cursor-pointer items-center gap-4 border-b border-stroke px-6 py-2 last:border-0 dark:border-strokedark md:w-auto md:border-0 xl:px-13.5 xl:py-5 ${
                            currentTab === TAB_TWO
                            ? "active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-primary"
                            : ""
                        }`}
                        >
                            <div className="flex h-12.5 w-12.5 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                                <p className="text-metatitle3 font-medium text-black dark:text-white">
                                02
                                </p>
                            </div>
                            <div className="md:w-3/5 lg:w-auto">
                                <button className="text-sm font-medium text-black dark:text-white xl:text-regular">
                                A Stab in the Back
                                </button>
                            </div>
                        </div>
                        <div
                        onClick={() => setCurrentTab("tabThree")}
                        className={`relative flex w-full cursor-pointer items-center gap-4 border-b border-stroke px-6 py-2 last:border-0 dark:border-strokedark md:w-auto md:border-0 xl:px-13.5 xl:py-5 ${
                            currentTab === TAB_THREE
                            ? "active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-primary"
                            : ""
                        }`}
                        >
                            <div className="flex h-12.5 w-12.5 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                                <p className="text-metatitle3 font-medium text-black dark:text-white">
                                03
                                </p>
                            </div>
                            <div className="md:w-3/5 lg:w-auto">
                                <button className="text-sm font-medium text-black dark:text-white xl:text-regular">
                                The Aftermath
                                </button>
                            </div>
                        </div>
                </motion.div>
                {/* <!-- Tab Menues End --> */}
                {/* <!-- Tab Content Start --> */}
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
                        transition={{ duration: 0.5, delay: 0.5 }}
                        viewport={{ once: false }}
                        className="animate_top bg-white"
                        style={{ 
                            width: '400px'
                         }}
                    >
                        {data.map((feature, key) => (
                            <div
                                className={feature.id === currentTab ? "block" : "hidden"}
                                key={key}
                            >
                                <FeaturesTabItem featureTab={feature} />
                            </div>
                        ))}
                </motion.div>
                {/* <!-- Tab Content End --> */}
                {/* <div className="relative mx-auto px-4 md:px-8 2xl:px-0 w-96">
                </div>               */}
            </div>  

        </motion.div>
    )
}