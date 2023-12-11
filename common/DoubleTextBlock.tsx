"use client";
import { containerMargin } from '@/utils';
import { Container, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react'

interface Props {
    first: React.ReactNode;
    second: React.ReactNode;
    leftRatio?: number;
    rightRatio?: number;
    spacing?: number;
}

export default function DoubleTextBlock({first, second, leftRatio=6, rightRatio=6, spacing=12}: Props) {

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
            <Container maxWidth='lg' sx={containerMargin} className='bg-white'>
                <Grid
                container
                spacing={spacing}
                >
                    <Grid item md={leftRatio}>
                        {first}
                    </Grid>
                    <Grid item md={rightRatio}>
                        {second}
                    </Grid> 
                </Grid>
            </Container>
        </motion.div>
    )
}
