import { ModeNight } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, Switch, Typography } from '@mui/material'
import React from 'react'

const PostHead = ({setMode, mode}) => {
  return (
    <Box sx={{margin:2, padding:2}} display='flex' justifyContent='space-between' alignItems='center' >
        <Typography variant='h6' fontWeight={100}>My Feeds</Typography>
        <List sx={{display: {xs: 'block', sm: 'none'}}}>
            <ListItem disablePadding>
                <ListItemButton component='a' href='#sample-list'>
                    <ListItemIcon>
                    <ModeNight />
                    </ListItemIcon>
                    <Switch onChange={e=>setMode(mode === 'light' ? 'dark' : 'light')}/>
                </ListItemButton>
            </ListItem>
        </List>
    </Box>
  )
}

export default PostHead