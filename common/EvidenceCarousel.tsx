"use client";
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Container } from '@mui/material'
import { containerMargin, itemsType } from '@/utils';

export default function EvidenceCarousel({items}: itemsType) {
  return (
    <Container maxWidth='lg' sx={containerMargin}>
        <Carousel>
            {
                items.map( (item, i) => 
                (
                    <Paper key={i} className="relative h-[480px]">
                        <img src={item.src} alt={item.name} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 flex flex-col justify-end p-4 bg-black bg-opacity-50">
                            <p className="text-white">{item.description}</p>
                        </div>
                    </Paper>
                ))
            }
        </Carousel>
    </Container>
  )
}
