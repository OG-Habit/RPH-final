"use client";
import { containerMargin } from '@/utils';
import { Container, Grid, Typography } from '@mui/material';
import React from 'react'

interface Props {
    first: React.ReactNode;
    second: React.ReactNode;
    leftRatio?: number;
    rightRatio?: number;
    spacing?: number;
}

export default function DoubleTextBlock({first, second, leftRatio=6, rightRatio=6, spacing=24}: Props) {

    return (
        <Container maxWidth='lg' sx={containerMargin}>
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
    )
}
