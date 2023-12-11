import React from 'react'
import { List, ListItem, Typography } from '@mui/material';

interface Props {
    list: string[]
}

export default function ListBlock({list}: Props) {
  return (
    <List>
        {list.map((item, index) => (
            <ListItem key={index} className="flex items-start">
                <span className='mr-1.5'>•</span>
                <Typography>{item}</Typography>
            </ListItem>
        ))}
    </List>
  )
}
