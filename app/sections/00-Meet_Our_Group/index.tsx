import { motion } from 'framer-motion'
import React from 'react'
import { Grid, Card, CardContent, Typography, Avatar, Paper } from '@mui/material';
import TitleHeader from '@/common/TitleHeader';


export default function MeetOurGroup() {
    const members = [
        { name: 'Jade Andrie Rosales', role: 'Developer', avatar: '/img/jade.png' },
        { name: 'Christian Anthony Stewart', role: 'Developer', avatar: '/img/stew.png' },
        { name: 'Ivan Ric Woogue', role: 'Developer', avatar: '/img/woogs.png' },
      ];

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
                        <Grid container justifyContent="center" alignItems="center" sx={{marginTop: 16}}>
                            <Grid item>
                            <h1 className="mb-5 text-3xl font-bold text-black dark:text-white xl:text-hero self-center">
                                Meet Our Team
                            </h1>
                            </Grid>
                        </Grid>
                    </motion.div>
               
            <Grid container spacing={3} justifyContent="center">
            {members.map((member, index) => (
                <Grid item key={index}>
                <Card sx={{ width: 300 }}>
                    <img alt={member.name} src={member.avatar} className="w-full h-[320px] object-cover object-center"/>
                    <CardContent className="text-center">
                    <Typography variant="subtitle1" component="div">
                        {member.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {member.role}
                    </Typography>
                    </CardContent>
                </Card>
                </Grid>
            ))}
            </Grid>

    </motion.div>
  )
}
