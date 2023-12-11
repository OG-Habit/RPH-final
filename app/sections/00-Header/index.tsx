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
        </Container>
    </Paper>
  );
};

export default Header;