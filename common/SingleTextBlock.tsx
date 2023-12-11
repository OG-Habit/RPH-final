import { containerMargin } from '@/utils';
import { Container, Typography } from '@mui/material'
import React from 'react'

interface Props {
    reactWindow?: () => Window;
    children: React.ReactNode;
  }

export default function SingleTextBlock(props: Props) {
    const { children, reactWindow } = props;

  return (
    <Container maxWidth='md' sx={containerMargin}>
        <Typography>
            {children}
        </Typography>
    </Container>
  )
}
