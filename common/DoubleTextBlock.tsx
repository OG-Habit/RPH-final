"use client";
import { containerMargin } from '@/utils';
import { Container, Grid, Typography } from '@mui/material';
import React from 'react'

interface Props {
    first: React.ReactNode;
    second: React.ReactNode;
}

export default function DoubleTextBlock({first, second}: Props) {

    return (
        <Container maxWidth='md' sx={containerMargin}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    {first}
                </Grid>
                <Grid item xs={6}>
                    {second}
                </Grid> 
            </Grid>
        </Container>
    )
}
