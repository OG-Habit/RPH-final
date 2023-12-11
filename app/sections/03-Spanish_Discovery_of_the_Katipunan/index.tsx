"use client"
import DoubleTextBlock from '@/common/DoubleTextBlock'
import SectionHeader from '@/common/SectionHeader'
import { Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import TitleHeader from '@/common/TitleHeader'
import SingleTextBlock from '@/common/SingleTextBlock'
import CommonFlipCard from '@/common/CommonFlipCard'
import ListBlock from '@/common/ListBlock'
import PopupModal from '@/common/PopupModal'
import { motion } from 'framer-motion'

export default function Third() {
    const versionInfo = [
        [
            'Desirous of getting a salary increase at the expense of the other, they floated rumors that put both of them in a bad light.',
            'Upon learning that Patiño got the salary  increase, an envious De la Cruz wrote a derogatory letter to Joaquin Lafon, the general manager of the printing house, accusing Patiño of stealing some office supplies.',
            'Lafon acted on the accusation by inspecting the lockers of Patiño and other workers, which led him to discover subversive materials, weapons, and other paraphernalia in the lockers of the Katipuneros.',
            'This incident impelled the Spanish authorities to conduct more searches that led to the out-and-out discovery of the Katipunan.'
        ],
        [
            'Patiño disclosed the existence of the Katipunan to his sister Honoria, who in turn reported it to Sor Teresa, the mother portress (madre portera) of the orphanage where she (Honoria) was staying.',
            'The nun relayed the information to Fr. Mariano Gil, who right away mobilized troops that raided the printing house of Diario de Manila.',
        ],
        [
            'Patiño’s wife regarded her husband’s involvement in the anti-Spanish movement as a mortal sin.',
            'Bothered by her conscience, she confessed what she knew about the Katipunan to Father Gil.',
            'The priest instructed Patiño’s wife to bring her husband to him so he could give her husband absolution.',
            'Patiño went to see Father Gil, and in the course of their conversation he divulged what he knew about the Katipunan.',
            'This disclosure resulted in the raid of the printing house of Diario de Manila.'
        ]
    ]

    const versionCard = [
        {
            title: 'Version 1',
            description: (
                <>
                The first version attributes the discovery to the rivalry between Patiño and Apolonio de la Cruz, both of whom were employees of Diario de Manila.
                <PopupModal buttonText='View more' title="More Information about Version 1"
                content={(
                    <ListBlock list={versionInfo[0]}/>
                )}/>
                </>)
        },
        {
            title: 'Version 2',
            description: (
            <>
            In the second version of the discovery, Ventura recounts the story that Agoncillo (1956/2001, 142–45, 339–43) told in The Revolt of the Masses.
            <PopupModal buttonText='View more' title="More Information about Version 2"
            content={(
                <ListBlock list={versionInfo[1]}/>
            )}/>
            </>)
        },
        {
            title: 'Version 3',
            description: (
                <>
                In the third version of Ventura’s account, Patiño and Father Gil were again the main characters, but this time it was Patiño’s wife who played a pivotal role.
                <PopupModal buttonText='View more' title="More Information about Version 3"
                content={(
                    <ListBlock list={versionInfo[2]}/>
                )}/>
                </>)
        },
    ]

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
                title: "Spanish “Discovery” of the Katipunan", 
                subtitle:"1896", 
                description: ""
            }}/>
        <DoubleTextBlock
            first={
                <>
                <TitleHeader>The "Discovery" of the Katipunan</TitleHeader>
                <Typography>Sylvia Mendez Ventura's exploration of the "discovery" of the Katipunan sheds light on the various narratives surrounding this crucial event in Philippine history. The Katipunan was a secret revolutionary society that played a significant role in the fight against Spanish colonial rule. Teodoro Patiño, Fr. Mariano Gil, and other individuals linked to Andres Bonifacio are key figures in these narratives. Their roles in the events leading to the "discovery" of the Katipunan vary across the three versions presented by Ventura.</Typography>
                </>
            }
            second={
                <Paper><Image src="/img/sylvia_mendez.png" width={500} height={500} alt="Sylvia Mendez Portrait" className="w-full h-[320px] object-cover object-top"/></Paper>
            }
            leftRatio={8}
            rightRatio={4}
            />
            <Grid container justifyContent="center" alignItems="center">
                <Grid item>
                    <TitleHeader>The Three Versions</TitleHeader>
                </Grid>
            </Grid>
            <SingleTextBlock>
            <Grid
                container
                spacing={6}
                justifyContent="center"
                >
                    {versionCard.map((fact, index) => (
                        <Grid key={index} item md={6} lg={4}>
                            <CommonFlipCard details={fact}/>
                        </Grid>
                    ))}
                </Grid>
            </SingleTextBlock>

    </motion.div>
  )
}
