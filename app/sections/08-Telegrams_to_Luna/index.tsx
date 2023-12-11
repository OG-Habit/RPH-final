import SectionHeader from "@/common/SectionHeader";
import { motion } from "framer-motion";
import { useState } from "react";
import telegramsData from "./data";
import TelegramsTabItem from "./TelegramsTabItem";


export default function Eighth() {
    const TAB_ONE = 'tabOne'
    const TAB_TWO = 'tabTwo'
    const TAB_THREE = 'tabThree'
    const TAB_FOUR = 'tabFour'

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
            viewport={{ once: false }}>
            <SectionHeader
                headerInfo={{
                    title: "Death Summon of Luna", 
                    subtitle:"June 4, 1899", 
                    description:""
            }}/>
            <div className="relative mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
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
                    viewport={{ once: false }}
                    className="animate_top mb-15 flex flex-wrap justify-center rounded-[10px] border border-stroke bg-white shadow-solid-5 dark:border-strokedark dark:bg-blacksection dark:shadow-solid-6 md:flex-nowrap md:items-center lg:gap-7.5 xl:mb-21.5 xl:gap-12.5">
                    <div
                        onClick={() => setCurrentTab(TAB_ONE)}
                        className={`relative flex w-full cursor-pointer items-center gap-4 border-b border-stroke px-6 py-2 last:border-0 dark:border-strokedark md:w-auto md:border-0 xl:px-13.5 xl:py-5 ${
                            currentTab === TAB_ONE
                            ? "active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-primary"
                            : ""
                        }`}>
                        <div className="flex h-12.5 w-12.5 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                            <p className="text-metatitle3 font-medium text-black dark:text-white">
                            01
                            </p>
                        </div>
                        <div className="md:w-3/5 lg:w-auto">
                            <button className="text-sm font-medium text-black dark:text-white xl:text-regular">
                            Clean User Interface
                            </button>
                        </div>
                    </div>
                    <div
                        onClick={() => setCurrentTab(TAB_TWO)}
                        className={`relative flex w-full cursor-pointer items-center gap-4 border-b border-stroke px-6 py-2 last:border-0 dark:border-strokedark md:w-auto md:border-0 xl:px-13.5 xl:py-5 ${
                            currentTab === TAB_TWO
                            ? "active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-primary"
                            : ""
                        }`}>
                        <div className="flex h-12.5 w-12.5 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                            <p className="text-metatitle3 font-medium text-black dark:text-white">
                            02
                            </p>
                        </div>
                        <div className="md:w-3/5 lg:w-auto">
                            <button className="text-sm font-medium text-black dark:text-white xl:text-regular">
                            Essential Business Pages
                            </button>
                        </div>
                    </div>
                    <div
                        onClick={() => setCurrentTab(TAB_THREE)}
                        className={`relative flex w-full cursor-pointer items-center gap-4 border-b border-stroke px-6 py-2 last:border-0 dark:border-strokedark md:w-auto md:border-0 xl:px-13.5 xl:py-5 ${
                            currentTab === TAB_THREE
                            ? "active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-primary"
                            : ""
                        }`}>
                        <div className="flex h-12.5 w-12.5 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                            <p className="text-metatitle3 font-medium text-black dark:text-white">
                            03
                            </p>
                        </div>
                        <div className="md:w-3/5 lg:w-auto">
                            <button className="text-sm font-medium text-black dark:text-white xl:text-regular">
                            Fully Functional Integrations
                            </button>
                        </div>
                    </div>
                    <div
                        onClick={() => setCurrentTab(TAB_FOUR)}
                        className={`relative flex w-full cursor-pointer items-center gap-4 border-b border-stroke px-6 py-2 last:border-0 dark:border-strokedark md:w-auto md:border-0 xl:px-13.5 xl:py-5 ${
                            currentTab === TAB_FOUR
                            ? "active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-primary"
                            : ""
                        }`}>
                        <div className="flex h-12.5 w-12.5 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                            <p className="text-metatitle3 font-medium text-black dark:text-white">
                            04
                            </p>
                        </div>
                        <div className="md:w-3/5 lg:w-auto">
                            <button className="text-sm font-medium text-black dark:text-white xl:text-regular">
                            Fully Functional Integrations
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
                    className="animate_top mx-auto max-w-c-1154 mb-40"
                >
                    {telegramsData.map((tab, key) => (
                    <div
                        className={tab.id === currentTab ? "block" : "hidden"}
                        key={key}>
                        <TelegramsTabItem telegramTab={tab}/>
                    </div>
                    ))}
                </motion.div>
                {/* <!-- Tab Content End --> */}
            </div>
        </motion.div>
    )
}