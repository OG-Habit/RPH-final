import CommonFramerMotion from '@/common/CommonFramerMotion'
import SectionHeader from '@/common/SectionHeader'
import { Container, Grid, Paper } from '@mui/material'
import Image from 'next/image'
import React from 'react'


export default function Seventh() {
  return (
    <div>
        <CommonFramerMotion>
            <SectionHeader 
                headerInfo={{
                    title: "Death of Andres Bonifacio", 
                    subtitle:"May 10, 1897", 
                    description: ""
                }}/>
            <Container maxWidth='lg' sx={{marginBottom: 8}}>
                <Paper className="relative h-[320px] mb-9">
                    <img src='/img/andresbanner.png' alt='andres bonifacio banner' className="w-full h-full object-cover object-top" />
                </Paper>
                <Grid
                container
                spacing={6}
                justifyContent="center"
                >
                    <Grid item md={6} lg={4}>
                        <Paper>
                            <img src='/img/andresbanner.png' alt='andres bonifacio banner'/>
                        </Paper>
                    </Grid>
                    <Grid item md={6} lg={4}>
                        <Paper>
                            <img src='/img/andresbanner.png' alt='andres bonifacio banner'/>
                        </Paper>
                    </Grid>
                    <Grid item md={6} lg={4}>
                        <Paper>
                            <img src='/img/andresbanner.png' alt='andres bonifacio banner'/>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </CommonFramerMotion>
    </div>
  )
}
