import DoubleTextBlock from '@/common/DoubleTextBlock'
import SectionHeader from '@/common/SectionHeader'
import SingleTextBlock from '@/common/SingleTextBlock'
import TitleHeader from '@/common/TitleHeader'
import { Container, Grid, Paper } from '@mui/material'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'


export default function Seventh() {
  return (
    <div>
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
                    title: "Death of Andres Bonifacio", 
                    subtitle:"May 10, 1897", 
                    description: ""
                }}/>
            <DoubleTextBlock
                first={
                    <Paper><Image src="/img/andres-bonifacio.png" width={500} height={500} alt="Andres Bonifacio Portrait" className="w-full h-[320px] object-cover object-top"/></Paper>
                }
                second={
                    
                    <>
                        <TitleHeader>
                            Execution of Bonifacio
                        </TitleHeader>

                            The circumstances surrounding Bonifacio&apos;s execution remain a subject of historical debate. On May 10, 1897, in the mountains of Maragondon, Andres Bonifacio and his brother Procopio were executed.
                            Andres Bonifiacio was captured by Aguinaldo&apos;s men and he was executed under the order of Aguinaldo. 
                        <br/>
                        <br/>

                            The death of Bonifacio deeply impacted the revolution. It not only resulted in the loss of a prominent leader but also sparked divisions among the revolutionaries, influencing the course of Philippine history during its struggle for independence.
                    </>
                }
                leftRatio={4}
                rightRatio={8}
                />
                <br/>
            <DoubleTextBlock
            first={
                <h1 className="font-bold text-black dark:text-white xl:text-hero self-center">
                    Paintings that Depicts Bonifacio as a Heroic Leader and His Ultimate Demise
                </h1>
            }
            second={
                
                <Paper className="relative h-[320px] mb-4">
                    <img src='/img/andresbanner.png' alt='andres bonifacio banner' className="w-full h-full object-cover object-top" />
                </Paper>
            }
            leftRatio={5}
            rightRatio={7}
            />
            
            <Container maxWidth='lg' sx={{marginBottom: 4}}>
                <Grid
                container
                spacing={6}
                justifyContent="center"
                >
                    <Grid item md={6} lg={4}>
                        <Paper>
                            <img src='/img/andresdeath1.png' alt='andres death 1' className="w-full h-[220px] object-cover object-top"/>
                        </Paper>
                    </Grid>
                    <Grid item md={6} lg={4}>
                        <Paper>
                            <img src='/img/andresdeath2.png' alt='andres death 2' className="w-full h-[220px] object-cover object-top"/>
                        </Paper>
                    </Grid>
                    <Grid item md={6} lg={4}>
                        <Paper>
                            <img src='/img/andresdeath3.png' alt='andres death 3' className="w-full h-[220px] object-cover object-top"/>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </motion.div>

    </div>
  )
}
