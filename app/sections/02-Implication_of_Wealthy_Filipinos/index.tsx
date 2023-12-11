"use client"

import SectionHeader from "@/common/SectionHeader"
import { title } from "process"
import Image from "next/image"
import { motion } from "framer-motion"
import ReactCardFlip from 'react-card-flip';
import { CSSProperties, useState } from "react"
import Card from "@mui/material/Card/Card"
import FlipCard from "@/common/FlipCard"

export default function Second() {
    const [isFlipped1, setIsFlipped1] = useState(false);
    const [isFlipped2, setIsFlipped2] = useState(false);
    const [isFlipped3, setIsFlipped3] = useState(false);

    const handleFlip1 = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        setIsFlipped1(!isFlipped1)
    }
    const handleFlip2 = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        setIsFlipped2(!isFlipped2)
    }
    const handleFlip3 = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        setIsFlipped3(!isFlipped3)
    }

    const style: CSSProperties = {
        position: 'relative',
        display: 'flex',
        
        justifyContent: 'center',
        height: '400px',
        width: '340px',
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
        padding: '16px',
        overflow: 'hidden',
        borderRadius: '10px',
        transition: 'all 0.5s cubic-bezier(0.23, 1, 0.320, 1)'
    }

    const styleBack: CSSProperties= {
        ...style,
        alignSelf: 'center',
        backgroundColor: 'rgb(33,33,33)',
        padding: '32px',
        color: '#e8e8e8',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
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
                    title: "Implication of Wealthy Filipinos", 
                    subtitle:"June, 1896", 
                    description:""
            }}/>     
            <div className="flex flex-wrap justify-evenly mb-12">
                <div className="flex">
                    <Image
                        src="/img/andres-bonifacio.png"
                        height={100}
                        width={250}
                        alt="Andres Bonifacio"
                    />
                    <Image
                        src="/img/pio-valenzuela.png"
                        height={100}
                        width={250}
                        alt="Pio Valenzuela"
                    />  
                </div>
                <div className="flex flex-col justify-evenly bg-white" style={{ 
                    width: '700px'
                 }}>
                    <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero self-center">
                        A Fatal Forgery of {"   "}
                        <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                        Signatures
                        </span>
                    </h1>
                    <p className="mb-8 text-base leading-relaxed text-titlebgdark dark:text-waterloo">
                        Andres Bonifacio (left) and Pio Valenzuela (right) were key figures in the Philippine struggle for independence against Spanish colonial rule. Bonifacio, born in 1863, was a revolutionary leader and the founder of the secret society Katipunan, which played a crucial role in the Philippine Revolution. He advocated for social equality and led the fight for independence until his tragic death in 1897. Pio Valenzuela, on the other hand, was a physician and a member of the Katipunan. He was tasked with a significant mission—to seek the support of the revolutionary movement in the provinces. 
                    </p>
                </div>
            </div>   
            <div style={{ 
                display: 'flex',
                justifyContent: 'space-around'
             }}>
                <ReactCardFlip isFlipped={isFlipped1}  
                    flipDirection="horizontal">
                    <FlipCard style={style} action={handleFlip1}
                        content={(
                            <div style={{ 
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}>
                                <h1 style={{
                                    fontWeight: 700,
                                    fontSize: "22px"
                                }}>
                                    1. Katipunan Discovered!
                                </h1>
                                <Image
                                    src="/img/kalayaan.png"
                                    height={200}
                                    width={225}
                                    alt="Kalayaan newspaper"
                                />  
                            </div>
                        )}>
                    </FlipCard>

                    <FlipCard style={styleBack} action={handleFlip1}
                        content={(
                            <div>
                                <p style={{
                                    textAlign: 'left'
                                }}>
                                    The first edition of Kalayaan, published on January 18, 1896, came out in March with a thousand copies distributed to Katipunan members nationwide. Only one more issue was released as the Spanish authorities exposed the Katipunan. Emilio Jacinto considered Kalayaan's publication a significant achievement for the secret chamber, involving himself, Bonifacio, and Jacinto before his departure.
                                </p>
                            </div>
                        )}>
                    </FlipCard>
                </ReactCardFlip>     
                <ReactCardFlip isFlipped={isFlipped2}  
                    flipDirection="horizontal">
                    <FlipCard style={style} action={handleFlip2}
                        content={(
                            <div style={{ 
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}>
                                <h1 style={{
                                    fontWeight: 700,
                                    fontSize: "22px"
                                }}>
                                    2. Implicating Rich Filipinos
                                </h1>
                                <Image
                                    src="/img/forgery.png"
                                    height={100}
                                    width={405}
                                    alt="Act of forging"
                                    style={{
                                        paddingTop: '30px'
                                    }}
                                />  
                            </div>
                        )}>
                    </FlipCard>

                    <FlipCard style={styleBack} action={handleFlip2}
                        content={(
                            <div>
                                <p style={{
                                    textAlign: 'left'
                                }}>
                                    In a secret chamber meeting in July 1896, they planned to assassinate the Spanish Augustinian friar who exposed the Katipunan, but the mission failed. Valenzuela also asserted that after the Katipunan's discovery, he and Bonifacio distributed letters implicating wealthy Filipinos who had refused financial support to the organization.
                                </p>
                            </div>
                        )}>
                    </FlipCard>
                </ReactCardFlip>       
                <ReactCardFlip isFlipped={isFlipped3}  
                    flipDirection="horizontal">
                    <FlipCard style={style} action={handleFlip3}
                        content={(
                            <div style={{ 
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}>
                                <h1 style={{
                                    fontWeight: 700,
                                    fontSize: "22px"
                                }}>
                                    3. Francisco Luis Roxas
                                </h1>
                                <Image
                                    src="/img/13-martyrs.png"
                                    height={100}
                                    width={275}
                                    alt="Act of forging"
                                />  
                            </div>
                        )}>
                    </FlipCard>

                    <FlipCard style={styleBack} action={handleFlip3}
                        content={(
                            <div>
                                <p style={{
                                    textAlign: 'left',
                                    fontSize: '15px'
                                }}>
                                    Born in 1851 in Binondo, Manila, he came from a wealthy family and held influential roles in the Spanish colonial government. While he supported the Liga Filipina financially, he refused to assist the Katipunan due to his reformist stance. In June 1896, Benedicto Nijaga attempted to seek his support, but Roxas threatened to report the movement. To counter this, Bonifacio created a fake Katipunan membership list to implicate Roxas and other wealthy oppositionists. Both were later arrested following the discovery of the Katipunan.
                                </p>
                            </div>
                        )}>
                    </FlipCard>
                </ReactCardFlip>   
            </div>            
             
        </motion.div>
    )
}