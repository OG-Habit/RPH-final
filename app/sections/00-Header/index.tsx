import React from 'react';
import { Container, Paper, Typography } from '@mui/material';

interface HeaderProps {
  text: string;
}

const Header: React.FC<HeaderProps> = ({ text }) => {
  return (
    <Paper elevation={3}>
        <Container maxWidth='lg' className='py-8'>
            <Typography className="mb-5 pr-16 text-6xl font-bold text-black dark:text-white text-6xl:text-hero self-center text-center">{text}</Typography>
            <Container maxWidth='md'>
                <p className="text-lg italic text-center">"Even during important events such as fighting for our independence,</p>
                <p className="text-lg italic text-center">politics will always find a way to seep in and corrupt those around."</p>
            </Container>
        </Container>
    </Paper>
  );
};

export default Header;